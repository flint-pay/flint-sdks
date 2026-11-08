import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse } from '../declarations/types-9.js';
import type {
    GiftCardLoad,
    GiftCardLoadListResponse,
    GiftCardLoadResponse,
    GiftCardLoadsCreateParams,
    GiftCardLoadsGetParams,
    GiftCardLoadsListParams
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
    GiftCardLoadsCreateParams,
    GiftCardLoadsGetParams,
    GiftCardLoad,
    GiftCardLoadResponse,
    GiftCardLoadsListParams,
    GiftCardLoadListResponse,
    GiftCardFundingSourceRequestInput,
    GiftCardFundingSourceExternalPaymentRequestInput,
    GiftCardFundingSourceFlintPaymentRequestInput,
    GiftCardFundingSourceFlintManualPaymentRequestInput,
    GiftCardFundingSourceImportRequestInput,
    GiftCardFundingSourceAdjustmentRequestInput,
    GiftCardFundingSourceGiftCardRefundRequestInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput,
    GiftCardFundingSourceStoreCreditRequestInput,
    GiftCard,
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
} from '../declarations/types-25.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-51.js';
export type { CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse, CreateGiftCardLoadRequestInput } from '../declarations/types-9.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-37.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type {
    GiftCardRestriction,
    GiftCardTransaction,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundRecovery,
    GiftCardPurchaseRefundRecoveryDestination,
    GiftCardPurchaseRefundValueAllocation,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance
} from '../declarations/types-26.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-49.js';
export type { DisputesAcceptParams } from '../declarations/types-22.js';
export { makeCreateGiftCardLoadRequest } from '../declarations/types-69.js';
export {
    makeGiftCardFundingSourceAdjustmentRequest,
    makeGiftCardFundingSourceExternalPaymentRequest,
    makeGiftCardFundingSourceFlintManualPaymentRequest,
    makeGiftCardFundingSourceFlintPaymentRequest,
    makeGiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequest,
    makeGiftCardFundingSourceGiftCardRefundRequest,
    makeGiftCardFundingSourceImportRequest,
    makeGiftCardFundingSourceRequest,
    makeGiftCardFundingSourceStoreCreditRequest
} from '../declarations/types-73.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export interface GiftCardLoadsResource {
    /**
 * Adds positive value with separately recorded consideration and funding provenance. Limits apply
 * to externally funded value and imports as well as Flint-funded sales. Loading a pending card
 * activates it; loading a frozen card does not remove its restrictions. expected_gift_card_version
 * fences the gift card version.
 *
 * `POST /v1/gift-card-loads`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCardLoad
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardLoads.create({consideration_money: {amount: "100", currency: "USD"},
 * gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", source: {customer_id:
 * "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV", external_reference_id: "example", funding_source_type:
 * "external_payment"}, value_money: {amount: "100", currency: "USD"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: GiftCardLoadsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse>>;
    /**
 * Retrieves original value, consideration, funding provenance and remaining attributable value for
 * one load.
 *
 * `GET /v1/gift-card-loads/{gift_card_load_id}`
 * @param gift_card_load_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCardLoad
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardLoads.get("gcl_01KEZF7C00YJED2857SE0J6KWC")
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
