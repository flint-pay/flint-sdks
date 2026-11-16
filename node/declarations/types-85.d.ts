import type {
    InputValue,
    Model,
    WebhookHeaders as _SdkWebhookHeaders,
    CredentialProvider,
    WorkloadIdentityOptions
} from '../runtime.js';
import type {
    UpdateWorkloadIdentityRequestInput,
    VerifyMerchantSignupRequestInput,
    VerifyReturnReceiptLineItemRequestInput,
    VoidPackageRequestInput,
    VoidShipmentRequestInput,
    WaiveInvoiceLateFeeRequestInput,
    WaiveReturnLineInspectionRequestInput,
    VerifiedWebhook
} from './types-69.js';
import type {
    WebhookSigningMethodInput,
    WeightRequestInput,
    WorkloadIdentityClaimConditionRequestInput,
    WebhookVerificationOptions
} from './types-70.js';
export declare function makeUpdateWorkloadIdentityRequest(value: InputValue<UpdateWorkloadIdentityRequestInput>): Model<UpdateWorkloadIdentityRequestInput>;
export declare function makeVerifyMerchantSignupRequest(value: InputValue<VerifyMerchantSignupRequestInput>): Model<VerifyMerchantSignupRequestInput>;
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
