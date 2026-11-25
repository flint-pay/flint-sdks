import type { CreateDeveloperSandboxResult } from './types-9.js';
import type {
    ResponseMeta,
    ReturnHandoffRequirementLineItem,
    ReturnHandoffRequirementLineItemPreviousAttributes
} from './types-63.js';
import type { CreateSandboxRequestInput, CreateShipmentRequestInput } from './types-14.js';
import type { InputValue } from '../runtime.js';
import type { PartnerAppsListParams, PartnerWebhookEnvelope } from './types-50.js';
import type { PaymentMethodWithSetup } from './types-53.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type {
    PaymentCollection,
    PaymentErrorSummary,
    PaymentCollectionPreviousAttributes,
    PaymentErrorSummaryPreviousAttributes,
    PaymentCollectionStripeElements,
    PaymentCollectionStripeElementsPreviousAttributes
} from './types-51.js';
import type { BrandingSettings } from './types-1.js';
import type { CheckoutSettings, CheckoutTaxConfig, CheckoutTipConfig, CheckoutTipConfigPreviousAttributes } from './types-7.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings } from './types-16.js';
import type { FulfillmentSettings } from './types-28.js';
import type { InventorySettings, InventoryRoutingSourcePreviousAttributes } from './types-34.js';
import type { InvoiceSettings } from './types-38.js';
import type { LegalSettings } from './types-39.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-43.js';
import type { PaymentLimitSettings } from './types-52.js';
import type { PaymentSettings } from './types-54.js';
import type { PromotionSettings } from './types-59.js';
import type { ReceiptSettings } from './types-60.js';
import type { SubscriptionSettings, SubscriptionTaxPreviousAttributes } from './types-73.js';
import type { TaxIdentity, TaxSettings } from './types-75.js';
import type { TippingSettings } from './types-76.js';
import type {
    DisputesAcceptParams,
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedOrderSummaryPreviousAttributes,
    ExpandedPackageSummaryPreviousAttributes
} from './types-26.js';
import type { UpdateSettingsRequestInput, UpdateShipmentRequestInput, VoidShipmentRequestInput } from './types-79.js';
import type {
    CheckoutBuyerFields,
    CheckoutCustomTextConfig,
    CheckoutPaymentConfig,
    CheckoutPromotionConfig,
    CheckoutRedirects,
    CheckoutBuyerFieldsPreviousAttributes,
    CheckoutCustomTextConfigPreviousAttributes,
    CheckoutLegalConfigPreviousAttributes,
    CheckoutPaymentConfigPreviousAttributes,
    CheckoutPromotionConfigPreviousAttributes,
    CheckoutRedirectsPreviousAttributes
} from './types-6.js';
import type { ImageAttachment, ImageAttachmentPreviousAttributes } from './types-31.js';
import type { InventoryRoutingSource } from './types-33.js';
/** A response containing `CreateDeveloperSandboxResult` data. */
export type SandboxWithAPIKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The created sandbox is
     * the primary resource, with the API key and one-time secret_key when issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
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
export type SandboxesCreateParams = (CreateSandboxRequestInput);
export type SandboxesDeleteParams = {};
export type SandboxesGetParams = {};
export type SandboxesListParams = PartnerAppsListParams;
export type SandboxesResetParams = {};
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequest = ({
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. */
    "code"?: string;
    /**
     * The proof that the buyer can use the card: its code, or the private recipient link they
     * received. Value enum: "code", "recipient_access".
     */
    "credential_type": "code" | "recipient_access" | (string & {});
    /**
     * ID of the recipient access grant, from the path of the private recipient link. minLength: 1.
     * Example: "gcg_01KEZF7C00BTDW4CJQTB38Q828".
     */
    "grant_id"?: string;
    /** Token from the fragment of the private recipient link. minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
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
    /**
     * Your internal note explaining this transition. Not included in buyer emails. minLength: 1.
     * maxLength: 500.
     */
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
     * "environment_grant", "file", "flint_wallet", "flint_wallet_card", "fraud_warning",
     * "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card",
     * "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "license_key", "license_key_activation", "license_key_pool",
     * "license_key_pool_key", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_attempt",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout",
     * "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "shop", "shop_listing",
     * "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_calculation_callback", "tax_connection",
     * "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
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
        | "license_key"
        | "license_key_activation"
        | "license_key_pool"
        | "license_key_pool_key"
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
        | "payment_attempt"
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
        | "remembered_buyer"
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
        | "shop"
        | "shop_listing"
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
export type SelectableOrderPaymentIntentPreviousAttributes = {
    /**
     * The amount requested from the buyer, including any tip_money. Capturing doesn't change it:
     * after a partial capture it still shows the requested amount, and captured_money shows what
     * was collected. On a standalone payment intent, PATCH can change it only before the first
     * confirmation attempt. An amount_money or tip_money change that leaves too little for stored
     * splits returns LIMIT_EXCEEDED at the changed field with minimum_money. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Most recent payment failure, when one is recorded. anyOf[1] (Value): {@link
     * PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
     */
    "last_payment_error"?: ((PaymentErrorSummaryPreviousAttributes) | (null));
    /**
     * Client setup details for collecting this payment. anyOf[1] (Value): {@link
     * PaymentCollectionPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_collection"?: ((PaymentCollectionPreviousAttributes) | (null));
    /**
     * Flint payment intent ID. anyOf[1] (Value): string. Flint payment intent ID. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R". anyOf[2] (Value): null.
     */
    "payment_intent_id"?: ((string) | (null));
    /**
     * Lifecycle status. requires_payment_method covers both a new payment intent and one whose
     * last attempt failed, so read last_payment_error with it. succeeded, canceled, and expired
     * are final. Refunds and disputes never change status. Value enum: "requires_payment_method",
     * "requires_confirmation", "requires_action", "processing", "requires_capture", "canceled",
     * "succeeded", "expired". anyOf[1] (Value): string. Lifecycle status. requires_payment_method
     * covers both a new payment intent and one whose last attempt failed, so read
     * last_payment_error with it. succeeded, canceled, and expired are final. Refunds and disputes
     * never change status. Value enum: "requires_payment_method", "requires_confirmation",
     * "requires_action", "processing", "requires_capture", "canceled", "succeeded", "expired".
     * anyOf[2] (Value): null.
     */
    "status"?: (("requires_payment_method"
        | "requires_confirmation"
        | "requires_action"
        | "processing"
        | "requires_capture"
        | "canceled"
        | "succeeded"
        | "expired"
        | (string & {}))
        | (null));
    /**
     * Portion of this payment's amount allocated to a tip. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "tip_money"?: ((MoneyValuePreviousAttributes) | (null));
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
export type SelectedProductOptionPreviousAttributes = {
    /**
     * Identifier of the selected product option. anyOf[1] (Value): string. Identifier of the
     * selected product option. Example: "opt_01KEZF7C008R5Q9BG9B4B4KQH8". anyOf[2] (Value): null.
     */
    "option_id"?: ((string) | (null));
    /**
     * Name of the selected product option. anyOf[1] (Value): string. Name of the selected product
     * option. anyOf[2] (Value): null.
     */
    "option_name"?: ((string) | (null));
    /**
     * Identifier of the selected option value. anyOf[1] (Value): string. Identifier of the
     * selected option value. Example: "optv_01KEZF7C0078SVZ1T7PVRXQK7F". anyOf[2] (Value): null.
     */
    "option_value_id"?: ((string) | (null));
    /**
     * Selected value of the product option. anyOf[1] (Value): string. Selected value of the
     * product option. anyOf[2] (Value): null.
     */
    "value"?: ((string) | (null));
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
     * whitespace. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: email.
     * minLength: 1. maxLength: 254. Example: "buyer@example.com".
     */
    "email"?: string;
};
/** The request body for: Send an order receipt. */
export type SendOrderReceiptRequestInput = SendOrderReceiptRequest;
/** The request body for: Send a payment receipt. */
export type SendPaymentIntentReceiptRequestInput = {
    /**
     * Email address that receives the receipt. Omit to use receipt_email, then the order's receipt
     * address for an order-owned intent or the customer's email for a standalone intent. The local
     * part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1.
     * maxLength: 254. Example: "buyer@example.com".
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
export type ServiceFulfillmentDetailsPreviousAttributes = {
    /**
     * When the service was completed, in RFC3339 format. anyOf[1] (Value): string. When the
     * service was completed, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "completed_at"?: ((string) | (null));
    /**
     * Additional instructions or notes for performing the service. anyOf[1] (Value): string.
     * Additional instructions or notes for performing the service. anyOf[2] (Value): null.
     */
    "notes"?: ((string) | (null));
    /**
     * Scheduled end of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled end of
     * the service, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
     * (Value): null.
     */
    "scheduled_end_at"?: ((string) | (null));
    /**
     * Scheduled start of the service, in RFC3339 format. anyOf[1] (Value): string. Scheduled start
     * of the service, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "scheduled_start_at"?: ((string) | (null));
    /**
     * Timezone used to display the service appointment. Uses an IANA time zone name. anyOf[1]
     * (Value): string. Timezone used to display the service appointment. Uses an IANA time zone
     * name. anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
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
     * Statement text for new payments and Stripe's current decision about the card statement name.
     * Settings for the statement text on new payments.
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
     * Merchant-provided text on payment receipt emails and PDFs. Omitted until you save a value in
     * this section; effective settings fill in Flint's defaults. Merchant-provided text on payment
     * receipt emails and PDFs.
     */
    "receipts"?: ReceiptSettings;
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
     * The merchant's legal identity, printed on invoices, credit notes, and receipts. `null` when
     * none is set. anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity
     * displayed on invoices and credit notes. Flint does not verify IDs. On a customer, automatic
     * tax sends the tax ID for an EU, GB, AU or NZ destination to its tax provider, which can
     * apply a reverse charge; other IDs do not change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
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
     * Money returned to the buyer from what was collected toward the bill. On orders, this counts
     * successful refunds. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
export type SettlementAmountsPreviousAttributes = {
    /**
     * Money still owed on the bill, never below zero. Refunds return money already collected and
     * do not add to it. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value):
     * null.
     */
    "outstanding_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Money collected toward the bill, net of reversed payments. Excludes written-off debt. On
     * orders, dispute losses do not reduce this amount. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "paid_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Money returned to the buyer from what was collected toward the bill. On orders, this counts
     * successful refunds. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "refunded_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Owed money waived as uncollectible. Reduces outstanding_money without increasing paid_money
     * or net_collected_money. Cannot be refunded or used to fund an exchange. anyOf[1] (Value):
     * {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "written_off_money"?: ((MoneyValuePreviousAttributes) | (null));
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
export type SetupCollectionPreviousAttributes = {
    /**
     * Client configuration for saving a payment method through Stripe on the merchant's connected
     * account. anyOf[1] (Value): {@link SetupCollectionStripePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "stripe"?: ((SetupCollectionStripePreviousAttributes) | (null));
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
export type SetupCollectionStripePreviousAttributes = {
    /**
     * Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. anyOf[1]
     * (Value): string. Stripe connected account ID to pass as stripeAccount when initializing
     * Stripe.js. Example: "acct_1234567890". anyOf[2] (Value): null.
     */
    "account_id"?: ((string) | (null));
    /**
     * Stripe Elements configuration for the available payment methods and amounts. anyOf[1]
     * (Value): {@link PaymentCollectionStripeElementsPreviousAttributes}. anyOf[2] (Value): null.
     */
    "elements"?: ((PaymentCollectionStripeElementsPreviousAttributes) | (null));
    /**
     * Publishable Stripe key for initializing the payment client. anyOf[1] (Value): string.
     * Publishable Stripe key for initializing the payment client. anyOf[2] (Value): null.
     */
    "publishable_key"?: ((string) | (null));
    /**
     * URL the buyer returns to after a redirect payment step. anyOf[1] (Value): string. URL the
     * buyer returns to after a redirect payment step. anyOf[2] (Value): null.
     */
    "return_url"?: ((string) | (null));
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
     * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
     * shipment or package.
     */
    "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
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
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
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
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
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
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
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
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
export type ShipmentFulfillmentDetailsPreviousAttributes = {
    /**
     * When the shipment was handed to the carrier. anyOf[1] (Value): string. When the shipment was
     * handed to the carrier. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
     * null.
     */
    "shipped_at"?: ((string) | (null));
    /**
     * IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. anyOf[1] (Value):
     * string. IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     * anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
    /**
     * End of the scheduled shipping window. anyOf[1] (Value): string. End of the scheduled
     * shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_end_at"?: ((string) | (null));
    /**
     * Start of the scheduled shipping window. anyOf[1] (Value): string. Start of the scheduled
     * shipping window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "window_start_at"?: ((string) | (null));
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
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "delivered_at"?: ((string) | (null));
            "direction"?: (("outbound" | "return" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "external_system"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "handed_off_at"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "package_count"?: ((number) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_line_items"?: ((Array<ReturnHandoffRequirementLineItemPreviousAttributes>) | (null));
            "shipment_id"?: ((string) | (null));
            "shipped_at"?: ((string) | (null));
            "status"?: (("created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"void" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "created_at"?: ((string) | (null));
            "delivered_at"?: ((string) | (null));
            "direction"?: (("outbound" | "return" | (string & {})) | (null));
            "external_reference_id"?: ((string) | (null));
            "external_system"?: ((string) | (null));
            "fulfillment_id"?: ((string) | (null));
            "handed_off_at"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "package_count"?: ((number) | (null));
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            "return_id"?: ((string) | (null));
            "return_line_items"?: ((Array<ReturnHandoffRequirementLineItemPreviousAttributes>) | (null));
            "shipment_id"?: ((string) | (null));
            "shipped_at"?: ((string) | (null));
            "status"?: (("created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {}))
                | (null));
            "supported_actions"?: ((Array<"void" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
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
     * previous_attributes.created_at (Optional): string or null. Creation timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.delivered_at (Optional): string or null. When the shipment was
     * delivered, in RFC3339 format. previous_attributes.delivered_at.anyOf[1] (Value): string.
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.delivered_at.anyOf[2] (Value): null.
     * previous_attributes.direction (Optional): string or null. Whether the shipment sends items
     * to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * previous_attributes.direction.anyOf[1] (Value): string. Whether the shipment sends items to
     * the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * previous_attributes.direction.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Requires external_system. External references are
     * not unique. Use Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.external_system (Optional): string or null. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. previous_attributes.external_system.anyOf[1] (Value): string.
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. previous_attributes.external_system.anyOf[2]
     * (Value): null. previous_attributes.fulfillment_id (Optional): string or null. Fulfillment
     * associated with this shipment. previous_attributes.fulfillment_id.anyOf[1] (Value): string.
     * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.handed_off_at
     * (Optional): string or null. Carrier handoff timestamp for outbound and return shipments,
     * using the recorded shipped_at when no separate handoff timestamp exists. For return
     * shipments, this can satisfy an after_handoff execution gate for the declared
     * return_line_items. previous_attributes.handed_off_at.anyOf[1] (Value): string. Carrier
     * handoff timestamp for outbound and return shipments, using the recorded shipped_at when no
     * separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff
     * execution gate for the declared return_line_items. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.handed_off_at.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
     * metadata associated with the shipment. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order
     * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned
     * when the order relationship is expanded. Present only when `expand` includes `order`; `null`
     * when expanded and there is no related order. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. Order whose items are
     * transported by the shipment. previous_attributes.order_id.anyOf[1] (Value): string. Order
     * whose items are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.package_count
     * (Optional): integer or null. Total number of packages attached to the shipment, including
     * voided packages. previous_attributes.package_count.anyOf[1] (Value): integer. Total number
     * of packages attached to the shipment, including voided packages. Format: int32. minimum: 0.
     * previous_attributes.package_count.anyOf[2] (Value): null. previous_attributes.packages
     * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Summaries of
     * the shipment's packages in creation order, returned when the packages relationship is
     * expanded or when the shipment is created with packages.
     * previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Summaries of the shipment's packages in creation
     * order, returned when the packages relationship is expanded or when the shipment is created
     * with packages. previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.return_id (Optional): string or null. Return associated with this
     * shipment, when its direction is return. previous_attributes.return_id.anyOf[1] (Value):
     * string. Return associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_line_items (Optional): Array of {@link
     * ReturnHandoffRequirementLineItemPreviousAttributes} or null. Return lines and quantities
     * allocated to this return shipment. previous_attributes.return_line_items.anyOf[1] (Value):
     * Array of {@link ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and
     * quantities allocated to this return shipment.
     * previous_attributes.return_line_items.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementLineItemPreviousAttributes}.
     * previous_attributes.return_line_items.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. Stable identifier of the
     * shipment. previous_attributes.shipment_id.anyOf[1] (Value): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * previous_attributes.shipment_id.anyOf[2] (Value): null. previous_attributes.shipped_at
     * (Optional): string or null. When the shipment was shipped, in RFC3339 format.
     * previous_attributes.shipped_at.anyOf[1] (Value): string. When the shipment was shipped, in
     * RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.shipped_at.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Read-only shipment state derived from the shipment's package
     * states. An empty shipment remains a created draft. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * previous_attributes.status.anyOf[1] (Value): string. Read-only shipment state derived from
     * the shipment's package states. An empty shipment remains a created draft. - `created`: The
     * shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is
     * packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts now, independent of permissions. Contains void while the shipment and its
     * fulfillment permit voiding. [] enum: "void". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Last update timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Monotonic shipment version for expected_version checks.
     * previous_attributes.version.anyOf[1] (Value): integer. Monotonic shipment version for
     * expected_version checks. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2]
     * (Value): null.
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
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
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
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
         * state, including synthetic test events. created_at (Optional): string or null. Creation
         * timestamp. created_at.anyOf[1] (Value): string. Creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. delivered_at
         * (Optional): string or null. When the shipment was delivered, in RFC3339 format.
         * delivered_at.anyOf[1] (Value): string. When the shipment was delivered, in RFC3339
         * format. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at.anyOf[2]
         * (Value): null. direction (Optional): string or null. Whether the shipment sends items to
         * the buyer or returns items to the merchant. Value enum: "outbound", "return".
         * direction.anyOf[1] (Value): string. Whether the shipment sends items to the buyer or
         * returns items to the merchant. Value enum: "outbound", "return". direction.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. Requires external_system. External references
         * are not unique. Use Idempotency-Key for retries. external_reference_id.anyOf[1] (Value):
         * string. Caller-owned identifier for this resource in an external system. Requires
         * external_system. External references are not unique. Use Idempotency-Key for retries.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * external_system (Optional): string or null. Name of the external system that
         * external_reference_id belongs to. External references are not unique. Use
         * Idempotency-Key for retries. external_system.anyOf[1] (Value): string. Name of the
         * external system that external_reference_id belongs to. External references are not
         * unique. Use Idempotency-Key for retries. external_system.anyOf[2] (Value): null.
         * fulfillment_id (Optional): string or null. Fulfillment associated with this shipment.
         * fulfillment_id.anyOf[1] (Value): string. Fulfillment associated with this shipment.
         * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null.
         * handed_off_at (Optional): string or null. Carrier handoff timestamp for outbound and
         * return shipments, using the recorded shipped_at when no separate handoff timestamp
         * exists. For return shipments, this can satisfy an after_handoff execution gate for the
         * declared return_line_items. handed_off_at.anyOf[1] (Value): string. Carrier handoff
         * timestamp for outbound and return shipments, using the recorded shipped_at when no
         * separate handoff timestamp exists. For return shipments, this can satisfy an
         * after_handoff execution gate for the declared return_line_items. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". handed_off_at.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with
         * the shipment. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value):
         * null. order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order
         * summary returned when the order relationship is expanded. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null.
         * order_id (Optional): string or null. Order whose items are transported by the shipment.
         * order_id.anyOf[1] (Value): string. Order whose items are transported by the shipment.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * package_count (Optional): integer or null. Total number of packages attached to the
         * shipment, including voided packages. package_count.anyOf[1] (Value): integer. Total
         * number of packages attached to the shipment, including voided packages. Format: int32.
         * minimum: 0. package_count.anyOf[2] (Value): null. packages (Optional): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes} or null. Summaries of the shipment's packages
         * in creation order, returned when the packages relationship is expanded or when the
         * shipment is created with packages. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Summaries of the shipment's packages in
         * creation order, returned when the packages relationship is expanded or when the shipment
         * is created with packages. packages.anyOf[1][] (Value): {@link
         * ExpandedPackageSummaryPreviousAttributes}. packages.anyOf[2] (Value): null. return_id
         * (Optional): string or null. Return associated with this shipment, when its direction is
         * return. return_id.anyOf[1] (Value): string. Return associated with this shipment, when
         * its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes} or null. Return lines and quantities
         * allocated to this return shipment. return_line_items.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and quantities
         * allocated to this return shipment. return_line_items.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes}. return_line_items.anyOf[2] (Value):
         * null. shipment_id (Optional): string or null. Stable identifier of the shipment.
         * shipment_id.anyOf[1] (Value): string. Stable identifier of the shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null. shipped_at
         * (Optional): string or null. When the shipment was shipped, in RFC3339 format.
         * shipped_at.anyOf[1] (Value): string. When the shipment was shipped, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". shipped_at.anyOf[2] (Value): null.
         * status (Optional): string or null. Read-only shipment state derived from the shipment's
         * package states. An empty shipment remains a created draft. - `created`: The shipment leg
         * exists but has not been packed or handed off. - `packed`: The shipment leg is packed and
         * awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
         * `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". status.anyOf[1] (Value):
         * string. Read-only shipment state derived from the shipment's package states. An empty
         * shipment remains a created draft. - `created`: The shipment leg exists but has not been
         * packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier
         * handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The
         * carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
         * is on its final delivery route. - `delivered`: The carrier reported successful delivery.
         * - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
         * the carrier instructions before retrying delivery. - `exception`: A carrier exception is
         * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment
         * was returned toward or to its origin. - `voided`: The shipment was voided and will not
         * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array of string
         * or null. Lifecycle actions Flint accepts now, independent of permissions. Contains void
         * while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts
         * now, independent of permissions. Contains void while the shipment and its fulfillment
         * permit voiding. [] enum: "void". supported_actions.anyOf[1][] (Value): string. Value
         * enum: "void". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Last update timestamp. updated_at.anyOf[1] (Value): string. Last update timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Monotonic shipment version for expected_version
         * checks. version.anyOf[1] (Value): integer. Monotonic shipment version for
         * expected_version checks. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Creation timestamp. anyOf[1] (Value): string. Creation timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When the shipment was delivered, in RFC3339 format. anyOf[1] (Value): string. When
             * the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "delivered_at"?: ((string) | (null));
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return". anyOf[1] (Value): string. Whether the shipment
             * sends items to the buyer or returns items to the merchant. Value enum: "outbound",
             * "return". anyOf[2] (Value): null.
             */
            "direction"?: (("outbound" | "return" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. anyOf[1] (Value): string. Caller-owned identifier for this resource in an
             * external system. Requires external_system. External references are not unique. Use
             * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". anyOf[2]
             * (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value):
             * string. Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries. anyOf[2] (Value): null.
             */
            "external_system"?: ((string) | (null));
            /**
             * Fulfillment associated with this shipment. anyOf[1] (Value): string. Fulfillment
             * associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2]
             * (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. anyOf[1]
             * (Value): string. Carrier handoff timestamp for outbound and return shipments, using
             * the recorded shipped_at when no separate handoff timestamp exists. For return
             * shipments, this can satisfy an after_handoff execution gate for the declared
             * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "handed_off_at"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the shipment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items are transported by the shipment. anyOf[1] (Value): string. Order
             * whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * anyOf[1] (Value): integer. Total number of packages attached to the shipment,
             * including voided packages. Format: int32. minimum: 0. anyOf[2] (Value): null.
             */
            "package_count"?: ((number) | (null));
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. anyOf[1]
             * (Value): Array of {@link ExpandedPackageSummaryPreviousAttributes}. Summaries of the
             * shipment's packages in creation order, returned when the packages relationship is
             * expanded or when the shipment is created with packages. anyOf[1][] (Value): {@link
             * ExpandedPackageSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * Return associated with this shipment, when its direction is return. anyOf[1]
             * (Value): string. Return associated with this shipment, when its direction is return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Return lines and quantities allocated to this return shipment. anyOf[1] (Value):
             * Array of {@link ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines
             * and quantities allocated to this return shipment. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_line_items"?: ((Array<ReturnHandoffRequirementLineItemPreviousAttributes>) | (null));
            /**
             * Stable identifier of the shipment. anyOf[1] (Value): string. Stable identifier of
             * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * When the shipment was shipped, in RFC3339 format. anyOf[1] (Value): string. When the
             * shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "shipped_at"?: ((string) | (null));
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
             * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1]
             * (Value): string. Read-only shipment state derived from the shipment's package
             * states. An empty shipment remains a created draft. - `created`: The shipment leg
             * exists but has not been packed or handed off. - `packed`: The shipment leg is packed
             * and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
             * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {}))
                | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". anyOf[1] (Value):
             * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
             * Contains void while the shipment and its fulfillment permit voiding. [] enum:
             * "void". anyOf[1][] (Value): string. Value enum: "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"void" | (string & {})>) | (null));
            /**
             * Last update timestamp. anyOf[1] (Value): string. Last update timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic shipment version for expected_version checks. anyOf[1] (Value): integer.
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * object.return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}.
     * Return lines and quantities allocated to this return shipment. object.return_line_items[]
     * (Value): {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in
     * a return shipment or package. object.shipment_id (Required): string. Stable identifier of
     * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipped_at (Optional):
     * string. When the shipment was shipped, in RFC3339 format. Format: date-time. Example:
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
     * previous_attributes.created_at (Optional): string or null. Creation timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. Creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.delivered_at (Optional): string or null. When the shipment was
     * delivered, in RFC3339 format. previous_attributes.delivered_at.anyOf[1] (Value): string.
     * When the shipment was delivered, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.delivered_at.anyOf[2] (Value): null.
     * previous_attributes.direction (Optional): string or null. Whether the shipment sends items
     * to the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * previous_attributes.direction.anyOf[1] (Value): string. Whether the shipment sends items to
     * the buyer or returns items to the merchant. Value enum: "outbound", "return".
     * previous_attributes.direction.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Requires external_system. External
     * references are not unique. Use Idempotency-Key for retries.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Requires external_system. External references are
     * not unique. Use Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.external_system (Optional): string or null. Name of the external system
     * that external_reference_id belongs to. External references are not unique. Use
     * Idempotency-Key for retries. previous_attributes.external_system.anyOf[1] (Value): string.
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. previous_attributes.external_system.anyOf[2]
     * (Value): null. previous_attributes.fulfillment_id (Optional): string or null. Fulfillment
     * associated with this shipment. previous_attributes.fulfillment_id.anyOf[1] (Value): string.
     * Fulfillment associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * previous_attributes.fulfillment_id.anyOf[2] (Value): null. previous_attributes.handed_off_at
     * (Optional): string or null. Carrier handoff timestamp for outbound and return shipments,
     * using the recorded shipped_at when no separate handoff timestamp exists. For return
     * shipments, this can satisfy an after_handoff execution gate for the declared
     * return_line_items. previous_attributes.handed_off_at.anyOf[1] (Value): string. Carrier
     * handoff timestamp for outbound and return shipments, using the recorded shipped_at when no
     * separate handoff timestamp exists. For return shipments, this can satisfy an after_handoff
     * execution gate for the declared return_line_items. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.handed_off_at.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Caller-owned key-value
     * metadata associated with the shipment. previous_attributes.metadata.anyOf[1] (Value): {@link
     * MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order
     * (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order summary returned
     * when the order relationship is expanded. Present only when `expand` includes `order`; `null`
     * when expanded and there is no related order. previous_attributes.order.anyOf[1] (Value):
     * {@link ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value):
     * null. previous_attributes.order_id (Optional): string or null. Order whose items are
     * transported by the shipment. previous_attributes.order_id.anyOf[1] (Value): string. Order
     * whose items are transported by the shipment. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * previous_attributes.order_id.anyOf[2] (Value): null. previous_attributes.package_count
     * (Optional): integer or null. Total number of packages attached to the shipment, including
     * voided packages. previous_attributes.package_count.anyOf[1] (Value): integer. Total number
     * of packages attached to the shipment, including voided packages. Format: int32. minimum: 0.
     * previous_attributes.package_count.anyOf[2] (Value): null. previous_attributes.packages
     * (Optional): Array of {@link ExpandedPackageSummaryPreviousAttributes} or null. Summaries of
     * the shipment's packages in creation order, returned when the packages relationship is
     * expanded or when the shipment is created with packages.
     * previous_attributes.packages.anyOf[1] (Value): Array of {@link
     * ExpandedPackageSummaryPreviousAttributes}. Summaries of the shipment's packages in creation
     * order, returned when the packages relationship is expanded or when the shipment is created
     * with packages. previous_attributes.packages.anyOf[1][] (Value): {@link
     * ExpandedPackageSummaryPreviousAttributes}. previous_attributes.packages.anyOf[2] (Value):
     * null. previous_attributes.return_id (Optional): string or null. Return associated with this
     * shipment, when its direction is return. previous_attributes.return_id.anyOf[1] (Value):
     * string. Return associated with this shipment, when its direction is return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". previous_attributes.return_id.anyOf[2] (Value): null.
     * previous_attributes.return_line_items (Optional): Array of {@link
     * ReturnHandoffRequirementLineItemPreviousAttributes} or null. Return lines and quantities
     * allocated to this return shipment. previous_attributes.return_line_items.anyOf[1] (Value):
     * Array of {@link ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and
     * quantities allocated to this return shipment.
     * previous_attributes.return_line_items.anyOf[1][] (Value): {@link
     * ReturnHandoffRequirementLineItemPreviousAttributes}.
     * previous_attributes.return_line_items.anyOf[2] (Value): null.
     * previous_attributes.shipment_id (Optional): string or null. Stable identifier of the
     * shipment. previous_attributes.shipment_id.anyOf[1] (Value): string. Stable identifier of the
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * previous_attributes.shipment_id.anyOf[2] (Value): null. previous_attributes.shipped_at
     * (Optional): string or null. When the shipment was shipped, in RFC3339 format.
     * previous_attributes.shipped_at.anyOf[1] (Value): string. When the shipment was shipped, in
     * RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.shipped_at.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Read-only shipment state derived from the shipment's package
     * states. An empty shipment remains a created draft. - `created`: The shipment leg exists but
     * has not been packed or handed off. - `packed`: The shipment leg is packed and awaiting
     * carrier handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`:
     * The carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
     * is on its final delivery route. - `delivered`: The carrier reported successful delivery. -
     * `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the
     * carrier instructions before retrying delivery. - `exception`: A carrier exception is
     * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment was
     * returned toward or to its origin. - `voided`: The shipment was voided and will not continue
     * through delivery. Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * previous_attributes.status.anyOf[1] (Value): string. Read-only shipment state derived from
     * the shipment's package states. An empty shipment remains a created draft. - `created`: The
     * shipment leg exists but has not been packed or handed off. - `packed`: The shipment leg is
     * packed and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
     * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
     * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The carrier
     * reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did
     * not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A
     * carrier exception is blocking normal progress. Resolve the carrier-reported issue. -
     * `returned`: The shipment was returned toward or to its origin. - `voided`: The shipment was
     * voided and will not continue through delivery. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts now, independent of permissions. Contains void while the shipment and its
     * fulfillment permit voiding. [] enum: "void". previous_attributes.supported_actions.anyOf[1]
     * (Value): Array of string. Lifecycle actions Flint accepts now, independent of permissions.
     * Contains void while the shipment and its fulfillment permit voiding. [] enum: "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "void".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. Last update timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. Last update timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Monotonic shipment version for expected_version checks.
     * previous_attributes.version.anyOf[1] (Value): integer. Monotonic shipment version for
     * expected_version checks. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2]
     * (Value): null.
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
         * return_line_items (Optional): Array of {@link ReturnHandoffRequirementLineItem}. Return
         * lines and quantities allocated to this return shipment. return_line_items[] (Value):
         * {@link ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a
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
             * ReturnHandoffRequirementLineItem}. A return line and the quantity placed in a return
             * shipment or package.
             */
            "return_line_items"?: Array<ReturnHandoffRequirementLineItem>;
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
         * state, including synthetic test events. created_at (Optional): string or null. Creation
         * timestamp. created_at.anyOf[1] (Value): string. Creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. delivered_at
         * (Optional): string or null. When the shipment was delivered, in RFC3339 format.
         * delivered_at.anyOf[1] (Value): string. When the shipment was delivered, in RFC3339
         * format. Format: date-time. Example: "2026-08-02T16:00:00Z". delivered_at.anyOf[2]
         * (Value): null. direction (Optional): string or null. Whether the shipment sends items to
         * the buyer or returns items to the merchant. Value enum: "outbound", "return".
         * direction.anyOf[1] (Value): string. Whether the shipment sends items to the buyer or
         * returns items to the merchant. Value enum: "outbound", "return". direction.anyOf[2]
         * (Value): null. external_reference_id (Optional): string or null. Caller-owned identifier
         * for this resource in an external system. Requires external_system. External references
         * are not unique. Use Idempotency-Key for retries. external_reference_id.anyOf[1] (Value):
         * string. Caller-owned identifier for this resource in an external system. Requires
         * external_system. External references are not unique. Use Idempotency-Key for retries.
         * maxLength: 255. Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null.
         * external_system (Optional): string or null. Name of the external system that
         * external_reference_id belongs to. External references are not unique. Use
         * Idempotency-Key for retries. external_system.anyOf[1] (Value): string. Name of the
         * external system that external_reference_id belongs to. External references are not
         * unique. Use Idempotency-Key for retries. external_system.anyOf[2] (Value): null.
         * fulfillment_id (Optional): string or null. Fulfillment associated with this shipment.
         * fulfillment_id.anyOf[1] (Value): string. Fulfillment associated with this shipment.
         * Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". fulfillment_id.anyOf[2] (Value): null.
         * handed_off_at (Optional): string or null. Carrier handoff timestamp for outbound and
         * return shipments, using the recorded shipped_at when no separate handoff timestamp
         * exists. For return shipments, this can satisfy an after_handoff execution gate for the
         * declared return_line_items. handed_off_at.anyOf[1] (Value): string. Carrier handoff
         * timestamp for outbound and return shipments, using the recorded shipped_at when no
         * separate handoff timestamp exists. For return shipments, this can satisfy an
         * after_handoff execution gate for the declared return_line_items. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". handed_off_at.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned key-value metadata associated with
         * the shipment. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value):
         * null. order (Optional): {@link ExpandedOrderSummaryPreviousAttributes} or null. Order
         * summary returned when the order relationship is expanded. Present only when `expand`
         * includes `order`; `null` when expanded and there is no related order. order.anyOf[1]
         * (Value): {@link ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null.
         * order_id (Optional): string or null. Order whose items are transported by the shipment.
         * order_id.anyOf[1] (Value): string. Order whose items are transported by the shipment.
         * Example: "ord_01KEZF7C0054GQKJ142A8X367A". order_id.anyOf[2] (Value): null.
         * package_count (Optional): integer or null. Total number of packages attached to the
         * shipment, including voided packages. package_count.anyOf[1] (Value): integer. Total
         * number of packages attached to the shipment, including voided packages. Format: int32.
         * minimum: 0. package_count.anyOf[2] (Value): null. packages (Optional): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes} or null. Summaries of the shipment's packages
         * in creation order, returned when the packages relationship is expanded or when the
         * shipment is created with packages. packages.anyOf[1] (Value): Array of {@link
         * ExpandedPackageSummaryPreviousAttributes}. Summaries of the shipment's packages in
         * creation order, returned when the packages relationship is expanded or when the shipment
         * is created with packages. packages.anyOf[1][] (Value): {@link
         * ExpandedPackageSummaryPreviousAttributes}. packages.anyOf[2] (Value): null. return_id
         * (Optional): string or null. Return associated with this shipment, when its direction is
         * return. return_id.anyOf[1] (Value): string. Return associated with this shipment, when
         * its direction is return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_id.anyOf[2]
         * (Value): null. return_line_items (Optional): Array of {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes} or null. Return lines and quantities
         * allocated to this return shipment. return_line_items.anyOf[1] (Value): Array of {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines and quantities
         * allocated to this return shipment. return_line_items.anyOf[1][] (Value): {@link
         * ReturnHandoffRequirementLineItemPreviousAttributes}. return_line_items.anyOf[2] (Value):
         * null. shipment_id (Optional): string or null. Stable identifier of the shipment.
         * shipment_id.anyOf[1] (Value): string. Stable identifier of the shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipment_id.anyOf[2] (Value): null. shipped_at
         * (Optional): string or null. When the shipment was shipped, in RFC3339 format.
         * shipped_at.anyOf[1] (Value): string. When the shipment was shipped, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". shipped_at.anyOf[2] (Value): null.
         * status (Optional): string or null. Read-only shipment state derived from the shipment's
         * package states. An empty shipment remains a created draft. - `created`: The shipment leg
         * exists but has not been packed or handed off. - `packed`: The shipment leg is packed and
         * awaiting carrier handoff. - `shipped`: The shipment leg was handed to the carrier. -
         * `in_transit`: The carrier is moving the shipment through its network. -
         * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
         * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
         * delivery but did not complete it. Follow the carrier instructions before retrying
         * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the
         * carrier-reported issue. - `returned`: The shipment was returned toward or to its origin.
         * - `voided`: The shipment was voided and will not continue through delivery. Value enum:
         * "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". status.anyOf[1] (Value):
         * string. Read-only shipment state derived from the shipment's package states. An empty
         * shipment remains a created draft. - `created`: The shipment leg exists but has not been
         * packed or handed off. - `packed`: The shipment leg is packed and awaiting carrier
         * handoff. - `shipped`: The shipment leg was handed to the carrier. - `in_transit`: The
         * carrier is moving the shipment through its network. - `out_for_delivery`: The shipment
         * is on its final delivery route. - `delivered`: The carrier reported successful delivery.
         * - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow
         * the carrier instructions before retrying delivery. - `exception`: A carrier exception is
         * blocking normal progress. Resolve the carrier-reported issue. - `returned`: The shipment
         * was returned toward or to its origin. - `voided`: The shipment was voided and will not
         * continue through delivery. Value enum: "created", "packed", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". status.anyOf[2] (Value): null. supported_actions (Optional): Array of string
         * or null. Lifecycle actions Flint accepts now, independent of permissions. Contains void
         * while the shipment and its fulfillment permit voiding. [] enum: "void".
         * supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts
         * now, independent of permissions. Contains void while the shipment and its fulfillment
         * permit voiding. [] enum: "void". supported_actions.anyOf[1][] (Value): string. Value
         * enum: "void". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. Last update timestamp. updated_at.anyOf[1] (Value): string. Last update timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * version (Optional): integer or null. Monotonic shipment version for expected_version
         * checks. version.anyOf[1] (Value): integer. Monotonic shipment version for
         * expected_version checks. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Creation timestamp. anyOf[1] (Value): string. Creation timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When the shipment was delivered, in RFC3339 format. anyOf[1] (Value): string. When
             * the shipment was delivered, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "delivered_at"?: ((string) | (null));
            /**
             * Whether the shipment sends items to the buyer or returns items to the merchant.
             * Value enum: "outbound", "return". anyOf[1] (Value): string. Whether the shipment
             * sends items to the buyer or returns items to the merchant. Value enum: "outbound",
             * "return". anyOf[2] (Value): null.
             */
            "direction"?: (("outbound" | "return" | (string & {})) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Requires
             * external_system. External references are not unique. Use Idempotency-Key for
             * retries. anyOf[1] (Value): string. Caller-owned identifier for this resource in an
             * external system. Requires external_system. External references are not unique. Use
             * Idempotency-Key for retries. maxLength: 255. Example: "warehouse-1842". anyOf[2]
             * (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value):
             * string. Name of the external system that external_reference_id belongs to. External
             * references are not unique. Use Idempotency-Key for retries. anyOf[2] (Value): null.
             */
            "external_system"?: ((string) | (null));
            /**
             * Fulfillment associated with this shipment. anyOf[1] (Value): string. Fulfillment
             * associated with this shipment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2]
             * (Value): null.
             */
            "fulfillment_id"?: ((string) | (null));
            /**
             * Carrier handoff timestamp for outbound and return shipments, using the recorded
             * shipped_at when no separate handoff timestamp exists. For return shipments, this can
             * satisfy an after_handoff execution gate for the declared return_line_items. anyOf[1]
             * (Value): string. Carrier handoff timestamp for outbound and return shipments, using
             * the recorded shipped_at when no separate handoff timestamp exists. For return
             * shipments, this can satisfy an after_handoff execution gate for the declared
             * return_line_items. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2]
             * (Value): null.
             */
            "handed_off_at"?: ((string) | (null));
            /**
             * Caller-owned key-value metadata associated with the shipment. anyOf[1] (Value):
             * {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * Order whose items are transported by the shipment. anyOf[1] (Value): string. Order
             * whose items are transported by the shipment. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * Total number of packages attached to the shipment, including voided packages.
             * anyOf[1] (Value): integer. Total number of packages attached to the shipment,
             * including voided packages. Format: int32. minimum: 0. anyOf[2] (Value): null.
             */
            "package_count"?: ((number) | (null));
            /**
             * Summaries of the shipment's packages in creation order, returned when the packages
             * relationship is expanded or when the shipment is created with packages. anyOf[1]
             * (Value): Array of {@link ExpandedPackageSummaryPreviousAttributes}. Summaries of the
             * shipment's packages in creation order, returned when the packages relationship is
             * expanded or when the shipment is created with packages. anyOf[1][] (Value): {@link
             * ExpandedPackageSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "packages"?: ((Array<ExpandedPackageSummaryPreviousAttributes>) | (null));
            /**
             * Return associated with this shipment, when its direction is return. anyOf[1]
             * (Value): string. Return associated with this shipment, when its direction is return.
             * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
             */
            "return_id"?: ((string) | (null));
            /**
             * Return lines and quantities allocated to this return shipment. anyOf[1] (Value):
             * Array of {@link ReturnHandoffRequirementLineItemPreviousAttributes}. Return lines
             * and quantities allocated to this return shipment. anyOf[1][] (Value): {@link
             * ReturnHandoffRequirementLineItemPreviousAttributes}. anyOf[2] (Value): null.
             */
            "return_line_items"?: ((Array<ReturnHandoffRequirementLineItemPreviousAttributes>) | (null));
            /**
             * Stable identifier of the shipment. anyOf[1] (Value): string. Stable identifier of
             * the shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
             */
            "shipment_id"?: ((string) | (null));
            /**
             * When the shipment was shipped, in RFC3339 format. anyOf[1] (Value): string. When the
             * shipment was shipped, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "shipped_at"?: ((string) | (null));
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
             * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1]
             * (Value): string. Read-only shipment state derived from the shipment's package
             * states. An empty shipment remains a created draft. - `created`: The shipment leg
             * exists but has not been packed or handed off. - `packed`: The shipment leg is packed
             * and awaiting carrier handoff. - `shipped`: The shipment leg was handed to the
             * carrier. - `in_transit`: The carrier is moving the shipment through its network. -
             * `out_for_delivery`: The shipment is on its final delivery route. - `delivered`: The
             * carrier reported successful delivery. - `delivery_attempted`: The carrier attempted
             * delivery but did not complete it. Follow the carrier instructions before retrying
             * delivery. - `exception`: A carrier exception is blocking normal progress. Resolve
             * the carrier-reported issue. - `returned`: The shipment was returned toward or to its
             * origin. - `voided`: The shipment was voided and will not continue through delivery.
             * Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2]
             * (Value): null.
             */
            "status"?: (("created"
                | "packed"
                | "shipped"
                | "in_transit"
                | "out_for_delivery"
                | "delivered"
                | "delivery_attempted"
                | "exception"
                | "returned"
                | "voided"
                | (string & {}))
                | (null));
            /**
             * Lifecycle actions Flint accepts now, independent of permissions. Contains void while
             * the shipment and its fulfillment permit voiding. [] enum: "void". anyOf[1] (Value):
             * Array of string. Lifecycle actions Flint accepts now, independent of permissions.
             * Contains void while the shipment and its fulfillment permit voiding. [] enum:
             * "void". anyOf[1][] (Value): string. Value enum: "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"void" | (string & {})>) | (null));
            /**
             * Last update timestamp. anyOf[1] (Value): string. Last update timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Monotonic shipment version for expected_version checks. anyOf[1] (Value): integer.
             * Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1.
             * anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
/** A hosted catalog configured by a merchant. */
export type Shop = {
    /**
     * Buyer information requested at checkout. Omitted when the shop has no override. What
     * checkout asks the buyer for. Each field you leave out uses your checkout settings.
     */
    "buyer_fields"?: CheckoutBuyerFields;
    /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
    "checkout_session_expires_in_seconds": number | null;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string | null;
    /**
     * Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in
     * checkout: an order summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /**
     * An empty array follows checkout settings. [] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_ids": Array<string>;
    /** Shop description. Null when unset. */
    "description": string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Null when unset. minLength:
     * 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id": string | null;
    /** Readable address. Null when a handle has not been assigned. */
    "handle": string | null;
    /**
     * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image attached
     * to a resource, with its display properties and attachment metadata. anyOf[2] (Value): null.
     */
    "image": ((ImageAttachment) | (null));
    /** Inactive message. Null when unset. */
    "inactive_message": string | null;
    /**
     * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value): {@link
     * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value):
     * null.
     */
    "inventory_routing_source": ((InventoryRoutingSource) | (null));
    /**
     * Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a
     * checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping
     * policy, and contract.
     */
    "legal"?: LegalSettings;
    /** The number of listings on the shop, including unavailable entries. Format: int32. */
    "listing_count": number;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** The title buyers see on the shop. */
    "name": string;
    /**
     * Payment options for the shop. Omitted when the shop has no override. Payment settings for a
     * checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion
     * settings for a checkout: whether automatic promotions apply and whether the buyer can apply
     * promotion codes.
     */
    "promotion_config"?: CheckoutPromotionConfig;
    /**
     * Redirects configured for checkouts started from the shop. Where hosted checkout sends the
     * buyer. Not allowed when surface is headless; use payment_return_url.
     */
    "redirects": CheckoutRedirects;
    /**
     * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     */
    "shop_id": string;
    /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is
     * collected for a checkout session or payment link.
     */
    "tax"?: CheckoutTaxConfig;
    /**
     * Tipping options for the shop. Omitted when the shop has no override. Tip settings for a
     * checkout: whether tips are enabled, the percent or fixed amount options, the default tip,
     * and custom tips.
     */
    "tip"?: CheckoutTipConfig;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when
     * available.
     */
    "url": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ShopArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "listing_count"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "shop_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shop.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            "created_at"?: ((string) | (null));
            "currency"?: ((string) | (null));
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            "delivery_method_ids"?: ((Array<string>) | (null));
            "description"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "handle"?: ((string) | (null));
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            "inactive_message"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            "listing_count"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            "shop_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            "updated_at"?: ((string) | (null));
            "url"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shop.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shop.archived";
});
/**
 * The `shop.archived` webhook payload for the `installed_merchants` event source. Fields shared by
 * partner webhook payloads.
 */
export type ShopArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
     * Omitted when the shop has no override. previous_attributes.buyer_fields.anyOf[1] (Value):
     * {@link CheckoutBuyerFieldsPreviousAttributes}. previous_attributes.buyer_fields.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_expires_in_seconds (Optional): integer
     * or null. Checkout lifetime in seconds. Null when checkout settings apply.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Checkout
     * lifetime in seconds. Null when checkout settings apply. Format: int64.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.currency (Optional): string or null. Listing currency. Null when
     * the shop is empty. Uses ISO 4217 currency codes. previous_attributes.currency.anyOf[1]
     * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.custom_text
     * (Optional): {@link CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown
     * in checkout. Omitted when the shop has no override. previous_attributes.custom_text.anyOf[1]
     * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}.
     * previous_attributes.custom_text.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_ids (Optional): Array of string or null. An empty array
     * follows checkout settings. previous_attributes.delivery_method_ids.anyOf[1] (Value): Array
     * of string. An empty array follows checkout settings.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Shop description. Null
     * when unset. previous_attributes.description.anyOf[1] (Value): string. Shop description. Null
     * when unset. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Null when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Null when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.handle (Optional): string or null. Readable address. Null when a handle
     * has not been assigned. previous_attributes.handle.anyOf[1] (Value): string. Readable
     * address. Null when a handle has not been assigned. previous_attributes.handle.anyOf[2]
     * (Value): null. previous_attributes.image (Optional): {@link
     * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset.
     * previous_attributes.image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}.
     * previous_attributes.image.anyOf[2] (Value): null. previous_attributes.inactive_message
     * (Optional): string or null. Inactive message. Null when unset.
     * previous_attributes.inactive_message.anyOf[1] (Value): string. Inactive message. Null when
     * unset. previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
     * checkout settings apply. previous_attributes.inventory_routing_source.anyOf[1] (Value):
     * {@link InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * Legal policies shown to buyers. Omitted when the shop has no override.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.listing_count
     * (Optional): integer or null. The number of listings on the shop, including unavailable
     * entries. previous_attributes.listing_count.anyOf[1] (Value): integer. The number of listings
     * on the shop, including unavailable entries. Format: int32.
     * previous_attributes.listing_count.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. The title buyers see on the shop.
     * previous_attributes.name.anyOf[1] (Value): string. The title buyers see on the shop.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payments (Optional):
     * {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop.
     * Omitted when the shop has no override. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Promotion settings for shop checkouts.
     * Omitted when the shop has no override. previous_attributes.promotion_config.anyOf[1]
     * (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
     * previous_attributes.promotion_config.anyOf[2] (Value): null. previous_attributes.redirects
     * (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Redirects configured for
     * checkouts started from the shop. previous_attributes.redirects.anyOf[1] (Value): {@link
     * CheckoutRedirectsPreviousAttributes}. previous_attributes.redirects.anyOf[2] (Value): null.
     * previous_attributes.shop_id (Optional): string or null. Shop ID.
     * previous_attributes.shop_id.anyOf[1] (Value): string. Shop ID. pattern:
     * ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * previous_attributes.shop_id.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Availability or retirement status. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * status. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for shop checkouts. Omitted when the shop has no override.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when the
     * shop has no override. previous_attributes.tip.anyOf[1] (Value): {@link
     * CheckoutTipConfigPreviousAttributes}. previous_attributes.tip.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. The hosted shop address. Live
     * shops use the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[1] (Value): string. The hosted shop address. Live shops use
     * the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. previous_attributes.version.anyOf[1]
     * (Value): integer. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
         * Omitted when the shop has no override. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Checkout lifetime in
         * seconds. Null when checkout settings apply. checkout_session_expires_in_seconds.anyOf[1]
         * (Value): integer. Checkout lifetime in seconds. Null when checkout settings apply.
         * Format: int64. checkout_session_expires_in_seconds.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. currency.anyOf[1]
         * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
         * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown in checkout.
         * Omitted when the shop has no override. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. An empty array follows checkout
         * settings. delivery_method_ids.anyOf[1] (Value): Array of string. An empty array follows
         * checkout settings. delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Shop description. Null when unset.
         * description.anyOf[1] (Value): string. Shop description. Null when unset.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example:
         * "warehouse-1842". external_reference_id.anyOf[2] (Value): null. handle (Optional):
         * string or null. Readable address. Null when a handle has not been assigned.
         * handle.anyOf[1] (Value): string. Readable address. Null when a handle has not been
         * assigned. handle.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset. image.anyOf[1]
         * (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2] (Value): null.
         * inactive_message (Optional): string or null. Inactive message. Null when unset.
         * inactive_message.anyOf[1] (Value): string. Inactive message. Null when unset.
         * inactive_message.anyOf[2] (Value): null. inventory_routing_source (Optional): {@link
         * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
         * checkout settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. Legal
         * policies shown to buyers. Omitted when the shop has no override. legal.anyOf[1] (Value):
         * {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * listing_count (Optional): integer or null. The number of listings on the shop, including
         * unavailable entries. listing_count.anyOf[1] (Value): integer. The number of listings on
         * the shop, including unavailable entries. Format: int32. listing_count.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. The
         * title buyers see on the shop. name.anyOf[1] (Value): string. The title buyers see on the
         * shop. name.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop. Omitted
         * when the shop has no override. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Promotion settings for shop checkouts. Omitted when the shop has no override.
         * promotion_config.anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
         * promotion_config.anyOf[2] (Value): null. redirects (Optional): {@link
         * CheckoutRedirectsPreviousAttributes} or null. Redirects configured for checkouts started
         * from the shop. redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
         * redirects.anyOf[2] (Value): null. shop_id (Optional): string or null. Shop ID.
         * shop_id.anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". shop_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". status.anyOf[1] (Value): string. Availability or retirement
         * status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for shop
         * checkouts. Omitted when the shop has no override. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when
         * the shop has no override. tip.anyOf[1] (Value): {@link
         * CheckoutTipConfigPreviousAttributes}. tip.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. url (Optional): string or null. The hosted shop address. Live shops use
         * the merchant's healthy custom checkout hostname when available. url.anyOf[1] (Value):
         * string. The hosted shop address. Live shops use the merchant's healthy custom checkout
         * hostname when available. url.anyOf[2] (Value): null. version (Optional): integer or
         * null. Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. version.anyOf[1] (Value): integer. Persisted
         * version of this resource's owned state. Expanded resources and external observations can
         * change independently. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Checkout lifetime in seconds. Null when checkout settings apply. anyOf[1] (Value):
             * integer. Checkout lifetime in seconds. Null when checkout settings apply. Format:
             * int64. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * anyOf[1] (Value): string. Listing currency. Null when the shop is empty. Uses ISO
             * 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * An empty array follows checkout settings. anyOf[1] (Value): Array of string. An
             * empty array follows checkout settings. anyOf[1][] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Shop description. Null when unset. anyOf[1] (Value): string. Shop description. Null
             * when unset. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Readable address. Null when a handle has not been assigned. anyOf[1] (Value):
             * string. Readable address. Null when a handle has not been assigned. anyOf[2]
             * (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Inactive message. Null when unset. anyOf[1] (Value): string. Inactive message. Null
             * when unset. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * The number of listings on the shop, including unavailable entries. anyOf[1] (Value):
             * integer. The number of listings on the shop, including unavailable entries. Format:
             * int32. anyOf[2] (Value): null.
             */
            "listing_count"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The title buyers see on the shop. anyOf[1] (Value): string. The title buyers see on
             * the shop. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Payment options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Redirects configured for checkouts started from the shop. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * Shop ID. anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". anyOf[2] (Value): null.
             */
            "shop_id"?: ((string) | (null));
            /**
             * Availability or retirement status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Availability or retirement status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Tipping options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available. anyOf[1] (Value): string. The hosted shop address. Live
             * shops use the merchant's healthy custom checkout hostname when available. anyOf[2]
             * (Value): null.
             */
            "url"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "shop.archived". */
    "event_type"?: "shop.archived";
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
 * The `shop.archived` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ShopArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer
     * information requested at checkout. Omitted when the shop has no override. What checkout asks
     * the buyer for. Each field you leave out uses your checkout settings.
     * object.checkout_session_expires_in_seconds (Required): integer or null. Checkout lifetime in
     * seconds. Null when checkout settings apply. Format: int64. object.created_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.currency (Required): string or null. Listing currency. Null when the shop is empty.
     * Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
     * "USD". object.custom_text (Optional): {@link CheckoutCustomTextConfig}. Merchant text shown
     * in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order
     * summary message and a shipping address label. object.delivery_method_ids (Required): Array
     * of string. An empty array follows checkout settings. object.delivery_method_ids[] (Value):
     * string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". object.description (Required): string or
     * null. Shop description. Null when unset. object.external_reference_id (Required): string or
     * null. Caller-owned identifier for this resource in an external system. Null when unset.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842". object.handle (Required): string or
     * null. Readable address. Null when a handle has not been assigned. object.image (Required):
     * {@link ImageAttachment} or null. Cover image. Null when unset. object.image.anyOf[1]
     * (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata. object.image.anyOf[2] (Value): null.
     * object.inactive_message (Required): string or null. Inactive message. Null when unset.
     * object.inventory_routing_source (Required): {@link InventoryRoutingSource} or null. Explicit
     * inventory routing. Null when checkout settings apply.
     * object.inventory_routing_source.anyOf[1] (Value): {@link InventoryRoutingSource}. Where an
     * order, payment link, or reservation routes inventory from: a fixed Location, an inventory
     * allocation policy, or one policy revision. object.inventory_routing_source.anyOf[2] (Value):
     * null. object.legal (Optional): {@link LegalSettings}. Legal policies shown to buyers.
     * Omitted when the shop has no override. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * object.listing_count (Required): integer. The number of listings on the shop, including
     * unavailable entries. Format: int32. object.merchant_id (Required): string. ID of the
     * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.name (Required): string. The title buyers see on the shop.
     * object.payments (Optional): {@link CheckoutPaymentConfig}. Payment options for the shop.
     * Omitted when the shop has no override. Payment settings for a checkout: the enabled payment
     * options and a note shown with payment. object.promotion_config (Optional): {@link
     * CheckoutPromotionConfig}. Promotion settings for shop checkouts. Omitted when the shop has
     * no override. Promotion settings for a checkout: whether automatic promotions apply and
     * whether the buyer can apply promotion codes. object.redirects (Required): {@link
     * CheckoutRedirects}. Redirects configured for checkouts started from the shop. Where hosted
     * checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * object.shop_id (Required): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shop_01KEZF7C005VQBPV4FZHDZPAHE". object.status (Required): string. Availability or
     * retirement status. Value enum: "active", "inactive", "archived". object.tax (Optional):
     * {@link CheckoutTaxConfig}. Tax settings for shop checkouts. Omitted when the shop has no
     * override. Whether tax is collected for a checkout session or payment link. object.tip
     * (Optional): {@link CheckoutTipConfig}. Tipping options for the shop. Omitted when the shop
     * has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed
     * amount options, the default tip, and custom tips. object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.url
     * (Required): string. The hosted shop address. Live shops use the merchant's healthy custom
     * checkout hostname when available. object.version (Required): integer. Persisted version of
     * this resource's owned state. Expanded resources and external observations can change
     * independently. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.buyer_fields (Optional): {@link
     * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
     * Omitted when the shop has no override. previous_attributes.buyer_fields.anyOf[1] (Value):
     * {@link CheckoutBuyerFieldsPreviousAttributes}. previous_attributes.buyer_fields.anyOf[2]
     * (Value): null. previous_attributes.checkout_session_expires_in_seconds (Optional): integer
     * or null. Checkout lifetime in seconds. Null when checkout settings apply.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[1] (Value): integer. Checkout
     * lifetime in seconds. Null when checkout settings apply. Format: int64.
     * previous_attributes.checkout_session_expires_in_seconds.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value):
     * null. previous_attributes.currency (Optional): string or null. Listing currency. Null when
     * the shop is empty. Uses ISO 4217 currency codes. previous_attributes.currency.anyOf[1]
     * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
     * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * previous_attributes.currency.anyOf[2] (Value): null. previous_attributes.custom_text
     * (Optional): {@link CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown
     * in checkout. Omitted when the shop has no override. previous_attributes.custom_text.anyOf[1]
     * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}.
     * previous_attributes.custom_text.anyOf[2] (Value): null.
     * previous_attributes.delivery_method_ids (Optional): Array of string or null. An empty array
     * follows checkout settings. previous_attributes.delivery_method_ids.anyOf[1] (Value): Array
     * of string. An empty array follows checkout settings.
     * previous_attributes.delivery_method_ids.anyOf[1][] (Value): string. Example:
     * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". previous_attributes.delivery_method_ids.anyOf[2] (Value):
     * null. previous_attributes.description (Optional): string or null. Shop description. Null
     * when unset. previous_attributes.description.anyOf[1] (Value): string. Shop description. Null
     * when unset. previous_attributes.description.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system. Null when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Null when unset. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842". previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.handle (Optional): string or null. Readable address. Null when a handle
     * has not been assigned. previous_attributes.handle.anyOf[1] (Value): string. Readable
     * address. Null when a handle has not been assigned. previous_attributes.handle.anyOf[2]
     * (Value): null. previous_attributes.image (Optional): {@link
     * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset.
     * previous_attributes.image.anyOf[1] (Value): {@link ImageAttachmentPreviousAttributes}.
     * previous_attributes.image.anyOf[2] (Value): null. previous_attributes.inactive_message
     * (Optional): string or null. Inactive message. Null when unset.
     * previous_attributes.inactive_message.anyOf[1] (Value): string. Inactive message. Null when
     * unset. previous_attributes.inactive_message.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
     * checkout settings apply. previous_attributes.inventory_routing_source.anyOf[1] (Value):
     * {@link InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null.
     * Legal policies shown to buyers. Omitted when the shop has no override.
     * previous_attributes.legal.anyOf[1] (Value): {@link CheckoutLegalConfigPreviousAttributes}.
     * previous_attributes.legal.anyOf[2] (Value): null. previous_attributes.listing_count
     * (Optional): integer or null. The number of listings on the shop, including unavailable
     * entries. previous_attributes.listing_count.anyOf[1] (Value): integer. The number of listings
     * on the shop, including unavailable entries. Format: int32.
     * previous_attributes.listing_count.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. ID of the merchant this resource belongs to.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. previous_attributes.metadata.anyOf[1]
     * (Value): {@link MetadataMap}. previous_attributes.metadata.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. The title buyers see on the shop.
     * previous_attributes.name.anyOf[1] (Value): string. The title buyers see on the shop.
     * previous_attributes.name.anyOf[2] (Value): null. previous_attributes.payments (Optional):
     * {@link CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop.
     * Omitted when the shop has no override. previous_attributes.payments.anyOf[1] (Value): {@link
     * CheckoutPaymentConfigPreviousAttributes}. previous_attributes.payments.anyOf[2] (Value):
     * null. previous_attributes.promotion_config (Optional): {@link
     * CheckoutPromotionConfigPreviousAttributes} or null. Promotion settings for shop checkouts.
     * Omitted when the shop has no override. previous_attributes.promotion_config.anyOf[1]
     * (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
     * previous_attributes.promotion_config.anyOf[2] (Value): null. previous_attributes.redirects
     * (Optional): {@link CheckoutRedirectsPreviousAttributes} or null. Redirects configured for
     * checkouts started from the shop. previous_attributes.redirects.anyOf[1] (Value): {@link
     * CheckoutRedirectsPreviousAttributes}. previous_attributes.redirects.anyOf[2] (Value): null.
     * previous_attributes.shop_id (Optional): string or null. Shop ID.
     * previous_attributes.shop_id.anyOf[1] (Value): string. Shop ID. pattern:
     * ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * previous_attributes.shop_id.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Availability or retirement status. Value enum: "active", "inactive",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Availability or retirement
     * status. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2]
     * (Value): null. previous_attributes.tax (Optional): {@link SubscriptionTaxPreviousAttributes}
     * or null. Tax settings for shop checkouts. Omitted when the shop has no override.
     * previous_attributes.tax.anyOf[1] (Value): {@link SubscriptionTaxPreviousAttributes}.
     * previous_attributes.tax.anyOf[2] (Value): null. previous_attributes.tip (Optional): {@link
     * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when the
     * shop has no override. previous_attributes.tip.anyOf[1] (Value): {@link
     * CheckoutTipConfigPreviousAttributes}. previous_attributes.tip.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value):
     * null. previous_attributes.url (Optional): string or null. The hosted shop address. Live
     * shops use the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[1] (Value): string. The hosted shop address. Live shops use
     * the merchant's healthy custom checkout hostname when available.
     * previous_attributes.url.anyOf[2] (Value): null. previous_attributes.version (Optional):
     * integer or null. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. previous_attributes.version.anyOf[1]
     * (Value): integer. Persisted version of this resource's owned state. Expanded resources and
     * external observations can change independently. Format: uint64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_fields (Optional): {@link CheckoutBuyerFields}. Buyer information requested at
         * checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each
         * field you leave out uses your checkout settings. checkout_session_expires_in_seconds
         * (Required): integer or null. Checkout lifetime in seconds. Null when checkout settings
         * apply. Format: int64. created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". currency (Required): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3.
         * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". custom_text (Optional): {@link
         * CheckoutCustomTextConfig}. Merchant text shown in checkout. Omitted when the shop has no
         * override. Custom text shown in checkout: an order summary message and a shipping address
         * label. delivery_method_ids (Required): Array of string. An empty array follows checkout
         * settings. delivery_method_ids[] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". description (Required): string or null. Shop
         * description. Null when unset. external_reference_id (Required): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * minLength: 1. maxLength: 255. Example: "warehouse-1842". handle (Required): string or
         * null. Readable address. Null when a handle has not been assigned. image (Required):
         * {@link ImageAttachment} or null. Cover image. Null when unset. image.anyOf[1] (Value):
         * {@link ImageAttachment}. An image attached to a resource, with its display properties
         * and attachment metadata. image.anyOf[2] (Value): null. inactive_message (Required):
         * string or null. Inactive message. Null when unset. inventory_routing_source (Required):
         * {@link InventoryRoutingSource} or null. Explicit inventory routing. Null when checkout
         * settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory
         * from: a fixed Location, an inventory allocation policy, or one policy revision.
         * inventory_routing_source.anyOf[2] (Value): null. legal (Optional): {@link
         * LegalSettings}. Legal policies shown to buyers. Omitted when the shop has no override.
         * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
         * refund policy, shipping policy, and contract. listing_count (Required): integer. The
         * number of listings on the shop, including unavailable entries. Format: int32.
         * merchant_id (Required): string. ID of the merchant this resource belongs to. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. name
         * (Required): string. The title buyers see on the shop. payments (Optional): {@link
         * CheckoutPaymentConfig}. Payment options for the shop. Omitted when the shop has no
         * override. Payment settings for a checkout: the enabled payment options and a note shown
         * with payment. promotion_config (Optional): {@link CheckoutPromotionConfig}. Promotion
         * settings for shop checkouts. Omitted when the shop has no override. Promotion settings
         * for a checkout: whether automatic promotions apply and whether the buyer can apply
         * promotion codes. redirects (Required): {@link CheckoutRedirects}. Redirects configured
         * for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed
         * when surface is headless; use payment_return_url. shop_id (Required): string. Shop ID.
         * pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
         * status (Required): string. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". tax (Optional): {@link CheckoutTaxConfig}. Tax settings for shop
         * checkouts. Omitted when the shop has no override. Whether tax is collected for a
         * checkout session or payment link. tip (Optional): {@link CheckoutTipConfig}. Tipping
         * options for the shop. Omitted when the shop has no override. Tip settings for a
         * checkout: whether tips are enabled, the percent or fixed amount options, the default
         * tip, and custom tips. updated_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". url (Required): string. The hosted shop
         * address. Live shops use the merchant's healthy custom checkout hostname when available.
         * version (Required): integer. Persisted version of this resource's owned state. Expanded
         * resources and external observations can change independently. Format: uint64. minimum:
         * 1.
         */
        "object": {
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override. What
             * checkout asks the buyer for. Each field you leave out uses your checkout settings.
             */
            "buyer_fields"?: CheckoutBuyerFields;
            /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. */
            "checkout_session_expires_in_seconds": number | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
             */
            "currency": string | null;
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. Custom text
             * shown in checkout: an order summary message and a shipping address label.
             */
            "custom_text"?: CheckoutCustomTextConfig;
            /**
             * An empty array follows checkout settings. [] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_ids": Array<string>;
            /** Shop description. Null when unset. */
            "description": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * minLength: 1. maxLength: 255. Example: "warehouse-1842".
             */
            "external_reference_id": string | null;
            /** Readable address. Null when a handle has not been assigned. */
            "handle": string | null;
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link ImageAttachment}. An image
             * attached to a resource, with its display properties and attachment metadata.
             * anyOf[2] (Value): null.
             */
            "image": ((ImageAttachment) | (null));
            /** Inactive message. Null when unset. */
            "inactive_message": string | null;
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSource}. Where an order, payment link, or reservation routes
             * inventory from: a fixed Location, an inventory allocation policy, or one policy
             * revision. anyOf[2] (Value): null.
             */
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. Legal
             * settings for a checkout: whether buyers must accept terms, and links to the terms,
             * refund policy, shipping policy, and contract.
             */
            "legal"?: LegalSettings;
            /** The number of listings on the shop, including unavailable entries. Format: int32. */
            "listing_count": number;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** The title buyers see on the shop. */
            "name": string;
            /**
             * Payment options for the shop. Omitted when the shop has no override. Payment
             * settings for a checkout: the enabled payment options and a note shown with payment.
             */
            "payments"?: CheckoutPaymentConfig;
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * Promotion settings for a checkout: whether automatic promotions apply and whether
             * the buyer can apply promotion codes.
             */
            "promotion_config"?: CheckoutPromotionConfig;
            /**
             * Redirects configured for checkouts started from the shop. Where hosted checkout
             * sends the buyer. Not allowed when surface is headless; use payment_return_url.
             */
            "redirects": CheckoutRedirects;
            /**
             * Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example:
             * "shop_01KEZF7C005VQBPV4FZHDZPAHE".
             */
            "shop_id": string;
            /** Availability or retirement status. Value enum: "active", "inactive", "archived". */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax
             * is collected for a checkout session or payment link.
             */
            "tax"?: CheckoutTaxConfig;
            /**
             * Tipping options for the shop. Omitted when the shop has no override. Tip settings
             * for a checkout: whether tips are enabled, the percent or fixed amount options, the
             * default tip, and custom tips.
             */
            "tip"?: CheckoutTipConfig;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available.
             */
            "url": string;
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
         * state, including synthetic test events. buyer_fields (Optional): {@link
         * CheckoutBuyerFieldsPreviousAttributes} or null. Buyer information requested at checkout.
         * Omitted when the shop has no override. buyer_fields.anyOf[1] (Value): {@link
         * CheckoutBuyerFieldsPreviousAttributes}. buyer_fields.anyOf[2] (Value): null.
         * checkout_session_expires_in_seconds (Optional): integer or null. Checkout lifetime in
         * seconds. Null when checkout settings apply. checkout_session_expires_in_seconds.anyOf[1]
         * (Value): integer. Checkout lifetime in seconds. Null when checkout settings apply.
         * Format: int64. checkout_session_expires_in_seconds.anyOf[2] (Value): null. created_at
         * (Optional): string or null. RFC3339 timestamp. created_at.anyOf[1] (Value): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. currency (Optional): string or null. Listing
         * currency. Null when the shop is empty. Uses ISO 4217 currency codes. currency.anyOf[1]
         * (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency
         * codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         * currency.anyOf[2] (Value): null. custom_text (Optional): {@link
         * CheckoutCustomTextConfigPreviousAttributes} or null. Merchant text shown in checkout.
         * Omitted when the shop has no override. custom_text.anyOf[1] (Value): {@link
         * CheckoutCustomTextConfigPreviousAttributes}. custom_text.anyOf[2] (Value): null.
         * delivery_method_ids (Optional): Array of string or null. An empty array follows checkout
         * settings. delivery_method_ids.anyOf[1] (Value): Array of string. An empty array follows
         * checkout settings. delivery_method_ids.anyOf[1][] (Value): string. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_method_ids.anyOf[2] (Value): null.
         * description (Optional): string or null. Shop description. Null when unset.
         * description.anyOf[1] (Value): string. Shop description. Null when unset.
         * description.anyOf[2] (Value): null. external_reference_id (Optional): string or null.
         * Caller-owned identifier for this resource in an external system. Null when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example:
         * "warehouse-1842". external_reference_id.anyOf[2] (Value): null. handle (Optional):
         * string or null. Readable address. Null when a handle has not been assigned.
         * handle.anyOf[1] (Value): string. Readable address. Null when a handle has not been
         * assigned. handle.anyOf[2] (Value): null. image (Optional): {@link
         * ImageAttachmentPreviousAttributes} or null. Cover image. Null when unset. image.anyOf[1]
         * (Value): {@link ImageAttachmentPreviousAttributes}. image.anyOf[2] (Value): null.
         * inactive_message (Optional): string or null. Inactive message. Null when unset.
         * inactive_message.anyOf[1] (Value): string. Inactive message. Null when unset.
         * inactive_message.anyOf[2] (Value): null. inventory_routing_source (Optional): {@link
         * InventoryRoutingSourcePreviousAttributes} or null. Explicit inventory routing. Null when
         * checkout settings apply. inventory_routing_source.anyOf[1] (Value): {@link
         * InventoryRoutingSourcePreviousAttributes}. inventory_routing_source.anyOf[2] (Value):
         * null. legal (Optional): {@link CheckoutLegalConfigPreviousAttributes} or null. Legal
         * policies shown to buyers. Omitted when the shop has no override. legal.anyOf[1] (Value):
         * {@link CheckoutLegalConfigPreviousAttributes}. legal.anyOf[2] (Value): null.
         * listing_count (Optional): integer or null. The number of listings on the shop, including
         * unavailable entries. listing_count.anyOf[1] (Value): integer. The number of listings on
         * the shop, including unavailable entries. Format: int32. listing_count.anyOf[2] (Value):
         * null. merchant_id (Optional): string or null. ID of the merchant this resource belongs
         * to. merchant_id.anyOf[1] (Value): string. ID of the merchant this resource belongs to.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Stored caller-owned key-value data. See
         * `MetadataInput` for key, value, and size rules. metadata.anyOf[1] (Value): {@link
         * MetadataMap}. metadata.anyOf[2] (Value): null. name (Optional): string or null. The
         * title buyers see on the shop. name.anyOf[1] (Value): string. The title buyers see on the
         * shop. name.anyOf[2] (Value): null. payments (Optional): {@link
         * CheckoutPaymentConfigPreviousAttributes} or null. Payment options for the shop. Omitted
         * when the shop has no override. payments.anyOf[1] (Value): {@link
         * CheckoutPaymentConfigPreviousAttributes}. payments.anyOf[2] (Value): null.
         * promotion_config (Optional): {@link CheckoutPromotionConfigPreviousAttributes} or null.
         * Promotion settings for shop checkouts. Omitted when the shop has no override.
         * promotion_config.anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}.
         * promotion_config.anyOf[2] (Value): null. redirects (Optional): {@link
         * CheckoutRedirectsPreviousAttributes} or null. Redirects configured for checkouts started
         * from the shop. redirects.anyOf[1] (Value): {@link CheckoutRedirectsPreviousAttributes}.
         * redirects.anyOf[2] (Value): null. shop_id (Optional): string or null. Shop ID.
         * shop_id.anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
         * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". shop_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Availability or retirement status. Value enum: "active",
         * "inactive", "archived". status.anyOf[1] (Value): string. Availability or retirement
         * status. Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. tax
         * (Optional): {@link SubscriptionTaxPreviousAttributes} or null. Tax settings for shop
         * checkouts. Omitted when the shop has no override. tax.anyOf[1] (Value): {@link
         * SubscriptionTaxPreviousAttributes}. tax.anyOf[2] (Value): null. tip (Optional): {@link
         * CheckoutTipConfigPreviousAttributes} or null. Tipping options for the shop. Omitted when
         * the shop has no override. tip.anyOf[1] (Value): {@link
         * CheckoutTipConfigPreviousAttributes}. tip.anyOf[2] (Value): null. updated_at (Optional):
         * string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2]
         * (Value): null. url (Optional): string or null. The hosted shop address. Live shops use
         * the merchant's healthy custom checkout hostname when available. url.anyOf[1] (Value):
         * string. The hosted shop address. Live shops use the merchant's healthy custom checkout
         * hostname when available. url.anyOf[2] (Value): null. version (Optional): integer or
         * null. Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. version.anyOf[1] (Value): integer. Persisted
         * version of this resource's owned state. Expanded resources and external observations can
         * change independently. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Buyer information requested at checkout. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "buyer_fields"?: ((CheckoutBuyerFieldsPreviousAttributes) | (null));
            /**
             * Checkout lifetime in seconds. Null when checkout settings apply. anyOf[1] (Value):
             * integer. Checkout lifetime in seconds. Null when checkout settings apply. Format:
             * int64. anyOf[2] (Value): null.
             */
            "checkout_session_expires_in_seconds"?: ((number) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes.
             * anyOf[1] (Value): string. Listing currency. Null when the shop is empty. Uses ISO
             * 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example:
             * "USD". anyOf[2] (Value): null.
             */
            "currency"?: ((string) | (null));
            /**
             * Merchant text shown in checkout. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "custom_text"?: ((CheckoutCustomTextConfigPreviousAttributes) | (null));
            /**
             * An empty array follows checkout settings. anyOf[1] (Value): Array of string. An
             * empty array follows checkout settings. anyOf[1][] (Value): string. Example:
             * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
             */
            "delivery_method_ids"?: ((Array<string>) | (null));
            /**
             * Shop description. Null when unset. anyOf[1] (Value): string. Shop description. Null
             * when unset. anyOf[2] (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Null when unset.
             * anyOf[1] (Value): string. Caller-owned identifier for this resource in an external
             * system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
             * anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Readable address. Null when a handle has not been assigned. anyOf[1] (Value):
             * string. Readable address. Null when a handle has not been assigned. anyOf[2]
             * (Value): null.
             */
            "handle"?: ((string) | (null));
            /**
             * Cover image. Null when unset. anyOf[1] (Value): {@link
             * ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
             */
            "image"?: ((ImageAttachmentPreviousAttributes) | (null));
            /**
             * Inactive message. Null when unset. anyOf[1] (Value): string. Inactive message. Null
             * when unset. anyOf[2] (Value): null.
             */
            "inactive_message"?: ((string) | (null));
            /**
             * Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value):
             * {@link InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Legal policies shown to buyers. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "legal"?: ((CheckoutLegalConfigPreviousAttributes) | (null));
            /**
             * The number of listings on the shop, including unavailable entries. anyOf[1] (Value):
             * integer. The number of listings on the shop, including unavailable entries. Format:
             * int32. anyOf[2] (Value): null.
             */
            "listing_count"?: ((number) | (null));
            /**
             * ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the
             * merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             * anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The title buyers see on the shop. anyOf[1] (Value): string. The title buyers see on
             * the shop. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Payment options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payments"?: ((CheckoutPaymentConfigPreviousAttributes) | (null));
            /**
             * Promotion settings for shop checkouts. Omitted when the shop has no override.
             * anyOf[1] (Value): {@link CheckoutPromotionConfigPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "promotion_config"?: ((CheckoutPromotionConfigPreviousAttributes) | (null));
            /**
             * Redirects configured for checkouts started from the shop. anyOf[1] (Value): {@link
             * CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "redirects"?: ((CheckoutRedirectsPreviousAttributes) | (null));
            /**
             * Shop ID. anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
             * Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE". anyOf[2] (Value): null.
             */
            "shop_id"?: ((string) | (null));
            /**
             * Availability or retirement status. Value enum: "active", "inactive", "archived".
             * anyOf[1] (Value): string. Availability or retirement status. Value enum: "active",
             * "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Tax settings for shop checkouts. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tax"?: ((SubscriptionTaxPreviousAttributes) | (null));
            /**
             * Tipping options for the shop. Omitted when the shop has no override. anyOf[1]
             * (Value): {@link CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
             */
            "tip"?: ((CheckoutTipConfigPreviousAttributes) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The hosted shop address. Live shops use the merchant's healthy custom checkout
             * hostname when available. anyOf[1] (Value): string. The hosted shop address. Live
             * shops use the merchant's healthy custom checkout hostname when available. anyOf[2]
             * (Value): null.
             */
            "url"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "shop.archived". */
    "event_type"?: "shop.archived";
});
export type ShopCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "shop.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_fields"?: CheckoutBuyerFields;
            "checkout_session_expires_in_seconds": number | null;
            "created_at": string;
            "currency": string | null;
            "custom_text"?: CheckoutCustomTextConfig;
            "delivery_method_ids": Array<string>;
            "description": string | null;
            "external_reference_id": string | null;
            "handle": string | null;
            "image": ((ImageAttachment) | (null));
            "inactive_message": string | null;
            "inventory_routing_source": ((InventoryRoutingSource) | (null));
            "legal"?: LegalSettings;
            "listing_count": number;
            "merchant_id": string;
            "metadata": MetadataMap;
            "name": string;
            "payments"?: CheckoutPaymentConfig;
            "promotion_config"?: CheckoutPromotionConfig;
            "redirects": CheckoutRedirects;
            "shop_id": string;
            "status": "active" | "inactive" | "archived" | (string & {});
            "tax"?: CheckoutTaxConfig;
            "tip"?: CheckoutTipConfig;
            "updated_at": string;
            "url": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "shop.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "shop.created";
});
