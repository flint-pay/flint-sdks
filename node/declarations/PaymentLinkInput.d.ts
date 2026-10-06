
import type { CheckoutCustomTextWriteConfigInput } from './CheckoutCustomTextWriteConfigInput.js';
import type { CheckoutExpirationConfigInput } from './CheckoutExpirationConfigInput.js';
import type { CheckoutPaymentConfigInput } from './CheckoutPaymentConfigInput.js';
import type { CheckoutPromotionConfigInput } from './CheckoutPromotionConfigInput.js';
import type { CheckoutRedirectsConfigInput } from './CheckoutRedirectsConfigInput.js';
import type { CheckoutTaxConfigInput } from './CheckoutTaxConfigInput.js';
import type { CheckoutTipConfigInput } from './CheckoutTipConfigInput.js';
import type { ImageInput } from './ImageInput.js';
import type { InventoryRoutingSourceRequestInput } from './InventoryRoutingSourceRequestInput.js';
import type { LegalSettingsInput } from './LegalSettingsInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentLinkCustomFieldInput } from './PaymentLinkCustomFieldInput.js';
import type { PaymentLinkCustomerConfigInput } from './PaymentLinkCustomerConfigInput.js';
import type { PaymentLinkEventConfigInput } from './PaymentLinkEventConfigInput.js';
import type { PaymentLinkLineItemInput } from './PaymentLinkLineItemInput.js';
import type { ThemeConfigInput } from './ThemeConfigInput.js';

export type PaymentLinkInput = { /** Format: int32. */ "completed_count"?: never; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: never; "custom_fields"?: Array<PaymentLinkCustomFieldInput>; "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: PaymentLinkCustomerConfigInput; /** Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. */ "delivery_method_ids"?: never; "description"?: string; "donation_max_amount_money"?: MoneyValueInput; "donation_min_amount_money"?: MoneyValueInput; "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "expiration"?: CheckoutExpirationConfigInput; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "image"?: ImageInput; "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequestInput; "legal"?: LegalSettingsInput; "line_items"?: Array<PaymentLinkLineItemInput>; /** Format: int32. */ "max_completions"?: number; "merchant_id"?: never; "metadata"?: Record<string, string>; "name": string; "payment_link_id"?: never; "payment_link_type"?: "standard" | "donation" | "event"; "payments"?: CheckoutPaymentConfigInput; "promotion_config"?: CheckoutPromotionConfigInput; "redirects"?: CheckoutRedirectsConfigInput; "status"?: never; "subscription_plan"?: never; "subscription_plan_id"?: string; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "total_quantity_sold"?: never; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: never; "url"?: never; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version"?: never; };
