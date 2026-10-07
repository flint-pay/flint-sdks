export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateOrderDiscountInput } from '../declarations/CreateOrderDiscountInput.js';
import type { DiscountPreviewResponse } from '../declarations/DiscountPreviewResponse.js';
import type { DiscountPreviewsCreateInput } from '../declarations/DiscountPreviewsCreateInput.js';
import type { DiscountPreviewsCreateResponse } from '../declarations/DiscountPreviewsCreateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface DiscountPreviewsResource {
    /**
 * Evaluates promotion outcomes for an order without changing it. Returns the complete result inside data, without creating a resource or requiring an idempotency key. Merchant-authenticated callers may include a promotion by promotion_id or promotion_code; checkout-authenticated buyers must provide a code. The response includes applied, skipped, and single-threshold available promotion candidates.
 * POST /v1/discount-previews
 * @example
 * client.discountPreviews.create({order_id: "example"})
 */
    create(params: (InputValue<{ "discount"?: CreateOrderDiscountInput; "order_id": string; }>) & { "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<_SdkPayloadAt<DiscountPreviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "discount"?: CreateOrderDiscountInput; "order_id": string; }>) & { "X-Request-Id"?: InputValue<string>; "X-Checkout-Session-ID"?: InputValue<string>; "X-Checkout-Session-Secret"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"checkout" | "merchant" | "merchantKey">>): Promise<SdkResponse<DiscountPreviewsCreateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly discountPreviews: DiscountPreviewsResource;
}
export type { CreateOrderDiscountInput } from '../declarations/CreateOrderDiscountInput.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { DiscountPreviewResponse } from '../declarations/DiscountPreviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { DiscountPreviewsCreateResponse } from '../declarations/DiscountPreviewsCreateResponse.js';
export type { DiscountPreviewsCreateInput } from '../declarations/DiscountPreviewsCreateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { ManualDiscountRequestInput } from '../declarations/ManualDiscountRequestInput.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { PromotionRefRequestInput } from '../declarations/PromotionRefRequestInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { DiscountPreview } from '../declarations/DiscountPreview.js';
export type { PromotionCandidate } from '../declarations/PromotionCandidate.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PromotionCombinesWith } from '../declarations/PromotionCombinesWith.js';
export type { PromotionExclusivity } from '../declarations/PromotionExclusivity.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { DiscountPreviewRequestInput } from '../declarations/DiscountPreviewRequestInput.js';
export { makeDiscountPreviewResponse } from '../declarations/makeDiscountPreviewResponse.js';
export { makeDiscountPreview } from '../declarations/makeDiscountPreview.js';
export { makePromotionCandidate } from '../declarations/makePromotionCandidate.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePromotionCombinesWith } from '../declarations/makePromotionCombinesWith.js';
export { makePromotionExclusivity } from '../declarations/makePromotionExclusivity.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
