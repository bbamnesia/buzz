import assert from "node:assert/strict";
import test, { mock } from "node:test";

import {
  buildReconnectBackstopHandler,
  RECONNECT_BACKSTOP_MESSAGE,
} from "./relayReconnectBackstop.ts";

test("backstop handler preserves current toast message", () => {
  const toast = mock.fn();
  const onBackstop = buildReconnectBackstopHandler({ toast });

  onBackstop();

  assert.equal(toast.mock.calls.length, 1);
  assert.equal(toast.mock.calls[0].arguments[0], RECONNECT_BACKSTOP_MESSAGE);
});
