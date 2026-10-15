import type { WebhookHeaders as _SdkWebhookHeaders } from '../runtime.js';
import type { VerifiedWebhook } from './VerifiedWebhook.js';

export declare function verifyWebhook(rawBody: Uint8Array, headers: _SdkWebhookHeaders, secrets: string | readonly string[], nowSeconds?: number): VerifiedWebhook;
