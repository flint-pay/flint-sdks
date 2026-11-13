import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    DeliveryMethod,
    DeliveryMethodListResponse,
    DeliveryMethodResponse,
    DeliveryMethodsCreateParams,
    DeliveryMethodsDeleteParams,
    DeliveryMethodsGetParams,
    DeliveryMethodsListParams,
    DeliveryMethodsUpdateParams
} from '../declarations/types-18.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    DeliveryMethodsCreateParams,
    DeliveryMethod,
    DeliveryMethodResponse,
    DeliveryMethodsDeleteParams,
    DeliveryMethodsGetParams,
    DeliveryMethodsListParams,
    DeliveryMethodListResponse,
    DeliveryMethodsUpdateParams,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodConfiguration,
    DeliveryPostalCodeCondition,
    DeliveryMethodOriginSelector,
    DeliveryMethodOriginSelectorFixedLocation,
    DeliveryMethodOriginSelectorAllocatedOriginGroup,
    DeliveryMethodOriginSelectorPickupLocationCollection,
    DeliveryMethodConfigurationPatchRequestInput
} from '../declarations/types-18.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type {
    CreateDeliveryMethodRequestInput,
    CreateDeliveryMethodRequestShipmentInput,
    CreateDeliveryMethodRequestLocalDeliveryInput,
    CreateDeliveryMethodRequestPickupInput
} from '../declarations/types-8.js';
export type { BuyerInstructionsConfigRequestInput, BuyerInstructionsConfig } from '../declarations/types-2.js';
export type {
    DeliveryEligibilityExpressionRequestInput,
    DeliveryCountryConditionRequestInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceRequestInput,
    DeliveryEstimateRuleRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryEligibilityExpression,
    DeliveryCustomerBooleanCondition,
    DeliveryDistance,
    DeliveryEstimateRule,
    DeliveryCalculatedPricingStrategy,
    DeliveryDistanceUnitPrice,
    DeliveryExternalPricingStrategy,
    DeliveryFixedPricingStrategy,
    DeliveryLocationSetsDeleteParams
} from '../declarations/types-17.js';
export type {
    DeliveryPostalCodeConditionRequestInput,
    DeliveryPostalCodeValueRequestInput,
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
} from '../declarations/types-19.js';
export type {
    DeliveryRadiusConditionRequestInput,
    DeliveryRadiusOriginInput,
    DeliveryRadiusCondition,
    DeliveryRadiusOrigin
} from '../declarations/types-20.js';
export type {
    DeliveryStateConditionRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryTransitTimeRuleRequestInput,
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
} from '../declarations/types-22.js';
export type {
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryRateTablePricingStrategyCreateRequestInput,
    DeliveryRecipientRequirementRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryScheduleWindowRule,
    DeliveryRateTablePricingStrategy,
    DeliveryRecipientRequirement
} from '../declarations/types-21.js';
export type {
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryAvailability,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-16.js';
export type { MoneyValueInput, MetadataRequestInput, MoneyValue, NextAction } from '../declarations/types-38.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { AddRiskListItemsRequest } from '../declarations/types-0.js';
export type { MetadataMap, MetadataPatchRequestInput, MetadataPatchRequest } from '../declarations/types-37.js';
export type { SubscriptionCounts } from '../declarations/types-60.js';
export type { ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-66.js';
export type { DisputesAcceptParams } from '../declarations/types-23.js';
export { makeAddRiskListItemsRequest, makeBuyerInstructionsConfigRequest } from '../declarations/types-70.js';
export {
    makeCreateDeliveryMethodRequest,
    makeCreateDeliveryMethodRequestLocalDelivery,
    makeCreateDeliveryMethodRequestPickup,
    makeCreateDeliveryMethodRequestShipment
} from '../declarations/types-71.js';
export {
    makeDeliveryAvailabilityRequest,
    makeDeliveryBlackoutIntervalRequest,
    makeDeliveryBusinessDayRangeRequest
} from '../declarations/types-74.js';
export {
    makeDeliveryCalculatedPricingStrategyRequest,
    makeDeliveryCallbackPricingStrategyRequest,
    makeDeliveryCallerSuppliedPricingStrategyRequest,
    makeDeliveryCountryConditionRequest,
    makeDeliveryCustomerBooleanCondition,
    makeDeliveryCustomerSegmentCondition,
    makeDeliveryDistanceRequest,
    makeDeliveryDistanceUnitPriceRequest,
    makeDeliveryEligibilityExpressionRequest,
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
    makeDeliveryPostalCodeConditionRequest,
    makeDeliveryPostalCodeValueRequest,
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
    makeDeliveryRadiusConditionRequest,
    makeDeliveryRadiusOrigin
} from '../declarations/types-75.js';
export {
    makeDeliveryRateTablePricingStrategyCreateRequest,
    makeDeliveryRateTablePricingStrategyRequest,
    makeDeliveryRecipientRequirementRequest,
    makeDeliveryScheduleWindowRuleRequest,
    makeDeliveryStateConditionRequest,
    makeDeliveryTieredPricingStrategyInputQuantityOrMoney,
    makeDeliveryTieredPricingStrategyInputWeight,
    makeDeliveryTieredPricingStrategyRequest,
    makeDeliveryTransitTimeRuleRequest,
    makeDeliveryWeeklyIntervalRequest,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneConditionRequest
} from '../declarations/types-76.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makeUpdateDeliveryMethodRequest } from '../declarations/types-83.js';
export interface DeliveryMethodsResource {
    /**
 * Delivery methods combine eligibility, pricing, schedules, estimates, tax treatment, and
 * execution behavior. Creation publishes immutable revision 1. Omit status to start inactive.
 *
 * `POST /v1/delivery-methods`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#createDeliveryMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.create({configuration: {minimum_option_lifetime_seconds: 120, origin:
 * {location_id: "loc_01K1P6G4M7H2N8Q9R3S5T6V7WX", type: "fixed_location"}, pricing: {calculated:
 * {}, type: "calculated"}}, name: "Standard shipping", type: "shipment"}, { idempotencyKey:
 * idempotencyKey })
 */
    create(params: DeliveryMethodsCreateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryMethod, DeliveryMethodResponse>>;
    /**
 * Retires the delivery method after checking current dependencies. The retired resource remains
 * available by ID for historical records. Deleting an already archived resource returns it without
 * changing its version or repeating effects. A method referenced by
 * checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids on an active or
 * inactive payment link cannot be archived; the request returns 409 RESOURCE_IN_USE with the
 * blocking references. Remove the method from checkout.default_delivery_method_ids with
 * `client.settings.update` or from the link's delivery_method_ids with
 * `client.paymentLinks.update`. Open checkout sessions keep their pinned revision and do not block
 * retirement.
 *
 * `DELETE /v1/delivery-methods/{delivery_method_id}`
 * @param delivery_method_id Flint delivery method ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#deleteDeliveryMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.delete("dmet_01KEZF7C00YSG3X2D1TZJ36TM0", {}, { idempotencyKey:
 * idempotencyKey })
 */
    delete(delivery_method_id: InputValue<string>, params?: DeliveryMethodsDeleteParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryMethod, DeliveryMethodResponse>>;
    /**
 * Returns the current revision and lifecycle state for one delivery method.
 *
 * `GET /v1/delivery-methods/{delivery_method_id}`
 * @param delivery_method_id Flint delivery method ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#getDeliveryMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryMethods.get("dmet_01KEZF7C00YSG3X2D1TZJ36TM0")
 */
    get(delivery_method_id: InputValue<string>, params?: DeliveryMethodsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryMethod, DeliveryMethodResponse>>;
    /**
 * Returns delivery methods in a stable, cursor-paginated order. Archived resources are excluded by
 * default. Default order: created_at ascending, then delivery_method_id ascending.
 *
 * `GET /v1/delivery-methods`
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryMethods
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.deliveryMethods.list()
 */
    list(params?: DeliveryMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<DeliveryMethodListResponse, DeliveryMethodListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryMethods
     */
    listPages(params?: DeliveryMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<DeliveryMethodListResponse, DeliveryMethodListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/delivery-configuration#listDeliveryMethods
     */
    listItems(params?: DeliveryMethodsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<DeliveryMethod>;
    /**
 * Sparsely updates mutable fields. A request that carries configuration, name, description,
 * display_position, or recommendation_priority publishes a new immutable revision, even when its
 * values are unchanged, and requires expected_version. Other fields, such as status, metadata, and
 * external_reference_id, advance version and keep the current revision, so they never replace a
 * revoked revision. Archived resources can't be changed; create a new resource instead. A method
 * referenced by checkout.default_delivery_method_ids at merchant scope or by delivery_method_ids
 * on an active or inactive payment link cannot be set inactive; the request returns 409
 * RESOURCE_IN_USE with the blocking references. Remove the method from
 * checkout.default_delivery_method_ids with `client.settings.update` or from the link's
 * delivery_method_ids with `client.paymentLinks.update`.
 *
 * `PATCH /v1/delivery-methods/{delivery_method_id}`
 * @param delivery_method_id Flint delivery method ID.
 * @see https://developers.withflintpay.com/docs/api/delivery-configuration#updateDeliveryMethod
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.deliveryMethods.update("dmet_01ARZ3NDEKTSV4RRFFQ69G5FAV", {status: "active"}, {
 * idempotencyKey: idempotencyKey })
 */
    update(delivery_method_id: InputValue<string>, params: DeliveryMethodsUpdateParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<DeliveryMethod, DeliveryMethodResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly deliveryMethods: DeliveryMethodsResource;
}
