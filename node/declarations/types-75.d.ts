import type {
    InputValue,
    Model,
    WebhookHeaders as _SdkWebhookHeaders,
    CredentialProvider,
    WorkloadIdentityOptions
} from '../runtime.js';
import type { WaiveReturnLineInspectionRequestInput, VerifiedWebhook } from './types-60.js';
import type {
    WebhookSigningMethodInput,
    WeightInput,
    WorkloadIdentityClaimConditionRequestInput,
    WebhookVerificationOptions
} from './types-61.js';
export declare function makeWaiveReturnLineInspectionRequest(value: InputValue<WaiveReturnLineInspectionRequestInput>): Model<WaiveReturnLineInspectionRequestInput>;
export declare function makeWebhookSigningMethod(value: InputValue<WebhookSigningMethodInput>): Model<WebhookSigningMethodInput>;
export declare function makeWeight(value: InputValue<WeightInput>): Model<WeightInput>;
export declare function makeWorkloadIdentityClaimConditionRequest(value: InputValue<WorkloadIdentityClaimConditionRequestInput>): Model<WorkloadIdentityClaimConditionRequestInput>;
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
export declare function verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, options: WebhookVerificationOptions): Promise<VerifiedWebhook & {
    signingMethod: 'jwt' | 'hmac';
}>;
export declare function workloadIdentityCredentials(options: WorkloadIdentityOptions): CredentialProvider;
