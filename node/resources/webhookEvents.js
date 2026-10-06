import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/webhookEvents.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=d3e94df4e2b3092877185e2938463692374ebf68487770c61d779ced93b5901e';

const _sdkDescriptors = new DescriptorSource(settings, {["getWebhookEvent"]:r0,["listWebhookDeliveries"]:r0,["listWebhookEvents"]:r0,["streamWebhookEvents"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.webhookEvents = Object.freeze({
      get: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("getWebhookEvent", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveries: async (webhook_event_id, params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWebhookDeliveriesWithResponse: async (webhook_event_id, params, options) => this.#runtime.request("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listWebhookDeliveriesPages: (webhook_event_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listWebhookDeliveriesPagesWithResponse: (webhook_event_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listWebhookDeliveriesItems: (webhook_event_id, params, options) => this.#runtime.items("listWebhookDeliveries", _sdkRequestInput([
  "webhook_event_id"
], [webhook_event_id], [
  "page_size",
  "page_token",
  "Flint-Version"
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
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
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
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
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
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options), []),
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
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
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
  "correlation_id",
  "created_after",
  "created_before",
  "include",
  "Flint-Version"
], false, false, params), options),
      stream: async (params, options) => this.#runtime.request("streamWebhookEvents", _sdkRequestInput([], [], [
  "event_type",
  "after_event_id",
  "Last-Event-ID",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeWebhookEventResponse } from '../models/WebhookEventResponse.js';
export { makeWebhookDeliveryListResponse } from '../models/WebhookDeliveryListResponse.js';
export { makeWebhookDelivery } from '../models/WebhookDelivery.js';
export { makeWebhookEventListResponse } from '../models/WebhookEventListResponse.js';
export { makeWebhookEvent } from '../models/WebhookEvent.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
