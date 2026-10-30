import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customDomains.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomDomain"]:r0,["deleteCustomDomain"]:r0,["getCustomDomain"]:r0,["listCustomDomains"]:r0,["validateCustomDomain"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customDomains = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomDomain", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomDomain", result, path))),
      delete: async (custom_domain_id, params, options) => this.#runtime.request("deleteCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteCustomDomain", result, path))),
      get: async (custom_domain_id, params, options) => this.#runtime.request("getCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomDomain", result, path))),
      list: async (params, options) => this.#runtime.request("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomDomains", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomDomains", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "type",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      validate: async (custom_domain_id, params, options) => this.#runtime.request("validateCustomDomain", _sdkRequestInput([
  "custom_domain_id"
], [custom_domain_id], [], false, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("validateCustomDomain", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateCustomDomainRequest } from '../models/CreateCustomDomainRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
