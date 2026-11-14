import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { DiscountPreview, DiscountPreviewResponse, DiscountPreviewsCreateParams } from '../declarations/types-23.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
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
    DiscountPreviewsCreateParams,
    DiscountPreview,
    DiscountPreviewResponse,
    DiscountPreviewRequestInput
} from '../declarations/types-23.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateOrderDiscountInput, CreateOrderDiscountPromotionInput, CreateOrderDiscountManualInput } from '../declarations/types-11.js';
export type { ManualDiscountRequestInput } from '../declarations/types-35.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-39.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    PromotionCandidate,
    PromotionCombinesWith,
    PromotionExclusivity
} from '../declarations/types-51.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeCreateOrderDiscount, makeCreateOrderDiscountManual, makeCreateOrderDiscountPromotion } from '../declarations/types-73.js';
export { makeDiscountPreviewRequest } from '../declarations/types-77.js';
export { makeManualDiscountRequest } from '../declarations/types-78.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-81.js';
export interface DiscountPreviewsResource {
    /**
 * Evaluates promotion outcomes for an order without changing it. Returns the complete result
 * inside data, without creating a resource or requiring an idempotency key. Use `promotion_id` for
 * server-side apply flows where you already know the promotion, including code-gated promotions,
 * which then apply without a code and count only toward the promotion's `max_uses`. Checkout
 * credentials must use `promotion_code`. The response includes applied, skipped, and
 * single-threshold available promotion candidates.
 *
 * `POST /v1/discount-previews`
 * @see https://developers.withflintpay.com/docs/api/orders#createDiscountPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.discountPreviews.create({order_id: "ord_01KEZF7C0054GQKJ142A8X367A"})
 */
    create(params: DiscountPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DiscountPreview, DiscountPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly discountPreviews: DiscountPreviewsResource;
}
