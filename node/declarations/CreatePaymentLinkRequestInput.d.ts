
import type { CheckoutCustomTextWriteConfigInput } from './CheckoutCustomTextWriteConfigInput.js';
import type { CheckoutExpirationConfigInput } from './CheckoutExpirationConfigInput.js';
import type { CheckoutPaymentConfigInput } from './CheckoutPaymentConfigInput.js';
import type { CheckoutPromotionConfigInput } from './CheckoutPromotionConfigInput.js';
import type { CheckoutRedirectsConfigInput } from './CheckoutRedirectsConfigInput.js';
import type { CheckoutTaxConfigInput } from './CheckoutTaxConfigInput.js';
import type { CheckoutTipConfigInput } from './CheckoutTipConfigInput.js';
import type { ImageRequestInput } from './ImageRequestInput.js';
import type { InventoryRoutingSourceRequestInput } from './InventoryRoutingSourceRequestInput.js';
import type { LegalSettingsInput } from './LegalSettingsInput.js';
import type { MoneyValueInput } from './MoneyValueInput.js';
import type { PaymentLinkCustomFieldRequestInput } from './PaymentLinkCustomFieldRequestInput.js';
import type { PaymentLinkCustomerConfigInput } from './PaymentLinkCustomerConfigInput.js';
import type { PaymentLinkEventConfigInput } from './PaymentLinkEventConfigInput.js';
import type { PaymentLinkLineItemRequestInput } from './PaymentLinkLineItemRequestInput.js';
import type { ThemeConfigInput } from './ThemeConfigInput.js';

export type CreatePaymentLinkRequestInput = { "custom_fields"?: Array<PaymentLinkCustomFieldRequestInput>; "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: PaymentLinkCustomerConfigInput; /** Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. */ "delivery_method_ids"?: Array<string>; "description"?: string; "donation_max_amount_money"?: MoneyValueInput; "donation_min_amount_money"?: MoneyValueInput; "donation_suggested_amount_money_options"?: Array<MoneyValueInput>; "event_config"?: PaymentLinkEventConfigInput; "expiration"?: CheckoutExpirationConfigInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "image"?: ImageRequestInput; "inactive_message"?: string; "inventory_routing_source"?: InventoryRoutingSourceRequestInput; "legal"?: LegalSettingsInput; "line_items"?: Array<PaymentLinkLineItemRequestInput>; /** Format: int32. */ "max_completions"?: number; "metadata"?: Record<string, string>; "name": string; "payment_link_type"?: "standard" | "donation" | "event"; "payments"?: CheckoutPaymentConfigInput; "plan_id"?: string; "promotion_config"?: CheckoutPromotionConfigInput; "redirects"?: CheckoutRedirectsConfigInput; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; };
