import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateGiftCardRequestInput, CreateGiftCardResult, CreateGiftCardResultResponse } from '../declarations/types-7.js';
import type { GiftCard, GiftCardListResponse } from '../declarations/types-20.js';
import type {
    GiftCardResponse,
    GiftCardsCreateInput,
    GiftCardsGetInput,
    GiftCardsListInput,
    GiftCardsLookupInput,
    GiftCardsRotateCodeInput,
    GiftCardsTransitionInput,
    GiftCardsUpdateInput
} from '../declarations/types-21.js';
import type { LookupGiftCardRequestInput } from '../declarations/types-31.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type {
    RotateGiftCardCodeRequestInput,
    RotateGiftCardCodeResult,
    RotateGiftCardCodeResultResponse,
    SdkResponse
} from '../declarations/types-46.js';
import type { TransitionGiftCardRequestInput } from '../declarations/types-50.js';
import type { UpdateGiftCardRequestInput } from '../declarations/types-51.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { CreateGiftCardRequestInput, CreateGiftCardResult, CreateGiftCardResultResponse } from '../declarations/types-7.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta } from '../declarations/types-42.js';
export type {
    SdkResponse,
    RotateGiftCardCodeRequestInput,
    RotateGiftCardCodeResult,
    RotateGiftCardCodeResultResponse
} from '../declarations/types-46.js';
export type {
    GiftCard,
    GiftCardListResponse,
    GiftCardFundingSourceInput,
    GiftCardFundingSourceExternalPaymentInput,
    GiftCardFundingSourceFlintPaymentInput,
    GiftCardFundingSourceFlintManualPaymentInput,
    GiftCardFundingSourceImportInput,
    GiftCardFundingSourceAdjustmentInput,
    GiftCardFundingSourceGiftCardRefundInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput,
    GiftCardFundingSourceStoreCreditInput,
    GiftCardNotificationRecipientInput,
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
    GiftCardFundingSourceStoreCredit,
    GiftCardNotification,
    GiftCardNotificationDelivery,
    GiftCardNotificationDeliveryAttempt,
    GiftCardNotificationDeliveryEvent
} from '../declarations/types-20.js';
export type {
    GiftCardResponse,
    GiftCardsCreateInput,
    GiftCardsGetInput,
    GiftCardsListInput,
    GiftCardsLookupInput,
    GiftCardsRotateCodeInput,
    GiftCardsTransitionInput,
    GiftCardsUpdateInput,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundRecovery,
    GiftCardPurchaseRefundRecoveryDestination,
    GiftCardPurchaseRefundValueAllocation,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance,
    GiftCardPurchaseRecipient,
    GiftCardTransaction,
    GiftCardRestriction
} from '../declarations/types-21.js';
export type { LookupGiftCardRequestInput, LookupGiftCardRequest } from '../declarations/types-31.js';
export type {
    TransitionGiftCardRequestInput,
    TransitionGiftCardRequestFreezeInput,
    TransitionGiftCardRequestWithoutReasonInput
} from '../declarations/types-50.js';
export type { UpdateGiftCardRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { InitialGiftCardFundingInput } from '../declarations/types-25.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeCreateGiftCardRequest } from '../declarations/types-67.js';
export {
    makeGiftCardFundingSource,
    makeGiftCardFundingSourceAdjustment,
    makeGiftCardFundingSourceExternalPayment,
    makeGiftCardFundingSourceFlintManualPayment,
    makeGiftCardFundingSourceFlintPayment,
    makeGiftCardFundingSourceGiftCardPurchaseRefundRecovery,
    makeGiftCardFundingSourceGiftCardRefund,
    makeGiftCardFundingSourceImport,
    makeGiftCardFundingSourceStoreCredit,
    makeGiftCardNotificationRecipient,
    makeInitialGiftCardFunding
} from '../declarations/types-71.js';
export { makeLookupGiftCardRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeRotateGiftCardCodeRequest } from '../declarations/types-76.js';
export {
    makeTransitionGiftCardRequest,
    makeTransitionGiftCardRequestFreeze,
    makeTransitionGiftCardRequestWithoutReason,
    makeUpdateGiftCardRequest
} from '../declarations/types-77.js';
export interface GiftCardsResource {
    /**
 * Creates a merchant-issued USD gift card with optional paid funding or imported opening value.
 * External funding is merchant-attested and does not collect a payment. The full code is returned
 * only by issuance or code replacement and their authorized retries for 24 hours, while that code
 * remains current. Replacing a code ends recovery of that code. Financial command identity is
 * retained for the lifetime of the ledger.
 * @see reference/giftCards.md#giftcardscreate
 * POST /v1/gift-cards
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.create({currency: "USD"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<CreateGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<CreateGiftCardResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardscreate
     */
    createWithResponse(params: (InputValue<CreateGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<CreateGiftCardResultResponse>>;
    /**
 * Retrieves the current gift card, including supported lifecycle actions and balance projections.
 * A gift card ID does not authorize a buyer to spend it.
 * @see reference/giftCards.md#giftcardsget
 * GET /v1/gift-cards/{gift_card_id}
 * @example
 * client.giftCards.get("example")
 */
    get(gift_card_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardsget
     */
    getWithResponse(gift_card_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardResponse>>;
    /**
 * Lists gift cards in descending ID order within the authenticated merchant and environment. Reads
 * include masked codes, posted balance, reserved value and available value. Purchased cards have
 * no expiry or service fees. Default order: gift_card_id descending; this key uniquely orders the
 * results.
 * @see reference/giftCards.md#giftcardslist
 * GET /v1/gift-cards
 * @example
 * client.giftCards.list()
 */
    list(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCardListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardslist
     */
    listWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardListResponse>>;
    /** Iterate pages lazily.
     * @see reference/giftCards.md#giftcardslist
     */
    listPages(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/giftCards.md#giftcardslist
     */
    listPagesWithResponse(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<GiftCardListResponse>>;
    /** Iterate items lazily.
     * @see reference/giftCards.md#giftcardslist
     */
    listItems(params?: {
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "customer_id"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "idempotency_key"?: InputValue<string>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "closed" | "frozen" | "pending">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCard>;
    /**
 * Evaluates a full bearer code in a request body. Codes contain 16 ASCII Crockford base32
 * characters, accept lowercase and hyphens, and normalize O to 0 and I/L to 1. Lookup is
 * side-effect-free and never reserves funds. Unknown, other-merchant and unusable codes return the
 * same error.
 * @see reference/giftCards.md#giftcardslookup
 * POST /v1/gift-cards/lookup
 * @example
 * client.giftCards.lookup({code: "example"})
 */
    lookup(params: (InputValue<LookupGiftCardRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<GiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardslookup
     */
    lookupWithResponse(params: (InputValue<LookupGiftCardRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<GiftCardResponse>>;
    /**
 * Invalidates the old bearer credential and generates a new code for the same gift card. Balances,
 * funding, reservations and refund history are preserved. Requires
 * commerce.gift_cards.secrets.write. Include notification to send the new private recipient link.
 * Retired links cannot open the current code. The new full code is available in this response and
 * authorized retries only within 24 hours, while that code remains current. expected_version
 * fences the gift card version.
 * @see reference/giftCards.md#giftcardsrotatecode
 * POST /v1/gift-cards/{gift_card_id}/rotate-code
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.rotateCode("example", {}, { idempotencyKey: idempotencyKey })
 */
    rotateCode(gift_card_id: InputValue<string>, params: (InputValue<RotateGiftCardCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<RotateGiftCardCodeResult>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardsrotatecode
     */
    rotateCodeWithResponse(gift_card_id: InputValue<string>, params: (InputValue<RotateGiftCardCodeRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<RotateGiftCardCodeResultResponse>>;
    /**
 * Freezes spending, removes a merchant freeze, or closes a card after all value and restrictions
 * are resolved. Unfreezing cannot remove unresolved funding-dispute restrictions. Freezing does
 * not release accepted payment reservations. expected_version fences the gift card version.
 * @see reference/giftCards.md#giftcardstransition
 * POST /v1/gift-cards/{gift_card_id}/transitions
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.transition("example", {action: "freeze", reason: "suspicious_activity"}, {
 * idempotencyKey: idempotencyKey })
 */
    transition(gift_card_id: InputValue<string>, params: (InputValue<TransitionGiftCardRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardstransition
     */
    transitionWithResponse(gift_card_id: InputValue<string>, params: (InputValue<TransitionGiftCardRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardResponse>>;
    /**
 * Updates descriptive associations. Omitted fields are preserved; null clears
 * external_reference_id or customer_id. This operation cannot change balances, currency, code or
 * status. expected_version fences the gift card version.
 * @see reference/giftCards.md#giftcardsupdate
 * PATCH /v1/gift-cards/{gift_card_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(gift_card_id: InputValue<string>, params: (InputValue<UpdateGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<GiftCard>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/giftCards.md#giftcardsupdate
     */
    updateWithResponse(gift_card_id: InputValue<string>, params: (InputValue<UpdateGiftCardRequestInput>) & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<GiftCardResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCards: GiftCardsResource;
}
