
import type { InvoicePaymentPolicyInput } from './InvoicePaymentPolicyInput.js';

export type InvoiceCollectionRequestInput = ({ "mode": "merchant_default" | "buyer_initiated" | "automatic" | "external"; "payment_method_id"?: string; "payment_policy"?: InvoicePaymentPolicyInput; }) & ((({ "mode"?: "merchant_default"; }) & (({ "payment_method_id"?: never }) & ({ "payment_policy"?: never }))) | (({ "mode"?: "buyer_initiated"; }) & (({ "payment_method_id"?: never }))) | (({ "mode"?: "automatic"; }) & (({ "payment_policy"?: never }))) | (({ "mode"?: "external"; }) & (({ "payment_method_id"?: never }) & ({ "payment_policy"?: never }))));
