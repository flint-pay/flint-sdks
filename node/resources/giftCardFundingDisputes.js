import { responsePayload as _sdkPayload, sdkResponse as _sdkResponse, payloadPages as _sdkPayloadPages, sdkResponsePages as _sdkResponsePages } from '../response.js';
import { requestInput as _sdkRequestInput } from '../request.js';
import { runtimeFromPlan, modelFromCodec, isKnownCodec } from '../runtime.js';
export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
import r0 from '../descriptors/resources/giftCardFundingDisputes.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { DescriptorSource } from '../descriptor-source.js';
import settings from '../descriptors/settings.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';

const _sdkDescriptors = new DescriptorSource(settings, {["honorGiftCardFundingLoss"]:r0});
export class Client {
#runtime;
constructor(options = {}) {
this.#runtime = runtimeFromPlan(_sdkDescriptors, options);
this.giftCardFundingDisputes = Object.freeze({
      honorValue: async (dispute_id, params, options) => this.#runtime.request("honorGiftCardFundingLoss", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
  "X-Request-Id",
  "Idempotency-Key",
  "Flint-Version"
], true, true, params), options).then(result => _sdkPayload(result, ["data"])),
      honorValueWithResponse: async (dispute_id, params, options) => this.#runtime.request("honorGiftCardFundingLoss", _sdkRequestInput([
  "dispute_id"
], [dispute_id], [
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
export { makeGiftCardFundingLossDisposition } from '../models/GiftCardFundingLossDisposition.js';
export { makeGiftCard } from '../models/GiftCard.js';
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
