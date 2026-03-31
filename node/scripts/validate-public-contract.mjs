import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sdkRoot = path.resolve(__dirname, "..");
const serverRoot = resolveServerRoot();

const specJson = execFileSync("go", ["run", "./cmd/public-openapi-json"], {
  cwd: serverRoot,
  encoding: "utf8",
});

const spec = JSON.parse(specJson);
const dist = await import(pathToFileURL(path.join(sdkRoot, "dist/index.js")).href);

const supportedResources = Array.from(dist.SUPPORTED_PUBLIC_RESOURCES);
const supportedPaths = new Set(dist.SUPPORTED_PUBLIC_API_PATHS);
const generatedTypesRoot = path.join(sdkRoot, "src/generated/types");

const forbiddenSdkParams = [
  {
    file: "checkout-sessions.ts",
    typeName: "CheckoutSessionCreateParams",
    fields: ["invoiceId", "source", "paymentLinkId"],
  },
  {
    file: "payment-intents.ts",
    typeName: "PaymentIntentCreateParams",
    fields: ["invoiceId", "source", "checkoutSessionId"],
  },
  {
    file: "orders.ts",
    typeName: "OrderCreateParams",
    fields: ["source", "subscriptionId"],
  },
];

const forbiddenNestedRequestFields = [
  {
    file: "checkout-sessions.ts",
    typeName: "CustomTextConfigInput",
    fields: ["checkoutButtonText"],
  },
];

const forbiddenRequestTypeReferences = [
  {
    file: "checkout-sessions.ts",
    typeName: "CheckoutSessionCreateParams",
    pattern: /\bcustomText\?: CustomTextConfig;/,
    description: 'CheckoutSessionCreateParams uses response type "CustomTextConfig" for customText.',
  },
  {
    file: "payment-links.ts",
    typeName: "PaymentLinkCreateParams",
    pattern: /\bcustomText\?: CustomTextConfig;/,
    description: 'PaymentLinkCreateParams uses response type "CustomTextConfig" for customText.',
  },
  {
    file: "payment-links.ts",
    typeName: "PaymentLinkUpdateParams",
    pattern: /\bcustomText\?: CustomTextConfig;/,
    description: 'PaymentLinkUpdateParams uses response type "CustomTextConfig" for customText.',
  },
];

function resolveServerRoot() {
  const candidates = [
    process.env.FLINT_MONOREPO_ROOT ? path.resolve(process.env.FLINT_MONOREPO_ROOT, "server/monolith") : null,
    path.resolve(sdkRoot, "../../server/monolith"),
    path.resolve(sdkRoot, "../../flint/server/monolith"),
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, "cmd/public-openapi-json/main.go"))) {
      return candidate;
    }
  }

  throw new Error(
    [
      "Unable to locate the Flint monorepo server for contract validation.",
      "Set FLINT_MONOREPO_ROOT to the Flint repo root or place flint-sdks next to the Flint monorepo.",
    ].join(" "),
  );
}

