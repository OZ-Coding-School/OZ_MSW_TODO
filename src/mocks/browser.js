import { setupWorker } from "msw/browser";
import { handlers } from "./browser";

export const worker = setupWorker(...handlers);
