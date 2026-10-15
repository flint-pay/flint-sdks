
import type { CheckoutPromotionConfigInput } from './CheckoutPromotionConfigInput.js';
import type { CheckoutTaxConfigInput } from './CheckoutTaxConfigInput.js';
import type { CheckoutTipConfigInput } from './CheckoutTipConfigInput.js';
import type { ImageRequestInput } from './ImageRequestInput.js';
import type { InventoryRoutingSourceRequestInput } from './InventoryRoutingSourceRequestInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentLinkCustomFieldRequestInput } from './PaymentLinkCustomFieldRequestInput.js';
import type { PaymentLinkCustomTextConfigInput } from './PaymentLinkCustomTextConfigInput.js';
import type { PaymentLinkCustomerConfigInput } from './PaymentLinkCustomerConfigInput.js';
import type { PaymentLinkEventConfigInput } from './PaymentLinkEventConfigInput.js';
import type { PaymentLinkExpirationConfigInput } from './PaymentLinkExpirationConfigInput.js';
import type { PaymentLinkLegalConfigInput } from './PaymentLinkLegalConfigInput.js';
import type { PaymentLinkLineItemRequestInput } from './PaymentLinkLineItemRequestInput.js';
import type { PaymentLinkPaymentConfigInput } from './PaymentLinkPaymentConfigInput.js';
import type { PaymentLinkRedirectsConfigInput } from './PaymentLinkRedirectsConfigInput.js';
import type { PaymentLinkThemeConfigInput } from './PaymentLinkThemeConfigInput.js';

export type CreatePaymentLinkRequestInput = { /** maxItems: 20. */ "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>; "custom_text"?: PaymentLinkCustomTextConfigInput; "customer_collection"?: PaymentLinkCustomerConfigInput; /** Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. */ "delivery_method_ids"?: Array<string>; /** maxLength: 2048. */ "description"?: string; "donation_max_amount_money"?: MoneyValueInput; "donation_min_amount_money"?: MoneyValueInput; "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "expiration"?: PaymentLinkExpirationConfigInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "image"?: ImageRequestInput; /** maxLength: 500. */ "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequestInput; "legal"?: PaymentLinkLegalConfigInput; "line_items"?: Array<PaymentLinkLineItemRequestInput>; /** Format: int32. */ "max_completions"?: number; /**  Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. */ "metadata"?: Record<string, string>; /** maxLength: 255. */ "name": string; "payment_link_type"?: "standard" | "donation" | "event"; "payments"?: PaymentLinkPaymentConfigInput; "promotion_config"?: CheckoutPromotionConfigInput; "redirects"?: PaymentLinkRedirectsConfigInput; "subscription_plan_id"?: string; "tax"?: CheckoutTaxConfigInput; "theme"?: PaymentLinkThemeConfigInput; "tip"?: CheckoutTipConfigInput; };
