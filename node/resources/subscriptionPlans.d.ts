import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateSubscriptionPlanRequestInput } from '../declarations/types-9.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type {
    SubscriptionPlan,
    SubscriptionPlanListResponse,
    SubscriptionPlanResponse,
    SubscriptionPlansCreateInput,
    SubscriptionPlansGetInput,
    SubscriptionPlansListInput,
    SubscriptionPlansRemoveInput,
    SubscriptionPlansUpdateInput
} from '../declarations/types-46.js';
import type { UpdateSubscriptionPlanRequestInput } from '../declarations/types-50.js';
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
    SdkErrorDetails
} from '../runtime.js';
export type { CreateSubscriptionPlanRequestInput, Credentials } from '../declarations/types-9.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    SubscriptionPlan,
    SubscriptionPlanResponse,
    SubscriptionPlanListResponse,
    SubscriptionPlansCreateInput,
    SubscriptionPlansRemoveInput,
    SubscriptionPlansGetInput,
    SubscriptionPlansListInput,
    SubscriptionPlansUpdateInput,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant
} from '../declarations/types-46.js';
export type { SdkResponse, SelectedProductOption } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateSubscriptionPlanRequestInput } from '../declarations/types-50.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    SubscriptionIntervalOptionInput,
    SubscriptionIntervalOption,
    SubscriptionDeliveryMethodCounts,
    SubscriptionCounts
} from '../declarations/types-45.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { ImageRequestInput } from '../declarations/types-20.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-25.js';
export type {
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput,
    OrderLineItemModifier,
    OrderLineItemTax
} from '../declarations/types-32.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-47.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-0.js';
export type { ImageAttachment, Image } from '../declarations/types-19.js';
export type { CategoryReference } from '../declarations/types-3.js';
export type { UpdateSubscriptionPlanLineItemRequestInput } from '../declarations/types-49.js';
export { makeCreateSubscriptionPlanRequest } from '../declarations/types-65.js';
export {
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-67.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeOrderLineItemModifierRequest, makeOrderLineItemTax } from '../declarations/types-69.js';
export { makeSubscriptionIntervalOption, makeSubscriptionPlanLineItemRequest, makeTextModifierRequest } from '../declarations/types-72.js';
export { makeUpdateSubscriptionPlanLineItemRequest, makeUpdateSubscriptionPlanRequest } from '../declarations/types-73.js';
export interface SubscriptionPlansResource {
    /**
 * Creates a subscription plan for the authenticated merchant.
 * @see reference/subscriptionPlans.md#subscriptionplanscreate
 * POST /v1/subscription-plans
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.create({billing_interval: "daily", billing_interval_count: 1, currency:
 * "USD", line_items: [{variant_id: "example"}], name: "example"}, { idempotencyKey: idempotencyKey
 * })
 */
    create(params: (InputValue<CreateSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionPlan>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPlans.md#subscriptionplanscreate
     */
    createWithResponse(params: (InputValue<CreateSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionPlanResponse>>;
    /**
 * Permanently archives a subscription plan from active or inactive status. Returns RESOURCE_IN_USE
 * while active subscriptions, active payment links, or open checkout sessions reference the plan.
 * To stop selling a plan while keeping its subscribers, set status to inactive.
 * @see reference/subscriptionPlans.md#subscriptionplansremove
 * DELETE /v1/subscription-plans/{subscription_plan_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(subscription_plan_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionPlan>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPlans.md#subscriptionplansremove
     */
    removeWithResponse(subscription_plan_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionPlanResponse>>;
    /**
 * Returns a single subscription plan by ID.
 * @see reference/subscriptionPlans.md#subscriptionplansget
 * GET /v1/subscription-plans/{subscription_plan_id}
 * @example
 * client.subscriptionPlans.get("example")
 */
    get(subscription_plan_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPlan>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPlans.md#subscriptionplansget
     */
    getWithResponse(subscription_plan_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPlanResponse>>;
    /**
 * Returns a paginated list of subscription plans for the authenticated merchant.
 * @see reference/subscriptionPlans.md#subscriptionplanslist
 * GET /v1/subscription-plans
 * @example
 * client.subscriptionPlans.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SubscriptionPlanListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPlans.md#subscriptionplanslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPlanListResponse>>;
    /** Iterate pages lazily.
     * @see reference/subscriptionPlans.md#subscriptionplanslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPlanListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/subscriptionPlans.md#subscriptionplanslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<SubscriptionPlanListResponse>>;
    /** Iterate items lazily.
     * @see reference/subscriptionPlans.md#subscriptionplanslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "external_reference_id"?: InputValue<string>;
        "query"?: InputValue<string>;
        "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "updated_after"?: InputValue<string | globalThis.Date>;
        "updated_before"?: InputValue<string | globalThis.Date>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPlan>;
    /**
 * Applies a sparse update to mutable subscription plan fields. Setting status to inactive returns
 * RESOURCE_IN_USE while active payment links use the plan. Open checkout sessions do not block
 * this change; buyers in those sessions are refused with PLAN_NOT_ACTIVE when they pay. Send
 * line_items with expected_version to replace the plan's line items; omit line_items to keep them.
 * @see reference/subscriptionPlans.md#subscriptionplansupdate
 * PATCH /v1/subscription-plans/{subscription_plan_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_plan_id: InputValue<string>, params: (InputValue<UpdateSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SubscriptionPlan>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPlans.md#subscriptionplansupdate
     */
    updateWithResponse(subscription_plan_id: InputValue<string>, params: (InputValue<UpdateSubscriptionPlanRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<SubscriptionPlanResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPlans: SubscriptionPlansResource;
}
