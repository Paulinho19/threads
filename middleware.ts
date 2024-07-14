import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = createRouteMatcher(["/api/webhook/clerk"])

export default clerkMiddleware((auth, req) => {
  if (publicRoutes(req)) {
    return
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};