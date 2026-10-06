
import type { CheckoutCustomTextWriteConfig } from './CheckoutCustomTextWriteConfig.js';
import type { CheckoutExpirationConfig } from './CheckoutExpirationConfig.js';
import type { CheckoutPaymentConfig } from './CheckoutPaymentConfig.js';
import type { CheckoutPromotionConfig } from './CheckoutPromotionConfig.js';
import type { CheckoutRedirectsConfig } from './CheckoutRedirectsConfig.js';
import type { CheckoutTaxConfig } from './CheckoutTaxConfig.js';
import type { CheckoutTipConfig } from './CheckoutTipConfig.js';
import type { Image } from './Image.js';
import type { InventoryRoutingSourceRequest } from './InventoryRoutingSourceRequest.js';
import type { LegalSettings } from './LegalSettings.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentLinkCustomField } from './PaymentLinkCustomField.js';
import type { PaymentLinkCustomerConfig } from './PaymentLinkCustomerConfig.js';
import type { PaymentLinkEventConfig } from './PaymentLinkEventConfig.js';
import type { PaymentLinkLineItem } from './PaymentLinkLineItem.js';
import type { SubscriptionPlanLineItem } from './SubscriptionPlanLineItem.js';
import type { ThemeConfig } from './ThemeConfig.js';

export type PaymentLink = { /** Format: int32. */ "completed_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; "custom_fields"?: Array<PaymentLinkCustomField>; "custom_text"?: CheckoutCustomTextWriteConfig; "customer_collection"?: PaymentLinkCustomerConfig; /** Delivery methods the link offers. Empty when the link has none, and then its checkouts offer settings.checkout.default_delivery_method_ids when the order has items to deliver. */ "delivery_method_ids"?: Array<string>; "description"?: string; "donation_max_amount_money"?: MoneyValue; "donation_min_amount_money"?: MoneyValue; "donation_suggested_amount_money_options"?: Array<MoneyValue>; "event_config"?: PaymentLinkEventConfig; "expiration"?: CheckoutExpirationConfig; /** Caller-owned identifier for this resource in an external system. maxLength: 255. */ "external_reference_id"?: string; "image"?: Image; "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequest; "legal"?: LegalSettings; "line_items"?: Array<PaymentLinkLineItem>; /** Format: int32. */ "max_completions"?: number; "merchant_id"?: string; "metadata"?: Record<string, string>; "name": string; "payment_link_id": string; "payment_link_type"?: "standard" | "donation" | "event" | (string & {}); "payments"?: CheckoutPaymentConfig; "promotion_config"?: CheckoutPromotionConfig; "redirects"?: CheckoutRedirectsConfig; "status": "active" | "inactive" | (string & {}); "subscription_plan"?: (({ "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {}); /** Format: int32. */ "billing_interval_count": number; /** RFC3339 timestamp. Format: date-time. */ "created_at"?: string; /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */ "currency": string; "description"?: string; "line_items"?: Array<SubscriptionPlanLineItem>; "name": string; "setup_fee_money"?: MoneyValue; "status": "active" | "archived" | (string & {}); "subscription_plan_id": string; /** Format: int32. */ "trial_period_days"?: number; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; }) | (null)); "subscription_plan_id"?: string; "tax"?: CheckoutTaxConfig; "theme"?: ThemeConfig; "tip"?: CheckoutTipConfig; /** Whole-number quantity; fractional quantities are not supported. Format: int32. */ "total_quantity_sold"?: number; /** RFC3339 timestamp. Format: date-time. */ "updated_at"?: string; "url": string; /** Use an exact numeric string, not a floating-point number. Format: int64. */ "version": string; };
