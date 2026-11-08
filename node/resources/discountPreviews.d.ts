import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { DiscountPreview, DiscountPreviewResponse, DiscountPreviewsCreateParams } from '../declarations/types-22.js';
import type { RequestOptions } from '../declarations/types-51.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
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
} from '../declarations/types-22.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-66.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateOrderDiscountInput, CreateOrderDiscountPromotionInput, CreateOrderDiscountManualInput } from '../declarations/types-10.js';
export type { ManualDiscountRequestInput } from '../declarations/types-34.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-37.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    ReadinessMerchantAccountSession
} from '../declarations/types-49.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-13.js';
export type { PromotionCandidate, PromotionCombinesWith, PromotionExclusivity } from '../declarations/types-48.js';
export { makeCreateOrderDiscount, makeCreateOrderDiscountManual, makeCreateOrderDiscountPromotion } from '../declarations/types-69.js';
export { makeDiscountPreviewRequest } from '../declarations/types-72.js';
export { makeManualDiscountRequest } from '../declarations/types-74.js';
export { makeMoneyValue } from '../declarations/types-75.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-76.js';
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
