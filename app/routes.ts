import { type RouteConfig, index } from "@react-router/dev/routes";
import { lazy } from "react";

const Home = lazy(() => import("./routes/home"));
const About = lazy(() => import("./routes/about"));
const Projects = lazy(() => import("./routes/projects"));
const Contact = lazy(() => import("./routes/contact"));


export default [
  index("routes/home.tsx"),
  { path: "/about", file: "routes/about.tsx" },
  { path: "/projects", file: "routes/projects.tsx" },
  { path: "/contact", file: "routes/contact.tsx" }
] satisfies RouteConfig;