const surface = {
  customers: {
    serviceExport: "CustomerService",
    clientProperty: "customers",
    methods: ["create", "get", "update", "list"],
    operations: [
      ["post", "/v1/customers"],
      ["get", "/v1/customers/{customer_id}"],
      ["get", "/v1/customers"],
      ["patch", "/v1/customers/{customer_id}"],
    ],
  },
  orders: {
    serviceExport: "OrderService",
    clientProperty: "orders",
    methods: [
      "create",
      "get",
      "update",
      "close",
      "list",
      "pay",
      "addLineItems",
      "updateLineItem",
      "removeLineItems",
      "applyCoupon",
      "removeDiscounts",
      "addTips",
      "updateTip",
      "removeTips",
      "applyTax",
    ],
    operations: [
      ["post", "/v1/orders"],
      ["get", "/v1/orders/{order_id}"],
      ["get", "/v1/orders"],
      ["patch", "/v1/orders/{order_id}"],
      ["post", "/v1/orders/{order_id}/close"],
      ["post", "/v1/orders/{order_id}/pay"],
      ["post", "/v1/orders/{order_id}/line-items/add"],
      ["patch", "/v1/orders/{order_id}/line-items/{order_line_item_id}"],
      ["post", "/v1/orders/{order_id}/line-items/remove"],
      ["post", "/v1/orders/{order_id}/discounts/apply-coupon"],
      ["post", "/v1/orders/{order_id}/discounts/remove"],
      ["post", "/v1/orders/{order_id}/tips/add"],
      ["patch", "/v1/orders/{order_id}/tips/{tip_id}"],
      ["post", "/v1/orders/{order_id}/tips/remove"],
      ["post", "/v1/orders/{order_id}/tax/apply"],
    ],
  },
  items: {
    serviceExport: "ItemService",
    clientProperty: "items",
    methods: ["create", "get", "getBySKU", "update", "replaceItemCategories", "del", "adjustInventory", "list"],
    operations: [
      ["post", "/v1/items"],
      ["get", "/v1/items/{item_id}"],
      ["get", "/v1/items"],
      ["patch", "/v1/items/{item_id}"],
      ["post", "/v1/items/{item_id}/categories/replace"],
      ["delete", "/v1/items/{item_id}"],
      ["post", "/v1/items/{item_id}/inventory/adjust"],
    ],
  },
  coupons: {
    serviceExport: "CouponService",
    clientProperty: "coupons",
    methods: ["create", "get", "getByCode", "update", "replaceCouponLimitToItems", "del", "list"],
    operations: [
      ["post", "/v1/coupons"],
      ["get", "/v1/coupons/{coupon_id}"],
      ["get", "/v1/coupons"],
      ["patch", "/v1/coupons/{coupon_id}"],
      ["post", "/v1/coupons/{coupon_id}/limit-to-items/replace"],
      ["delete", "/v1/coupons/{coupon_id}"],
    ],
  },
  paymentLinks: {
    serviceExport: "PaymentLinkService",
    clientProperty: "paymentLinks",
    methods: ["create", "get", "update", "replaceLineItems", "replaceCustomFields", "activate", "deactivate", "list"],
    forbiddenMethods: ["resolve"],
    operations: [
      ["post", "/v1/payment-links"],
      ["get", "/v1/payment-links/{payment_link_id}"],
      ["get", "/v1/payment-links"],
      ["patch", "/v1/payment-links/{payment_link_id}"],
      ["post", "/v1/payment-links/{payment_link_id}/line-items/replace"],
      ["post", "/v1/payment-links/{payment_link_id}/custom-fields/replace"],
      ["post", "/v1/payment-links/{payment_link_id}/activate"],
      ["post", "/v1/payment-links/{payment_link_id}/deactivate"],
    ],
  },
  paymentIntents: {
    serviceExport: "PaymentIntentService",
    clientProperty: "paymentIntents",
    methods: ["create", "get", "update", "confirm", "capture", "cancel", "list"],
    forbiddenMethods: ["sendReceipt"],
    operations: [
      ["post", "/v1/payment-intents"],
      ["get", "/v1/payment-intents/{payment_intent_id}"],
      ["get", "/v1/payment-intents"],
      ["patch", "/v1/payment-intents/{payment_intent_id}"],
      ["post", "/v1/payment-intents/{payment_intent_id}/confirm"],
      ["post", "/v1/payment-intents/{payment_intent_id}/capture"],
      ["post", "/v1/payment-intents/{payment_intent_id}/cancel"],
    ],
  },
  paymentMethods: {
    serviceExport: "PaymentMethodService",
    clientProperty: "paymentMethods",
    methods: ["save", "get", "list", "remove", "setDefault"],
    operations: [
      ["post", "/v1/payment-methods"],
      ["get", "/v1/payment-methods/{payment_method_id}"],
      ["get", "/v1/payment-methods"],
      ["post", "/v1/payment-methods/{payment_method_id}/remove"],
      ["post", "/v1/payment-methods/{payment_method_id}/set-default"],
    ],
  },
  refunds: {
    serviceExport: "RefundService",
    clientProperty: "refunds",
    methods: ["create", "get", "update", "list"],
    operations: [
      ["post", "/v1/refunds"],
      ["get", "/v1/refunds/{refund_id}"],
      ["get", "/v1/refunds"],
      ["patch", "/v1/refunds/{refund_id}"],
    ],
  },
  checkoutSessions: {
    serviceExport: "CheckoutSessionService",
    clientProperty: "checkoutSessions",
    methods: ["create", "get", "update", "close", "list"],
    operations: [
      ["post", "/v1/checkout-sessions"],
      ["get", "/v1/checkout-sessions/{checkout_session_id}"],
      ["get", "/v1/checkout-sessions"],
      ["patch", "/v1/checkout-sessions/{checkout_session_id}"],
      ["post", "/v1/checkout-sessions/{checkout_session_id}/close"],
    ],
  },
  subscriptionPlans: {
    serviceExport: "SubscriptionPlanService",
    clientProperty: "subscriptionPlans",
    methods: ["create", "get", "update", "archive", "list"],
    operations: [
      ["post", "/v1/subscription-plans"],
      ["get", "/v1/subscription-plans/{plan_id}"],
      ["get", "/v1/subscription-plans"],
      ["patch", "/v1/subscription-plans/{plan_id}"],
      ["post", "/v1/subscription-plans/{plan_id}/archive"],
    ],
  },
  subscriptions: {
    serviceExport: "SubscriptionService",
    clientProperty: "subscriptions",
    methods: ["create", "get", "update", "cancel", "pause", "resume", "list"],
    operations: [
      ["post", "/v1/subscriptions"],
      ["get", "/v1/subscriptions/{subscription_id}"],
      ["get", "/v1/subscriptions"],
      ["patch", "/v1/subscriptions/{subscription_id}"],
      ["post", "/v1/subscriptions/{subscription_id}/cancel"],
      ["post", "/v1/subscriptions/{subscription_id}/pause"],
      ["post", "/v1/subscriptions/{subscription_id}/resume"],
    ],
  },
  settings: {
    serviceExport: "SettingsService",
    clientProperty: "settings",
    methods: ["get", "getEffective", "update"],
    operations: [
      ["get", "/v1/settings"],
      ["get", "/v1/settings/effective"],
      ["patch", "/v1/settings"],
    ],
  },
  analytics: {
    serviceExport: "AnalyticsService",
    clientProperty: "analytics",
    methods: ["getOverview", "getPaymentVolumeTimeseries", "getSubscriptions"],
    operations: [
      ["get", "/v1/analytics/overview"],
      ["get", "/v1/analytics/payment-volume-timeseries"],
      ["get", "/v1/analytics/subscriptions"],
    ],
  },
  apiKeys: {
    serviceExport: "ApiKeyService",
    clientProperty: "apiKeys",
    methods: ["create", "get", "list", "update", "revoke"],
    operations: [
      ["post", "/v1/api-keys"],
      ["get", "/v1/api-keys/{api_key_id}"],
      ["get", "/v1/api-keys"],
      ["patch", "/v1/api-keys/{api_key_id}"],
      ["post", "/v1/api-keys/{api_key_id}/revoke"],
    ],
  },
  devices: {
    serviceExport: "DeviceService",
    clientProperty: "devices",
    methods: ["create", "get", "list", "update", "del"],
    operations: [
      ["post", "/v1/devices"],
      ["get", "/v1/devices/{device_id}"],
      ["get", "/v1/devices"],
      ["patch", "/v1/devices/{device_id}"],
      ["delete", "/v1/devices/{device_id}"],
    ],
  },
  invoices: {
    serviceExport: "InvoiceService",
    clientProperty: "invoices",
    methods: [
      "create",
      "get",
      "list",
      "update",
      "send",
      "void",
      "regeneratePublicLink",
      "sendReminder",
      "listEvents",
      "listDeliveryAttempts",
      "recordManualPayment",
      "reverseManualPayment",
      "getCheckoutSession",
      "getPdf",
    ],
    operations: [
      ["post", "/v1/invoices"],
      ["get", "/v1/invoices/{invoice_id}"],
      ["get", "/v1/invoices"],
      ["patch", "/v1/invoices/{invoice_id}"],
      ["post", "/v1/invoices/{invoice_id}/send"],
      ["post", "/v1/invoices/{invoice_id}/void"],
      ["post", "/v1/invoices/{invoice_id}/regenerate-public-link"],
      ["post", "/v1/invoices/{invoice_id}/send-reminder"],
      ["get", "/v1/invoices/{invoice_id}/events"],
      ["get", "/v1/invoices/{invoice_id}/delivery-attempts"],
      ["post", "/v1/invoices/{invoice_id}/manual-payments"],
      ["post", "/v1/invoices/{invoice_id}/manual-payments/reverse"],
      ["post", "/v1/invoices/{invoice_id}/checkout-session"],
      ["get", "/v1/invoices/{invoice_id}/pdf"],
    ],
  },
  merchants: {
    serviceExport: "MerchantService",
    clientProperty: "merchants",
    methods: [
      "get",
      "list",
      "update",
      "beginOnboarding",
      "createOnboardingSession",
      "getOnboardingStatus",
    ],
    operations: [
      ["get", "/v1/merchants/{merchant_id}"],
      ["get", "/v1/merchants"],
      ["patch", "/v1/merchants/{merchant_id}"],
      ["post", "/v1/merchants/{merchant_id}/onboarding/begin"],
      ["post", "/v1/merchants/{merchant_id}/onboarding/session"],
      ["get", "/v1/merchants/{merchant_id}/onboarding/status"],
    ],
  },
  users: {
    serviceExport: "UserService",
    clientProperty: "users",
    methods: ["get", "list", "update", "deactivate"],
    operations: [
      ["get", "/v1/users/{user_id}"],
      ["get", "/v1/users"],
      ["patch", "/v1/users/{user_id}"],
      ["post", "/v1/users/{user_id}/deactivate"],
    ],
  },
  webhooks: {
    serviceExport: "WebhookEndpointService",
    clientProperty: "webhooks",
    methods: ["create", "get", "list", "update", "del", "rotateWebhookSecret", "listEvents"],
    operations: [
      ["post", "/v1/webhooks"],
      ["get", "/v1/webhooks/{webhook_endpoint_id}"],
      ["get", "/v1/webhooks"],
      ["patch", "/v1/webhooks/{webhook_endpoint_id}"],
      ["delete", "/v1/webhooks/{webhook_endpoint_id}"],
      ["post", "/v1/webhooks/{webhook_endpoint_id}/rotate-secret"],
      ["get", "/v1/webhook-events"],
    ],
  },
};

