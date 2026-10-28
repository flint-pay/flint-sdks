import type {
    InputValue,
    Model,
    WebhookHeaders as _SdkWebhookHeaders,
    CredentialProvider,
    WorkloadIdentityOptions
} from '../runtime.js';
import type {
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
    UpdateSubscriptionLineItemRequestInput,
    UpdateSubscriptionOfferRequestInput
} from './types-52.js';
import type {
    UpdateSubscriptionPlanLineItemInputBundleInput,
    UpdateSubscriptionPlanLineItemInputCustomInput,
    UpdateSubscriptionPlanLineItemInputVariantInput,
    UpdateSubscriptionPlanLineItemRequestInput,
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionRequestInput,
    UpdateTaxRegistrationRequestInput,
    UpdateWebhookEndpointRequestInput,
    UpdateWorkloadIdentityRequestInput,
    VerifyReturnReceiptLineItemRequestInput,
    VoidPackageRequestInput,
    VoidShipmentRequestInput,
    WaiveInvoiceLateFeeRequestInput,
    WaiveReturnLineInspectionRequestInput,
    VerifiedWebhook
} from './types-53.js';
import type { WebhookSigningMethodInput, WebhookVerificationOptions } from './types-57.js';
import type { WeightInput, WorkloadIdentityClaimConditionRequestInput } from './types-65.js';
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
export declare function makeUpdateTaxRegistrationRequest(value: InputValue<UpdateTaxRegistrationRequestInput>): Model<UpdateTaxRegistrationRequestInput>;
export declare function makeUpdateWebhookEndpointRequest(value: InputValue<UpdateWebhookEndpointRequestInput>): Model<UpdateWebhookEndpointRequestInput>;
export declare function makeUpdateWorkloadIdentityRequest(value: InputValue<UpdateWorkloadIdentityRequestInput>): Model<UpdateWorkloadIdentityRequestInput>;
export declare function makeVerifyReturnReceiptLineItemRequest(value: InputValue<VerifyReturnReceiptLineItemRequestInput>): Model<VerifyReturnReceiptLineItemRequestInput>;
export declare function makeVoidPackageRequest(value: InputValue<VoidPackageRequestInput>): Model<VoidPackageRequestInput>;
export declare function makeVoidShipmentRequest(value: InputValue<VoidShipmentRequestInput>): Model<VoidShipmentRequestInput>;
export declare function makeWaiveInvoiceLateFeeRequest(value: InputValue<WaiveInvoiceLateFeeRequestInput>): Model<WaiveInvoiceLateFeeRequestInput>;
export declare function makeWaiveReturnLineInspectionRequest(value: InputValue<WaiveReturnLineInspectionRequestInput>): Model<WaiveReturnLineInspectionRequestInput>;
export declare function makeWebhookSigningMethod(value: InputValue<WebhookSigningMethodInput>): Model<WebhookSigningMethodInput>;
export declare function makeWeight(value: InputValue<WeightInput>): Model<WeightInput>;
export declare function makeWorkloadIdentityClaimConditionRequest(value: InputValue<WorkloadIdentityClaimConditionRequestInput>): Model<WorkloadIdentityClaimConditionRequestInput>;
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
export declare function verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, options: WebhookVerificationOptions): Promise<VerifiedWebhook & {
    signingMethod: 'jwt' | 'hmac';
}>;
export declare function workloadIdentityCredentials(options: WorkloadIdentityOptions): CredentialProvider;
