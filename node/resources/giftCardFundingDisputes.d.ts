export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
import type { GiftCardFundingDisputesHonorValueInput } from '../declarations/GiftCardFundingDisputesHonorValueInput.js';
import type { GiftCardFundingDisputesHonorValueResponse } from '../declarations/GiftCardFundingDisputesHonorValueResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface GiftCardFundingDisputesResource {
    /**
 * Accepts a confirmed funding dispute loss and honors all gift card value funded by that payment, including replacement refund lots. Records the dispute amount, original gift card consideration, honored value and preserved reservations. Clears only this dispute restriction; balances, unrelated restrictions and unresolved payment reservations remain intact. Requires gift card adjustment authority and a durable Idempotency-Key.
 * POST /v1/gift-card-funding-disputes/{dispute_id}/honor-value
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardFundingDisputes.honorValue("example", {reason: "example"}, { idempotencyKey: idempotencyKey })
 */
    honorValue(dispute_id: InputValue<string>, params: (InputValue<{ "reason": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    honorValueWithResponse(dispute_id: InputValue<string>, params: (InputValue<{ "reason": string; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardFundingDisputesHonorValueResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardFundingDisputes: GiftCardFundingDisputesResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardFundingDisputesHonorValueResponse } from '../declarations/GiftCardFundingDisputesHonorValueResponse.js';
export type { GiftCardFundingDisputesHonorValueInput } from '../declarations/GiftCardFundingDisputesHonorValueInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardCommandResult } from '../declarations/GiftCardCommandResult.js';
export type { GiftCardFundingLossDisposition } from '../declarations/GiftCardFundingLossDisposition.js';
export type { GiftCard } from '../declarations/GiftCard.js';
export type { GiftCardLoad } from '../declarations/GiftCardLoad.js';
export type { GiftCardFundingDispute } from '../declarations/GiftCardFundingDispute.js';
export type { GiftCardPurchaseRefundValueHold } from '../declarations/GiftCardPurchaseRefundValueHold.js';
export type { GiftCardPurchaseRefundAllocation } from '../declarations/GiftCardPurchaseRefundAllocation.js';
export type { GiftCardPurchaseRefundRecoveryDestination } from '../declarations/GiftCardPurchaseRefundRecoveryDestination.js';
export type { GiftCardPurchaseRefundValueAllocation } from '../declarations/GiftCardPurchaseRefundValueAllocation.js';
export type { GiftCardNotification } from '../declarations/GiftCardNotification.js';
export type { GiftCardNotificationDeliveryAttempt } from '../declarations/GiftCardNotificationDeliveryAttempt.js';
export type { GiftCardNotificationProviderOutcome } from '../declarations/GiftCardNotificationProviderOutcome.js';
export type { GiftCardRedemption } from '../declarations/GiftCardRedemption.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { HonorGiftCardFundingLossRequestInput } from '../declarations/HonorGiftCardFundingLossRequestInput.js';
export { makeGiftCardCommandResponse } from '../declarations/makeGiftCardCommandResponse.js';
export { makeGiftCardCommandResult } from '../declarations/makeGiftCardCommandResult.js';
export { makeGiftCardFundingLossDisposition } from '../declarations/makeGiftCardFundingLossDisposition.js';
export { makeGiftCard } from '../declarations/makeGiftCard.js';
export { makeGiftCardLoad } from '../declarations/makeGiftCardLoad.js';
export { makeGiftCardFundingDispute } from '../declarations/makeGiftCardFundingDispute.js';
export { makeGiftCardPurchaseRefundValueHold } from '../declarations/makeGiftCardPurchaseRefundValueHold.js';
export { makeGiftCardPurchaseRefundAllocation } from '../declarations/makeGiftCardPurchaseRefundAllocation.js';
export { makeGiftCardPurchaseRefundRecoveryDestination } from '../declarations/makeGiftCardPurchaseRefundRecoveryDestination.js';
export { makeGiftCardPurchaseRefundValueAllocation } from '../declarations/makeGiftCardPurchaseRefundValueAllocation.js';
export { makeGiftCardNotification } from '../declarations/makeGiftCardNotification.js';
export { makeGiftCardNotificationDeliveryAttempt } from '../declarations/makeGiftCardNotificationDeliveryAttempt.js';
export { makeGiftCardNotificationProviderOutcome } from '../declarations/makeGiftCardNotificationProviderOutcome.js';
export { makeGiftCardRedemption } from '../declarations/makeGiftCardRedemption.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
