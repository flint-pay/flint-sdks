import type { InputValue, Model } from '../runtime.js';
import type {
    CreateSubscriptionLineItemRequestVariantInput,
    CreateSubscriptionOfferRequestInput,
    CreateSubscriptionPlanRequestInput,
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionPreviewRequestCreateInput,
    CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput,
    CreateSubscriptionPreviewRequestDeliveryOptionsInput,
    CreateSubscriptionPreviewRequestNextRenewalInput,
    CreateSubscriptionPreviewRequestPlanChangeInput,
    CreateSubscriptionRequestInput,
    CreateTaxRegistrationRequestInput
} from './types-11.js';
import type {
    CreateTestClockRequestInput,
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput,
    CreateWorkloadIdentityRequestInput,
    CreditNoteCorrectionRequestInput,
    CreditNoteCorrectionRequestAmountInput,
    CreditNoteCorrectionRequestQuantityInput,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteLineItemRequestInput,
    CreditNoteRefundRequestInput
} from './types-12.js';
import type {
    CustomerAccountPresentationRequestInput,
    CustomerAccountRouteTemplatesRequestInput,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-13.js';
import type {
    DecideReturnInspectionLineItemRequestInput,
    DecideReturnRequestInput,
    DeclinePaymentReviewRequestInput,
    DeliveryAddressRequestInput,
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryCoordinateRequestInput
} from './types-14.js';
import type {
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryEstimateRuleRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryInventoryAssignmentRequestInput,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryMethodConfigurationRequestInput
} from './types-15.js';
import type {
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput
} from './types-16.js';
export declare function makeCreateSubscriptionLineItemRequestVariant(value: InputValue<CreateSubscriptionLineItemRequestVariantInput>): Model<CreateSubscriptionLineItemRequestVariantInput>;
export declare function makeCreateSubscriptionOfferRequest(value: InputValue<CreateSubscriptionOfferRequestInput>): Model<CreateSubscriptionOfferRequestInput>;
export declare function makeCreateSubscriptionPlanRequest(value: InputValue<CreateSubscriptionPlanRequestInput>): Model<CreateSubscriptionPlanRequestInput>;
export declare function makeCreateSubscriptionPreviewRequest(value: InputValue<Exclude<CreateSubscriptionPreviewRequestInput & object, readonly unknown[]>>): Model<Exclude<CreateSubscriptionPreviewRequestInput & object, readonly unknown[]>>;
export declare function makeCreateSubscriptionPreviewRequest(value: InputValue<CreateSubscriptionPreviewRequestInput>): Model<CreateSubscriptionPreviewRequestInput>;
export declare function makeCreateSubscriptionPreviewRequestCreate(value: InputValue<CreateSubscriptionPreviewRequestCreateInput>): Model<CreateSubscriptionPreviewRequestCreateInput>;
export declare function makeCreateSubscriptionPreviewRequestDeliveryMethodUpdate(value: InputValue<CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput>): Model<CreateSubscriptionPreviewRequestDeliveryMethodUpdateInput>;
export declare function makeCreateSubscriptionPreviewRequestDeliveryOptions(value: InputValue<CreateSubscriptionPreviewRequestDeliveryOptionsInput>): Model<CreateSubscriptionPreviewRequestDeliveryOptionsInput>;
export declare function makeCreateSubscriptionPreviewRequestNextRenewal(value: InputValue<CreateSubscriptionPreviewRequestNextRenewalInput>): Model<CreateSubscriptionPreviewRequestNextRenewalInput>;
export declare function makeCreateSubscriptionPreviewRequestPlanChange(value: InputValue<CreateSubscriptionPreviewRequestPlanChangeInput>): Model<CreateSubscriptionPreviewRequestPlanChangeInput>;
export declare function makeCreateSubscriptionRequest(value: InputValue<CreateSubscriptionRequestInput>): Model<CreateSubscriptionRequestInput>;
export declare function makeCreateTaxRegistrationRequest(value: InputValue<CreateTaxRegistrationRequestInput>): Model<CreateTaxRegistrationRequestInput>;
export declare function makeCreateTestClockRequest(value: InputValue<CreateTestClockRequestInput>): Model<CreateTestClockRequestInput>;
export declare function makeCreateWebhookDeliveryRequest(value: InputValue<CreateWebhookDeliveryRequestInput>): Model<CreateWebhookDeliveryRequestInput>;
export declare function makeCreateWebhookEndpointRequest(value: InputValue<CreateWebhookEndpointRequestInput>): Model<CreateWebhookEndpointRequestInput>;
export declare function makeCreateWebhookTestEventRequest(value: InputValue<CreateWebhookTestEventRequestInput>): Model<CreateWebhookTestEventRequestInput>;
export declare function makeCreateWorkloadIdentityRequest(value: InputValue<CreateWorkloadIdentityRequestInput>): Model<CreateWorkloadIdentityRequestInput>;
export declare function makeCreditNoteCorrectionRequest(value: InputValue<CreditNoteCorrectionRequestInput>): Model<CreditNoteCorrectionRequestInput>;
export declare function makeCreditNoteCorrectionRequestAmount(value: InputValue<CreditNoteCorrectionRequestAmountInput>): Model<CreditNoteCorrectionRequestAmountInput>;
export declare function makeCreditNoteCorrectionRequestQuantity(value: InputValue<CreditNoteCorrectionRequestQuantityInput>): Model<CreditNoteCorrectionRequestQuantityInput>;
export declare function makeCreditNoteIssueAllocationRequest(value: InputValue<CreditNoteIssueAllocationRequestInput>): Model<CreditNoteIssueAllocationRequestInput>;
export declare function makeCreditNoteLineItemRequest(value: InputValue<CreditNoteLineItemRequestInput>): Model<CreditNoteLineItemRequestInput>;
export declare function makeCreditNoteRefundRequest(value: InputValue<CreditNoteRefundRequestInput>): Model<CreditNoteRefundRequestInput>;
export declare function makeCustomerAccountPresentationRequest(value: InputValue<CustomerAccountPresentationRequestInput>): Model<CustomerAccountPresentationRequestInput>;
export declare function makeCustomerAccountRouteTemplatesRequest(value: InputValue<CustomerAccountRouteTemplatesRequestInput>): Model<CustomerAccountRouteTemplatesRequestInput>;
export declare function makeCustomerAccountSettingsRequest(value: InputValue<CustomerAccountSettingsRequestInput>): Model<CustomerAccountSettingsRequestInput>;
export declare function makeCustomerEmailDeliverySettingsRequest(value: InputValue<CustomerEmailDeliverySettingsRequestInput>): Model<CustomerEmailDeliverySettingsRequestInput>;
export declare function makeDecideReturnInspectionLineItemRequest(value: InputValue<DecideReturnInspectionLineItemRequestInput>): Model<DecideReturnInspectionLineItemRequestInput>;
export declare function makeDecideReturnRequest(value: InputValue<DecideReturnRequestInput>): Model<DecideReturnRequestInput>;
export declare function makeDeclinePaymentReviewRequest(value: InputValue<DeclinePaymentReviewRequestInput>): Model<DeclinePaymentReviewRequestInput>;
export declare function makeDeliveryAddressRequest(value: InputValue<DeliveryAddressRequestInput>): Model<DeliveryAddressRequestInput>;
export declare function makeDeliveryAvailabilityRequest(value: InputValue<DeliveryAvailabilityRequestInput>): Model<DeliveryAvailabilityRequestInput>;
export declare function makeDeliveryBlackoutIntervalRequest(value: InputValue<DeliveryBlackoutIntervalRequestInput>): Model<DeliveryBlackoutIntervalRequestInput>;
export declare function makeDeliveryBusinessDayRangeRequest(value: InputValue<DeliveryBusinessDayRangeRequestInput>): Model<DeliveryBusinessDayRangeRequestInput>;
export declare function makeDeliveryBuyerLocationInputAddress(value: InputValue<DeliveryBuyerLocationInputAddressInput>): Model<DeliveryBuyerLocationInputAddressInput>;
export declare function makeDeliveryBuyerLocationInputCoordinate(value: InputValue<DeliveryBuyerLocationInputCoordinateInput>): Model<DeliveryBuyerLocationInputCoordinateInput>;
export declare function makeDeliveryBuyerLocationRequest(value: InputValue<DeliveryBuyerLocationRequestInput>): Model<DeliveryBuyerLocationRequestInput>;
export declare function makeDeliveryCalculatedPricingStrategyRequest(value: InputValue<DeliveryCalculatedPricingStrategyRequestInput>): Model<DeliveryCalculatedPricingStrategyRequestInput>;
export declare function makeDeliveryCallbackPricingStrategyRequest(value: InputValue<DeliveryCallbackPricingStrategyRequestInput>): Model<DeliveryCallbackPricingStrategyRequestInput>;
export declare function makeDeliveryCallerSuppliedPricingStrategyRequest(value: InputValue<DeliveryCallerSuppliedPricingStrategyRequestInput>): Model<DeliveryCallerSuppliedPricingStrategyRequestInput>;
export declare function makeDeliveryCoordinateRequest(value: InputValue<DeliveryCoordinateRequestInput>): Model<DeliveryCoordinateRequestInput>;
export declare function makeDeliveryCountryCondition(value: InputValue<DeliveryCountryConditionInput>): Model<DeliveryCountryConditionInput>;
export declare function makeDeliveryCustomerBooleanCondition(value: InputValue<DeliveryCustomerBooleanConditionInput>): Model<DeliveryCustomerBooleanConditionInput>;
export declare function makeDeliveryCustomerSegmentCondition(value: InputValue<DeliveryCustomerSegmentConditionInput>): Model<DeliveryCustomerSegmentConditionInput>;
export declare function makeDeliveryDistance(value: InputValue<DeliveryDistanceInput>): Model<DeliveryDistanceInput>;
export declare function makeDeliveryDistanceUnitPriceRequest(value: InputValue<DeliveryDistanceUnitPriceRequestInput>): Model<DeliveryDistanceUnitPriceRequestInput>;
export declare function makeDeliveryEligibilityExpression(value: InputValue<DeliveryEligibilityExpressionInput>): Model<DeliveryEligibilityExpressionInput>;
export declare function makeDeliveryEstimateRuleRequest(value: InputValue<DeliveryEstimateRuleRequestInput>): Model<DeliveryEstimateRuleRequestInput>;
export declare function makeDeliveryFixedPricingStrategyRequest(value: InputValue<DeliveryFixedPricingStrategyRequestInput>): Model<DeliveryFixedPricingStrategyRequestInput>;
export declare function makeDeliveryInventoryAssignmentRequest(value: InputValue<DeliveryInventoryAssignmentRequestInput>): Model<DeliveryInventoryAssignmentRequestInput>;
export declare function makeDeliveryLocationSetConfiguration(value: InputValue<DeliveryLocationSetConfigurationInput>): Model<DeliveryLocationSetConfigurationInput>;
export declare function makeDeliveryMethodConfigurationCreateRequest(value: InputValue<DeliveryMethodConfigurationCreateRequestInput>): Model<DeliveryMethodConfigurationCreateRequestInput>;
export declare function makeDeliveryMethodConfigurationPatchRequest(value: InputValue<DeliveryMethodConfigurationPatchRequestInput>): Model<DeliveryMethodConfigurationPatchRequestInput>;
export declare function makeDeliveryMethodConfigurationRequest(value: InputValue<DeliveryMethodConfigurationRequestInput>): Model<DeliveryMethodConfigurationRequestInput>;
export declare function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroup(value: InputValue<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput>): Model<DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput>;
export declare function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSet(value: InputValue<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput>): Model<DeliveryMethodOriginSelectorInputAllocatedOriginGroupDeliveryLocationSetInput>;
export declare function makeDeliveryMethodOriginSelectorInputAllocatedOriginGroupLocations(value: InputValue<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput>): Model<DeliveryMethodOriginSelectorInputAllocatedOriginGroupLocationsInput>;
export declare function makeDeliveryMethodOriginSelectorInputFixedLocation(value: InputValue<DeliveryMethodOriginSelectorInputFixedLocationInput>): Model<DeliveryMethodOriginSelectorInputFixedLocationInput>;
export declare function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value: InputValue<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput>): Model<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput>;
export declare function makeDeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSet(value: InputValue<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput>): Model<DeliveryMethodOriginSelectorInputPickupLocationCollectionDeliveryLocationSetInput>;
export declare function makeDeliveryMethodOriginSelectorInputPickupLocationCollectionLocations(value: InputValue<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput>): Model<DeliveryMethodOriginSelectorInputPickupLocationCollectionLocationsInput>;
export declare function makeDeliveryMethodOriginSelectorRequest(value: InputValue<DeliveryMethodOriginSelectorRequestInput>): Model<DeliveryMethodOriginSelectorRequestInput>;
export declare function makeDeliveryPickupAvailabilityMaximumDistanceRequest(value: InputValue<DeliveryPickupAvailabilityMaximumDistanceRequestInput>): Model<DeliveryPickupAvailabilityMaximumDistanceRequestInput>;
export declare function makeDeliveryPostalCodeCondition(value: InputValue<DeliveryPostalCodeConditionInput>): Model<DeliveryPostalCodeConditionInput>;
export declare function makeDeliveryPostalCodeValue(value: InputValue<DeliveryPostalCodeValueInput>): Model<DeliveryPostalCodeValueInput>;