const problems = [];

for (const resource of supportedResources) {
  const definition = surface[resource];
  if (!definition) {
    problems.push(`No public-contract definition for supported resource "${resource}".`);
    continue;
  }

  const client = new dist.Flint({ apiKey: "flint_test_contract" });
  if (!(definition.clientProperty in client)) {
    problems.push(`Client is missing "${definition.clientProperty}".`);
  }

  const ServiceClass = dist[definition.serviceExport];
  if (!ServiceClass) {
    problems.push(`Missing service export "${definition.serviceExport}".`);
    continue;
  }

  const prototypeMethods = new Set(
    Object.getOwnPropertyNames(ServiceClass.prototype).filter(
      (name) => name !== "constructor" && !name.startsWith("fetch")
    )
  );

  for (const method of definition.methods) {
    if (!prototypeMethods.has(method)) {
      problems.push(`${definition.serviceExport} is missing method "${method}".`);
    }
  }

  for (const method of definition.forbiddenMethods ?? []) {
    if (prototypeMethods.has(method)) {
      problems.push(`${definition.serviceExport} exposes non-public method "${method}".`);
    }
  }

  for (const [verb, route] of definition.operations) {
    const pathItem = spec.paths?.[route];
    if (!pathItem) {
      problems.push(`OpenAPI spec is missing path ${route}.`);
      continue;
    }
    if (!pathItem[verb]) {
      problems.push(`OpenAPI spec is missing ${verb.toUpperCase()} ${route}.`);
    }
    if (!supportedPaths.has(route)) {
      problems.push(`SDK scope metadata is missing ${route}.`);
    }
  }
}

