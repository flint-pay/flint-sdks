import type { InputValue, Model } from '../runtime.js';
import type {
    CreateWorkloadIdentityRequestInput,
    CreditNoteCorrectionRequestInput,
    CreditNoteCorrectionRequestAmountInput,
    CreditNoteCorrectionRequestQuantityInput,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteLineItemRequestInput
} from './types-9.js';
import type {
    CreditNoteRefundRequestInput,
    CustomerAccountPresentationInput,
    CustomerAccountRouteTemplatesInput,
    CustomerAccountSettingsInput,
    CustomerEmailDeliverySettingsInput
} from './types-10.js';
import type {
    DecideReturnInspectionLineItemRequestInput,
    DecideReturnRequestInput,
    DeclinePaymentReviewRequestInput,
    DeliveryAddressRequestInput,
    DeliveryAvailabilityInput,
    DeliveryBlackoutIntervalInput,
    DeliveryBusinessDayRangeInput,
    DeliveryBuyerLocationInputAddressInput,
    DeliveryBuyerLocationInputCoordinateInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryCalculatedPricingStrategyRequestInput,
    DeliveryCallbackPricingStrategyRequestInput,
    DeliveryCallerSuppliedPricingStrategyRequestInput,
    DeliveryCoordinateRequestInput,
    DeliveryCountryConditionInput,
    DeliveryCustomerBooleanConditionInput,
    DeliveryCustomerSegmentConditionInput,
    DeliveryDistanceInput,
    DeliveryDistanceUnitPriceRequestInput,
    DeliveryEligibilityExpressionInput,
    DeliveryEstimateRuleRequestInput,
    DeliveryFixedPricingStrategyRequestInput
} from './types-11.js';
import type {
    DeliveryInventoryAssignmentRequestInput,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationPatchRequestInput,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput,
    DeliveryMethodOriginSelectorInputFixedLocationInput,
    DeliveryMethodOriginSelectorInputPickupLocationCollectionInput,
    DeliveryMethodOriginSelectorRequestInput,
    DeliveryPickupAvailabilityMaximumDistanceRequestInput,
    DeliveryPostalCodeConditionInput,
    DeliveryPostalCodeValueInput,
    DeliveryPreviewRoutingSourceInput
} from './types-12.js';
import type {
    DeliveryPricingRateCreateRequestInput,
    DeliveryPricingRateRequestInput,
    DeliveryPricingStrategyCreateInputCalculatedInput,
    DeliveryPricingStrategyCreateInputCallbackInput,
    DeliveryPricingStrategyCreateInputCallerSuppliedInput,
    DeliveryPricingStrategyCreateInputFixedInput,
    DeliveryPricingStrategyCreateInputRateTableInput,
    DeliveryPricingStrategyCreateInputTieredInput,
    DeliveryPricingStrategyCreateRequestInput,
    DeliveryPricingStrategyInputCalculatedInput,
    DeliveryPricingStrategyInputCallbackInput,
    DeliveryPricingStrategyInputCallerSuppliedInput,
    DeliveryPricingStrategyInputFixedInput,
    DeliveryPricingStrategyInputRateTableInput,
    DeliveryPricingStrategyInputTieredInput,
    DeliveryPricingStrategyRequestInput,
    DeliveryPricingTierBandRequestInput,
    DeliveryProfileConfigurationRequestInput
} from './types-13.js';
export declare function makeCreateWorkloadIdentityRequest(value: InputValue<CreateWorkloadIdentityRequestInput>): Model<CreateWorkloadIdentityRequestInput>;
export declare function makeCreditNoteCorrectionRequest(value: InputValue<CreditNoteCorrectionRequestInput>): Model<CreditNoteCorrectionRequestInput>;
export declare function makeCreditNoteCorrectionRequestAmount(value: InputValue<CreditNoteCorrectionRequestAmountInput>): Model<CreditNoteCorrectionRequestAmountInput>;
export declare function makeCreditNoteCorrectionRequestQuantity(value: InputValue<CreditNoteCorrectionRequestQuantityInput>): Model<CreditNoteCorrectionRequestQuantityInput>;
export declare function makeCreditNoteIssueAllocationRequest(value: InputValue<CreditNoteIssueAllocationRequestInput>): Model<CreditNoteIssueAllocationRequestInput>;
export declare function makeCreditNoteLineItemRequest(value: InputValue<CreditNoteLineItemRequestInput>): Model<CreditNoteLineItemRequestInput>;
export declare function makeCreditNoteRefundRequest(value: InputValue<CreditNoteRefundRequestInput>): Model<CreditNoteRefundRequestInput>;
export declare function makeCustomerAccountPresentation(value: InputValue<CustomerAccountPresentationInput>): Model<CustomerAccountPresentationInput>;
export declare function makeCustomerAccountRouteTemplates(value: InputValue<CustomerAccountRouteTemplatesInput>): Model<CustomerAccountRouteTemplatesInput>;
export declare function makeCustomerAccountSettings(value: InputValue<CustomerAccountSettingsInput>): Model<CustomerAccountSettingsInput>;
export declare function makeCustomerEmailDeliverySettings(value: InputValue<CustomerEmailDeliverySettingsInput>): Model<CustomerEmailDeliverySettingsInput>;
export declare function makeDecideReturnInspectionLineItemRequest(value: InputValue<DecideReturnInspectionLineItemRequestInput>): Model<DecideReturnInspectionLineItemRequestInput>;
export declare function makeDecideReturnRequest(value: InputValue<DecideReturnRequestInput>): Model<DecideReturnRequestInput>;
export declare function makeDeclinePaymentReviewRequest(value: InputValue<DeclinePaymentReviewRequestInput>): Model<DeclinePaymentReviewRequestInput>;
export declare function makeDeliveryAddressRequest(value: InputValue<DeliveryAddressRequestInput>): Model<DeliveryAddressRequestInput>;
export declare function makeDeliveryAvailability(value: InputValue<DeliveryAvailabilityInput>): Model<DeliveryAvailabilityInput>;
export declare function makeDeliveryBlackoutInterval(value: InputValue<DeliveryBlackoutIntervalInput>): Model<DeliveryBlackoutIntervalInput>;
export declare function makeDeliveryBusinessDayRange(value: InputValue<DeliveryBusinessDayRangeInput>): Model<DeliveryBusinessDayRangeInput>;
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
export declare function makeDeliveryMethodOriginSelectorInputFixedLocation(value: InputValue<DeliveryMethodOriginSelectorInputFixedLocationInput>): Model<DeliveryMethodOriginSelectorInputFixedLocationInput>;
export declare function makeDeliveryMethodOriginSelectorInputPickupLocationCollection(value: InputValue<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput>): Model<DeliveryMethodOriginSelectorInputPickupLocationCollectionInput>;
export declare function makeDeliveryMethodOriginSelectorRequest(value: InputValue<DeliveryMethodOriginSelectorRequestInput>): Model<DeliveryMethodOriginSelectorRequestInput>;
export declare function makeDeliveryPickupAvailabilityMaximumDistanceRequest(value: InputValue<DeliveryPickupAvailabilityMaximumDistanceRequestInput>): Model<DeliveryPickupAvailabilityMaximumDistanceRequestInput>;
export declare function makeDeliveryPostalCodeCondition(value: InputValue<DeliveryPostalCodeConditionInput>): Model<DeliveryPostalCodeConditionInput>;
export declare function makeDeliveryPostalCodeValue(value: InputValue<DeliveryPostalCodeValueInput>): Model<DeliveryPostalCodeValueInput>;
export declare function makeDeliveryPreviewRoutingSource(value: InputValue<DeliveryPreviewRoutingSourceInput>): Model<DeliveryPreviewRoutingSourceInput>;
export declare function makeDeliveryPricingRateCreateRequest(value: InputValue<DeliveryPricingRateCreateRequestInput>): Model<DeliveryPricingRateCreateRequestInput>;
export declare function makeDeliveryPricingRateRequest(value: InputValue<DeliveryPricingRateRequestInput>): Model<DeliveryPricingRateRequestInput>;
export declare function makeDeliveryPricingStrategyCreateInputCalculated(value: InputValue<DeliveryPricingStrategyCreateInputCalculatedInput>): Model<DeliveryPricingStrategyCreateInputCalculatedInput>;
export declare function makeDeliveryPricingStrategyCreateInputCallback(value: InputValue<DeliveryPricingStrategyCreateInputCallbackInput>): Model<DeliveryPricingStrategyCreateInputCallbackInput>;
export declare function makeDeliveryPricingStrategyCreateInputCallerSupplied(value: InputValue<DeliveryPricingStrategyCreateInputCallerSuppliedInput>): Model<DeliveryPricingStrategyCreateInputCallerSuppliedInput>;
export declare function makeDeliveryPricingStrategyCreateInputFixed(value: InputValue<DeliveryPricingStrategyCreateInputFixedInput>): Model<DeliveryPricingStrategyCreateInputFixedInput>;
export declare function makeDeliveryPricingStrategyCreateInputRateTable(value: InputValue<DeliveryPricingStrategyCreateInputRateTableInput>): Model<DeliveryPricingStrategyCreateInputRateTableInput>;
export declare function makeDeliveryPricingStrategyCreateInputTiered(value: InputValue<DeliveryPricingStrategyCreateInputTieredInput>): Model<DeliveryPricingStrategyCreateInputTieredInput>;
export declare function makeDeliveryPricingStrategyCreateRequest(value: InputValue<DeliveryPricingStrategyCreateRequestInput>): Model<DeliveryPricingStrategyCreateRequestInput>;
export declare function makeDeliveryPricingStrategyInputCalculated(value: InputValue<DeliveryPricingStrategyInputCalculatedInput>): Model<DeliveryPricingStrategyInputCalculatedInput>;
export declare function makeDeliveryPricingStrategyInputCallback(value: InputValue<DeliveryPricingStrategyInputCallbackInput>): Model<DeliveryPricingStrategyInputCallbackInput>;
export declare function makeDeliveryPricingStrategyInputCallerSupplied(value: InputValue<DeliveryPricingStrategyInputCallerSuppliedInput>): Model<DeliveryPricingStrategyInputCallerSuppliedInput>;
export declare function makeDeliveryPricingStrategyInputFixed(value: InputValue<DeliveryPricingStrategyInputFixedInput>): Model<DeliveryPricingStrategyInputFixedInput>;
export declare function makeDeliveryPricingStrategyInputRateTable(value: InputValue<DeliveryPricingStrategyInputRateTableInput>): Model<DeliveryPricingStrategyInputRateTableInput>;
export declare function makeDeliveryPricingStrategyInputTiered(value: InputValue<DeliveryPricingStrategyInputTieredInput>): Model<DeliveryPricingStrategyInputTieredInput>;
export declare function makeDeliveryPricingStrategyRequest(value: InputValue<DeliveryPricingStrategyRequestInput>): Model<DeliveryPricingStrategyRequestInput>;
export declare function makeDeliveryPricingTierBandRequest(value: InputValue<DeliveryPricingTierBandRequestInput>): Model<DeliveryPricingTierBandRequestInput>;
export declare function makeDeliveryProfileConfigurationRequest(value: InputValue<DeliveryProfileConfigurationRequestInput>): Model<DeliveryProfileConfigurationRequestInput>;
