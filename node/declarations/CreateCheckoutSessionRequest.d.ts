
import type { CheckoutCustomTextWriteConfig } from './CheckoutCustomTextWriteConfig.js';
import type { CheckoutCustomerConfig } from './CheckoutCustomerConfig.js';
import type { CheckoutExpirationConfig } from './CheckoutExpirationConfig.js';
import type { CheckoutPaymentConfig } from './CheckoutPaymentConfig.js';
import type { CheckoutPromotionConfig } from './CheckoutPromotionConfig.js';
import type { CheckoutQuickPayItemRequest } from './CheckoutQuickPayItemRequest.js';
import type { CheckoutRedirectsConfig } from './CheckoutRedirectsConfig.js';
import type { CheckoutSubscriptionTermsRequest } from './CheckoutSubscriptionTermsRequest.js';
import type { CheckoutTaxConfig } from './CheckoutTaxConfig.js';
import type { CheckoutTipConfig } from './CheckoutTipConfig.js';
import type { LegalSettings } from './LegalSettings.js';
import type { ThemeConfig } from './ThemeConfig.js';

export type CreateCheckoutSessionRequest = ({ "custom_text"?: CheckoutCustomTextWriteConfig; "customer_collection"?: CheckoutCustomerConfig; /** Immutable delivery method assignment for this checkout. When omitted, uses settings.checkout.default_delivery_method_ids if the order has items to deliver, or no methods otherwise. An explicit empty array assigns no methods. */ "delivery_method_ids"?: Array<string>; "expiration"?: CheckoutExpirationConfig; /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. */ "external_reference_id"?: string; "legal"?: LegalSettings; "metadata"?: Record<string, string>; "order_id"?: string; /** Origin of the page where you render this embedded checkout, such as https://shop.example.com. Only this origin can show the checkout's gift card challenge and receive its result. It does not let the browser call the Flint API. Accepted only when surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query, fragment, or default port. In test mode, localhost, names ending in .localhost, and 127.0.0.1 also work over HTTP or HTTPS. maxLength: 255. */ "page_origin"?: string; "payments"?: CheckoutPaymentConfig; "promotion_config"?: CheckoutPromotionConfig; "quick_pay_item"?: CheckoutQuickPayItemRequest; "redirects"?: CheckoutRedirectsConfig; /** Expected current open checkout session to replace atomically. Allowed only with order_id. A stale value returns CHECKOUT_SESSION_CURRENT_CHANGED and the current session ID; active payment work returns CHECKOUT_PAYMENT_RESOLVING. */ "replace_checkout_session_id"?: string; "subscription_plan_id"?: string; "subscription_terms"?: CheckoutSubscriptionTermsRequest; /** Defaults to hosted when omitted. Use embedded for a merchant-owned presentation. */ "surface"?: "hosted" | "embedded" | (string & {}); "tax"?: CheckoutTaxConfig; "theme"?: ThemeConfig; "tip"?: CheckoutTipConfig; }) & ((({ "order_id": unknown; })) | (({ "quick_pay_item": unknown; })) | (({ "subscription_plan_id": unknown; })) | (object));
