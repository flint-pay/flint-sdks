import { responsePayload as _sdkPayload, payloadPages as _sdkPayloadPages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { configuredDefaultCredentials, configuredWorkloadIdentityCredentials } from '../runtime.js';
export function defaultCredentials() { return configuredDefaultCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, "https://api.withflintpay.com" ?? undefined); }
export function workloadIdentityCredentials(options) { return configuredWorkloadIdentityCredentials({"environment":{"apiKey":"FLINT_API_KEY","token":"FLINT_ACCESS_TOKEN"},"mode":"merchant","scheme":"BearerAuth","workloadIdentity":{"credentialParameter":"workload_identity_id","envPrefix":"FLINT","tokenPath":"/v1/oauth/token"}}, options, "https://api.withflintpay.com" ?? undefined); }
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan, verifyWebhookAsyncFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardNotifications.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=5e54452691c15410b46820711c94ab762fbf37467ad416a5fdf25242df013545';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelGiftCardNotification"]:r0,["createGiftCardNotification"]:r0,["getGiftCardNotification"]:r0,["listGiftCardNotifications"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], true, false, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("cancelGiftCardNotification", result, path))),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [], true, true, params, [
  "Idempotency-Key",
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("createGiftCardNotification", result, path))),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, ["data"], (result, path) => this.#runtime.decodePayload("getGiftCardNotification", result, path))),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options).then(result => _sdkPayload(result, [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path))),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options), [], (result, path) => this.#runtime.decodePayload("listGiftCardNotifications", result, path)),
      listItems: (params, options) => this.#runtime.items("listGiftCardNotifications", _sdkRequestInput([], [], [
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status"
], false, false, params, [
  "Flint-Version",
  "X-Request-Id"
]), options),
    });
}
[Symbol.for('nodejs.util.inspect.custom')]() { return { resources: Object.keys(this).length }; }
close() { return this.#runtime.close(); }
}
export { makeCancelGiftCardNotificationRequest } from '../models/CancelGiftCardNotificationRequest.js';
export { makeCreateGiftCardNotificationRequest } from '../models/CreateGiftCardNotificationRequest.js';
export { makeGiftCardNotificationRecipient } from '../models/GiftCardNotificationRecipient.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
