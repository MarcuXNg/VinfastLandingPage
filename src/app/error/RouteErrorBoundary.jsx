import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function RouteErrorBoundary() {
  const err = useRouteError();
  const status = isRouteErrorResponse(err) ? err.status : 0;
  const message = isRouteErrorResponse(err)
    ? err.statusText
    : err?.message || "Unexpected error";

  return (
    <div style={{ padding: 24 }}>
      <h2>Route Error {status ? `(${status})` : ""}</h2>
      <p>{message}</p>
      <Link to="/">Go home</Link>
    </div>
  );
}
