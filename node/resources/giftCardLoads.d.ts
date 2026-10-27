import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateGiftCardLoadRequestInput, CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse } from '../declarations/types-6.js';
import type {
    GiftCardLoad,
    GiftCardLoadListResponse,
    GiftCardLoadResponse,
    GiftCardLoadsCreateInput,
    GiftCardLoadsGetInput,
    GiftCardLoadsListInput
} from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { CreateGiftCardLoadRequestInput, CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse } from '../declarations/types-6.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type {
    GiftCardLoad,
    GiftCardLoadResponse,
    GiftCardLoadListResponse,
    GiftCardLoadsCreateInput,
    GiftCardLoadsGetInput,
    GiftCardLoadsListInput,
    GiftCardFundingSourceInput,
    GiftCardFundingSourceExternalPaymentInput,
    GiftCardFundingSourceFlintPaymentInput,
    GiftCardFundingSourceFlintManualPaymentInput,
    GiftCardFundingSourceImportInput,
    GiftCardFundingSourceAdjustmentInput,
    GiftCardFundingSourceGiftCardRefundInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput,
    GiftCardFundingSourceStoreCreditInput,
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
} from '../declarations/types-18.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
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
} from '../declarations/types-19.js';
export { makeCreateGiftCardLoadRequest } from '../declarations/types-63.js';
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
export interface GiftCardLoadsResource {
    /**
 * Adds positive value with separately recorded consideration and funding provenance. Limits apply
 * to externally funded value and imports as well as Flint-funded sales. Loading a pending card
 * activates it; loading a frozen card does not remove its restrictions. expected_version fences
 * the gift card version.
 * @see reference/giftCardLoads.md#giftcardloadscreate
 * POST /v1/gift-cards/{gift_card_id}/loads
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardLoads.create("example", {consideration_money: {amount: "100", currency: "USD"},
 * source: {customer_id: "example", external_reference_id: "example", funding_source_type:
 * "external_payment"}, value_money: {amount: "100", currency: "USD"}}, { idempotencyKey:
 * idempotencyKey })
 */
    create(gift_card_id: InputValue<string>, params: (InputValue<CreateGiftCardLoadRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<CreateGiftCardLoadResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardLoads.md#giftcardloadscreate
     */
    createWithResponse(gift_card_id: InputValue<string>, params: (InputValue<CreateGiftCardLoadRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<CreateGiftCardLoadResultResponse>>;
    /**
 * Retrieves original value, consideration, funding provenance and remaining attributable value for
 * one load.
 * @see reference/giftCardLoads.md#giftcardloadsget
 * GET /v1/gift-card-loads/{gift_card_load_id}
 * @example
 * client.giftCardLoads.get("example")
 */
    get(gift_card_load_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardLoad>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardLoads.md#giftcardloadsget
     */
    getWithResponse(gift_card_load_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardLoadResponse>>;
    /**
 * Lists funding lots in descending ID order. Consideration may be null for imported balances whose
 * original purchase price is unknown. The idempotency_key filter recovers a load after a lost
 * command response.
 * @see reference/giftCardLoads.md#giftcardloadslist
 * GET /v1/gift-card-loads
 * @example
 * client.giftCardLoads.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "funding_source_type"?: InputValue<Array<"adjustment"
            | "external_payment"
            | "flint_manual_payment"
            | "flint_payment"
            | "gift_card_purchase_refund_recovery"
            | "gift_card_refund"
            | "import"
            | "store_credit">>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "source_external_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardLoadListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCardLoads.md#giftcardloadslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "funding_source_type"?: InputValue<Array<"adjustment"
            | "external_payment"
            | "flint_manual_payment"
            | "flint_payment"
            | "gift_card_purchase_refund_recovery"
            | "gift_card_refund"
            | "import"
            | "store_credit">>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "source_external_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardLoadListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCardLoads.md#giftcardloadslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "funding_source_type"?: InputValue<Array<"adjustment"
            | "external_payment"
            | "flint_manual_payment"
            | "flint_payment"
            | "gift_card_purchase_refund_recovery"
            | "gift_card_refund"
            | "import"
            | "store_credit">>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "source_external_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardLoadListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCardLoads.md#giftcardloadslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "funding_source_type"?: InputValue<Array<"adjustment"
            | "external_payment"
            | "flint_manual_payment"
            | "flint_payment"
            | "gift_card_purchase_refund_recovery"
            | "gift_card_refund"
            | "import"
            | "store_credit">>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "source_external_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardLoadListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCardLoads.md#giftcardloadslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "funding_source_type"?: InputValue<Array<"adjustment"
            | "external_payment"
            | "flint_manual_payment"
            | "flint_payment"
            | "gift_card_purchase_refund_recovery"
            | "gift_card_refund"
            | "import"
            | "store_credit">>;
        "gift_card_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "source_external_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardLoad>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardLoads: GiftCardLoadsResource;
}