for (const { file, typeName, fields } of forbiddenSdkParams) {
  const typeSource = fs.readFileSync(path.join(generatedTypesRoot, file), "utf8");
  const typeBlock = extractTypeBlock(typeSource, typeName);
  if (!typeBlock) {
    problems.push(`Generated SDK type "${typeName}" was not found in ${file}.`);
    continue;
  }

  for (const fieldName of fields) {
    const fieldPattern = new RegExp(`^\\s*${fieldName}\\??\\s*:`, "m");
    if (fieldPattern.test(typeBlock)) {
      problems.push(`${typeName} exposes internal-only request field "${fieldName}".`);
    }
  }
}

for (const { file, typeName, fields } of forbiddenNestedRequestFields) {
  const typeSource = fs.readFileSync(path.join(generatedTypesRoot, file), "utf8");
  const typeBlock = extractTypeBlock(typeSource, typeName);
  if (!typeBlock) {
    problems.push(`Generated SDK type "${typeName}" was not found in ${file}.`);
    continue;
  }

  for (const fieldName of fields) {
    const fieldPattern = new RegExp(`^\\s*${fieldName}\\??\\s*:`, "m");
    if (fieldPattern.test(typeBlock)) {
      problems.push(`${typeName} exposes internal-only nested request field "${fieldName}".`);
    }
  }
}

for (const { file, typeName, pattern, description } of forbiddenRequestTypeReferences) {
  const typeSource = fs.readFileSync(path.join(generatedTypesRoot, file), "utf8");
  const typeBlock = extractTypeBlock(typeSource, typeName);
  if (!typeBlock) {
    problems.push(`Generated SDK type "${typeName}" was not found in ${file}.`);
    continue;
  }
  if (pattern.test(typeBlock)) {
    problems.push(description);
  }
}

if (problems.length > 0) {
  console.error("Public contract validation failed:");
  for (const problem of problems) {
    console.error(`- ${problem}`);
  }
  process.exit(1);
}

console.log("Public contract validation passed.");

function extractTypeBlock(source, typeName) {
  const match = source.match(
    new RegExp(`export type ${typeName} = \\{([\\s\\S]*?)\\n\\};`)
  );
  return match?.[1] ?? null;
}
