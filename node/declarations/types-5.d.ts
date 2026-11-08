import type { MoneyValue, MoneyValueInput, MetadataMap, MerchantWebhookEnvelope } from './types-35.js';
import type { OrderLineItemTax, OrderLineItemTaxInput, OrderPaymentAttempt } from './types-37.js';
import type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDeliveryPinnedDependency,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentConfig,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig
} from './types-4.js';
import type {
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from './types-21.js';
import type { Image } from './types-25.js';
import type { LegalSettings } from './types-32.js';
import type { PaymentCollection } from './types-41.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResolvePaymentLinkResponse, ResponseMeta } from './types-48.js';
import type { Address, AuthMode } from './types-0.js';
import type { InputValue, ClientOptions as RuntimeClientOptions, CredentialProvider } from '../runtime.js';
import type {
    ConfirmCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionRequestInput
} from './types-6.js';
import type { CreateDeliverySelectionRequestInput } from './types-7.js';
import type { UpdateCheckoutSessionRequestInput } from './types-58.js';
import type { SubscriptionIntervalOption } from './types-55.js';
import type { Credentials } from './types-12.js';
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequest = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** minLength: 1. */
    "name": string;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
};
/**
 * A single custom item to charge on a checkout session, supplied as `quick_pay_item`: a name, an
 * amount, and optional tax settings.
 */
export type CheckoutQuickPayItemRequestInput = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValueInput;
    /** minLength: 1. */
    "name": string;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxInput;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettings = {
    /**
     * Seconds to wait after the buyer last changed their email or phone before sending the
     * reminder. Must be a multiple of 60. Defaults to 3600. Format: int32. minimum: 900. maximum:
     * 86400. multipleOf: 60. Default: 3600.
     */
    "delay_seconds"?: number;
    /**
     * Whether Flint sends checkout reminders. Turning them on requires a business address on the
     * merchant, which the reminder prints; without one the update returns ACTION_NOT_ALLOWED with
     * reason configuration_required and the merchant reference.
     */
    "enabled"?: boolean;
};
/** Checkout reminder email settings. On update, an omitted field keeps its value. */
export type CheckoutRecoveryEmailSettingsRequestInput = CheckoutRecoveryEmailSettings;
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirects = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     */
    "success_url"?: string;
};
/**
 * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
 * payment_return_url.
 */
export type CheckoutRedirectsRequestInput = {
    /**
     * Where the buyer goes when they leave checkout without paying. The session stays open until
     * it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048
     * characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "cancel_url"?: string;
    /**
     * Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees
     * Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback
     * URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "expired_url"?: string;
    /**
     * Where the buyer goes after paying. Flint adds checkout_session_id and order_id query
     * parameters, replacing any with those names. The redirect doesn't prove payment: confirm with
     * the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts
     * HTTP loopback URLs. Up to 2,048 characters. Format: uri. minLength: 1. maxLength: 2048.
     */
    "success_url"?: string;
};
/**
 * Saved payment details settings for hosted checkout. On update, an omitted field keeps its value.
 */
