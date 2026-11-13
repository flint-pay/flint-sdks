import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { SubscriptionCreatePreview } from '../declarations/types-60.js';
import type { SubscriptionDeliveryMethodImpact } from '../declarations/types-61.js';
import type {
    SubscriptionPlanChangePreview,
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateParams,
    SubscriptionPromotionApplyPreview
} from '../declarations/types-62.js';
import type { SubscriptionQuantityChangePreview, SubscriptionRenewalPreview } from '../declarations/types-63.js';
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
    SubscriptionPreviewsCreateParams,
    SubscriptionPreview,
    SubscriptionPlanChangePreview,
    SubscriptionPromotionApplyPreview,
    SubscriptionPreviewResponse,
    SubscriptionPromotionRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPreviewError,
    SubscriptionPromotion,
    SubscriptionPlanChangeLineItemRequest,
    SubscriptionQuantityChangeLineItemRequest
} from '../declarations/types-62.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type {
    SubscriptionCreatePreview,
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
    SubscriptionAddressVerification,
    SubscriptionCounts
} from '../declarations/types-60.js';
export type {
    SubscriptionDeliveryMethodImpact,
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
} from '../declarations/types-61.js';
export type {
    SubscriptionRenewalPreview,
    SubscriptionQuantityChangePreview,
    SubscriptionServiceLocationRequestInput,
    SubscriptionServiceLocationInputCustomerAddressInput,
    SubscriptionServiceLocationInputAddressInput,
    SubscriptionTaxRequestInput,
    SubscriptionTaxCalculationRequestInput,
    SubscriptionTermsRequestInput,
    SubscriptionQuantityChangeLineItemRequestInput,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem
} from '../declarations/types-63.js';
export type { ClientOptions } from '../declarations/types-6.js';
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
} from '../declarations/types-13.js';
export type { AddressRequestInput, Address, AddressRequest } from '../declarations/types-0.js';
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
} from '../declarations/types-22.js';
export type { MetadataRequestInput, MoneyValueInput, MoneyValue, NextAction } from '../declarations/types-38.js';
export type {
    PromotionRefRequestInput,
    PromotionRefInputPromotionIDInput,
    PromotionRefInputPromotionCodeInput,
    PromotionRecurrence,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating,
    PromotionRecurrenceForever
} from '../declarations/types-51.js';
export type { UpdateDeliveryMethodRequestInput } from '../declarations/types-66.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput
} from '../declarations/types-18.js';
export type {
    DeliveryEligibilityExpressionRequestInput,
    DeliveryCountryConditionRequestInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails,
    DeliveryCustomerBooleanCondition
} from '../declarations/types-17.js';
export type {
    DeliveryPostalCodeConditionRequestInput,
    DeliveryPostalCodeValueRequestInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput
} from '../declarations/types-19.js';
export type { DeliveryRadiusConditionRequestInput, DeliveryRadiusOriginInput, DeliveryRadiusOrigin } from '../declarations/types-20.js';
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
} from '../declarations/types-21.js';
export type {
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeferredPromotion,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-16.js';
export type { MetadataPatchRequestInput, MetadataMap, MetadataPatchRequest } from '../declarations/types-37.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    ErrorDetailCode,
    Fulfillment,
    FulfillmentChargeLink,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    ErrorRemediation
} from '../declarations/types-24.js';
export type { FulfillmentHold, FulfillmentLineItem, FulfillmentOutcome, FulfillmentRecipient } from '../declarations/types-25.js';
export type { DigitalFulfillmentDetails, Dimensions } from '../declarations/types-23.js';
export type { OrderLineItemModifier } from '../declarations/types-40.js';
export type { TextModifierRequest } from '../declarations/types-65.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type {
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment,
    ScopeRequirement,
    SelectableErrorResource,
    SelectableOrderPaymentIntent
} from '../declarations/types-59.js';
export type { PickupFulfillmentDetails } from '../declarations/types-48.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-57.js';
export type { Package } from '../declarations/types-42.js';
export type { CustomDomain, CustomDomainDNSRecord } from '../declarations/types-15.js';
export type { QuotaDetails, ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { GiftCardRestriction } from '../declarations/types-27.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-44.js';
export type {
    CreateMeSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateMeSubscriptionPreviewRequestNextRenewalInput
} from '../declarations/types-10.js';
export { makeAddressRequest } from '../declarations/types-70.js';
export {
    makeCreateMeSubscriptionPreviewRequestDeliveryOptions,
    makeCreateMeSubscriptionPreviewRequestNextRenewal
} from '../declarations/types-72.js';
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
    makeDeliveryRadiusOrigin
} from '../declarations/types-75.js';
export {
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
} from '../declarations/types-76.js';
export { makeMetadataPatchRequest, makeMetadataRequest, makeMoneyValue } from '../declarations/types-78.js';
export { makePromotionRefInputPromotionCode, makePromotionRefInputPromotionID, makePromotionRefRequest } from '../declarations/types-80.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-81.js';
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
    makeTextModifierRequest
} from '../declarations/types-82.js';
export { makeUpdateDeliveryMethodRequest } from '../declarations/types-83.js';
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
 * subscription.promotions. A create preview attaches no promotions and counts no uses. A preview
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
