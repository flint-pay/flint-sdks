import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/returnReasons.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';

const _sdkDescriptors = new DescriptorSource(settings, {["createReturnReason"]:r0,["deleteReturnReason"]:r0,["getReturnReason"]:r0,["listReturnReasons"]:r0,["updateReturnReason"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.returnReasons = Object.freeze({
      create: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createReturnReason", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createReturnReason", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteReturnReason", result, path))),
      removeWithResponse: async (return_reason_id, params, options) => this.#runtime.request("deleteReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getReturnReason", result, path))),
      getWithResponse: async (return_reason_id, params, options) => this.#runtime.request("getReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listReturnReasons", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listReturnReasons", _sdkRequestInput([], [], [
  "external_reference_id",
  "handle",
  "page_size",
  "page_token",
  "query",
  "source",
  "status"
], false, false, params), options),
      update: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateReturnReason", result, path))),
      updateWithResponse: async (return_reason_id, params, options) => this.#runtime.request("updateReturnReason", _sdkRequestInput([
  "return_reason_id"
], [return_reason_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateReturnReasonRequest } from '../models/CreateReturnReasonRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateReturnReasonRequest } from '../models/UpdateReturnReasonRequest.js';
