import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css"

export const meta: MetaFunction = () => {
  return { title: "Remix demo - Jack Ridgway" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Link to="/posts">Posts</Link>
        <Link to="/admin">Admin</Link>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