export type CheckoutSavedPaymentDetailsSettingsRequestInput = {
    /**
     * Whether hosted checkout shows buyers an unchecked option to save the card they type. A card
     * is saved only when the buyer checks it and the payment succeeds, with usage on_session:
     * Flint charges it only in checkouts the buyer completes, never for subscriptions, automatic
     * invoices, or other charges without the buyer. Checkout never shows the option when customer
     * accounts are merchant hosted, or for invoice, subscription, and return checkouts.
     */
    "enabled"?: boolean;
};
/** A session in which a buyer completes an order's payment. */
export type CheckoutSession = {
    /** An attempt to pay an order. */
    "active_payment_attempt"?: OrderPaymentAttempt;
    /**
     * Contact the buyer entered in checkout before paying, saved with the session's checkout
     * credential. Separate from merchant-supplied prefill and customer_prefill from the customer
     * record. Omitted until the buyer saves or clears a field. When a checkout session payment
     * omits buyer_contact.email or buyer_contact.phone, Flint uses these values. Flint clears the
     * contact 30 days after the session ends, and when a customer linked to the session is
     * deleted. Buyer contact supplied with payment or saved during checkout.
     */
    "buyer_contact"?: CheckoutBuyerContact;
    /** What checkout asks the buyer for. Each field you leave out uses your checkout settings. */
    "buyer_fields"?: CheckoutBuyerFields;
    /**
     * Whether checkout offers the buyer the option to save the card they type for faster checkout
     * at this merchant. When true and save_payment_method_requires_verification is false, PayOrder
     * accepts save_payment_method: true for one newly collected card. False when the merchant
     * turned checkout.saved_payment_details off, customer accounts are merchant hosted, card is
     * not an available payment option, the checkout collects an invoice, a subscription, or a
     * return, or the checkout acts for no customer and Flint cannot email the buyer a verification
     * code. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method"?: boolean;
    /**
     * Whether the buyer can save the card they type by giving a US or Canadian mobile phone number
     * with the payment, in save_payment_method_phone on POST /v1/orders/{order_id}/pay, and
     * confirming it with a texted code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     */
    "can_save_payment_method_with_phone"?: boolean;
    "checkout_session_id": string;
    /** The note supplied when the checkout session was closed. */
    "closed_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * The customer of the session's order. Omitted when the order has none. A checkout credential
     * issued for this session acts for this customer. Add expand=customer to include the customer.
     */
    "customer_id"?: string;
    /**
     * Contact and default addresses of the customer the checkout acts for, with the recipient name
     * on its default shipping address: the customer the merchant created the session for, or the
     * customer whose email the buyer confirmed in it. Present on GET and PATCH responses while the
     * session is open and acts for a customer. Separate from merchant-supplied prefill and
     * buyer_contact saved by the buyer. Returned only to the checkout credential; never in webhook
     * payloads. Details the buyer's checkout can prefill from the customer it acts for.
     */
    "customer_prefill"?: CheckoutCustomerPrefill;
    /**
     * Current delivery choices for Flint-owned pricing. External pricing reports
     * requires_explicit_quote; reading this field does not request a delivery quote. Omitted when
     * the session is not open, has no order, or Flint cannot read its delivery. The delivery
     * options Flint derived for a checkout as a buyer sees them: choice groups, input
     * requirements, and evaluation status.
     */
    "delivery"?: CheckoutDerivedDeliveryResource;
    /**
     * Immutable delivery method assignment captured when the checkout was created. [] (Value):
     * string.
     */
    "delivery_method_ids": Array<string>;
    /**
     * Immutable configuration lineage used to evaluate delivery quotes. [] (Value): {@link
     * CheckoutDeliveryPinnedDependency}. A delivery dependency pinned to a checkout, such as the
     * assigned method, eligibility, or pricing callback, with the revision it was pinned at.
     */
    "delivery_pinned_dependencies"?: Array<CheckoutDeliveryPinnedDependency>;
    /**
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment.
     */
    "delivery_selection_required": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64.
     */
    "expires_in_seconds"?: number;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Where the buyer completes a gift card challenge for this checkout. Returned on
     * single-session reads, session create and update responses, checkout launch results, and
     * customer verification confirmation results while the session is open and can show the
     * challenge. Omitted from lists, webhooks, expanded resources, and delivery selection results.
     * A URL to load in an iframe when applying a gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`.
     */
    "gift_card_challenge"?: CheckoutGiftCardChallenge;
    /**
     * Present only when `expand` includes `invoice`; `null` when expanded and there is no related
     * invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's summary fields,
     * including status, due date, and paid, outstanding, and refunded amounts, returned when the
     * invoice is expanded. anyOf[2] (Value): null.
     */
    "invoice"?: ((ExpandedInvoiceSummary) | (null));
    "invoice_id"?: string;
    /**
     * Whether this terminal session credential is temporarily restricted to recovering its owning
     * payment attempt.
     */
    "is_in_recovery": boolean;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * The merchant's square icon, shown in browser tabs and compact headers. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses and
     * webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt` text.
     */
    "merchant_icon"?: Image;
    "merchant_id"?: string;
    /**
     * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
     * merchant has one; other responses and webhooks omit it. An image with its `url`, `width`,
     * and `height`, and optional `alt` text.
     */
    "merchant_logo"?: Image;
    /**
     * The merchant's business name, which hosted checkout shows when `theme.title` is unset. Reads
     * `Merchant` when the merchant has not set a business name. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Present on GET and PATCH responses when the merchant set at least one of them.
     * Show it where your checkout tells the buyer to contact the merchant, such as an expired or
     * closed checkout, or your receipt. Returned only to the checkout credential; never in webhook
     * payloads. The merchant's support contact. Each field is omitted when the merchant has not
     * set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id"?: string;
    /** Origin of the page that renders this embedded checkout. Omitted when not set. */
    "page_origin"?: string;
    /**
     * Guidance for collecting a payment source. Checkout-credential reads include it only while
     * the session is open. Returned only to the checkout credential; never in webhook payloads.
     * Client-side details for collecting payment from the buyer, such as the Stripe settings to
     * initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**  [] (Value): string. */
    "payment_intent_ids"?: Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
     * related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A payment link's
     * summary fields, including name, type, status, and URL, returned when the payment link is
     * expanded. anyOf[2] (Value): null.
     */
    "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
    "payment_link_id"?: string;
    /**
     * The current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its `url`, `width`, and `height`, and optional `alt`
     * text.
     */
    "payment_link_image"?: Image;
    /**
     * The card the buyer saved with this checkout's payment by giving a mobile phone number, and
     * whether they confirmed it. Present on GET and PATCH responses after a payment that paid the
     * order in full, or that was approved for the merchant to capture later, and saved a card this
     * way. A checkout whose payment is approved stays open until the capture. Returned only to the
     * checkout credential; never in webhook payloads. A card the buyer saved with the checkout's
     * payment by giving a mobile phone number. It works for nothing until the buyer confirms it
     * with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method.
     */
    "payment_method_save"?: CheckoutPaymentMethodSave;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Configured payment options for merchant credentials; currently available payment options for
     * the checkout credential. Payment settings for a checkout: the enabled payment options and a
     * note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Contact details and addresses to fill in for the buyer, who can change them. For a customer
     * with saved addresses, Flint fills in any address you leave out, and reads include it. With
     * quick_pay or subscription_plan and automatic tax on, a prefilled address sets the order's
     * tax location. Not changed by what the buyer types; for that, read buyer_contact.
     * customer_prefill is what the checkout credential reads from the customer record.
     */
    "prefill"?: CheckoutPrefill;
    /**
     * Named conditions that affect checkout completion. Follow each problem's remediation action
     * instead of reconstructing delivery lifecycle rules in the client. payment_in_progress means
     * another payment for the order must finish before this checkout can complete. When Flint
     * cannot read the checkout's delivery, the read still succeeds and reports
     * delivery_unreadable; its remediation says whether reading the session again can succeed, and
     * its next action's reason_code names the error. [] (Value): {@link CheckoutProblemResource}.
     * A problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation.
     */
    "problems": Array<CheckoutProblemResource>;
    /**
     * Promotion settings for a checkout: whether automatic promotions apply and whether the buyer
     * can apply promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /** RFC3339 deadline for the restricted payment-attempt recovery window. Format: date-time. */
    "recovery_expires_at"?: string | null;
    /** Payment attempt that this checkout credential may recover while is_in_recovery is true. */
    "recovery_payment_attempt_id"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads.
     */
    "save_payment_method_requires_verification"?: boolean;
    /**
     * What save_payment_method keeps, present when can_save_payment_method is true: card, a card
     * the buyer types into checkout. Show the save option with that payment method only. A pay
     * request that sends save_payment_method: true with Apple Pay, Google Pay, a bank account, or
     * Affirm, through a confirmation token created with setup_future_usage none, still pays, and
     * its payment attempt's payment_method_save reports not_saved. The values can grow. Returned
     * only to the checkout credential; never in webhook payloads. [] enum: "card". [] (Value):
     * string. Value enum: "card".
     */
    "save_payment_method_types"?: Array<"card" | (string & {})>;
    /**
     * Guidance for collecting a payment method to save. Checkout-credential reads include it only
     * while the session is open. Returned only to the checkout credential; never in webhook
     * payloads. Client-side details for collecting payment from the buyer, such as the Stripe
     * settings to initialize Stripe.js.
     */
    "setup_collection"?: PaymentCollection;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
     */
    "show_flint_mark"?: boolean;
    /** Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". */
    "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
    "subscription_plan_id"?: string;
    /**
     * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order
     * was created, so later plan changes do not alter them. Absent when the checkout starts no
     * subscription. Renewal terms a subscription checkout commits the buyer to. Frozen when the
     * session's order was created, so later plan changes do not alter them.
     */
    "subscription_terms"?: CheckoutSubscriptionTerms;
    "superseding_checkout_session_id"?: string;
    /** Value enum: "hosted", "embedded". */
    "surface": "hosted" | "embedded" | (string & {});
    /**
     * The session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     */
    "tax"?: CheckoutSessionTax;
    /**
     * Why the session ended. The checkout credential can still read its own closed or expired
     * session; every other call returns CHECKOUT_SESSION_NOT_OPEN. order_paid_elsewhere applies
     * only to invalidated sessions when payment succeeds or partially succeeds outside the
     * session. order_mutated applies when an edit closes or completes its order, or ends an
     * invoice, return-resolution, or subscription-plan session. Other merchant edits keep hosted
     * and embedded sessions open. A session already past expires_at ends with expired before the
     * edit is applied. Value enum: "payment_succeeded", "payment_partially_succeeded", "expired",
     * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
     * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
     * "invoice_balance_changed".
     */
    "terminal_reason"?: "payment_succeeded"
        | "payment_partially_succeeded"
        | "expired"
        | "closed_by_merchant"
        | "order_mutated"
        | "superseded"
        | "order_paid_elsewhere"
        | "invoice_paid_elsewhere"
        | "invoice_voided"
        | "invoice_uncollectible"
        | "invoice_balance_changed"
        | (string & {});
    /**
     * The theme checkout renders with: your branding settings, with the session's `title`,
     * `primary_color`, and `accent_color` over them. A session sets only those three; the other
     * fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings.
     */
    "theme"?: CheckoutTheme;
    /**
     * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options,
     * the default tip, and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /**
     * What the session collects payment for, fixed at creation. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link".
     */
    "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Hosted checkout URL that carries a one-time launch credential. Send the buyer here to pay.
     * Present only for hosted sessions read with a merchant credential that can manage checkout
     * sessions. Launch results include it for hosted sessions: create, payment-link resolve, and
     * invoice and return-resolution checkout. Omitted for embedded sessions.
     */
    "url"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type CheckoutSessionClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.closed";
});
/**
 * The `checkout_session.closed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CheckoutSessionClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.closed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.closed". */
    "event_type"?: "checkout_session.closed";
});
export type CheckoutSessionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.created";
});
/**
 * The `checkout_session.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.created". */
    "event_type"?: "checkout_session.created";
});
/**
 * A request for a checkout verification code. A request with channel email reads the same whether
 * or not Flint sent a code.
 */
