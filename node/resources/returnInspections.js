import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnInspections.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["decideReturnInspectionLineItem"]:r0,["getReturnInspection"]:r0,["listReturnInspections"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnInspections = Object.freeze({
      decideLineItem: async (return_inspection_id, return_inspection_line_item_id, params, options) => this.#runtime.request("decideReturnInspectionLineItem", _sdkRequestInput([
  "return_inspection_id",
  "return_inspection_line_item_id"
], [return_inspection_id, return_inspection_line_item_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("decideReturnInspectionLineItem", result, path))),
      get: async (return_inspection_id, params, options) => this.#runtime.request("getReturnInspection", _sdkRequestInput([
  "return_inspection_id"
], [return_inspection_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnInspection", result, path))),
      list: async (params, options) => this.#runtime.request("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listReturnInspections", result, path)),
      listItems: (params, options) => this.#runtime.items("listReturnInspections", _sdkRequestInput([], [], [
  "acceptance_status",
  "created_after",
  "created_before",
  "external_reference_id",
  "idempotency_key",
  "inspected_after",
  "inspected_before",
  "inspection_location_id",
  "page_size",
  "page_token",
  "query",
  "return_id",
  "return_line_item_id",
  "return_receipt_id",
  "source_system_type",
  "status",
  "updated_after",
  "updated_before"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeDecideReturnInspectionLineItemRequest } from '../models/DecideReturnInspectionLineItemRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
