
import type { DocumentTaxID } from './DocumentTaxID.js';
import type { InvoiceDiscount } from './InvoiceDiscount.js';
import type { InvoiceLineItem } from './InvoiceLineItem.js';
import type { InvoiceTip } from './InvoiceTip.js';
import type { OrderCharge } from './OrderCharge.js';
import type { PostalAddress } from './PostalAddress.js';
import type { PricingAmounts } from './PricingAmounts.js';

export type InvoiceSnapshot = { "billing_address"?: PostalAddress; "buyer_note"?: string; /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. */ "buyer_tax_identity"?: (({ /** minLength: 1. maxLength: 255. */ "legal_name"?: string | null; "registered_address"?: (({ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); /** maxItems: 20. */ "tax_ids": Array<DocumentTaxID>; }) | (null)); "charges"?: Array<OrderCharge>; "customer_display_name"?: string; "customer_email"?: string; "discounts"?: Array<InvoiceDiscount>; "footer"?: string; "internal_note"?: string; "line_items"?: Array<InvoiceLineItem>; "memo"?: string; "merchant_display_name"?: string; "pricing_amounts": PricingAmounts; "reference"?: string; "requested_tip"?: InvoiceTip; /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. */ "seller_tax_identity"?: (({ /** minLength: 1. maxLength: 255. */ "legal_name"?: string | null; "registered_address"?: (({ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); /** maxItems: 20. */ "tax_ids": Array<DocumentTaxID>; }) | (null)); /** RFC3339 timestamp. Format: date-time. */ "service_at"?: string; };
