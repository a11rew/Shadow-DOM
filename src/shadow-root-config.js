import { registerApplication, start } from "single-spa";

const pluginRoutes = [
  (location) => location.pathname.startsWith("/alpha"),
  (location) => location.pathname.startsWith("/beta"),
  (location) => location.pathname.startsWith("/charlie"),
];

registerApplication({
  name: "@shadow/alpha",
  app: () => System.import("@shadow/plugin-alpha"),
  activeWhen: ["/", ...pluginRoutes],
  customProps: {
    domElement: document.querySelector("#nav-root"),
  },
});

registerApplication({
  name: "@shadow/beta",
  app: () => System.import("@shadow/plugin-beta"),
  activeWhen: [(location) => location.pathname.startsWith("/beta")],
  customProps: {
    domElement: document.querySelector("#plugin-root"),
  },
});

registerApplication({
  name: "@shadow/charlie",
  app: () => System.import("@shadow/plugin-charlie"),
  activeWhen: [(location) => location.pathname.startsWith("/charlie")],
  customProps: {
    domElement: document.querySelector("#plugin-root"),
  },
});

start({
  urlRerouteOnly: true,
});
