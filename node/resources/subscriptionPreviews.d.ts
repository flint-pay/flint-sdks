import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { SubscriptionDeliveryMethodImpact, SubscriptionPlanChangePreview } from '../declarations/types-45.js';
import type {
    SubscriptionPreview,
    SubscriptionPreviewResponse,
    SubscriptionPreviewsCreateInput,
    SubscriptionRenewalPreview
} from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
    SdkErrorDetails
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
    SubscriptionPreviewError,
    SubscriptionRenewalEstimate,
    SubscriptionRenewalEstimateDiscount,
    SubscriptionRenewalEstimateLineItem
} from '../declarations/types-46.js';
export type { _SdkWithoutIdempotency, Weight } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    SubscriptionDeliveryMethodImpact,
    SubscriptionPlanChangePreview,
    SubscriptionDeliveryDestinationRequestInput,
    SubscriptionDeliveryDestinationInputCustomerAddressInput,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionBillingStartRequestInput,
    SubscriptionDeliveryRequestInput,
    SubscriptionPlanTermsRequestInput,
    SubscriptionOfferTermsRequestInput,
    SubscriptionOfferLineItemRequestInput,
    SubscriptionDeliveryOption,
    SubscriptionCounts,
    SubscriptionOfferLineItemRequest
} from '../declarations/types-45.js';
export type { SdkResponse, ScopeRequirement, SelectableMerchant, SelectableOrderPaymentIntent } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateSubscriptionPreviewRequestCreateInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput,
    CreateSubscriptionPreviewRequestNextRenewalInput,
    CreateSubscriptionPreviewRequestPlanChangeInput,
    Credentials
} from '../declarations/types-9.js';
export type {
    OrderDeliveryDestinationAddressRequestInput,
    OrderLineItemModifier,
    OrderDeliveryDestinationAddressRequest
} from '../declarations/types-32.js';
export type {
    SubscriptionBillingScheduleRequestInput,
    SubscriptionBillingScheduleInputFlintInput,
    SubscriptionBillingScheduleInputExternalInput,
    SubscriptionBillingStartInputImmediateInput,
    SubscriptionBillingStartInputScheduledInput,
    SubscriptionBillingStartInputImportedInput,
    SubscriptionAddressVerification,
    SettlementAmounts,
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    Shipment
} from '../declarations/types-44.js';
export type {
    DeliverySelectionRecipientRequestInput,
    DeliveryStateConditionInput,
    DeliveryWindowTimeConditionInput,
    DeliveryZoneConditionInput,
    DeliveryWeeklyIntervalInput,
    DeliveryTransitTimeRuleInput,
    DeliveryWeightUnitPriceRequestInput,
    DeliveryTieredPricingStrategyRequestInput,
    DeliveryTieredPricingStrategyInputWeightInput,
    DeliveryTieredPricingStrategyInputQuantityOrMoneyInput,
    DeliveryWindowTimeCondition,
    DeliveryWeeklyInterval
} from '../declarations/types-15.js';
export type { AddressRequestInput, AuthMode, Address, AddressRequest } from '../declarations/types-0.js';
export type { UpdateDeliveryMethodRequestInput, TextModifierRequest } from '../declarations/types-47.js';
export type {
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput
} from '../declarations/types-12.js';
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
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryFulfillmentDetails,
    DeliveryCustomerBooleanCondition,
    DeliveryBlackoutInterval,
    DeliveryBusinessDayRange
} from '../declarations/types-11.js';
export type {
    DeliveryRadiusConditionInput,
    DeliveryRadiusOriginInput,
    DeliveryScheduleWindowRuleRequestInput,
    DeliveryRateTablePricingStrategyRequestInput,
    DeliveryRecipientRequirementInput,
    DeliverySelectionRecipientRequest,
    DeliveryRadiusOrigin
} from '../declarations/types-14.js';
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
} from '../declarations/types-13.js';
export type { MoneyValueInput, MoneyValue, NextAction, NextActionMerchantAccountSession } from '../declarations/types-31.js';
export type {
    ErrorDetail,
    ErrorResourceReference,
    DigitalFulfillmentDetails,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    Dimensions,
    ErrorRemediation
} from '../declarations/types-16.js';
export type {
    Fulfillment,
    FulfillmentHold,
    FulfillmentChargeLink,
    FulfillmentLineItem,
    FulfillmentOutcome,
    FulfillmentRecipient
} from '../declarations/types-17.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts, PickupFulfillmentDetails } from '../declarations/types-37.js';
export type { ReturnResolutionLineItemRequest } from '../declarations/types-41.js';
export type { Package } from '../declarations/types-34.js';
export type { CustomDomain, CustomDomainDNSRecord } from '../declarations/types-10.js';
export type { QuotaDetails } from '../declarations/types-39.js';
export type { PaymentErrorSummary, PaymentCollection, PaymentCollectionStripe, PaymentCollectionStripeElements } from '../declarations/types-35.js';
export { makeAddressRequest } from '../declarations/types-61.js';
export {
    makeCreateSubscriptionPreviewRequest,
    makeCreateSubscriptionPreviewRequestCreate,
    makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate,
    makeCreateSubscriptionPreviewRequestDeliveryOptions,
    makeCreateSubscriptionPreviewRequestNextRenewal,
    makeCreateSubscriptionPreviewRequestPlanChange,
    makeCreateSubscriptionRequest
} from '../declarations/types-64.js';
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
    makeDeliveryFixedPricingStrategyRequest,
    makeDeliveryMethodConfigurationPatchRequest,
    makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup,
    makeDeliveryMethodOriginSelectorInputFixedLocation,
    makeDeliveryMethodOriginSelectorInputPickupLocationCollection,
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
    makeDeliveryPricingTierBandRequest
} from '../declarations/types-65.js';
export {
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
    makeDeliveryTransitTimeRule,
    makeDeliveryWeeklyInterval,
    makeDeliveryWeightUnitPriceRequest,
    makeDeliveryWindowTimeCondition,
    makeDeliveryZoneCondition,
    makeDimensions
} from '../declarations/types-66.js';
export { makeMoneyValue, makeOrderDeliveryDestinationAddressRequest } from '../declarations/types-68.js';
export { makeReturnResolutionLineItemRequest } from '../declarations/types-70.js';
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
    makeSubscriptionTermsRequest,
    makeTextModifierRequest
} from '../declarations/types-71.js';
export { makeUpdateDeliveryMethodRequest } from '../declarations/types-72.js';
export { makeWeight } from '../declarations/types-73.js';
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
    create(input: SubscriptionPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<((SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (Record<string, unknown>))>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/subscriptionPreviews.md#subscriptionpreviewscreate
     */
    createWithResponse(input: SubscriptionPreviewsCreateInput, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<SubscriptionPreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly subscriptionPreviews: SubscriptionPreviewsResource;
}
