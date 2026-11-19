import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const prefix = "#/components/schemas/";
const key = "idempotency_key";
const webhookOnly = new Set(["WebhookCheckoutSession", "WebhookInvoice", "WebhookOrder", "WebhookPaymentIntent"]);
const historicalOptionalKeys = new Set([
  "Fulfillment",
  "GiftCard",
  "InventoryCount",
  "InventoryReceipt",
  "InventoryReservation",
  "InventoryTransfer",
  "InvoiceManualPayment",
  "InvoicePaymentAttempt",
  "OrderPaymentAttempt",
  "Payout",
  "Refund",
  "Return",
  "ReturnDisposition",
  "ReturnInspection",
  "ReturnReceipt",
  "Subscription",
  "WebhookInvoice",
  "WebhookPaymentIntent",
]);

function reference(value) {
  const ref = value?.$ref;
  return ref?.startsWith(prefix) ? ref.slice(prefix.length) : undefined;
}

function mapSchema(schema, mapReference) {
  if (!schema || typeof schema !== "object") return schema;
  const result = { ...schema };
  const name = reference(schema);
  if (name) result.$ref = prefix + mapReference(name);
  for (const keyword of ["allOf", "anyOf", "oneOf"])
    if (Array.isArray(schema[keyword]))
      result[keyword] = schema[keyword].map((item) => mapSchema(item, mapReference));
  for (const keyword of ["items", "additionalProperties", "not", "if", "then", "else"])
    if (Object.hasOwn(schema, keyword)) result[keyword] = mapSchema(schema[keyword], mapReference);
  if (schema.properties)
    result.properties = Object.fromEntries(Object.entries(schema.properties).map(
      ([field, property]) => [field, mapSchema(property, mapReference)],
    ));
  return result;
}

export function projectWebhookSnapshots(schemas) {
  const envelopes = Object.entries(schemas).filter(([name]) => name.startsWith("Webhook_"));
  const snapshots = (envelope) => (envelope.allOf ?? [envelope])
    .map((part) => part.properties?.data?.properties?.object).filter(Boolean);
  const dependencies = new Map();
  const visit = (name) => {
    if (dependencies.has(name) || !Object.hasOwn(schemas, name)) return name;
    const children = new Set();
    dependencies.set(name, children);
    mapSchema(schemas[name], (child) => {
      children.add(child);
      return visit(child);
    });
    return name;
  };
  for (const [, envelope] of envelopes)
    for (const object of snapshots(envelope)) mapSchema(object, visit);

  const optional = new Set([...historicalOptionalKeys].filter((name) =>
    dependencies.has(name) && schemas[name].required?.includes(key) &&
    schemas[name].properties?.[key]?.type?.includes("null"),
  ));
  const projected = new Set(optional);
  for (let size = -1; projected.size !== size;) {
    size = projected.size;
    for (const [name, children] of dependencies)
      if ([...children].some((child) => projected.has(child))) projected.add(name);
  }
  const projection = (name) => projected.has(name) && !webhookOnly.has(name)
    ? `WebhookSnapshot${name}` : name;
  const result = { ...schemas };
  for (const name of projected) {
    const target = projection(name);
    if (target !== name && Object.hasOwn(schemas, target))
      throw new Error(`Webhook snapshot name already exists: ${target}`);
    result[target] = mapSchema(schemas[name], projection);
    if (optional.has(name)) result[target].required = schemas[name].required.filter((field) => field !== key);
  }
  const projectEnvelopePart = (part) => {
    const data = part.properties?.data;
    if (!data?.properties?.object) return part;
    return { ...part, properties: { ...part.properties, data: {
      ...data, properties: { ...data.properties, object: mapSchema(data.properties.object, projection) },
    } } };
  };
  for (const [name, envelope] of envelopes)
    result[name] = envelope.allOf
      ? { ...envelope, allOf: envelope.allOf.map(projectEnvelopePart) }
      : projectEnvelopePart(envelope);
  return result;
}

export function webhookConfigPath(root) {
  const api = JSON.parse(readFileSync(join(root, "spec/openapi.json"), "utf8"));
  const config = JSON.parse(readFileSync(join(root, "sdk.json"), "utf8"));
  const directory = join(root, ".generated");
  const path = join(directory, "webhook-sdk.json");
  const snapshotProfile = "webhook-schemas.json";
  config.profiles = [snapshotProfile, ...config.profiles.map((profile) => `../${profile}`)];
  mkdirSync(directory, { recursive: true });
  writeFileSync(join(directory, snapshotProfile), JSON.stringify({
    include: [],
    overrides: { "/components/schemas": projectWebhookSnapshots(api.components.schemas) },
  }));
  writeFileSync(path, JSON.stringify(config));
  return path;
}
