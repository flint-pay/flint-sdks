import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnReceipts.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f95cd788a8ba3731ebe91694701a8a5cdceec0ac429cf23d16edc2f61220fbab';

const _sdkDescriptors = new DescriptorSource(settings, {["getReturnReceipt"]:r0,["listReturnReceipts"]:r0,["verifyReturnReceiptLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnReceipts = Object.freeze({
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReceipt", result, path))),
      getWithResponse: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnReceipts", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "page_size",
  "page_token",
  "query",
  "received_after",
  "received_before",
  "receiving_location_id",
  "return_id",
  "return_line_item_id",
  "shipment_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before",
  "verification_status"
], false, false, params), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyReturnReceiptLineItem", result, path))),
      verifyLineItemWithResponse: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnSourceSystem } from '../models/ReturnSourceSystem.js';
export { makeReturnUnverifiedItem } from '../models/ReturnUnverifiedItem.js';
export { makeVerifyReturnReceiptLineItemRequest } from '../models/VerifyReturnReceiptLineItemRequest.js';