export type CheckoutSessionCustomerVerification = {
    /** How the code reached the buyer: email or sms. Value enum: "email", "sms". */
    "channel": "email" | "sms" | (string & {});
    /** ID to confirm the code with. */
    "checkout_session_customer_verification_id": string;
    /** The checkout session the code belongs to. */
    "checkout_session_id": string;
    /** When the code was requested. Format: date-time. */
    "created_at": string;
    /**
     * The address the code is for, lowercased: the email the buyer typed, or for an emailed
     * confirm_saved_payment_method code, the customer's email masked to its first character and
     * domain, such as a•••@example.com. Omitted for a texted confirm_saved_payment_method code.
     */
    "email"?: string;
    /**
     * When the code stops working: 15 minutes after the request for an emailed code, and 10
     * minutes after the text provider first sent a texted code, which a new request within them
     * texts again. Format: date-time.
     */
    "expires_at": string;
    /**
     * Last two digits of the number a texted code went to, so the buyer knows which phone to
     * check. Set only for channel sms.
     */
    "phone_last_digits"?: string;
    /**
     * Why the buyer asked for the code, as sent in the request. Value enum: "gift_card_purchase",
     * "save_payment_method", "use_saved_payment_methods", "confirm_saved_payment_method".
     */
    "purpose": "gift_card_purchase"
        | "save_payment_method"
        | "use_saved_payment_methods"
        | "confirm_saved_payment_method"
        | (string & {});
};
export type CheckoutSessionCustomerVerificationConfirmationResponse = ResolvePaymentLinkResponse;
/** A response containing `CheckoutSessionCustomerVerification` data. */
export type CheckoutSessionCustomerVerificationResponse = {
    /**
     * A request for a checkout verification code. A request with channel email reads the same
     * whether or not Flint sent a code.
     */
    "data": CheckoutSessionCustomerVerification;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CheckoutSessionExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.expired";
});
/**
 * The `checkout_session.expired` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.expired` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.expired". */
    "event_type"?: "checkout_session.expired";
});
export type CheckoutSessionInvalidatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.invalidated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.invalidated";
});
/**
 * The `checkout_session.invalidated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionInvalidatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.invalidated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionInvalidatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
});
export type CheckoutSessionLaunchResponse = ResolvePaymentLinkResponse;
/** A page of `CheckoutSession` objects. */
export type CheckoutSessionListResponse = {
    /**
     *  [] (Value): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data": Array<CheckoutSession>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CheckoutSessionPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.paid";
});
/**
 * The `checkout_session.paid` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type CheckoutSessionPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
});
export type CheckoutSessionPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": CheckoutSession;
    };
    "event_type"?: "checkout_session.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
    });
})))
    & {
    "event_type": "checkout_session.partially_paid";
});
/**
 * The `checkout_session.partially_paid` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type CheckoutSessionPartiallyPaidInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `checkout_session.partially_paid` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link CheckoutSession}. A session in which a buyer completes an order's
     * payment.
     */
    "data"?: {
        /** A session in which a buyer completes an order's payment. */
        "object": CheckoutSession;
    };
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
});
/** A response containing `CheckoutSession` data. */
export type CheckoutSessionResponse = {
    /** A session in which a buyer completes an order's payment. */
    "data": CheckoutSession;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Tax settings of a checkout session: whether it collects tax and any tax location the merchant
 * fixed.
 */
export type CheckoutSessionTax = {
    /** Whether the session collects tax, as set when it was created. */
    "enabled"?: boolean;
    /**
     * The tax location your order already held when this session was created over it. Hosted
     * checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or
     * change the location. A postal address. Every address has country. Addresses Flint checked as
     * complete (customer and saved addresses, merchant, location, invoice, order delivery
     * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
     * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
     * locations and postal-code tax locations hold only what was provided, such as postal_code and
     * country.
     */
    "location_fixed_by_merchant"?: Address;
};
/**
 * The checkout session with its checkout credential. For hosted checkout, send the buyer to url.
 * For embedded checkout, pass checkout_auth_token to your checkout client. A session in which a
 * buyer completes an order's payment.
 */
export type CheckoutSessionWithSecret = (Exclude<CheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on
     * checkout launch and customer binding confirmation; omitted when a saved-card confirmation
     * keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
export type CheckoutSessionsCloseParams = (InputValue<CloseCheckoutSessionRequestInput>);
export type CheckoutSessionsConfirmCustomerVerificationParams = (InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>);
export type CheckoutSessionsCreateCustomerVerificationParams = (CreateCheckoutSessionCustomerVerificationRequestInput);
export type CheckoutSessionsCreateDeliveryQuoteParams = (InputValue<CreateCheckoutDeliveryQuoteRequestInput>);
export type CheckoutSessionsCreateDeliverySelectionParams = (InputValue<CreateDeliverySelectionRequestInput>);
export type CheckoutSessionsCreateParams = (CreateCheckoutSessionRequestInput);
export type CheckoutSessionsDeleteCurrentDeliverySelectionParams = {
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear
     * whichever selection is current.
     */
    "expected_delivery_selection_id"?: InputValue<string>;
};
export type CheckoutSessionsGetCurrentDeliverySelectionParams = {};
export type CheckoutSessionsGetDeliveryQuoteParams = {};
export type CheckoutSessionsGetDeliverySelectionParams = {};
export type CheckoutSessionsGetParams = {
    /**
     * Supported expansions: customer, invoice, order, payment_intents, payment_link. Expansion
     * requires checkouts.checkout_sessions.read plus the read scope for each expanded resource.
     * Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20
     * related objects per path. Repeat expand, for example expand=customer&expand=invoice, or pass
     * one comma-separated value. [] enum: "customer", "invoice", "order", "payment_intents",
     * "payment_link". Value enum: "customer", "invoice", "order", "payment_intents",
     * "payment_link". anyOf[1] (Value): Array of string. [] enum: "customer", "invoice", "order",
     * "payment_intents", "payment_link". anyOf[1][] (Value): string. Value enum: "customer",
     * "invoice", "order", "payment_intents", "payment_link". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order", "payment_intents", "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_intents" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_intents" | "payment_link")[]>;
};
export type CheckoutSessionsListDeliverySelectionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type CheckoutSessionsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by the status each session has when read. A session past expires_at lists as expired
     * even before its stored status is updated, unless payment work keeps it open, in which case
     * it lists as open. A page can hold fewer sessions than page_size. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated". Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "paid",
     * "partially_paid", "expired", "closed", "invalidated". anyOf[1][] (Value): string. Value
     * enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[2]
     * (Value): string. Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated".
     */
    "status"?: InputValue<("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")
        | readonly ("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")[]>;
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Filter by Flint payment link ID. Example: "pl_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_link_id"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact match on the Flint subscription plan ID. minLength: 1. pattern:
     * ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Exact match on the Flint invoice ID. minLength: 1. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by checkout surface. Sessions created before surfaces existed are hosted. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "hosted", "embedded". Value enum: "hosted", "embedded".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "hosted", "embedded". anyOf[1][]
     * (Value): string. Value enum: "hosted", "embedded". anyOf[2] (Value): string. Value enum:
     * "hosted", "embedded".
     */
    "surface"?: InputValue<("hosted" | "embedded") | readonly ("hosted" | "embedded")[]>;
    /**
     * Filter by checkout session type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "order",
     * "quick_pay", "subscription_plan", "invoice", "payment_link". Value enum: "order",
     * "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "order", "quick_pay", "subscription_plan", "invoice",
     * "payment_link". anyOf[1][] (Value): string. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link". anyOf[2] (Value): string. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     */
    "type"?: InputValue<("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")
        | readonly ("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across checkout session ID, external reference ID, metadata, and payment notes. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as cs_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by checkout_session_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: customer, invoice, order, payment_link. Include the requested related
     * resources using scoped batch reads for this page. Each relationship requires its existing
     * target read scopes. Expansion changes the representation without changing pagination tokens.
     * Limits: at most 10 unique expand paths per request. Repeat expand, for example
     * expand=customer&expand=invoice, or pass one comma-separated value. [] enum: "customer",
     * "invoice", "order", "payment_link". Value enum: "customer", "invoice", "order",
     * "payment_link". anyOf[1] (Value): Array of string. [] enum: "customer", "invoice", "order",
     * "payment_link". anyOf[1][] (Value): string. Value enum: "customer", "invoice", "order",
     * "payment_link". anyOf[2] (Value): string. Value enum: "customer", "invoice", "order",
     * "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_link")[]>;
};
export type CheckoutSessionsUpdateParams = (InputValue<UpdateCheckoutSessionRequestInput>);
/**
 * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options,
 * required contact fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettings = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead
     * use the fixed deadline of the active invoice public-link generation. Format: int64. minimum:
     * 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: number;
    /**
     * Payment options checkout offers by default. Adding ach_debit in merchant settings requests
     * ACH Direct Debit for your payment account; Flint refuses it before the account is set up,
     * for a payment account outside the US, and in location or device settings. Each option shows
     * only when it is available for the payment account and order. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. minLength: 1. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit" | (string & {})>;
    /**
     * Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or
     * headless; hosted checkout shows or hides code entry to match. Object-level
     * promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder
     * email: one email to a buyer who entered an email address in hosted checkout and left without
     * paying. Merchant scope only. Effective settings default it to off with a 3600 second delay.
     * Checkout reminder email settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettings;
    "require_billing_address"?: boolean;
    "require_email"?: boolean;
    "require_phone"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted
     * checkout offers buyers the option to save the card they type for faster checkout at this
     * merchant. Merchant scope only. Effective settings default it to on. Saved payment details
     * settings for hosted checkout. On update, an omitted field keeps its value.
     */
    "saved_payment_details"?: CheckoutTaxConfig;
};
/**
 * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment options,
 * required contact fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettingsRequestInput = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     */
    "default_delivery_method_ids"?: Array<string>;
    /**
     * Default lifetime in seconds for generic checkout sessions. Invoice checkout sessions instead
     * use the fixed deadline of the active invoice public-link generation. Format: int64. minimum:
     * 60. maximum: 86400.
     */
    "default_expires_in_seconds"?: number;
    /**
     * Payment options checkout offers by default. Adding ach_debit in merchant settings requests
     * ACH Direct Debit for your payment account; Flint refuses it before the account is set up,
     * for a payment account outside the US, and in location or device settings. Each option shows
     * only when it is available for the payment account and order. [] enum: "card", "apple_pay",
     * "google_pay", "affirm", "ach_debit". [] (Value): string. minLength: 1. Value enum: "card",
     * "apple_pay", "google_pay", "affirm", "ach_debit".
     */
    "enabled_payment_options"?: Array<"card" | "apple_pay" | "google_pay" | "affirm" | "ach_debit">;
    /**
     * Merchant default for whether a checkout session's buyer can apply promotion codes, hosted or
     * headless; hosted checkout shows or hides code entry to match. Object-level
     * promotion_config.codes_enabled can override it for a session or payment link.
     */
    "promotion_codes_enabled"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Checkout reminder
     * email: one email to a buyer who entered an email address in hosted checkout and left without
     * paying. Merchant scope only. Effective settings default it to off with a 3600 second delay.
     * Checkout reminder email settings. On update, an omitted field keeps its value.
     */
    "recovery_email"?: CheckoutRecoveryEmailSettingsRequestInput;
    "require_billing_address"?: boolean;
    "require_email"?: boolean;
    "require_phone"?: boolean;
    /**
     * Patch object: fields you send are applied, fields you omit are unchanged. Whether hosted
     * checkout offers buyers the option to save the card they type for faster checkout at this
     * merchant. Merchant scope only. Effective settings default it to on. Saved payment details
     * settings for hosted checkout. On update, an omitted field keeps its value.
     */
    "saved_payment_details"?: CheckoutSavedPaymentDetailsSettingsRequestInput;
};
/**
 * Recurring shipping charged on a checkout's subscription: the delivery method name, whether the
 * price is fixed or quoted, and the amount.
 */
