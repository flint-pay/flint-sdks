import type { WebhookHeaders as _SdkWebhookHeaders, CredentialProvider, WorkloadIdentityOptions } from '../runtime.js';
import type { VerifiedWebhook } from './types-78.js';
import type { WebhookVerificationOptions } from './types-79.js';
export declare function verifyWebhook(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
export declare function verifyWebhookAsync(rawBody: Uint8Array | ArrayBuffer, headers: _SdkWebhookHeaders, options: WebhookVerificationOptions): Promise<VerifiedWebhook & {
    signingMethod: 'jwt' | 'hmac';
}>;
export declare function workloadIdentityCredentials(options: WorkloadIdentityOptions): CredentialProvider;
