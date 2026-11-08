import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-48.js';
import type { SubscriptionDeliveryMethodImpact } from '../declarations/types-55.js';
import type {
    SubscriptionPlanChangePreview,
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateParams,
    SubscriptionRenewalPreview
} from '../declarations/types-56.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SubscriptionPreviewsCreateParams,
    SubscriptionPreview,
    SubscriptionRenewalPreview,
    SubscriptionPlanChangePreview,
    SubscriptionPreviewResponse,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPreviewError,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem,
    SubscriptionPlanChangeLineItemRequest
} from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-62.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type {
    SubscriptionDeliveryMethodImpact,
    SubscriptionDeliveryRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-55.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateSubscriptionPreviewRequestCreateInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput,
    CreateSubscriptionPreviewRequestNextRenewalInput,
    CreateSubscriptionPreviewRequestPlanChangeInput
} from '../declarations/types-11.js';
export type {
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionAddressVerification,
    SubscriptionCounts
} from '../declarations/types-54.js';
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryRecipientRequirementInput,
    DeliverySelectionRecipientRequest,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-19.js';
export type {
    MetadataRequestInput,
    MoneyValueInput,
    MetadataPatchRequestInput,
    MoneyValue,
    MetadataMap,
    NextAction,
    MetadataPatchRequest
} from '../declarations/types-35.js';
export type { SubscriptionTermsRequestInput } from '../declarations/types-57.js';
export type { UpdateDeliveryMethodRequestInput, TextModifierRequest } from '../declarations/types-58.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails
} from '../declarations/types-15.js';
export type {
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryPricingRateRequestInput
} from '../declarations/types-16.js';
export type { DeliveryRadiusConditionInput, DeliveryRadiusOriginInput, DeliveryRadiusOrigin } from '../declarations/types-18.js';
export type { DeliveryZoneConditionInput, DigitalFulfillmentDetails, Dimensions } from '../declarations/types-20.js';
export type {
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-14.js';
export type {
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput
} from '../declarations/types-17.js';
export type { Credentials } from '../declarations/types-12.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation
} from '../declarations/types-21.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient
} from '../declarations/types-22.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-44.js';
export type {
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment,
    ScopeRequirement,
    SelectableErrorResource,
    SelectableOrderPaymentIntent
} from '../declarations/types-53.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-51.js';
export type { Package } from '../declarations/types-39.js';
export type { CustomDomain, CustomDomainDNSRecord } from '../declarations/types-13.js';
export type { QuotaDetails, ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-41.js';
export type {
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-9.js';
export { makeAddressRequest } from '../declarations/types-62.js';
export {
    makeCreateMeSubscriptionPreviewRequestDeliveryOptions,
    makeCreateMeSubscriptionPreviewRequestNextRenewal
} from '../declarations/types-64.js';
export {
    makeCreateSubscriptionPreviewRequest,
    makeCreateSubscriptionPreviewRequestCreate,
    makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate,
    makeCreateSubscriptionPreviewRequestDeliveryOptions,
    makeCreateSubscriptionPreviewRequestNextRenewal,
    makeCreateSubscriptionPreviewRequestPlanChange,
    makeCreateSubscriptionRequest,
    makeDeliveryAvailabilityRequest,
    makeDeliveryBlackoutIntervalRequest,
    makeDeliveryBusinessDayRangeRequest,
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
} from '../declarations/types-66.js';
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
    makeDeliveryTransitTimeRuleRequest,
    makeDeliveryWeeklyIntervalRequest,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneCondition,
    makeDimensions
} from '../declarations/types-67.js';
export { makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-69.js';
export { makeMoneyValue } from '../declarations/types-70.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-72.js';
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
    makeSubscriptionPlanChangeLineItemRequest,
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTermsRequest
} from '../declarations/types-73.js';
export { makeTextModifierRequest, makeUpdateDeliveryMethodRequest } from '../declarations/types-74.js';
export { makeWeight } from '../declarations/types-75.js';
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
 *
 * `POST /v1/subscription-previews`
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionPreviews.create({mode: "next_renewal", subscription_id:
 * "sub_00000000000000000000000000"})
 */
    create(params: SubscriptionPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<((SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (Record<string, unknown>)), SubscriptionPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPreviews: SubscriptionPreviewsResource;
}
