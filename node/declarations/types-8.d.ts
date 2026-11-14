import type {
    CheckoutRedirectsRequestInput,
    CheckoutRedirects,
    CheckoutTipConfig,
    CheckoutTipConfigRequestInput,
    CheckoutTaxConfig,
    CheckoutTaxConfigRequestInput,
    CheckoutSubscriptionTermsRequest,
    CheckoutSubscriptionTermsRequestInput
} from './types-6.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPrefillRequest,
    CheckoutPromotionConfig,
    CheckoutBuyerFieldsRequestInput,
    CheckoutCustomTextWriteConfigInput,
    CheckoutLegalConfigRequestInput,
    CheckoutPaymentConfigRequestInput,
    CheckoutPrefillRequestInput,
    CheckoutPromotionConfigRequestInput,
    CheckoutQuickPayItemRequest,
    CheckoutQuickPayItemRequestInput
} from './types-5.js';
import type { LegalSettings } from './types-35.js';
import type { MetadataMap, MetadataRequestInput } from './types-38.js';
import type { PlatformFeeRequest, PlatformFeeRequestInput } from './types-49.js';
import type { ThemeConfig, ThemeConfigRequestInput, TaxIdentityPatch, TaxIdentityRequestInput } from './types-65.js';
import type { CreateCheckoutSessionDiscount, CreateCheckoutSessionDiscountInput, CreateCheckoutSessionInvoice } from './types-7.js';
import type { MoneyValue, MoneyValueInput } from './types-39.js';
import type { CreditNoteLineItemRequest, CreditNoteLineItemRequestInput } from './types-14.js';
import type { AddressRequest, AddressRequestInput } from './types-0.js';
import type { CustomerTaxExemptionCoverage, CustomerTaxExemptionCoverageRequestInput } from './types-16.js';
import type {
    DeliveryLocationSetConfiguration,
    DeliveryLocationSetConfigurationInput,
    DeliveryMethodConfigurationCreateRequest,
    DeliveryMethodConfigurationCreateRequestInput,
    DeliveryMethodConfigurationRequest,
    DeliveryMethodConfigurationRequestInput,
    DeliveryMethodOriginSelectorRequest,
    DeliveryMethodOriginSelectorRequestInput
} from './types-18.js';
import type { CreateOrderLineItemRequest, CreateOrderLineItemRequestInput } from './types-11.js';
import type {
    DeliveryAddressRequest,
    DeliveryBuyerLocationRequest,
    DeliveryAddressRequestInput,
    DeliveryBuyerLocationRequestInput,
    DeliveryDistance
} from './types-17.js';
import type { InventoryRoutingSourceRequest, InventoryRoutingSourceRequestInput } from './types-30.js';
import type { DeliveryPickupAvailabilityMaximumDistanceRequestInput } from './types-19.js';
import type { DeliveryProfileConfigurationRequest, DeliveryProfileConfigurationRequestInput } from './types-20.js';
import type { DeliveryRateCallbackConfiguration, DeliveryRateCallbackConfigurationRequestInput } from './types-21.js';
import type { WebhookSigningMethod, WebhookSigningMethodInput } from './types-70.js';
import type { DeliveryRevocationTarget } from './types-22.js';
/** The `invoice` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionInvoiceInput = ({
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "invoice".
     */
    "type": "invoice";
})
    & (({
    /** Value enum: "invoice". */
    "type": "invoice";
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "quick_pay_item"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "customer_id"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "discounts"?: never;
})
    & ({
    "theme"?: never;
})
    & ({
    "payments"?: never;
})
    & ({
    "tip"?: never;
})
    & ({
    "buyer_fields"?: never;
})
    & ({
    "prefill"?: never;
})
    & ({
    "metadata"?: never;
})
    & ({
    "external_reference_id"?: never;
})
    & ({
    "legal"?: never;
})
    & ({
    "expires_in_seconds"?: never;
})
    & ({
    "custom_text"?: never;
})
    & ({
    "promotion_config"?: never;
})
    & ({
    "delivery_method_ids"?: never;
})
    & ({
    "platform_fee"?: never;
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "return_resolution_id"?: never;
})));
/** The `order` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionOrder = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order".
     */
    "type": "order" | (string & {});
})
    & (({
    /** Value enum: "order". */
    "type": "order" | (string & {});
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
}));
/** The `order` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionOrderInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order".
     */
    "type": "order";
})
    & (({
    /** Value enum: "order". */
    "type": "order";
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
})
    & (({
    "quick_pay_item"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "customer_id"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "discounts"?: never;
})
    & ({
    "return_resolution_id"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})
    & ({
    "return_url"?: never;
})));
/**
 * Request a fresh code when pay_to_new_address_requires_verification is true. Send no email,
 * channel, or remembered_buyer_token. The code follows the paying credential's proof, except that
 * a wallet opened by text steps up by email. Returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered when no saved card needs step-up. Confirmation keeps the credential and its proof
 * and refreshes it for 15 minutes.
 */
export type CreateCheckoutSessionPayToNewAddressVerificationRequest = {
    /** What the buyer is confirming their email or number for. Value enum: "pay_to_new_address". */
    "purpose": "pay_to_new_address" | (string & {});
};
/**
 * Request a fresh code when pay_to_new_address_requires_verification is true. Send no email,
 * channel, or remembered_buyer_token. The code follows the paying credential's proof, except that
 * a wallet opened by text steps up by email. Returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered when no saved card needs step-up. Confirmation keeps the credential and its proof
 * and refreshes it for 15 minutes.
 */
export type CreateCheckoutSessionPayToNewAddressVerificationRequestInput = {
    /** What the buyer is confirming their email or number for. Value enum: "pay_to_new_address". */
    "purpose": "pay_to_new_address";
};
/** The `quick_pay` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionQuickPay = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscount}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscount>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "quick_pay".
     */
    "type": "quick_pay" | (string & {});
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay" | (string & {});
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequest;
}));
/** The `quick_pay` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionQuickPayInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscountInput}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscountInput>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "quick_pay".
     */
    "type": "quick_pay";
})
    & (({
    /** Value enum: "quick_pay". */
    "type": "quick_pay";
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item": CheckoutQuickPayItemRequestInput;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "return_resolution_id"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})
    & ({
    "return_url"?: never;
})));
/** The request body for: Create checkout session. */
export type CreateCheckoutSessionRequest = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscount}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscount>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequest;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /**
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order", "quick_pay", "subscription_plan", "return_resolution", "invoice".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "return_resolution" | "invoice" | (string & {});
})
    & ((Exclude<CreateCheckoutSessionOrder & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionQuickPay & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionSubscriptionPlan & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionReturnResolution & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionInvoice & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create checkout session. */
export type CreateCheckoutSessionRequestInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscountInput}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscountInput>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Merchant-created cart holds this session may adopt during delivery selection. Only with
     * type: order and a merchant credential. At most 100 unique IDs; exceeding the cap returns
     * INVALID_REQUEST with param inventory_reservation_ids. Immutable after creation. Buyer quotes
     * credit still-eligible bound holds and buyer selections adopt matching units without
     * supplying IDs. Merchant delivery requests that omit IDs also use this binding; explicit IDs,
     * including an empty array, replace it for that request. First adopter wins when sessions
     * share a hold. Unused units remain held until released or expired. Unknown or ineligible IDs
     * at creation return 404. Invalidated or otherwise ended sessions cannot use the binding, and
     * replacement sessions never inherit it. maxItems: 100. uniqueItems: true. [] (Value): string.
     * minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_ids"?: Array<string>;
    /**
     * The open invoice whose balance due now this checkout collects. An open session for the
     * invoice's current collection is reused and returned with 200. Required when type is invoice,
     * and not allowed otherwise. minLength: 1. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: string;
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. Only with type invoice. minLength: 1. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The order to collect. It must be open and not collected by an invoice or a return
     * resolution. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * The one named amount to collect. Flint creates the order from it. Required when `type` is
     * `quick_pay`. A single custom item to charge on a checkout session, supplied as
     * `quick_pay_item`: a name, an amount, and optional tax settings.
     */
    "quick_pay_item"?: CheckoutQuickPayItemRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Expected checkout session for an atomic replacement. Allowed only with type: order. The
     * named session must belong to the same merchant, environment, and order. Active payment work
     * fails with `OPERATION_IN_PROGRESS`. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "replace_checkout_session_id"?: string;
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /**
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "order", "quick_pay", "subscription_plan", "return_resolution", "invoice".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "return_resolution" | "invoice";
})
    & ((Exclude<CreateCheckoutSessionOrderInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionQuickPayInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionSubscriptionPlanInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionReturnResolutionInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionInvoiceInput & object, readonly unknown[]>));
/** The `return_resolution` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionReturnResolution = ({
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "return_resolution".
     */
    "type": "return_resolution" | (string & {});
})
    & (({
    /** Value enum: "return_resolution". */
    "type": "return_resolution" | (string & {});
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
}));
/** The `return_resolution` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionReturnResolutionInput = ({
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's or Return's page in
     * the customer account. Limited to 2048 characters (Unicode code points) before trimming
     * surrounding whitespace. It must be an HTTPS address of the merchant's customer account:
     * /{merchant_id} on Flint's account host, the merchant's active custom account domain, or the
     * host of customer_account.merchant_account_url when the merchant hosts the account. In test
     * mode, any URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also
     * accepted, over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with
     * an INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout
     * or payment_return_url on headless checkout; keep them consistent when sending both. Only
     * with type return_resolution or invoice. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "return_resolution".
     */
    "type": "return_resolution";
})
    & (({
    /** Value enum: "return_resolution". */
    "type": "return_resolution";
    /**
     * The return resolution whose buyer balance this checkout collects. Required when type is
     * return_resolution, and not allowed otherwise. The resolution must have a buyer payment
     * pending on its replacement order. An open session with the same surface is reused and
     * returned with 200. minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "quick_pay_item"?: never;
})
    & ({
    "subscription_plan_id"?: never;
})
    & ({
    "subscription_terms"?: never;
})
    & ({
    "customer_id"?: never;
})
    & ({
    "tax"?: never;
})
    & ({
    "discounts"?: never;
})
    & ({
    "theme"?: never;
})
    & ({
    "payments"?: never;
})
    & ({
    "tip"?: never;
})
    & ({
    "buyer_fields"?: never;
})
    & ({
    "prefill"?: never;
})
    & ({
    "metadata"?: never;
})
    & ({
    "external_reference_id"?: never;
})
    & ({
    "legal"?: never;
})
    & ({
    "expires_in_seconds"?: never;
})
    & ({
    "custom_text"?: never;
})
    & ({
    "promotion_config"?: never;
})
    & ({
    "delivery_method_ids"?: never;
})
    & ({
    "platform_fee"?: never;
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})));
/**
 * By email, the default, Flint emails a code to any valid address while the session is open and
 * save_payment_method_requires_verification is true. By auto, accepted only on a checkout whose
 * order starts a subscription, Flint emails a code only when saving the renewal card would require
 * email verification at payment. Otherwise, or past a recognition limit or when no code can be
 * sent, it returns 409 ACTION_NOT_ALLOWED with reason not_offered. Auto reveals whether the email
 * belongs to an existing customer of this merchant, as the payment refusal does. Requests count
 * against the same limits as saved-details recognition; while a code for this purpose still works,
 * a repeat returns it without sending another email. Confirming opens the same access as an
 * explicit email request.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequest = {
    /** How Flint delivers the code. Default: "email". Value enum: "email", "auto". */
    "channel"?: "email" | "auto" | (string & {});
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * What the buyer is confirming their email or number for. Value enum: "save_payment_method".
     */
    "purpose": "save_payment_method" | (string & {});
};
/**
 * By email, the default, Flint emails a code to any valid address while the session is open and
 * save_payment_method_requires_verification is true. By auto, accepted only on a checkout whose
 * order starts a subscription, Flint emails a code only when saving the renewal card would require
 * email verification at payment. Otherwise, or past a recognition limit or when no code can be
 * sent, it returns 409 ACTION_NOT_ALLOWED with reason not_offered. Auto reveals whether the email
 * belongs to an existing customer of this merchant, as the payment refusal does. Requests count
 * against the same limits as saved-details recognition; while a code for this purpose still works,
 * a repeat returns it without sending another email. Confirming opens the same access as an
 * explicit email request.
 */
export type CreateCheckoutSessionSavePaymentMethodVerificationRequestInput = {
    /** How Flint delivers the code. Default: "email". Value enum: "email", "auto". */
    "channel"?: "email" | "auto";
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * What the buyer is confirming their email or number for. Value enum: "save_payment_method".
     */
    "purpose": "save_payment_method";
};
/** The `subscription_plan` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionSubscriptionPlan = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscount}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscount>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequest;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequest;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
    /**
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequest;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless" | (string & {});
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfig;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "subscription_plan".
     */
    "type": "subscription_plan" | (string & {});
})
    & (({
    /**  require_email (Optional): boolean.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: true. */
        "require_email"?: boolean;
    });
    /** Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
}));
/** The `subscription_plan` variant of `CreateCheckoutSessionRequest`. */
export type CreateCheckoutSessionSubscriptionPlanInput = ({
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFieldsRequestInput;
    /**
     * Custom text for this session's checkout: an order summary message and a shipping address
     * label. Custom checkout text you supply when creating a checkout session: an order summary
     * message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextWriteConfigInput;
    /**
     * Existing customer to link to the order Flint creates. Not allowed with type: order: the
     * session uses the order's customer, so set customer_id on the order first. minLength: 1.
     * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Immutable delivery method assignment for this checkout, 1 to 25 unique IDs. Omit it to use
     * settings.checkout.default_delivery_method_ids when the order has items to deliver; otherwise
     * no methods are assigned. Empty arrays and null are rejected. minItems: 1. maxItems: 25.
     * uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Promotions to apply to the order Flint creates, using your account promotion settings. Only
     * for quick_pay and subscription_plan. A ranking loss returns a promotion_declined warning; an
     * unredeemable promotion fails the request. Read the result on order.discounts, or
     * order.deferred_promotions for a trial. minItems: 1. maxItems: 10. [] (Value): {@link
     * CreateCheckoutSessionDiscountInput}. A promotion to apply to the order Flint creates for a
     * checkout session.
     */
    "discounts"?: Array<CreateCheckoutSessionDiscountInput>;
    /**
     * Seconds the session stays open, from 60 to 86,400. Omit it to use
     * settings.checkout.default_expires_in_seconds, or 24 hours. Format: int64. minimum: 60.
     * maximum: 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The terms and policy links this session shows the buyer, and whether the buyer must accept
     * the terms. Legal settings you supply when creating a checkout session: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: CheckoutLegalConfigRequestInput;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Origin of the page where you render this headless checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is headless. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Headless sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     */
    "payment_return_url"?: string;
    /**
     * Payment settings you supply when creating a checkout session: the enabled payment options
     * and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfigRequestInput;
    /**
     * A platform fee your partner app charges on the payment the session collects, checked once
     * against the order total when the session is created. Each payment the session creates
     * carries its own fee, lowered to the cap for its amount. Only a partner app install token can
     * send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. A
     * subscription_plan checkout session, or an order whose payment starts or renews a
     * subscription, refuses it with INVALID_REQUEST and NOT_ALLOWED on platform_fee, because
     * Flint's billing creates the renewals. amount_money must be above zero, in the payment's
     * currency, at most the platform fee cap the merchant approved for this amount, and below the
     * amount; otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money, with
     * maximum_money when the cap or the amount bounds it. Without an approved cap in this currency
     * it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required. In live mode the partner
     * app's platform_fees capability must be active; otherwise ACTION_NOT_ALLOWED with capability
     * platform_fees and the reason the app's platform status gives. Test mode never checks the
     * capability. Flint lowers the fee, or cancels it, when the cap or Flint's own fees leave less
     * at confirm or capture, so the payment never fails because of it. Part of the request
     * fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app
     * charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes
     * no share of it.
     */
    "platform_fee"?: PlatformFeeRequestInput;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefillRequestInput;
    /**
     * Whether automatic promotions apply to this session and whether the buyer can enter promotion
     * codes. Promotion settings for a checkout: whether automatic promotions apply and whether the
     * buyer can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfigRequestInput;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is headless; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
    /**
     * Subscription terms you set on a checkout session: billing interval, interval count, and
     * quantity.
     */
    "subscription_terms"?: CheckoutSubscriptionTermsRequestInput;
    /**
     * Defaults to hosted when omitted. Use headless for a merchant-owned presentation. Default:
     * "hosted". Value enum: "hosted", "headless".
     */
    "surface"?: "hosted" | "headless";
    /**
     * Automatic tax settings for the order Flint creates from quick_pay_item or
     * subscription_plan_id. With order_id, set tax on the order; sending tax returns
     * INVALID_REQUEST with a NOT_ALLOWED detail. Read order.tax for the resulting tax settings and
     * status. Whether tax is collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfigRequestInput;
    /**
     * The title and colors for this session's checkout. Fields you omit come from your branding
     * settings. Colors and title to apply to a checkout session's page.
     */
    "theme"?: ThemeConfigRequestInput;
    /**
     * Tip options for this session. Fields you omit follow your tipping settings. Tip settings for
     * a checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfigRequestInput;
    /**
     * What the checkout collects payment for. order: an order you created; send order_id.
     * quick_pay: one named amount; send quick_pay_item, and Flint creates the order.
     * subscription_plan: a signup for an active plan; send subscription_plan_id, and Flint creates
     * the order and, once the buyer pays, the subscription. return_resolution: the buyer's balance
     * on a return resolution; send return_resolution_id. invoice: what is due now on an open
     * invoice; send invoice_id. The order, quick_pay and subscription_plan types need
     * checkouts.checkout_sessions.write; return_resolution needs
     * commerce.returns.resolutions.write; invoice needs commerce.invoices.write. Value enum:
     * "subscription_plan".
     */
    "type": "subscription_plan";
})
    & (({
    /**  require_email (Optional): boolean.  Value enum: true. */
    "buyer_fields"?: null
        | boolean
        | number
        | string
        | unknown[]
        | ({
        /** Value enum: true. */
        "require_email"?: true;
    });
    /** Value enum: "subscription_plan". */
    "type": "subscription_plan";
    /** An active plan. minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
})
    & (({
    "order_id"?: never;
})
    & ({
    "replace_checkout_session_id"?: never;
})
    & ({
    "quick_pay_item"?: never;
})
    & ({
    "inventory_reservation_ids"?: never;
})
    & ({
    "return_resolution_id"?: never;
})
    & ({
    "invoice_id"?: never;
})
    & ({
    "invoice_schedule_entry_id"?: never;
})
    & ({
    "return_url"?: never;
})));
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest = {
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto" | (string & {});
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods" | (string & {});
};
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput = {
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto";
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email": string;
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods";
};
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest = {
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto" | (string & {});
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods" | (string & {});
    /**
     * Use this remembered identity instead of email, only with purpose use_saved_payment_methods.
     * It never opens saved cards without a right code. minLength: 47. maxLength: 47. pattern:
     * ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token": string;
};
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput = {
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto";
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods";
    /**
     * Use this remembered identity instead of email, only with purpose use_saved_payment_methods.
     * It never opens saved cards without a right code. minLength: 47. maxLength: 47. pattern:
     * ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token": string;
};
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email. Send exactly one
 * of email or remembered_buyer_token. A token request always uses recognition's caps and masks the
 * email, and returns not_offered when nothing is sent. With explicit email, the token has the same
 * send eligibility and email caps as a typed email, forces a resend, and also uses recognition's
 * network caps. With auto it keeps recognition's routing and reuse.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequest = ({
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto" | (string & {});
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email"?: string;
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods" | (string & {});
    /**
     * Use this remembered identity instead of email, only with purpose use_saved_payment_methods.
     * It never opens saved cards without a right code. minLength: 47. maxLength: 47. pattern:
     * ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token"?: string;
})
    & ((Exclude<CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The buyer asked to use details saved at this merchant. By auto, the default, Flint texts the
 * number saved with the email's details, or emails a code when they have cards saved by email and
 * no number; otherwise it sends nothing and returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered. The response's channel says which. By email, Flint sends a code only when the email
 * has saved details and an active card saved by email or with a number; the response is the same
 * either way. By sms, Flint texts the saved number or returns 409 ACTION_NOT_ALLOWED with reason
 * not_offered and param channel. Auto and sms reveal whether the email has saved details; sms also
 * reveals the number's last two digits. Always offer email alongside sms. A texted code opens only
 * cards saved with that number; an emailed code opens only cards saved by email. Send exactly one
 * of email or remembered_buyer_token. A token request always uses recognition's caps and masks the
 * email, and returns not_offered when nothing is sent. With explicit email, the token has the same
 * send eligibility and email caps as a typed email, forces a resend, and also uses recognition's
 * network caps. With auto it keeps recognition's routing and reuse.
 */
export type CreateCheckoutSessionUseSavedPaymentMethodsVerificationRequestInput = ({
    /** How Flint delivers the code. Default: "auto". Value enum: "email", "sms", "auto". */
    "channel"?: "email" | "sms" | "auto";
    /**
     * Email the buyer typed, with no surrounding spaces. Customers are matched by email without
     * regard to case. Format: email. minLength: 1. maxLength: 255. Example: "buyer@example.com".
     */
    "email"?: string;
    /**
     * What the buyer is confirming their email or number for. Value enum:
     * "use_saved_payment_methods".
     */
    "purpose": "use_saved_payment_methods";
    /**
     * Use this remembered identity instead of email, only with purpose use_saved_payment_methods.
     * It never opens saved cards without a right code. minLength: 47. maxLength: 47. pattern:
     * ^rbt_[A-Za-z0-9_-]{43}$.
     */
    "remembered_buyer_token"?: string;
})
    & ((Exclude<CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequestInput & object, readonly unknown[]>)
    | (Exclude<CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequestInput & object, readonly unknown[]>));
/** The request body for: Allocate credit note. */
export type CreateCreditNoteAllocationRequest = {
    /**
     * Credit to apply, no more than the credit note's available_money or the invoice's outstanding
     * balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
};
/** The request body for: Allocate credit note. */
export type CreateCreditNoteAllocationRequestInput = {
    /**
     * Credit to apply, no more than the credit note's available_money or the invoice's outstanding
     * balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Credit note version last read. Optional; a stale version returns VERSION_CONFLICT. Format:
     * int64. minimum: 1.
     */
    "expected_credit_note_version"?: number;
};
/** The request body for: Create credit note. */
export type CreateCreditNoteRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The invoice to correct. It has to be past draft and not voided. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted.
     * [] (Value): {@link CreditNoteLineItemRequest}. A credit note line you supply when creating
     * or updating a credit note: the invoice line item it credits and how much, or an existing
     * line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequest>;
    /** Free text shown on the credit note, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "memo"?: string;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other" | (string & {});
};
/** The request body for: Create credit note. */
export type CreateCreditNoteRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The invoice to correct. It has to be past draft and not voided. minLength: 1. Example:
     * "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * Initial draft corrections. Omit or send [] to create an empty draft. Null is not accepted.
     * [] (Value): {@link CreditNoteLineItemRequestInput}. A credit note line you supply when
     * creating or updating a credit note: the invoice line item it credits and how much, or an
     * existing line to keep.
     */
    "line_items"?: Array<CreditNoteLineItemRequestInput>;
    /** Free text shown on the credit note, up to 4096 characters. minLength: 1. maxLength: 4096. */
    "memo"?: string;
    /**
     * Why the invoice is being corrected: returned_goods, order_adjustment, billing_error,
     * goodwill, or other. Shown on the credit note document. Value enum: "returned_goods",
     * "order_adjustment", "billing_error", "goodwill", "other".
     */
    "reason": "returned_goods" | "order_adjustment" | "billing_error" | "goodwill" | "other";
};
/** The request body for: Create a custom domain. */
export type CreateCustomDomainRequest = {
    /**
     * Hostname to configure, such as checkout.example.com or account.example.com. minLength: 1.
     * maxLength: 253.
     */
    "hostname": string;
    /**
     * Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum:
     * "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account" | (string & {});
};
/** The request body for: Create a custom domain. */
export type CreateCustomDomainRequestInput = {
    /**
     * Hostname to configure, such as checkout.example.com or account.example.com. minLength: 1.
     * maxLength: 253.
     */
    "hostname": string;
    /**
     * Whether the hostname serves checkout pages or the customer account Flint hosts. Value enum:
     * "checkout", "customer_account".
     */
    "type": "checkout" | "customer_account";
};
/** Optional destination to return to from the hosted customer account. */
export type CreateCustomerAccessLinkRequest = {
    /**
     * Where the buyer can return to on your site. Kept for the browser session this link starts,
     * until sign-out or session end. Absolute HTTPS URL without credentials; test mode also
     * accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed.
     * Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
};
/** Optional destination to return to from the hosted customer account. */
export type CreateCustomerAccessLinkRequestInput = CreateCustomerAccessLinkRequest;
/** The request body for: Create a customer address; Create an address for the current buyer. */
export type CreateCustomerAddressRequest = {
    /**
     * The postal address to save. A complete postal address. State and postal_code are required
     * for US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "address": AddressRequest;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/** The request body for: Create a customer address; Create an address for the current buyer. */
export type CreateCustomerAddressRequestInput = {
    /**
     * The postal address to save. A complete postal address. State and postal_code are required
     * for US addresses and optional for other countries. Send null or omit line2, state, and
     * postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * Set true to make this the default billing address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_billing"?: boolean;
    /**
     * Set true to make this the default shipping address and remove that default from any other
     * saved address. Defaults to false.
     */
    "is_default_shipping"?: boolean;
    /**
     * Limited to 100 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 100.
     */
    "label"?: string;
    /**
     * E.164 phone number. Limited to 30 characters (Unicode code points), counted before
     * surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     */
    "phone"?: string;
    /**
     * Limited to 255 characters (Unicode code points), counted before surrounding whitespace is
     * trimmed. minLength: 1. maxLength: 255.
     */
    "recipient_name": string;
};
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequest = {
    /**
     * Flint customer ID of the customer to delete. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
};
/** The request body for: Request customer account deletion. */
export type CreateCustomerDeletionRequestInput = CreateCustomerDeletionRequest;
/** The request body for: Create customer. */
export type CreateCustomerRequest = ({
    /**
     * Initial saved addresses, created atomically with the customer. Each entry uses the
     * address-book create shape. At most one entry may be the billing default and one the shipping
     * default. Defaults populate billing_address and shipping_address. Omit or send [] for none.
     * When on_email_conflict is return_existing, an existing customer and its addresses stay
     * unchanged. [] (Value): {@link CreateCustomerAddressRequest}. The request body for: Create a
     * customer address; Create an address for the current buyer.
     */
    "addresses"?: Array<CreateCustomerAddressRequest>;
    /**
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. minLength: 1. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Customer email, unique among the environment's customers. Required when `on_email_conflict`
     * is `return_existing`. Format: email. minLength: 1. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Internal note about this customer. Not returned to customer sessions. minLength: 1. */
    "internal_note"?: string;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. minLength: 1.
     */
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing" | (string & {});
    /** Customer phone number. minLength: 1. */
    "phone"?: string;
    /**
     * ID of a wholesale price list in this merchant environment. An inactive list can be assigned
     * but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns
     * 404 RESOURCE_NOT_FOUND. Omit or send null for no direct list. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Defaults to `false`.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Merchant-provided legal identity displayed on invoices and credit notes. Flint does
     * not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityPatch;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
});
/** The request body for: Create customer. */
export type CreateCustomerRequestInput = ({
    /**
     * Initial saved addresses, created atomically with the customer. Each entry uses the
     * address-book create shape. At most one entry may be the billing default and one the shipping
     * default. Defaults populate billing_address and shipping_address. Omit or send [] for none.
     * When on_email_conflict is return_existing, an existing customer and its addresses stay
     * unchanged. [] (Value): {@link CreateCustomerAddressRequestInput}. The request body for:
     * Create a customer address; Create an address for the current buyer.
     */
    "addresses"?: Array<CreateCustomerAddressRequestInput>;
    /**
     * ID of the invoice payment term that applies to this customer's invoices created with
     * `payment_due.type` set to `customer_default`. minLength: 1. Example:
     * "ipt_01KEZF7C0064N1V301BBMQ37R4".
     */
    "default_invoice_payment_term_id"?: string;
    /**
     * Customer email, unique among the environment's customers. Required when `on_email_conflict`
     * is `return_existing`. Format: email. minLength: 1. maxLength: 320. Example:
     * "buyer@example.com".
     */
    "email"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Internal note about this customer. Not returned to customer sessions. minLength: 1. */
    "internal_note"?: string;
    /**
     * Flag you set on the customer, for example after checking ID in store. Promotion and delivery
     * rules can match it. Flint does not set it; it is unrelated to customer verifications, which
     * prove a buyer controls an email address.
     */
    "is_merchant_verified"?: boolean;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Customer name, up to 255 characters (Unicode code points) after trimming surrounding
     * whitespace. minLength: 1.
     */
    "name"?: string;
    /**
     * What to do when an active customer in this environment already has `email`. `error` returns
     * `409 ALREADY_EXISTS` naming that customer. `return_existing` returns that customer unchanged
     * with `200` instead of creating one; it requires `email`. Emails match case-insensitively.
     * Default: "error". Value enum: "error", "return_existing".
     */
    "on_email_conflict"?: "error" | "return_existing";
    /** Customer phone number. minLength: 1. */
    "phone"?: string;
    /**
     * ID of a wholesale price list in this merchant environment. An inactive list can be assigned
     * but does not apply. An archived list returns 409 ACTION_NOT_ALLOWED; a missing list returns
     * 404 RESOURCE_NOT_FOUND. Omit or send null for no direct list. minLength: 1. pattern:
     * ^prl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     */
    "price_list_id"?: string | null;
    /**
     * Free-form label you assign, such as wholesale, so promotion and delivery rules can match
     * groups of customers. It is not an ID; Flint does not check it against any resource.
     * minLength: 1.
     */
    "segment"?: string;
    /**
     * Whether Flint treats this customer as exempt from tax on their orders, so it skips tax
     * calculation for them. Defaults to `false`.
     */
    "tax_exempt"?: boolean;
    /**
     * Legal name, registered address and tax IDs printed on this customer's invoices and credit
     * notes. Merchant-provided legal identity displayed on invoices and credit notes. Flint does
     * not verify IDs. On a customer, automatic tax sends the tax ID for an EU, GB, AU or NZ
     * destination to its tax provider, which can apply a reverse charge; other IDs do not change
     * tax treatment. Tax IDs are an owned collection in display order; replacing the array
     * requires the parent's expected_version. Existing entries retain their document_tax_id; omit
     * an entry to remove it, or omit its ID to add one.
     */
    "tax_identity"?: TaxIdentityRequestInput;
    /**
     * Sandbox only. ID of a test clock to create the customer on. The customer, and every
     * subscription created for it, read the clock's time instead of real time. A customer can't be
     * moved to another clock or taken off one. A live credential gets `403 FORBIDDEN` with reason
     * `test_mode_required`. minLength: 1. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     */
    "test_clock_id"?: string;
});
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequest = {
    /**
     * ID of the customer the session acts as. Calls made with the session's secret see only this
     * customer's data. minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * How long the secret authenticates account calls, in seconds. Defaults to 3600 (one hour).
     * Refreshing issues a new secret with a new window. Format: int64. minimum: 300. maximum:
     * 86400.
     */
    "expires_in_seconds"?: number;
    /**
     * How long the refresh token can be exchanged for a new secret, in seconds. Defaults to 604800
     * (seven days). Format: int64. minimum: 3600. maximum: 2592000.
     */
    "refresh_expires_in_seconds"?: number;
};
/** The request body for: Create a customer session. */
export type CreateCustomerSessionRequestInput = CreateCustomerSessionRequest;
/** The request body for: Create a customer tax exemption. */
export type CreateCustomerTaxExemptionRequest = {
    /**
     * Merchant's exemption certificate number. Null when none is recorded. minLength: 1.
     * maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Replaced as a whole: send every
     * field you want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverage;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string | null;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other"
        | (string & {});
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
};
/** The request body for: Create a customer tax exemption. */
export type CreateCustomerTaxExemptionRequestInput = {
    /**
     * Merchant's exemption certificate number. Null when none is recorded. minLength: 1.
     * maxLength: 255.
     */
    "certificate_number"?: string | null;
    /**
     * Replaced as a whole: send every field you want to keep. Replaced as a whole: send every
     * field you want to keep. Covers all US states or an explicit list of US states and DC.
     */
    "coverage": CustomerTaxExemptionCoverageRequestInput;
    /**
     * Explanation of the exemption. Required for other. Null when none is recorded. minLength: 1.
     * maxLength: 500.
     */
    "description"?: string | null;
    /**
     * Last day of the exemption, inclusive, in YYYY-MM-DD format. Null when the exemption has no
     * end date. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "end_date"?: string | null;
    /**
     * Merchant-only reference to the supporting document. Never shown to buyers or printed on
     * buyer documents. Null when none is recorded. minLength: 1. maxLength: 1024.
     */
    "evidence_reference"?: string | null;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Exemption reason. Other requires a description. Value enum: "federal_government",
     * "state_or_local_government", "tribal_government", "foreign_diplomat",
     * "charitable_organization", "religious_organization", "educational_organization", "resale",
     * "agricultural_production", "industrial_production", "direct_pay_permit", "direct_mail",
     * "other".
     */
    "reason": "federal_government"
        | "state_or_local_government"
        | "tribal_government"
        | "foreign_diplomat"
        | "charitable_organization"
        | "religious_organization"
        | "educational_organization"
        | "resale"
        | "agricultural_production"
        | "industrial_production"
        | "direct_pay_permit"
        | "direct_mail"
        | "other";
    /**
     * First day of the exemption, inclusive, in YYYY-MM-DD format. May be up to 365 days in the
     * future. Format: date. minLength: 1. Example: "2026-08-02".
     */
    "start_date": string;
};
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequest = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email" | (string & {});
    /**
     * ID of the customer whose email to verify. The code goes to this customer's current email.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * What the verification is for. It can only be used for that purpose. Value enum:
     * "link_guest_purchases".
     */
    "purpose": "link_guest_purchases" | (string & {});
};
/** The request body for: Create a customer email verification. */
export type CreateCustomerVerificationRequestInput = {
    /**
     * Defaults to email when omitted. Explicit null and an empty value are not accepted. Default:
     * "email". Value enum: "email".
     */
    "channel"?: "email";
    /**
     * ID of the customer whose email to verify. The code goes to this customer's current email.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * What the verification is for. It can only be used for that purpose. Value enum:
     * "link_guest_purchases".
     */
    "purpose": "link_guest_purchases";
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetails = {
    /** Carrier or courier handling the local delivery. minLength: 1. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /**
     * Delivery network or merchant fleet provider handling the job. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. minLength: 1. maxLength: 30. */
    "courier_support_phone"?: string;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "dispatched_at"?: string;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_delivery_id"?: string;
    /** Instructions for the delivery, such as where to leave the items. minLength: 1. */
    "instructions"?: string;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string;
    /**
     * Your ID for the service area this delivery covers. Only merchant credentials can read it
     * back. minLength: 1. Example: "boston-north".
     */
    "service_area_id"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string;
};
/**
 * Local delivery details you supply when creating a fulfillment: courier, timing window,
 * instructions, and tracking.
 */
export type CreateDeliveryFulfillmentDetailsInput = {
    /** Carrier or courier handling the local delivery. minLength: 1. */
    "carrier"?: string;
    /**
     * Time at which the courier collected the order. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "courier_pickup_at"?: string | globalThis.Date;
    /**
     * Width of the promised courier pickup window, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "courier_pickup_window_duration_seconds"?: number;
    /**
     * Delivery network or merchant fleet provider handling the job. minLength: 1. maxLength: 255.
     */
    "courier_provider_name"?: string;
    /** Buyer-safe support number for the courier or merchant fleet. minLength: 1. maxLength: 30. */
    "courier_support_phone"?: string;
    /**
     * Time by which the order should be delivered. Passing it does not change status or emit an
     * event automatically; the merchant decides how to follow up. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "delivery_due_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "dispatched_at"?: string | globalThis.Date;
    /** Driver-facing notes for the final handoff. minLength: 1. maxLength: 2048. */
    "dropoff_notes"?: string;
    /**
     * Stable delivery job ID owned by the courier or merchant dispatch system. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_delivery_id"?: string;
    /** Instructions for the delivery, such as where to leave the items. minLength: 1. */
    "instructions"?: string;
    /** Whether the buyer requested a no-contact handoff. */
    "no_contact"?: boolean;
    /**
     * Expected preparation time before courier pickup, from 0 to 86400 seconds. Format: int64.
     * minimum: 0. maximum: 86400.
     */
    "prep_time_duration_seconds"?: number;
    /**
     * Time at which the order became ready for courier pickup. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "ready_at"?: string | globalThis.Date;
    /**
     * Your ID for the service area this delivery covers. Only merchant credentials can read it
     * back. minLength: 1. Example: "boston-north".
     */
    "service_area_id"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "window_start_at"?: string | globalThis.Date;
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequest = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. The location
     * IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfiguration;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery location set. */
export type CreateDeliveryLocationSetRequestInput = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. The location
     * IDs in a delivery location set.
     */
    "configuration": DeliveryLocationSetConfigurationInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery method. */
export type CreateDeliveryMethodRequest = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment", "local_delivery", "pickup".
     */
    "type": "shipment" | "local_delivery" | "pickup" | (string & {});
})
    & ((Exclude<CreateDeliveryMethodRequestShipment & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDelivery & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickup & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create delivery method. */
export type CreateDeliveryMethodRequestInput = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active";
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment", "local_delivery", "pickup".
     */
    "type": "shipment" | "local_delivery" | "pickup";
})
    & ((Exclude<CreateDeliveryMethodRequestShipmentInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestLocalDeliveryInput & object, readonly unknown[]>)
    | (Exclude<CreateDeliveryMethodRequestPickupInput & object, readonly unknown[]>));
/** The `local_delivery` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestLocalDelivery = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "local_delivery".
     */
    "type": "local_delivery" | (string & {});
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfig}. Controls
     * whether checkout collects buyer instructions for this method. Controls buyer instructions
     * for a delivery option. Omit it from a method configuration to disable instruction
     * collection. charge_tax_category (Optional): string or null. Tax category of the delivery
     * charge, which decides its automatic tax and appears in tax records and reporting. Null
     * inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for
     * shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create
     * to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequest}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "same_day", "on_demand", "scheduled". quote_input_fields (Optional): Array of string.
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**  service_level (Optional): string.  Value enum: "on_demand", "same_day", "scheduled". */
        "public_details"?: ({
            /** Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled" | (string & {});
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "local_delivery".
     */
    "type": "local_delivery" | (string & {});
});
/** The `local_delivery` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestLocalDeliveryInput = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active";
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "local_delivery".
     */
    "type": "local_delivery";
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfigRequestInput}.
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection. charge_tax_category (Optional): string or null. Tax category of the
     * delivery charge, which decides its automatic tax and appears in tax records and reporting.
     * Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping
     * for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on
     * create to inherit, omit it on PATCH to preserve the current value, or send null to clear it
     * back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequestInput}. Conditions that decide where
     * this method is offered. Omit this field to offer the method everywhere the merchant serves.
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "same_day", "on_demand", "scheduled". quote_input_fields (Optional): Array of string.
     * Address and coordinate fields a callback method requires and is allowed to receive.
     * maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**  service_level (Optional): string.  Value enum: "on_demand", "same_day", "scheduled". */
        "public_details"?: ({
            /** Value enum: "on_demand", "same_day", "scheduled". */
            "service_level"?: "on_demand" | "same_day" | "scheduled";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "local_delivery".
     */
    "type": "local_delivery";
});
/** The `pickup` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestPickup = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "pickup".
     */
    "type": "pickup" | (string & {});
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfig}. Controls
     * whether checkout collects buyer instructions for this method. Controls buyer instructions
     * for a delivery option. Omit it from a method configuration to disable instruction
     * collection. charge_tax_category (Optional): string or null. Tax category of the delivery
     * charge, which decides its automatic tax and appears in tax records and reporting. Null
     * inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for
     * shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create
     * to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequest}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. origin.delivery_location_set_id
     * (Optional): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". origin.location_id (Optional): string. ID of the
     * Location delivery starts from. Required for `fixed_location` and not allowed otherwise.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.location_ids (Optional):
     * Array of string. Inline Location IDs for a set managed by this delivery method. Send either
     * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. origin.location_ids[] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.type (Required): string.
     * Where delivery starts. Delivery type of the method. It cannot change after you create the
     * method. Value enum: "pickup_location_collection". origin.oneOf[1] (Value): {@link
     * DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location` variant of
     * `DeliveryMethodOriginSelectorInput`. origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group` variant
     * of `DeliveryMethodOriginSelectorInput`. origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The `pickup_location_collection`
     * variant of `DeliveryMethodOriginSelectorInput`. pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Required): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Required): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled". quote_input_fields (Optional): Array of string. Address and coordinate fields a
     * callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. []
     * enum: "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         * The origin you supply for a delivery method, chosen by `type`: a fixed location, or
         * locations from a delivery location set or an inline list. delivery_location_set_id
         * (Optional): string. Named delivery location set to reuse. Send either
         * delivery_location_set_id or inline location_ids, never both. The set may contain at most
         * 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
         * minLength: 1. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". location_id (Optional): string.
         * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
         * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_ids
         * (Optional): Array of string. Inline Location IDs for a set managed by this delivery
         * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25
         * unique Locations for allocated_origin_group or 1 to 1,000 for
         * pickup_location_collection. Reads return these Location IDs without exposing the managed
         * set. location_ids[] (Value): string. minLength: 1. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". type (Required): string. Where delivery starts.
         * Delivery type of the method. It cannot change after you create the method. Value enum:
         * "pickup_location_collection". oneOf[1] (Value): {@link
         * DeliveryMethodOriginSelectorInputFixedLocation}. The `fixed_location` variant of
         * `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value): {@link
         * DeliveryMethodOriginSelectorInputAllocatedOriginGroup}. The `allocated_origin_group`
         * variant of `DeliveryMethodOriginSelectorInput`. oneOf[3] (Value): {@link
         * DeliveryMethodOriginSelectorInputPickupLocationCollection}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequest & object, readonly unknown[]>)
            & ({
            /**
             * Delivery type of the method. It cannot change after you create the method. Value
             * enum: "pickup_location_collection".
             */
            "type"?: "pickup_location_collection" | (string & {});
        });
        /**
         *  pickup_mode (Required): string. Value enum: "in_store", "curbside", "locker", "other".
         */
        "public_details": ({
            /** Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other" | (string & {});
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "pickup".
     */
    "type": "pickup" | (string & {});
});
/** The `pickup` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestPickupInput = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active";
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "pickup".
     */
    "type": "pickup";
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfigRequestInput}.
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection. charge_tax_category (Optional): string or null. Tax category of the
     * delivery charge, which decides its automatic tax and appears in tax records and reporting.
     * Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping
     * for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on
     * create to inherit, omit it on PATCH to preserve the current value, or send null to clear it
     * back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequestInput}. Conditions that decide where
     * this method is offered. Omit this field to offer the method everywhere the merchant serves.
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. origin.delivery_location_set_id
     * (Optional): string. Named delivery location set to reuse. Send either
     * delivery_location_set_id or inline location_ids, never both. The set may contain at most 25
     * Locations for allocated_origin_group or 1,000 for pickup_location_collection. minLength: 1.
     * Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". origin.location_id (Optional): string. ID of the
     * Location delivery starts from. Required for `fixed_location` and not allowed otherwise.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.location_ids (Optional):
     * Array of string. Inline Location IDs for a set managed by this delivery method. Send either
     * location_ids or delivery_location_set_id, never both. Use 1 to 25 unique Locations for
     * allocated_origin_group or 1 to 1,000 for pickup_location_collection. Reads return these
     * Location IDs without exposing the managed set. origin.location_ids[] (Value): string.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin.type (Required): string.
     * Where delivery starts. Delivery type of the method. It cannot change after you create the
     * method. Value enum: "pickup_location_collection". origin.oneOf[1] (Value): {@link
     * DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location` variant of
     * `DeliveryMethodOriginSelectorInput`. origin.oneOf[2] (Value): {@link
     * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The `allocated_origin_group`
     * variant of `DeliveryMethodOriginSelectorInput`. origin.oneOf[3] (Value): {@link
     * DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
     * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`. pricing
     * (Required): {@link DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery
     * charge. The pricing strategy you supply when updating a delivery method. Set `type` and the
     * matching property. public_details (Required): object. Buyer-visible structured details
     * supplied by the merchant. public_details.instructions (Optional): string. Buyer-visible
     * instructions for this method. minLength: 1. maxLength: 2048. public_details.pickup_mode
     * (Required): string. Required for pickup methods and rejected for other method types. Value
     * enum: "in_store", "curbside", "locker", "other". public_details.service_level (Optional):
     * string. Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day", "on_demand",
     * "scheduled". quote_input_fields (Optional): Array of string. Address and coordinate fields a
     * callback method requires and is allowed to receive. maxItems: 12. uniqueItems: true. []
     * enum: "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         * The origin you supply for a delivery method, chosen by `type`: a fixed location, or
         * locations from a delivery location set or an inline list. delivery_location_set_id
         * (Optional): string. Named delivery location set to reuse. Send either
         * delivery_location_set_id or inline location_ids, never both. The set may contain at most
         * 25 Locations for allocated_origin_group or 1,000 for pickup_location_collection.
         * minLength: 1. Example: "dls_01KEZF7C00C4WWN7RYTRF55C4H". location_id (Optional): string.
         * ID of the Location delivery starts from. Required for `fixed_location` and not allowed
         * otherwise. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_ids
         * (Optional): Array of string. Inline Location IDs for a set managed by this delivery
         * method. Send either location_ids or delivery_location_set_id, never both. Use 1 to 25
         * unique Locations for allocated_origin_group or 1 to 1,000 for
         * pickup_location_collection. Reads return these Location IDs without exposing the managed
         * set. location_ids[] (Value): string. minLength: 1. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". type (Required): string. Where delivery starts.
         * Delivery type of the method. It cannot change after you create the method. Value enum:
         * "pickup_location_collection". oneOf[1] (Value): {@link
         * DeliveryMethodOriginSelectorInputFixedLocationInput}. The `fixed_location` variant of
         * `DeliveryMethodOriginSelectorInput`. oneOf[2] (Value): {@link
         * DeliveryMethodOriginSelectorInputAllocatedOriginGroupInput}. The
         * `allocated_origin_group` variant of `DeliveryMethodOriginSelectorInput`. oneOf[3]
         * (Value): {@link DeliveryMethodOriginSelectorInputPickupLocationCollectionInput}. The
         * `pickup_location_collection` variant of `DeliveryMethodOriginSelectorInput`.
         */
        "origin": (Exclude<DeliveryMethodOriginSelectorRequestInput & object, readonly unknown[]>)
            & ({
            /**
             * Delivery type of the method. It cannot change after you create the method. Value
             * enum: "pickup_location_collection".
             */
            "type"?: "pickup_location_collection";
        });
        /**
         *  pickup_mode (Required): string. Value enum: "in_store", "curbside", "locker", "other".
         */
        "public_details": ({
            /** Value enum: "in_store", "curbside", "locker", "other". */
            "pickup_mode": "in_store" | "curbside" | "locker" | "other";
        })
            & ({
            "service_level"?: never;
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "pickup".
     */
    "type": "pickup";
});
/** The `shipment` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestShipment = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequest;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment".
     */
    "type": "shipment" | (string & {});
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfig}. Controls
     * whether checkout collects buyer instructions for this method. Controls buyer instructions
     * for a delivery option. Omit it from a method configuration to disable instruction
     * collection. charge_tax_category (Optional): string or null. Tax category of the delivery
     * charge, which decides its automatic tax and appears in tax records and reporting. Null
     * inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping for
     * shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on create
     * to inherit, omit it on PATCH to preserve the current value, or send null to clear it back to
     * inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequest}. Conditions that decide where this
     * method is offered. Omit this field to offer the method everywhere the merchant serves. A
     * boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRule}. The buyer-visible delivery or pickup estimate. Use type none when the
     * merchant makes no timing promise. The timing estimate rule you supply for a delivery method,
     * chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequest}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequest}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day". quote_input_fields
     * (Optional): Array of string. Address and coordinate fields a callback method requires and is
     * allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirement}. Recipient fields this method asks
     * for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirement}. Says whether a
     * recipient field (`name`, `email`, or `phone`) is required for a delivery method, and the
     * format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequest & object, readonly unknown[]>)
        & ({
        /**
         *  service_level (Optional): string. Value enum: "economy", "standard", "expedited",
         * "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day" | (string & {});
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment".
     */
    "type": "shipment" | (string & {});
});
/** The `shipment` variant of `CreateDeliveryMethodRequest`. */
export type CreateDeliveryMethodRequestShipmentInput = ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply when creating a
     * delivery method. `origin` and `pricing` are required.
     */
    "configuration": DeliveryMethodConfigurationCreateRequestInput;
    /** Buyer-visible description of the method. minLength: 1. */
    "description"?: string;
    /**
     * Position in which this method displays among the others. Lower values display first. Format:
     * int32.
     */
    "display_position"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the method. Buyers see it as the option name at checkout. minLength: 1. */
    "name": string;
    /**
     * Marks this method as recommended. Within each choice group, the available method with the
     * lowest value is recommended and listed first. Ties go to the lower display_position, then
     * the method ID. Null never recommends the method. Format: int32.
     */
    "recommendation_priority"?: number;
    /**
     * Whether this method is available for new delivery quotes. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active";
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment".
     */
    "type": "shipment";
})
    & ({
    /**
     * Settings that decide where this method is offered, how it is priced, and what the buyer
     * sees. Changing them publishes a new revision. The configuration you supply for a delivery
     * method: origin, pricing, eligibility, timing estimate, tax settings, and recipient
     * requirements. buyer_instructions (Optional): {@link BuyerInstructionsConfigRequestInput}.
     * Controls whether checkout collects buyer instructions for this method. Controls buyer
     * instructions for a delivery option. Omit it from a method configuration to disable
     * instruction collection. charge_tax_category (Optional): string or null. Tax category of the
     * delivery charge, which decides its automatic tax and appears in tax records and reporting.
     * Null inherits settings.tax.default_delivery_tax_category; if unset, Flint derives shipping
     * for shipment methods, delivery for local delivery, or service_fee for pickup. Omit it on
     * create to inherit, omit it on PATCH to preserve the current value, or send null to clear it
     * back to inheriting. Automatic tax calculates service_fee, shipping, delivery, handling, and
     * surcharge at the general rate at the charge location, including the store for pickup. Value
     * enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null. eligibility
     * (Optional): {@link DeliveryEligibilityExpressionRequestInput}. Conditions that decide where
     * this method is offered. Omit this field to offer the method everywhere the merchant serves.
     * A boolean expression containing exactly one operator or typed condition at each node.
     * Expressions support at most 8 levels and 100 total nodes. estimate (Optional): {@link
     * DeliveryEstimateRuleRequestInput}. The buyer-visible delivery or pickup estimate. Use type
     * none when the merchant makes no timing promise. The timing estimate rule you supply for a
     * delivery method, chosen by `type`: none, a transit time, or a schedule window.
     * minimum_option_lifetime_seconds (Optional): integer. Minimum remaining quote lifetime
     * required before Flint offers this method. Required for calculated, callback, and
     * caller_supplied pricing; defaults to 0 for other pricing. Must be less than Flint's
     * 15-minute quote lifetime. Format: int64. minimum: 0. maximum: 899. origin (Required): {@link
     * DeliveryMethodOriginSelectorRequestInput}. Where delivery starts. A method can use a fixed
     * location or a delivery location set; origin.type determines allocation or buyer pickup
     * behavior. The origin you supply for a delivery method, chosen by `type`: a fixed location,
     * or locations from a delivery location set or an inline list. pricing (Required): {@link
     * DeliveryPricingStrategyRequestInput}. How Flint calculates the delivery charge. The pricing
     * strategy you supply when updating a delivery method. Set `type` and the matching property.
     * public_details (Optional): object. Buyer-visible structured details supplied by the
     * merchant. public_details.instructions (Optional): string. Buyer-visible instructions for
     * this method. minLength: 1. maxLength: 2048. public_details.pickup_mode (Optional): string.
     * Required for pickup methods and rejected for other method types. Value enum: "in_store",
     * "curbside", "locker", "other". public_details.service_level (Optional): string.
     * Buyer-visible service level. Shipment accepts economy, standard, expedited, express,
     * overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Value enum:
     * "economy", "standard", "expedited", "express", "overnight", "same_day". quote_input_fields
     * (Optional): Array of string. Address and coordinate fields a callback method requires and is
     * allowed to receive. maxItems: 12. uniqueItems: true. [] enum: "destination_address",
     * "destination_address.line1", "destination_address.line2", "destination_address.city",
     * "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". quote_input_fields[] (Value):
     * string. Request properties the callback needs. - `destination_address`: The full destination
     * address. - `destination_address.line1`: The destination street address. -
     * `destination_address.line2`: The destination apartment, suite, or other secondary address. -
     * `destination_address.city`: The destination city. - `destination_address.state`: The
     * destination state or region. - `destination_address.postal_code`: The destination postal
     * code. - `destination_address.country`: The destination ISO 3166-1 alpha-2 country code. -
     * `buyer_location`: The buyer location, supplied as an address or coordinates. -
     * `buyer_location.address.line1`: The street address in the buyer location's address variant.
     * - `buyer_location.address.line2`: The apartment, suite, or other secondary address in the
     * buyer location's address variant. - `buyer_location.address.city`: The city in the buyer
     * location's address variant. - `buyer_location.address.state`: The state or region in the
     * buyer location's address variant. - `buyer_location.address.postal_code`: The postal code in
     * the buyer location's address variant. - `buyer_location.address.country`: The ISO 3166-1
     * alpha-2 country code in the buyer location's address variant. - `buyer_location.coordinate`:
     * The latitude and longitude in the buyer location's coordinate variant. Value enum:
     * "destination_address", "destination_address.line1", "destination_address.line2",
     * "destination_address.city", "destination_address.state", "destination_address.postal_code",
     * "destination_address.country", "buyer_location", "buyer_location.address.line1",
     * "buyer_location.address.line2", "buyer_location.address.city",
     * "buyer_location.address.state", "buyer_location.address.postal_code",
     * "buyer_location.address.country", "buyer_location.coordinate". recipient_requirements
     * (Optional): Array of {@link DeliveryRecipientRequirementRequestInput}. Recipient fields this
     * method asks for. A delivery selection can leave out required fields, but payment needs them.
     * recipient_requirements[] (Value): {@link DeliveryRecipientRequirementRequestInput}. Says
     * whether a recipient field (`name`, `email`, or `phone`) is required for a delivery method,
     * and the format it must use. selection_guarantee_seconds (Optional): integer. How long after
     * evaluation Flint guarantees a selected price, when that is later than the option expiry.
     * Defaults to 0, which uses the option expiry. Fixed, tiered, and rate_table prices for a cart
     * without tracked inventory hold until the checkout's calculation expiry. Format: int64.
     * minimum: 0. taxable (Optional): boolean or null. Whether the delivery charge is taxable.
     * Null inherits settings.tax.default_delivery_taxable. Omit it on create to inherit, omit it
     * on PATCH to preserve the current value, or send null to clear it back to inheriting.
     */
    "configuration": (Exclude<DeliveryMethodConfigurationRequestInput & object, readonly unknown[]>)
        & ({
        /**
         *  service_level (Optional): string. Value enum: "economy", "standard", "expedited",
         * "express", "overnight", "same_day".
         */
        "public_details"?: ({
            /**
             * Value enum: "economy", "standard", "expedited", "express", "overnight", "same_day".
             */
            "service_level"?: "economy" | "standard" | "expedited" | "express" | "overnight" | "same_day";
        })
            & ({
            "pickup_mode"?: never;
        });
    });
    /**
     * Delivery type of the method. It cannot change after you create the method. Value enum:
     * "shipment".
     */
    "type": "shipment";
});
/** The `delivery_options` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryOptionsPreviewRequest = {
    /**
     * Buyer location used to evaluate pickup and local delivery availability. The buyer's location
     * for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Destination address used to evaluate shipment and local delivery options. A partial address
     * for delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "destination_address"?: DeliveryAddressRequest;
    /**
     * Where the preview allocates tracked stock: a fixed Location, the current revision of an
     * allocation policy, or one policy revision. Required when any line item tracks inventory.
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequest;
    /**
     * Items to evaluate delivery for, from 1 to 100. minItems: 1. maxItems: 100. [] (Value):
     * {@link CreateOrderLineItemRequest}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequest>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /**
     * ID of the Location at which to price pickup methods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
};
/** The `delivery_options` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryOptionsPreviewRequestInput = {
    /**
     * Buyer location used to evaluate pickup and local delivery availability. The buyer's location
     * for pickup or local delivery, supplied as an address or a coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery methods to evaluate. When omitted, uses
     * settings.checkout.default_delivery_method_ids, or no methods when that setting is empty. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids"?: Array<string>;
    /**
     * Destination address used to evaluate shipment and local delivery options. A partial address
     * for delivery quotes, previews, and buyer locations. Country is required when any member is
     * present.
     */
    "destination_address"?: DeliveryAddressRequestInput;
    /**
     * Where the preview allocates tracked stock: a fixed Location, the current revision of an
     * allocation policy, or one policy revision. Required when any line item tracks inventory.
     * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or
     * one policy revision, selected by `type`.
     */
    "inventory_routing_source"?: InventoryRoutingSourceRequestInput;
    /**
     * Items to evaluate delivery for, from 1 to 100. minItems: 1. maxItems: 100. [] (Value):
     * {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant,
     * a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
    /**
     * The delivery question this preview answers. - `delivery_options`: Evaluates delivery methods
     * and prices for the supplied items and buyer location. Value enum: "delivery_options".
     */
    "mode": "delivery_options";
    /**
     * ID of the Location at which to price pickup methods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "pickup_location_id"?: string;
};
/** The `pickup_locations` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryPickupLocationsPreviewRequest = {
    /**
     * Buyer location to measure pickup distance from. Locations are ordered nearest first when it
     * is set. The buyer's location for pickup or local delivery, supplied as an address or a
     * coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequest;
    /**
     * Checkout session whose pickup locations to evaluate. Checkout credentials must identify
     * their own session. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * Farthest a pickup Location can be from the buyer location. Omit it to apply no limit. A
     * maximum distance from the buyer location, as a value and unit, that limits which pickup
     * locations a preview returns.
     */
    "maximum_distance"?: DeliveryDistance;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations" | (string & {});
};
/** The `pickup_locations` variant of `CreateDeliveryPreviewRequest`. */
export type CreateDeliveryPickupLocationsPreviewRequestInput = {
    /**
     * Buyer location to measure pickup distance from. Locations are ordered nearest first when it
     * is set. The buyer's location for pickup or local delivery, supplied as an address or a
     * coordinate, chosen by `type`.
     */
    "buyer_location"?: DeliveryBuyerLocationRequestInput;
    /**
     * Checkout session whose pickup locations to evaluate. Checkout credentials must identify
     * their own session. minLength: 1. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id": string;
    /**
     * Farthest a pickup Location can be from the buyer location. Omit it to apply no limit. A
     * maximum distance from the buyer location, as a value and unit, that limits which pickup
     * locations a preview returns.
     */
    "maximum_distance"?: DeliveryPickupAvailabilityMaximumDistanceRequestInput;
    /**
     * The delivery question this preview answers. - `pickup_locations`: Lists the checkout
     * session's pickup locations and whether each can supply its items. Value enum:
     * "pickup_locations".
     */
    "mode": "pickup_locations";
};
/** The request body for: Create delivery preview. */
export type CreateDeliveryPreviewRequest = ((CreateDeliveryOptionsPreviewRequest)
    | (CreateDeliveryPickupLocationsPreviewRequest)
    | (Record<string, unknown>));
/** The request body for: Create delivery preview. */
export type CreateDeliveryPreviewRequestInput = ((CreateDeliveryOptionsPreviewRequestInput) | (CreateDeliveryPickupLocationsPreviewRequestInput));
/** The request body for: Create delivery profile. */
export type CreateDeliveryProfileRequest = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequest;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery profile. */
export type CreateDeliveryProfileRequestInput = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. Delivery
     * planning settings you supply when creating or updating a delivery profile. Which fields are
     * allowed depends on `requirement` and `resolution_mode`.
     */
    "configuration": DeliveryProfileConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
};
/** The request body for: Create delivery rate callback. */
export type CreateDeliveryRateCallbackRequest = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. Settings for
     * a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfiguration;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. When hmac is included, the response returns the shared secret and its
     * delivery_rate_callback_signing_key_id once. minItems: 1. uniqueItems: true. Default:
     * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethod}. How Flint signs
     * requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethod>;
    /**
     * Whether active delivery methods can price with this callback. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active" | (string & {});
};
/** The request body for: Create delivery rate callback. */
export type CreateDeliveryRateCallbackRequestInput = {
    /**
     * The settings that define this resource. Changing them publishes a new revision. Settings for
     * a delivery rate callback: the endpoint `url` Flint calls, request timeout, request and
     * response size limits, redirect policy, and whether previews can use it.
     */
    "configuration": DeliveryRateCallbackConfigurationRequestInput;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Merchant-facing name. minLength: 1. */
    "name": string;
    /**
     * Signing methods for callback requests. Defaults to JWT verification with Flint's public
     * JWKS. When hmac is included, the response returns the shared secret and its
     * delivery_rate_callback_signing_key_id once. minItems: 1. uniqueItems: true. Default:
     * ["jwt"]. [] enum: "jwt", "hmac". [] (Value): {@link WebhookSigningMethodInput}. How Flint
     * signs requests to this endpoint. Value enum: "jwt", "hmac".
     */
    "signing_methods"?: Array<WebhookSigningMethodInput>;
    /**
     * Whether active delivery methods can price with this callback. Defaults to inactive. Default:
     * "inactive". Value enum: "inactive", "active".
     */
    "status"?: "inactive" | "active";
};
/** Creates a permanent fence for one exact delivery dependency in this merchant and environment. */
export type CreateDeliveryRevocationRequest = {
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048. */
    "merchant_note"?: string;
    /**
     * Why this dependency must no longer be used. Value enum: "unsafe_configuration",
     * "location_unavailable", "credential_compromise", "legal_requirement", "other".
     */
    "reason": "unsafe_configuration"
        | "location_unavailable"
        | "credential_compromise"
        | "legal_requirement"
        | "other"
        | (string & {});
    /**
     * The parent and exact child identity to fence. Each target_type accepts only its own IDs. The
     * parent and exact child identity to fence. Targets never resolve an alias to a current
     * revision.
     */
    "target": DeliveryRevocationTarget;
};
