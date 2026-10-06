export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardAdjustmentsCreateInput } from '../declarations/GiftCardAdjustmentsCreateInput.js';
import type { GiftCardAdjustmentsCreateResponse } from '../declarations/GiftCardAdjustmentsCreateResponse.js';
import type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { SignedMoneyInput } from '../declarations/SignedMoneyInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export interface GiftCardAdjustmentsResource {
    /**
 * Posts a relative correction with a typed reason and separate administrative authority. Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and purchase reversals.
 * POST /v1/gift-cards/{gift_card_id}/adjustments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardAdjustments.create("example", {amount_money: {amount: "100", currency: "USD"}, reason: "complimentary"}, { idempotencyKey: idempotencyKey })
 */
    create(gift_card_id: InputValue<string>, params: (InputValue<{ "amount_money": SignedMoneyInput; "expected_version"?: string; "reason": "complimentary" | "balance_accidentally_decreased" | "support_issue" | "suspicious_activity" | "balance_accidentally_increased"; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<GiftCardCommandResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(gift_card_id: InputValue<string>, params: (InputValue<{ "amount_money": SignedMoneyInput; "expected_version"?: string; "reason": "complimentary" | "balance_accidentally_decreased" | "support_issue" | "suspicious_activity" | "balance_accidentally_increased"; }>) & { "X-Request-Id"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<GiftCardAdjustmentsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardAdjustments: GiftCardAdjustmentsResource;
}
export type { SignedMoneyInput } from '../declarations/SignedMoneyInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { GiftCardCommandResponse } from '../declarations/GiftCardCommandResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardAdjustmentsCreateResponse } from '../declarations/GiftCardAdjustmentsCreateResponse.js';
export type { GiftCardAdjustmentsCreateInput } from '../declarations/GiftCardAdjustmentsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { GiftCardCommandResult } from '../declarations/GiftCardCommandResult.js';
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
export type { CreateGiftCardAdjustmentRequestInput } from '../declarations/CreateGiftCardAdjustmentRequestInput.js';
export { makeGiftCardCommandResponse } from '../declarations/makeGiftCardCommandResponse.js';
export { makeGiftCardCommandResult } from '../declarations/makeGiftCardCommandResult.js';
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
