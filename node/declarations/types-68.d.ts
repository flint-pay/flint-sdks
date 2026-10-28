import type { InputValue, Model } from '../runtime.js';
import type {
    CreateOrderLineItemInputBundleInput,
    CreateOrderLineItemInputCustomInput,
    CreateOrderLineItemInputVariantInput,
    CreateOrderLineItemRequestInput,
    CreateOrderPaymentIntentRequestInput,
    CreateOrderRequestInput,
    CreateOrderTipInput,
    CreateOrderTipAmountInput,
    CreateOrderTipPercentInput,
    CreateOrganizationRequestInput,
    CreatePackageItemRequestInput,
    CreatePartnerAppCredentialJWKSURLRequestInput,
    CreatePartnerAppCredentialPublicKeyRequestInput,
    CreatePartnerAppCredentialRequestInput,
    CreatePartnerAppCredentialWorkloadIdentityRequestInput,
    CreatePartnerAppRequestInput,
    CreatePaymentIntentRequestInput,
    CreatePaymentLinkRequestInput
} from './types-8.js';
import type {
    CreatePaymentMethodDomainRequestInput,
    CreatePayoutRequestInput,
    CreatePickupFulfillmentDetailsInput,
    CreateProductOptionRequestInput,
    CreateProductOptionValueRequestInput,
    CreateProductRequestInput,
    CreateProductRequestOptionedInput,
    CreateProductRequestSimpleInput,
    CreatePromotionCodeRequestInput,
    CreatePromotionRequestInput,
    CreateRefundRequestInput,
    CreateRefundRequestAmountInput,
    CreateRefundRequestFullInput,
    CreateRefundRequestTargetsInput,
    CreateReportRequestInput,
    CreateReturnDispositionRequestInput,
    CreateReturnDispositionRequestInspectionLineInput,
    CreateReturnDispositionRequestReceiptLineInput,
    CreateReturnEligibilityPreviewRequestInput,
    CreateReturnInspectionRequestInput,
    CreateReturnPolicyRequestInput,
    CreateReturnPreviewRequestInput,
    CreateReturnPreviewRequestEligibilityInput,
    CreateReturnPreviewRequestResolutionInput,
    CreateReturnReasonRequestInput,
    CreateReturnReceiptRequestInput,
    CreateReturnRequestInput,
    CreateReturnResolutionPreviewRequestInput,
    CreateReturnResolutionPreviewRequestCorrectionInput
} from './types-9.js';
import type {
    CreateReturnResolutionPreviewRequestStandardInput,
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
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionDeliveryMigrationRequestInput,
    CreateSubscriptionLineItemRequestInput
} from './types-10.js';
export declare function makeCreateOrderLineItemInputBundle(value: InputValue<CreateOrderLineItemInputBundleInput>): Model<CreateOrderLineItemInputBundleInput>;
export declare function makeCreateOrderLineItemInputCustom(value: InputValue<CreateOrderLineItemInputCustomInput>): Model<CreateOrderLineItemInputCustomInput>;
export declare function makeCreateOrderLineItemInputVariant(value: InputValue<CreateOrderLineItemInputVariantInput>): Model<CreateOrderLineItemInputVariantInput>;
export declare function makeCreateOrderLineItemRequest(value: InputValue<CreateOrderLineItemRequestInput>): Model<CreateOrderLineItemRequestInput>;
export declare function makeCreateOrderPaymentIntentRequest(value: InputValue<CreateOrderPaymentIntentRequestInput>): Model<CreateOrderPaymentIntentRequestInput>;
export declare function makeCreateOrderRequest(value: InputValue<CreateOrderRequestInput>): Model<CreateOrderRequestInput>;
export declare function makeCreateOrderTip(value: InputValue<CreateOrderTipInput>): Model<CreateOrderTipInput>;
export declare function makeCreateOrderTipAmount(value: InputValue<CreateOrderTipAmountInput>): Model<CreateOrderTipAmountInput>;
export declare function makeCreateOrderTipPercent(value: InputValue<CreateOrderTipPercentInput>): Model<CreateOrderTipPercentInput>;
export declare function makeCreateOrganizationRequest(value: InputValue<CreateOrganizationRequestInput>): Model<CreateOrganizationRequestInput>;
export declare function makeCreatePackageItemRequest(value: InputValue<CreatePackageItemRequestInput>): Model<CreatePackageItemRequestInput>;
export declare function makeCreatePartnerAppCredentialJWKSURLRequest(value: InputValue<CreatePartnerAppCredentialJWKSURLRequestInput>): Model<CreatePartnerAppCredentialJWKSURLRequestInput>;
export declare function makeCreatePartnerAppCredentialPublicKeyRequest(value: InputValue<CreatePartnerAppCredentialPublicKeyRequestInput>): Model<CreatePartnerAppCredentialPublicKeyRequestInput>;
export declare function makeCreatePartnerAppCredentialRequest(value: InputValue<Exclude<CreatePartnerAppCredentialRequestInput & object, readonly unknown[]>>): Model<Exclude<CreatePartnerAppCredentialRequestInput & object, readonly unknown[]>>;
export declare function makeCreatePartnerAppCredentialRequest(value: InputValue<CreatePartnerAppCredentialRequestInput>): Model<CreatePartnerAppCredentialRequestInput>;
export declare function makeCreatePartnerAppCredentialWorkloadIdentityRequest(value: InputValue<CreatePartnerAppCredentialWorkloadIdentityRequestInput>): Model<CreatePartnerAppCredentialWorkloadIdentityRequestInput>;
export declare function makeCreatePartnerAppRequest(value: InputValue<CreatePartnerAppRequestInput>): Model<CreatePartnerAppRequestInput>;
export declare function makeCreatePaymentIntentRequest(value: InputValue<CreatePaymentIntentRequestInput>): Model<CreatePaymentIntentRequestInput>;
export declare function makeCreatePaymentLinkRequest(value: InputValue<CreatePaymentLinkRequestInput>): Model<CreatePaymentLinkRequestInput>;
export declare function makeCreatePaymentMethodDomainRequest(value: InputValue<CreatePaymentMethodDomainRequestInput>): Model<CreatePaymentMethodDomainRequestInput>;
export declare function makeCreatePayoutRequest(value: InputValue<CreatePayoutRequestInput>): Model<CreatePayoutRequestInput>;
export declare function makeCreatePickupFulfillmentDetails(value: InputValue<CreatePickupFulfillmentDetailsInput>): Model<CreatePickupFulfillmentDetailsInput>;
export declare function makeCreateProductOptionRequest(value: InputValue<CreateProductOptionRequestInput>): Model<CreateProductOptionRequestInput>;
export declare function makeCreateProductOptionValueRequest(value: InputValue<CreateProductOptionValueRequestInput>): Model<CreateProductOptionValueRequestInput>;
export declare function makeCreateProductRequest(value: InputValue<CreateProductRequestInput>): Model<CreateProductRequestInput>;
export declare function makeCreateProductRequestOptioned(value: InputValue<CreateProductRequestOptionedInput>): Model<CreateProductRequestOptionedInput>;
export declare function makeCreateProductRequestSimple(value: InputValue<CreateProductRequestSimpleInput>): Model<CreateProductRequestSimpleInput>;
export declare function makeCreatePromotionCodeRequest(value: InputValue<CreatePromotionCodeRequestInput>): Model<CreatePromotionCodeRequestInput>;
export declare function makeCreatePromotionRequest(value: InputValue<CreatePromotionRequestInput>): Model<CreatePromotionRequestInput>;
export declare function makeCreateRefundRequest(value: InputValue<CreateRefundRequestInput>): Model<CreateRefundRequestInput>;
export declare function makeCreateRefundRequestAmount(value: InputValue<CreateRefundRequestAmountInput>): Model<CreateRefundRequestAmountInput>;
export declare function makeCreateRefundRequestFull(value: InputValue<CreateRefundRequestFullInput>): Model<CreateRefundRequestFullInput>;
export declare function makeCreateRefundRequestTargets(value: InputValue<CreateRefundRequestTargetsInput>): Model<CreateRefundRequestTargetsInput>;
export declare function makeCreateReportRequest(value: InputValue<CreateReportRequestInput>): Model<CreateReportRequestInput>;
export declare function makeCreateReturnDispositionRequest(value: InputValue<CreateReturnDispositionRequestInput>): Model<CreateReturnDispositionRequestInput>;
export declare function makeCreateReturnDispositionRequestInspectionLine(value: InputValue<CreateReturnDispositionRequestInspectionLineInput>): Model<CreateReturnDispositionRequestInspectionLineInput>;
export declare function makeCreateReturnDispositionRequestReceiptLine(value: InputValue<CreateReturnDispositionRequestReceiptLineInput>): Model<CreateReturnDispositionRequestReceiptLineInput>;
export declare function makeCreateReturnEligibilityPreviewRequest(value: InputValue<CreateReturnEligibilityPreviewRequestInput>): Model<CreateReturnEligibilityPreviewRequestInput>;
export declare function makeCreateReturnInspectionRequest(value: InputValue<CreateReturnInspectionRequestInput>): Model<CreateReturnInspectionRequestInput>;
export declare function makeCreateReturnPolicyRequest(value: InputValue<CreateReturnPolicyRequestInput>): Model<CreateReturnPolicyRequestInput>;
export declare function makeCreateReturnPreviewRequest(value: InputValue<CreateReturnPreviewRequestInput>): Model<CreateReturnPreviewRequestInput>;
export declare function makeCreateReturnPreviewRequestEligibility(value: InputValue<CreateReturnPreviewRequestEligibilityInput>): Model<CreateReturnPreviewRequestEligibilityInput>;
export declare function makeCreateReturnPreviewRequestResolution(value: InputValue<CreateReturnPreviewRequestResolutionInput>): Model<CreateReturnPreviewRequestResolutionInput>;
export declare function makeCreateReturnReasonRequest(value: InputValue<CreateReturnReasonRequestInput>): Model<CreateReturnReasonRequestInput>;
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
export declare function makeCreateSubscriptionAccessLinkRequest(value: InputValue<CreateSubscriptionAccessLinkRequestInput>): Model<CreateSubscriptionAccessLinkRequestInput>;
export declare function makeCreateSubscriptionDeliveryMigrationRequest(value: InputValue<CreateSubscriptionDeliveryMigrationRequestInput>): Model<CreateSubscriptionDeliveryMigrationRequestInput>;
export declare function makeCreateSubscriptionLineItemRequest(value: InputValue<CreateSubscriptionLineItemRequestInput>): Model<CreateSubscriptionLineItemRequestInput>;
