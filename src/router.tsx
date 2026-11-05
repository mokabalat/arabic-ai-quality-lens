import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    // Static prerender requests "/about/" and Apache serves folders with a slash; "always" avoids a redirect loop.
    trailingSlash: "always",
    defaultPreloadStaleTime: 0,
  });

  return router;
};