export type CheckoutSubscriptionRecurringShipping = {
    "delivery_method_name": string;
    /** Value enum: "fixed", "quoted". */
    "price_type": "fixed" | "quoted" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "shipping_money"?: MoneyValue;
};
/**
 * Renewal terms a subscription checkout commits the buyer to. Frozen when the session's order was
 * created, so later plan changes do not alter them.
 */
export type CheckoutSubscriptionTerms = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of billing intervals between recurring charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * minItems: 1. [] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * The term agreed with the buyer, in months, when configured. Flint records it on the
     * subscription and does not stop the buyer from canceling earlier. Format: int32.
     */
    "contract_term_months"?: number;
    /**
     * Whether any line in the subscription plan's frozen checkout terms requires delivery.
     * Available before delivery selection. One-time order lines do not affect this value.
     */
    "delivery_required": boolean;
    /**
     * The fee agreed for canceling before the recorded term ends, when configured. Flint records
     * it on the subscription but never charges it. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Plan name shown to the buyer. */
    "plan_name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /** minItems: 1. [] (Value): integer. Format: int32. */
    "quantity_options": Array<number>;
    /**
     * Recurring shipping charged on a checkout's subscription: the delivery method name, whether
     * the price is fixed or quoted, and the amount.
     */
    "recurring_shipping"?: CheckoutSubscriptionRecurringShipping;
    /**
     * Charge for one billing interval before tax: each line's unit price times its quantity, plus
     * modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "recurring_total_money": MoneyValue;
    /**
     * One-time fee charged with the first payment, when the plan has one. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /** Flint subscription plan ID the terms come from. */
    "subscription_plan_id": string;
    /** Days before the first recurring charge, when the plan has a trial. Format: int32. */
    "trial_period_days"?: number;
};
/**
 * Subscription terms you set on a checkout session: billing interval, interval count, and
 * quantity.
 */
export type CheckoutSubscriptionTermsRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/**
 * Subscription terms you set on a checkout session: billing interval, interval count, and
 * quantity.
 */
export type CheckoutSubscriptionTermsRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /** Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 100. */
    "quantity"?: number;
});
/** Whether tax is collected for a checkout session or payment link. */
export type CheckoutTaxConfig = {
    "enabled"?: boolean;
};
/** Whether tax is collected for a checkout session or payment link. */
export type CheckoutTaxConfigRequestInput = CheckoutTaxConfig;
/**
 * Colors, corner radius, font family, and title that style a checkout, taken from the session or
 * link theme or the merchant's branding settings.
 */
export type CheckoutTheme = {
    /** Accent color, from the session or link theme, or from branding settings. maxLength: 50. */
    "accent_color"?: string;
    /**
     * Page background color from branding settings, as a six-digit hex value such as `#ffffff`.
     * pattern: ^#[0-9a-fA-F]{6}$.
     */
    "background_color"?: string;
    /**
     * Corner radius in pixels from branding settings, from 0 to 32. 0 is a square corner. Format:
     * int32. minimum: 0. maximum: 32.
     */
    "corner_radius"?: number;
    /**
     * Font family from branding settings. New values may be added. Value enum: "instrument_sans",
     * "system_sans", "system_serif", "monospace".
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /** Primary color, from the session or link theme, or from branding settings. maxLength: 50. */
    "primary_color"?: string;
    /** Text color from branding settings, as a six-digit hex value. pattern: ^#[0-9a-fA-F]{6}$. */
    "text_color"?: string;
    /** Title shown in place of the merchant's business name. maxLength: 255. */
    "title"?: string;
};
/**
 * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the
 * default tip, and custom tips.
 */
