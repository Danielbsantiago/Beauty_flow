import { preview } from "vite";

const port = Number(process.env.PORT) || 4173;

const server = await preview({
  preview: { host: true, port, allowedHosts: true },
});

server.printUrls();
