import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/deliveryRateCallbacks.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';

const _sdkDescriptors = new DescriptorSource(settings, {["checkDeliveryRateCallbackConnection"]:r0,["createDeliveryRateCallback"]:r0,["createDeliveryRateCallbackTestDelivery"]:r0,["deleteDeliveryRateCallback"]:r0,["getDeliveryRateCallback"]:r0,["listDeliveryRateCallbacks"]:r0,["rotateDeliveryRateCallbackSigningKey"]:r0,["updateDeliveryRateCallback"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.deliveryRateCallbacks = Object.freeze({
      checkConnection: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkDeliveryRateCallbackConnection", result, path))),
      checkConnectionWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("checkDeliveryRateCallbackConnection", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallback", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createDeliveryRateCallback", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createTestDelivery: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createDeliveryRateCallbackTestDelivery", result, path))),
      createTestDeliveryWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("createDeliveryRateCallbackTestDelivery", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      remove: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteDeliveryRateCallback", result, path))),
      removeWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("deleteDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getDeliveryRateCallback", result, path))),
      getWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("getDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listDeliveryRateCallbacks", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listDeliveryRateCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status",
  "delivery_method_id"
], false, false, params), options),
      rotateSigningKey: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateDeliveryRateCallbackSigningKey", result, path))),
      rotateSigningKeyWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("rotateDeliveryRateCallbackSigningKey", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      update: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateDeliveryRateCallback", result, path))),
      updateWithResponse: async (delivery_rate_callback_id, params, options) => this.#runtime.request("updateDeliveryRateCallback", _sdkRequestInput([
  "delivery_rate_callback_id"
], [delivery_rate_callback_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateDeliveryRateCallbackRequest } from '../models/CreateDeliveryRateCallbackRequest.js';
export { makeDeliveryRateCallbackConfiguration } from '../models/DeliveryRateCallbackConfiguration.js';
export { makeDeliveryRateCallbackConfigurationPatchRequest } from '../models/DeliveryRateCallbackConfigurationPatchRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeUpdateDeliveryRateCallbackRequest } from '../models/UpdateDeliveryRateCallbackRequest.js';
