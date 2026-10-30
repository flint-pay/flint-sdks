import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { SubscriptionDeliveryMethodImpact } from '../declarations/types-54.js';
import type { SubscriptionPlanChangePreview } from '../declarations/types-55.js';
import type {
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateParams,
    SubscriptionRenewalPreview
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
    SubscriptionPreviewsCreateParams,
    SubscriptionPreview,
    SubscriptionRenewalPreview,
    SubscriptionPreviewResponse,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTermsRequestInput,
    SubscriptionPreviewError,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem
} from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type {
    SubscriptionDeliveryMethodImpact,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionCounts
} from '../declarations/types-54.js';
export type {
    SubscriptionPlanChangePreview,
    SubscriptionPlanTermsRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionOfferLineItemRequest,
    SubscriptionPlanChangeLineItemRequest
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
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionAddressVerification,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment,
    SelectableOrderPaymentIntent
} from '../declarations/types-53.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliverySelectionRecipientRequest,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-19.js';
export type { MetadataRequestInput, MetadataPatchRequestInput, MetadataMap, MetadataPatchRequest } from '../declarations/types-34.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-58.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails
} from '../declarations/types-15.js';
export type {
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-14.js';
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
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementInput,
    DeliveryRadiusOrigin
} from '../declarations/types-18.js';
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
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-35.js';
export type { Credentials, CustomDomain, CustomDomainDNSRecord } from '../declarations/types-12.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation
} from '../declarations/types-21.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-22.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-20.js';
export type { OrderLineItemModifier } from '../declarations/types-37.js';
export type { TextModifierRequest } from '../declarations/types-57.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-43.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-50.js';
export type { Package } from '../declarations/types-38.js';
export type { QuotaDetails, ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { ScopeRequirement, SelectableErrorResource } from '../declarations/types-52.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-40.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type {
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-8.js';
export { makeAddressRequest } from '../declarations/types-61.js';
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
    makeDeliveryBlackoutIntervalRequest
} from '../declarations/types-65.js';
export {
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
    makeDeliveryPostalCodeValue,
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
    makeDeliveryRadiusOrigin
} from '../declarations/types-66.js';
export {
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
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-69.js';
export {
    makeReturnResolutionLineItemRequest,
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint
} from '../declarations/types-72.js';
export {
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
    makeSubscriptionTermsRequest,
    makeTextModifierRequest,
    makeUpdateDeliveryMethodRequest
} from '../declarations/types-73.js';
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
