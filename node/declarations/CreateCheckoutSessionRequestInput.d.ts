
import type { CheckoutCustomTextWriteConfigInput } from './CheckoutCustomTextWriteConfigInput.js';
import type { CheckoutCustomerConfigInput } from './CheckoutCustomerConfigInput.js';
import type { CheckoutExpirationConfigInput } from './CheckoutExpirationConfigInput.js';
import type { CheckoutPaymentConfigInput } from './CheckoutPaymentConfigInput.js';
import type { CheckoutPromotionConfigInput } from './CheckoutPromotionConfigInput.js';
import type { CheckoutQuickPayItemRequestInput } from './CheckoutQuickPayItemRequestInput.js';
import type { CheckoutRedirectsConfigInput } from './CheckoutRedirectsConfigInput.js';
import type { CheckoutTaxConfigInput } from './CheckoutTaxConfigInput.js';
import type { CheckoutTipConfigInput } from './CheckoutTipConfigInput.js';
import type { LegalSettingsInput } from './LegalSettingsInput.js';
import type { ThemeConfigInput } from './ThemeConfigInput.js';

export type CreateCheckoutSessionRequestInput = ({ "custom_text"?: CheckoutCustomTextWriteConfigInput; "customer_collection"?: CheckoutCustomerConfigInput; /** Immutable delivery method assignment for this checkout. Omit the field to use the configured checkout default. Send an explicit empty array only when the order has no delivery obligations. */ "delivery_method_ids"?: Array<string>; "expiration"?: CheckoutExpirationConfigInput; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "legal"?: LegalSettingsInput; "metadata"?: Record<string, string>; "order_id"?: string; "payments"?: CheckoutPaymentConfigInput; "plan_id"?: string; "promotion_config"?: CheckoutPromotionConfigInput; "quick_pay_item"?: CheckoutQuickPayItemRequestInput; "redirects"?: CheckoutRedirectsConfigInput; /** Expected current open checkout session to replace atomically. Allowed only with order_id. A stale value returns CHECKOUT_SESSION_CURRENT_CHANGED and the current session ID; active payment work returns CHECKOUT_PAYMENT_RESOLVING. */ "replace_checkout_session_id"?: string; /** Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. */ "surface"?: "hosted" | "embedded"; "tax"?: CheckoutTaxConfigInput; "theme"?: ThemeConfigInput; "tip"?: CheckoutTipConfigInput; }) & ((({ "order_id": unknown; }) & (({ "quick_pay_item"?: never }) & ({ "plan_id"?: never }))) | (({ "quick_pay_item": unknown; }) & (({ "order_id"?: never }) & ({ "plan_id"?: never }) & ({ "replace_checkout_session_id"?: never }))) | (({ "plan_id": unknown; }) & (({ "order_id"?: never }) & ({ "quick_pay_item"?: never }) & ({ "replace_checkout_session_id"?: never }))));
