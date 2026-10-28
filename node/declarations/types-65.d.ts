import type { InputValue, Model } from '../runtime.js';
import type { CreateReturnResolutionPreviewRequestStandardInput } from './types-8.js';
import type {
    CreateReturnResolutionRequestInput,
    CreateReturnResolutionRequestCorrectionInput,
    CreateReturnResolutionRequestStandardInput,
    CreateRiskListRequestInput,
    CreateRiskPreviewRequestInput,
    CreateRiskRuleRequestInput,
    CreateSandboxRequestInput,
    CreateServiceFulfillmentDetailsInput,
    CreateShipmentRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionDeliveryMigrationRequestInput,
    CreateSubscriptionLineItemRequestInput,
    CreateSubscriptionLineItemRequestBundleInput,
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
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput,
    CreateWorkloadIdentityRequestInput,
    CreditNoteCorrectionRequestInput,
    CreditNoteCorrectionRequestAmountInput
} from './types-9.js';
import type {
    CreditNoteCorrectionRequestQuantityInput,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteLineItemRequestInput,
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
    DeliveryEligibilityExpressionInput
} from './types-11.js';
import type {
    DeliveryEstimateRuleRequestInput,
    DeliveryFixedPricingStrategyRequestInput,
    DeliveryInventoryAssignmentRequestInput,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationPatchRequestInput
} from './types-12.js';
export declare function makeCreateReturnResolutionPreviewRequestStandard(value: InputValue<CreateReturnResolutionPreviewRequestStandardInput>): Model<CreateReturnResolutionPreviewRequestStandardInput>;
export declare function makeCreateReturnResolutionRequest(value: InputValue<CreateReturnResolutionRequestInput>): Model<CreateReturnResolutionRequestInput>;
export declare function makeCreateReturnResolutionRequestCorrection(value: InputValue<CreateReturnResolutionRequestCorrectionInput>): Model<CreateReturnResolutionRequestCorrectionInput>;
export declare function makeCreateReturnResolutionRequestStandard(value: InputValue<CreateReturnResolutionRequestStandardInput>): Model<CreateReturnResolutionRequestStandardInput>;
export declare function makeCreateRiskListRequest(value: InputValue<CreateRiskListRequestInput>): Model<CreateRiskListRequestInput>;
export declare function makeCreateRiskPreviewRequest(value: InputValue<CreateRiskPreviewRequestInput>): Model<CreateRiskPreviewRequestInput>;
export declare function makeCreateRiskRuleRequest(value: InputValue<CreateRiskRuleRequestInput>): Model<CreateRiskRuleRequestInput>;
export declare function makeCreateSandboxRequest(value: InputValue<CreateSandboxRequestInput>): Model<CreateSandboxRequestInput>;
export declare function makeCreateServiceFulfillmentDetails(value: InputValue<CreateServiceFulfillmentDetailsInput>): Model<CreateServiceFulfillmentDetailsInput>;
export declare function makeCreateShipmentRequest(value: InputValue<CreateShipmentRequestInput>): Model<CreateShipmentRequestInput>;
export declare function makeCreateSubscriptionAccessLinkRequest(value: InputValue<CreateSubscriptionAccessLinkRequestInput>): Model<CreateSubscriptionAccessLinkRequestInput>;
export declare function makeCreateSubscriptionDeliveryMigrationRequest(value: InputValue<CreateSubscriptionDeliveryMigrationRequestInput>): Model<CreateSubscriptionDeliveryMigrationRequestInput>;
export declare function makeCreateSubscriptionLineItemRequest(value: InputValue<CreateSubscriptionLineItemRequestInput>): Model<CreateSubscriptionLineItemRequestInput>;
export declare function makeCreateSubscriptionLineItemRequestBundle(value: InputValue<CreateSubscriptionLineItemRequestBundleInput>): Model<CreateSubscriptionLineItemRequestBundleInput>;
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
