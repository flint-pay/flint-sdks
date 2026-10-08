import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/webhookDeliveries.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=245b7fb11d6174517fe5d194b5fb87c42348ace248a5c84bbab9ef7bfe2b9e5e';

const _sdkDescriptors = new DescriptorSource(settings, {["getWebhookDelivery"]:r0,["listWebhookDeliveryAttempts"]:r0,["resendWebhookDelivery"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.webhookDeliveries = Object.freeze({
      get: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("getWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAttempts: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listAttemptsWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listAttemptsPages: (webhook_delivery_id, params, options) => _sdkPayloadPages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options), []),
      listAttemptsPagesWithResponse: (webhook_delivery_id, params, options) => _sdkResponsePages(this.#runtime.pages("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options)),
      listAttemptsItems: (webhook_delivery_id, params, options) => this.#runtime.items("listWebhookDeliveryAttempts", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "page_size",
  "page_token",
  "Flint-Version"
], false, false, params), options),
      resend: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(result => _sdkPayload(result, ["data"])),
      resendWithResponse: async (webhook_delivery_id, params, options) => this.#runtime.request("resendWebhookDelivery", _sdkRequestInput([
  "webhook_delivery_id"
], [webhook_delivery_id], [
  "Idempotency-Key",
  "Flint-Version"
], true, false, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeWebhookDeliveryResponse } from '../models/WebhookDeliveryResponse.js';
export { makeWebhookDeliveryAttemptListResponse } from '../models/WebhookDeliveryAttemptListResponse.js';
export { makeWebhookDeliveryAttempt } from '../models/WebhookDeliveryAttempt.js';
export { makeWebhookDeliveryActionResponse } from '../models/WebhookDeliveryActionResponse.js';
export { makeWebhookDelivery } from '../models/WebhookDelivery.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeWebhookDeliveryAction } from '../models/WebhookDeliveryAction.js';
