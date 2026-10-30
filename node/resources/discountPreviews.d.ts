import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { DiscountPreview, DiscountPreviewResponse, DiscountPreviewsCreateParams } from '../declarations/types-20.js';
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
    DiscountPreviewsCreateParams,
    DiscountPreview,
    DiscountPreviewResponse,
    DiscountPreviewRequestInput
} from '../declarations/types-20.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateOrderDiscountInput, CreateOrderDiscountPromotionInput, CreateOrderDiscountManualInput } from '../declarations/types-9.js';
export type { ManualDiscountRequestInput } from '../declarations/types-33.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    PromotionCandidate,
    PromotionCombinesWith,
    PromotionExclusivity
} from '../declarations/types-45.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeCreateOrderDiscount, makeCreateOrderDiscountManual, makeCreateOrderDiscountPromotion } from '../declarations/types-64.js';
export { makeDiscountPreviewRequest } from '../declarations/types-67.js';
export { makeManualDiscountRequest, makeMoneyValue } from '../declarations/types-69.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-71.js';
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
 * client.discountPreviews.create({order_id: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV"})
 */
    create(params: DiscountPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<WithResponseInfo<DiscountPreview, DiscountPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly discountPreviews: DiscountPreviewsResource;
}
