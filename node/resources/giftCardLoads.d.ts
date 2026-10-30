import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { GiftCardLoad, GiftCardLoadListResponse } from '../declarations/types-23.js';
import type { GiftCardLoadResponse, GiftCardLoadsGetParams, GiftCardLoadsListParams } from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    GiftCardLoadsGetParams,
    GiftCardLoadResponse,
    GiftCardLoadsListParams,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundRecovery,
    GiftCardPurchaseRefundRecoveryDestination,
    GiftCardPurchaseRefundValueAllocation,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance
} from '../declarations/types-24.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    GiftCardLoad,
    GiftCardLoadListResponse,
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
} from '../declarations/types-23.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
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
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface GiftCardLoadsResource {
    /**
 * Retrieves original value, consideration, funding provenance and remaining attributable value for
 * one load.
 *
 * `GET /v1/gift-card-loads/{gift_card_load_id}`
 * @param gift_card_load_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCardLoad
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardLoads.get("gcl_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(gift_card_load_id: InputValue<string>, params?: GiftCardLoadsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardLoad, GiftCardLoadResponse>>;
    /**
 * Lists funding lots in descending ID order. Consideration may be null for imported balances whose
 * original purchase price is unknown. The idempotency_key filter recovers a load after a lost
 * command response. Default order: gift_card_load_id descending; this key uniquely orders the
 * results.
 *
 * `GET /v1/gift-card-loads`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardLoads
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardLoads.list()
 */
    list(params?: GiftCardLoadsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardLoadListResponse, GiftCardLoadListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardLoads
     */
    listPages(params?: GiftCardLoadsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardLoadListResponse, GiftCardLoadListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardLoads
     */
    listItems(params?: GiftCardLoadsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardLoad>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardLoads: GiftCardLoadsResource;
}
