import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryMethodRequestInput } from '../declarations/types-5.js';
import type {
    DeliveryMethod,
    DeliveryMethodListResponse,
    DeliveryMethodResponse,
    DeliveryMethodsCreateInput,
    DeliveryMethodsGetInput,
    DeliveryMethodsListInput,
    DeliveryMethodsRemoveInput,
    DeliveryMethodsUpdateInput
} from '../declarations/types-12.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { UpdateDeliveryMethodRequestInput } from '../declarations/types-47.js';
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
export type {
    CreateDeliveryMethodRequestInput,
    CreateDeliveryMethodRequestShipmentInput,
    CreateDeliveryMethodRequestLocalDeliveryInput,
    CreateDeliveryMethodRequestPickupInput
} from '../declarations/types-5.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    DeliveryMethod,
    DeliveryMethodResponse,
    DeliveryMethodListResponse,
    DeliveryMethodsCreateInput,
    DeliveryMethodsRemoveInput,
    DeliveryMethodsGetInput,
    DeliveryMethodsListInput,
    DeliveryMethodsUpdateInput,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryPostalCodeConditionInput,
    DeliveryEstimateRuleRequestInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodConfiguration,
    DeliveryPostalCodeCondition,
    DeliveryEstimateRule,
    DeliveryMethodOriginSelector,
    DeliveryMethodOriginSelectorFixedLocation,
    DeliveryMethodOriginSelectorAllocatedOriginGroup,
    DeliveryMethodOriginSelectorPickupLocationCollection,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryMethodConfigurationPatchRequestInput
} from '../declarations/types-12.js';
export type { SdkResponse } from '../declarations/types-44.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { BuyerInstructionsConfigInput, BuyerInstructionsConfig } from '../declarations/types-1.js';
export type {
    DeliveryEligibilityExpressionInput,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryAvailabilityInput,
    DeliveryBlackoutIntervalInput,
    DeliveryBusinessDayRangeInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryEligibilityExpression,
    DeliveryCustomerBooleanCondition,
    DeliveryDistance,
    DeliveryAvailability,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange,
    DeliveryCalculatedPricingStrategy,
    DeliveryDistanceUnitPrice
} from '../declarations/types-11.js';
export type {
    DeliveryPostalCodeValueInput,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCreateInputCallbackInput,
    DeliveryPricingStrategyCreateInputCallerSuppliedInput,
    DeliveryPricingStrategyCreateInputFixedInput,
    DeliveryPricingStrategyCreateInputRateTableInput,
    DeliveryPricingStrategyCreateInputTieredInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput,
    DeliveryPostalCodeValue,
    DeliveryPricingStrategy,
    DeliveryPricingRate,
    DeliveryPricingTierBand,
    DeliveryPricingStrategyCalculated,
    DeliveryPricingStrategyCallback,
    DeliveryPricingStrategyCallerSupplied,
    DeliveryPricingStrategyFixed,
    DeliveryPricingStrategyRateTable,
    DeliveryPricingStrategyTiered
} from '../declarations/types-13.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRecipientRequirementInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin,
    DeliveryScheduleWindowRule,
    DeliveryRateTablePricingStrategy,
    DeliveryRecipientRequirement
} from '../declarations/types-14.js';
export type {
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalInput,
    DeliveryTransitTimeRuleInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryZoneCondition,
    DeliveryWeeklyInterval,
    DeliveryTransitTimeRule,
    DeliveryWeightUnitPrice,
    DeliveryTieredPricingStrategy,
    DeliveryTieredPricingStrategyWeight,
    DeliveryTieredPricingStrategyQuantityOrMoney
} from '../declarations/types-15.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type { AuthMode, AddRiskListItemsRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { SubscriptionCounts } from '../declarations/types-45.js';
export { makeAddRiskListItemsRequest, makeBuyerInstructionsConfig } from '../declarations/types-62.js';
export {
    makeCreateDeliveryMethodRequest,
    makeCreateDeliveryMethodRequestLocalDelivery,
    makeCreateDeliveryMethodRequestPickup,
    makeCreateDeliveryMethodRequestShipment
} from '../declarations/types-63.js';
export {
    makeDeliveryAvailability,
    makeDeliveryBlackoutInterval,
    makeDeliveryBusinessDayRange,
    makeDeliveryCalculatedPricingStrategyRequest,
    makeDeliveryCallbackPricingStrategyRequest,
    makeDeliveryCallerSuppliedPricingStrategyRequest,
    makeDeliveryCountryCondition,
    makeDeliveryCustomerBooleanCondition,
    makeDeliveryCustomerSegmentCondition,
    makeDeliveryDistance,
    makeDeliveryDistanceUnitPriceRequest,
    makeDeliveryEligibilityExpression,
    makeDeliveryEstimateRuleRequest,
    makeDeliveryFixedPricingStrategyRequest,
    makeDeliveryMethodConfigurationCreateRequest,
    makeDeliveryMethodConfigurationPatchRequest
} from '../declarations/types-65.js';
export {
    makeDeliveryMethodConfigurationRequest,
    makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup,
    makeDeliveryMethodOriginSelectorInputFixedLocation,
    makeDeliveryMethodOriginSelectorInputPickupLocationCollection,
    makeDeliveryMethodOriginSelectorRequest,
    makeDeliveryPostalCodeCondition,
    makeDeliveryPostalCodeValue,
    makeDeliveryPricingRateCreateRequest,
    makeDeliveryPricingRateRequest,
    makeDeliveryPricingStrategyCreateInputCalculated,
    makeDeliveryPricingStrategyCreateInputCallback,
    makeDeliveryPricingStrategyCreateInputCallerSupplied,
    makeDeliveryPricingStrategyCreateInputFixed,
    makeDeliveryPricingStrategyCreateInputRateTable,
    makeDeliveryPricingStrategyCreateInputTiered,
    makeDeliveryPricingStrategyCreateRequest,
    makeDeliveryPricingStrategyInputCalculated,
    makeDeliveryPricingStrategyInputCallback,
    makeDeliveryPricingStrategyInputCallerSupplied,
    makeDeliveryPricingStrategyInputFixed,
    makeDeliveryPricingStrategyInputRateTable,
    makeDeliveryPricingStrategyInputTiered,
    makeDeliveryPricingStrategyRequest,
    makeDeliveryPricingTierBandRequest,
    makeDeliveryRadiusCondition,
    makeDeliveryRadiusOrigin,
    makeDeliveryRateTablePricingStrategyCreateRequest,
    makeDeliveryRateTablePricingStrategyRequest,
    makeDeliveryRecipientRequirement,
    makeDeliveryScheduleWindowRuleRequest,
    makeDeliveryStateCondition,
    makeDeliveryTieredPricingStrategyInputQuantityOrMoney,
    makeDeliveryTieredPricingStrategyInputWeight,
    makeDeliveryTieredPricingStrategyRequest,
    makeDeliveryTransitTimeRule,
    makeDeliveryWeeklyInterval,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneCondition
} from '../declarations/types-66.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makeUpdateDeliveryMethodRequest } from '../declarations/types-72.js';
export interface DeliveryMethodsResource {
    /**
 * Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and
 * execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.
 * @see reference/deliveryMethods.md#deliverymethodscreate
 * POST /v1/delivery-methods
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.create({configuration: {minimum_option_lifetime_seconds: "120", origin:
 * {location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", type: "fixed_location"}, pricing: {calculated:
 * {}, type: "calculated"}}, name: "Standard shipping", type: "shipment"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: (InputValue<CreateDeliveryMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryMethods.md#deliverymethodscreate
     */
    createWithResponse(params: (InputValue<CreateDeliveryMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryMethodResponse>>;
    /**
 * Retires the delivery method after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects. A method referenced by
 * checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids on an active or
 * inactive payment link cannot be archived; the request returns 409 RESOURCE_IN_USE with the
 * blocking references. Remove the method from checkout.default_delivery_method_ids with PATCH
 * /v1/settings or from the link's delivery_method_ids with PATCH
 * /v1/payment-links/{payment_link_id}. Open checkout sessions keep their pinned revision and do
 * not block retirement.
 * @see reference/deliveryMethods.md#deliverymethodsremove
 * DELETE /v1/delivery-methods/{delivery_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(delivery_method_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryMethods.md#deliverymethodsremove
     */
    removeWithResponse(delivery_method_id: InputValue<string>, params?: {
        "expected_version"?: InputValue<`${bigint}` | bigint>;
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryMethodResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery method.
 * @see reference/deliveryMethods.md#deliverymethodsget
 * GET /v1/delivery-methods/{delivery_method_id}
 * @example
 * client.deliveryMethods.get("example")
 */
    get(delivery_method_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryMethods.md#deliverymethodsget
     */
    getWithResponse(delivery_method_id: InputValue<string>, params?: {}, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryMethodResponse>>;
    /**
 * Returns delivery methods in a stable, cursor-paginated order. Archived resources are excluded by
 * default.
 * @see reference/deliveryMethods.md#deliverymethodslist
 * GET /v1/delivery-methods
 * @example
 * client.deliveryMethods.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
        "delivery_zone_id"?: InputValue<string>;
        "delivery_location_set_id"?: InputValue<string>;
        "delivery_rate_callback_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<DeliveryMethodListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryMethods.md#deliverymethodslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
        "delivery_zone_id"?: InputValue<string>;
        "delivery_location_set_id"?: InputValue<string>;
        "delivery_rate_callback_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<DeliveryMethodListResponse>>;
    /** Iterate pages lazily.
     * @see reference/deliveryMethods.md#deliverymethodslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
        "delivery_zone_id"?: InputValue<string>;
        "delivery_location_set_id"?: InputValue<string>;
        "delivery_rate_callback_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryMethodListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/deliveryMethods.md#deliverymethodslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
        "delivery_zone_id"?: InputValue<string>;
        "delivery_location_set_id"?: InputValue<string>;
        "delivery_rate_callback_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<DeliveryMethodListResponse>>;
    /** Iterate items lazily.
     * @see reference/deliveryMethods.md#deliverymethodslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "query"?: InputValue<string>;
        "external_reference_id"?: InputValue<string>;
        "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
        "type"?: InputValue<Array<"shipment" | "local_delivery" | "pickup">>;
        "delivery_zone_id"?: InputValue<string>;
        "delivery_location_set_id"?: InputValue<string>;
        "delivery_rate_callback_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryMethod>;
    /**
 * Sparsely updates mutable fields. A change to pinned configuration publishes a new immutable
 * revision and requires expected_version. Archived resources can't be changed; create a new
 * resource instead. A method referenced by checkout.default_delivery_method_ids at merchant scope
 * or by delivery_method_ids on an active or inactive payment link cannot be set inactive; the
 * request returns 409 RESOURCE_IN_USE with the blocking references. Remove the method from
 * checkout.default_delivery_method_ids with PATCH /v1/settings or from the link's
 * delivery_method_ids with PATCH /v1/payment-links/{payment_link_id}.
 * @see reference/deliveryMethods.md#deliverymethodsupdate
 * PATCH /v1/delivery-methods/{delivery_method_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.update("example", {status: "active"}, { idempotencyKey: idempotencyKey })
 */
    update(delivery_method_id: InputValue<string>, params: (InputValue<UpdateDeliveryMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<DeliveryMethod>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/deliveryMethods.md#deliverymethodsupdate
     */
    updateWithResponse(delivery_method_id: InputValue<string>, params: (InputValue<UpdateDeliveryMethodRequestInput>)
        & {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant">): Promise<SdkResponse<DeliveryMethodResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryMethods: DeliveryMethodsResource;
}
