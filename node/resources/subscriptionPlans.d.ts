import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type {
    SubscriptionPlan,
    SubscriptionPlanListResponse,
    SubscriptionPlanResponse,
    SubscriptionPlansCreateParams
} from '../declarations/types-55.js';
import type {
    SubscriptionPlansDeleteParams,
    SubscriptionPlansGetParams,
    SubscriptionPlansListParams,
    SubscriptionPlansUpdateParams
} from '../declarations/types-56.js';
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
    SubscriptionPlansCreateParams,
    SubscriptionPlan,
    SubscriptionPlanResponse,
    SubscriptionPlanListResponse,
    SubscriptionIntervalOptionInput,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanLineItemInputVariantInput,
    SubscriptionPlanLineItemInputBundleInput,
    SubscriptionPlanLineItemInputCustomInput,
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-55.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    SubscriptionPlansDeleteParams,
    SubscriptionPlansGetParams,
    SubscriptionPlansListParams,
    SubscriptionPlansUpdateParams
} from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { CreateSubscriptionPlanRequestInput } from '../declarations/types-11.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-25.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-27.js';
export type {
    OrderLineItemModifierRequestInput,
    OrderLineItemModifierInputCatalogInput,
    OrderLineItemModifierInputTextInput,
    OrderLineItemTaxInput,
    OrderLineItemModifier,
    OrderLineItemTax
} from '../declarations/types-37.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-34.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-57.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { SubscriptionIntervalOption, SubscriptionDeliveryMethodCounts, SubscriptionCounts } from '../declarations/types-54.js';
export type { BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { SelectedProductOption } from '../declarations/types-53.js';
export type { CategoryReference } from '../declarations/types-4.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type {
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionPlanLineItemRequestInput,
    UpdateSubscriptionPlanLineItemInputVariantInput,
    UpdateSubscriptionPlanLineItemInputBundleInput,
    UpdateSubscriptionPlanLineItemInputCustomInput
} from '../declarations/types-60.js';
export { makeCreateSubscriptionPlanRequest } from '../declarations/types-65.js';
export { makeImageInputFile, makeImageInputSourceURL } from '../declarations/types-67.js';
export {
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-68.js';
export {
    makeMetadataPatchRequest,
    makeMetadataRequest,
    makeMoneyValue,
    makeOrderLineItemModifierInputCatalog,
    makeOrderLineItemModifierInputText,
    makeOrderLineItemModifierRequest,
    makeOrderLineItemTax
} from '../declarations/types-69.js';
export {
    makeSubscriptionIntervalOption,
    makeSubscriptionPlanLineItemInputBundle,
    makeSubscriptionPlanLineItemInputCustom,
    makeSubscriptionPlanLineItemInputVariant,
    makeSubscriptionPlanLineItemRequest,
    makeTextModifierRequest
} from '../declarations/types-73.js';
export {
    makeUpdateSubscriptionPlanLineItemInputBundle,
    makeUpdateSubscriptionPlanLineItemInputCustom,
    makeUpdateSubscriptionPlanLineItemInputVariant,
    makeUpdateSubscriptionPlanLineItemRequest,
    makeUpdateSubscriptionPlanRequest
} from '../declarations/types-74.js';
export interface SubscriptionPlansResource {
    /**
 * Creates a subscription plan for the authenticated merchant.
 *
 * `POST /v1/subscription-plans`
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#createSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.create({billing_interval: "daily", billing_interval_count: 1, currency:
 * "USD", line_items: [{type: "variant", variant_id: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV"}], name:
 * "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: SubscriptionPlansCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionPlan, SubscriptionPlanResponse>>;
    /**
 * Permanently archives a subscription plan from active or inactive status. Returns RESOURCE_IN_USE
 * while active subscriptions, active payment links, or open checkout sessions reference the plan.
 * To stop selling a plan while keeping its subscribers, set status to inactive.
 *
 * `DELETE /v1/subscription-plans/{subscription_plan_id}`
 * @param subscription_plan_id Flint subscription plan ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#deleteSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.delete("plan_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(subscription_plan_id: InputValue<string>, params?: SubscriptionPlansDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionPlan, SubscriptionPlanResponse>>;
    /**
 * Returns a single subscription plan by ID.
 *
 * `GET /v1/subscription-plans/{subscription_plan_id}`
 * @param subscription_plan_id Flint subscription plan ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#getSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionPlans.get("plan_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(subscription_plan_id: InputValue<string>, params?: SubscriptionPlansGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPlan, SubscriptionPlanResponse>>;
    /**
 * Returns a paginated list of subscription plans for the authenticated merchant. Default order:
 * created_at descending, then subscription_plan_id descending.
 *
 * `GET /v1/subscription-plans`
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#listSubscriptionPlans
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionPlans.list()
 */
    list(params?: SubscriptionPlansListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<SubscriptionPlanListResponse, SubscriptionPlanListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/subscription-plans#listSubscriptionPlans
     */
    listPages(params?: SubscriptionPlansListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<SubscriptionPlanListResponse, SubscriptionPlanListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/subscription-plans#listSubscriptionPlans
     */
    listItems(params?: SubscriptionPlansListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SubscriptionPlan>;
    /**
 * Applies a sparse update to mutable subscription plan fields. Setting status to inactive returns
 * RESOURCE_IN_USE while active payment links use the plan. Open checkout sessions do not block
 * this change; buyers in those sessions are refused with ACTION_NOT_ALLOWED when they pay. Send
 * line_items with expected_version to replace the plan's line items; omit line_items to keep them.
 *
 * `PATCH /v1/subscription-plans/{subscription_plan_id}`
 * @param subscription_plan_id Flint subscription plan ID.
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#updateSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.update("plan_01ARZ3NDEKTSV4RRFFQ69G5FAV", {description: "Recurring
 * membership"}, { idempotencyKey: idempotencyKey })
 */
    update(subscription_plan_id: InputValue<string>, params: SubscriptionPlansUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<SubscriptionPlan, SubscriptionPlanResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPlans: SubscriptionPlansResource;
}
