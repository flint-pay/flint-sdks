import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { SubscriptionPlan } from '../declarations/types-62.js';
import type {
    SubscriptionPlanListResponse,
    SubscriptionPlanResponse,
    SubscriptionPlansCreateParams,
    SubscriptionPlansDeleteParams,
    SubscriptionPlansGetParams,
    SubscriptionPlansListParams,
    SubscriptionPlansUpdateParams
} from '../declarations/types-63.js';
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
    SubscriptionPlansCreateParams,
    SubscriptionPlanResponse,
    SubscriptionPlansDeleteParams,
    SubscriptionPlansGetParams,
    SubscriptionPlansListParams,
    SubscriptionPlanListResponse,
    SubscriptionPlansUpdateParams,
    SubscriptionPlanLineItemRequestInput,
    SubscriptionPlanLineItemInputVariantInput,
    SubscriptionPlanLineItemInputBundleInput,
    SubscriptionPlanLineItemInputCustomInput,
    SubscriptionPlanLineItem,
    SubscriptionPlanSwapVariant,
    SubscriptionPlanLineItemVariant,
    SubscriptionPlanLineItemBundle,
    SubscriptionPlanLineItemCustom
} from '../declarations/types-63.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    SubscriptionPlan,
    SubscriptionIntervalOptionRequestInput,
    SubscriptionPlanChangeOptionRequestInput,
    SubscriptionIntervalOption,
    SubscriptionPlanChangeOption
} from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { CreateSubscriptionPlanRequestInput } from '../declarations/types-13.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-39.js';
export type {
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionDeliveryMethodCounts,
    SubscriptionCounts,
    SubscriptionEndAfterCycles
} from '../declarations/types-61.js';
export type { ImageRequestInput, ImageInputSourceURLInput, ImageInputFileInput, ImageAttachment, Image } from '../declarations/types-28.js';
export type {
    InventoryRoutingSourceRequestInput,
    InventoryRoutingSourceInputFixedLocationInput,
    InventoryRoutingSourceInputPolicyInput,
    InventoryRoutingSourceInputPolicyRevisionInput,
    InventoryRoutingSource
} from '../declarations/types-30.js';
export type {
    OrderLineItemModifierRequestModelInput,
    OrderLineItemModifierInputCatalogRequestInput,
    OrderLineItemModifierInputTextRequestInput,
    OrderLineItemTaxRequestInput,
    OrderLineItemModifier,
    OrderLineItemTax
} from '../declarations/types-41.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-38.js';
export type { TextModifierRequestInput, TextModifierRequest } from '../declarations/types-65.js';
export type { AuthMode, BundleComponent, BundleComponentVariantSummary } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { SelectedProductOption } from '../declarations/types-59.js';
export type { CategoryReference } from '../declarations/types-5.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateSubscriptionPlanRequestInput } from '../declarations/types-69.js';
export type {
    UpdateSubscriptionPlanLineItemRequestInput,
    UpdateSubscriptionPlanLineItemInputVariantInput,
    UpdateSubscriptionPlanLineItemInputBundleInput,
    UpdateSubscriptionPlanLineItemInputCustomInput
} from '../declarations/types-68.js';
export type { DisputesAcceptParams } from '../declarations/types-24.js';
export { makeCreateSubscriptionPlanRequest } from '../declarations/types-74.js';
export {
    makeImageInputFile,
    makeImageInputSourceURL,
    makeImageRequest,
    makeInventoryRoutingSourceInputFixedLocation,
    makeInventoryRoutingSourceInputPolicy,
    makeInventoryRoutingSourceInputPolicyRevision,
    makeInventoryRoutingSourceRequest
} from '../declarations/types-77.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export {
    makeOrderLineItemModifierInputCatalogRequest,
    makeOrderLineItemModifierInputTextRequest,
    makeOrderLineItemModifierRequestModel,
    makeOrderLineItemTaxRequest
} from '../declarations/types-79.js';
export {
    makeSubscriptionEndAfterCyclesRequest,
    makeSubscriptionIntervalOptionRequest,
    makeSubscriptionPlanChangeOptionRequest,
    makeSubscriptionPlanLineItemInputBundle,
    makeSubscriptionPlanLineItemInputCustom,
    makeSubscriptionPlanLineItemInputVariant,
    makeSubscriptionPlanLineItemRequest,
    makeTextModifierRequest
} from '../declarations/types-83.js';
export {
    makeUpdateSubscriptionPlanLineItemInputBundle,
    makeUpdateSubscriptionPlanLineItemInputCustom,
    makeUpdateSubscriptionPlanLineItemInputVariant,
    makeUpdateSubscriptionPlanLineItemRequest,
    makeUpdateSubscriptionPlanRequest
} from '../declarations/types-84.js';
export interface SubscriptionPlansResource {
    /**
 * Creates a subscription plan: the recurring price and terms customers sign up to. Send `name`,
 * `currency`, the billing interval, and at least one line item from your catalog. An active plan
 * accepts new signups; an inactive plan refuses them with `ACTION_NOT_ALLOWED` while existing
 * subscriptions keep renewing. A free trial isn't allowed on a plan with lines that ship.
 *
 * `POST /v1/subscription-plans`
 * @see https://developers.withflintpay.com/docs/api/subscription-plans#createSubscriptionPlan
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.subscriptionPlans.create({billing_interval: "daily", billing_interval_count: 1, currency:
 * "USD", line_items: [{type: "variant", variant_id: "var_01KEZF7C004GSH2KT8CNYVMHGX"}], name:
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
 * client.subscriptionPlans.delete("plan_01KEZF7C004CY5ZR33XST2AASV", {}, { idempotencyKey:
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
 * client.subscriptionPlans.get("plan_01KEZF7C004CY5ZR33XST2AASV")
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
