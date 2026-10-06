import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCards.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCard"]:r0,["getGiftCard"]:r0,["listGiftCards"]:r0,["lookupGiftCard"]:r0,["rotateGiftCardCode"]:r0,["transitionGiftCard"]:r0,["updateGiftCard"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCards = Object.freeze({
      create: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (params, options) => this.#runtime.request("createGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_id, params, options) => this.#runtime.request("getGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCards", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "external_reference_id",
  "gift_card_id",
  "page_size",
  "page_token",
  "status",
  "Flint-Version"
], false, false, params), options),
      lookup: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      lookupWithResponse: async (params, options) => this.#runtime.request("lookupGiftCard", _sdkRequestInput([], [], [
  "X-Request-Id",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      rotateCode: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      rotateCodeWithResponse: async (gift_card_id, params, options) => this.#runtime.request("rotateGiftCardCode", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      transition: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      transitionWithResponse: async (gift_card_id, params, options) => this.#runtime.request("transitionGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
      update: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      updateWithResponse: async (gift_card_id, params, options) => this.#runtime.request("updateGiftCard", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(_sdkResponse),
    });
}
close() { return this.#runtime.close(); }
}
export { makeGiftCardCommandResponse } from '../models/GiftCardCommandResponse.js';
export { makeGiftCardResponse } from '../models/GiftCardResponse.js';
export { makeGiftCardListResponse } from '../models/GiftCardListResponse.js';
export { makeGiftCard } from '../models/GiftCard.js';
export { makeGiftCardCommandResult } from '../models/GiftCardCommandResult.js';
export { makeGiftCardLoad } from '../models/GiftCardLoad.js';
export { makeGiftCardFundingDispute } from '../models/GiftCardFundingDispute.js';
export { makeGiftCardPurchaseRefundValueHold } from '../models/GiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../models/GiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../models/GiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../models/GiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardNotification } from '../models/GiftCardNotification.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../models/GiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../models/GiftCardNotificationProviderOutcome.js';
export { makeGiftCardRedemption } from '../models/GiftCardRedemption.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
