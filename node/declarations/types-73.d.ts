import type {
    InputValue,
    Model,
    WebhookHeaders as _SdkWebhookHeaders,
    CredentialProvider,
    WorkloadIdentityOptions
} from '../runtime.js';
import type {
    UpdateMeSubscriptionLineItemRequestInput,
    UpdateMeSubscriptionRequestInput,
    UpdateMerchantRequestInput,
    UpdateModifierGroupRequestInput,
    UpdateModifierSetRequestInput,
    UpdateOrderChargeRequestInput,
    UpdateOrderRequestInput,
    UpdateOrganizationRequestInput,
    UpdatePackageItemRequestInput,
    UpdatePackageRequestInput,
    UpdatePartnerAppRequestInput,
    UpdatePaymentIntentRequestInput,
    UpdatePaymentLinkRequestInput,
    UpdatePaymentMethodDomainRequestInput
} from './types-48.js';
import type {
    UpdatePayoutDestinationRequestInput,
    UpdatePayoutSettingsRequestInput,
    UpdatePickupFulfillmentDetailsInput,
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
    UpdateReturnRequestInput,
    UpdateReturnResolutionAdjustmentRequestInput,
    UpdateReturnResolutionLineItemRequestInput,
    UpdateReturnResolutionRequestInput,
    UpdateRiskListRequestInput,
    UpdateRiskRuleRequestInput,
    UpdateServiceFulfillmentDetailsInput,
    UpdateSettingsRequestInput,
    UpdateShipmentRequestInput,
    UpdateSubscriptionBillingScheduleRequestInput,
    UpdateSubscriptionBillingScheduleRequestExternalInput,
    UpdateSubscriptionBillingScheduleRequestFlintInput,
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionOfferRequestInput,
    UpdateSubscriptionPlanLineItemRequestInput
} from './types-49.js';
import type {
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionRequestInput,
    UpdateWebhookEndpointRequestInput,
    UpdateWorkloadIdentityRequestInput,
    VerifyReturnReceiptLineItemRequestInput,
    VoidPackageRequestInput,
    VoidShipmentRequestInput,
    WaiveInvoiceLateFeeRequestInput,
    WaiveReturnLineInspectionRequestInput,
    VerifiedWebhook
} from './types-50.js';
import type { WeightInput } from './types-61.js';
import type { WorkloadIdentityClaimConditionRequestInput } from './types-62.js';
import type { WebhookVerificationOptions } from './types-54.js';
export declare function makeUpdateMeSubscriptionLineItemRequest(value: InputValue<UpdateMeSubscriptionLineItemRequestInput>): Model<UpdateMeSubscriptionLineItemRequestInput>;
export declare function makeUpdateMeSubscriptionRequest(value: InputValue<UpdateMeSubscriptionRequestInput>): Model<UpdateMeSubscriptionRequestInput>;
export declare function makeUpdateMerchantRequest(value: InputValue<UpdateMerchantRequestInput>): Model<UpdateMerchantRequestInput>;
export declare function makeUpdateModifierGroupRequest(value: InputValue<UpdateModifierGroupRequestInput>): Model<UpdateModifierGroupRequestInput>;
export declare function makeUpdateModifierSetRequest(value: InputValue<UpdateModifierSetRequestInput>): Model<UpdateModifierSetRequestInput>;
export declare function makeUpdateOrderChargeRequest(value: InputValue<UpdateOrderChargeRequestInput>): Model<UpdateOrderChargeRequestInput>;
export declare function makeUpdateOrderRequest(value: InputValue<UpdateOrderRequestInput>): Model<UpdateOrderRequestInput>;
export declare function makeUpdateOrganizationRequest(value: InputValue<UpdateOrganizationRequestInput>): Model<UpdateOrganizationRequestInput>;
export declare function makeUpdatePackageItemRequest(value: InputValue<UpdatePackageItemRequestInput>): Model<UpdatePackageItemRequestInput>;
export declare function makeUpdatePackageRequest(value: InputValue<UpdatePackageRequestInput>): Model<UpdatePackageRequestInput>;
export declare function makeUpdatePartnerAppRequest(value: InputValue<UpdatePartnerAppRequestInput>): Model<UpdatePartnerAppRequestInput>;
export declare function makeUpdatePaymentIntentRequest(value: InputValue<UpdatePaymentIntentRequestInput>): Model<UpdatePaymentIntentRequestInput>;
export declare function makeUpdatePaymentLinkRequest(value: InputValue<UpdatePaymentLinkRequestInput>): Model<UpdatePaymentLinkRequestInput>;
export declare function makeUpdatePaymentMethodDomainRequest(value: InputValue<UpdatePaymentMethodDomainRequestInput>): Model<UpdatePaymentMethodDomainRequestInput>;
export declare function makeUpdatePayoutDestinationRequest(value: InputValue<UpdatePayoutDestinationRequestInput>): Model<UpdatePayoutDestinationRequestInput>;
export declare function makeUpdatePayoutSettingsRequest(value: InputValue<UpdatePayoutSettingsRequestInput>): Model<UpdatePayoutSettingsRequestInput>;
export declare function makeUpdatePickupFulfillmentDetails(value: InputValue<UpdatePickupFulfillmentDetailsInput>): Model<UpdatePickupFulfillmentDetailsInput>;
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
export declare function makeUpdateSubscriptionBillingScheduleRequest(value: InputValue<Exclude<UpdateSubscriptionBillingScheduleRequestInput & object, readonly unknown[]>>): Model<Exclude<UpdateSubscriptionBillingScheduleRequestInput & object, readonly unknown[]>>;
export declare function makeUpdateSubscriptionBillingScheduleRequest(value: InputValue<UpdateSubscriptionBillingScheduleRequestInput>): Model<UpdateSubscriptionBillingScheduleRequestInput>;
export declare function makeUpdateSubscriptionBillingScheduleRequestExternal(value: InputValue<UpdateSubscriptionBillingScheduleRequestExternalInput>): Model<UpdateSubscriptionBillingScheduleRequestExternalInput>;
export declare function makeUpdateSubscriptionBillingScheduleRequestFlint(value: InputValue<UpdateSubscriptionBillingScheduleRequestFlintInput>): Model<UpdateSubscriptionBillingScheduleRequestFlintInput>;
export declare function makeUpdateSubscriptionLineItemRequest(value: InputValue<UpdateSubscriptionLineItemRequestInput>): Model<UpdateSubscriptionLineItemRequestInput>;
export declare function makeUpdateSubscriptionOfferRequest(value: InputValue<UpdateSubscriptionOfferRequestInput>): Model<UpdateSubscriptionOfferRequestInput>;
export declare function makeUpdateSubscriptionPlanLineItemRequest(value: InputValue<UpdateSubscriptionPlanLineItemRequestInput>): Model<UpdateSubscriptionPlanLineItemRequestInput>;
export declare function makeUpdateSubscriptionPlanRequest(value: InputValue<UpdateSubscriptionPlanRequestInput>): Model<UpdateSubscriptionPlanRequestInput>;
export declare function makeUpdateSubscriptionRequest(value: InputValue<UpdateSubscriptionRequestInput>): Model<UpdateSubscriptionRequestInput>;
export declare function makeUpdateWebhookEndpointRequest(value: InputValue<UpdateWebhookEndpointRequestInput>): Model<UpdateWebhookEndpointRequestInput>;
export declare function makeUpdateWorkloadIdentityRequest(value: InputValue<UpdateWorkloadIdentityRequestInput>): Model<UpdateWorkloadIdentityRequestInput>;
export declare function makeVerifyReturnReceiptLineItemRequest(value: InputValue<VerifyReturnReceiptLineItemRequestInput>): Model<VerifyReturnReceiptLineItemRequestInput>;
export declare function makeVoidPackageRequest(value: InputValue<VoidPackageRequestInput>): Model<VoidPackageRequestInput>;
export declare function makeVoidShipmentRequest(value: InputValue<VoidShipmentRequestInput>): Model<VoidShipmentRequestInput>;
export declare function makeWaiveInvoiceLateFeeRequest(value: InputValue<WaiveInvoiceLateFeeRequestInput>): Model<WaiveInvoiceLateFeeRequestInput>;
export declare function makeWaiveReturnLineInspectionRequest(value: InputValue<WaiveReturnLineInspectionRequestInput>): Model<WaiveReturnLineInspectionRequestInput>;
export declare function makeWeight(value: InputValue<WeightInput>): Model<WeightInput>;
export declare function makeWorkloadIdentityClaimConditionRequest(value: InputValue<WorkloadIdentityClaimConditionRequestInput>): Model<WorkloadIdentityClaimConditionRequestInput>;
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
export declare function verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, options: WebhookVerificationOptions): Promise<VerifiedWebhook & {
    signingMethod: 'jwt' | 'hmac';
}>;
export declare function workloadIdentityCredentials(options: WorkloadIdentityOptions): CredentialProvider;
