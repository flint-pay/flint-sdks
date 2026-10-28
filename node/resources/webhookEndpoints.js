import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/webhookEndpoints.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["createWebhookEndpoint"]:r0,["createWebhookTestEvent"]:r0,["deleteWebhookEndpoint"]:r0,["getWebhookEndpoint"]:r0,["listWebhookEndpoints"]:r0,["rotateWebhookEndpointSecret"]:r0,["updateWebhookEndpoint"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.webhookEndpoints = Object.freeze({
      create: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookEndpoint", result, path))),
      createWithResponse: async (params, options) => this.#runtime.request("createWebhookEndpoint", _sdkRequestInput([], [], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      createWebhookTestEvent: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createWebhookTestEvent", result, path))),
      createWebhookTestEventWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("createWebhookTestEvent", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      remove: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("deleteWebhookEndpoint", result, path))),
      removeWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("deleteWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "expected_version",
  "Idempotency-Key"
], false, false, params), options).then(_sdkResponse),
      get: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEndpoint", result, path))),
      getWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("getWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEndpoints", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEndpoints", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "event_sources",
  "partner_app_id"
], false, false, params), options),
      rotateWebhookSecret: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookEndpointSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("rotateWebhookEndpointSecret", result, path))),
      rotateWebhookSecretWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("rotateWebhookEndpointSecret", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, false, params), options).then(_sdkResponse),
      update: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("updateWebhookEndpoint", result, path))),
      updateWithResponse: async (webhook_endpoint_id, params, options) => this.#runtime.request("updateWebhookEndpoint", _sdkRequestInput([
  "webhook_endpoint_id"
], [webhook_endpoint_id], [
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCreateWebhookEndpointRequest } from '../models/CreateWebhookEndpointRequest.js';
export { makeCreateWebhookTestEventRequest } from '../models/CreateWebhookTestEventRequest.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeRotateWebhookSecretRequest } from '../models/RotateWebhookSecretRequest.js';
export { makeUpdateWebhookEndpointRequest } from '../models/UpdateWebhookEndpointRequest.js';
