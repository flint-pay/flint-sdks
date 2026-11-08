import type {
    InputValue,
    Model,
    WebhookHeaders as _SdkWebhookHeaders,
    CredentialProvider,
    WorkloadIdentityOptions
} from '../runtime.js';
import type {
    UpdatePackageRequestInput,
    UpdatePartnerAppRequestInput,
    UpdatePaymentIntentRequestInput,
    UpdatePaymentLinkRequestInput,
    UpdatePaymentMethodDomainRequestInput,
    UpdatePayoutDestinationRequestInput,
    UpdatePayoutSettingsRequestInput,
    UpdatePickupFulfillmentDetailsInput,
    UpdatePriceListPriceRequestInput,
    UpdatePriceListRequestInput,
    UpdateProductOptionRequestInput,
    UpdateProductOptionValueRequestInput,
    UpdateProductRequestInput,
    UpdateProductVariantRequestInput,
    UpdatePromotionCodeRequestInput,
    UpdatePromotionRequestInput,
    UpdateRefundRequestInput,
    UpdateReturnLineItemRequestInput,
    UpdateReturnPolicyRequestInput,
    UpdateReturnReasonRequestInput,
    UpdateReturnReplacementLineItemInputBundleInput,
    UpdateReturnReplacementLineItemInputCustomInput,
    UpdateReturnReplacementLineItemInputVariantInput,
    UpdateReturnReplacementLineItemRequestInput,
    UpdateReturnRequestInput
} from './types-64.js';
import type {
    UpdateReturnResolutionAdjustmentRequestInput,
    UpdateReturnResolutionLineItemRequestInput,
    UpdateReturnResolutionRequestInput,
    UpdateRiskListRequestInput,
    UpdateRiskRuleRequestInput,
    UpdateServiceFulfillmentDetailsInput,
    UpdateSettingsRequestInput,
    UpdateShipmentRequestInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionOfferRequestInput,
    UpdateSubscriptionPlanLineItemInputBundleInput,
    UpdateSubscriptionPlanLineItemInputCustomInput,
    UpdateSubscriptionPlanLineItemInputVariantInput,
    UpdateSubscriptionPlanLineItemRequestInput,
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionRequestInput,
    UpdateTaxCalculationCallbackRequestInput,
    UpdateTaxRegistrationRequestInput,
    UpdateTicketRequestInput,
    UpdateWebhookEndpointRequestInput,
    UpdateWorkloadIdentityRequestInput,
    VerifyReturnReceiptLineItemRequestInput,
    VoidPackageRequestInput,
    VoidShipmentRequestInput,
    WaiveInvoiceLateFeeRequestInput,
    WaiveReturnLineInspectionRequestInput,
    VerifiedWebhook
} from './types-65.js';
import type {
    WebhookSigningMethodInput,
    WeightRequestInput,
    WorkloadIdentityClaimConditionRequestInput,
    WebhookVerificationOptions
} from './types-66.js';
export declare function makeUpdatePackageRequest(value: InputValue<UpdatePackageRequestInput>): Model<UpdatePackageRequestInput>;
export declare function makeUpdatePartnerAppRequest(value: InputValue<UpdatePartnerAppRequestInput>): Model<UpdatePartnerAppRequestInput>;
export declare function makeUpdatePaymentIntentRequest(value: InputValue<UpdatePaymentIntentRequestInput>): Model<UpdatePaymentIntentRequestInput>;
export declare function makeUpdatePaymentLinkRequest(value: InputValue<UpdatePaymentLinkRequestInput>): Model<UpdatePaymentLinkRequestInput>;
export declare function makeUpdatePaymentMethodDomainRequest(value: InputValue<UpdatePaymentMethodDomainRequestInput>): Model<UpdatePaymentMethodDomainRequestInput>;
export declare function makeUpdatePayoutDestinationRequest(value: InputValue<UpdatePayoutDestinationRequestInput>): Model<UpdatePayoutDestinationRequestInput>;
export declare function makeUpdatePayoutSettingsRequest(value: InputValue<UpdatePayoutSettingsRequestInput>): Model<UpdatePayoutSettingsRequestInput>;
export declare function makeUpdatePickupFulfillmentDetails(value: InputValue<UpdatePickupFulfillmentDetailsInput>): Model<UpdatePickupFulfillmentDetailsInput>;
export declare function makeUpdatePriceListPriceRequest(value: InputValue<UpdatePriceListPriceRequestInput>): Model<UpdatePriceListPriceRequestInput>;
export declare function makeUpdatePriceListRequest(value: InputValue<UpdatePriceListRequestInput>): Model<UpdatePriceListRequestInput>;
export declare function makeUpdateProductOptionRequest(value: InputValue<UpdateProductOptionRequestInput>): Model<UpdateProductOptionRequestInput>;
export declare function makeUpdateProductOptionValueRequest(value: InputValue<UpdateProductOptionValueRequestInput>): Model<UpdateProductOptionValueRequestInput>;
export declare function makeUpdateProductRequest(value: InputValue<UpdateProductRequestInput>): Model<UpdateProductRequestInput>;
export declare function makeUpdateProductVariantRequest(value: InputValue<UpdateProductVariantRequestInput>): Model<UpdateProductVariantRequestInput>;
export declare function makeUpdatePromotionCodeRequest(value: InputValue<UpdatePromotionCodeRequestInput>): Model<UpdatePromotionCodeRequestInput>;
export declare function makeUpdatePromotionRequest(value: InputValue<UpdatePromotionRequestInput>): Model<UpdatePromotionRequestInput>;
export declare function makeUpdateRefundRequest(value: InputValue<UpdateRefundRequestInput>): Model<UpdateRefundRequestInput>;
export declare function makeUpdateReturnLineItemRequest(value: InputValue<UpdateReturnLineItemRequestInput>): Model<UpdateReturnLineItemRequestInput>;
export declare function makeUpdateReturnPolicyRequest(value: InputValue<UpdateReturnPolicyRequestInput>): Model<UpdateReturnPolicyRequestInput>;
export declare function makeUpdateReturnReasonRequest(value: InputValue<UpdateReturnReasonRequestInput>): Model<UpdateReturnReasonRequestInput>;
export declare function makeUpdateReturnReplacementLineItemInputBundle(value: InputValue<UpdateReturnReplacementLineItemInputBundleInput>): Model<UpdateReturnReplacementLineItemInputBundleInput>;
export declare function makeUpdateReturnReplacementLineItemInputCustom(value: InputValue<UpdateReturnReplacementLineItemInputCustomInput>): Model<UpdateReturnReplacementLineItemInputCustomInput>;
export declare function makeUpdateReturnReplacementLineItemInputVariant(value: InputValue<UpdateReturnReplacementLineItemInputVariantInput>): Model<UpdateReturnReplacementLineItemInputVariantInput>;
export declare function makeUpdateReturnReplacementLineItemRequest(value: InputValue<UpdateReturnReplacementLineItemRequestInput>): Model<UpdateReturnReplacementLineItemRequestInput>;
export declare function makeUpdateReturnRequest(value: InputValue<UpdateReturnRequestInput>): Model<UpdateReturnRequestInput>;
export declare function makeUpdateReturnResolutionAdjustmentRequest(value: InputValue<UpdateReturnResolutionAdjustmentRequestInput>): Model<UpdateReturnResolutionAdjustmentRequestInput>;
export declare function makeUpdateReturnResolutionLineItemRequest(value: InputValue<UpdateReturnResolutionLineItemRequestInput>): Model<UpdateReturnResolutionLineItemRequestInput>;
export declare function makeUpdateReturnResolutionRequest(value: InputValue<UpdateReturnResolutionRequestInput>): Model<UpdateReturnResolutionRequestInput>;
export declare function makeUpdateRiskListRequest(value: InputValue<UpdateRiskListRequestInput>): Model<UpdateRiskListRequestInput>;
export declare function makeUpdateRiskRuleRequest(value: InputValue<UpdateRiskRuleRequestInput>): Model<UpdateRiskRuleRequestInput>;
export declare function makeUpdateServiceFulfillmentDetails(value: InputValue<UpdateServiceFulfillmentDetailsInput>): Model<UpdateServiceFulfillmentDetailsInput>;
export declare function makeUpdateSettingsRequest(value: InputValue<UpdateSettingsRequestInput>): Model<UpdateSettingsRequestInput>;
export declare function makeUpdateShipmentRequest(value: InputValue<UpdateShipmentRequestInput>): Model<UpdateShipmentRequestInput>;
export declare function makeUpdateSubscriptionLineItemRequest(value: InputValue<UpdateSubscriptionLineItemRequestInput>): Model<UpdateSubscriptionLineItemRequestInput>;
export declare function makeUpdateSubscriptionOfferRequest(value: InputValue<UpdateSubscriptionOfferRequestInput>): Model<UpdateSubscriptionOfferRequestInput>;
export declare function makeUpdateSubscriptionPlanLineItemInputBundle(value: InputValue<UpdateSubscriptionPlanLineItemInputBundleInput>): Model<UpdateSubscriptionPlanLineItemInputBundleInput>;
export declare function makeUpdateSubscriptionPlanLineItemInputCustom(value: InputValue<UpdateSubscriptionPlanLineItemInputCustomInput>): Model<UpdateSubscriptionPlanLineItemInputCustomInput>;
export declare function makeUpdateSubscriptionPlanLineItemInputVariant(value: InputValue<UpdateSubscriptionPlanLineItemInputVariantInput>): Model<UpdateSubscriptionPlanLineItemInputVariantInput>;
export declare function makeUpdateSubscriptionPlanLineItemRequest(value: InputValue<UpdateSubscriptionPlanLineItemRequestInput>): Model<UpdateSubscriptionPlanLineItemRequestInput>;
export declare function makeUpdateSubscriptionPlanRequest(value: InputValue<UpdateSubscriptionPlanRequestInput>): Model<UpdateSubscriptionPlanRequestInput>;
export declare function makeUpdateSubscriptionRequest(value: InputValue<UpdateSubscriptionRequestInput>): Model<UpdateSubscriptionRequestInput>;
export declare function makeUpdateTaxCalculationCallbackRequest(value: InputValue<UpdateTaxCalculationCallbackRequestInput>): Model<UpdateTaxCalculationCallbackRequestInput>;
export declare function makeUpdateTaxRegistrationRequest(value: InputValue<UpdateTaxRegistrationRequestInput>): Model<UpdateTaxRegistrationRequestInput>;
export declare function makeUpdateTicketRequest(value: InputValue<UpdateTicketRequestInput>): Model<UpdateTicketRequestInput>;
export declare function makeUpdateWebhookEndpointRequest(value: InputValue<UpdateWebhookEndpointRequestInput>): Model<UpdateWebhookEndpointRequestInput>;
export declare function makeUpdateWorkloadIdentityRequest(value: InputValue<UpdateWorkloadIdentityRequestInput>): Model<UpdateWorkloadIdentityRequestInput>;
export declare function makeVerifyReturnReceiptLineItemRequest(value: InputValue<VerifyReturnReceiptLineItemRequestInput>): Model<VerifyReturnReceiptLineItemRequestInput>;
export declare function makeVoidPackageRequest(value: InputValue<VoidPackageRequestInput>): Model<VoidPackageRequestInput>;
export declare function makeVoidShipmentRequest(value: InputValue<VoidShipmentRequestInput>): Model<VoidShipmentRequestInput>;
export declare function makeWaiveInvoiceLateFeeRequest(value: InputValue<WaiveInvoiceLateFeeRequestInput>): Model<WaiveInvoiceLateFeeRequestInput>;
export declare function makeWaiveReturnLineInspectionRequest(value: InputValue<WaiveReturnLineInspectionRequestInput>): Model<WaiveReturnLineInspectionRequestInput>;
export declare function makeWebhookSigningMethod(value: InputValue<WebhookSigningMethodInput>): Model<WebhookSigningMethodInput>;
export declare function makeWeightRequest(value: InputValue<WeightRequestInput>): Model<WeightRequestInput>;
export declare function makeWorkloadIdentityClaimConditionRequest(value: InputValue<WorkloadIdentityClaimConditionRequestInput>): Model<WorkloadIdentityClaimConditionRequestInput>;
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
export declare function verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, options: WebhookVerificationOptions): Promise<VerifiedWebhook & {
    signingMethod: 'jwt' | 'hmac';
}>;
export declare function workloadIdentityCredentials(options: WorkloadIdentityOptions): CredentialProvider;
