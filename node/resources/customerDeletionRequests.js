import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/customerDeletionRequests.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["createCustomerDeletionRequest"]:r0,["getCustomerDeletionRequest"]:r0,["listCustomerDeletionRequests"]:r0,["resolveCustomerDeletionRequest"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.customerDeletionRequests = Object.freeze({
      create: async (params, options) => this.#runtime.request("createCustomerDeletionRequest", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createCustomerDeletionRequest", result, path))),
      get: async (customer_deletion_request_id, params, options) => this.#runtime.request("getCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getCustomerDeletionRequest", result, path))),
      list: async (params, options) => this.#runtime.request("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listCustomerDeletionRequests", result, path)),
      listItems: (params, options) => this.#runtime.items("listCustomerDeletionRequests", _sdkRequestInput([], [], [
  "status",
  "customer_id",
  "page_size",
  "page_token"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
      resolve: async (customer_deletion_request_id, params, options) => this.#runtime.request("resolveCustomerDeletionRequest", _sdkRequestInput([
  "customer_deletion_request_id"
], [customer_deletion_request_id], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("resolveCustomerDeletionRequest", result, path))),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateCustomerDeletionRequest } from '../models/CreateCustomerDeletionRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeResolveCustomerDeletionRequest } from '../models/ResolveCustomerDeletionRequest.js';
