import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fulfillmentEvents.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["getFulfillmentEvent"]:r0,["listFulfillmentEvents"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fulfillmentEvents = Object.freeze({
      get: async (fulfillment_event_id, params, options) => this.#runtime.request("getFulfillmentEvent", _sdkRequestInput([
  "fulfillment_event_id"
], [fulfillment_event_id], [
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentEvent", result, path))),
      list: async (params, options) => this.#runtime.request("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "sort_direction",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "sort_direction",
  "expand"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentEvents", result, path)),
      listItems: (params, options) => this.#runtime.items("listFulfillmentEvents", _sdkRequestInput([], [], [
  "fulfillment_id",
  "shipment_id",
  "package_id",
  "order_id",
  "page_size",
  "page_token",
  "event_type",
  "external_system",
  "external_event_id",
  "occurred_after",
  "occurred_before",
  "sort_by",
  "sort_direction",
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
