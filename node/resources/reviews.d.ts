import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { DeclinePaymentReviewRequestInput } from '../declarations/types-11.js';
import type { PaymentReview, PaymentReviewListResponse, PaymentReviewResponse } from '../declarations/types-36.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { ReviewsApproveInput, ReviewsDeclineInput, ReviewsGetInput, ReviewsListInput } from '../declarations/types-43.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    PaymentReview,
    PaymentReviewResponse,
    PaymentReviewListResponse,
    PaymentReviewResolutionFailure,
    PaymentSourceSummary,
    PaymentSourceAchDebitSummary,
    PaymentSourceCardSummary,
    PaymentReviewPaymentSummary,
    PaymentReviewRisk
} from '../declarations/types-36.js';
export type { SdkResponse, SettlementAmounts } from '../declarations/types-44.js';
export type { DeclinePaymentReviewRequestInput, DeclinePaymentReviewRequest } from '../declarations/types-11.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { ReviewsApproveInput, ReviewsDeclineInput, ReviewsGetInput, ReviewsListInput } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from '../declarations/types-16.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export type { MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export { makeDeclinePaymentReviewRequest } from '../declarations/types-65.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface ReviewsResource {
    /**
 * Approves the payment and closes the review with `closed_reason: approved`. Approving never
 * captures: capture a manual-capture payment yourself before `authorization_expires_at`. Approving
 * a review you already approved returns it unchanged.
 * @see reference/reviews.md#reviewsapprove
 * POST /v1/payment-reviews/{payment_review_id}/approve
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reviews.approve("example", {}, { idempotencyKey: idempotencyKey })
 */
    approve(payment_review_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentReview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reviews.md#reviewsapprove
     */
    approveWithResponse(payment_review_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentReviewResponse>>;
    /**
 * Declines the payment and closes the review with `closed_reason: declined`. Flint cancels an
 * uncaptured authorization, or refunds the remaining captured amount (captured minus earlier
 * refunds) to the original payment method with reason `fraudulent`. Returns `200` when the review
 * is closed, or when the refund already failed and the review is `open` again with
 * `last_resolution_failure` set. Returns `202` while the refund is processing; wait for
 * `payment_review.closed` or `payment_review.reopened`.
 * @see reference/reviews.md#reviewsdecline
 * POST /v1/payment-reviews/{payment_review_id}/decline
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.reviews.decline("example", undefined, { idempotencyKey: idempotencyKey })
 */
    decline(payment_review_id: InputValue<string>, params?: (InputValue<DeclinePaymentReviewRequestInput> | {
        "add_to_block_lists"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<PaymentReview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reviews.md#reviewsdecline
     */
    declineWithResponse(payment_review_id: InputValue<string>, params?: (InputValue<DeclinePaymentReviewRequestInput> | {
        "add_to_block_lists"?: never;
    })
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<PaymentReviewResponse>>;
    /**
 * Retrieves a payment review. Expand `payment_intent`, `order`, or `customer` to include them.
 * @see reference/reviews.md#reviewsget
 * GET /v1/payment-reviews/{payment_review_id}
 * @example
 * client.reviews.get("example")
 */
    get(payment_review_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentReview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reviews.md#reviewsget
     */
    getWithResponse(payment_review_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentReviewResponse>>;
    /**
 * Lists payment reviews, most recently opened first. A review opens when a `review` rule matches a
 * payment the bank approved. Every status is included unless you filter by `status`.
 * @see reference/reviews.md#reviewslist
 * GET /v1/payment-reviews
 * @example
 * client.reviews.list()
 */
    list(params?: {
        "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "opened_after"?: InputValue<string | globalThis.Date>;
        "opened_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<PaymentReviewListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/reviews.md#reviewslist
     */
    listWithResponse(params?: {
        "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "opened_after"?: InputValue<string | globalThis.Date>;
        "opened_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<PaymentReviewListResponse>>;
    /** Iterate pages lazily.
     * @see reference/reviews.md#reviewslist
     */
    listPages(params?: {
        "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "opened_after"?: InputValue<string | globalThis.Date>;
        "opened_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentReviewListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/reviews.md#reviewslist
     */
    listPagesWithResponse(params?: {
        "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "opened_after"?: InputValue<string | globalThis.Date>;
        "opened_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<PaymentReviewListResponse>>;
    /** Iterate items lazily.
     * @see reference/reviews.md#reviewslist
     */
    listItems(params?: {
        "status"?: InputValue<Array<"open" | "resolving" | "closed">>;
        "risk_level"?: InputValue<Array<"normal" | "elevated" | "highest" | "not_assessed">>;
        "payment_flow"?: InputValue<Array<"checkout"
            | "payment_link"
            | "invoice"
            | "subscription_initial"
            | "subscription_renewal"
            | "virtual_terminal"
            | "api">>;
        "payment_intent_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "customer_id"?: InputValue<string>;
        "opened_after"?: InputValue<string | globalThis.Date>;
        "opened_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "expand"?: InputValue<Array<"customer" | "order" | "payment_intent">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PaymentReview>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly reviews: ReviewsResource;
}