export type CheckoutTipConfig = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * The preselected fixed tip, with a positive amount in the same currency as
     * smart_tip_money_options. Its amount and currency must match one of the effective
     * smart_tip_money_options: the ones sent here, or else the ones inherited from tipping
     * settings. An inherited preselection that isn't one of the effective options is dropped.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValue;
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. Must match
     * one of the effective tip_percent_options: the ones sent here, or else the ones inherited
     * from tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /**
     * Whether checkout offers a tip. Omit it to follow the merchant's tipping settings.
     * Subscription signups don't inherit that setting or its preselected tip: they offer a tip
     * only when this is true, and the tip is collected once, with the signup payment. A signup
     * with nothing due today, such as a free trial, offers none. Renewals don't include it.
     */
    "enabled"?: boolean;
    /**
     * Three fixed tips to offer, each with a positive amount. On a checkout session they must use
     * the session's currency. On a payment link they must share one currency, and a checkout
     * opened from the link offers only those in its currency. [] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValue>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places. []
     * (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/**
 * Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the
 * default tip, and custom tips.
 */
export type CheckoutTipConfigRequestInput = {
    /** Whether buyers can enter a custom tip amount. */
    "custom_tip_enabled"?: boolean;
    /**
     * The preselected fixed tip, with a positive amount in the same currency as
     * smart_tip_money_options. Its amount and currency must match one of the effective
     * smart_tip_money_options: the ones sent here, or else the ones inherited from tipping
     * settings. An inherited preselection that isn't one of the effective options is dropped.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "default_smart_tip_money"?: MoneyValueInput;
    /**
     * The preselected tip percent, from 1 through 100 with at most four decimal places. Must match
     * one of the effective tip_percent_options: the ones sent here, or else the ones inherited
     * from tipping settings. An inherited preselection that isn't one of the effective options is
     * dropped, and checkout preselects no tip. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "default_tip_percent"?: number;
    /**
     * Whether checkout offers a tip. Omit it to follow the merchant's tipping settings.
     * Subscription signups don't inherit that setting or its preselected tip: they offer a tip
     * only when this is true, and the tip is collected once, with the signup payment. A signup
     * with nothing due today, such as a free trial, offers none. Renewals don't include it.
     */
    "enabled"?: boolean;
    /**
     * Three fixed tips to offer, each with a positive amount. On a checkout session they must use
     * the session's currency. On a payment link they must share one currency, and a checkout
     * opened from the link offers only those in its currency. [] (Value): {@link MoneyValueInput}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "smart_tip_money_options"?: Array<MoneyValueInput>;
    /** Whether checkout offers fixed tip amounts instead of tip percentages. */
    "smart_tips_enabled"?: boolean;
    /**
     * Three tip percents to offer, each from 1 through 100 with at most four decimal places. []
     * (Value): number. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "tip_percent_options"?: Array<number>;
};
/** Client configuration. See RUNTIME.md#clientoptions. */
export type ClientOptions = Omit<RuntimeClientOptions, 'baseUrl' | 'token' | 'authMode' | 'credentials'>
    & {
    baseUrl?: string | undefined;
    "apiKey"?: string | CredentialProvider;
    "checkoutToken"?: string | CredentialProvider;
    "customerToken"?: string | CredentialProvider;
    "invoiceToken"?: string | CredentialProvider;
    "onboardingToken"?: string | CredentialProvider;
    "token"?: string | CredentialProvider;
    authMode?: AuthMode;
    credentials?: Partial<Credentials>;
};
/** The request body for: Close checkout session. */
export type CloseCheckoutSessionRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the checkout session. It is not shown to the buyer.
     * minLength: 1.
     */
    "reason_message"?: string;
};
/** The request body for: Close checkout session. */
export type CloseCheckoutSessionRequestInput = CloseCheckoutSessionRequest;
/** The request body for: Close order. */
export type CloseOrderRequest = {
    /**
     * Send keep to close while keeping collected money. Required when collected money remains
     * refundable to its original tenders, after pending refunds. Closing does not refund money,
     * and the order remains refundable. Accepted when nothing was collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep" | (string & {});
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the order. It is not shown to the buyer. minLength:
     * 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/** The request body for: Close order. */
export type CloseOrderRequestInput = {
    /**
     * Send keep to close while keeping collected money. Required when collected money remains
     * refundable to its original tenders, after pending refunds. Closing does not refund money,
     * and the order remains refundable. Accepted when nothing was collected. Value enum: "keep".
     */
    "collected_money_behavior"?: "keep";
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Your note explaining why you are closing the order. It is not shown to the buyer. minLength:
     * 1. maxLength: 500.
     */
    "reason_message"?: string;
};
