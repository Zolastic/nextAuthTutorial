// This makes NextAuth apply to every page.
// So no matter what page the user is on, including the homepage, they will be redirected to the login page if they are not logged in.
export { default } from "next-auth/middleware";

// This provides a way to specify which pages NextAuth should apply to.
export const config = { matcher: ["/extra", "/dashboard"] };
