import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/main.css'
import MainNavigation from "./components/navigation/MainNavigation";
import { GeneralError } from './error/general'

export const meta = () => ({
  charset: "utf-8",
  title: "Version 1",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary(props) {
  return GeneralError(props)
}

export function links() {
  return [
    { rel: 'stylesheet', href: styles }
  ]
}