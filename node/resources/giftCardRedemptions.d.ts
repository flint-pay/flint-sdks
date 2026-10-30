import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    GiftCardRedemption,
    GiftCardRedemptionListResponse,
    GiftCardRedemptionResponse,
    GiftCardRedemptionResult,
    GiftCardRedemptionResultResponse,
    GiftCardRedemptionsCancelParams,
    GiftCardRedemptionsCaptureParams,
    GiftCardRedemptionsCreateParams,
    GiftCardRedemptionsGetParams,
    GiftCardRedemptionsListParams
} from '../declarations/types-24.js';
import type { RequestOptions } from '../declarations/types-47.js';
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
    GiftCardRedemptionsCancelParams,
    GiftCardRedemptionResult,
    GiftCardRedemptionResultResponse,
    GiftCardRedemptionsCaptureParams,
    GiftCardRedemptionsCreateParams,
    GiftCardRedemptionsGetParams,
    GiftCardRedemption,
    GiftCardRedemptionResponse,
    GiftCardRedemptionsListParams,
    GiftCardRedemptionListResponse,
    GiftCardRestriction,
    GiftCardTransaction
} from '../declarations/types-24.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { _SdkRequiredIdempotency, _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { GiftCardVersionRequestInput, GiftCardVersionRequest } from '../declarations/types-25.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { GiftCard } from '../declarations/types-23.js';
export type { MoneyValue, NextAction, MoneyValueInput } from '../declarations/types-35.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type {
    CreateGiftCardRedemptionRequestInput,
    CreateGiftCardRedemptionRequestAutomaticInput,
    CreateGiftCardRedemptionRequestManualInput
} from '../declarations/types-8.js';
export {
    makeCreateGiftCardRedemptionRequest,
    makeCreateGiftCardRedemptionRequestAutomatic,
    makeCreateGiftCardRedemptionRequestManual
} from '../declarations/types-63.js';
export { makeGiftCardVersionRequest } from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface GiftCardRedemptionsResource {
    /**
 * Releases an uncaptured standalone reservation without posting a debit or refund. Flint order
 * reservations cannot be released while a processor outcome is unresolved. expected_version fences
 * the redemption version.
 *
 * `POST /v1/gift-card-redemptions/{gift_card_redemption_id}/cancel`
 * @param gift_card_redemption_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#cancelGiftCardRedemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.cancel("gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    cancel(gift_card_redemption_id: InputValue<string>, params?: GiftCardRedemptionsCancelParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCardRedemptionResult, GiftCardRedemptionResultResponse>>;
    /**
 * Posts the full reserved amount before the manual reservation expires. Capturing and expiry use
 * the same concurrency fence. Flint order reservations are resolved by their payment attempt and
 * cannot be captured through this standalone operation. expected_version fences the redemption
 * version.
 *
 * `POST /v1/gift-card-redemptions/{gift_card_redemption_id}/capture`
 * @param gift_card_redemption_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#captureGiftCardRedemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.capture("gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV", undefined, {
 * idempotencyKey: idempotencyKey })
 */
    capture(gift_card_redemption_id: InputValue<string>, params?: GiftCardRedemptionsCaptureParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<GiftCardRedemptionResult, GiftCardRedemptionResultResponse>>;
    /**
 * Posts an exact amount automatically or reserves it for one full manual capture. Insufficient
 * funds are rejected without a partial debit. Manual reservations default to 15 minutes and may be
 * bounded up to 24 hours. External integrations coordinate and compensate their other tenders
 * themselves. expected_version fences the version of the card in gift_card_id.
 *
 * `POST /v1/gift-card-redemptions`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#createGiftCardRedemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.giftCardRedemptions.create({amount_money: {amount: "100", currency: "USD"}, capture_mode:
 * "automatic", gift_card_id: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV", sale_reference: "example"}, {
 * idempotencyKey: idempotencyKey })
 */
    create(params: GiftCardRedemptionsCreateParams, options: _SdkRequiredIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardRedemptionResult, GiftCardRedemptionResultResponse>>;
    /**
 * Retrieves requested, reserved, captured, refunded and remaining refundable value with the
 * current reservation status.
 *
 * `GET /v1/gift-card-redemptions/{gift_card_redemption_id}`
 * @param gift_card_redemption_id Flint resource ID.
 * @see https://developers.withflintpay.com/docs/api/gift-cards#getGiftCardRedemption
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardRedemptions.get("gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(gift_card_redemption_id: InputValue<string>, params?: GiftCardRedemptionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardRedemption, GiftCardRedemptionResponse>>;
    /**
 * Lists reservations and captured redemptions in descending ID order. Retrieve by idempotency_key
 * to recover an operation after a lost response. Default order: gift_card_redemption_id
 * descending; this key uniquely orders the results.
 *
 * `GET /v1/gift-card-redemptions`
 * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardRedemptions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.giftCardRedemptions.list()
 */
    list(params?: GiftCardRedemptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<GiftCardRedemptionListResponse, GiftCardRedemptionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardRedemptions
     */
    listPages(params?: GiftCardRedemptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<GiftCardRedemptionListResponse, GiftCardRedemptionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/gift-cards#listGiftCardRedemptions
     */
    listItems(params?: GiftCardRedemptionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<GiftCardRedemption>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly giftCardRedemptions: GiftCardRedemptionsResource;
}
