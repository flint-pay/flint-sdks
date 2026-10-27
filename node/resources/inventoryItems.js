import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryItems.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryItem"]:r0,["deleteInventoryItem"]:r0,["getInventoryItem"]:r0,["listInventoryItems"]:r0,["updateInventoryItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryItems = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createInventoryItem", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryItem", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteInventoryItem", result, path))),
      removeWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("deleteInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getInventoryItem", result, path))),
      getWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("getInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listInventoryItems", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryItems", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "status",
  "sku",
  "barcode",
  "external_reference_id",
  "query"
], false, false, params), options),
      update: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateInventoryItem", result, path))),
      updateWithResponse: async (inventory_item_id, params, options) => this.#runtime.request("updateInventoryItem", _sdkRequestInput([
  "inventory_item_id"
], [inventory_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateInventoryItemRequest } from '../models/CreateInventoryItemRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateInventoryItemRequest } from '../models/UpdateInventoryItemRequest.js';
