const dev = process.env.NODE_ENV !== "production";

export const sever = dev
  ? "http://localhost:3000"
  : "https://your_website.server.com";
