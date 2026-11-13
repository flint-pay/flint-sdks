import type { PaymentMethodWithSetup } from './types-46.js';
import type { ResponseMeta } from './types-54.js';
import type { MoneyValue, MoneyValueInput, MetadataRequestInput } from './types-38.js';
import type { PaymentCollection, PaymentErrorSummary, PaymentCollectionStripeElements, PartnerWebhookEnvelope } from './types-44.js';
import type { BrandingSettings } from './types-1.js';
import type { CheckoutSettings } from './types-6.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings } from './types-15.js';
import type { FulfillmentSettings } from './types-25.js';
import type { InventorySettings } from './types-30.js';
import type { InvoiceSettings, LegalSettings } from './types-34.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { PaymentLimitSettings } from './types-45.js';
import type { PaymentSettings } from './types-47.js';
import type { PromotionSettings } from './types-51.js';
import type { SubscriptionSettings } from './types-63.js';
import type { TaxIdentity } from './types-64.js';
import type { TaxSettings, TippingSettings } from './types-65.js';
import type { InputValue } from '../runtime.js';
import type { DisputesAcceptParams, Dimensions, DimensionsRequestInput } from './types-23.js';
import type { UpdateSettingsRequestInput, UpdateShipmentRequestInput, VoidShipmentRequestInput } from './types-68.js';
import type { ExpandedOrderSummary, ExpandedPackageSummary } from './types-24.js';
import type { ReturnResolutionLineItemRequest } from './types-57.js';
import type { CreateShipmentRequestInput } from './types-13.js';
import type { Weight, WeightRequestInput } from './types-69.js';
import type { ConfigurationVersionRequestInput } from './types-7.js';
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCode = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": unknown;
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
}));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCodeInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": "code";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code".
     */
    "credential_type": ("code") & ("code");
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequestInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": unknown;
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
}));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": "recipient_access";
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "recipient_access".
     */
    "credential_type": ("recipient_access") & ("recipient_access");
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id": string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequest = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequestInput = {
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequest = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequestInput = {
    /**
     * The customer to save the payment method for. minLength: 1. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** A response containing `PaymentMethodWithSetup` data. */
export type SavePaymentMethodResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The saved payment
     * method, with `client_setup` when the buyer must still complete processor setup before the
     * payment method can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
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
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequest = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/** Sets the start and end of a service fulfillment's appointment window. */
export type ScheduleFulfillmentRequestInput = {
    /**
     * Whether to send or suppress the buyer notification for this action. Value enum: "send",
     * "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the action occurred, as an RFC 3339 timestamp. On complete, also records completion
     * evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    /**
     * End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at": string | globalThis.Date;
    /**
     * Start of the service appointment window, as an RFC 3339 timestamp. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string | globalThis.Date;
    /** IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * The scopes an authorization decision required and whether `all` or `any` of them were needed,
 * returned in error details.
 */
export type ScopeRequirement = {
    /**
     * How the required scopes are evaluated. all requires every listed scope; any requires at
     * least one listed scope. Example: "all". Value enum: "all", "any".
     */
    "mode": "all" | "any" | (string & {});
    /**
     * Canonical public scope names evaluated for this authorization decision. Example:
     * ["developer.sandboxes.write","accounts.api_keys.write"]. [] (Value): string.
     */
    "scopes": Array<string>;
};
/** A resource the caller can select for a request field. */
export type SelectableErrorResource = {
    /**
     * Amount for this choice when available. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Resource display name when available. */
    "display_name"?: string;
    /**
     * Most recent payment failure when available. A summary of why a payment attempt failed, with
     * a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Payment collection details when available. Client-side details for collecting payment from
     * the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /**
     * Public Flint ID to submit in the refused request field. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id": string;
    /**
     * Stable public resource name for this choice. Example: "order". Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_choice_group",
     * "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote",
     * "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection",
     * "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type": "api_key"
        | "api_request_log"
        | "balance"
        | "balance_transaction"
        | "bundle"
        | "bundle_component"
        | "category"
        | "checkout_session"
        | "checkout_session_customer_verification"
        | "credit_note"
        | "credit_note_allocation"
        | "custom_domain"
        | "customer"
        | "customer_address"
        | "customer_deletion_request"
        | "customer_email_preferences"
        | "customer_session"
        | "customer_tax_exemption"
        | "customer_verification"
        | "delivery_choice_group"
        | "delivery_location_set"
        | "delivery_method"
        | "delivery_profile"
        | "delivery_quote"
        | "delivery_rate"
        | "delivery_rate_callback"
        | "delivery_revocation"
        | "delivery_selection"
        | "delivery_zone"
        | "demo_session"
        | "device"
        | "discount"
        | "dispute"
        | "email_change_request"
        | "environment_grant"
        | "feedback_report"
        | "file"
        | "flint_wallet"
        | "flint_wallet_card"
        | "fraud_warning"
        | "fulfillment"
        | "fulfillment_event"
        | "fulfillment_notification"
        | "gift_card"
        | "gift_card_funding_disposition"
        | "gift_card_load"
        | "gift_card_notification"
        | "gift_card_redemption"
        | "gift_card_transaction"
        | "image"
        | "inventory_adjustment"
        | "inventory_allocation_policy"
        | "inventory_allocation_policy_revision"
        | "inventory_count"
        | "inventory_item"
        | "inventory_level"
        | "inventory_movement"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "inventory_transfer_line"
        | "invoice"
        | "invoice_delivery_attempt"
        | "invoice_late_fee"
        | "invoice_line_item"
        | "invoice_manual_payment"
        | "invoice_payment_attempt"
        | "invoice_payment_term"
        | "location"
        | "merchant"
        | "merchant_billing_balance"
        | "merchant_billing_entry"
        | "merchant_billing_invoice"
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_edit"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "package"
        | "package_item"
        | "partner_app"
        | "partner_app_credential"
        | "partner_app_install"
        | "payment_intent"
        | "payment_link"
        | "payment_link_custom_field"
        | "payment_link_line_item"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payment_split"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "platform_fee"
        | "platform_fee_balance_transaction"
        | "platform_fee_payout"
        | "price_list"
        | "price_list_price"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
        | "reader"
        | "refund"
        | "refund_allocation"
        | "refund_line_item_adjustment"
        | "report"
        | "report_download"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_inspection_line_item"
        | "return_line_item"
        | "return_policy"
        | "return_policy_revision"
        | "return_reason"
        | "return_receipt"
        | "return_receipt_line_item"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "sandbox"
        | "settings"
        | "shipment"
        | "subscription"
        | "subscription_delivery_migration"
        | "subscription_line_item"
        | "subscription_offer"
        | "subscription_payment_retry"
        | "subscription_plan"
        | "subscription_plan_line_item"
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Current public status when available. */
    "status"?: string;
    /**
     * Actions offered for this resource when the request was refused. An empty array means no
     * action is offered; an omitted field means actions were not reported. [] (Value): string.
     */
    "supported_actions"?: Array<string>;
    /**
     * Tip for this choice when available. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/**
 * A payment intent on an order the caller can pick, with its amount, status, and last payment
 * error.
 */
export type SelectableOrderPaymentIntent = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Most recent payment failure, when one is recorded. A summary of why a payment attempt
     * failed, with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * Client setup details for collecting this payment. Client-side details for collecting payment
     * from the buyer, such as the Stripe settings to initialize Stripe.js.
     */
    "payment_collection"?: PaymentCollection;
    /** Flint payment intent ID. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_id": string;
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired".
     */
    "status": "requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {});
    /**
     * Portion of this payment's amount allocated to a tip. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "tip_money": MoneyValue;
};
/** An option and value chosen for a product variant, such as size Large. */
export type SelectedProductOption = {
    /** Identifier of the selected product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". */
    "option_id": string;
    /** Name of the selected product option. */
    "option_name": string;
    /** Identifier of the selected option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". */
    "option_value_id": string;
    /** Selected value of the product option. */
    "value": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequest = {
    /**
     * Current disclosure version from GET /v1/tax-connection. Send only after the seller agrees to
     * every rendered statement. minLength: 1.
     */
    "disclosure_version": string;
};
/**
 * The seller's agreement to the current automatic sales tax disclosure, recorded when connect
 * succeeds.
 */
export type SellerTaxAttestationRequestInput = SellerTaxAttestationRequest;
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequest = {
    /**
     * Receipt email, limited to 254 characters (Unicode code points) after trimming surrounding
     * whitespace. Format: email. minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string;
};
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequestInput = SendOrderReceiptRequest;
/** The request body for: Send a payment receipt. */
export type SendPaymentIntentReceiptRequestInput = {
    /**
     * Email address that receives the receipt. Omit to use the order's receipt address for an
     * order-owned intent, or receipt_email then the customer's email for a standalone intent.
     * Format: email. minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string;
};
/**
 * Details of a service fulfillment: the scheduled start and end, timezone, completion time, and
 * notes.
 */
export type ServiceFulfillmentDetails = {
    /**
     * When the service was completed, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /** Additional instructions or notes for performing the service. */
    "notes"?: string;
    /**
     * Scheduled end of the service, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_end_at"?: string;
    /**
     * Scheduled start of the service, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at"?: string;
    /** Timezone used to display the service appointment. Uses an IANA time zone name. */
    "timezone"?: string;
};
/** The settings for one merchant environment. */
export type Settings = {
    /**
     * Colors, font, and corner radius of hosted checkout, receipts, and links. Omitted until you
     * save a value in this section; effective settings fill in Flint's defaults. A merchant's
     * branding settings: colors, corner radius, and font family. Checkout uses them as its default
     * theme.
     */
    "branding"?: BrandingSettings;
    /**
     * Defaults for hosted checkout. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Merchant defaults for checkout: delivery methods,
     * expiration, payment options, required contact fields, promotion codes, recovery email, and
     * saved payment details.
     */
    "checkout"?: CheckoutSettings;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The customer account where buyers manage their orders, subscriptions, returns, and invoices.
     * Omitted until you save a value in this section; effective settings fill in Flint's defaults.
     * Customer account settings: hosted mode, merchant account URL, presentation, route templates,
     * and what buyers may do to their own subscriptions.
     */
    "customer_account"?: CustomerAccountSettings;
    /**
     * Whether Flint or you send each kind of buyer email. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. For each kind of customer email,
     * whether Flint sends it or the merchant sends it.
     */
    "customer_email_delivery"?: CustomerEmailDeliverySettings;
    /**
     * Fulfillment workflow defaults. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Merchant fulfillment settings, including whether
     * fulfillments require approval (`approval_required`).
     */
    "fulfillment"?: FulfillmentSettings;
    /**
     * Inventory defaults, such as the low stock threshold and what happens when stock can't cover
     * a paid order. Omitted until you save a value in this section; effective settings fill in
     * Flint's defaults. Inventory settings: the `low_stock_threshold`, how inventory failures are
     * handled for each order source, and the `default_routing_source` for requests that omit one.
     */
    "inventory"?: InventorySettings;
    /**
     * Defaults and policies for the invoices you issue. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Merchant defaults for invoices,
     * including numbering prefixes, default memo and footer, collection mode, reminders, and
     * autopay retries.
     */
    "invoices"?: InvoiceSettings;
    /**
     * Legal links and terms acceptance that checkout shows. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Merchant legal links and terms
     * settings: contract, refund policy, shipping policy, and terms of service URLs, and whether
     * buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Your own lower and upper limits on payment amounts. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Optional merchant limits that can
     * lower Flint's payment-option and surface policy limits.
     */
    "payment_limits"?: PaymentLimitSettings;
    /**
     * Statement text for new payments. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Settings for the statement text on new payments.
     */
    "payments"?: PaymentSettings;
    /**
     * Whether automatic promotions and promotion codes apply, and how many discounts one order can
     * stack. Omitted until you save a value in this section; effective settings fill in Flint's
     * defaults. Merchant promotion settings: whether automatic promotions and codes are enabled,
     * and how many promotions can apply to one order.
     */
    "promotions"?: PromotionSettings;
    /**
     * Unique identifier for this settings, prefixed `set_`. Example:
     * "set_01KEZF7C00SA6XKHH6GVZ1JMC2".
     */
    "settings_id": string;
    /**
     * Subscription billing behavior, such as what happens when payment retries run out. Omitted
     * until you save a value in this section; effective settings fill in Flint's defaults.
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email.
     */
    "subscriptions"?: SubscriptionSettings;
    /**
     * Default tax behavior for new checkouts and orders. Omitted until you save a value in this
     * section; effective settings fill in Flint's defaults. Tax settings: whether tax is
     * calculated by default and the default tax categories for line items and delivery charges.
     */
    "tax"?: TaxSettings;
    /**
     * The merchant's legal identity, printed on invoices and credit notes. `null` when none is
     * set. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Flint does not verify IDs. On a customer, automatic tax sends the
     * tax ID for an EU, GB, AU or NZ destination to its tax provider, which can apply a reverse
     * charge; other IDs do not change tax treatment. Tax IDs are an owned collection in display
     * order; replacing the array requires the parent's expected_version. Existing entries retain
     * their document_tax_id; omit an entry to remove it, or omit its ID to add one. anyOf[2]
     * (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * How tips work at checkout. Omitted until you save a value in this section; effective
     * settings fill in Flint's defaults. Tipping settings: percent and fixed tip options, the
     * preselected tip, and whether custom tips are allowed.
     */
    "tipping"?: TippingSettings;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type SettingsGetEffectiveParams = DisputesAcceptParams;
export type SettingsGetParams = DisputesAcceptParams;
/** A response containing `Settings` data. */
export type SettingsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The settings for one
     * merchant environment.
     */
    "data": Settings;
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
export type SettingsUpdateParams = (InputValue<UpdateSettingsRequestInput>)
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
/** Money collected, returned, waived, and still owed on a bill. */
export type SettlementAmounts = {
    /**
     * paid_money minus refunded_money and, on orders, dispute_lost_money, never below zero.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what was collected toward the bill. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** Client guidance for saving a payment method on the merchant's connected account. */
export type SetupCollection = {
    /**
     * Client configuration for saving a payment method through Stripe on the merchant's connected
     * account. Stripe connected account details and Elements configuration for saving a payment
     * method.
     */
    "stripe"?: SetupCollectionStripe;
};
/** Stripe connected account details and Elements configuration for saving a payment method. */
export type SetupCollectionStripe = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. Example:
     * "acct_1234567890".
     */
    "account_id"?: string;
    /**
     * Stripe Elements configuration for the available payment methods and amounts. Stripe Elements
     * collection guidance. Follow next_step in the browser, then submit the result to submit_to
     * through Flint.
     */
    "elements"?: PaymentCollectionStripeElements;
    /** Publishable Stripe key for initializing the payment client. */
    "publishable_key"?: string;
    /** URL the buyer returns to after a redirect payment step. */
    "return_url"?: string;
};
/** A shipment carrying fulfilled order items. */
export type Shipment = {
    /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "handed_off_at"?: string;
    /**
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Order whose items are transported by the shipment. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * Total number of packages attached to the shipment, including voided packages. Format: int32.
     * minimum: 0.
     */
    "package_count": number;
    /**
     * Summaries of the shipment's packages in creation order, returned when the packages
     * relationship is expanded or when the shipment is created with packages. [] (Value): {@link
     * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status,
     * and supported actions, returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /**
     * Return associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id": string;
    /**
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Read-only shipment state derived from the shipment's package states. An empty shipment
     * remains a created draft. - `created`: The shipment leg exists but has not been packed or
     * handed off. - `packed`: The shipment leg is packed and awaiting carrier handoff. -
     * `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The carrier is moving
     * the shipment through its network. - `out_for_delivery`: The shipment is on its final
     * delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "status": "created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /**
     * Lifecycle actions Flint accepts now, independent of permissions. Contains void while the
     * shipment and its fulfillment permit voiding. [] enum: "void". [] (Value): string. Value
     * enum: "void".
     */
    "supported_actions": Array<"void" | (string & {})>;
    /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type ShipmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shipment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shipment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shipment.created";
});
/**
 * The `shipment.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package. object.shipment_id (Required): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional): string.
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
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
 * The `shipment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package. object.shipment_id (Required): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional): string.
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
});
/**
 * Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was
 * handed to the carrier.
 */
export type ShipmentFulfillmentDetails = {
    /**
     * When the shipment was handed to the carrier. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     */
    "timezone"?: string;
    /** End of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "window_end_at"?: string;
    /**
     * Start of the scheduled shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
};
/** A page of `Shipment` objects. */
export type ShipmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Shipment}. A shipment carrying fulfilled order items.
     */
    "data": Array<Shipment>;
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
/** A response containing `Shipment` data. */
export type ShipmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A shipment carrying
     * fulfilled order items.
     */
    "data": Shipment;
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
export type ShipmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Shipment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shipment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "delivered_at"?: string;
            "direction": "outbound" | "return" | (string & {});
            "external_reference_id"?: string;
            "external_system"?: string;
            "fulfillment_id": string;
            "handed_off_at"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_count": number;
            "packages"?: Array<ExpandedPackageSummary>;
            "return_id"?: string;
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            "shipment_id": string;
            "shipped_at"?: string;
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            "supported_actions": Array<"void" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Shipment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shipment.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shipment.updated";
});
/**
 * The `shipment.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package. object.shipment_id (Required): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional): string.
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Shipment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
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
 * The `shipment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.delivered_at (Optional): string. When the
     * shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.direction (Required): string. Whether the shipment sends
     * items to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * object.external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. object.fulfillment_id (Required): string. Fulfillment associated with this
     * shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.handed_off_at (Optional):
     * string. Carrier handoff timestamp for outbound and return shipments, using the recorded
     * shipped_at when no separate handoff timestamp exists. For return shipments, this can satisfy
     * an after_handoff execution gate for the declared return_line_items. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.package_count (Required): integer. Total number of packages attached to the shipment,
     * including voided packages. Format: int32. minimum: 0. object.packages (Optional): Array of
     * {@link ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
     * returned when the packages relationship is expanded or when the shipment is created with
     * packages. object.packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
     * fields, including carrier, tracking, status, and supported actions, returned when the
     * package is expanded. object.return_id (Optional): string. Return associated with this
     * shipment, when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
     * return shipment or package. object.shipment_id (Required): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional): string.
     * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Read-only shipment state derived
     * from the shipment's package states. An empty shipment remains a created draft. - `created`:
     * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg
     * is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.supported_actions (Required): Array of string. Lifecycle
     * actions Flint accepts now, independent of permissions. Contains void while the shipment and
     * its fulfillment permit voiding. [] enum: "void". object.supported_actions[] (Value): string.
     * Value enum: "void". object.updated_at (Required): string. Last update timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * shipment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. Creation timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". delivered_at (Optional): string. When the shipment was
         * delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * direction (Required): string. Whether the shipment sends items to the buyer or returns
         * items to the merchant. Value enum: "outbound", "return". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * Requires external_system. External references are not unique. Use Idempotency-Key for
         * retries. maxLength: 255. Example: "warehouse-1842". external_system (Optional): string.
         * Name of the external system that external_reference_id belongs to. External references
         * are not unique. Use Idempotency-Key for retries. fulfillment_id (Required): string.
         * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
         * handed_off_at (Optional): string. Carrier handoff timestamp for outbound and return
         * shipments, using the recorded shipped_at when no separate handoff timestamp exists. For
         * return shipments, this can satisfy an after_handoff execution gate for the declared
         * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". metadata
         * (Optional): {@link MetadataMap}. Caller-owned key-value metadata associated with the
         * shipment. Caller-owned key-value data stored on a resource. Keys starting with flint_
         * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput
         * and MetadataPatchInput; maps written before those limits may not satisfy them. order
         * (Optional): {@link ExpandedOrderSummary} or null. Order summary returned when the order
         * relationship is expanded. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. Order whose items are
         * transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_count
         * (Required): integer. Total number of packages attached to the shipment, including voided
         * packages. Format: int32. minimum: 0. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Summaries of the shipment's packages in creation order,
         * returned when the packages relationship is expanded or when the shipment is created with
         * packages. packages[] (Value): {@link ExpandedPackageSummary}. A package's summary
         * fields, including carrier, tracking, status, and supported actions, returned when the
         * package is expanded. return_id (Optional): string. Return associated with this shipment,
         * when its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
         * return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnResolutionLineItemRequest}. A return line and the quantity placed in a
         * return shipment or package. shipment_id (Required): string. Stable identifier of the
         * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipped_at (Optional): string. When
         * the shipment was shipped, in RFC3339 format. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Read-only shipment state derived from
         * the shipment's package states. An empty shipment remains a created draft. - `created`:
         * The shipment leg exists but has not been packed or handed off. - `packed`: The shipment
         * leg is packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to
         * the carrier. - `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". supported_actions (Required):
         * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
         * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions[] (Value): string. Value enum: "void". updated_at (Required): string.
         * Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. Monotonic shipment version for expected_version checks. Format:
         * uint64. minimum: 1.
         */
        "object": {
            /** Creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "delivered_at"?: string;
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return".
             */
            "direction": "outbound" | "return" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries.
             */
            "external_system"?: string;
            /**
             * Fulfillment associated with this shipment. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "handed_off_at"?: string;
            /**
             * Caller-owned key-value metadata associated with the shipment. Caller-owned key-value
             * data stored on a resource. Keys starting with flint_ are reserved for Flint and are
             * not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
             * written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * Format: int32. minimum: 0.
             */
            "package_count": number;
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. [] (Value):
             * {@link ExpandedPackageSummary}. A package's summary fields, including carrier,
             * tracking, status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * Return associated with this shipment, when its direction is return. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * Return lines and quantities allocated to this return shipment. [] (Value): {@link
             * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
            /** Stable identifier of the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
            "shipment_id": string;
            /**
             * When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "shipped_at"?: string;
            /**
             * Read-only shipment state derived from the shipment's package states. An empty
             * shipment remains a created draft. - `created`: The shipment leg exists but has not
             * been packed or handed off. - `packed`: The shipment leg is packed and awaiting
             * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
             * `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided".
             */
            "status": "created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {});
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". [] (Value):
             * string. Value enum: "void".
             */
            "supported_actions": Array<"void" | (string & {})>;
            /** Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Shipment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
});
export type ShipmentsCreateParams = (CreateShipmentRequestInput)
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
export type ShipmentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order, packages. Expansion
     * requires commerce.orders.read. Limits: at most 10 unique expand paths per request. To-many
     * expansions are capped at 20 related objects per path. [] enum: "order", "packages". Value
     * enum: "order", "packages". anyOf[1] (Value): Array of string. [] enum: "order", "packages".
     * anyOf[1][] (Value): string. Value enum: "order", "packages". anyOf[2] (Value): string. Value
     * enum: "order", "packages".
     */
    "expand"?: InputValue<("order" | "packages") | readonly ("order" | "packages")[]>;
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
export type ShipmentsListParams = {
    /**
     * Optional order ID filter. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Optional fulfillment ID filter. pattern: ^ful_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact match on the shipment's `external_reference_id`. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across shipment ID and external reference ID. Text fields match any part of the
     * value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and
     * need the type prefix, such as shp_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by linked Return ID. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Inclusive lower bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on handed_off_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "handed_off_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by package-derived shipment status. Values within this filter are combined with OR.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "exception", "returned", "voided". Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[1][] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided". anyOf[2] (Value): string. Value enum: "created",
     * "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "exception", "returned", "voided".
     */
    "status"?: InputValue<("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")
        | readonly ("created"
        | "packed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided")[]>;
    /**
     * Filter by shipment direction. Values within this filter are combined with OR. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "outbound", "return".
     * Value enum: "outbound", "return". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "outbound", "return". anyOf[1][] (Value): string. Value enum: "outbound", "return". anyOf[2]
     * (Value): string. Value enum: "outbound", "return".
     */
    "direction"?: InputValue<("outbound" | "return") | readonly ("outbound" | "return")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
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
export type ShipmentsUpdateParams = (InputValue<UpdateShipmentRequestInput>)
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
export type ShipmentsVoidParams = (InputValue<VoidShipmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
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
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequest = {
    /**
     * Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event
     * type. minLength: 1. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** The request body for: Sign a sandbox webhook delivery. */
export type SignWebhookEndpointDeliveryRequestInput = SignWebhookEndpointDeliveryRequest;
/** Signed monetary amount represented as integer minor units plus an ISO 4217 currency code. */
export type SignedMoneyRequestInput = {
    /**
     * Signed amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "amount": `${bigint}` | bigint;
    /**
     * ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
};
/**
 * A transient signed delivery for the caller's sandbox endpoint. Forward body bytes and headers
 * unchanged; this is not a persisted delivery or HTTP dispatch.
 */
export type SignedWebhookEndpointDelivery = {
    /** Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding. */
    "body": string;
    /**
     * JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Application headers from the real sender, including Authorization and any configured HMAC
     * signature. Never log these credentials. * (Value): string.
     */
    "headers": Record<string, string>;
    /**
     * The authorized sandbox endpoint and JWT audience. Example:
     * "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     */
    "webhook_endpoint_id": string;
    /**
     * The event ID, also sent as webhook-id for receiver deduplication. Example:
     * "whev_01KEZF7C00362MS3HV970TRZGS".
     */
    "webhook_event_id": string;
};
/** A response containing `SignedWebhookEndpointDelivery` data. */
export type SignedWebhookEndpointDeliveryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A transient signed
     * delivery for the caller's sandbox endpoint. Forward body bytes and headers unchanged; this
     * is not a persisted delivery or HTTP dispatch.
     */
    "data": SignedWebhookEndpointDelivery;
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
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequest = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated" | (string & {});
};
/** The request body for: Simulate a dispute outcome. */
export type SimulateDisputeRequestInput = {
    /**
     * The ruling to simulate. `won` and `lost` decide a chargeback; `inquiry_closed` and
     * `escalated` decide an inquiry. Value enum: "won", "lost", "inquiry_closed", "escalated".
     */
    "outcome": "won" | "lost" | "inquiry_closed" | "escalated";
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequest = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover" | (string & {});
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds" | (string & {});
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValue;
};
/** Sandbox only. Presents a test card on a simulated reader. */
export type SimulateReaderRequestInput = {
    /**
     * The brand of the test card to present. Defaults to `visa`. Declines present Visa test cards
     * whatever brand you send. Value enum: "visa", "mastercard", "amex", "discover".
     */
    "card_brand"?: "visa" | "mastercard" | "amex" | "discover";
    /**
     * The buyer's and issuer's decision. Value enum: "approved", "declined", "insufficient_funds".
     */
    "outcome": "approved" | "declined" | "insufficient_funds";
    /**
     * The tip the buyer picks, when the payment was sent with the tip screen on. USD only.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "tip_money"?: MoneyValueInput;
};
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreated = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputCreatedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created".
     */
    "status": "created";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "shipped_at"?: never;
}))
    & (({
    "buyer_notification_behavior"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShipped = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
});
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Carrier that handles the package. minLength: 1. */
    "carrier"?: string;
    /**
     * Dimensions of the package. Package or item dimensions as `length`, `width`, and `height` in
     * the given `unit`.
     */
    "dimensions"?: DimensionsRequestInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Carrier's code for the shipping service used. minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** Additional explanation of the package's starting status. minLength: 1. */
    "status_reason"?: string;
    /** Carrier tracking number for the package. minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * Weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration.
     */
    "weight"?: WeightRequestInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/** The request body for: Skip subscription cycle. */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Attribution
     * only; this does not apply the store's buyer limits. To enforce them, use a customer session
     * on POST /v1/me/subscriptions/{subscription_id}/skip-cycle. Flint's skip email says the buyer
     * skipped for buyer, and that the store skipped otherwise. Default: "merchant". Value enum:
     * "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/**
 * A fixed allocation referencing a read-only reversal nested in a payment split. This reference
 * has no independent lifecycle or write routes.
 */
export type SplitReversalReference = {
    /**
     * The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** The split whose seller share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8". */
    "payment_split_id": string;
    /**
     * The reversal in PaymentSplit.reversals that records recovery status. Example:
     * "psrev_01KEZF7C00XC1HA7S8YCQJDBDM".
     */
    "payment_split_reversal_id": string;
};
