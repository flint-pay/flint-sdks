import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { AdjustGiftCardBalanceResult, AdjustGiftCardBalanceResultResponse } from '../declarations/types-0.js';
import type { CashOutGiftCardResult, CashOutGiftCardResultResponse } from '../declarations/types-4.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    CreateGiftCardLoadResult,
    CreateGiftCardLoadResultResponse,
    CreateGiftCardResult,
    CreateGiftCardResultResponse
} from '../declarations/types-8.js';
import type { GiftCard, GiftCardListResponse } from '../declarations/types-23.js';
import type { GiftCardResponse } from '../declarations/types-24.js';
import type {
    GiftCardsAdjustBalanceParams,
    GiftCardsCashOutParams,
    GiftCardsCreateLoadParams,
    GiftCardsCreateParams,
    GiftCardsGetParams,
    GiftCardsListParams,
    GiftCardsLookupParams,
    GiftCardsRotateCodeParams,
    GiftCardsTransitionParams,
    GiftCardsUpdateParams
} from '../declarations/types-25.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { RotateGiftCardCodeResult, RotateGiftCardCodeResultResponse } from '../declarations/types-52.js';
import type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    GiftCardsAdjustBalanceParams,
    GiftCardsCashOutParams,
    GiftCardsCreateParams,
    GiftCardsCreateLoadParams,
    GiftCardsGetParams,
    GiftCardsListParams,
    GiftCardsLookupParams,
    GiftCardsRotateCodeParams,
    GiftCardsTransitionParams,
    GiftCardsUpdateParams,
    InitialGiftCardFundingInput
} from '../declarations/types-25.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type {
    AdjustGiftCardBalanceResult,
    AdjustGiftCardBalanceResultResponse,
    AdjustGiftCardBalanceRequestInput,
    AuthMode
} from '../declarations/types-0.js';
export type { CashOutGiftCardResult, CashOutGiftCardResultResponse, CashOutGiftCardRequestInput } from '../declarations/types-4.js';
export type {
    CreateGiftCardResult,
    CreateGiftCardResultResponse,
    CreateGiftCardLoadResult,
    CreateGiftCardLoadResultResponse,
    CreateGiftCardRequestInput,
    CreateGiftCardLoadRequestInput
} from '../declarations/types-8.js';
export type {
    GiftCard,
    GiftCardListResponse,
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
    GiftCardFundingSourceInput,
    GiftCardFundingSourceExternalPaymentInput,
    GiftCardFundingSourceFlintPaymentInput,
    GiftCardFundingSourceFlintManualPaymentInput,
    GiftCardFundingSourceImportInput,
    GiftCardFundingSourceAdjustmentInput,
    GiftCardFundingSourceGiftCardRefundInput,
    GiftCardFundingSourceGiftCardPurchaseRefundRecoveryInput,
    GiftCardFundingSourceStoreCreditInput
} from '../declarations/types-23.js';
export type {
    GiftCardResponse,
    GiftCardPurchaseRefundValueHold,
    GiftCardPurchaseRefundAllocation,
    GiftCardPurchaseRefundRecovery,
    GiftCardPurchaseRefundRecoveryDestination,
    GiftCardPurchaseRefundValueAllocation,
    GiftCardPurchaseRestoration,
    GiftCardRefundProvenance,
    GiftCardTransaction,
    GiftCardNotificationRecipientInput,
    GiftCardNotification,
    GiftCardNotificationDelivery,
    GiftCardNotificationDeliveryAttempt,
    GiftCardNotificationDeliveryEvent,
    GiftCardPurchaseRecipient,
    GiftCardRestriction
} from '../declarations/types-24.js';
export type { RotateGiftCardCodeResult, RotateGiftCardCodeResultResponse, RotateGiftCardCodeRequestInput } from '../declarations/types-52.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { SignedMoneyRequestInput } from '../declarations/types-53.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { LookupGiftCardRequestInput, LookupGiftCardRequest } from '../declarations/types-33.js';
export type {
    TransitionGiftCardRequestInput,
    TransitionGiftCardRequestFreezeInput,
    TransitionGiftCardRequestWithoutReasonInput,
    UpdateGiftCardRequestInput,
    UpdateGiftCardRequest
} from '../declarations/types-58.js';
export { makeAdjustGiftCardBalanceRequest } from '../declarations/types-61.js';
export { makeCashOutGiftCardRequest } from '../declarations/types-62.js';
export { makeCreateGiftCardLoadRequest, makeCreateGiftCardRequest } from '../declarations/types-63.js';
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
    makeGiftCardNotificationRecipient
} from '../declarations/types-67.js';
export { makeInitialGiftCardFunding } from '../declarations/types-68.js';
export { makeLookupGiftCardRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makeRotateGiftCardCodeRequest, makeSignedMoneyRequest } from '../declarations/types-72.js';
export {
    makeTransitionGiftCardRequest,
    makeTransitionGiftCardRequestFreeze,
    makeTransitionGiftCardRequestWithoutReason,
    makeUpdateGiftCardRequest
} from '../declarations/types-73.js';
export interface GiftCardsResource {
    /**
 * Posts a relative correction with a typed reason and separate administrative authority.
 * Corrections cannot consume reserved funds, exceed funding limits, or replace linked refunds and
 * purchase reversals. expected_version fences the gift card version.
 *
 * `POST /v1/gift-cards/{gift_card_id}/adjust-balance`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#adjustGiftCardBalance
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.adjustBalance("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount: "100",
 * currency: "USD"}, reason: "complimentary"}, { idempotencyKey: idempotencyKey })
 */
    adjustBalance(gift_card_id: InputValue<string>, params: GiftCardsAdjustBalanceParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<AdjustGiftCardBalanceResult, AdjustGiftCardBalanceResultResponse>>;
    /**
 * Records cash that the merchant attests it paid to the cardholder. Flint does not send cash. The
 * amount cannot exceed available value or consume payment reservations; cash_out_reference
 * identifies the cash disbursement the merchant made outside Flint. expected_version fences the
 * gift card version.
 *
 * `POST /v1/gift-cards/{gift_card_id}/cash-out`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#cashOutGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.cashOut("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {amount_money: {amount: "100",
 * currency: "USD"}, cash_out_reference: "example"}, { idempotencyKey: idempotencyKey })
 */
    cashOut(gift_card_id: InputValue<string>, params: GiftCardsCashOutParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CashOutGiftCardResult, CashOutGiftCardResultResponse>>;
    /**
 * Creates a merchant-issued USD gift card with optional paid funding or imported opening value.
 * External funding is merchant-attested and does not collect a payment. The full code is returned
 * only by issuance or code replacement and their authorized retries for 24 hours, while that code
 * remains current. Replacing a code ends recovery of that code. Financial command identity is
 * retained for the lifetime of the ledger.
 *
 * `POST /v1/gift-cards`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.create({currency: "USD"}, { idempotencyKey: idempotencyKey })
 */
    create(params: GiftCardsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateGiftCardResult, CreateGiftCardResultResponse>>;
    /**
 * Adds positive value with separately recorded consideration and funding provenance. Limits apply
 * to externally funded value and imports as well as Flint-funded sales. Loading a pending card
 * activates it; loading a frozen card does not remove its restrictions. expected_version fences
 * the gift card version.
 *
 * `POST /v1/gift-cards/{gift_card_id}/loads`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCardLoad
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.createLoad("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {consideration_money: {amount:
 * "100", currency: "USD"}, source: {customer_id: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV",
 * external_reference_id: "example", funding_source_type: "external_payment"}, value_money:
 * {amount: "100", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    createLoad(gift_card_id: InputValue<string>, params: GiftCardsCreateLoadParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<CreateGiftCardLoadResult, CreateGiftCardLoadResultResponse>>;
    /**
 * Retrieves the current gift card, including supported lifecycle actions and balance projections.
 * A gift card ID does not authorize a buyer to spend it.
 *
 * `GET /v1/gift-cards/{gift_card_id}`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCards.get("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(gift_card_id: InputValue<string>, params?: GiftCardsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCard, GiftCardResponse>>;
    /**
 * Lists gift cards in descending ID order within the authenticated merchant and environment. Reads
 * include masked codes, posted balance, reserved value and available value. Purchased cards have
 * no expiry or service fees. Default order: gift_card_id descending; this key uniquely orders the
 * results.
 *
 * `GET /v1/gift-cards`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCards
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCards.list()
 */
    list(params?: GiftCardsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardListResponse, GiftCardListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCards
     */
    listPages(params?: GiftCardsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardListResponse, GiftCardListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCards
     */
    listItems(params?: GiftCardsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCard>;
    /**
 * Evaluates a full bearer code in a request body. Codes contain 16 ASCII Crockford base32
 * characters, accept lowercase and hyphens, and normalize O to 0 and I/L to 1. Lookup is
 * side-effect-free and never reserves funds. Unknown, other-merchant and unusable codes return the
 * same error.
 *
 * `POST /v1/gift-cards/lookup`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#lookupGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCards.lookup({code: "example"})
 */
    lookup(params: GiftCardsLookupParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCard, GiftCardResponse>>;
    /**
 * Invalidates the old bearer credential and generates a new code for the same gift card. Balances,
 * funding, reservations and refund history are preserved. Requires
 * commerce.gift_cards.secrets.write. Include notification to send the new private recipient link.
 * Retired links cannot open the current code. The new full code is available in this response and
 * authorized retries only within 24 hours, while that code remains current. expected_version
 * fences the gift card version.
 *
 * `POST /v1/gift-cards/{gift_card_id}/rotate-code`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#rotateGiftCardCode
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.rotateCode("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    rotateCode(gift_card_id: InputValue<string>, params: GiftCardsRotateCodeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<RotateGiftCardCodeResult, RotateGiftCardCodeResultResponse>>;
    /**
 * Freezes spending, removes a merchant freeze, or closes a card after all value and restrictions
 * are resolved. Unfreezing cannot remove unresolved funding-dispute restrictions. Freezing does
 * not release accepted payment reservations. expected_version fences the gift card version.
 *
 * `POST /v1/gift-cards/{gift_card_id}/transitions`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#transitionGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.transition("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {action: "freeze", reason:
 * "suspicious_activity"}, { idempotencyKey: idempotencyKey })
 */
    transition(gift_card_id: InputValue<string>, params: GiftCardsTransitionParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCard, GiftCardResponse>>;
    /**
 * Updates descriptive associations. Omitted fields are preserved; null clears
 * external_reference_id or customer_id. This operation cannot change balances, currency, code or
 * status. expected_version fences the gift card version.
 *
 * `PATCH /v1/gift-cards/{gift_card_id}`
 * @param gift_card_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#updateGiftCard
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCards.update("gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", {external_reference_id:
 * "gift-card-2026-001"}, { idempotencyKey: idempotencyKey })
 */
    update(gift_card_id: InputValue<string>, params: GiftCardsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCard, GiftCardResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCards: GiftCardsResource;
}
