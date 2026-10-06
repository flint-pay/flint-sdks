
import type { BrandingSettingsInput } from './BrandingSettingsInput.js';
import type { CatalogSettingsInput } from './CatalogSettingsInput.js';
import type { CheckoutSettingsInput } from './CheckoutSettingsInput.js';
import type { CustomerAccountSettingsInput } from './CustomerAccountSettingsInput.js';
import type { CustomerEmailDeliverySettingsInput } from './CustomerEmailDeliverySettingsInput.js';
import type { DocumentTaxIDInput } from './DocumentTaxIDInput.js';
import type { FulfillmentSettingsInput } from './FulfillmentSettingsInput.js';
import type { InventorySettingsInput } from './InventorySettingsInput.js';
import type { InvoiceSettingsInput } from './InvoiceSettingsInput.js';
import type { LegalSettingsInput } from './LegalSettingsInput.js';
import type { PromotionSettingsInput } from './PromotionSettingsInput.js';
import type { ReceiptSettingsInput } from './ReceiptSettingsInput.js';
import type { SubscriptionSettingsInput } from './SubscriptionSettingsInput.js';
import type { TaxSettingsInput } from './TaxSettingsInput.js';
import type { TippingSettingsInput } from './TippingSettingsInput.js';

export type SettingsInput = { "branding"?: BrandingSettingsInput; "catalog"?: CatalogSettingsInput; "checkout"?: CheckoutSettingsInput; "checkout_domain_status"?: never; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; "customer_account"?: CustomerAccountSettingsInput; "customer_account_domain_status"?: never; "customer_email_delivery"?: CustomerEmailDeliverySettingsInput; "device_id"?: never; "fulfillment"?: FulfillmentSettingsInput; "inventory"?: InventorySettingsInput; "invoices"?: InvoiceSettingsInput; "legal"?: LegalSettingsInput; "location_id"?: never; "merchant_id"?: never; "metadata"?: Record<string, string>; "organization_id"?: never; /** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */ "payment_limits"?: never; "promotions"?: PromotionSettingsInput; "receipts"?: ReceiptSettingsInput; "settings_id"?: never; "settings_scope"?: never; "subscriptions"?: SubscriptionSettingsInput; "tax"?: TaxSettingsInput; "tax_identity"?: (({ /** minLength: 1. maxLength: 255. */ "legal_name"?: string | null; "registered_address"?: (({ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); /** maxItems: 20. */ "tax_ids": Array<DocumentTaxIDInput>; }) | (null)); "tipping"?: TippingSettingsInput; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version"?: never; };
