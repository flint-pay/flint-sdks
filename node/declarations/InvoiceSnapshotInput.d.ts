
import type { InvoiceDiscountInput } from './InvoiceDiscountInput.js';
import type { InvoiceLineItemInput } from './InvoiceLineItemInput.js';
import type { InvoiceTipInput } from './InvoiceTipInput.js';
import type { OrderChargeInput } from './OrderChargeInput.js';
import type { PostalAddressInput } from './PostalAddressInput.js';
import type { PricingAmountsInput } from './PricingAmountsInput.js';

export type InvoiceSnapshotInput = { "billing_address"?: PostalAddressInput; "buyer_note"?: string; /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. */ "buyer_tax_identity"?: never; "charges"?: Array<OrderChargeInput>; "customer_display_name"?: string; "customer_email"?: string; "discounts"?: Array<InvoiceDiscountInput>; "footer"?: string; "internal_note"?: string; "line_items"?: Array<InvoiceLineItemInput>; "memo"?: string; "merchant_display_name"?: string; "pricing_amounts": PricingAmountsInput; "reference"?: string; "requested_tip"?: InvoiceTipInput; /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. */ "seller_tax_identity"?: never; /** RFC3339 timestamp. Format: date-time. */ "service_at"?: string | globalThis.Date; };
