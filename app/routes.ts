import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    path: "/",
    file: "routes/home.tsx"
  },
  {
    path: "/about",
    file: "routes/about.tsx"
  },
//   {
//     path: "/projects",
//     file: "routes/projects.tsx"
//   },
//   {
//     path: "/contact",
//     file: "routes/contact.tsx"
//   }
] satisfies RouteConfig;
