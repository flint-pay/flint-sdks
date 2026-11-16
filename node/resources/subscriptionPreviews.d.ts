import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { RequestOptions } from '../declarations/types-60.js';
import type { SubscriptionCreatePreview, SubscriptionDeliveryMethodImpact } from '../declarations/types-67.js';
import type {
    SubscriptionPlanChangePreview,
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateParams
} from '../declarations/types-69.js';
import type { SubscriptionPromotionApplyPreview, SubscriptionQuantityChangePreview, SubscriptionRenewalPreview } from '../declarations/types-70.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-77.js';
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
    SubscriptionPlanChangePreview,
    SubscriptionPreviewResponse,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPreviewError,
    SubscriptionPromotion,
    SubscriptionPlanChangeLineItemRequest
} from '../declarations/types-69.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-77.js';
export type { RequestOptions, ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-60.js';
export type {
    SubscriptionCreatePreview,
    SubscriptionDeliveryMethodImpact,
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
    SubscriptionChargeEstimate,
    SubscriptionCounts
} from '../declarations/types-67.js';
export type {
    SubscriptionRenewalPreview,
    SubscriptionQuantityChangePreview,
    SubscriptionPromotionApplyPreview,
    SubscriptionPromotionRequestInput,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTaxRequestInput,
    SubscriptionTaxCalculationRequestInput,
    SubscriptionTermsRequestInput,
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem,
    SubscriptionQuantityChangeLineItemRequest
} from '../declarations/types-70.js';
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
    CreateSubscriptionPreviewRequestPromotionApplyInput,
    Credentials
} from '../declarations/types-14.js';
export type { AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
export type {
    SubscriptionDeliveryRequestInput,
    SubscriptionEndAfterRequestInput,
    SubscriptionEndAfterCyclesRequestInput,
    SubscriptionEndAfterDateRequestInput,
    SubscriptionGiftRecipientRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionGiftRecipientRequest,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-68.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionRequestInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionRequestInput,
    DeliveryWeeklyIntervalRequestInput,
    DeliveryTransitTimeRuleRequestInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliverySelectionRecipientRequest,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-24.js';
export type { MetadataRequestInput, MetadataPatchRequestInput, MetadataMap, MetadataPatchRequest } from '../declarations/types-41.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    QuotaDetails,
    PromotionRecurrenceRepeating
} from '../declarations/types-57.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-73.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryFulfillmentDetails
} from '../declarations/types-19.js';
export type {
    DeliveryEligibilityExpressionRequestInput,
    DeliveryCountryConditionRequestInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryCustomerBooleanCondition
} from '../declarations/types-18.js';
export type {
    DeliveryPostalCodeConditionRequestInput,
    DeliveryPostalCodeValueRequestInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryPricingRateRequestInput
} from '../declarations/types-20.js';
export type { DeliveryRadiusConditionRequestInput, DeliveryRadiusOriginInput, DeliveryRadiusOrigin } from '../declarations/types-22.js';
export type {
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementRequestInput,
    DeliveryRevocation,
    DeliveryRevocationImpact,
    DeliveryRevocationTarget,
    DeliveryRevocationTargetLocationGeography,
    DeliveryRevocationTargetDeliveryRateCallbackSigningKey,
    DeliveryRevocationTargetDeliveryRateCallbackRevision,
    DeliveryRevocationTargetDeliveryMethodRevision
} from '../declarations/types-23.js';
export type {
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeferredPromotion,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-17.js';
export type {
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput
} from '../declarations/types-21.js';
export type { MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-42.js';
export type { AuthMode } from '../declarations/types-1.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    ErrorDetailCode,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation
} from '../declarations/types-26.js';
export type { Fulfillment, FulfillmentHold, FulfillmentChargeLink, FulfillmentLineItem, FulfillmentOutcome } from '../declarations/types-27.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-25.js';
export type { OrderLineItemModifier, OrderSettlementAmounts } from '../declarations/types-45.js';
export type { TextModifierRequest } from '../declarations/types-72.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { PricingAmounts } from '../declarations/types-55.js';
export type { SettlementAmounts, ShipmentFulfillmentDetails, Shipment, SubscriptionAddressVerification } from '../declarations/types-66.js';
export type { PickupFulfillmentDetails } from '../declarations/types-54.js';
export type { FulfillmentRecipient } from '../declarations/types-28.js';
export type {
    ServiceFulfillmentDetails,
    ScopeRequirement,
    SelectableErrorResource,
    SelectableOrderPaymentIntent
} from '../declarations/types-65.js';
export type { ReturnHandoffRequirementLineItem } from '../declarations/types-61.js';
export type { Package } from '../declarations/types-47.js';
export type { CustomDomain, CustomDomainDNSRecord } from '../declarations/types-15.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-58.js';
export type { GiftCardRestriction } from '../declarations/types-30.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-49.js';
export type { PromotionRecurrence, PromotionRecurrenceOnce, PromotionRecurrenceForever } from '../declarations/types-56.js';
export { makeAddressRequest } from '../declarations/types-77.js';
export {
    makeCreateSubscriptionPreviewRequest,
    makeCreateSubscriptionPreviewRequestCreate,
    makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate,
    makeCreateSubscriptionPreviewRequestDeliveryOptions,
    makeCreateSubscriptionPreviewRequestNextRenewal,
    makeCreateSubscriptionPreviewRequestPlanChange,
    makeCreateSubscriptionPreviewRequestPromotionApply,
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
    makeDeliveryMethodConfigurationPatchRequest
} from '../declarations/types-82.js';
export {
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
    makeDeliveryPricingRateRequest,
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
} from '../declarations/types-83.js';
export { makeMetadataPatchRequest } from '../declarations/types-85.js';
export { makeMetadataRequest, makeMoneyValue } from '../declarations/types-86.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-88.js';
export {
    makeSubscriptionBillingScheduleInputExternal,
    makeSubscriptionBillingScheduleInputFlint,
    makeSubscriptionBillingScheduleRequest,
    makeSubscriptionBillingStartInputImmediate,
    makeSubscriptionBillingStartInputImported,
    makeSubscriptionBillingStartInputScheduled,
    makeSubscriptionBillingStartRequest,
    makeSubscriptionDeliveryDestinationInputAddress,
    makeSubscriptionDeliveryDestinationInputCustomerAddress
} from '../declarations/types-89.js';
export {
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
} from '../declarations/types-90.js';
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
