import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { SubscriptionCreatePreview } from '../declarations/types-69.js';
import type { SubscriptionDeliveryMethodImpact } from '../declarations/types-70.js';
import type { SubscriptionPlanChangePreview } from '../declarations/types-71.js';
import type {
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateParams,
    SubscriptionPromotionApplyPreview,
    SubscriptionQuantityChangePreview,
    SubscriptionRenewalPreview
} from '../declarations/types-72.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
    SubscriptionQuantityChangePreview,
    SubscriptionPromotionApplyPreview,
    SubscriptionPreviewResponse,
    SubscriptionPromotionRequestInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTaxCalculationRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionPreviewError,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem,
    SubscriptionPromotion,
    SubscriptionQuantityChangeLineItemRequest
} from '../declarations/types-72.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-80.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-62.js';
export type {
    SubscriptionCreatePreview,
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionChargeEstimate,
    SubscriptionAddressVerification,
    SubscriptionCounts
} from '../declarations/types-69.js';
export type {
    SubscriptionDeliveryMethodImpact,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionEndAfterDateRequestInput,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionGiftRecipientRequest
} from '../declarations/types-70.js';
export type {
    SubscriptionPlanChangePreview,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionPlanChangeLineItemRequest,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-71.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateSubscriptionPreviewRequestCreateInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput,
    CreateSubscriptionPreviewRequestNextRenewalInput,
    CreateSubscriptionPreviewRequestPlanChangeInput,
    CreateSubscriptionPreviewRequestQuantityChangeInput,
    CreateSubscriptionPreviewRequestPromotionApplyInput
} from '../declarations/types-14.js';
export type { AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliverySelectionRecipientRequest,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-24.js';
export type { MetadataRequestInput, MetadataPatchRequestInput, MetadataMap, MetadataPatchRequest } from '../declarations/types-43.js';
export type { PromotionRefRequestInput, PromotionRefInputPromotionIDInput, QuotaDetails } from '../declarations/types-59.js';
export type {
    PromotionRefInputPromotionCodeInput,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-58.js';
export type { SubscriptionTaxRequestInput, SubscriptionTermsRequestInput } from '../declarations/types-73.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-76.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryEligibilityExpressionRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails
} from '../declarations/types-19.js';
export type {
    DeliveryCountryConditionRequestInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceRequestInput,
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryCustomerBooleanCondition,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-18.js';
export type {
    DeliveryPostalCodeConditionRequestInput,
    DeliveryPostalCodeValueRequestInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput
} from '../declarations/types-20.js';
export type { DeliveryRadiusConditionRequestInput, DeliveryRadiusOriginInput, DeliveryRadiusOrigin } from '../declarations/types-22.js';
export type { DeliveryZoneConditionRequestInput, DigitalFulfillmentDetails, Dimensions } from '../declarations/types-25.js';
export type {
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput
} from '../declarations/types-21.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-44.js';
export type {
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementRequestInput,
    DeliveryRevocation,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-23.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials, CustomDomain, CustomDomainDNSRecord } from '../declarations/types-15.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    ErrorDetailCode,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ErrorRemediation
} from '../declarations/types-26.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    ExpandedShipmentSummary
} from '../declarations/types-27.js';
export type { OrderLineItemModifier } from '../declarations/types-46.js';
export type { TextModifierRequest } from '../declarations/types-75.js';
export type { CheckoutBuyerContact } from '../declarations/types-6.js';
export type { DeferredPromotion } from '../declarations/types-17.js';
export type { PricingAmounts } from '../declarations/types-56.js';
export type { OrderSettlementAmounts } from '../declarations/types-47.js';
export type {
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment,
    SelectableErrorResource,
    SelectableOrderPaymentIntent
} from '../declarations/types-68.js';
export type { FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-28.js';
export type { PickupFulfillmentDetails } from '../declarations/types-55.js';
export type { ReturnHandoffRequirementLineItem } from '../declarations/types-63.js';
export type { Package } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export type { GiftCardRestriction } from '../declarations/types-30.js';
export type { ScopeRequirement } from '../declarations/types-67.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-51.js';
export { makeAddressRequest } from '../declarations/types-80.js';
export {
    makeCreateSubscriptionPreviewRequest,
    makeCreateSubscriptionPreviewRequestCreate,
    makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate,
    makeCreateSubscriptionPreviewRequestDeliveryOptions,
    makeCreateSubscriptionPreviewRequestNextRenewal,
    makeCreateSubscriptionPreviewRequestPlanChange,
    makeCreateSubscriptionPreviewRequestPromotionApply
} from '../declarations/types-84.js';
export {
    makeCreateSubscriptionPreviewRequestQuantityChange,
    makeCreateSubscriptionRequest,
    makeDeliveryAvailabilityRequest,
    makeDeliveryBlackoutIntervalRequest,
    makeDeliveryBusinessDayRangeRequest,
    makeDeliveryCalculatedPricingStrategyRequest,
    makeDeliveryCallbackPricingStrategyRequest,
    makeDeliveryCallerSuppliedPricingStrategyRequest,
    makeDeliveryCountryConditionRequest,
    makeDeliveryCustomerBooleanCondition,
    makeDeliveryCustomerSegmentCondition,
    makeDeliveryDistanceRequest,
    makeDeliveryDistanceUnitPriceRequest,
    makeDeliveryEligibilityExpressionRequest,
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
    makeDeliveryPostalCodeConditionRequest,
    makeDeliveryPostalCodeValueRequest,
    makeDeliveryPricingRateRequest
} from '../declarations/types-85.js';
export {
    makeDeliveryPricingStrategyInputCalculated,
    makeDeliveryPricingStrategyInputCallback,
    makeDeliveryPricingStrategyInputCallerSupplied,
    makeDeliveryPricingStrategyInputFixed,
    makeDeliveryPricingStrategyInputRateTable,
    makeDeliveryPricingStrategyInputTiered,
    makeDeliveryPricingStrategyRequest,
    makeDeliveryPricingTierBandRequest,
    makeDeliveryRadiusConditionRequest,
    makeDeliveryRadiusOrigin,
    makeDeliveryRateTablePricingStrategyRequest,
    makeDeliveryRecipientRequirementRequest,
    makeDeliveryScheduleWindowRuleRequest,
    makeDeliverySelectionRecipientRequest,
    makeDeliveryStateConditionRequest,
    makeDeliveryTieredPricingStrategyInputQuantityOrMoney,
    makeDeliveryTieredPricingStrategyInputWeight,
    makeDeliveryTieredPricingStrategyRequest,
    makeDeliveryTransitTimeRuleRequest,
    makeDeliveryWeeklyIntervalRequest,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneConditionRequest
} from '../declarations/types-86.js';
export { makeMetadataMap, makeMetadataPatchRequest, makeMetadataRequest } from '../declarations/types-88.js';
export { makeMoneyValue } from '../declarations/types-89.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-90.js';
export {
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint,
    makeSubscriptionBillingScheduleRequest,
    makeSubscriptionBillingStartInputImmediate,
    makeSubscriptionBillingStartInputImported
} from '../declarations/types-92.js';
export {
    makeSubscriptionBillingStartInputScheduled,
    makeSubscriptionBillingStartRequest,
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress,
    makeSubscriptionDeliveryDestinationRequest,
    makeSubscriptionDeliveryRequest,
    makeSubscriptionEndAfterCyclesRequest,
    makeSubscriptionEndAfterDateRequest,
    makeSubscriptionEndAfterRequest,
    makeSubscriptionGiftRecipientRequest,
    makeSubscriptionOfferLineItemRequest,
    makeSubscriptionOfferTermsRequest,
    makeSubscriptionPlanChangeLineItemRequest,
    makeSubscriptionPlanTermsRequest,
    makeSubscriptionPromotionRequest,
    makeSubscriptionQuantityChangeLineItemRequest,
    makeSubscriptionServiceLocationInputAddress,
    makeSubscriptionServiceLocationInputCustomerAddress,
    makeSubscriptionServiceLocationRequest,
    makeSubscriptionTaxCalculationRequest,
    makeSubscriptionTaxRequest,
    makeSubscriptionTermsRequest,
    makeTextModifierRequest,
    makeUpdateDeliveryMethodRequest
} from '../declarations/types-93.js';
export interface SubscriptionPreviewsResource {
    /**
 * Estimates the next renewal, a plan change, or a promotion attachment, or evaluates a proposed
 * subscription, delivery destination, or delivery method update without saving changes.
 * next_renewal returns current recurring promotions, shipping, and tax for the next charged cycle.
 * plan_change uses the same checks and pricing as change-plan, including unused paid item credit
 * for billing_starts now or prorated_now. quantity_change accepts the change-quantity inputs and
 * previews the same prorated charge without changing the subscription. promotion_apply uses the
 * same checks as applying a promotion and returns the proposed attachment and the renewal estimate
 * for its first_cycle; its refusals return HTTP errors. Tax is null when tax can't be calculated
 * yet; a tax service failure returns 502 EXTERNAL_SERVICE_ERROR. Malformed JSON, unknown fields
 * and request-level problems (a missing or unsupported mode, fields that belong to another mode)
 * return 400. Create mode returns SubscriptionCreatePreview with first_charge,
 * first_period_charge, and recurring estimates, all null when validation prevents pricing.
 * first_charge is the first Flint collection, including any separate setup fee; recurring is the
 * first normal full-period collection without setup fees. With prorate_first_period, the prorated
 * first period is first_charge, or first_period_charge when a setup fee is collected first, and
 * recurring is cycle 2 at the end of that period. is_valid means valid and priceable inputs, not
 * payment readiness. Card validation matches creation, including cardless imports. In create mode,
 * every problem with the proposed subscription is returned in errors with is_valid false,
 * including CUSTOMER_EMAIL_REQUIRED when the customer has no email and promotion refusals under
 * subscription.promotions. A create preview attaches no promotions and counts no uses. In
 * delivery_options, shipping_countries lists countries potentially served by the subscription
 * shipping and local delivery methods; omit destination on the buyer preview to read coverage
 * before entering an address. Other address, cart, customer and rate checks still apply. A preview
 * does not reserve inventory or guarantee a future shipping rate.
 *
 * `POST /v1/subscription-previews`
 * @see https://developers.withflintpay.com/docs/api/subscriptions#createSubscriptionPreview
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.subscriptionPreviews.create({mode: "next_renewal", subscription_id:
 * "sub_00000000000000000000000000"})
 */
    create(params: SubscriptionPreviewsCreateParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<((SubscriptionCreatePreview)
        | (SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (SubscriptionQuantityChangePreview)
        | (SubscriptionPromotionApplyPreview)
        | (Record<string, unknown>)), SubscriptionPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPreviews: SubscriptionPreviewsResource;
}
