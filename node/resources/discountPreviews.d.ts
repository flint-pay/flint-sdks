import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    DiscountPreview,
    DiscountPreviewRequestInput,
    DiscountPreviewResponse,
    DiscountPreviewsCreateInput
} from '../declarations/types-17.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
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
export type {
    DiscountPreviewRequestInput,
    DiscountPreview,
    DiscountPreviewResponse,
    DiscountPreviewsCreateInput
} from '../declarations/types-17.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { CreateOrderDiscountInput, CreateOrderDiscountPromotionInput, CreateOrderDiscountManualInput } from '../declarations/types-8.js';
export type { ManualDiscountRequestInput } from '../declarations/types-31.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    PromotionCandidate,
    PromotionCombinesWith,
    PromotionExclusivity
} from '../declarations/types-40.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeCreateOrderDiscount, makeCreateOrderDiscountManual, makeCreateOrderDiscountPromotion } from '../declarations/types-67.js';
export { makeDiscountPreviewRequest } from '../declarations/types-70.js';
export { makeManualDiscountRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-74.js';
export interface DiscountPreviewsResource {
    /**
 * Evaluates promotion outcomes for an order without changing it. Returns the complete result
 * inside data, without creating a resource or requiring an idempotency key. Use `promotion_id` for
 * server-side apply flows where you already know the promotion, including code-gated promotions,
 * which then apply without a code and count only toward the promotion's `max_uses`. Checkout
 * credentials must use `promotion_code`. The response includes applied, skipped, and
 * single-threshold available promotion candidates.
 * @see reference/discountPreviews.md#discountpreviewscreate
 * POST /v1/discount-previews
 * @example
 * client.discountPreviews.create({order_id: "example"})
 */
    create(params: (InputValue<DiscountPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<DiscountPreview>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/discountPreviews.md#discountpreviewscreate
     */
    createWithResponse(params: (InputValue<DiscountPreviewRequestInput>), options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant">>): Promise<SdkResponse<DiscountPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly discountPreviews: DiscountPreviewsResource;
}
