
import type { BrandingSettings } from './BrandingSettings.js';
import type { CatalogSettings } from './CatalogSettings.js';
import type { CheckoutSettings } from './CheckoutSettings.js';
import type { CustomDomainStatus } from './CustomDomainStatus.js';
import type { CustomerAccountSettings } from './CustomerAccountSettings.js';
import type { CustomerEmailDeliverySettings } from './CustomerEmailDeliverySettings.js';
import type { DocumentTaxID } from './DocumentTaxID.js';
import type { FulfillmentSettings } from './FulfillmentSettings.js';
import type { InventorySettings } from './InventorySettings.js';
import type { InvoiceSettings } from './InvoiceSettings.js';
import type { LegalSettings } from './LegalSettings.js';
import type { PaymentLimitSettings } from './PaymentLimitSettings.js';
import type { PromotionSettings } from './PromotionSettings.js';
import type { ReceiptSettings } from './ReceiptSettings.js';
import type { SubscriptionSettings } from './SubscriptionSettings.js';
import type { TaxSettings } from './TaxSettings.js';
import type { TippingSettings } from './TippingSettings.js';

export type Settings = { "branding"?: BrandingSettings; "catalog"?: CatalogSettings; "checkout"?: CheckoutSettings; "checkout_domain_status"?: CustomDomainStatus; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "customer_account"?: CustomerAccountSettings; "customer_account_domain_status"?: CustomDomainStatus; "customer_email_delivery"?: CustomerEmailDeliverySettings; "device_id"?: string; "fulfillment"?: FulfillmentSettings; "inventory"?: InventorySettings; "invoices"?: InvoiceSettings; "legal"?: LegalSettings; "location_id"?: string; "merchant_id"?: string; "metadata"?: Record<string, string>; "organization_id"?: string; /** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */ "payment_limits"?: PaymentLimitSettings; "promotions"?: PromotionSettings; "receipts"?: ReceiptSettings; "settings_id": string; "settings_scope": "organization" | "merchant" | "location" | "device" | (string & {}); "subscriptions"?: SubscriptionSettings; "tax"?: TaxSettings; "tax_identity"?: (({ /** minLength: 1. maxLength: 255. */ "legal_name"?: string | null; "registered_address"?: (({ "city": string; /** ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US". */ "country": string; "line1": string; "line2"?: string; "postal_code": string; "state": string; }) | (null)); /** maxItems: 20. */ "tax_ids": Array<DocumentTaxID>; }) | (null)); "tipping"?: TippingSettings; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; /** Use an exact numeric string, not a floating-point number. Format: uint64. minimum: 1. */ "version": string; };
