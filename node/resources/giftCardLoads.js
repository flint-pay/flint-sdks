import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec, verifyWebhookFromPlan } from '../runtime.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardLoads.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCardLoad"]:r0,["getGiftCardLoad"]:r0,["listGiftCardLoads"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardLoads = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardLoad", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key"
], true, true, params), options).then(_sdkResponse),
      get: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [
  "X-Request-Id"
], false, false, params), options).then(result => _sdkPayload(result, ["data"])),
      getWithResponse: async (gift_card_load_id, params, options) => this.#runtime.request("getGiftCardLoad", _sdkRequestInput([
  "gift_card_load_id"
], [gift_card_load_id], [
  "X-Request-Id"
], false, false, params), options).then(_sdkResponse),
      list: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type"
], false, false, params), options).then(result => _sdkPayload(result, [])),
      listWithResponse: async (params, options) => this.#runtime.request("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type"
], false, false, params), options).then(_sdkResponse),
      listPages: (params, options) => _sdkPayloadPages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type"
], false, false, params), options), []),
      listPagesWithResponse: (params, options) => _sdkResponsePages(this.#runtime.pages("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type"
], false, false, params), options)),
      listItems: (params, options) => this.#runtime.items("listGiftCardLoads", _sdkRequestInput([], [], [
  "X-Request-Id",
  "created_after",
  "created_before",
  "gift_card_id",
  "idempotency_key",
  "order_id",
  "page_size",
  "page_token",
  "source_id",
  "source_type"
], false, false, params), options),
    });
}
close() { return this.#runtime.close(); }
}
export { makeGiftCardCommandResponse } from '../models/GiftCardCommandResponse.js';
export { makeGiftCardLoadResponse } from '../models/GiftCardLoadResponse.js';
export { makeGiftCardLoadListResponse } from '../models/GiftCardLoadListResponse.js';
export { makeGiftCardLoad } from '../models/GiftCardLoad.js';
export { makeGiftCardCommandResult } from '../models/GiftCardCommandResult.js';
export { makeGiftCard } from '../models/GiftCard.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeGiftCardNotification } from '../models/GiftCardNotification.js';
export { makeGiftCardNotificationDelivery } from '../models/GiftCardNotificationDelivery.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../models/GiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../models/GiftCardNotificationProviderOutcome.js';
export { makeGiftCardNotificationRecipient } from '../models/GiftCardNotificationRecipient.js';
export { makeGiftCardRedemption } from '../models/GiftCardRedemption.js';
export { makeResponseMeta } from '../models/ResponseMeta.js';
export { makeResponseWarning } from '../models/ResponseWarning.js';
export { makeNextAction } from '../models/NextAction.js';
export { makeNextActionMerchantAccountSession } from '../models/NextActionMerchantAccountSession.js';
export { makeGiftCardFundingDispute } from '../models/GiftCardFundingDispute.js';
export { makeGiftCardFundingLossResolution } from '../models/GiftCardFundingLossResolution.js';
export { makeGiftCardPurchaseRefundValueHold } from '../models/GiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../models/GiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecovery } from '../models/GiftCardPurchaseRefundRecovery.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../models/GiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../models/GiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardPurchaseRestoration } from '../models/GiftCardPurchaseRestoration.js';
export { makeGiftCardRefundProvenance } from '../models/GiftCardRefundProvenance.js';
export { makeGiftCardFundingSource } from '../models/GiftCardFundingSource.js';
