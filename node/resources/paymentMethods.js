import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/paymentMethods.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createPaymentMethod"]:r0,["deletePaymentMethod"]:r0,["getPaymentMethod"]:r0,["listPaymentMethods"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.paymentMethods = Object.freeze({
      create: async (params, options) => this.#runtime.request("createPaymentMethod", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createPaymentMethod", result, path))),
      delete: async (payment_method_id, params, options) => this.#runtime.request("deletePaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deletePaymentMethod", result, path))),
      get: async (payment_method_id, params, options) => this.#runtime.request("getPaymentMethod", _sdkRequestInput([
  "payment_method_id"
], [payment_method_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getPaymentMethod", result, path))),
      list: async (params, options) => this.#runtime.request("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listPaymentMethods", result, path)),
      listItems: (params, options) => this.#runtime.items("listPaymentMethods", _sdkRequestInput([], [], [
  "customer_id",
  "page_size",
  "page_token",
  "type",
  "status",
  "usage",
  "created_after",
  "created_before",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeSavePaymentMethodRequest } from '../models/SavePaymentMethodRequest.js';
