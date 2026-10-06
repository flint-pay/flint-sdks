import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardNotifications.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=f67f6eaf1051f21ec6ba8a2fb3534a619d1f5d2afe43c079dcee44663fec8859';

const _sdkDescriptors = new DescriptorSource(settings, {["cancelGiftCardNotification"]:r0,["createGiftCardNotification"]:r0,["getGiftCardNotification"]:r0,["listGiftCardNotifications"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardNotifications = Object.freeze({
      cancel: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      cancelWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("cancelGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      create: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCardNotification", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_notification_id, params, options) => this.#runtime.request("getGiftCardNotification", _sdkRequestInput([
  "gift_card_notification_id"
], [gift_card_notification_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardNotifications", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeGiftCardCommandResponse } from '../models/GiftCardCommandResponse.js';
export { makeGiftCardNotificationResponse } from '../models/GiftCardNotificationResponse.js';
export { makeGiftCardNotificationListResponse } from '../models/GiftCardNotificationListResponse.js';
export { makeGiftCardNotification } from '../models/GiftCardNotification.js';
export { makeGiftCardCommandResult } from '../models/GiftCardCommandResult.js';
export { makeGiftCard } from '../models/GiftCard.js';
export { makeGiftCardLoad } from '../models/GiftCardLoad.js';
export { makeGiftCardFundingDispute } from '../models/GiftCardFundingDispute.js';
export { makeGiftCardPurchaseRefundValueHold } from '../models/GiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../models/GiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../models/GiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../models/GiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardRedemption } from '../models/GiftCardRedemption.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../models/GiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../models/GiftCardNotificationProviderOutcome.js';
