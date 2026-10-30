import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnDispositions.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelReturnDisposition"]:r0,["getReturnDisposition"]:r0,["listReturnDispositions"]:r0,["retryReturnDisposition"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnDispositions = Object.freeze({
      cancel: async (return_disposition_id, params, options) => this.#runtime.request("cancelReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelReturnDisposition", result, path))),
      get: async (return_disposition_id, params, options) => this.#runtime.request("getReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnDisposition", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnDispositions", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnDispositions", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "disposition_type",
  "external_reference_id",
  "idempotency_key",
  "inventory_location_id",
  "occurred_after",
  "occurred_before",
  "page_size",
  "page_token",
  "query",
  "replaces_return_disposition_id",
  "return_id",
  "return_inspection_line_item_id",
  "return_line_item_id",
  "return_receipt_line_item_id",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      retry: async (return_disposition_id, params, options) => this.#runtime.request("retryReturnDisposition", _sdkRequestInput([
  "return_disposition_id"
], [return_disposition_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("retryReturnDisposition", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCancelReturnDispositionRequest } from '../models/CancelReturnDispositionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRetryReturnDispositionRequest } from '../models/RetryReturnDispositionRequest.js';
