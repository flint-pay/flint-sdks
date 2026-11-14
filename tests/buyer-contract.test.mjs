import test from "node:test";
import assert from "node:assert/strict";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
const root = resolve(process.env.FLINT_SDK_TEST_ROOT ?? resolve(import.meta.dirname, ".."));
const { Client } = await import(pathToFileURL(resolve(root, "node/index.js")));

const request_id = "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D";
const timestamp = "2026-11-12T12:00:00Z";
const preferences = { checkout_reminders: false, shipping_updates: true, email: "buyer@example.test", customer_id: null, version: null };
const fulfillment = { created_at: timestamp, updated_at: timestamp, fulfillment_id: "ful_synthetic", order_id: "ord_synthetic", line_items: [], scheduled_start_at: null, status: "pending", type: "shipment", version: 1 };
const parcel = { created_at: timestamp, updated_at: timestamp, fulfillment_id: "ful_synthetic", order_id: "ord_synthetic", package_id: "pkg_synthetic", shipment_id: "shp_synthetic", status: "created", version: 1 };

for (const method of ["getEmailPreferences", "updateEmailPreferences", "listFulfillments", "listPackages"]) {
  test(`buyer ${method} accepts the current nullable and omitted fields`, async (t) => {
    const data = method === "listFulfillments" ? [fulfillment] : method === "listPackages" ? [parcel] : preferences;
    const client = new Client({ customerToken: "synthetic-customer-token", ambientCredentials: false,
      transport: async () => new Response(JSON.stringify({ data, request_id }), { headers: { "content-type": "application/json" } }),
    });
    t.after(() => client.close());
    const result = await client.me[method](method === "updateEmailPreferences" ? { shipping_updates: true } : {});
    if (Array.isArray(data)) {
      assert.equal(result.data[0].version, 1);
      assert.equal(Object.hasOwn(result.data[0], "supported_actions"), false);
    } else {
      assert.equal(result.customer_id, null);
      assert.equal(result.version, null);
    }
  });
}
