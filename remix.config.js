/**
 * @type {import('@remix-run/dev').AppConfig}
 */
const { flatRoutes } = require("remix-flat-routes");

module.exports = {
  ignoredRouteFiles: ["**/*"],
  routes: async (defineRoutes) => {
    const routes = flatRoutes("routes", defineRoutes);
    return routes;
  },
};
