export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { SubscriptionPlan } from '../declarations/SubscriptionPlan.js';
import type { SubscriptionPlanLineItemRequestInput } from '../declarations/SubscriptionPlanLineItemRequestInput.js';
import type { SubscriptionPlanListResponse } from '../declarations/SubscriptionPlanListResponse.js';
import type { SubscriptionPlanResponse } from '../declarations/SubscriptionPlanResponse.js';
import type { SubscriptionPlansCreateInput } from '../declarations/SubscriptionPlansCreateInput.js';
import type { SubscriptionPlansCreateResponse } from '../declarations/SubscriptionPlansCreateResponse.js';
import type { SubscriptionPlansGetInput } from '../declarations/SubscriptionPlansGetInput.js';
import type { SubscriptionPlansGetResponse } from '../declarations/SubscriptionPlansGetResponse.js';
import type { SubscriptionPlansListInput } from '../declarations/SubscriptionPlansListInput.js';
import type { SubscriptionPlansListResponse } from '../declarations/SubscriptionPlansListResponse.js';
import type { SubscriptionPlansRemoveInput } from '../declarations/SubscriptionPlansRemoveInput.js';
import type { SubscriptionPlansRemoveResponse } from '../declarations/SubscriptionPlansRemoveResponse.js';
import type { SubscriptionPlansUpdateInput } from '../declarations/SubscriptionPlansUpdateInput.js';
import type { SubscriptionPlansUpdateResponse } from '../declarations/SubscriptionPlansUpdateResponse.js';
import type { UpdateSubscriptionPlanLineItemRequestInput } from '../declarations/UpdateSubscriptionPlanLineItemRequestInput.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface SubscriptionPlansResource {
    /**
 * Creates a subscription plan for the authenticated merchant.
 * POST /v1/subscription-plans
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.create({billing_interval: "daily", billing_interval_count: 1, currency: "USD", name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; "contract_term_months"?: number; "currency": string; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<SubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string>; "name": string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionPlanResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "billing_interval": "daily" | "weekly" | "monthly" | "yearly"; "billing_interval_count": number; "contract_term_months"?: number; "currency": string; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<SubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string>; "name": string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionPlansCreateResponse>>;
    /**
 * Retires a subscription plan. Plans with active subscriptions cannot be retired.
 * DELETE /v1/subscription-plans/{plan_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(plan_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionPlanResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(plan_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionPlansRemoveResponse>>;
    /**
 * Returns a single subscription plan by ID.
 * GET /v1/subscription-plans/{plan_id}
 * @example
 * client.subscriptionPlans.get("example")
 */
    get(plan_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<SubscriptionPlanResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(plan_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionPlansGetResponse>>;
    /**
 * Returns a paginated list of subscription plans for the authenticated merchant.
 * GET /v1/subscription-plans
 * @example
 * client.subscriptionPlans.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SubscriptionPlanListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionPlansListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionPlanListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<SubscriptionPlansListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "archived">; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "sort_by"?: InputValue<"name" | "created_at" | "updated_at">; "sort_direction"?: InputValue<"asc" | "desc">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SubscriptionPlan>;
    /**
 * Applies a sparse update to mutable subscription plan fields. Line items are mutated through the subscription plan line-item endpoints.
 * PATCH /v1/subscription-plans/{plan_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(plan_id: InputValue<string>, params: (InputValue<({ "contract_term_months"?: number; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string | null> | null; "name"?: string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; }))) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<SubscriptionPlanResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(plan_id: InputValue<string>, params: (InputValue<({ "contract_term_months"?: number; "description"?: string; "early_termination_fee_money"?: MoneyValueInput; "expected_version"?: string; "external_reference_id"?: string; "images"?: Array<ImageRequestInput>; "line_items"?: Array<UpdateSubscriptionPlanLineItemRequestInput>; "metadata"?: Record<string, string | null> | null; "name"?: string; "setup_fee_money"?: MoneyValueInput; "trial_period_days"?: number; }) & (((({ "images"?: never })) | ({ "expected_version": unknown; }))) & (((({ "line_items"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<SubscriptionPlansUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly subscriptionPlans: SubscriptionPlansResource;
}
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { ImageRequestInput } from '../declarations/ImageRequestInput.js';
export type { SubscriptionPlanLineItemRequestInput } from '../declarations/SubscriptionPlanLineItemRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { SubscriptionPlanResponse } from '../declarations/SubscriptionPlanResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { SubscriptionPlansCreateResponse } from '../declarations/SubscriptionPlansCreateResponse.js';
export type { SubscriptionPlansRemoveResponse } from '../declarations/SubscriptionPlansRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { SubscriptionPlansGetResponse } from '../declarations/SubscriptionPlansGetResponse.js';
export type { SubscriptionPlanListResponse } from '../declarations/SubscriptionPlanListResponse.js';
export type { SubscriptionPlansListResponse } from '../declarations/SubscriptionPlansListResponse.js';
export type { SubscriptionPlan } from '../declarations/SubscriptionPlan.js';
export type { UpdateSubscriptionPlanLineItemRequestInput } from '../declarations/UpdateSubscriptionPlanLineItemRequestInput.js';
export type { SubscriptionPlansUpdateResponse } from '../declarations/SubscriptionPlansUpdateResponse.js';
export type { SubscriptionPlansCreateInput } from '../declarations/SubscriptionPlansCreateInput.js';
export type { SubscriptionPlansRemoveInput } from '../declarations/SubscriptionPlansRemoveInput.js';
export type { SubscriptionPlansGetInput } from '../declarations/SubscriptionPlansGetInput.js';
export type { SubscriptionPlansListInput } from '../declarations/SubscriptionPlansListInput.js';
export type { SubscriptionPlansUpdateInput } from '../declarations/SubscriptionPlansUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { TextModifierRequestInput } from '../declarations/TextModifierRequestInput.js';
export type { OrderLineItemTaxInput } from '../declarations/OrderLineItemTaxInput.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { Image } from '../declarations/Image.js';
export type { SubscriptionPlanLineItem } from '../declarations/SubscriptionPlanLineItem.js';
export type { BundleComponent } from '../declarations/BundleComponent.js';
export type { SelectedProductOption } from '../declarations/SelectedProductOption.js';
export type { CategoryReference } from '../declarations/CategoryReference.js';
export type { OrderLineItemModifier } from '../declarations/OrderLineItemModifier.js';
export type { TextModifierRequest } from '../declarations/TextModifierRequest.js';
export type { OrderLineItemTax } from '../declarations/OrderLineItemTax.js';
export type { CreateSubscriptionPlanRequestInput } from '../declarations/CreateSubscriptionPlanRequestInput.js';
export type { UpdateSubscriptionPlanRequestInput } from '../declarations/UpdateSubscriptionPlanRequestInput.js';
export { makeSubscriptionPlanResponse } from '../declarations/makeSubscriptionPlanResponse.js';
export { makeSubscriptionPlanListResponse } from '../declarations/makeSubscriptionPlanListResponse.js';
export { makeSubscriptionPlan } from '../declarations/makeSubscriptionPlan.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeImage } from '../declarations/makeImage.js';
export { makeSubscriptionPlanLineItem } from '../declarations/makeSubscriptionPlanLineItem.js';
export { makeBundleComponent } from '../declarations/makeBundleComponent.js';
export { makeSelectedProductOption } from '../declarations/makeSelectedProductOption.js';
export { makeCategoryReference } from '../declarations/makeCategoryReference.js';
export { makeOrderLineItemModifier } from '../declarations/makeOrderLineItemModifier.js';
export { makeTextModifierRequest } from '../declarations/makeTextModifierRequest.js';
export { makeOrderLineItemTax } from '../declarations/makeOrderLineItemTax.js';
