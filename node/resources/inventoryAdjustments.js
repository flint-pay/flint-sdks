import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryAdjustments.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f0eb82b41cb4679bc6f0e94219007f92dfd5df456c2b498bcbb5018ebf3da812';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryAdjustment"]:r0,["getInventoryAdjustment"]:r0,["listInventoryAdjustments"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryAdjustments = Object.freeze({
      create: (input = {}, options) => this.#runtime.request("createInventoryAdjustment", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryAdjustment", result, path))),
      createWithResponse: (input = {}, options) => this.#runtime.request("createInventoryAdjustment", input, options).then(_sdkResponse),
      get: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryAdjustment", result, path))),
      getWithResponse: async (inventory_adjustment_id, params, options) => this.#runtime.request("getInventoryAdjustment", _sdkRequestInput([
  "inventory_adjustment_id"
], [inventory_adjustment_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryAdjustments", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryAdjustments", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "reason",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryAdjustmentConditionChangeRequest } from '../models/CreateInventoryAdjustmentConditionChangeRequest.js';
export { makeCreateInventoryAdjustmentCorrectionRequest } from '../models/CreateInventoryAdjustmentCorrectionRequest.js';
export { makeCreateInventoryAdjustmentCountedRequest } from '../models/CreateInventoryAdjustmentCountedRequest.js';
export { makeCreateInventoryAdjustmentQuantityRequest } from '../models/CreateInventoryAdjustmentQuantityRequest.js';
export { makeCreateInventoryAdjustmentRequest } from '../models/CreateInventoryAdjustmentRequest.js';
export { makeInventoryAdjustmentConditionChangeLineRequest } from '../models/InventoryAdjustmentConditionChangeLineRequest.js';
export { makeInventoryAdjustmentQuantityLineRequest } from '../models/InventoryAdjustmentQuantityLineRequest.js';
export { makeInventoryAdjustmentSetLineRequest } from '../models/InventoryAdjustmentSetLineRequest.js';
export { makeInventorySourceSystemRequest } from '../models/InventorySourceSystemRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
