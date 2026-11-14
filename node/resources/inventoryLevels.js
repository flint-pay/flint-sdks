import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryLevels.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d093b90d83ab812fb89a9d00e94c4b7186bf257071ce16b0fb2235fc7de015a4';

const _sdkDescriptors = new DescriptorSource(settings, {["getInventoryLevel"]:r0,["listInventoryLevels"]:r0,["updateInventoryLevel"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryLevels = Object.freeze({
      get: async (inventory_level_id, params, options) => this.#runtime.request("getInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryLevel", result, path))),
      list: async (params, options) => this.#runtime.request("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listInventoryLevels", result, path)),
      listItems: (params, options) => this.#runtime.items("listInventoryLevels", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "inventory_item_status",
  "has_available_quantity",
  "has_unavailable_condition",
  "has_shortage",
  "query",
  "min_available_quantity",
  "max_available_quantity",
  "updated_after",
  "updated_before",
  "expand",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      update: async (inventory_level_id, params, options) => this.#runtime.request("updateInventoryLevel", _sdkRequestInput([
  "inventory_level_id"
], [inventory_level_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryLevel", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryLevelRequest } from '../models/UpdateInventoryLevelRequest.js';
