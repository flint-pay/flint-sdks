import type { GiftCard } from './types-23.js';
import type { GiftCardNotification } from './types-24.js';
import type { ResponseMeta } from './types-48.js';
import type { PartnerAppWithRotatedSecret, PartnerAppsListParams, PartnerWebhookEnvelope } from './types-40.js';
import type { CreateDeveloperSandboxResult } from './types-7.js';
import type { IssueSandboxAPIKeyRequestInput, InvoiceSettings, LegalSettings } from './types-32.js';
import type { CreateSandboxRequestInput } from './types-11.js';
import type { InputValue } from '../runtime.js';
import type { PaymentMethodWithSetup } from './types-43.js';
import type { MoneyValue, MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-35.js';
import type { PaymentCollection, PaymentErrorSummary, PaymentLimitSettings } from './types-41.js';
import type { BrandingSettings } from './types-1.js';
import type { CheckoutSettings } from './types-5.js';
import type { CustomerAccountSettings, CustomerEmailDeliverySettings } from './types-13.js';
import type { FulfillmentSettings } from './types-22.js';
import type { InventorySettings } from './types-28.js';
import type { PromotionSettings, ReceiptSettings } from './types-46.js';
import type { SubscriptionSettings } from './types-56.js';
import type { TaxIdentity, TaxSettings } from './types-57.js';
import type { TippingSettings } from './types-58.js';
import type { UpdateSettingsRequestInput, UpdateShipmentRequestInput } from './types-60.js';
import type { ExpandedOrderSummary, ExpandedPackageSummary } from './types-21.js';
import type { ReturnResolutionLineItemRequest } from './types-51.js';
import type { PackageCreateRequestInput } from './types-39.js';
import type { VoidShipmentRequestInput } from './types-61.js';
import type { Dimensions, DimensionsInput } from './types-20.js';
import type { Weight, WeightInput } from './types-62.js';
/**
 * The gift card after its code was rotated, with the new `code` while it can be recovered and the
 * notification sent.
 */
export type RotateGiftCardCodeResult = {
    /**
     * The full current code. Omitted after the 24-hour recovery window or when this code has been
     * replaced.
     */
    "code"?: string;
    /**
     * When recovery of this code expires. Omitted when the code cannot be recovered. Format:
     * date-time.
     */
    "code_recovery_expires_at"?: string;
    /**
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /** A message sent to a gift card recipient. */
    "gift_card_notification"?: GiftCardNotification;
};
/** A response containing `RotateGiftCardCodeResult` data. */
export type RotateGiftCardCodeResultResponse = {
    /**
     * The gift card after its code was rotated, with the new `code` while it can be recovered and
     * the notification sent.
     */
    "data": RotateGiftCardCodeResult;
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
/** The request body for: Rotate partner app secret. */
export type RotatePartnerAppSecretRequestInput = {
    /**
     * Rotate only if this matches the app's current version. A mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** A response containing `PartnerAppWithRotatedSecret` data. */
export type RotatePartnerAppSecretResponse = {
    /**
     * A partner app returned with its newly issued client secret after rotation. An application
     * that merchants can authorize to access their accounts.
     */
    "data": PartnerAppWithRotatedSecret;
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
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string;
};
/** The request body for: Rotate webhook secret. */
export type RotateWebhookSecretRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before
     * now to stop it immediately. Must be no later than 7 days from now. Null is not accepted.
     * Format: date-time. minLength: 1.
     */
    "expire_previous_secret_at"?: string | globalThis.Date;
};
/** An isolated environment for testing an integration. */
export type Sandbox = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "is_default": boolean;
    "name": string;
    /**
     * ID of the replacement created when this sandbox was reset and archived. Omitted when this
     * sandbox has not been replaced by a reset.
     */
    "replaced_by_sandbox_id"?: string;
    /**
     * ID of the sandbox this sandbox replaced during a reset. Omitted when this sandbox was not
     * created by a reset.
     */
    "replaces_sandbox_id"?: string;
    "sandbox_id": string;
    /** Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** A page of `Sandbox` objects. */
export type SandboxListResponse = {
    /**  [] (Value): {@link Sandbox}. An isolated environment for testing an integration. */
    "data": Array<Sandbox>;
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
/** A response containing `Sandbox` data. */
export type SandboxResponse = {
    /** An isolated environment for testing an integration. */
    "data": Sandbox;
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
/** A response containing `CreateDeveloperSandboxResult` data. */
export type SandboxWithAPIKeyResponse = {
    /**
     * The created sandbox is the primary resource, with the API key and one-time secret_key when
     * issue_test_key is true.
     */
    "data": CreateDeveloperSandboxResult;
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
export type SandboxesCreateAPIKeyParams = (IssueSandboxAPIKeyRequestInput);
export type SandboxesCreateParams = (CreateSandboxRequestInput);
export type SandboxesDeleteParams = {};
export type SandboxesGetParams = {};
export type SandboxesListParams = PartnerAppsListParams;
export type SandboxesResetParams = {};
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequest = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access" | (string & {});
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCode & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCode = ({
    /** minLength: 1. */
    "code": string;
    /** Value enum: "code". */
    "credential_type": "code" | (string & {});
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Value enum: "code". */
    "credential_type": unknown;
    /** minLength: 1. */
    "code": string;
}));
/** The `code` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestCodeInput = ({
    /** minLength: 1. */
    "code": string;
    /** Value enum: "code". */
    "credential_type": "code";
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & (({
    /** Value enum: "code". */
    "credential_type": ("code") & ("code");
    /** minLength: 1. */
    "code": string;
})
    & (({
    "grant_id"?: never;
}) & ({
    "recipient_access_token"?: never;
})));
/** The request body for: Save a gift card to your account. */
export type SaveMeGiftCardRequestInput = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "code", "recipient_access". */
    "credential_type": "code" | "recipient_access";
    /** minLength: 1. */
    "grant_id"?: string;
    /** minLength: 1. */
    "recipient_access_token"?: string;
})
    & ((Exclude<SaveMeGiftCardRequestCodeInput & object, readonly unknown[]>)
    | (Exclude<SaveMeGiftCardRequestRecipientAccessInput & object, readonly unknown[]>));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccess = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "recipient_access". */
    "credential_type": "recipient_access" | (string & {});
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Value enum: "recipient_access". */
    "credential_type": unknown;
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
}));
/** The `recipient_access` variant of `SaveMeGiftCardRequest`. */
export type SaveMeGiftCardRequestRecipientAccessInput = ({
    /** minLength: 1. */
    "code"?: string;
    /** Value enum: "recipient_access". */
    "credential_type": "recipient_access";
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & (({
    /** Value enum: "recipient_access". */
    "credential_type": ("recipient_access") & ("recipient_access");
    /** minLength: 1. */
    "grant_id": string;
    /** minLength: 1. */
    "recipient_access_token": string;
})
    & ({
    "code"?: never;
}));
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequest = {
    /** Value enum: "card". */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method for the current buyer. */
export type SaveMePaymentMethodRequestInput = {
    /** Value enum: "card". */
    "type"?: "card";
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequest = {
    /** The customer to save the payment method for. minLength: 1. */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card" | (string & {});
};
/** The request body for: Create a payment method. */
export type SavePaymentMethodRequestInput = {
    /** The customer to save the payment method for. minLength: 1. */
    "customer_id": string;
    /**
     * Kind of payment method to save. card is the only value and the default. Value enum: "card".
     */
    "type"?: "card";
};
/** A response containing `PaymentMethodWithSetup` data. */
export type SavePaymentMethodResponse = {
    /**
     * The saved payment method, with `client_setup` when the buyer must still complete processor
     * setup before the payment method can be used. A customer's saved payment details.
     */
    "data": PaymentMethodWithSetup;
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
    /** Public Flint ID to submit in the refused request field. */
    "resource_id": string;
    /**
     * Stable public resource name for this choice. Value enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "test_clock", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "customer_verification"
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
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "order_charge"
        | "order_line_item"
        | "order_line_item_modifier"
        | "order_payment_attempt"
        | "organization"
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
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_option"
        | "product_option_value"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "purchase_refund_allocation"
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
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
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
     * confirmation attempt. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
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
    /** Flint payment intent ID. */
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
    /** Identifier of the selected product option. */
    "option_id": string;
    /** Name of the selected product option. */
    "option_name": string;
    /** Identifier of the selected option value. */
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
     * whitespace. Format: email. minLength: 1. maxLength: 254.
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
     * Format: email. minLength: 1. maxLength: 254.
     */
    "email"?: string;
};
/**
 * Details of a service fulfillment: the scheduled start and end, timezone, completion time, and
 * notes.
 */
export type ServiceFulfillmentDetails = {
    /** When the service was completed, in RFC3339 format. Format: date-time. */
    "completed_at"?: string;
    /** Additional instructions or notes for performing the service. */
    "notes"?: string;
    /** Scheduled end of the service, in RFC3339 format. Format: date-time. */
    "scheduled_end_at"?: string;
    /** Scheduled start of the service, in RFC3339 format. Format: date-time. */
    "scheduled_start_at"?: string;
    /** Timezone used to display the service appointment. */
    "timezone"?: string;
};
/**
 * The settings for one scope (organization, merchant, location, or device), grouped by area such
 * as checkout, tax, receipts, and tipping.
 */
export type Settings = {
    /**
     * A merchant's branding settings: colors, corner radius, and font family. Checkout uses them
     * as its default theme.
     */
    "branding"?: BrandingSettings;
    /**
     * Merchant defaults for checkout: custom domain, delivery methods, expiration, payment
     * options, required contact fields, promotion codes, recovery email, and saved payment
     * details.
     */
    "checkout"?: CheckoutSettings;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Customer account settings: hosted mode, merchant account URL, presentation, route templates,
     * and what buyers may do to their own subscriptions.
     */
    "customer_account"?: CustomerAccountSettings;
    /** For each kind of customer email, whether Flint sends it or the merchant sends it. */
    "customer_email_delivery"?: CustomerEmailDeliverySettings;
    /**
     * Merchant fulfillment settings, including whether fulfillments require approval
     * (`approval_required`).
     */
    "fulfillment"?: FulfillmentSettings;
    /**
     * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for
     * each order source.
     */
    "inventory"?: InventorySettings;
    /**
     * Merchant defaults for invoices, including numbering prefixes, default memo and footer,
     * collection mode, reminders, and autopay retries.
     */
    "invoices"?: InvoiceSettings;
    /**
     * Merchant legal links and terms settings: contract, refund policy, shipping policy, and terms
     * of service URLs, and whether buyers must accept the terms.
     */
    "legal"?: LegalSettings;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Optional merchant limits that can lower Flint's payment-option and surface policy limits. */
    "payment_limits"?: PaymentLimitSettings;
    /**
     * Merchant promotion settings: whether automatic promotions and codes are enabled, and how
     * many promotions can apply to one order.
     */
    "promotions"?: PromotionSettings;
    /**
     * Receipt settings: whether receipts are emailed automatically, whether they are itemized, and
     * the header and footer text.
     */
    "receipts"?: ReceiptSettings;
    "settings_id": string;
    /**
     * Subscription settings: the default billing schedule owner, dunning retry days and end
     * action, and the backorder email.
     */
    "subscriptions"?: SubscriptionSettings;
    /**
     * Tax settings: whether tax is calculated by default and the default tax categories for line
     * items and delivery charges.
     */
    "tax"?: TaxSettings;
    /**
     *  anyOf[1] (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on
     * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
     * collection in display order; replacing the array requires the parent's expected_version.
     * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to
     * add one. anyOf[2] (Value): null.
     */
    "tax_identity": ((TaxIdentity) | (null));
    /**
     * Tipping settings: percent and fixed tip options, the preselected tip, and whether custom
     * tips are allowed.
     */
    "tipping"?: TippingSettings;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
export type SettingsGetEffectiveParams = {};
export type SettingsGetParams = {};
/** A response containing `Settings` data. */
export type SettingsResponse = {
    /**
     * The settings for one scope (organization, merchant, location, or device), grouped by area
     * such as checkout, tax, receipts, and tipping.
     */
    "data": Settings;
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
export type SettingsUpdateParams = (InputValue<UpdateSettingsRequestInput>);
/**
 * How much of an order has been paid, refunded, credited, written off, and settled as tips, and
 * what balance and outstanding amount remain.
 */
export type SettlementAmounts = {
    /**
     * outstanding_money minus credit_money. Negative when the order holds money beyond its total
     * that has not been returned. Signed monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "balance_money": MoneyValue;
    /**
     * Money collected beyond the order total and not yet refunded. Write-offs do not create
     * credit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Payments collected for the order minus money refunded to the buyer. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_collected_money": MoneyValue;
    /**
     * What is still left to collect: the order total minus paid_money and written_off_money, never
     * below zero. Refunds return money already collected and do not add to it. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * Settled payments and applied return credit. Excludes written-off invoice balances. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * Money returned to the buyer from what this order collected. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Portion of the collected money settled as tips. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "settled_tip_money": MoneyValue;
    /**
     * Invoice debt no longer owed. Reduces outstanding_money without increasing paid_money,
     * net_collected_money, or credit_money. Cannot be refunded or used to fund an exchange.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/** A shipment carrying fulfilled order items. */
export type Shipment = {
    /** Creation timestamp. Format: date-time. */
    "created_at"?: string;
    /** When the shipment was delivered, in RFC3339 format. Format: date-time. */
    "delivered_at"?: string;
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries.
     */
    "external_system"?: string;
    /** Fulfillment associated with this shipment. */
    "fulfillment_id": string;
    /**
     * Carrier handoff timestamp for outbound and return shipments, using the recorded shipped_at
     * when no separate handoff timestamp exists. For return shipments, this can satisfy an
     * after_handoff execution gate for the declared return_line_items. Format: date-time.
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
    /** Order whose items are transported by the shipment. */
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
    /** Return associated with this shipment, when its direction is return. */
    "return_id"?: string;
    /**
     * Return lines and quantities allocated to this return shipment. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
    /** Stable identifier of the shipment. */
    "shipment_id": string;
    /** When the shipment was shipped, in RFC3339 format. Format: date-time. */
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
    /** Last update timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic shipment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type ShipmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.created";
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
    "event_type": "shipment.created";
});
/**
 * The `shipment.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
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
 * The `shipment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.created". */
    "event_type"?: "shipment.created";
});
/**
 * Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was
 * handed to the carrier.
 */
export type ShipmentFulfillmentDetails = {
    /** When the shipment was handed to the carrier. Format: date-time. */
    "shipped_at"?: string;
    /**
     * IANA zone the shipping window was entered in, used for display. window_start_at and
     * window_end_at are absolute timestamps, so this does not change the window. maxLength: 255.
     */
    "timezone"?: string;
    /** End of the scheduled shipping window. Format: date-time. */
    "window_end_at"?: string;
    /** Start of the scheduled shipping window. Format: date-time. */
    "window_start_at"?: string;
};
/** A page of `Shipment` objects. */
export type ShipmentListResponse = {
    /**  [] (Value): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data": Array<Shipment>;
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
/** A response containing `Shipment` data. */
export type ShipmentResponse = {
    /** A shipment carrying fulfilled order items. */
    "data": Shipment;
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
export type ShipmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Shipment;
    };
    "event_type"?: "shipment.updated";
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
    "event_type": "shipment.updated";
});
/**
 * The `shipment.updated` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ShipmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
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
 * The `shipment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ShipmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Shipment}. A shipment carrying fulfilled order items. */
    "data"?: {
        /** A shipment carrying fulfilled order items. */
        "object": Shipment;
    };
    /** Value enum: "shipment.updated". */
    "event_type"?: "shipment.updated";
});
export type ShipmentsCreatePackageParams = (PackageCreateRequestInput);
export type ShipmentsGetParams = {
    /**
     * Supported expansions: order, packages. Expansion requires commerce.orders.read. Limits: at
     * most 10 unique expand paths per request. To-many expansions are capped at 20 related objects
     * per path. Repeat expand, for example expand=order&expand=packages, or pass one
     * comma-separated value. [] enum: "order", "packages". Value enum: "order", "packages".
     * anyOf[1] (Value): Array of string. [] enum: "order", "packages". anyOf[1][] (Value): string.
     * Value enum: "order", "packages". anyOf[2] (Value): string. Value enum: "order", "packages".
     */
    "expand"?: InputValue<("order" | "packages") | readonly ("order" | "packages")[]>;
};
export type ShipmentsListParams = {
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
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
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across shipment ID and external reference ID. Text fields match any part of the
     * value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and
     * need the type prefix, such as shp_01.
     */
    "query"?: InputValue<string>;
    /** Filter by linked Return ID. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
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
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". Value enum: "created", "packed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[1][] (Value): string. Value enum: "created", "packed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". anyOf[2] (Value): string. Value enum: "created", "packed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
     * Filter by shipment direction. Values within this filter are combined with OR. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "outbound", "return". Value enum: "outbound", "return".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "outbound", "return". anyOf[1][]
     * (Value): string. Value enum: "outbound", "return". anyOf[2] (Value): string. Value enum:
     * "outbound", "return".
     */
    "direction"?: InputValue<("outbound" | "return") | readonly ("outbound" | "return")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type ShipmentsUpdateParams = (InputValue<UpdateShipmentRequestInput>);
export type ShipmentsVoidParams = (InputValue<VoidShipmentRequestInput>);
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
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
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
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
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
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
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: Weight;
});
