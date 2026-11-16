import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnReceipts.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=4ceba083539c6de410fd495acca2f9af0ffb67bc987bd45ca56e9c5bf41d22d1';

const _sdkDescriptors = new DescriptorSource(settings, {["createReturnReceipt"]:r0,["getReturnReceipt"]:r0,["listReturnReceipts"]:r0,["verifyReturnReceiptLineItem"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnReceipts = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReceipt", _sdkRequestInput([], [], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReceipt", result, path))),
      get: async (return_receipt_id, params, options) => this.#runtime.request("getReturnReceipt", _sdkRequestInput([
  "return_receipt_id"
], [return_receipt_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReceipt", result, path))),
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path))),
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnReceipts", result, path)),
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
  "verification_status",
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      verifyLineItem: async (return_receipt_id, return_receipt_line_item_id, params, options) => this.#runtime.request("verifyReturnReceiptLineItem", _sdkRequestInput([
  "return_receipt_id",
  "return_receipt_line_item_id"
], [return_receipt_id, return_receipt_line_item_id], [
  "Flint-Merchant-Id",
  "Flint-Mode",
  "Flint-Sandbox-Id"
], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("verifyReturnReceiptLineItem", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateReturnReceiptRequest } from '../models/CreateReturnReceiptRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeReturnReceiptLineItemInputExcess } from '../models/ReturnReceiptLineItemInputExcess.js';
export { makeReturnReceiptLineItemInputMatched } from '../models/ReturnReceiptLineItemInputMatched.js';
export { makeReturnReceiptLineItemInputUnverified } from '../models/ReturnReceiptLineItemInputUnverified.js';
export { makeReturnReceiptLineItemRequest } from '../models/ReturnReceiptLineItemRequest.js';
export { makeReturnSourceSystemRequest } from '../models/ReturnSourceSystemRequest.js';
export { makeReturnUnverifiedItem } from '../models/ReturnUnverifiedItem.js';
export { makeVerifyReturnReceiptLineItemRequest } from '../models/VerifyReturnReceiptLineItemRequest.js';
