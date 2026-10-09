import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardAdjustments.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=658e960cd5fac48cd38e1dd15296958df0d104dd5904c2165f4e3078746d39e7';

const _sdkDescriptors = new DescriptorSource(settings, {["createGiftCardAdjustment"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardAdjustments = Object.freeze({
      create: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardAdjustment", _sdkRequestInput([
  "gift_card_id"
], [gift_card_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      createWithResponse: async (gift_card_id, params, options) => this.#runtime.request("createGiftCardAdjustment", _sdkRequestInput([
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
export { makeGiftCardCommandResult } from '../models/GiftCardCommandResult.js';
export { makeGiftCard } from '../models/GiftCard.js';
export { makeMoneyValue } from '../models/MoneyValue.js';
export { makeGiftCardLoad } from '../models/GiftCardLoad.js';
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
