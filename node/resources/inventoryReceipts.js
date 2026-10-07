import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/inventoryReceipts.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=1d377b406cf4feb3f1c2665a879357eb94a4280792cb4955cdbef8af750adf8d';

const _sdkDescriptors = new DescriptorSource(settings, {["createInventoryReceipt"]:r0,["listInventoryReceipts"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.inventoryReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createInventoryReceipt", _sdkRequestInput([], [], [
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listInventoryReceipts", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "inventory_item_id",
  "receiving_location_id",
  "inventory_reservation_id",
  "return_id",
  "return_disposition_id",
  "idempotency_key",
  "source_system_type",
  "external_source_id",
  "external_actor_id",
  "occurred_after",
  "occurred_before",
  "created_after",
  "created_before",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeInventoryReceiptResultResponse } from '../models/InventoryReceiptResultResponse.js';
export { makeInventoryReceiptListResponse } from '../models/InventoryReceiptListResponse.js';
export { makeInventoryReceipt } from '../models/InventoryReceipt.js';
export { makeInventoryReceiptResult } from '../models/InventoryReceiptResult.js';
export { makeInventoryLevel } from '../models/InventoryLevel.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeInventoryReceiptLine } from '../models/InventoryReceiptLine.js';
