
import type { PostalAddressInput } from './PostalAddressInput.js';
import type { TaxIdentityPatchInput } from './TaxIdentityPatchInput.js';

export type CreateCustomerRequestInput = { "billing_address"?: PostalAddressInput; "default_invoice_payment_term_id"?: string; "email": string; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "group_id"?: string; "internal_note"?: string; "is_verified"?: boolean; "metadata"?: Record<string, string>; "name"?: string; "phone"?: string; "shipping_address"?: PostalAddressInput; "tax_exempt"?: boolean; "tax_identity"?: TaxIdentityPatchInput; };
