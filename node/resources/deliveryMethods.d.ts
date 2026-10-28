import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { CreateDeliveryMethodRequestInput } from '../declarations/types-6.js';
import type { DeliveryMethod, DeliveryMethodListResponse } from '../declarations/types-13.js';
import type {
    DeliveryMethodResponse,
    DeliveryMethodsCreateInput,
    DeliveryMethodsGetInput,
    DeliveryMethodsListInput,
    DeliveryMethodsRemoveInput,
    DeliveryMethodsUpdateInput
} from '../declarations/types-14.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { UpdateDeliveryMethodRequestInput } from '../declarations/types-51.js';
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
    CreateDeliveryMethodRequestInput,
    CreateDeliveryMethodRequestShipmentInput,
    CreateDeliveryMethodRequestLocalDeliveryInput,
    CreateDeliveryMethodRequestPickupInput
} from '../declarations/types-6.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    DeliveryMethod,
    DeliveryMethodListResponse,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryEstimateRuleRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodConfiguration,
    DeliveryEligibilityExpression,
    DeliveryCustomerBooleanCondition,
    DeliveryDistance,
    DeliveryEstimateRule,
    DeliveryMethodOriginSelector,
    DeliveryMethodOriginSelectorFixedLocation,
    DeliveryMethodOriginSelectorAllocatedOriginGroup,
    DeliveryDistanceUnitPrice,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryMethodConfigurationPatchRequestInput
} from '../declarations/types-13.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type {
    DeliveryMethodResponse,
    DeliveryMethodsCreateInput,
    DeliveryMethodsRemoveInput,
    DeliveryMethodsGetInput,
    DeliveryMethodsListInput,
    DeliveryMethodsUpdateInput,
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCreateInputCallbackInput,
    DeliveryPricingStrategyCreateInputCallerSuppliedInput,
    DeliveryPricingStrategyCreateInputFixedInput,
    DeliveryPricingStrategyCreateInputRateTableInput,
    DeliveryPricingStrategyCreateInputTieredInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPostalCodeCondition,
    DeliveryPostalCodeValue,
    DeliveryMethodOriginSelectorPickupLocationCollection,
    DeliveryPricingStrategy,
    DeliveryPricingRate,
    DeliveryPricingStrategyCalculated,
    DeliveryPricingStrategyCallback,
    DeliveryPricingStrategyCallerSupplied,
    DeliveryPricingStrategyFixed
} from '../declarations/types-14.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-51.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { BuyerInstructionsConfigRequestRequestInput, BuyerInstructionsConfig } from '../declarations/types-1.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingStrategyInputTieredInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin,
    DeliveryPricingTierBand,
    DeliveryPricingStrategyRateTable,
    DeliveryPricingStrategyTiered
} from '../declarations/types-15.js';
export type {
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalRequestRequestInput,
    DeliveryTransitTimeRuleRequestRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryRecipientRequirementInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryStateCondition,
    DeliveryWindowTimeCondition,
    DeliveryScheduleWindowRule,
    DeliveryWeeklyInterval,
    DeliveryTransitTimeRule,
    DeliveryWeightUnitPrice,
    DeliveryRateTablePricingStrategy,
    DeliveryTieredPricingStrategy,
    DeliveryTieredPricingStrategyWeight,
    DeliveryTieredPricingStrategyQuantityOrMoney,
    DeliveryRecipientRequirement
} from '../declarations/types-16.js';
export type { DeliveryZoneConditionInput, DeliveryZoneCondition } from '../declarations/types-17.js';
export type {
    DeliveryAvailabilityRequestRequestInput,
    DeliveryBlackoutIntervalRequestRequestInput,
    DeliveryBusinessDayRangeRequestRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryAvailability,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange,
    DeliveryCalculatedPricingStrategy
} from '../declarations/types-12.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { MetadataRequestInput, MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-32.js';
export type { AuthMode, AddRiskListItemsRequest } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { SubscriptionCounts } from '../declarations/types-48.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export { makeAddRiskListItemsRequest, makeBuyerInstructionsConfigRequestRequest } from '../declarations/types-65.js';
export { makeCreateDeliveryMethodRequest, makeCreateDeliveryMethodRequestLocalDelivery } from '../declarations/types-66.js';
export { makeCreateDeliveryMethodRequestPickup, makeCreateDeliveryMethodRequestShipment } from '../declarations/types-67.js';
export {
    makeDeliveryAvailabilityRequestRequest,
    makeDeliveryBlackoutIntervalRequestRequest,
    makeDeliveryBusinessDayRangeRequestRequest,
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
    makeDeliveryMethodConfigurationPatchRequest,
    makeDeliveryMethodConfigurationRequest,
    makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup,
    makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet,
    makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations,
    makeDeliveryMethodOriginSelectorInputFixedLocation,
    makeDeliveryMethodOriginSelectorInputPickupLocationCollection,
    makeDeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet,
    makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations,
    makeDeliveryMethodOriginSelectorRequest,
    makeDeliveryPostalCodeCondition,
    makeDeliveryPostalCodeValue
} from '../declarations/types-69.js';
export {
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
    makeDeliveryTransitTimeRuleRequestRequest,
    makeDeliveryWeeklyIntervalRequestRequest,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneCondition
} from '../declarations/types-70.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeUpdateDeliveryMethodRequest } from '../declarations/types-77.js';
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
 * default. Default order: created_at ascending, then delivery_method_id ascending.
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
