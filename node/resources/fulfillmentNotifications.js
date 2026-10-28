import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/fulfillmentNotifications.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';

const _sdkDescriptors = new DescriptorSource(settings, {["getFulfillmentNotification"]:r0,["listFulfillmentNotifications"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.fulfillmentNotifications = Object.freeze({
      get: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getFulfillmentNotification", result, path))),
      getWithResponse: async (fulfillment_notification_id, params, options) => this.#runtime.request("getFulfillmentNotification", _sdkRequestInput([
  "fulfillment_notification_id"
], [fulfillment_notification_id], [
  "expand"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path))),
      listWithResponse: async (params, options) => this.#runtime.request("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params), options), [], (result, path) => this.#runtime.decodePayload("listFulfillmentNotifications", result, path)),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listFulfillmentNotifications", _sdkRequestInput([], [], [
  "fulfillment_id",
  "order_id",
  "fulfillment_event_id",
  "page_size",
  "page_token",
  "channel",
  "status",
  "notification_type",
  "expand"
], false, false, params), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeMoneyValue } from '../models/MoneyValue.js';
