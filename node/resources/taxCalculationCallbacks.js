import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/taxCalculationCallbacks.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fc3d4ebb81eff43cd1f2116b8f7163d9d3ffa65df69e12dfc8436f5ae8aff897';

const _sdkDescriptors = new DescriptorSource(settings, {["checkTaxCalculationCallbackConnection"]:r0,["createTaxCalculationCallback"]:r0,["createTaxCalculationCallbackTestDelivery"]:r0,["deleteTaxCalculationCallback"]:r0,["getTaxCalculationCallback"]:r0,["listTaxCalculationCallbacks"]:r0,["rotateTaxCalculationCallbackSecret"]:r0,["updateTaxCalculationCallback"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.taxCalculationCallbacks = Object.freeze({
      checkConnection: async (tax_calculation_callback_id, params, options) => this.#runtime.request("checkTaxCalculationCallbackConnection", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("checkTaxCalculationCallbackConnection", result, path))),
      create: async (params, options) => this.#runtime.request("createTaxCalculationCallback", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxCalculationCallback", result, path))),
      createTestDelivery: async (tax_calculation_callback_id, params, options) => this.#runtime.request("createTaxCalculationCallbackTestDelivery", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createTaxCalculationCallbackTestDelivery", result, path))),
      delete: async (tax_calculation_callback_id, params, options) => this.#runtime.request("deleteTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [
  "expected_version"
], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteTaxCalculationCallback", result, path))),
      get: async (tax_calculation_callback_id, params, options) => this.#runtime.request("getTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getTaxCalculationCallback", result, path))),
      list: async (params, options) => this.#runtime.request("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listTaxCalculationCallbacks", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listTaxCalculationCallbacks", result, path)),
      listItems: (params, options) => this.#runtime.items("listTaxCalculationCallbacks", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "query",
  "external_reference_id",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      rotateSecret: async (tax_calculation_callback_id, params, options) => this.#runtime.request("rotateTaxCalculationCallbackSecret", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateTaxCalculationCallbackSecret", result, path))),
      update: async (tax_calculation_callback_id, params, options) => this.#runtime.request("updateTaxCalculationCallback", _sdkRequestInput([
  "tax_calculation_callback_id"
], [tax_calculation_callback_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateTaxCalculationCallback", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateTaxCalculationCallbackRequest } from '../models/CreateTaxCalculationCallbackRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeTaxCalculationCallbackConfigurationPatchRequest } from '../models/TaxCalculationCallbackConfigurationPatchRequest.js';
export { makeTaxCalculationCallbackConfigurationRequest } from '../models/TaxCalculationCallbackConfigurationRequest.js';
export { makeUpdateTaxCalculationCallbackRequest } from '../models/UpdateTaxCalculationCallbackRequest.js';
export { makeWebhookSigningMethod } from '../models/WebhookSigningMethod.js';
