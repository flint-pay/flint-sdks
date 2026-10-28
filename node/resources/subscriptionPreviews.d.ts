import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { SubscriptionDeliveryMethodImpact, SubscriptionPlanChangePreview } from '../declarations/types-48.js';
import type {
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateInput,
    SubscriptionRenewalPreview
} from '../declarations/types-49.js';
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
    SubscriptionPreviewsCreateInput,
    SubscriptionPreview,
    SubscriptionRenewalPreview,
    SubscriptionPreviewResponse,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTermsRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPreviewError,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem
} from '../declarations/types-49.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-65.js';
export type { RequestOptions, ResponseMeta } from '../declarations/types-42.js';
export type {
    SubscriptionDeliveryMethodImpact,
    SubscriptionPlanChangePreview,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionCounts,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-48.js';
export type { SdkResponse, ScopeRequirement } from '../declarations/types-46.js';
export type { ClientOptions, CheckoutBuyerContact } from '../declarations/types-4.js';
export type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateSubscriptionPreviewRequestCreateInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput,
    CreateSubscriptionPreviewRequestNextRenewalInput,
    CreateSubscriptionPreviewRequestPlanChangeInput
} from '../declarations/types-10.js';
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionAddressVerification,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment,
    SelectableErrorResource,
    SelectableOrderPaymentIntent
} from '../declarations/types-47.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalRequestRequestInput,
    DeliveryTransitTimeRuleRequestRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryRecipientRequirementInput,
    DeliverySelectionRecipientRequest,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-16.js';
export type { MetadataRequestInput, MetadataPatchRequestInput, MetadataMap, MetadataPatchRequest } from '../declarations/types-32.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-51.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails,
    DeliveryCustomerBooleanCondition
} from '../declarations/types-13.js';
export type {
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput
} from '../declarations/types-14.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyInputTieredInput,
    DeliveryRadiusOrigin
} from '../declarations/types-15.js';
export type { DeliveryZoneConditionInput, DigitalFulfillmentDetails, Dimensions } from '../declarations/types-17.js';
export type {
    DeliveryAvailabilityRequestRequestInput,
    DeliveryBlackoutIntervalRequestRequestInput,
    DeliveryBusinessDayRangeRequestRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-12.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-33.js';
export type { Credentials, CustomDomain, CustomDomainDNSRecord } from '../declarations/types-11.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation
} from '../declarations/types-18.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient
} from '../declarations/types-19.js';
export type { OrderLineItemModifier } from '../declarations/types-34.js';
export type { TextModifierRequest } from '../declarations/types-50.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-39.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-44.js';
export type { Package } from '../declarations/types-36.js';
export type { QuotaDetails } from '../declarations/types-41.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-37.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type {
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-8.js';
export { makeAddressRequest } from '../declarations/types-65.js';
export {
    makeCreateMeSubscriptionPreviewRequestDeliveryOptions,
    makeCreateMeSubscriptionPreviewRequestNextRenewal
} from '../declarations/types-67.js';
export {
    makeCreateSubscriptionPreviewRequest,
    makeCreateSubscriptionPreviewRequestCreate,
    makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate,
    makeCreateSubscriptionPreviewRequestDeliveryOptions,
    makeCreateSubscriptionPreviewRequestNextRenewal,
    makeCreateSubscriptionPreviewRequestPlanChange,
    makeCreateSubscriptionRequest,
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
    makeDeliveryFixedPricingStrategyRequest,
    makeDeliveryMethodConfigurationPatchRequest,
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
    makeDeliveryPricingRateRequest,
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
    makeDeliveryRateTablePricingStrategyRequest,
    makeDeliveryRecipientRequirement,
    makeDeliveryScheduleWindowRuleRequest,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryStateCondition,
    makeDeliveryTieredPricingStrategyInputQuantityOrMoney,
    makeDeliveryTieredPricingStrategyInputWeight,
    makeDeliveryTieredPricingStrategyRequest,
    makeDeliveryTransitTimeRuleRequestRequest,
    makeDeliveryWeeklyIntervalRequestRequest,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneCondition,
    makeDimensions
} from '../declarations/types-70.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-72.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-75.js';
export {
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint,
    makeSubscriptionBillingScheduleRequest,
    makeSubscriptionBillingStartInputImmediate,
    makeSubscriptionBillingStartInputImported,
    makeSubscriptionBillingStartInputScheduled,
    makeSubscriptionBillingStartRequest,
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest,
    makeSubscriptionDeliveryRequest,
    makeSubscriptionOfferLineItemRequest,
    makeSubscriptionOfferTermsRequest,
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTermsRequest
} from '../declarations/types-76.js';
export { makeTextModifierRequest, makeUpdateDeliveryMethodRequest } from '../declarations/types-77.js';
export { makeWeight } from '../declarations/types-78.js';
export interface SubscriptionPreviewsResource {
    /**
 * Estimates the next renewal or a plan change, or evaluates a proposed subscription, delivery
 * destination, or delivery method update without saving changes. next_renewal returns current
 * recurring promotions, shipping, and tax for the next charged cycle. plan_change uses the same
 * checks and pricing as change-plan, including unused paid item credit for billing_starts now. Tax
 * is null when no tax address is available; a tax service failure returns 502
 * EXTERNAL_SERVICE_ERROR. Malformed JSON, unknown fields and request-level problems (a missing or
 * unsupported mode, fields that belong to another mode) return 400. In create mode, every problem
 * with the proposed subscription is returned in errors with is_valid false, not only the first. A
 * preview does not reserve inventory or guarantee a future shipping rate.
 * @see reference/subscriptionPreviews.md#subscriptionpreviewscreate
 * POST /v1/subscription-previews
 * @example
 * client.subscriptionPreviews.create({body: {mode: "next_renewal", subscription_id:
 * "sub_00000000000000000000000000"}})
 */
    create(input: SubscriptionPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<((SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (Record<string, unknown>))>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPreviews.md#subscriptionpreviewscreate
     */
    createWithResponse(input: SubscriptionPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<SubscriptionPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPreviews: SubscriptionPreviewsResource;
}
