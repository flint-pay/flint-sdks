import type { InputValue, Model } from '../runtime.js';
import type {
    CreateReturnReceiptRequestInput,
    CreateReturnRequestInput,
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestCorrectionInput,
    CreateReturnResolutionPreviewRequestStandardInput
} from './types-12.js';
import type {
    CreateReturnResolutionRequestInput,
    CreateReturnResolutionRequestCorrectionInput,
    CreateReturnResolutionRequestStandardInput,
    CreateRiskListRequestInput,
    CreateRiskPreviewRequestInput,
    CreateRiskPreviewRequestInlineInput,
    CreateRiskPreviewRequestStoredRuleInput,
    CreateRiskRuleRequestInput,
    CreateSandboxRequestInput,
    CreateServiceFulfillmentDetailsInput,
    CreateShipmentRequestInput,
    CreateShipmentRequestOutboundInput,
    CreateShipmentRequestReturnInput,
    CreateSmartReaderRequestInput,
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
    CreateSubscriptionPreviewRequestPromotionApplyInput,
    CreateSubscriptionPreviewRequestQuantityChangeInput,
    CreateSubscriptionRequestInput,
    CreateTapToPayReaderRequestInput
} from './types-13.js';
import type {
    CreateTaxCalculationCallbackRequestInput,
    CreateTaxRegistrationRequestInput,
    CreateTestClockRequestInput,
    CreateWebhookDeliveryRequestInput,
    CreateWebhookEndpointRequestInput,
    CreateWebhookTestEventRequestInput,
    CreateWorkloadIdentityRequestInput,
    CreditNoteCorrectionRequestAmountRequestInput,
    CreditNoteCorrectionRequestModelInput,
    CreditNoteCorrectionRequestQuantityRequestInput,
    CreditNoteIssueAllocationRequestInput,
    CreditNoteLineItemRequestInput,
    CreditNoteRefundRequestInput
} from './types-14.js';
import type {
    CustomerAccountPresentationRequestInput,
    CustomerAccountRouteTemplatesRequestInput,
    CustomerAccountSettingsRequestInput,
    CustomerEmailDeliverySettingsRequestInput
} from './types-15.js';
import type {
    CustomerTaxExemptionCoverageAllStatesRequestInput,
    CustomerTaxExemptionCoverageRequestInput,
    CustomerTaxExemptionCoverageStatesRequestInput,
    DecideReturnInspectionLineItemRequestInput,
    DecideReturnRequestInput,
    DeclinePaymentReviewRequestInput,
    DeliveryAddressRequestInput,
    DeliveryAvailabilityRequestInput,
    DeliveryBlackoutIntervalRequestInput,
    DeliveryBusinessDayRangeRequestInput,
    DeliveryBuyerLocationInputAddressInput
} from './types-16.js';
export declare function makeCreateReturnReceiptRequest(value: InputValue<CreateReturnReceiptRequestInput>): Model<CreateReturnReceiptRequestInput>;
export declare function makeCreateReturnRequest(value: InputValue<CreateReturnRequestInput>): Model<CreateReturnRequestInput>;
export declare function makeCreateReturnResolutionPreviewRequest(value: InputValue<CreateReturnResolutionPreviewRequestInput>): Model<CreateReturnResolutionPreviewRequestInput>;
export declare function makeCreateReturnResolutionPreviewRequestCorrection(value: InputValue<CreateReturnResolutionPreviewRequestCorrectionInput>): Model<CreateReturnResolutionPreviewRequestCorrectionInput>;
export declare function makeCreateReturnResolutionPreviewRequestStandard(value: InputValue<CreateReturnResolutionPreviewRequestStandardInput>): Model<CreateReturnResolutionPreviewRequestStandardInput>;
export declare function makeCreateReturnResolutionRequest(value: InputValue<CreateReturnResolutionRequestInput>): Model<CreateReturnResolutionRequestInput>;
export declare function makeCreateReturnResolutionRequestCorrection(value: InputValue<CreateReturnResolutionRequestCorrectionInput>): Model<CreateReturnResolutionRequestCorrectionInput>;
export declare function makeCreateReturnResolutionRequestStandard(value: InputValue<CreateReturnResolutionRequestStandardInput>): Model<CreateReturnResolutionRequestStandardInput>;
export declare function makeCreateRiskListRequest(value: InputValue<CreateRiskListRequestInput>): Model<CreateRiskListRequestInput>;
export declare function makeCreateRiskPreviewRequest(value: InputValue<CreateRiskPreviewRequestInput>): Model<CreateRiskPreviewRequestInput>;
export declare function makeCreateRiskPreviewRequestInline(value: InputValue<CreateRiskPreviewRequestInlineInput>): Model<CreateRiskPreviewRequestInlineInput>;
export declare function makeCreateRiskPreviewRequestStoredRule(value: InputValue<CreateRiskPreviewRequestStoredRuleInput>): Model<CreateRiskPreviewRequestStoredRuleInput>;
export declare function makeCreateRiskRuleRequest(value: InputValue<CreateRiskRuleRequestInput>): Model<CreateRiskRuleRequestInput>;
export declare function makeCreateSandboxRequest(value: InputValue<CreateSandboxRequestInput>): Model<CreateSandboxRequestInput>;
export declare function makeCreateServiceFulfillmentDetails(value: InputValue<CreateServiceFulfillmentDetailsInput>): Model<CreateServiceFulfillmentDetailsInput>;
export declare function makeCreateShipmentRequest(value: InputValue<CreateShipmentRequestInput>): Model<CreateShipmentRequestInput>;
export declare function makeCreateShipmentRequestOutbound(value: InputValue<CreateShipmentRequestOutboundInput>): Model<CreateShipmentRequestOutboundInput>;
export declare function makeCreateShipmentRequestReturn(value: InputValue<CreateShipmentRequestReturnInput>): Model<CreateShipmentRequestReturnInput>;
export declare function makeCreateSmartReaderRequest(value: InputValue<CreateSmartReaderRequestInput>): Model<CreateSmartReaderRequestInput>;
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
export declare function makeCreateSubscriptionPreviewRequestPromotionApply(value: InputValue<CreateSubscriptionPreviewRequestPromotionApplyInput>): Model<CreateSubscriptionPreviewRequestPromotionApplyInput>;
export declare function makeCreateSubscriptionPreviewRequestQuantityChange(value: InputValue<CreateSubscriptionPreviewRequestQuantityChangeInput>): Model<CreateSubscriptionPreviewRequestQuantityChangeInput>;
export declare function makeCreateSubscriptionRequest(value: InputValue<CreateSubscriptionRequestInput>): Model<CreateSubscriptionRequestInput>;
export declare function makeCreateTapToPayReaderRequest(value: InputValue<CreateTapToPayReaderRequestInput>): Model<CreateTapToPayReaderRequestInput>;
export declare function makeCreateTaxCalculationCallbackRequest(value: InputValue<CreateTaxCalculationCallbackRequestInput>): Model<CreateTaxCalculationCallbackRequestInput>;
export declare function makeCreateTaxRegistrationRequest(value: InputValue<CreateTaxRegistrationRequestInput>): Model<CreateTaxRegistrationRequestInput>;
export declare function makeCreateTestClockRequest(value: InputValue<CreateTestClockRequestInput>): Model<CreateTestClockRequestInput>;
export declare function makeCreateWebhookDeliveryRequest(value: InputValue<CreateWebhookDeliveryRequestInput>): Model<CreateWebhookDeliveryRequestInput>;
export declare function makeCreateWebhookEndpointRequest(value: InputValue<CreateWebhookEndpointRequestInput>): Model<CreateWebhookEndpointRequestInput>;
export declare function makeCreateWebhookTestEventRequest(value: InputValue<CreateWebhookTestEventRequestInput>): Model<CreateWebhookTestEventRequestInput>;
export declare function makeCreateWorkloadIdentityRequest(value: InputValue<CreateWorkloadIdentityRequestInput>): Model<CreateWorkloadIdentityRequestInput>;
export declare function makeCreditNoteCorrectionRequestAmountRequest(value: InputValue<CreditNoteCorrectionRequestAmountRequestInput>): Model<CreditNoteCorrectionRequestAmountRequestInput>;
export declare function makeCreditNoteCorrectionRequestModel(value: InputValue<CreditNoteCorrectionRequestModelInput>): Model<CreditNoteCorrectionRequestModelInput>;
export declare function makeCreditNoteCorrectionRequestQuantityRequest(value: InputValue<CreditNoteCorrectionRequestQuantityRequestInput>): Model<CreditNoteCorrectionRequestQuantityRequestInput>;
export declare function makeCreditNoteIssueAllocationRequest(value: InputValue<CreditNoteIssueAllocationRequestInput>): Model<CreditNoteIssueAllocationRequestInput>;
export declare function makeCreditNoteLineItemRequest(value: InputValue<CreditNoteLineItemRequestInput>): Model<CreditNoteLineItemRequestInput>;
export declare function makeCreditNoteRefundRequest(value: InputValue<CreditNoteRefundRequestInput>): Model<CreditNoteRefundRequestInput>;
export declare function makeCustomerAccountPresentationRequest(value: InputValue<CustomerAccountPresentationRequestInput>): Model<CustomerAccountPresentationRequestInput>;
export declare function makeCustomerAccountRouteTemplatesRequest(value: InputValue<CustomerAccountRouteTemplatesRequestInput>): Model<CustomerAccountRouteTemplatesRequestInput>;
export declare function makeCustomerAccountSettingsRequest(value: InputValue<CustomerAccountSettingsRequestInput>): Model<CustomerAccountSettingsRequestInput>;
export declare function makeCustomerEmailDeliverySettingsRequest(value: InputValue<CustomerEmailDeliverySettingsRequestInput>): Model<CustomerEmailDeliverySettingsRequestInput>;
export declare function makeCustomerTaxExemptionCoverageAllStatesRequest(value: InputValue<CustomerTaxExemptionCoverageAllStatesRequestInput>): Model<CustomerTaxExemptionCoverageAllStatesRequestInput>;
export declare function makeCustomerTaxExemptionCoverageRequest(value: InputValue<CustomerTaxExemptionCoverageRequestInput>): Model<CustomerTaxExemptionCoverageRequestInput>;
export declare function makeCustomerTaxExemptionCoverageStatesRequest(value: InputValue<CustomerTaxExemptionCoverageStatesRequestInput>): Model<CustomerTaxExemptionCoverageStatesRequestInput>;
export declare function makeDecideReturnInspectionLineItemRequest(value: InputValue<DecideReturnInspectionLineItemRequestInput>): Model<DecideReturnInspectionLineItemRequestInput>;
export declare function makeDecideReturnRequest(value: InputValue<DecideReturnRequestInput>): Model<DecideReturnRequestInput>;
export declare function makeDeclinePaymentReviewRequest(value: InputValue<DeclinePaymentReviewRequestInput>): Model<DeclinePaymentReviewRequestInput>;
export declare function makeDeliveryAddressRequest(value: InputValue<DeliveryAddressRequestInput>): Model<DeliveryAddressRequestInput>;
export declare function makeDeliveryAvailabilityRequest(value: InputValue<DeliveryAvailabilityRequestInput>): Model<DeliveryAvailabilityRequestInput>;
export declare function makeDeliveryBlackoutIntervalRequest(value: InputValue<DeliveryBlackoutIntervalRequestInput>): Model<DeliveryBlackoutIntervalRequestInput>;
export declare function makeDeliveryBusinessDayRangeRequest(value: InputValue<DeliveryBusinessDayRangeRequestInput>): Model<DeliveryBusinessDayRangeRequestInput>;
export declare function makeDeliveryBuyerLocationInputAddress(value: InputValue<DeliveryBuyerLocationInputAddressInput>): Model<DeliveryBuyerLocationInputAddressInput>;
