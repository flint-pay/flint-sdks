import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryCounts.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=527d9352908a453ad41ae99b8ef20015f463fff9697dd74e49111f49715fee29';

const _sdkDescriptors = new DescriptorSource(settings, {["applyInventoryCount"]:r0,["cancelInventoryCount"]:r0,["createInventoryCount"]:r0,["listInventoryCounts"]:r0,["updateInventoryCount"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryCounts = Object.freeze({
      apply: async (inventory_count_id, params, options) => this.#runtime.request("applyInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      applyWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("applyInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      cancel: async (inventory_count_id, params, options) => this.#runtime.request("cancelInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("cancelInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryCount", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
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
  "applied_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
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
  "applied_before",
  "Flint-Version"
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
  "applied_before",
  "Flint-Version"
], false, false, params), options), []),
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
  "applied_before",
  "Flint-Version"
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
  "applied_before",
  "Flint-Version"
], false, false, params), options),
      update: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (inventory_count_id, params, options) => this.#runtime.request("updateInventoryCount", _sdkRequestInput([
  "inventory_count_id"
], [inventory_count_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeInventoryCountResultResponse } from '../models/InventoryCountResultResponse.js';
export { makeInventoryCountResponse } from '../models/InventoryCountResponse.js';
export { makeInventoryCountListResponse } from '../models/InventoryCountListResponse.js';
export { makeInventoryCount } from '../models/InventoryCount.js';
export { makeInventoryCountResult } from '../models/InventoryCountResult.js';
export { makeInventoryLevel } from '../models/InventoryLevel.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeInventoryCountLine } from '../models/InventoryCountLine.js';
export { makeCountProvenance } from '../models/CountProvenance.js';
