
import type { InvoicePaymentPolicy } from './InvoicePaymentPolicy.js';

export type InvoiceCollectionRequest = ({ "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external" | (string & {}); "payment_method_id"?: string; "payment_policy"?: InvoicePaymentPolicy; }) & ((({ "mode"?: "merchant_default"; })) | (({ "mode"?: "buyer_initiated"; })) | (({ "mode"?: "automatic"; })) | (({ "mode"?: "external"; })) | (object));
