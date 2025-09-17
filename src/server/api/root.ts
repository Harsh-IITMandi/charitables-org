import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "~/server/api/routers/post";
import { contactRouter } from "~/server/api/routers/contact";
import { donationRouter } from "~/server/api/routers/donation";

export const appRouter = createTRPCRouter({
  post: postRouter,
  contact: contactRouter,
  donation: donationRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
