import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customDomains.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomDomain"]:r0,["deleteCustomDomain"]:r0,["getCustomDomain"]:r0,["listCustomDomains"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomDomain", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomDomain", result, path))),
      removeWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomDomain", result, path))),
      getWithResponse: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateCustomDomainRequest } from '../models/CreateCustomDomainRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
