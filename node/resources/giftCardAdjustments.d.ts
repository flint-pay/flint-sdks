import type { InputValue } from '../runtime.js';
import type {
    AdjustGiftCardBalanceRequestInput,
    AdjustGiftCardBalanceResult,
    AdjustGiftCardBalanceResultResponse
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { GiftCardAdjustmentsCreateInput } from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkRequiredIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type {
    AdjustGiftCardBalanceRequestInput,
    AdjustGiftCardBalanceResult,
    AdjustGiftCardBalanceResultResponse,
    AuthMode
} from '../declarations/types-0.js';
export type { _SdkRequiredIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type {
    GiftCardAdjustmentsCreateInput,
    GiftCard,
    GiftCardLoad,
    GiftCardFundingDispute,
    GiftCardFundingLossResolution,
    GiftCardFundingSource,
    GiftCardFundingSourceExternalPayment,
    GiftCardFundingSourceFlintPayment,
    GiftCardFundingSourceFlintManualPayment,
    GiftCardFundingSourceImport,
    GiftCardFundingSourceAdjustment,
    GiftCardFundingSourceGiftCardRefund,
    GiftCardFundingSourceGiftCardPurchaseRefundRecovery,
    GiftCardFundingSourceStoreCredit
} from '../declarations/types-18.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { SignedMoneyInput } from '../declarations/types-44.js';
export type { Credentials } from '../declarations/types-9.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type {
    GiftCardRestriction,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundRecovery,
    GiftCardPurchaseRefundRecoveryDestination,
    GiftCardPurchaseRefundValueAllocation,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance,
    GiftCardTransaction
} from '../declarations/types-19.js';
export { makeAdjustGiftCardBalanceRequest } from '../declarations/types-61.js';
export {
    makeGiftCardFundingSource,
    makeGiftCardFundingSourceAdjustment,
    makeGiftCardFundingSourceExternalPayment,
    makeGiftCardFundingSourceFlintManualPayment,
    makeGiftCardFundingSourceFlintPayment,
    makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery,
    makeGiftCardFundingSourceGiftCardRefund,
    makeGiftCardFundingSourceImport,
    makeGiftCardFundingSourceStoreCredit
} from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeSignedMoney } from '../declarations/types-71.js';
export interface GiftCardAdjustmentsResource {
    /**
 * Posts a relative correction with a typed reason and separate administrative authority.
 * Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and
 * purchase reversals. expected_version fences the gift card version.
 * @see reference/giftCardAdjustments.md#giftcardadjustmentscreate
 * POST /v1/gift-cards/{gift_card_id}/adjust-balance
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardAdjustments.create("example", {amount_money: {amount: "100", currency: "USD"},
 * reason: "complimentary"}, { idempotencyKey: idempotencyKey })
 */
    create(gift_card_id: InputValue<string>, params: (InputValue<AdjustGiftCardBalanceRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<AdjustGiftCardBalanceResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardAdjustments.md#giftcardadjustmentscreate
     */
    createWithResponse(gift_card_id: InputValue<string>, params: (InputValue<AdjustGiftCardBalanceRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<AdjustGiftCardBalanceResultResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardAdjustments: GiftCardAdjustmentsResource;
}
