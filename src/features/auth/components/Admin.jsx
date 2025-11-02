// src/features/admin/Admin.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, getPromotions } from "../../../shared/lib/api";

function Textarea({ value, onChange, placeholder }) {
  return (
    <textarea
      className="w-full border rounded p-2 text-sm"
      rows={3}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

// tiện ích: đánh lại id = 1..n
const renumber = (arr) => arr.map((r, i) => ({ ...r, id: i + 1 }));

export default function Admin() {
  const nav = useNavigate();
  const [rows, setRows] = useState([]); // [{uuid, id, body, is_new}]
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState("");

  // Popup state
  const [showNew, setShowNew] = useState(false);
  const [draftBody, setDraftBody] = useState("");
  const [draftUuid, setDraftUuid] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Guard admin
  useEffect(() => {
    (async () => {
      try {
        const me = await api("/auth/me");
        if (!me?.admin) nav("/admin/login", { replace: true });
      } catch {
        nav("/admin/login", { replace: true });
      }
    })();
  }, [nav]);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getPromotions();
      setRows(
        (data || []).map((p) => ({
          uuid: p.uuid,
          id: p.id, // server đã map sẵn id = 1..n
          body: p.body || "",
          is_new: !!p.is_new,
        }))
      );
    } catch (e) {
      setNote(e.message || "Load promotions failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // Tạo uuid v4 trên trình duyệt
  function generateRandomUUID() {
    return self.crypto.randomUUID;
  }

  // Nhấn nút + Thêm dòng -> mở popup, chuẩn bị uuid
  const openNewModal = () => {
    setDraftUuid(generateRandomUUID());
    setDraftBody("");
    setShowNew(true);
    setNote("");
  };

  const closeNewModal = () => {
    setShowNew(false);
    setDraftBody("");
    setDraftUuid(null);
  };

  // Submit tạo mới (POST /promotions)
  const submitCreate = async () => {
    if (!draftBody.trim()) {
      setNote("Vui lòng nhập nội dung khuyến mãi.");
      return;
    }
    setSubmitting(true);
    setNote("");
    try {
      // BE nên cho phép nhận uuid do client cấp (nếu không muốn, bỏ uuid ở body)
      const created = await api("/promotions", {
        method: "POST",
        body: {
          uuid: draftUuid, // ← FE tự generate
          body: draftBody,
          is_new: true,
        },
      });

      // prepend và đánh số lại (hoặc gọi load(); tùy Boss)
      setRows((prev) =>
        renumber([
          {
            uuid: created.uuid ?? draftUuid,
            body: created.body ?? draftBody,
            is_new: created.is_new ?? true,
          },
          ...prev,
        ])
      );

      closeNewModal();
    } catch (e) {
      setNote(e.message || "Tạo khuyến mãi thất bại");
    } finally {
      setSubmitting(false);
    }
  };

  const deleteRow = async (row) => {
    if (!confirm("Xoá khuyến mãi này?")) return;
    try {
      // Xoá theo uuid
      await api(`/promotions/${row.uuid}`, { method: "DELETE" });
      setRows((prev) => renumber(prev.filter((r) => r.uuid !== row.uuid)));
    } catch (e) {
      setNote(e.message || "Xoá thất bại");
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Quản trị khuyến mãi</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={openNewModal}
            className="px-3 py-1 rounded bg-black text-white"
          >
            + Thêm dòng
          </button>
          <button onClick={load} className="px-3 py-1 rounded border">
            Tải lại
          </button>
        </div>
      </div>

      {note && (
        <div className="rounded border border-amber-200 bg-amber-50 text-amber-800 px-3 py-2 text-sm">
          {note}
        </div>
      )}

      <div className="overflow-x-auto rounded-2xl border">
        <table className="min-w-[700px] w-full bg-white text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="p-3 w-[60px]">ID</th>
              <th className="p-3">Nội dung</th>
              <th className="p-3 w-[220px]">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="p-6 text-center text-slate-500" colSpan={3}>
                  Đang tải…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td className="p-6 text-center text-slate-500" colSpan={3}>
                  Chưa có khuyến mãi
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.uuid} className="border-t align-top">
                  <td className="p-3">{r.id}</td>
                  <td className="p-3">
                    <div className="whitespace-pre-wrap leading-relaxed">
                      {r.body || <span className="text-slate-400">—</span>}
                      <div className="mt-1 text-[11px] text-slate-400">
                        UUID: {r.uuid}
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <button
                        className="px-3 py-1 rounded border"
                        onClick={() => deleteRow(r)}
                      >
                        Xoá
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* POPUP tạo mới */}
      {showNew && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl w-full max-w-lg p-4 shadow-xl">
            <div className="text-lg font-semibold mb-2">Thêm khuyến mãi</div>
            <div className="text-xs text-slate-500 mb-2">
              UUID tạm: <code>{draftUuid}</code>
            </div>
            <Textarea
              value={draftBody}
              onChange={setDraftBody}
              placeholder="Nhập nội dung khuyến mãi…"
            />
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-3 py-1 rounded border"
                onClick={closeNewModal}
                disabled={submitting}
              >
                Huỷ
              </button>
              <button
                className="px-3 py-1 rounded bg-black text-white disabled:opacity-60"
                onClick={submitCreate}
                disabled={submitting}
              >
                {submitting ? "Đang thêm…" : "Thêm"}
              </button>
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500">
        * FE generate <b>uuid</b>, gửi <b>{`{ uuid, body, is_new }`}</b>. Bảng
        hiển thị <b>id</b> (1..n), xoá theo <b>uuid</b>.
      </p>
    </div>
  );
}
