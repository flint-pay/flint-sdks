import type {
    CheckoutBuyerContact,
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutCustomerPrefill,
    CheckoutDerivedDeliveryResource,
    CheckoutGiftCardChallenge,
    CheckoutMerchantSupport,
    CheckoutPaymentConfig,
    CheckoutPaymentMethodSave,
    CheckoutPrefill,
    CheckoutProblemResource,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutSession,
    CheckoutRecoveryEmailSettings,
    CheckoutRecoveryEmailSettingsRequestInput,
    CheckoutSavedPaymentDetailsSettingsRequestInput
} from './types-5.js';
import type { CustomFieldAnswer } from './types-14.js';
import type {
    ExpandedCustomerSummary,
    ExpandedInvoiceSummary,
    ExpandedOrderSummary,
    ExpandedPaymentIntentSummary,
    ExpandedPaymentLinkSummary
} from './types-23.js';
import type { Image } from './types-27.js';
import type { LegalSettings } from './types-34.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-36.js';
import type { OrderPaymentAttempt } from './types-39.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { PaymentCollection } from './types-43.js';
import type { ResponseMeta } from './types-51.js';
import type { Address, AuthMode, AcceptFulfillmentRequestInput } from './types-0.js';
import type { InputValue, ClientOptions as RuntimeClientOptions, CredentialProvider } from '../runtime.js';
import type {
    CreateCheckoutSessionCustomerVerificationRequestInput,
    CreateCheckoutDeliveryQuoteRequestInput,
    CreateCheckoutSessionRequestInput
} from './types-7.js';
import type { CreateDeliverySelectionRequestInput } from './types-8.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { UpdateCheckoutSessionRequestInput } from './types-63.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { SubscriptionIntervalOption } from './types-58.js';
import type { Credentials } from './types-13.js';
import type { Invoice } from './types-30.js';
import type { InvoicePaymentAttempt } from './types-31.js';
import type { GetReturnResponse } from './types-25.js';
export type CheckoutSessionInvalidatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.invalidated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.invalidated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `checkout_session.invalidated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionInvalidatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.invalidated". */
    "event_type"?: "checkout_session.invalidated";
});
/** A response containing `CheckoutSessionWithSecret` data. */
export type CheckoutSessionLaunchResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The checkout session
     * with any newly issued checkout credential. Hosted launches return url without
     * checkout_auth_token. Embedded launches return checkout_auth_token without url. Customer
     * binding confirmation returns its newly issued credential for either surface. A session in
     * which a buyer completes an order's payment.
     */
    "data": CheckoutSessionWithSecret;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A page of `CheckoutSession` objects. */
export type CheckoutSessionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * CheckoutSession}. A session in which a buyer completes an order's payment.
     */
    "data": Array<CheckoutSession>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type CheckoutSessionPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `checkout_session.paid` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.paid". */
    "event_type"?: "checkout_session.paid";
});
export type CheckoutSessionPartiallyPaidEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.partially_paid";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.partially_paid";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `checkout_session.partially_paid` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type CheckoutSessionPartiallyPaidMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.partially_paid". */
    "event_type"?: "checkout_session.partially_paid";
});
/** A response containing `CheckoutSession` data. */
export type CheckoutSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A session in which a
     * buyer completes an order's payment.
     */
    "data": CheckoutSession;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
export type CheckoutSessionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "checkout_session.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_payment_attempt"?: OrderPaymentAttempt;
            "buyer_contact"?: CheckoutBuyerContact;
            "buyer_fields"?: CheckoutBuyerFields;
            "can_save_payment_method"?: boolean;
            "can_save_payment_method_with_phone"?: boolean;
            "checkout_session_id": string;
            "client_reference": string | null;
            "closed_reason_message"?: string;
            "created_at": string;
            "custom_field_answers": Array<CustomFieldAnswer>;
            "custom_text"?: CheckoutCustomTextConfig;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "customer_prefill"?: CheckoutCustomerPrefill;
            "delivery"?: CheckoutDerivedDeliveryResource;
            "delivery_method_ids": Array<string>;
            "delivery_selection_required": boolean;
            "expires_at"?: string;
            "expires_in_seconds"?: number;
            "external_reference_id"?: string;
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            "invoice_id"?: string;
            "is_in_recovery": boolean;
            "legal"?: LegalSettings;
            "merchant_icon"?: Image;
            "merchant_id": string;
            "merchant_logo"?: Image;
            "merchant_name"?: string;
            "merchant_support"?: CheckoutMerchantSupport;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id"?: string;
            "page_origin"?: string;
            "payment_collection"?: PaymentCollection;
            "payment_intent_ids"?: Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            "payment_link_id"?: string;
            "payment_link_image"?: Image;
            "payment_method_save"?: CheckoutPaymentMethodSave;
            "payment_return_url"?: string;
            "payments"?: CheckoutPaymentConfig;
            "prefill"?: CheckoutPrefill;
            "problems": Array<CheckoutProblemResource>;
            "promotion_config"?: CheckoutPromotionConfig;
            "recovery_expires_at"?: string | null;
            "recovery_payment_attempt_id"?: string;
            "redirects"?: CheckoutRedirects;
            "save_payment_method_requires_verification"?: boolean;
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            "setup_collection"?: PaymentCollection;
            "show_flint_mark"?: boolean;
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            "subscription_plan_id"?: string;
            "subscription_terms"?: CheckoutSubscriptionTerms;
            "superseding_checkout_session_id"?: string;
            "supported_actions": Array<"close" | (string & {})>;
            "surface": "hosted" | "embedded" | (string & {});
            "tax"?: CheckoutSessionTax;
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
            "theme"?: CheckoutTheme;
            "tip"?: CheckoutTipConfig;
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            "updated_at": string;
            "url"?: string;
            "version": number;
        };
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "checkout_session.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "checkout_session.updated";
});
/**
 * The `checkout_session.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type CheckoutSessionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "checkout_session.updated". */
    "event_type"?: "checkout_session.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `checkout_session.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type CheckoutSessionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `url`, `recovery_payment_attempt_id`, `recovery_expires_at`,
     * `can_save_payment_method`, `save_payment_method_types`,
     * `save_payment_method_requires_verification`, `can_save_payment_method_with_phone`,
     * `payment_method_save`, `customer_prefill`, `merchant_support`, `merchant_name`,
     * `show_flint_mark`, `merchant_logo`, `merchant_icon`, `payment_link_image`.
     * object.active_payment_attempt (Optional): {@link OrderPaymentAttempt}. An attempt to pay an
     * order. object.buyer_contact (Optional): {@link CheckoutBuyerContact}. Contact the buyer
     * entered in checkout before paying, saved with the session's checkout credential. Separate
     * from merchant-supplied prefill and customer_prefill from the customer record. Omitted until
     * the buyer saves or clears a field. When a checkout session payment omits buyer_contact.email
     * or buyer_contact.phone, Flint uses these values. Flint clears the contact 30 days after the
     * session ends, and when a customer linked to the session is deleted. Buyer contact supplied
     * with payment or saved during checkout. object.buyer_fields (Optional): {@link
     * CheckoutBuyerFields}. What checkout asks the buyer for. Each field you leave out uses your
     * checkout settings. object.can_save_payment_method (Optional): boolean. Whether checkout
     * offers the buyer the option to save the card they type for faster checkout at this merchant.
     * When true and save_payment_method_requires_verification is false, PayOrder accepts
     * save_payment_method: true for one newly collected card. False when the merchant turned
     * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not an
     * available payment option, the checkout collects an invoice, a subscription, or a return, or
     * the checkout acts for no customer and Flint cannot email the buyer a verification code.
     * Returned only to the checkout credential; never in webhook payloads.
     * object.can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save
     * the card they type by giving a US or Canadian mobile phone number with the payment, in
     * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a texted
     * code after paying. True while Flint can send texts and either
     * save_payment_method_requires_verification is true, so the number replaces confirming an
     * email before paying, or the checkout acts for the customer whose email the buyer confirmed
     * with this credential, so the number joins that customer's saved details once the buyer
     * confirms it. Returned only to the checkout credential; never in webhook payloads.
     * object.checkout_session_id (Required): string. Unique identifier for this checkout session,
     * prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". object.client_reference
     * (Required): string or null. The reference the payment link URL or resolve request carried,
     * such as your user ID. `null` when none was sent or checkout did not start from a payment
     * link. Returned only to merchant credentials; omitted for buyer credentials. Set by the
     * buyer's browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
     * 255. object.closed_reason_message (Optional): string. The note supplied when the checkout
     * session was closed. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.custom_field_answers (Required): Array of
     * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the same
     * as the `custom_field_answers` of the session's order. Read-only. Empty when the session
     * didn't start from a payment link, the buyer answered no custom fields, or the order was
     * created before Flint recorded answers here. Returned only to merchant credentials; omitted
     * for buyer credentials. maxItems: 20. object.custom_field_answers[] (Value): {@link
     * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it was when
     * checkout started. `custom_field_type` determines the type of `value`. object.custom_text
     * (Optional): {@link CheckoutCustomTextConfig}. The custom text this session shows in
     * checkout. Custom text shown in checkout: an order summary message and a shipping address
     * label. object.customer (Optional): {@link ExpandedCustomerSummary} or null. Present only
     * when `expand` includes `customer`; `null` when expanded and there is no related customer.
     * object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary
     * fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Optional): string. The customer
     * of the session's order. Omitted when the order has none. A checkout credential issued for
     * this session acts for this customer. Add expand=customer to include the customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.customer_prefill (Optional): {@link
     * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout acts
     * for, with the recipient name on its default shipping address: the customer the merchant
     * created the session for, or the customer whose email the buyer confirmed in it. Present on
     * GET and PATCH responses while the session is open and acts for a customer. Separate from
     * merchant-supplied prefill and buyer_contact saved by the buyer. Returned only to the
     * checkout credential; never in webhook payloads. Details the buyer's checkout can prefill
     * from the customer it acts for. object.delivery (Optional): {@link
     * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing. External
     * pricing reports requires_explicit_quote; reading this field does not request a delivery
     * quote. Omitted when the session is not open, has no order, or Flint cannot read its
     * delivery. The delivery options Flint derived for a checkout as a buyer sees them: choice
     * groups, input requirements, and evaluation status. object.delivery_method_ids (Required):
     * Array of string. Immutable delivery method assignment captured when the checkout was
     * created. object.delivery_method_ids[] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.delivery_selection_required (Required): boolean.
     * Whether the order has at least one remaining quote-resolved fulfillment choice that must be
     * selected before payment. object.expires_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.expires_in_seconds (Optional): integer.
     * The lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
     * which take their deadline from the invoice. Format: int64. object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.gift_card_challenge (Optional): {@link
     * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
     * checkout. Returned on single-session reads, session create and update responses, checkout
     * launch results, and customer verification confirmation results while the session is open and
     * can show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
     * selection results. A URL to load in an iframe when applying a gift card returns
     * `GIFT_CARD_CHALLENGE_REQUIRED`. object.invoice (Optional): {@link ExpandedInvoiceSummary} or
     * null. Present only when `expand` includes `invoice`; `null` when expanded and there is no
     * related invoice. object.invoice.anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An
     * invoice's summary fields, including status, due date, and paid, outstanding, and refunded
     * amounts, returned when the invoice is expanded. object.invoice.anyOf[2] (Value): null.
     * object.invoice_id (Optional): string. ID of the invoice a session of type `invoice` collects
     * payment for. Absent for other types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * object.is_in_recovery (Required): boolean. Whether this terminal session credential is
     * temporarily restricted to recovering its owning payment attempt. object.legal (Optional):
     * {@link LegalSettings}. The terms and policy links this session shows the buyer, and whether
     * the buyer must accept the terms. Legal settings for a checkout: whether buyers must accept
     * terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.merchant_icon (Optional): {@link Image}. The merchant's square icon, shown in browser
     * tabs and compact headers. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
     * the merchant has one; other responses and webhooks omit it. An image with its URL, size, and
     * alt text. object.merchant_id (Required): string. ID of the merchant this resource belongs
     * to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.merchant_logo (Optional): {@link
     * Image}. The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
     * when the merchant has one; other responses and webhooks omit it. An image with its URL,
     * size, and alt text. object.merchant_name (Optional): string. The merchant's business name,
     * which hosted checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant
     * has not set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
     * other responses and webhooks omit it. object.merchant_support (Optional): {@link
     * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support email,
     * phone, and URL the merchant set. Present on GET and PATCH responses when the merchant set at
     * least one of them. Show it where your checkout tells the buyer to contact the merchant, such
     * as an expired or closed checkout, or your receipt. Returned only to the checkout credential;
     * never in webhook payloads. The merchant's support contact. Each field is omitted when the
     * merchant has not set it. object.metadata (Optional): {@link MetadataMap}. Stored
     * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them. object.order
     * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
     * `order`; `null` when expanded and there is no related order. object.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Optional): string. ID of the order the
     * session collects payment for, fixed at creation. Absent when the session has no order.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.page_origin (Optional): string. Origin of
     * the page that renders this embedded checkout. Omitted when not set.
     * object.payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment source. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.payment_intent_ids (Optional): Array of string. IDs of the payment intents for the
     * session's order. Absent when the order has none. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
     * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
     * object.payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
     * summary fields, including amount, status, and capture method, returned when the payment
     * intent is expanded. object.payment_link (Optional): {@link ExpandedPaymentLinkSummary} or
     * null. Present only when `expand` includes `payment_link`; `null` when expanded and there is
     * no related payment link. object.payment_link.anyOf[1] (Value): {@link
     * ExpandedPaymentLinkSummary}. A payment link's summary fields, including name, type, status,
     * and URL, returned when the payment link is expanded. object.payment_link.anyOf[2] (Value):
     * null. object.payment_link_id (Optional): string. ID of the payment link the session was
     * started from. Absent when it was not started from a payment link. Example:
     * "pl_01KEZF7C007WDMA5P9BPZ8J2AM". object.payment_link_image (Optional): {@link Image}. The
     * current image of the payment link that opened this session. Returned by `GET
     * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other responses
     * and webhooks omit it. An image with its URL, size, and alt text. object.payment_method_save
     * (Optional): {@link CheckoutPaymentMethodSave}. The card the buyer saved with this checkout's
     * payment by giving a mobile phone number, and whether they confirmed it. Present on GET and
     * PATCH responses after a payment that paid the order in full, or that was approved for the
     * merchant to capture later, and saved a card this way. A checkout whose payment is approved
     * stays open until the capture. Returned only to the checkout credential; never in webhook
     * payloads. A card the buyer saved with the checkout's payment by giving a mobile phone
     * number. It works for nothing until the buyer confirms it with a code: request one with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
     * confirm_saved_payment_method. object.payment_return_url (Optional): string. Embedded
     * sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
     * payment such as Affirm, whatever the outcome; read the session there to show the result.
     * Required when the session offers affirm. It can't contain credentials, a query string, or a
     * fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters. Format: uri.
     * maxLength: 2048. Example: "https://example.com/receipt". object.payments (Optional): {@link
     * CheckoutPaymentConfig}. Configured payment options for merchant credentials; currently
     * available payment options for the checkout credential. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment. object.prefill (Optional): {@link
     * CheckoutPrefill}. Contact details and addresses to fill in for the buyer, who can change
     * them. For a customer with saved addresses, Flint fills in any address you leave out, and
     * reads include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
     * address sets the order's tax location. Not changed by what the buyer types; for that, read
     * buyer_contact. customer_prefill is what the checkout credential reads from the customer
     * record. object.problems (Required): Array of {@link CheckoutProblemResource}. Named
     * conditions that affect checkout completion. Follow each problem's remediation action instead
     * of reconstructing delivery lifecycle rules in the client. payment_in_progress means another
     * payment for the order must finish before this checkout can complete. When Flint cannot read
     * the checkout's delivery, the read still succeeds and reports delivery_unreadable; its
     * remediation says whether reading the session again can succeed, and its next action's
     * reason_code names the error. object.problems[] (Value): {@link CheckoutProblemResource}. A
     * problem with a checkout session, such as a stale delivery selection, with its `code`,
     * whether it blocks completion, and remediation. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Whether automatic promotions apply to this session and whether the
     * buyer can enter promotion codes. Promotion settings for a checkout: whether automatic
     * promotions apply and whether the buyer can apply promotion codes. object.recovery_expires_at
     * (Optional): string or null. When the restricted payment-attempt recovery window ends. `null`
     * when the session has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
     * credential may recover while is_in_recovery is true. Example:
     * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.redirects (Optional): {@link CheckoutRedirects}.
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url. object.save_payment_method_requires_verification (Optional): boolean.
     * Whether the buyer must confirm their email with a code before the checkout can save their
     * card or use their saved cards. True when can_save_payment_method is true and the checkout
     * acts for no customer for this credential: the merchant created it without one, and either
     * the buyer has not confirmed an email with this credential, or the customer whose email they
     * confirmed has since changed that email or been deleted. A credential other than the one a
     * confirmation returned, such as the hosted checkout link opened on another device, reads
     * true. Send the code with POST
     * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the checkout
     * acts for a customer, and whenever can_save_payment_method is false. Returned only to the
     * checkout credential; never in webhook payloads. object.save_payment_method_types (Optional):
     * Array of string. What save_payment_method keeps, present when can_save_payment_method is
     * true: card, a card the buyer types into checkout. Show the save option with that payment
     * method only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
     * a bank account, or Affirm, through a confirmation token created with setup_future_usage
     * none, still pays, and its payment attempt's payment_method_save reports not_saved. The
     * values can grow. Returned only to the checkout credential; never in webhook payloads. []
     * enum: "card". object.save_payment_method_types[] (Value): string. Value enum: "card".
     * object.setup_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
     * payment method to save. Checkout-credential reads include it only while the session is open.
     * Returned only to the checkout credential; never in webhook payloads. Client-side details for
     * collecting payment from the buyer, such as the Stripe settings to initialize Stripe.js.
     * object.show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
     * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes it.
     * Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks
     * omit it. object.status (Required): string. Where the session is in its lifecycle. Only an
     * `open` session accepts payment. `terminal_reason` says why a session that is not open ended.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * object.subscription_plan_id (Optional): string. ID of the subscription plan a session of
     * type `subscription_plan` signs the buyer up for. Absent for other types. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.subscription_terms (Optional): {@link
     * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
     * Frozen when the session's order was created, so later plan changes do not alter them. Absent
     * when the checkout starts no subscription. Renewal terms a subscription checkout commits the
     * buyer to. Frozen when the session's order was created, so later plan changes do not alter
     * them. object.superseding_checkout_session_id (Optional): string. ID of the session that
     * replaced this one. Present when `terminal_reason` is `superseded`. Example:
     * "cs_01KEZF7C004JRWFW43H037MQRN". object.supported_actions (Required): Array of string.
     * Lifecycle actions Flint accepts now, computed from stored checkout state without checking
     * the caller's permissions. Contains close while open; empty after payment, closure, or
     * expiry. [] enum: "close". object.supported_actions[] (Value): string. Value enum: "close".
     * object.surface (Required): string. How the session is presented to the buyer. A hosted
     * session has a `url` on Flint's checkout page; an embedded one is rendered on your own page.
     * Value enum: "hosted", "embedded". object.tax (Optional): {@link CheckoutSessionTax}. The
     * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
     * session: whether it collects tax and any tax location the merchant fixed.
     * object.terminal_reason (Optional): string. Why the session ended. The checkout credential
     * can still read its own closed or expired session; every other call is refused because the
     * session is not open. order_paid_elsewhere applies only to invalidated sessions when payment
     * succeeds or partially succeeds outside the session. order_mutated applies when an edit
     * closes or completes its order, or ends an invoice, return-resolution, or subscription-plan
     * session. Other merchant edits keep hosted and embedded sessions open. A session already past
     * expires_at ends with expired before the edit is applied. Value enum: "payment_succeeded",
     * "payment_partially_succeeded", "expired", "closed_by_merchant", "order_mutated",
     * "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere", "invoice_voided",
     * "invoice_uncollectible", "invoice_balance_changed". object.theme (Optional): {@link
     * CheckoutTheme}. The theme checkout renders with: your branding settings, with the session's
     * `title`, `primary_color`, and `accent_color` over them. A session sets only those three; the
     * other fields come from branding settings. Omitted when neither sets a value. Colors, corner
     * radius, font family, and title that style a checkout, taken from the session or link theme
     * or the merchant's branding settings. object.tip (Optional): {@link CheckoutTipConfig}. The
     * tip options this session offers the buyer. Tip settings for a checkout: whether tips are
     * enabled, the percent or fixed amount options, the default tip, and custom tips. object.type
     * (Required): string. What the session collects payment for, fixed at creation. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link". object.updated_at
     * (Required): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.url (Optional): string. Hosted checkout URL that carries a one-time launch
     * credential. Send the buyer here to pay. Present only for hosted sessions read with a
     * merchant credential that can manage checkout sessions. Launch results include it for hosted
     * sessions: create, payment-link resolve, and invoice and return-resolution checkout. Omitted
     * for embedded sessions. object.version (Required): integer. Persisted version of this
     * resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `url`,
         * `recovery_payment_attempt_id`, `recovery_expires_at`, `can_save_payment_method`,
         * `save_payment_method_types`, `save_payment_method_requires_verification`,
         * `can_save_payment_method_with_phone`, `payment_method_save`, `customer_prefill`,
         * `merchant_support`, `merchant_name`, `show_flint_mark`, `merchant_logo`,
         * `merchant_icon`, `payment_link_image`. active_payment_attempt (Optional): {@link
         * OrderPaymentAttempt}. An attempt to pay an order. buyer_contact (Optional): {@link
         * CheckoutBuyerContact}. Contact the buyer entered in checkout before paying, saved with
         * the session's checkout credential. Separate from merchant-supplied prefill and
         * customer_prefill from the customer record. Omitted until the buyer saves or clears a
         * field. When a checkout session payment omits buyer_contact.email or buyer_contact.phone,
         * Flint uses these values. Flint clears the contact 30 days after the session ends, and
         * when a customer linked to the session is deleted. Buyer contact supplied with payment or
         * saved during checkout. buyer_fields (Optional): {@link CheckoutBuyerFields}. What
         * checkout asks the buyer for. Each field you leave out uses your checkout settings.
         * can_save_payment_method (Optional): boolean. Whether checkout offers the buyer the
         * option to save the card they type for faster checkout at this merchant. When true and
         * save_payment_method_requires_verification is false, PayOrder accepts
         * save_payment_method: true for one newly collected card. False when the merchant turned
         * checkout.saved_payment_details off, customer accounts are merchant hosted, card is not
         * an available payment option, the checkout collects an invoice, a subscription, or a
         * return, or the checkout acts for no customer and Flint cannot email the buyer a
         * verification code. Returned only to the checkout credential; never in webhook payloads.
         * can_save_payment_method_with_phone (Optional): boolean. Whether the buyer can save the
         * card they type by giving a US or Canadian mobile phone number with the payment, in
         * save_payment_method_phone on POST /v1/orders/{order_id}/pay, and confirming it with a
         * texted code after paying. True while Flint can send texts and either
         * save_payment_method_requires_verification is true, so the number replaces confirming an
         * email before paying, or the checkout acts for the customer whose email the buyer
         * confirmed with this credential, so the number joins that customer's saved details once
         * the buyer confirms it. Returned only to the checkout credential; never in webhook
         * payloads. checkout_session_id (Required): string. Unique identifier for this checkout
         * session, prefixed `cs_`. Example: "cs_01KEZF7C004JRWFW43H037MQRN". client_reference
         * (Required): string or null. The reference the payment link URL or resolve request
         * carried, such as your user ID. `null` when none was sent or checkout did not start from
         * a payment link. Returned only to merchant credentials; omitted for buyer credentials.
         * Set by the buyer's browser, so treat it as a claim, not proof of identity. minLength: 1.
         * maxLength: 255. closed_reason_message (Optional): string. The note supplied when the
         * checkout session was closed. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". custom_field_answers (Required): Array of
         * {@link CustomFieldAnswer}. The buyer's answers to the payment link's custom fields, the
         * same as the `custom_field_answers` of the session's order. Read-only. Empty when the
         * session didn't start from a payment link, the buyer answered no custom fields, or the
         * order was created before Flint recorded answers here. Returned only to merchant
         * credentials; omitted for buyer credentials. maxItems: 20. custom_field_answers[]
         * (Value): {@link CustomFieldAnswer}. One answer to a payment link custom field, with the
         * field as it was when checkout started. `custom_field_type` determines the type of
         * `value`. custom_text (Optional): {@link CheckoutCustomTextConfig}. The custom text this
         * session shows in checkout. Custom text shown in checkout: an order summary message and a
         * shipping address label. customer (Optional): {@link ExpandedCustomerSummary} or null.
         * Present only when `expand` includes `customer`; `null` when expanded and there is no
         * related customer. customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
         * customer's summary fields, returned in place of a customer ID when the customer is
         * expanded. customer.anyOf[2] (Value): null. customer_id (Optional): string. The customer
         * of the session's order. Omitted when the order has none. A checkout credential issued
         * for this session acts for this customer. Add expand=customer to include the customer.
         * Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". customer_prefill (Optional): {@link
         * CheckoutCustomerPrefill}. Contact and default addresses of the customer the checkout
         * acts for, with the recipient name on its default shipping address: the customer the
         * merchant created the session for, or the customer whose email the buyer confirmed in it.
         * Present on GET and PATCH responses while the session is open and acts for a customer.
         * Separate from merchant-supplied prefill and buyer_contact saved by the buyer. Returned
         * only to the checkout credential; never in webhook payloads. Details the buyer's checkout
         * can prefill from the customer it acts for. delivery (Optional): {@link
         * CheckoutDerivedDeliveryResource}. Current delivery choices for Flint-owned pricing.
         * External pricing reports requires_explicit_quote; reading this field does not request a
         * delivery quote. Omitted when the session is not open, has no order, or Flint cannot read
         * its delivery. The delivery options Flint derived for a checkout as a buyer sees them:
         * choice groups, input requirements, and evaluation status. delivery_method_ids
         * (Required): Array of string. Immutable delivery method assignment captured when the
         * checkout was created. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_required (Required): boolean.
         * Whether the order has at least one remaining quote-resolved fulfillment choice that must
         * be selected before payment. expires_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". expires_in_seconds (Optional): integer. The
         * lifetime the session got. expires_at is its deadline. Omitted for invoice sessions,
         * which take their deadline from the invoice. Format: int64. external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". gift_card_challenge (Optional): {@link
         * CheckoutGiftCardChallenge}. Where the buyer completes a gift card challenge for this
         * checkout. Returned on single-session reads, session create and update responses,
         * checkout launch results, and customer verification confirmation results while the
         * session is open and can show the challenge. Omitted from lists, webhooks, expanded
         * resources, and delivery selection results. A URL to load in an iframe when applying a
         * gift card returns `GIFT_CARD_CHALLENGE_REQUIRED`. invoice (Optional): {@link
         * ExpandedInvoiceSummary} or null. Present only when `expand` includes `invoice`; `null`
         * when expanded and there is no related invoice. invoice.anyOf[1] (Value): {@link
         * ExpandedInvoiceSummary}. An invoice's summary fields, including status, due date, and
         * paid, outstanding, and refunded amounts, returned when the invoice is expanded.
         * invoice.anyOf[2] (Value): null. invoice_id (Optional): string. ID of the invoice a
         * session of type `invoice` collects payment for. Absent for other types. Example:
         * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". is_in_recovery (Required): boolean. Whether this
         * terminal session credential is temporarily restricted to recovering its owning payment
         * attempt. legal (Optional): {@link LegalSettings}. The terms and policy links this
         * session shows the buyer, and whether the buyer must accept the terms. Legal settings for
         * a checkout: whether buyers must accept terms, and links to the terms, refund policy,
         * shipping policy, and contract. merchant_icon (Optional): {@link Image}. The merchant's
         * square icon, shown in browser tabs and compact headers. Returned by `GET
         * /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other responses
         * and webhooks omit it. An image with its URL, size, and alt text. merchant_id (Required):
         * string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_logo (Optional): {@link Image}. The
         * merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when the
         * merchant has one; other responses and webhooks omit it. An image with its URL, size, and
         * alt text. merchant_name (Optional): string. The merchant's business name, which hosted
         * checkout shows when `theme.title` is unset. Reads `Merchant` when the merchant has not
         * set a business name. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`;
         * other responses and webhooks omit it. merchant_support (Optional): {@link
         * CheckoutMerchantSupport}. How the buyer can reach the merchant for help: the support
         * email, phone, and URL the merchant set. Present on GET and PATCH responses when the
         * merchant set at least one of them. Show it where your checkout tells the buyer to
         * contact the merchant, such as an expired or closed checkout, or your receipt. Returned
         * only to the checkout credential; never in webhook payloads. The merchant's support
         * contact. Each field is omitted when the merchant has not set it. metadata (Optional):
         * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key,
         * value, and size rules. Caller-owned key-value data stored on a resource. Keys starting
         * with flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status,
         * payment and refund status, and pricing and settlement amounts, returned when the order
         * is expanded. order.anyOf[2] (Value): null. order_id (Optional): string. ID of the order
         * the session collects payment for, fixed at creation. Absent when the session has no
         * order. Example: "ord_01KEZF7C0054GQKJ142A8X367A". page_origin (Optional): string. Origin
         * of the page that renders this embedded checkout. Omitted when not set.
         * payment_collection (Optional): {@link PaymentCollection}. Guidance for collecting a
         * payment source. Checkout-credential reads include it only while the session is open.
         * Returned only to the checkout credential; never in webhook payloads. Client-side details
         * for collecting payment from the buyer, such as the Stripe settings to initialize
         * Stripe.js. payment_intent_ids (Optional): Array of string. IDs of the payment intents
         * for the session's order. Absent when the order has none. payment_intent_ids[] (Value):
         * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional): Array of
         * {@link ExpandedPaymentIntentSummary}. Present only when `expand` includes
         * `payment_intents`: summaries of the payment intents in `payment_intent_ids`.
         * payment_intents[] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's
         * summary fields, including amount, status, and capture method, returned when the payment
         * intent is expanded. payment_link (Optional): {@link ExpandedPaymentLinkSummary} or null.
         * Present only when `expand` includes `payment_link`; `null` when expanded and there is no
         * related payment link. payment_link.anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}.
         * A payment link's summary fields, including name, type, status, and URL, returned when
         * the payment link is expanded. payment_link.anyOf[2] (Value): null. payment_link_id
         * (Optional): string. ID of the payment link the session was started from. Absent when it
         * was not started from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
         * payment_link_image (Optional): {@link Image}. The current image of the payment link that
         * opened this session. Returned by `GET /v1/checkout-sessions/{checkout_session_id}` when
         * that link has an image; other responses and webhooks omit it. An image with its URL,
         * size, and alt text. payment_method_save (Optional): {@link CheckoutPaymentMethodSave}.
         * The card the buyer saved with this checkout's payment by giving a mobile phone number,
         * and whether they confirmed it. Present on GET and PATCH responses after a payment that
         * paid the order in full, or that was approved for the merchant to capture later, and
         * saved a card this way. A checkout whose payment is approved stays open until the
         * capture. Returned only to the checkout credential; never in webhook payloads. A card the
         * buyer saved with the checkout's payment by giving a mobile phone number. It works for
         * nothing until the buyer confirms it with a code: request one with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose
         * confirm_saved_payment_method. payment_return_url (Optional): string. Embedded sessions
         * only. Absolute HTTPS URL on your site where Flint sends the buyer after a redirect
         * payment such as Affirm, whatever the outcome; read the session there to show the result.
         * Required when the session offers affirm. It can't contain credentials, a query string,
         * or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
         * Format: uri. maxLength: 2048. Example: "https://example.com/receipt". payments
         * (Optional): {@link CheckoutPaymentConfig}. Configured payment options for merchant
         * credentials; currently available payment options for the checkout credential. Payment
         * settings for a checkout: the enabled payment options and a note shown with payment.
         * prefill (Optional): {@link CheckoutPrefill}. Contact details and addresses to fill in
         * for the buyer, who can change them. For a customer with saved addresses, Flint fills in
         * any address you leave out, and reads include it. With quick_pay or subscription_plan and
         * automatic tax on, a prefilled address sets the order's tax location. Not changed by what
         * the buyer types; for that, read buyer_contact. customer_prefill is what the checkout
         * credential reads from the customer record. problems (Required): Array of {@link
         * CheckoutProblemResource}. Named conditions that affect checkout completion. Follow each
         * problem's remediation action instead of reconstructing delivery lifecycle rules in the
         * client. payment_in_progress means another payment for the order must finish before this
         * checkout can complete. When Flint cannot read the checkout's delivery, the read still
         * succeeds and reports delivery_unreadable; its remediation says whether reading the
         * session again can succeed, and its next action's reason_code names the error. problems[]
         * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as a
         * stale delivery selection, with its `code`, whether it blocks completion, and
         * remediation. promotion_config (Optional): {@link CheckoutPromotionConfig}. Whether
         * automatic promotions apply to this session and whether the buyer can enter promotion
         * codes. Promotion settings for a checkout: whether automatic promotions apply and whether
         * the buyer can apply promotion codes. recovery_expires_at (Optional): string or null.
         * When the restricted payment-attempt recovery window ends. `null` when the session has no
         * recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * recovery_payment_attempt_id (Optional): string. Payment attempt that this checkout
         * credential may recover while is_in_recovery is true. Example:
         * "opat_01KEZF7C00B5PW9F2R8A4YSH5D". redirects (Optional): {@link CheckoutRedirects}.
         * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
         * payment_return_url. save_payment_method_requires_verification (Optional): boolean.
         * Whether the buyer must confirm their email with a code before the checkout can save
         * their card or use their saved cards. True when can_save_payment_method is true and the
         * checkout acts for no customer for this credential: the merchant created it without one,
         * and either the buyer has not confirmed an email with this credential, or the customer
         * whose email they confirmed has since changed that email or been deleted. A credential
         * other than the one a confirmation returned, such as the hosted checkout link opened on
         * another device, reads true. Send the code with POST
         * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
         * checkout acts for a customer, and whenever can_save_payment_method is false. Returned
         * only to the checkout credential; never in webhook payloads. save_payment_method_types
         * (Optional): Array of string. What save_payment_method keeps, present when
         * can_save_payment_method is true: card, a card the buyer types into checkout. Show the
         * save option with that payment method only. A pay request that sends save_payment_method:
         * true with Apple Pay, Google Pay, a bank account, or Affirm, through a confirmation token
         * created with setup_future_usage none, still pays, and its payment attempt's
         * payment_method_save reports not_saved. The values can grow. Returned only to the
         * checkout credential; never in webhook payloads. [] enum: "card".
         * save_payment_method_types[] (Value): string. Value enum: "card". setup_collection
         * (Optional): {@link PaymentCollection}. Guidance for collecting a payment method to save.
         * Checkout-credential reads include it only while the session is open. Returned only to
         * the checkout credential; never in webhook payloads. Client-side details for collecting
         * payment from the buyer, such as the Stripe settings to initialize Stripe.js.
         * show_flint_mark (Optional): boolean. Whether Flint's hosted pages show the Powered by
         * Flint mark for this merchant. `false` when the merchant's agreement with Flint removes
         * it. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and
         * webhooks omit it. status (Required): string. Where the session is in its lifecycle. Only
         * an `open` session accepts payment. `terminal_reason` says why a session that is not open
         * ended. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
         * subscription_plan_id (Optional): string. ID of the subscription plan a session of type
         * `subscription_plan` signs the buyer up for. Absent for other types. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". subscription_terms (Optional): {@link
         * CheckoutSubscriptionTerms}. Renewal terms a subscription checkout commits the buyer to.
         * Frozen when the session's order was created, so later plan changes do not alter them.
         * Absent when the checkout starts no subscription. Renewal terms a subscription checkout
         * commits the buyer to. Frozen when the session's order was created, so later plan changes
         * do not alter them. superseding_checkout_session_id (Optional): string. ID of the session
         * that replaced this one. Present when `terminal_reason` is `superseded`. Example:
         * "cs_01KEZF7C004JRWFW43H037MQRN". supported_actions (Required): Array of string.
         * Lifecycle actions Flint accepts now, computed from stored checkout state without
         * checking the caller's permissions. Contains close while open; empty after payment,
         * closure, or expiry. [] enum: "close". supported_actions[] (Value): string. Value enum:
         * "close". surface (Required): string. How the session is presented to the buyer. A hosted
         * session has a `url` on Flint's checkout page; an embedded one is rendered on your own
         * page. Value enum: "hosted", "embedded". tax (Optional): {@link CheckoutSessionTax}. The
         * session's tax settings. Omitted when the session sets none. Tax settings of a checkout
         * session: whether it collects tax and any tax location the merchant fixed.
         * terminal_reason (Optional): string. Why the session ended. The checkout credential can
         * still read its own closed or expired session; every other call is refused because the
         * session is not open. order_paid_elsewhere applies only to invalidated sessions when
         * payment succeeds or partially succeeds outside the session. order_mutated applies when
         * an edit closes or completes its order, or ends an invoice, return-resolution, or
         * subscription-plan session. Other merchant edits keep hosted and embedded sessions open.
         * A session already past expires_at ends with expired before the edit is applied. Value
         * enum: "payment_succeeded", "payment_partially_succeeded", "expired",
         * "closed_by_merchant", "order_mutated", "superseded", "order_paid_elsewhere",
         * "invoice_paid_elsewhere", "invoice_voided", "invoice_uncollectible",
         * "invoice_balance_changed". theme (Optional): {@link CheckoutTheme}. The theme checkout
         * renders with: your branding settings, with the session's `title`, `primary_color`, and
         * `accent_color` over them. A session sets only those three; the other fields come from
         * branding settings. Omitted when neither sets a value. Colors, corner radius, font
         * family, and title that style a checkout, taken from the session or link theme or the
         * merchant's branding settings. tip (Optional): {@link CheckoutTipConfig}. The tip options
         * this session offers the buyer. Tip settings for a checkout: whether tips are enabled,
         * the percent or fixed amount options, the default tip, and custom tips. type (Required):
         * string. What the session collects payment for, fixed at creation. Value enum: "order",
         * "quick_pay", "subscription_plan", "invoice", "payment_link". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". url
         * (Optional): string. Hosted checkout URL that carries a one-time launch credential. Send
         * the buyer here to pay. Present only for hosted sessions read with a merchant credential
         * that can manage checkout sessions. Launch results include it for hosted sessions:
         * create, payment-link resolve, and invoice and return-resolution checkout. Omitted for
         * embedded sessions. version (Required): integer. Persisted version of this resource's
         * owned state. Expanded resources and external observations can change independently.
         * Format: uint64. minimum: 1.
         */
        "object": {
            /** An attempt to pay an order. */
            "active_payment_attempt"?: OrderPaymentAttempt;
            /**
             * Contact the buyer entered in checkout before paying, saved with the session's
             * checkout credential. Separate from merchant-supplied prefill and customer_prefill
             * from the customer record. Omitted until the buyer saves or clears a field. When a
             * checkout session payment omits buyer_contact.email or buyer_contact.phone, Flint
             * uses these values. Flint clears the contact 30 days after the session ends, and when
             * a customer linked to the session is deleted. Buyer contact supplied with payment or
             * saved during checkout.
             */
            "buyer_contact"?: CheckoutBuyerContact;
            /**
             * What checkout asks the buyer for. Each field you leave out uses your checkout
             * settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /**
             * Whether checkout offers the buyer the option to save the card they type for faster
             * checkout at this merchant. When true and save_payment_method_requires_verification
             * is false, PayOrder accepts save_payment_method: true for one newly collected card.
             * False when the merchant turned checkout.saved_payment_details off, customer accounts
             * are merchant hosted, card is not an available payment option, the checkout collects
             * an invoice, a subscription, or a return, or the checkout acts for no customer and
             * Flint cannot email the buyer a verification code. Returned only to the checkout
             * credential; never in webhook payloads.
             */
            "can_save_payment_method"?: boolean;
            /**
             * Whether the buyer can save the card they type by giving a US or Canadian mobile
             * phone number with the payment, in save_payment_method_phone on POST
             * /v1/orders/{order_id}/pay, and confirming it with a texted code after paying. True
             * while Flint can send texts and either save_payment_method_requires_verification is
             * true, so the number replaces confirming an email before paying, or the checkout acts
             * for the customer whose email the buyer confirmed with this credential, so the number
             * joins that customer's saved details once the buyer confirms it. Returned only to the
             * checkout credential; never in webhook payloads.
             */
            "can_save_payment_method_with_phone"?: boolean;
            /**
             * Unique identifier for this checkout session, prefixed `cs_`. Example:
             * "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "checkout_session_id": string;
            /**
             * The reference the payment link URL or resolve request carried, such as your user ID.
             * `null` when none was sent or checkout did not start from a payment link. Returned
             * only to merchant credentials; omitted for buyer credentials. Set by the buyer's
             * browser, so treat it as a claim, not proof of identity. minLength: 1. maxLength:
             * 255.
             */
            "client_reference": string | null;
            /** The note supplied when the checkout session was closed. */
            "closed_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The buyer's answers to the payment link's custom fields, the same as the
             * `custom_field_answers` of the session's order. Read-only. Empty when the session
             * didn't start from a payment link, the buyer answered no custom fields, or the order
             * was created before Flint recorded answers here. Returned only to merchant
             * credentials; omitted for buyer credentials. maxItems: 20. [] (Value): {@link
             * CustomFieldAnswer}. One answer to a payment link custom field, with the field as it
             * was when checkout started. `custom_field_type` determines the type of `value`.
             */
            "custom_field_answers": Array<CustomFieldAnswer>;
            /**
             * The custom text this session shows in checkout. Custom text shown in checkout: an
             * order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /**
             * The customer of the session's order. Omitted when the order has none. A checkout
             * credential issued for this session acts for this customer. Add expand=customer to
             * include the customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Contact and default addresses of the customer the checkout acts for, with the
             * recipient name on its default shipping address: the customer the merchant created
             * the session for, or the customer whose email the buyer confirmed in it. Present on
             * GET and PATCH responses while the session is open and acts for a customer. Separate
             * from merchant-supplied prefill and buyer_contact saved by the buyer. Returned only
             * to the checkout credential; never in webhook payloads. Details the buyer's checkout
             * can prefill from the customer it acts for.
             */
            "customer_prefill"?: CheckoutCustomerPrefill;
            /**
             * Current delivery choices for Flint-owned pricing. External pricing reports
             * requires_explicit_quote; reading this field does not request a delivery quote.
             * Omitted when the session is not open, has no order, or Flint cannot read its
             * delivery. The delivery options Flint derived for a checkout as a buyer sees them:
             * choice groups, input requirements, and evaluation status.
             */
            "delivery"?: CheckoutDerivedDeliveryResource;
            /**
             * Immutable delivery method assignment captured when the checkout was created. []
             * (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /**
             * Whether the order has at least one remaining quote-resolved fulfillment choice that
             * must be selected before payment.
             */
            "delivery_selection_required": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "expires_at"?: string;
            /**
             * The lifetime the session got. expires_at is its deadline. Omitted for invoice
             * sessions, which take their deadline from the invoice. Format: int64.
             */
            "expires_in_seconds"?: number;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Where the buyer completes a gift card challenge for this checkout. Returned on
             * single-session reads, session create and update responses, checkout launch results,
             * and customer verification confirmation results while the session is open and can
             * show the challenge. Omitted from lists, webhooks, expanded resources, and delivery
             * selection results. A URL to load in an iframe when applying a gift card returns
             * `GIFT_CARD_CHALLENGE_REQUIRED`.
             */
            "gift_card_challenge"?: CheckoutGiftCardChallenge;
            /**
             * Present only when `expand` includes `invoice`; `null` when expanded and there is no
             * related invoice. anyOf[1] (Value): {@link ExpandedInvoiceSummary}. An invoice's
             * summary fields, including status, due date, and paid, outstanding, and refunded
             * amounts, returned when the invoice is expanded. anyOf[2] (Value): null.
             */
            "invoice"?: ((ExpandedInvoiceSummary) | (null));
            /**
             * ID of the invoice a session of type `invoice` collects payment for. Absent for other
             * types. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
             */
            "invoice_id"?: string;
            /**
             * Whether this terminal session credential is temporarily restricted to recovering its
             * owning payment attempt.
             */
            "is_in_recovery": boolean;
            /**
             * The terms and policy links this session shows the buyer, and whether the buyer must
             * accept the terms. Legal settings for a checkout: whether buyers must accept terms,
             * and links to the terms, refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /**
             * The merchant's square icon, shown in browser tabs and compact headers. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}` when the merchant has one; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "merchant_icon"?: Image;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * The merchant's logo. Returned by `GET /v1/checkout-sessions/{checkout_session_id}`
             * when the merchant has one; other responses and webhooks omit it. An image with its
             * URL, size, and alt text.
             */
            "merchant_logo"?: Image;
            /**
             * The merchant's business name, which hosted checkout shows when `theme.title` is
             * unset. Reads `Merchant` when the merchant has not set a business name. Returned by
             * `GET /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit
             * it.
             */
            "merchant_name"?: string;
            /**
             * How the buyer can reach the merchant for help: the support email, phone, and URL the
             * merchant set. Present on GET and PATCH responses when the merchant set at least one
             * of them. Show it where your checkout tells the buyer to contact the merchant, such
             * as an expired or closed checkout, or your receipt. Returned only to the checkout
             * credential; never in webhook payloads. The merchant's support contact. Each field is
             * omitted when the merchant has not set it.
             */
            "merchant_support"?: CheckoutMerchantSupport;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the session collects payment for, fixed at creation. Absent when the
             * session has no order. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id"?: string;
            /** Origin of the page that renders this embedded checkout. Omitted when not set. */
            "page_origin"?: string;
            /**
             * Guidance for collecting a payment source. Checkout-credential reads include it only
             * while the session is open. Returned only to the checkout credential; never in
             * webhook payloads. Client-side details for collecting payment from the buyer, such as
             * the Stripe settings to initialize Stripe.js.
             */
            "payment_collection"?: PaymentCollection;
            /**
             * IDs of the payment intents for the session's order. Absent when the order has none.
             * [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
             */
            "payment_intent_ids"?: Array<string>;
            /**
             * Present only when `expand` includes `payment_intents`: summaries of the payment
             * intents in `payment_intent_ids`. [] (Value): {@link ExpandedPaymentIntentSummary}. A
             * payment intent's summary fields, including amount, status, and capture method,
             * returned when the payment intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * Present only when `expand` includes `payment_link`; `null` when expanded and there
             * is no related payment link. anyOf[1] (Value): {@link ExpandedPaymentLinkSummary}. A
             * payment link's summary fields, including name, type, status, and URL, returned when
             * the payment link is expanded. anyOf[2] (Value): null.
             */
            "payment_link"?: ((ExpandedPaymentLinkSummary) | (null));
            /**
             * ID of the payment link the session was started from. Absent when it was not started
             * from a payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM".
             */
            "payment_link_id"?: string;
            /**
             * The current image of the payment link that opened this session. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}` when that link has an image; other
             * responses and webhooks omit it. An image with its URL, size, and alt text.
             */
            "payment_link_image"?: Image;
            /**
             * The card the buyer saved with this checkout's payment by giving a mobile phone
             * number, and whether they confirmed it. Present on GET and PATCH responses after a
             * payment that paid the order in full, or that was approved for the merchant to
             * capture later, and saved a card this way. A checkout whose payment is approved stays
             * open until the capture. Returned only to the checkout credential; never in webhook
             * payloads. A card the buyer saved with the checkout's payment by giving a mobile
             * phone number. It works for nothing until the buyer confirms it with a code: request
             * one with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and
             * purpose confirm_saved_payment_method.
             */
            "payment_method_save"?: CheckoutPaymentMethodSave;
            /**
             * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer
             * after a redirect payment such as Affirm, whatever the outcome; read the session
             * there to show the result. Required when the session offers affirm. It can't contain
             * credentials, a query string, or a fragment. Test mode also accepts http loopback
             * URLs. Up to 2,048 characters. Format: uri. maxLength: 2048. Example:
             * "https://example.com/receipt".
             */
            "payment_return_url"?: string;
            /**
             * Configured payment options for merchant credentials; currently available payment
             * options for the checkout credential. Payment settings for a checkout: the enabled
             * payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Contact details and addresses to fill in for the buyer, who can change them. For a
             * customer with saved addresses, Flint fills in any address you leave out, and reads
             * include it. With quick_pay or subscription_plan and automatic tax on, a prefilled
             * address sets the order's tax location. Not changed by what the buyer types; for
             * that, read buyer_contact. customer_prefill is what the checkout credential reads
             * from the customer record.
             */
            "prefill"?: CheckoutPrefill;
            /**
             * Named conditions that affect checkout completion. Follow each problem's remediation
             * action instead of reconstructing delivery lifecycle rules in the client.
             * payment_in_progress means another payment for the order must finish before this
             * checkout can complete. When Flint cannot read the checkout's delivery, the read
             * still succeeds and reports delivery_unreadable; its remediation says whether reading
             * the session again can succeed, and its next action's reason_code names the error. []
             * (Value): {@link CheckoutProblemResource}. A problem with a checkout session, such as
             * a stale delivery selection, with its `code`, whether it blocks completion, and
             * remediation.
             */
            "problems": Array<CheckoutProblemResource>;
            /**
             * Whether automatic promotions apply to this session and whether the buyer can enter
             * promotion codes. Promotion settings for a checkout: whether automatic promotions
             * apply and whether the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * When the restricted payment-attempt recovery window ends. `null` when the session
             * has no recovery window. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "recovery_expires_at"?: string | null;
            /**
             * Payment attempt that this checkout credential may recover while is_in_recovery is
             * true. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
             */
            "recovery_payment_attempt_id"?: string;
            /**
             * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
             * payment_return_url.
             */
            "redirects"?: CheckoutRedirects;
            /**
             * Whether the buyer must confirm their email with a code before the checkout can save
             * their card or use their saved cards. True when can_save_payment_method is true and
             * the checkout acts for no customer for this credential: the merchant created it
             * without one, and either the buyer has not confirmed an email with this credential,
             * or the customer whose email they confirmed has since changed that email or been
             * deleted. A credential other than the one a confirmation returned, such as the hosted
             * checkout link opened on another device, reads true. Send the code with POST
             * /v1/checkout-sessions/{checkout_session_id}/customer-verifications. False while the
             * checkout acts for a customer, and whenever can_save_payment_method is false.
             * Returned only to the checkout credential; never in webhook payloads.
             */
            "save_payment_method_requires_verification"?: boolean;
            /**
             * What save_payment_method keeps, present when can_save_payment_method is true: card,
             * a card the buyer types into checkout. Show the save option with that payment method
             * only. A pay request that sends save_payment_method: true with Apple Pay, Google Pay,
             * a bank account, or Affirm, through a confirmation token created with
             * setup_future_usage none, still pays, and its payment attempt's payment_method_save
             * reports not_saved. The values can grow. Returned only to the checkout credential;
             * never in webhook payloads. [] enum: "card". [] (Value): string. Value enum: "card".
             */
            "save_payment_method_types"?: Array<"card" | (string & {})>;
            /**
             * Guidance for collecting a payment method to save. Checkout-credential reads include
             * it only while the session is open. Returned only to the checkout credential; never
             * in webhook payloads. Client-side details for collecting payment from the buyer, such
             * as the Stripe settings to initialize Stripe.js.
             */
            "setup_collection"?: PaymentCollection;
            /**
             * Whether Flint's hosted pages show the Powered by Flint mark for this merchant.
             * `false` when the merchant's agreement with Flint removes it. Returned by `GET
             * /v1/checkout-sessions/{checkout_session_id}`; other responses and webhooks omit it.
             */
            "show_flint_mark"?: boolean;
            /**
             * Where the session is in its lifecycle. Only an `open` session accepts payment.
             * `terminal_reason` says why a session that is not open ended. Value enum: "open",
             * "paid", "partially_paid", "expired", "closed", "invalidated".
             */
            "status": "open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated" | (string & {});
            /**
             * ID of the subscription plan a session of type `subscription_plan` signs the buyer up
             * for. Absent for other types. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Renewal terms a subscription checkout commits the buyer to. Frozen when the
             * session's order was created, so later plan changes do not alter them. Absent when
             * the checkout starts no subscription. Renewal terms a subscription checkout commits
             * the buyer to. Frozen when the session's order was created, so later plan changes do
             * not alter them.
             */
            "subscription_terms"?: CheckoutSubscriptionTerms;
            /**
             * ID of the session that replaced this one. Present when `terminal_reason` is
             * `superseded`. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
             */
            "superseding_checkout_session_id"?: string;
            /**
             * Lifecycle actions Flint accepts now, computed from stored checkout state without
             * checking the caller's permissions. Contains close while open; empty after payment,
             * closure, or expiry. [] enum: "close". [] (Value): string. Value enum: "close".
             */
            "supported_actions": Array<"close" | (string & {})>;
            /**
             * How the session is presented to the buyer. A hosted session has a `url` on Flint's
             * checkout page; an embedded one is rendered on your own page. Value enum: "hosted",
             * "embedded".
             */
            "surface": "hosted" | "embedded" | (string & {});
            /**
             * The session's tax settings. Omitted when the session sets none. Tax settings of a
             * checkout session: whether it collects tax and any tax location the merchant fixed.
             */
            "tax"?: CheckoutSessionTax;
            /**
             * Why the session ended. The checkout credential can still read its own closed or
             * expired session; every other call is refused because the session is not open.
             * order_paid_elsewhere applies only to invalidated sessions when payment succeeds or
             * partially succeeds outside the session. order_mutated applies when an edit closes or
             * completes its order, or ends an invoice, return-resolution, or subscription-plan
             * session. Other merchant edits keep hosted and embedded sessions open. A session
             * already past expires_at ends with expired before the edit is applied. Value enum:
             * "payment_succeeded", "payment_partially_succeeded", "expired", "closed_by_merchant",
             * "order_mutated", "superseded", "order_paid_elsewhere", "invoice_paid_elsewhere",
             * "invoice_voided", "invoice_uncollectible", "invoice_balance_changed".
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
             * `primary_color`, and `accent_color` over them. A session sets only those three; the
             * other fields come from branding settings. Omitted when neither sets a value. Colors,
             * corner radius, font family, and title that style a checkout, taken from the session
             * or link theme or the merchant's branding settings.
             */
            "theme"?: CheckoutTheme;
            /**
             * The tip options this session offers the buyer. Tip settings for a checkout: whether
             * tips are enabled, the percent or fixed amount options, the default tip, and custom
             * tips.
             */
            "tip"?: CheckoutTipConfig;
            /**
             * What the session collects payment for, fixed at creation. Value enum: "order",
             * "quick_pay", "subscription_plan", "invoice", "payment_link".
             */
            "type": "order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Hosted checkout URL that carries a one-time launch credential. Send the buyer here
             * to pay. Present only for hosted sessions read with a merchant credential that can
             * manage checkout sessions. Launch results include it for hosted sessions: create,
             * payment-link resolve, and invoice and return-resolution checkout. Omitted for
             * embedded sessions.
             */
            "url"?: string;
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<CheckoutSession>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "checkout_session.updated". */
    "event_type"?: "checkout_session.updated";
});
/**
 * The checkout session with any newly issued checkout credential. Hosted launches return url
 * without checkout_auth_token. Embedded launches return checkout_auth_token without url. Customer
 * binding confirmation returns its newly issued credential for either surface. A session in which
 * a buyer completes an order's payment.
 */
export type CheckoutSessionWithSecret = (Exclude<CheckoutSession & object, readonly unknown[]>)
    & ({
    /**
     * Checkout credential. Send it as Authorization: Bearer <checkout_auth_token>. Present on
     * embedded checkout launch and customer binding confirmation. Omitted on hosted checkout
     * launch and when a saved-card confirmation keeps the current credential.
     */
    "checkout_auth_token"?: string;
});
export type CheckoutSessionsCloseParams = (InputValue<CloseCheckoutSessionRequestInput>
    | {
    "expected_version"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsConfirmCustomerVerificationParams = (InputValue<ConfirmCheckoutSessionCustomerVerificationRequestInput>);
export type CheckoutSessionsCreateCustomerVerificationParams = (CreateCheckoutSessionCustomerVerificationRequestInput);
export type CheckoutSessionsCreateDeliveryQuoteParams = (InputValue<CreateCheckoutDeliveryQuoteRequestInput>
    | {
    "basis_delivery_quote_id"?: never;
    "buyer_location"?: never;
    "destination_address"?: never;
    "expected_delivery_selection_id"?: never;
    "inventory_assignments"?: never;
    "method_results"?: never;
    "pickup_location_id"?: never;
    "tier_key"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsCreateDeliverySelectionParams = (InputValue<CreateDeliverySelectionRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsCreateParams = (CreateCheckoutSessionRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsDeleteCurrentDeliverySelectionParams = {
    /**
     * Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to clear
     * whichever selection is current. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "expected_delivery_selection_id"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsGetCurrentDeliverySelectionParams = DisputesAcceptParams;
export type CheckoutSessionsGetDeliveryQuoteParams = DisputesAcceptParams;
export type CheckoutSessionsGetDeliverySelectionParams = DisputesAcceptParams;
export type CheckoutSessionsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: customer, invoice, order,
     * payment_intents, payment_link. Expansion requires checkouts.checkout_sessions.read plus the
     * read scope for each expanded resource. Limits: at most 10 unique expand paths per request.
     * To-many expansions are capped at 20 related objects per path. [] enum: "customer",
     * "invoice", "order", "payment_intents", "payment_link". Value enum: "customer", "invoice",
     * "order", "payment_intents", "payment_link". anyOf[1] (Value): Array of string. [] enum:
     * "customer", "invoice", "order", "payment_intents", "payment_link". anyOf[1][] (Value):
     * string. Value enum: "customer", "invoice", "order", "payment_intents", "payment_link".
     * anyOf[2] (Value): string. Value enum: "customer", "invoice", "order", "payment_intents",
     * "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_intents" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_intents" | "payment_link")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsListDeliverySelectionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by the status each session has when read. A session past expires_at lists as expired
     * even before its stored status is updated, unless payment work keeps it open, in which case
     * it lists as open. A page can hold fewer sessions than page_size. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "open", "paid", "partially_paid",
     * "expired", "closed", "invalidated". Value enum: "open", "paid", "partially_paid", "expired",
     * "closed", "invalidated". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open",
     * "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[1][] (Value): string.
     * Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated". anyOf[2]
     * (Value): string. Value enum: "open", "paid", "partially_paid", "expired", "closed",
     * "invalidated".
     */
    "status"?: InputValue<("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")
        | readonly ("open" | "paid" | "partially_paid" | "expired" | "closed" | "invalidated")[]>;
    /** Filter by Flint order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Filter by Flint payment link ID. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
    "payment_link_id"?: InputValue<string>;
    /** Filter by Flint customer ID. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact match on the Flint subscription plan ID. minLength: 1. pattern:
     * ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: InputValue<string>;
    /**
     * Exact match on the Flint invoice ID. minLength: 1. pattern: ^inv_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id"?: InputValue<string>;
    /**
     * Filter by checkout surface. Sessions created before surfaces existed are hosted. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "hosted", "embedded".
     * Value enum: "hosted", "embedded". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "hosted", "embedded". anyOf[1][] (Value): string. Value enum: "hosted", "embedded". anyOf[2]
     * (Value): string. Value enum: "hosted", "embedded".
     */
    "surface"?: InputValue<("hosted" | "embedded") | readonly ("hosted" | "embedded")[]>;
    /**
     * Filter by checkout session type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     * Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "order", "quick_pay", "subscription_plan",
     * "invoice", "payment_link". anyOf[1][] (Value): string. Value enum: "order", "quick_pay",
     * "subscription_plan", "invoice", "payment_link". anyOf[2] (Value): string. Value enum:
     * "order", "quick_pay", "subscription_plan", "invoice", "payment_link".
     */
    "type"?: InputValue<("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")
        | readonly ("order" | "quick_pay" | "subscription_plan" | "invoice" | "payment_link")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
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
     * Include related objects in the response. Supported expansions: customer, invoice, order,
     * payment_link. Include the requested related resources using scoped batch reads for this
     * page. Each relationship requires its existing target read scopes. Expansion changes the
     * representation without changing pagination tokens. Limits: at most 10 unique expand paths
     * per request. [] enum: "customer", "invoice", "order", "payment_link". Value enum:
     * "customer", "invoice", "order", "payment_link". anyOf[1] (Value): Array of string. [] enum:
     * "customer", "invoice", "order", "payment_link". anyOf[1][] (Value): string. Value enum:
     * "customer", "invoice", "order", "payment_link". anyOf[2] (Value): string. Value enum:
     * "customer", "invoice", "order", "payment_link".
     */
    "expand"?: InputValue<("customer" | "invoice" | "order" | "payment_link")
        | readonly ("customer" | "invoice" | "order" | "payment_link")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type CheckoutSessionsUpdateParams = (InputValue<UpdateCheckoutSessionRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * Merchant defaults for checkout: delivery methods, expiration, payment options, required contact
 * fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettings = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
    /**
     * Whether hosted checkout requires the buyer's billing address before payment. A checkout
     * session or payment link can override it with `buyer_fields`.
     */
    "require_billing_address"?: boolean;
    /**
     * Whether hosted checkout requires the buyer's email address before payment. A checkout
     * session or payment link can override it with `buyer_fields`.
     */
    "require_email"?: boolean;
    /**
     * Whether hosted checkout requires the buyer's phone number before payment. A checkout session
     * or payment link can override it with `buyer_fields`.
     */
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
 * Merchant defaults for checkout: delivery methods, expiration, payment options, required contact
 * fields, promotion codes, recovery email, and saved payment details.
 */
export type CheckoutSettingsRequestInput = {
    /**
     * Default delivery methods for checkout creation requests that omit delivery_method_ids,
     * payment links without delivery_method_ids, and invoice checkouts. The default applies only
     * when the order has items to deliver; otherwise no methods are assigned. Methods and their
     * dependencies must be active when saved. Send [] to clear this default; null is rejected.
     * Each checkout pins its assigned methods when created. [] (Value): string. minLength: 1.
     * Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
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
    /**
     * Whether hosted checkout requires the buyer's billing address before payment. A checkout
     * session or payment link can override it with `buyer_fields`.
     */
    "require_billing_address"?: boolean;
    /**
     * Whether hosted checkout requires the buyer's email address before payment. A checkout
     * session or payment link can override it with `buyer_fields`.
     */
    "require_email"?: boolean;
    /**
     * Whether hosted checkout requires the buyer's phone number before payment. A checkout session
     * or payment link can override it with `buyer_fields`.
     */
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
     * minItems: 1. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a
     * subscription plan or offer. Every option bills the same line prices once per period; prices
     * are not scaled by the interval. For a different price per interval, create separate plans.
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
    /**
     * Identified frozen plan lines with buyer quantity permissions and bounds. [] (Value): object.
     * [].allow_quantity_adjustment (Required): boolean. Whether the buyer may adjust this line
     * quantity. [].max_quantity (Required): integer. Maximum buyer quantity, defaulting to 9999.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. [].min_quantity (Required): integer. Minimum buyer quantity, defaulting to 1.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. [].name (Required): string. The captured line name. [].quantity (Required):
     * integer. The line quantity, before the subscription quantity multiplier. Whole-number
     * quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * [].subscription_plan_line_item_id (Optional): string. The plan line whose terms were
     * captured. Absent when an older snapshot did not record its plan line ID. pattern:
     * ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     * [].unit_price_money (Required): {@link MoneyValue}. The captured unit price. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "line_items": Array<{
        /** Whether the buyer may adjust this line quantity. */
        "allow_quantity_adjustment": boolean;
        /**
         * Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities
         * are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "max_quantity": number;
        /**
         * Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities
         * are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "min_quantity": number;
        /** The captured line name. */
        "name": string;
        /**
         * The line quantity, before the subscription quantity multiplier. Whole-number quantity;
         * fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
         */
        "quantity": number;
        /**
         * The plan line whose terms were captured. Absent when an older snapshot did not record
         * its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
         * "spli_01KEZF7C00H9FGC2KBRF82H87N".
         */
        "subscription_plan_line_item_id"?: string;
        /**
         * The captured unit price. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code.
         */
        "unit_price_money": MoneyValue;
    }>;
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
    /**
     * Flint subscription plan ID the terms come from. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
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
    /**
     * Whether Flint calculates automatic tax on the order it creates for this checkout. Omit to
     * use tax.default_enabled from your settings.
     */
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
/** An optional version fence for permanently closing the gift card. */
export type CloseGiftCardRequest = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** An optional version fence for permanently closing the gift card. */
export type CloseGiftCardRequestInput = CloseGiftCardRequest;
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
/** The request body for: Collect invoice. */
export type CollectInvoiceRequest = {
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /** minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id"?: string;
};
/** The request body for: Collect invoice. */
export type CollectInvoiceRequestInput = CollectInvoiceRequest;
/** A response containing `CollectInvoiceResult` data. */
export type CollectInvoiceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The invoice is the
     * primary resource and expected_version target; invoice_payment_attempt records the collection
     * outcome.
     */
    "data": CollectInvoiceResult;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * The invoice is the primary resource and expected_version target; invoice_payment_attempt records
 * the collection outcome.
 */
export type CollectInvoiceResult = {
    /** A bill issued to a customer. */
    "invoice": Invoice;
    /**
     *  anyOf[1] (Value): {@link InvoicePaymentAttempt}. An attempt to collect payment for an
     * invoice. anyOf[2] (Value): null.
     */
    "invoice_payment_attempt": ((InvoicePaymentAttempt) | (null));
};
/**
 * Commits held quantity, usually once the buyer pays. Commit before expires_at: after the
 * deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status.
 */
export type CommitInventoryReservationRequest = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * Reservation lines this action changes, each with a cumulative target. 1 to 100 lines.
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Reservation line this action changes. minLength: 1. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5". [].target_committed_quantity (Required): integer.
     * Cumulative whole-number quantity that should have reached this target. Format: int64.
     * minimum: 0.
     */
    "lines": Array<{
        /**
         * Reservation line this action changes. minLength: 1. Example:
         * "invrln_01KEZF7C002JCDA729XDSNWGY5".
         */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_committed_quantity": number;
    }>;
};
/**
 * Commits held quantity, usually once the buyer pays. Commit before expires_at: after the
 * deadline, commit returns 409 ACTION_NOT_ALLOWED with reason terminal_status.
 */
export type CommitInventoryReservationRequestInput = CommitInventoryReservationRequest;
/** Completes the fulfillment and records its completion time. */
export type CompleteFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Complete return. */
export type CompleteReturnRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you are completing the Return by hand. Value enum: "manual_completion",
     * "exception_waived", "other".
     */
    "reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Complete return. */
export type CompleteReturnRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you are completing the Return by hand. Value enum: "manual_completion",
     * "exception_waived", "other".
     */
    "reason"?: "manual_completion" | "exception_waived" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CompleteReturnResponse = GetReturnResponse;
/** The request body for: Revoke an API key. */
export type ConfigurationVersionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The code the buyer typed. */
export type ConfirmCheckoutSessionCustomerVerificationRequestInput = {
    /**
     * The six-digit code from the email or the text. minLength: 6. maxLength: 6. pattern:
     * ^[0-9]{6}$.
     */
    "code": string;
};
/** The request body for: Confirm a customer email verification. */
export type ConfirmCustomerVerificationRequestInput = {
    /** The six-digit code Flint sent to the customer's email. minLength: 1. pattern: ^[0-9]{6}$. */
    "code": string;
};
/** The request body for: Confirm an email change. */
export type ConfirmEmailChangeRequest = {
    /**
     * The six-digit code emailed to the current address. Required when
     * `current_email_confirmation_required` is `true`. minLength: 1. pattern: ^[0-9]{6}$.
     */
    "current_email_code"?: string;
    /** The six-digit code emailed to the new address. minLength: 1. pattern: ^[0-9]{6}$. */
    "new_email_code": string;
};
/** The request body for: Confirm an email change. */
export type ConfirmEmailChangeRequestInput = ConfirmEmailChangeRequest;
