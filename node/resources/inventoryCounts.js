import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryCounts.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryCount"]:r0,["getInventoryCount"]:r0,["listInventoryCounts"]:r0,["transitionInventoryCount"]:r0,["updateInventoryCount"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryCounts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryCount", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryCount", result, path))),
      getWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("getInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryCounts", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryCounts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "location_id",
  "status",
  "idempotency_key",
  "created_after",
  "created_before",
  "applied_after",
  "applied_before"
], false, false, params), options),
      transition: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("transitionInventoryCount", result, path))),
      transitionWithResponse: (input = {}, options) => this.#runtime.request("transitionInventoryCount", input, options).then(_sdkResponse),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryCount", result, path))),
      updateWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryCountRequest } from '../models/CreateInventoryCountRequest.js';
export { makeInventoryCountObservationRequest } from '../models/InventoryCountObservationRequest.js';
export { makeInventoryCountTransitionRequest } from '../models/InventoryCountTransitionRequest.js';
export { makeInventoryCountTransitionRequestApply } from '../models/InventoryCountTransitionRequestApply.js';
export { makeInventoryCountTransitionRequestCancel } from '../models/InventoryCountTransitionRequestCancel.js';
export { makeInventorySourceSystemRequest } from '../models/InventorySourceSystemRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryCountRequest } from '../models/UpdateInventoryCountRequest.js';
