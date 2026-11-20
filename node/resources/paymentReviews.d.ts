import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { PaymentReview } from '../declarations/types-53.js';
import type {
    PaymentReviewListResponse,
    PaymentReviewResponse,
    PaymentReviewsApproveParams,
    PaymentReviewsDeclineParams,
    PaymentReviewsGetParams,
    PaymentReviewsListParams
} from '../declarations/types-54.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    PaymentReviewsApproveParams,
    PaymentReviewResponse,
    PaymentReviewsDeclineParams,
    PaymentReviewsGetParams,
    PaymentReviewsListParams,
    PaymentReviewListResponse,
    PaymentReviewResolutionFailure,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentSourceCardPresentDetails,
    PaymentReviewPaymentSummary,
    PaymentReviewRisk
} from '../declarations/types-54.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-62.js';
export type { PaymentReview } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    DisputesAcceptParams
} from '../declarations/types-26.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion, DeclinePaymentReviewRequestInput, DeclinePaymentReviewRequest } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type { SettlementAmounts } from '../declarations/types-68.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export { makeDeclinePaymentReviewRequest } from '../declarations/types-85.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export interface PaymentReviewsResource {
    /**
 * Approves the payment and closes the review with `closed_reason: approved`. Approving never
 * captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving
 * a review you already approved returns it unchanged.
 *
 * `POST /v1/payment-reviews/{payment_review_id}/approve`
 * @param payment_review_id Flint payment review ID. Must be a valid ID with prefix rev_. Malformed
 * IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist
 * return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#approvePaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentReviews.approve("rev_01KEZF7C00BVBQ00XDFNKB1EF6", {}, { idempotencyKey:
 * idempotencyKey })
 */
    approve(payment_review_id: InputValue<string>, params?: PaymentReviewsApproveParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an
 * uncaptured authorization, or refunds the remaining captured amount (captured minus earlier
 * refunds) to the original payment method with reason `fraudulent`. The review is closed once the
 * decline completes. If the refund already failed, the review is `open` again with
 * `last_resolution_failure` set. While the refund is still processing, the decline is accepted but
 * not complete; wait for `payment_review.closed` or `payment_review.reopened`.
 *
 * `POST /v1/payment-reviews/{payment_review_id}/decline`
 * @param payment_review_id Flint payment review ID. Must be a valid ID with prefix rev_. Malformed
 * IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist
 * return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#declinePaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.paymentReviews.decline("rev_01KEZF7C00BVBQ00XDFNKB1EF6", undefined, { idempotencyKey:
 * idempotencyKey })
 */
    decline(payment_review_id: InputValue<string>, params?: PaymentReviewsDeclineParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.
 *
 * `GET /v1/payment-reviews/{payment_review_id}`
 * @param payment_review_id Flint payment review ID. Must be a valid ID with prefix rev_. Malformed
 * IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist
 * return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/risk-controls#getPaymentReview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentReviews.get("rev_01KEZF7C00BVBQ00XDFNKB1EF6")
 */
    get(payment_review_id: InputValue<string>, params?: PaymentReviewsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentReview, PaymentReviewResponse>>;
    /**
 * Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a
 * payment the bank approved. Every status is included unless you filter by `status`. Default
 * order: opened_at descending, then payment_review_id descending.
 *
 * `GET /v1/payment-reviews`
 * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.paymentReviews.list()
 */
    list(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PaymentReviewListResponse, PaymentReviewListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
     */
    listPages(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PaymentReviewListResponse, PaymentReviewListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/risk-controls#listPaymentReviews
     */
    listItems(params?: PaymentReviewsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentReview>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly paymentReviews: PaymentReviewsResource;
}
