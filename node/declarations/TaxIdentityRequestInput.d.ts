
import type { TaxIdentityPatchInput } from './TaxIdentityPatchInput.js';

/** Merchant-provided legal identity displayed on invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in display order; replacing the array requires the parent's expected_version. Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add one. */ export type TaxIdentityRequestInput = TaxIdentityPatchInput;
