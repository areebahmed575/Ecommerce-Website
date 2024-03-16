import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/products" ,"female/Female", "/male/Male", "/kid/Shirt", "/api/cart/:path*", "/api/webhooks/:path*", "/studio/:path*"],
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/api/cart/:path*",
    "/products/:path*,/studio/:path*",
    "/(api|trpc)(.*)",
  ],
};

// import { authMiddleware } from "@clerk/nextjs";
// export default authMiddleware({
//   // "/" will be accessible to all users
//   publicRoutes: ["/"],
// });
 
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };