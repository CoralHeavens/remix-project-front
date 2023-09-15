import { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import styles from './styles/app.css';
import toastStyles from 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: toastStyles }
];

export function meta() {
  return [
    { title: "Remix Registration App" },
    { name: "description", content: "Remix Registration App" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Scripts />
        <ToastContainer />
      </body>
    </html>
  );
}
