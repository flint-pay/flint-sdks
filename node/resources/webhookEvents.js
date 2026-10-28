import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/webhookEvents.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=211c6412b80dc6a8da7790543e7b38fc7ccafcb06ecc8cf8a89e4669bd2c8c67';

const _sdkDescriptors = new DescriptorSource(settings, {["getWebhookEvent"]:r0,["listWebhookDeliveries"]:r0,["listWebhookEvents"]:r0,["streamWebhookEvents"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getWebhookEvent", result, path))),
      getWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveries: async (params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path))),
      listWebhookDeliveriesWithResponse: async (params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveriesPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookDeliveries", result, path)),
      listWebhookDeliveriesPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options)),
      listWebhookDeliveriesItems: (params, options) => this.#runtime.items("listWebhookDeliveries", _sdkRequestInput([], [], [
  "webhook_event_id",
  "webhook_endpoint_id",
  "status",
  "created_after",
  "created_before",
  "page_size",
  "page_token"
], false, false, params), options),
      list: async (params, options) => this.#runtime.request("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "created_after",
  "created_before",
  "include"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "created_after",
  "created_before",
  "include"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "created_after",
  "created_before",
  "include"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listWebhookEvents", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "created_after",
  "created_before",
  "include"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listWebhookEvents", _sdkRequestInput([], [], [
  "page_size",
  "page_token",
  "webhook_endpoint_id",
  "delivery_status",
  "event_source",
  "partner_app_id",
  "event_type",
  "resource_type",
  "resource_id",
  "api_request_log_id",
  "request_id",
  "created_after",
  "created_before",
  "include"
], false, false, params), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "after_event_id",
  "Last-Event-ID"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
