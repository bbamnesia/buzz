/** User-facing message shown when reconnect polling hits its soft backstop. */
export const RECONNECT_BACKSTOP_MESSAGE =
  "Still trying to reconnect — check your network.";

/** Dependencies for building the reconnect backstop callback. */
export type ReconnectBackstopDeps = {
  toast: (message: string) => void;
};

/** Build the callback invoked when the reconnect controller reaches its soft backstop. */
export function buildReconnectBackstopHandler({
  toast,
}: ReconnectBackstopDeps): () => void {
  return () => {
    toast(RECONNECT_BACKSTOP_MESSAGE);
  };
}
