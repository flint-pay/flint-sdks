import { Client } from "@flintpay/node";
const baseUrl = process.env.FLINT_BASE_URL || undefined;
const client = new Client({
  baseUrl,
  allowInsecureHttp: !!baseUrl && ["localhost", "127.0.0.1"].includes(new URL(baseUrl).hostname) && new URL(baseUrl).protocol === "http:",
});
// Persist this key with the action before sending; reuse it for every resubmission.
const idempotencyKey = crypto.randomUUID();

const result = await client.partnerApps.create(
  {
    default_requested_permissions: ["manage_orders"],
    name: "Acme Commerce Plugin",
    permission_manifest: [
      {
        description: "Read and update Flint orders for installed merchants.",
        permission_id: "manage_orders",
        required_scopes: ["commerce.orders.read", "commerce.orders.write"],
        title: "Manage orders",
      },
      {
        description: "Read and update customer records for installed merchants.",
        optional: true,
        permission_id: "manage_customers",
        required_scopes: ["customers.read", "customers.write"],
        title: "Manage customers",
      },
      {
        description: "Read product, variant, bundle, and SKU lookup catalog records.",
        optional: true,
        permission_id: "read_catalog",
        required_scopes: [
          "commerce.products.read",
          "commerce.bundles.read",
          "commerce.catalog.read",
        ],
        title: "Read catalog",
      },
      {
        description: "Create and update bundle catalog records for installed merchants.",
        optional: true,
        permission_id: "manage_bundles",
        required_scopes: ["commerce.bundles.write"],
        title: "Manage bundles",
      },
    ],
    redirect_uris: [
      "https://plugins.acme.com/flint/oauth/callback",
      "http://localhost:3000/flint/oauth/callback",
    ],
  },
  { idempotencyKey: idempotencyKey },
);
console.log(result);
