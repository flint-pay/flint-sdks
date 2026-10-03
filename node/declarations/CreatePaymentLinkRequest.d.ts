
import type { CheckoutCustomTextWriteConfig } from './CheckoutCustomTextWriteConfig.js';
import type { CheckoutExpirationConfig } from './CheckoutExpirationConfig.js';
import type { CheckoutPaymentConfig } from './CheckoutPaymentConfig.js';
import type { CheckoutPromotionConfig } from './CheckoutPromotionConfig.js';
import type { CheckoutRedirectsConfig } from './CheckoutRedirectsConfig.js';
import type { CheckoutTaxConfig } from './CheckoutTaxConfig.js';
import type { CheckoutTipConfig } from './CheckoutTipConfig.js';
import type { ImageRequest } from './ImageRequest.js';
import type { InventoryRoutingSourceRequest } from './InventoryRoutingSourceRequest.js';
import type { LegalSettings } from './LegalSettings.js';
import type { MoneyValue } from './MoneyValue.js';
import type { PaymentLinkCustomFieldRequest } from './PaymentLinkCustomFieldRequest.js';
import type { PaymentLinkCustomerConfig } from './PaymentLinkCustomerConfig.js';
import type { PaymentLinkEventConfig } from './PaymentLinkEventConfig.js';
import type { PaymentLinkLineItemRequest } from './PaymentLinkLineItemRequest.js';
import type { ThemeConfig } from './ThemeConfig.js';

export type CreatePaymentLinkRequest = { /** maxItems: 20. */ "custom_fields"?: Array<PaymentLinkCustomFieldRequest>; "custom_text"?: CheckoutCustomTextWriteConfig; "customer_collection"?: PaymentLinkCustomerConfig; /** Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. */ "delivery_method_ids"?: Array<string>; "description"?: string; "donation_max_amount_money"?: MoneyValue; "donation_min_amount_money"?: MoneyValue; "donation_suggested_amount_money_options"?: Array<MoneyValue>; "event_config"?: PaymentLinkEventConfig; "expiration"?: CheckoutExpirationConfig; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "image"?: ImageRequest; "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequest; "legal"?: LegalSettings; "line_items"?: Array<PaymentLinkLineItemRequest>; /** Format: int32. */ "max_completions"?: number; /**  Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text answers are budgeted at four bytes per Unicode code point, including optional fields. If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. */ "metadata"?: Record<string, string>; "name": string; "payment_link_type"?: "standard" | "donation" | "event" | (string & {}); "payments"?: CheckoutPaymentConfig; "plan_id"?: string; "promotion_config"?: CheckoutPromotionConfig; "redirects"?: CheckoutRedirectsConfig; "tax"?: CheckoutTaxConfig; "theme"?: ThemeConfig; "tip"?: CheckoutTipConfig; };
