import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryItems.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryItem"]:r0,["deleteInventoryItem"]:r0,["getInventoryItem"]:r0,["listInventoryItems"]:r0,["updateInventoryItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryItem", result, path))),
      delete: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryItem", result, path))),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryItem", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryItem", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryBackorderPolicyRequest } from '../models/CreateInventoryBackorderPolicyRequest.js';
export { makeCreateInventoryItemRequest } from '../models/CreateInventoryItemRequest.js';
export { makeInventoryBackorderPolicyRequest } from '../models/InventoryBackorderPolicyRequest.js';
export { makeMetadataPatchRequest } from '../models/MetadataPatchRequest.js';
export { makeMetadataRequest } from '../models/MetadataRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryItemRequest } from '../models/UpdateInventoryItemRequest.js';
