import type { CreateDemoSessionRequestInput } from './types-9.js';
import type { TextModifierRequest } from './types-65.js';
import type { MoneyValue, MoneyValueInput, NextAction } from './types-38.js';
import type { SendOrderReceiptRequest } from './types-59.js';
import type { PaymentLinkResolvePrefillRequestInput } from './types-46.js';
import type { BuyerCheckoutSessionWithSecret, BuyerAction } from './types-1.js';
import type { InputValue } from '../runtime.js';
import type { ConfirmReturnResolutionRequestInput } from './types-7.js';
import type { RefundDestinations, RefundDestinationsInput, Refund } from './types-52.js';
import type { OrderEdit } from './types-40.js';
import type { GetReturnDispositionResponse, GetReturnResolutionResponse } from './types-25.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedShipmentSummary } from './types-24.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type {
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnInspection,
    ReturnLineItem,
    ReturnPolicyEvaluation
} from './types-55.js';
import type { ReturnReceipt, ReturnResolution } from './types-56.js';
import type { ReturnResource } from './types-57.js';
import type { CancelReturnDispositionRequestInput } from './types-4.js';
import type { DisputesAcceptParams } from './types-23.js';
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequest = {
    /** Your note explaining this action. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The request body for: Resend webhook delivery. */
export type ResendWebhookDeliveryRequestInput = ResendWebhookDeliveryRequest;
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequest = {
    /**
     * Omit to use quickstart. An explicit empty or unsupported template is invalid. Default:
     * "quickstart". Value enum: "quickstart".
     */
    "template"?: "quickstart" | (string & {});
};
/** The request body for: Reset demo session. */
export type ResetDemoSessionRequestInput = CreateDemoSessionRequestInput;
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequest = {
    /**
     * When decision is approve, cancel every non-canceled subscription immediately before erasure.
     * Defaults to false. Saved on first approval; omit on retries or send the original value.
     */
    "cancel_subscriptions"?: boolean;
    /**
     * Whether to erase the customer's personal data or keep the customer as is. Value enum:
     * "approve", "reject".
     */
    "decision": "approve" | "reject" | (string & {});
    /**
     * Optional plain-text explanation visible to the buyer. Only allowed when decision is reject.
     * Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not
     * allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     */
    "decision_reason"?: string;
    /**
     * When decision is approve, archive active and pending saved payment methods before erasure.
     * Defaults to false. Subscriptions are canceled first when both options are selected. Saved on
     * first approval; omit on retries or send the original value.
     */
    "remove_payment_methods"?: boolean;
};
/** The request body for: Resolve a customer deletion request. */
export type ResolveCustomerDeletionRequestInput = {
    /**
     * When decision is approve, cancel every non-canceled subscription immediately before erasure.
     * Defaults to false. Saved on first approval; omit on retries or send the original value.
     */
    "cancel_subscriptions"?: boolean;
    /**
     * Whether to erase the customer's personal data or keep the customer as is. Value enum:
     * "approve", "reject".
     */
    "decision": "approve" | "reject";
    /**
     * Optional plain-text explanation visible to the buyer. Only allowed when decision is reject.
     * Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not
     * allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     */
    "decision_reason"?: string;
    /**
     * When decision is approve, archive active and pending saved payment methods before erasure.
     * Defaults to false. Subscriptions are canceled first when both options are selected. Saved on
     * first approval; omit on retries or send the original value.
     */
    "remove_payment_methods"?: boolean;
};
/** The request body for: Resolve order inventory exception. */
export type ResolveOrderInventoryExceptionRequestInput = {
    /**
     * Your note explaining this action. Leading and trailing whitespace is removed; the remaining
     * note can contain at most 500 characters. minLength: 1.
     */
    "reason_message"?: string;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequest = {
    /**
     * ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`.
     * minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or
     * `text`. The text a buyer entered for a text modifier group on a payment link line item.
     */
    "text"?: TextModifierRequest;
};
/**
 * A modifier selection for a payment link line item: a modifier option with a quantity, or a text
 * value.
 */
export type ResolvePaymentLinkLineItemModifierRequestInput = {
    /**
     * ID of the modifier option the buyer chose. Send exactly one of `modifier_id` or `text`.
     * minLength: 1. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S".
     */
    "modifier_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity"?: number;
    /**
     * The text the buyer entered for a text modifier group. Send exactly one of `modifier_id` or
     * `text`. The text a buyer entered for a text modifier group on a payment link line item.
     */
    "text"?: ResolvePaymentLinkTextModifierRequestInput;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiers = {
    /**
     * The buyer's modifier selections for the line item. Required, and `null` is not accepted.
     * Send an empty array when the buyer chose none. [] (Value): {@link
     * ResolvePaymentLinkLineItemModifierRequest}. A modifier selection for a payment link line
     * item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequest>;
};
/** The modifier selections for one payment link line item when resolving a payment link. */
export type ResolvePaymentLinkLineItemModifiersInput = {
    /**
     * The buyer's modifier selections for the line item. Required, and `null` is not accepted.
     * Send an empty array when the buyer chose none. [] (Value): {@link
     * ResolvePaymentLinkLineItemModifierRequestInput}. A modifier selection for a payment link
     * line item: a modifier option with a quantity, or a text value.
     */
    "modifiers"?: Array<ResolvePaymentLinkLineItemModifierRequestInput>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequest = {
    /**
     * One attendee name per ticket on an event payment link, in line_items order: each tier's
     * tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being
     * bought. Required when event_config.collect_attendee_names is true, and optional otherwise.
     * Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed.
     * Flint copies the names onto the tickets when the order is paid, as each ticket's
     * attendee_name, and never stores them in metadata. minItems: 1. [] (Value): string.
     * minLength: 1.
     */
    "attendee_names"?: Array<string>;
    /**
     * Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot
     * contain the NUL character. Copied to the checkout session and order, preserving all
     * characters exactly. Anyone with the link can change it, so do not use it as proof of who
     * paid. minLength: 1. maxLength: 255.
     */
    "client_reference"?: string;
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings, and a required checkbox must be true. Flint records the answers on the order and
     * checkout session in `custom_field_answers`; omitted and empty answers to optional fields are
     * not recorded. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiers}. The modifier selections for one payment link line item
     * when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiers>;
    /**
     * Email to fill in on the next checkout step. The buyer can change it; it never links an
     * existing customer. Buyer-editable email prefill for payment-link checkout. It never
     * identifies a customer.
     */
    "prefill"?: SendOrderReceiptRequest;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /**
     * Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send
     * it unchanged when resolving the same link; read the link again after checkout_start_due_at.
     * minLength: 1.
     */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValue>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** The request body for: Resolve payment link. */
export type ResolvePaymentLinkRequestInput = {
    /**
     * One attendee name per ticket on an event payment link, in line_items order: each tier's
     * tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being
     * bought. Required when event_config.collect_attendee_names is true, and optional otherwise.
     * Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed.
     * Flint copies the names onto the tickets when the order is paid, as each ticket's
     * attendee_name, and never stores them in metadata. minItems: 1. [] (Value): string.
     * minLength: 1.
     */
    "attendee_names"?: Array<string>;
    /**
     * Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot
     * contain the NUL character. Copied to the checkout session and order, preserving all
     * characters exactly. Anyone with the link can change it, so do not use it as proof of who
     * paid. minLength: 1. maxLength: 255.
     */
    "client_reference"?: string;
    /**
     * Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as
     * strings, and a required checkbox must be true. Flint records the answers on the order and
     * checkout session in `custom_field_answers`; omitted and empty answers to optional fields are
     * not recorded. * (Value): string. minLength: 1.
     */
    "custom_field_values"?: Record<string, string>;
    /**
     * Modifier choices keyed by line item key, for catalog items. * (Value): {@link
     * ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line
     * item when resolving a payment link.
     */
    "modifiers"?: Record<string, ResolvePaymentLinkLineItemModifiersInput>;
    /**
     * Email to fill in on the next checkout step. The buyer can change it; it never links an
     * existing customer. Buyer-editable email prefill for payment-link checkout. It never
     * identifies a customer.
     */
    "prefill"?: PaymentLinkResolvePrefillRequestInput;
    /**
     * Quantities keyed by line item key (line_items[].key), each within that item's min_quantity
     * and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are
     * not supported. * (Value): integer. Whole-number quantity value; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity_overrides"?: Record<string, number>;
    /**
     * Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send
     * it unchanged when resolving the same link; read the link again after checkout_start_due_at.
     * minLength: 1.
     */
    "resolution_context": string;
    /**
     * Prices keyed by line item key, for items with allow_unit_price_adjustment, between
     * min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed
     * donation. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "unit_price_overrides"?: Record<string, MoneyValueInput>;
    /**
     * Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each
     * selection must be offered by that line and priced in its current currency. Omit a key to use
     * default_variant_id; a line without a default requires a selection. Null is not accepted. *
     * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "variant_selections"?: Record<string, string>;
};
/** A response containing `BuyerCheckoutSessionWithSecret` data. */
export type ResolvePaymentLinkResponse = {
    /**
     * The buyer checkout session and its checkout credential, created from the payment link. The
     * checkout session with any newly issued checkout credential. Hosted launches return url
     * without checkout_auth_token. Headless launches return checkout_auth_token without url.
     * Customer binding confirmation returns its newly issued credential for either surface. A
     * session in which a buyer completes an order's payment.
     */
    "data": BuyerCheckoutSessionWithSecret;
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
/** The text a buyer entered for a text modifier group on a payment link line item. */
export type ResolvePaymentLinkTextModifierRequestInput = {
    /**
     * ID of the text modifier group the buyer answered. minLength: 1. Example:
     * "mg_01KEZF7C00XKJJATARG7KDBYM9".
     */
    "modifier_group_id": string;
    /** The text the buyer entered. minLength: 1. */
    "value": string;
};
/** A reference to another resource by `resource_type` and `resource_id`. */
export type ResourceReference = {
    /** Public Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id": string;
    /**
     * Public resource kind identified by resource_id, such as payment_intent for a payment.
     * Example: "order". Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
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
};
/**
 * The activity timeline for one resource, such as API requests, webhook events and deliveries, and
 * image changes. Request entries include the resource itself and one level of directly owned
 * resources, resolved when the timeline is read: orders include their payment intents, public
 * refunds, fulfillments, returns, invoices, and disputes; payment intents include their public
 * refunds and disputes. Included requests require the caller's read access to each owned resource
 * type. Types the caller cannot read are excluded before pagination. Ownership follows the child
 * resource's order_id or payment_intent_id. Other resource types include only directly attributed
 * requests. Internal payment-refund children are excluded. attributed_resource always names the
 * resource the request log is attributed to. Webhook and image entries remain scoped to the
 * timeline resource. Page sizes and ordering are unchanged.
 */
export type ResourceTimeline = {
    /**
     * Timeline entries for the resource, each tagged by `entry_type`. Narrowed by `include`,
     * `occurred_after`, and `occurred_before`. [] (Value): {@link ResourceTimelineEntry}. One
     * entry in a resource timeline. The `entry_type` selects which of the request, webhook, or
     * image fields are present.
     */
    "entries": Array<ResourceTimelineEntry>;
    /** ID of the resource this timeline is for. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id": string;
    /**
     * Type of the resource this timeline is for. Example: "order". Value enum: "api_key",
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
    /** `true` when the timeline is for test mode data and `false` for live data. */
    "test": boolean;
};
/** An API request recorded in this resource's timeline. */
export type ResourceTimelineAPIRequestEntry = {
    /** Stable identifier of this log entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "api_request_log_id": string;
    /**
     * The resource this request log is attributed to. Always present: the timeline resource for a
     * direct request, or its directly owned resource for an included request. A reference to
     * another resource by `resource_type` and `resource_id`.
     */
    "attributed_resource": ResourceReference;
    /**
     * Who made this request. An API key, workload token, or partner app token records that API
     * key, workload identity, or partner app installation. A Dashboard write, CLI login, or
     * onboarding session records the user. A buyer checkout request records the checkout session.
     * A buyer account request records the customer session. A request made with invoice access
     * records the invoice. Absent when Flint cannot attribute the request. A reference to another
     * resource by `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent
     * none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$. Example: "checkout-1842".
     */
    "client_request_id"?: string;
    /**
     * The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint
     * starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     * Example: "0123456789abcdef0123456789abcdef".
     */
    "client_trace_id"?: string;
    /** Always `api_request` for this kind of entry. Value enum: "api_request". */
    "entry_type": "api_request" | (string & {});
    /** The response's top-level error `code`. Absent for successful requests. */
    "error_code"?: string;
    /** A short explanation of why the request failed. Absent for successful requests. */
    "error_summary"?: string;
    /**
     * The error envelope's `type` for this response. Value enum: "authentication_error",
     * "authorization_error", "validation_error", "not_found_error", "conflict_error",
     * "rate_limit_error", "external_service_error", "timeout_error", "unavailable_error",
     * "internal_error", "protocol_error".
     */
    "error_type"?: "authentication_error"
        | "authorization_error"
        | "validation_error"
        | "not_found_error"
        | "conflict_error"
        | "rate_limit_error"
        | "external_service_error"
        | "timeout_error"
        | "unavailable_error"
        | "internal_error"
        | "protocol_error"
        | (string & {});
    /** HTTP method of the request. */
    "http_method": string;
    /** Time Flint spent handling the request, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Request path as sent, with real IDs, such as /v1/orders/ord_123. */
    "path": string;
    /** The next action to resolve the failure. Absent when no action applies. */
    "recommended_action"?: string;
    /**
     * Full URL of the Flint guide that explains this failure. Absent when no guide applies.
     * Format: uri. Example: "https://example.com/receipt".
     */
    "reference_url"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** ID of this timeline entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "resource_timeline_entry_id": string;
    /**
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** The matched route as a method and path template, such as `POST /v1/orders`. */
    "route_pattern": string;
    /** HTTP status Flint returned. Format: int32. */
    "status_code": number;
};
/**
 * One entry in a resource timeline. The `entry_type` selects which of the request, webhook, or
 * image fields are present.
 */
export type ResourceTimelineEntry = ((ResourceTimelineAPIRequestEntry)
    | (ResourceTimelineWebhookEventEntry)
    | (ResourceTimelineWebhookDeliveryAttemptEntry)
    | (ResourceTimelineImageMutationEntry)
    | (Record<string, unknown>));
/** A change to this resource's image attachments recorded in its timeline. */
export type ResourceTimelineImageMutationEntry = {
    /** Always `image_mutation` for this kind of entry. Value enum: "image_mutation". */
    "entry_type": "image_mutation" | (string & {});
    /** Version of the resource's image attachments after this change. Format: int64. */
    "image_version": number;
    /** The change made to the resource's images. Value enum: "replaced". */
    "mutation_kind": "replaced" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "iomevt_01KEZF7C00D4JSSDP6AB68EFF2". */
    "resource_timeline_entry_id": string;
};
/** A response containing `ResourceTimeline` data. */
export type ResourceTimelineResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The activity timeline
     * for one resource, such as API requests, webhook events and deliveries, and image changes.
     * Request entries include the resource itself and one level of directly owned resources,
     * resolved when the timeline is read: orders include their payment intents, public refunds,
     * fulfillments, returns, invoices, and disputes; payment intents include their public refunds
     * and disputes. Included requests require the caller's read access to each owned resource
     * type. Types the caller cannot read are excluded before pagination. Ownership follows the
     * child resource's order_id or payment_intent_id. Other resource types include only directly
     * attributed requests. Internal payment-refund children are excluded. attributed_resource
     * always names the resource the request log is attributed to. Webhook and image entries remain
     * scoped to the timeline resource. Page sizes and ordering are unchanged.
     */
    "data": ResourceTimeline;
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
/** A webhook delivery attempt recorded in this resource's timeline. */
export type ResourceTimelineWebhookDeliveryAttemptEntry = {
    /**
     * ID of the API request log associated with this attempt. Omitted when no request log is
     * associated. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /** Which attempt this is for the delivery, starting at 1. Format: int32. */
    "attempt_number": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /**
     * What caused this attempt. Value enum: "automatic_delivery", "automatic_retry",
     * "manual_resend", "manual_delivery".
     */
    "delivery_trigger": "automatic_delivery" | "automatic_retry" | "manual_resend" | "manual_delivery" | (string & {});
    /** How long the attempt took, in milliseconds. Format: int64. */
    "duration_milliseconds"?: number;
    /**
     * Always `webhook_delivery_attempt` for this kind of entry. Value enum:
     * "webhook_delivery_attempt".
     */
    "entry_type": "webhook_delivery_attempt" | (string & {});
    /**
     * The kind of failure for this attempt. Present only when this attempt's `status` is `failed`.
     * Value enum: "webhook_timeout", "webhook_dns", "webhook_tls", "webhook_connection",
     * "webhook_blocked_target", "webhook_request", "webhook_redirect", "webhook_http_4xx",
     * "webhook_http_5xx", "webhook_payload_render", "webhook_delivery".
     */
    "error_category"?: "webhook_timeout"
        | "webhook_dns"
        | "webhook_tls"
        | "webhook_connection"
        | "webhook_blocked_target"
        | "webhook_request"
        | "webhook_redirect"
        | "webhook_http_4xx"
        | "webhook_http_5xx"
        | "webhook_payload_render"
        | "webhook_delivery"
        | (string & {});
    /**
     * A concise explanation of the failure for this attempt. Present only when this attempt's
     * `status` is `failed`.
     */
    "error_summary"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /**
     * The next step to resolve this attempt's failure. Present only when this attempt's `status`
     * is `failed`.
     */
    "recommended_action"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R". */
    "resource_timeline_entry_id": string;
    /**
     * Whether sending this delivery again without changing your endpoint is likely to succeed.
     * Present only when this attempt's `status` is `failed`. While the delivery is pending, Flint
     * retries automatically either way.
     */
    "retryable"?: boolean;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Outcome of this individual delivery attempt. Value enum: "pending", "delivered", "failed".
     */
    "status": "pending" | "delivered" | "failed" | (string & {});
    /** HTTP status code the endpoint returned. Format: int32. */
    "status_code"?: number;
    /** ID of the delivery attempt. Example: "watt_01KEZF7C00RG6XMCAFJB8HH55R". */
    "webhook_delivery_attempt_id": string;
    /** ID of the delivery the attempt belongs to. Example: "wdel_01KEZF7C001DWSNDCDZHCTBN0A". */
    "webhook_delivery_id": string;
    /** ID of the endpoint the delivery goes to. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN". */
    "webhook_endpoint_id": string;
    /** ID of the event being delivered. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
/** A webhook event recorded in this resource's timeline. */
export type ResourceTimelineWebhookEventEntry = {
    /**
     * ID of the API request log associated with this event. Omitted when no request log is
     * associated. Example: "rlog_01KEZF7C008XJCH6BHA224X46F".
     */
    "api_request_log_id"?: string;
    /** Always `webhook_event` for this kind of entry. Value enum: "webhook_event". */
    "entry_type": "webhook_event" | (string & {});
    /**
     * Type of webhook event recorded for this resource. Value enum: "api_key.created",
     * "api_key.revoked", "api_key.updated", "balance.updated", "balance_transaction.created",
     * "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated",
     * "category.created", "category.deleted", "category.updated", "checkout_session.closed",
     * "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated",
     * "checkout_session.paid", "checkout_session.partially_paid", "checkout_session.updated",
     * "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided",
     * "credit_note_allocation.created", "credit_note_allocation.reversed",
     * "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted",
     * "customer.updated", "customer_deletion_request.completed",
     * "customer_deletion_request.created", "customer_deletion_request.failed",
     * "customer_deletion_request.processing", "customer_deletion_request.rejected",
     * "customer_email_preferences.updated", "delivery_location_set.archived",
     * "delivery_location_set.created", "delivery_location_set.updated",
     * "delivery_method.activated", "delivery_method.archived", "delivery_method.created",
     * "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.archived",
     * "delivery_profile.created", "delivery_profile.updated", "delivery_rate_callback.activated",
     * "delivery_rate_callback.archived", "delivery_rate_callback.created",
     * "delivery_rate_callback.deactivated", "delivery_rate_callback.updated",
     * "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived",
     * "delivery_zone.created", "delivery_zone.updated", "dispute.created",
     * "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented",
     * "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked",
     * "environment_grant.updated", "fraud_warning.created", "fraud_warning.updated",
     * "fulfillment.canceled", "fulfillment.completed", "fulfillment.created",
     * "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created",
     * "gift_card.created", "gift_card.updated", "gift_card_load.created",
     * "gift_card_load.updated", "gift_card_notification.created",
     * "gift_card_notification.updated", "gift_card_redemption.created",
     * "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied",
     * "inventory_count.updated", "inventory_level.shortage_detected", "inventory_level.updated",
     * "inventory_receipt.created", "inventory_reservation.action_required",
     * "inventory_reservation.at_risk", "inventory_reservation.closed",
     * "inventory_reservation.committed", "inventory_reservation.consumed",
     * "inventory_reservation.created", "inventory_reservation.hold_expired",
     * "inventory_reservation.released", "inventory_reservation.updated",
     * "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost",
     * "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated",
     * "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created",
     * "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed",
     * "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible",
     * "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded",
     * "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent",
     * "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed",
     * "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed",
     * "invoice_manual_payment.created", "invoice_manual_payment.reversed",
     * "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired",
     * "invoice_payment_attempt.failed", "invoice_payment_attempt.processing",
     * "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated",
     * "merchant_billing_balance.updated", "merchant_billing_invoice.issued",
     * "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created",
     * "modifier_group.updated", "modifier_set.archived", "modifier_set.created",
     * "modifier_set.updated", "order.closed", "order.created",
     * "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid",
     * "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated",
     * "order_edit.created", "package.created", "package.updated", "partner_app.platform_approved",
     * "partner_app.platform_limited", "partner_app.platform_rejected", "partner_app.updated",
     * "partner_app_install.created", "partner_app_install.permissions_updated",
     * "partner_app_install.revoked", "partner_app_install.updated",
     * "payment_intent.authorization_expiring", "payment_intent.canceled",
     * "payment_intent.created", "payment_intent.expired",
     * "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed",
     * "payment_intent.processing", "payment_intent.requires_action",
     * "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated",
     * "payment_link.created", "payment_link.updated", "payment_method.activated",
     * "payment_method.archived", "payment_method.failed", "payment_method.updated",
     * "payment_review.closed", "payment_review.opened", "payment_review.reopened",
     * "payment_split.canceled", "payment_split.created", "payment_split.failed",
     * "payment_split.succeeded", "payment_split.updated", "payout.canceled", "payout.created",
     * "payout.failed", "payout.reversed", "payout.succeeded", "payout.updated",
     * "payout_destination.archived", "payout_destination.created", "payout_destination.disabled",
     * "payout_destination.updated", "payout_settings.updated", "platform_fee.canceled",
     * "platform_fee.created", "platform_fee.succeeded", "platform_fee.updated",
     * "platform_fee_payout.created", "platform_fee_payout.failed",
     * "platform_fee_payout.succeeded", "price_list.archived", "price_list.created",
     * "price_list.updated", "product.archived", "product.created", "product.updated",
     * "product_variant.archived", "product_variant.created", "product_variant.updated",
     * "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived",
     * "promotion_code.created", "promotion_code.updated", "reader.archived", "reader.created",
     * "reader.updated", "refund.created", "refund.failed", "refund.partially_succeeded",
     * "refund.succeeded", "refund.updated", "report.failed", "report.succeeded",
     * "return.canceled", "return.completed", "return.created", "return.decision_recorded",
     * "return.reopened", "return.updated", "return_disposition.created",
     * "return_disposition.updated", "return_inspection.acceptance_decided",
     * "return_inspection.created", "return_inspection.superseded", "return_receipt.created",
     * "return_receipt.superseded", "return_receipt.verified", "return_resolution.created",
     * "return_resolution.updated", "shipment.created", "shipment.updated",
     * "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled",
     * "subscription.created", "subscription.cycle_skipped",
     * "subscription.delivery_action_required", "subscription.delivery_pause_upcoming",
     * "subscription.delivery_updated", "subscription.dunning_exhausted",
     * "subscription.end_upcoming", "subscription.past_due", "subscription.paused",
     * "subscription.payment_succeeded", "subscription.plan_change_canceled",
     * "subscription.plan_change_scheduled", "subscription.plan_changed",
     * "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed",
     * "subscription.trial_ending", "subscription.updated",
     * "subscription_delivery_migration.completed", "subscription_payment_retry.created",
     * "subscription_payment_retry.failed", "subscription_payment_retry.succeeded",
     * "tax_calculation_callback.activated", "tax_calculation_callback.archived",
     * "tax_calculation_callback.created", "tax_calculation_callback.deactivated",
     * "tax_calculation_callback.updated", "tax_connection.updated", "test_clock.advancing",
     * "test_clock.archived", "test_clock.created", "test_clock.failed", "test_clock.ready",
     * "ticket.checked_in", "ticket.created", "ticket.updated", "ticket.voided".
     */
    "event_type": "api_key.created"
        | "api_key.revoked"
        | "api_key.updated"
        | "balance.updated"
        | "balance_transaction.created"
        | "balance_transaction.updated"
        | "bundle.archived"
        | "bundle.created"
        | "bundle.updated"
        | "category.created"
        | "category.deleted"
        | "category.updated"
        | "checkout_session.closed"
        | "checkout_session.created"
        | "checkout_session.expired"
        | "checkout_session.invalidated"
        | "checkout_session.paid"
        | "checkout_session.partially_paid"
        | "checkout_session.updated"
        | "credit_note.created"
        | "credit_note.issued"
        | "credit_note.updated"
        | "credit_note.voided"
        | "credit_note_allocation.created"
        | "credit_note_allocation.reversed"
        | "custom_domain.archived"
        | "custom_domain.updated"
        | "customer.created"
        | "customer.deleted"
        | "customer.updated"
        | "customer_deletion_request.completed"
        | "customer_deletion_request.created"
        | "customer_deletion_request.failed"
        | "customer_deletion_request.processing"
        | "customer_deletion_request.rejected"
        | "customer_email_preferences.updated"
        | "delivery_location_set.archived"
        | "delivery_location_set.created"
        | "delivery_location_set.updated"
        | "delivery_method.activated"
        | "delivery_method.archived"
        | "delivery_method.created"
        | "delivery_method.deactivated"
        | "delivery_method.updated"
        | "delivery_profile.archived"
        | "delivery_profile.created"
        | "delivery_profile.updated"
        | "delivery_rate_callback.activated"
        | "delivery_rate_callback.archived"
        | "delivery_rate_callback.created"
        | "delivery_rate_callback.deactivated"
        | "delivery_rate_callback.updated"
        | "delivery_revocation.created"
        | "delivery_selection.committed"
        | "delivery_zone.archived"
        | "delivery_zone.created"
        | "delivery_zone.updated"
        | "dispute.created"
        | "dispute.inquiry_closed"
        | "dispute.lost"
        | "dispute.needs_response"
        | "dispute.prevented"
        | "dispute.updated"
        | "dispute.won"
        | "environment_grant.created"
        | "environment_grant.revoked"
        | "environment_grant.updated"
        | "fraud_warning.created"
        | "fraud_warning.updated"
        | "fulfillment.canceled"
        | "fulfillment.completed"
        | "fulfillment.created"
        | "fulfillment.failed"
        | "fulfillment.updated"
        | "fulfillment_event.created"
        | "gift_card.created"
        | "gift_card.updated"
        | "gift_card_load.created"
        | "gift_card_load.updated"
        | "gift_card_notification.created"
        | "gift_card_notification.updated"
        | "gift_card_redemption.created"
        | "gift_card_redemption.updated"
        | "gift_card_transaction.created"
        | "inventory_count.applied"
        | "inventory_count.updated"
        | "inventory_level.shortage_detected"
        | "inventory_level.updated"
        | "inventory_receipt.created"
        | "inventory_reservation.action_required"
        | "inventory_reservation.at_risk"
        | "inventory_reservation.closed"
        | "inventory_reservation.committed"
        | "inventory_reservation.consumed"
        | "inventory_reservation.created"
        | "inventory_reservation.hold_expired"
        | "inventory_reservation.released"
        | "inventory_reservation.updated"
        | "inventory_transfer.closed"
        | "inventory_transfer.departed"
        | "inventory_transfer.lost"
        | "inventory_transfer.received"
        | "inventory_transfer.returned"
        | "inventory_transfer.updated"
        | "invoice.collection_block_resolved"
        | "invoice.collection_blocked"
        | "invoice.created"
        | "invoice.credited"
        | "invoice.issue_failed"
        | "invoice.issued"
        | "invoice.late_fee_assessed"
        | "invoice.late_fee_due"
        | "invoice.late_fee_waived"
        | "invoice.marked_uncollectible"
        | "invoice.overdue"
        | "invoice.paid"
        | "invoice.partially_paid"
        | "invoice.partially_refunded"
        | "invoice.refunded"
        | "invoice.reminder_due"
        | "invoice.reopened"
        | "invoice.sent"
        | "invoice.updated"
        | "invoice.voided"
        | "invoice_delivery_attempt.failed"
        | "invoice_delivery_attempt.sent"
        | "invoice_delivery_attempt.suppressed"
        | "invoice_manual_payment.created"
        | "invoice_manual_payment.reversed"
        | "invoice_payment_attempt.canceled"
        | "invoice_payment_attempt.expired"
        | "invoice_payment_attempt.failed"
        | "invoice_payment_attempt.processing"
        | "invoice_payment_attempt.settled"
        | "merchant.readiness_updated"
        | "merchant.updated"
        | "merchant_billing_balance.updated"
        | "merchant_billing_invoice.issued"
        | "merchant_billing_invoice.updated"
        | "modifier_group.archived"
        | "modifier_group.created"
        | "modifier_group.updated"
        | "modifier_set.archived"
        | "modifier_set.created"
        | "modifier_set.updated"
        | "order.closed"
        | "order.created"
        | "order.inventory_exception_created"
        | "order.inventory_exception_resolved"
        | "order.paid"
        | "order.partially_paid"
        | "order.partially_refunded"
        | "order.refunded"
        | "order.updated"
        | "order_edit.created"
        | "package.created"
        | "package.updated"
        | "partner_app.platform_approved"
        | "partner_app.platform_limited"
        | "partner_app.platform_rejected"
        | "partner_app.updated"
        | "partner_app_install.created"
        | "partner_app_install.permissions_updated"
        | "partner_app_install.revoked"
        | "partner_app_install.updated"
        | "payment_intent.authorization_expiring"
        | "payment_intent.canceled"
        | "payment_intent.created"
        | "payment_intent.expired"
        | "payment_intent.fulfillment_hold_updated"
        | "payment_intent.payment_failed"
        | "payment_intent.processing"
        | "payment_intent.requires_action"
        | "payment_intent.requires_capture"
        | "payment_intent.succeeded"
        | "payment_intent.updated"
        | "payment_link.created"
        | "payment_link.updated"
        | "payment_method.activated"
        | "payment_method.archived"
        | "payment_method.failed"
        | "payment_method.updated"
        | "payment_review.closed"
        | "payment_review.opened"
        | "payment_review.reopened"
        | "payment_split.canceled"
        | "payment_split.created"
        | "payment_split.failed"
        | "payment_split.succeeded"
        | "payment_split.updated"
        | "payout.canceled"
        | "payout.created"
        | "payout.failed"
        | "payout.reversed"
        | "payout.succeeded"
        | "payout.updated"
        | "payout_destination.archived"
        | "payout_destination.created"
        | "payout_destination.disabled"
        | "payout_destination.updated"
        | "payout_settings.updated"
        | "platform_fee.canceled"
        | "platform_fee.created"
        | "platform_fee.succeeded"
        | "platform_fee.updated"
        | "platform_fee_payout.created"
        | "platform_fee_payout.failed"
        | "platform_fee_payout.succeeded"
        | "price_list.archived"
        | "price_list.created"
        | "price_list.updated"
        | "product.archived"
        | "product.created"
        | "product.updated"
        | "product_variant.archived"
        | "product_variant.created"
        | "product_variant.updated"
        | "promotion.archived"
        | "promotion.created"
        | "promotion.updated"
        | "promotion_code.archived"
        | "promotion_code.created"
        | "promotion_code.updated"
        | "reader.archived"
        | "reader.created"
        | "reader.updated"
        | "refund.created"
        | "refund.failed"
        | "refund.partially_succeeded"
        | "refund.succeeded"
        | "refund.updated"
        | "report.failed"
        | "report.succeeded"
        | "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.updated"
        | "return_disposition.created"
        | "return_disposition.updated"
        | "return_inspection.acceptance_decided"
        | "return_inspection.created"
        | "return_inspection.superseded"
        | "return_receipt.created"
        | "return_receipt.superseded"
        | "return_receipt.verified"
        | "return_resolution.created"
        | "return_resolution.updated"
        | "shipment.created"
        | "shipment.updated"
        | "subscription.activated"
        | "subscription.canceled"
        | "subscription.cancellation_scheduled"
        | "subscription.created"
        | "subscription.cycle_skipped"
        | "subscription.delivery_action_required"
        | "subscription.delivery_pause_upcoming"
        | "subscription.delivery_updated"
        | "subscription.dunning_exhausted"
        | "subscription.end_upcoming"
        | "subscription.past_due"
        | "subscription.paused"
        | "subscription.payment_succeeded"
        | "subscription.plan_change_canceled"
        | "subscription.plan_change_scheduled"
        | "subscription.plan_changed"
        | "subscription.reactivated"
        | "subscription.renewal_upcoming"
        | "subscription.resumed"
        | "subscription.trial_ending"
        | "subscription.updated"
        | "subscription_delivery_migration.completed"
        | "subscription_payment_retry.created"
        | "subscription_payment_retry.failed"
        | "subscription_payment_retry.succeeded"
        | "tax_calculation_callback.activated"
        | "tax_calculation_callback.archived"
        | "tax_calculation_callback.created"
        | "tax_calculation_callback.deactivated"
        | "tax_calculation_callback.updated"
        | "tax_connection.updated"
        | "test_clock.advancing"
        | "test_clock.archived"
        | "test_clock.created"
        | "test_clock.failed"
        | "test_clock.ready"
        | "ticket.checked_in"
        | "ticket.created"
        | "ticket.updated"
        | "ticket.voided"
        | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
    /** ID of this timeline entry. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "resource_timeline_entry_id": string;
    /** ID of the event being delivered. Example: "whev_01KEZF7C00362MS3HV970TRZGS". */
    "webhook_event_id": string;
};
export type ResourceTimelinesGetParams = {
    /**
     * Optional resource type. Must match the resource_id prefix when present. Value enum:
     * "balance", "balance_transaction", "bundle", "category", "checkout_session", "credit_note",
     * "credit_note_allocation", "customer", "dispute", "fraud_warning", "inventory_count",
     * "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "invoice", "invoice_payment_term",
     * "merchant_billing_balance", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "payment_intent", "payment_link",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_variant", "promotion", "promotion_code", "reader",
     * "refund", "return", "return_activity", "return_disposition", "return_inspection",
     * "return_receipt", "return_resolution", "risk_list", "risk_list_item", "risk_rule",
     * "subscription", "subscription_plan", "test_clock".
     */
    "resource_type"?: InputValue<"balance"
        | "balance_transaction"
        | "bundle"
        | "category"
        | "checkout_session"
        | "credit_note"
        | "credit_note_allocation"
        | "customer"
        | "dispute"
        | "fraud_warning"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_reservation_line"
        | "inventory_transfer"
        | "invoice"
        | "invoice_payment_term"
        | "merchant_billing_balance"
        | "merchant_billing_invoice"
        | "merchant_signup"
        | "modifier"
        | "modifier_group"
        | "modifier_set"
        | "order"
        | "payment_intent"
        | "payment_link"
        | "payment_method"
        | "payment_method_domain"
        | "payment_review"
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "product"
        | "product_variant"
        | "promotion"
        | "promotion_code"
        | "reader"
        | "refund"
        | "return"
        | "return_activity"
        | "return_disposition"
        | "return_inspection"
        | "return_receipt"
        | "return_resolution"
        | "risk_list"
        | "risk_list_item"
        | "risk_rule"
        | "subscription"
        | "subscription_plan"
        | "test_clock">;
    /**
     * Timeline entry groups to include. Defaults to all four: requests, webhooks, attempts,
     * image_mutations. [] enum: "requests", "webhooks", "attempts", "image_mutations". [] (Value):
     * string. Value enum: "requests", "webhooks", "attempts", "image_mutations".
     */
    "include"?: InputValue<Array<"requests" | "webhooks" | "attempts" | "image_mutations">>;
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
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Public resource type: the resource's ID field name without `_id`. Clients must accept values
 * added in future releases. Value enum: "api_key", "api_request_log", "balance",
 * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
 * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
 * "custom_domain", "customer", "customer_address", "customer_deletion_request",
 * "customer_email_preferences", "customer_session", "customer_tax_exemption",
 * "customer_verification", "delivery_choice_group", "delivery_location_set", "delivery_method",
 * "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback",
 * "delivery_revocation", "delivery_selection", "delivery_zone", "demo_session", "device",
 * "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file",
 * "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
 * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
 * "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image",
 * "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision",
 * "inventory_count", "inventory_item", "inventory_level", "inventory_movement",
 * "inventory_receipt", "inventory_reservation", "inventory_reservation_line",
 * "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt",
 * "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
 * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
 * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
 * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
 * "order_line_item_modifier", "order_payment_attempt", "package", "package_item", "partner_app",
 * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
 * "payment_link_custom_field", "payment_link_line_item", "payment_method",
 * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
 * "payout_settings", "platform_fee", "platform_fee_balance_transaction", "platform_fee_payout",
 * "price_list", "price_list_price", "product", "product_option", "product_option_value",
 * "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "reader",
 * "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download",
 * "return", "return_activity", "return_disposition", "return_inspection",
 * "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision",
 * "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
 * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
 * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
 * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
 * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
 * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
 */
export type ResourceType = "api_key"
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
/**
 * The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of
 * the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void
 * credit note; Void invoice.
 */
export type ResourceVersionRequestInput = ConfirmReturnResolutionRequestInput;
/**
 * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request
 * was replayed, and any warnings.
 */
export type ResponseMeta = {
    /** API version used to produce this response. */
    "api_version"?: string;
    /** Whether this response replays a stored result for the supplied Idempotency-Key. */
    "idempotency_replayed"?: boolean;
    /**
     * Trace identifier to include when contacting Flint about this request. Example:
     * "0123456789abcdef0123456789abcdef".
     */
    "trace_id"?: string;
    /**
     * Conditions that need attention even though the request succeeded. [] (Value): {@link
     * ResponseWarning}. A non-blocking condition reported with a response. The `code` identifies
     * the condition and `severity` says how urgent it is.
     */
    "warnings"?: Array<ResponseWarning>;
};
/**
 * A non-blocking condition reported with a response. The `code` identifies the condition and
 * `severity` says how urgent it is.
 */
export type ResponseWarning = {
    /**
     * Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or
     * merchant_capability_inactive. Allowed for `merchant_onboarding_deadline`,
     * `merchant_capability_pending`, `merchant_capability_inactive` warnings. Value enum:
     * "accept_card_payments", "save_payment_methods", "accept_affirm_payments",
     * "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts",
     * "manage_payout_destinations", "manage_payout_settings".
     */
    "capability"?: "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Warning code. Clients must accept values added in future releases. Value enum:
     * "billing_interval_options_same_price", "merchant_onboarding_past_due",
     * "merchant_onboarding_deadline", "merchant_capability_pending",
     * "merchant_capability_inactive", "payout_settings_reconciling", "promotion_declined",
     * "promotion_removed", "risk_rule_limit_reached", "rule_evaluation_stage_changed",
     * "external_paid_orders_over_allowance", "replacement_codes_unavailable".
     */
    "code": "billing_interval_options_same_price"
        | "merchant_onboarding_past_due"
        | "merchant_onboarding_deadline"
        | "merchant_capability_pending"
        | "merchant_capability_inactive"
        | "payout_settings_reconciling"
        | "promotion_declined"
        | "promotion_removed"
        | "risk_rule_limit_reached"
        | "rule_evaluation_stage_changed"
        | "external_paid_orders_over_allowance"
        | "replacement_codes_unavailable"
        | (string & {});
    /**
     * Time by which the merchant must submit onboarding requirements, as an RFC 3339 UTC
     * timestamp. Present only for merchant_onboarding_deadline or merchant_onboarding_past_due
     * when a submission deadline is set. Allowed for `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline` warnings. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /** Description of the non-blocking condition. */
    "message": string;
    /**
     * Suggested actions for addressing the warning. Allowed for `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling` warnings. [] (Value): {@link
     * NextAction}. A follow-up action. When target_resource is present, send its resource_id in
     * the target request field named {resource_type}_id.
     */
    "next_actions"?: Array<NextAction>;
    /**
     * Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline,
     * merchant_capability_pending, or merchant_capability_inactive, when available. Allowed for
     * `merchant_onboarding_past_due`, `merchant_onboarding_deadline`,
     * `merchant_capability_pending`, `merchant_capability_inactive` warnings. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "observed_at"?: string;
    /**
     * Previous risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for
     * `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "previous_stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Promotion code that was accepted but did not apply, on a promotion_declined warning, or the
     * code of a removed promotion discount, on a promotion_removed warning. Allowed for
     * `promotion_declined`, `promotion_removed` warnings.
     */
    "promotion_code"?: string;
    /**
     * Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the
     * promotion decline reason (for example superseded_by_better_offer); an unrecognized value
     * falls back to not_eligible. See the Promotions reference for the full list. Allowed for
     * `promotion_declined`, `promotion_removed` warnings. Value enum: "already_applied",
     * "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled",
     * "currency_mismatch", "customer_limit_reached", "customer_mismatch", "customer_required",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "recurrence_completed", "superseded", "superseded_by_better_offer",
     * "superseded_by_higher_priority", "unknown_type".
     */
    "reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "recurrence_completed"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /**
     * End of the original order reservation's usage period, at the start of a New York calendar
     * month, as an RFC 3339 UTC timestamp. Replays preserve this original reset time. Allowed for
     * `external_paid_orders_over_allowance` warnings. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "resets_at"?: string;
    /**
     * Resource ID, paired with resource_type when the warning identifies a resource. Allowed for
     * `billing_interval_options_same_price`, `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`,
     * `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`,
     * `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * Type of the resource identified by resource_id. Allowed for
     * `billing_interval_options_same_price`, `merchant_onboarding_past_due`,
     * `merchant_onboarding_deadline`, `merchant_capability_pending`,
     * `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`,
     * `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`,
     * `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Example:
     * "order". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
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
    "resource_type"?: "api_key"
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
    /** Warning severity. Value enum: "warning", "critical". */
    "severity": "warning" | "critical" | (string & {});
    /**
     * New risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for
     * `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization",
     * "post_authorization".
     */
    "stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Discount amount this promotion would have applied had it won, on a promotion_declined
     * warning, or the amount a removed promotion discount applied before removal, on a
     * promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** Retry the remaining refund money after refund processing has failed. */
export type RetryOrderEditRefundRequest = {
    /**
     * Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen
     * on the edit. Default refund destinations for payment intent and gift card redemption
     * allocations planned by Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinations;
};
/** Retry the remaining refund money after refund processing has failed. */
export type RetryOrderEditRefundRequestInput = {
    /**
     * Refund destinations, with the same shape as on create. Omit to reuse the destinations frozen
     * on the edit. Default refund destinations for payment intent and gift card redemption
     * allocations planned by Flint. Each tender type defaults to original when omitted.
     */
    "destinations"?: RefundDestinationsInput;
};
/** A response containing `RetryOrderEditRefundResult` data. */
export type RetryOrderEditRefundResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The order edit after a
     * refund retry, with the refunds that attempt created for its remaining money.
     */
    "data": RetryOrderEditRefundResult;
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
 * The order edit after a refund retry, with the refunds that attempt created for its remaining
 * money.
 */
export type RetryOrderEditRefundResult = {
    /**
     * The edit with its current unrefunded money and supported actions. Nested child of an order:
     * immutable, completed item changes with frozen values and refund amounts. Refund completion
     * is tracked on the refunds.
     */
    "order_edit": OrderEdit;
    /**
     * Refunds created by this retry attempt. [] (Value): {@link Refund}. Money returned against a
     * collected payment.
     */
    "refunds": Array<Refund>;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the disposition is being run again. Value enum: "dependency_recovered",
     * "mapping_corrected", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return disposition. */
export type RetryReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the disposition is being run again. Value enum: "dependency_recovered",
     * "mapping_corrected", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Why the resolution is being run again. Value enum: "dependency_recovered",
     * "payment_method_updated", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Retry return resolution. */
export type RetryReturnResolutionRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Why the resolution is being run again. Value enum: "dependency_recovered",
     * "payment_method_updated", "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type RetryReturnResolutionResponse = GetReturnResolutionResponse;
/** One entry in a return's activity history. */
export type ReturnActivity = {
    /**
     * What happened, as `<resource>.<action>`. Value enum: "return.canceled", "return.completed",
     * "return.created", "return.decision_recorded", "return.reopened",
     * "return.shipment_handoff_converged", "return.updated", "return_disposition.canceled",
     * "return_disposition.created", "return_disposition.failed", "return_disposition.retried",
     * "return_disposition.succeeded", "return_inspection.corrected", "return_inspection.created",
     * "return_inspection_line_item.acceptance_decided", "return_line_item.deleted",
     * "return_line_item.inspection_waived", "return_line_item.line_item_added",
     * "return_line_item.quantity_canceled", "return_line_item.updated",
     * "return_receipt.corrected", "return_receipt.created", "return_receipt_line_item.verified",
     * "return_resolution.buyer_payment_required", "return_resolution.canceled",
     * "return_resolution.confirmed", "return_resolution.created",
     * "return_resolution.effect_failed", "return_resolution.payment_failed",
     * "return_resolution.payment_intent_updated", "return_resolution.payment_succeeded",
     * "return_resolution.refund_failed", "return_resolution.refund_succeeded",
     * "return_resolution.released", "return_resolution.replacement_fulfilled",
     * "return_resolution.replacement_fulfillment_canceled",
     * "return_resolution.replacement_order_created", "return_resolution.retried",
     * "return_resolution.updated".
     */
    "activity_type": "return.canceled"
        | "return.completed"
        | "return.created"
        | "return.decision_recorded"
        | "return.reopened"
        | "return.shipment_handoff_converged"
        | "return.updated"
        | "return_disposition.canceled"
        | "return_disposition.created"
        | "return_disposition.failed"
        | "return_disposition.retried"
        | "return_disposition.succeeded"
        | "return_inspection.corrected"
        | "return_inspection.created"
        | "return_inspection_line_item.acceptance_decided"
        | "return_line_item.deleted"
        | "return_line_item.inspection_waived"
        | "return_line_item.line_item_added"
        | "return_line_item.quantity_canceled"
        | "return_line_item.updated"
        | "return_receipt.corrected"
        | "return_receipt.created"
        | "return_receipt_line_item.verified"
        | "return_resolution.buyer_payment_required"
        | "return_resolution.canceled"
        | "return_resolution.confirmed"
        | "return_resolution.created"
        | "return_resolution.effect_failed"
        | "return_resolution.payment_failed"
        | "return_resolution.payment_intent_updated"
        | "return_resolution.payment_succeeded"
        | "return_resolution.refund_failed"
        | "return_resolution.refund_succeeded"
        | "return_resolution.released"
        | "return_resolution.replacement_fulfilled"
        | "return_resolution.replacement_fulfillment_canceled"
        | "return_resolution.replacement_order_created"
        | "return_resolution.retried"
        | "return_resolution.updated"
        | (string & {});
    /**
     * Who took the action. Who performed a return action: a buyer, merchant, integration, or the
     * system, with an optional ID.
     */
    "actor": ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Canceled whole-number quantity; fractional quantities are not supported. Present only for
     * return_line_item.quantity_canceled. Format: int64.
     */
    "quantity"?: number;
    /**
     * The reason given for the action. When Flint records a failed effect, the failure code, such
     * as `refund_creation_failed`. Value enum: "additional_merchandise_received",
     * "automatic_receipt", "buyer_payment", "buyer_request", "changed_disposition",
     * "correction_required", "created_in_error", "customer_service", "customer_service_exception",
     * "dependency_recovered", "duplicate", "duplicate_observation", "entry_error",
     * "evidence_missing", "exception_resolved", "exception_waived", "expired",
     * "inspection_confirmed", "inspection_result", "inventory_effect_failed",
     * "inventory_item_unmapped", "linked_effect_changed", "manual_completion",
     * "manual_correction", "manual_release", "manual_review", "mapping_corrected",
     * "merchant_approved", "merchant_discretion", "merchant_request", "merchant_review",
     * "not_eligible", "operator_retry", "order_match_confirmed", "other",
     * "payment_intent_creation_failed", "payment_method_updated", "policy_correction",
     * "policy_override", "quantity_unavailable", "reconciliation_correction",
     * "refund_creation_failed", "refund_line_value_unavailable",
     * "replacement_order_creation_failed", "resolution_effect_failed", "return_policy",
     * "return_shipping_cost", "risk_review", "safety_requirement", "sku_match_confirmed",
     * "source_correction", "suspected_abuse", "trusted_in_store_handoff", "warehouse_override".
     */
    "reason"?: "additional_merchandise_received"
        | "automatic_receipt"
        | "buyer_payment"
        | "buyer_request"
        | "changed_disposition"
        | "correction_required"
        | "created_in_error"
        | "customer_service"
        | "customer_service_exception"
        | "dependency_recovered"
        | "duplicate"
        | "duplicate_observation"
        | "entry_error"
        | "evidence_missing"
        | "exception_resolved"
        | "exception_waived"
        | "expired"
        | "inspection_confirmed"
        | "inspection_result"
        | "inventory_effect_failed"
        | "inventory_item_unmapped"
        | "linked_effect_changed"
        | "manual_completion"
        | "manual_correction"
        | "manual_release"
        | "manual_review"
        | "mapping_corrected"
        | "merchant_approved"
        | "merchant_discretion"
        | "merchant_request"
        | "merchant_review"
        | "not_eligible"
        | "operator_retry"
        | "order_match_confirmed"
        | "other"
        | "payment_intent_creation_failed"
        | "payment_method_updated"
        | "policy_correction"
        | "policy_override"
        | "quantity_unavailable"
        | "reconciliation_correction"
        | "refund_creation_failed"
        | "refund_line_value_unavailable"
        | "replacement_order_creation_failed"
        | "resolution_effect_failed"
        | "return_policy"
        | "return_shipping_cost"
        | "risk_review"
        | "safety_requirement"
        | "sku_match_confirmed"
        | "source_correction"
        | "suspected_abuse"
        | "trusted_in_store_handoff"
        | "warehouse_override"
        | (string & {});
    /**
     * Free text given with the reason, or the failure message for a failed effect. Can hold staff
     * notes, so only merchant credentials can read it.
     */
    "reason_message"?: string;
    /**
     * The ID of the Return or child resource the activity touched, whose type is `resource_type`.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "resource_id": string;
    /**
     * Type of the resource that changed: the part of `activity_type` before the dot. Example:
     * "return". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
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
    /** Stable identifier of the activity. Example: "retact_01KEZF7C00J26XVS5GK98PQ39D". */
    "return_activity_id": string;
    /** The Return this activity belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** Return version produced by this activity. Format: int64. minimum: 0. */
    "return_version": number;
};
/**
 * Who performed a return action: a buyer, merchant, integration, or the system, with an optional
 * ID.
 */
export type ReturnActor = {
    /**
     * ID of the actor, when one exists. Merchant reads only. Example:
     * "usr_01KEZF7C00YC8757ZYP9727JM0".
     */
    "actor_id"?: string;
    /**
     * What kind of actor acted. Example: "merchant". Value enum: "buyer", "merchant",
     * "integration", "system".
     */
    "actor_type": "buyer" | "merchant" | "integration" | "system" | (string & {});
};
export type ReturnCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.canceled";
});
/**
 * The `return.canceled` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.canceled". */
    "event_type"?: "return.canceled";
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
 * The `return.canceled` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.canceled". */
    "event_type"?: "return.canceled";
});
export type ReturnCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.completed";
});
/**
 * The `return.completed` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.completed". */
    "event_type"?: "return.completed";
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
 * The `return.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.completed". */
    "event_type"?: "return.completed";
});
/**
 * Something still owed before a return can complete, with the return line or record it concerns.
 */
export type ReturnCompletionBlocker = {
    /**
     * What is still owed before this Return can complete. Each blocker names its Return line,
     * except resolution_pending for a correction and merchandise_exception for unidentified units.
     * resolution_* codes also name return_resolution_id when a resolution exists;
     * merchandise_exception also names return_receipt_id. An empty completion_blockers array means
     * nothing is outstanding. Value enum: "decision_pending", "handoff_pending",
     * "receipt_pending", "inspection_pending", "inspection_review_required",
     * "disposition_required", "resolution_not_selected", "resolution_pending",
     * "resolution_requires_action", "resolution_failed", "merchandise_exception".
     */
    "code": "decision_pending"
        | "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "inspection_review_required"
        | "disposition_required"
        | "resolution_not_selected"
        | "resolution_pending"
        | "resolution_requires_action"
        | "resolution_failed"
        | "merchandise_exception"
        | (string & {});
    /** Explanation of what is still owed. */
    "message": string;
    /** ID of the Return line the entry is about. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /** ID of the receipt holding this blocker up. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "return_receipt_id"?: string;
    /**
     * ID of the resolution holding this blocker up. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id"?: string;
};
export type ReturnCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.created";
});
/**
 * The `return.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.created". */
    "event_type"?: "return.created";
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
 * The `return.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.created". */
    "event_type"?: "return.created";
});
export type ReturnDecisionRecordedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.decision_recorded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.decision_recorded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.decision_recorded";
});
/**
 * The `return.decision_recorded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDecisionRecordedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded";
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
 * The `return.decision_recorded` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnDecisionRecordedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
             */
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.decision_recorded". */
    "event_type"?: "return.decision_recorded";
});
/** A decision about how returned merchandise will be handled. */
export type ReturnDisposition = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the disposition. Merchant reads only. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who created the disposition. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed merchandise disposition, when available. Value enum:
     * "inventory_effect_failed", "inventory_item_unmapped".
     */
    "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
    /** Explanation of a failed merchandise disposition, when available. */
    "failure_message"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock. []
     * (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_ids": Array<string>;
    /**
     * ID of the inventory receipt the disposition recorded. Absent when it recorded none. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     */
    "inventory_receipt_id"?: string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. */
    "reason_message"?: string;
    /**
     * ID of the disposition that took over this one. Present when a replacement canceled it.
     * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaced_by_return_disposition_id"?: string;
    /**
     * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: string;
    /**
     * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id": string;
    /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * ID of the inspection line the disposition covers. Absent when it covers a receipt line.
     * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: string;
    /** ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG". */
    "return_line_item_id"?: string;
    /**
     * ID of the receipt line the disposition covers. Absent when it covers an inspection line.
     * Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: string;
    /**
     * Whether inventory has applied the disposition. Value enum: "pending", "succeeded", "failed",
     * "canceled".
     */
    "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Empty unless the parent Return is open. cancel is listed only
     * before the inventory effect starts. [] enum: "cancel", "retry". [] (Value): string. Value
     * enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
export type ReturnDispositionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_disposition.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_disposition.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_disposition.created";
});
/**
 * The `return_disposition.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDispositionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_line_item_id (Optional): string. ID of the receipt line the
     * disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether inventory
     * has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open. cancel is listed only before the inventory effect starts.
     * [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_line_item_id (Optional): string. ID
         * of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_line_item_id (Optional): string. ID of the receipt line the disposition
         * covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether inventory has
         * applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
         * supported_actions (Required): Array of string. Actions that can succeed now. Empty
         * unless the parent Return is open. cancel is listed only before the inventory effect
         * starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value enum:
         * "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created";
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
 * The `return_disposition.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnDispositionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_line_item_id (Optional): string. ID of the receipt line the
     * disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether inventory
     * has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open. cancel is listed only before the inventory effect starts.
     * [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_line_item_id (Optional): string. ID
         * of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_line_item_id (Optional): string. ID of the receipt line the disposition
         * covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether inventory has
         * applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
         * supported_actions (Required): Array of string. Actions that can succeed now. Empty
         * unless the parent Return is open. cancel is listed only before the inventory effect
         * starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value enum:
         * "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_disposition.created". */
    "event_type"?: "return_disposition.created";
});
export type ReturnDispositionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnDisposition>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_disposition.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            "cancellation_reason_message"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            "external_reference_id"?: string;
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            "failure_message"?: string;
            "inventory_location_id"?: string;
            "inventory_movement_ids": Array<string>;
            "inventory_receipt_id"?: string;
            "metadata": MetadataMap;
            "occurred_at": string;
            "quantity": number;
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            "reason_message"?: string;
            "replaced_by_return_disposition_id"?: string;
            "replaces_return_disposition_id"?: string;
            "return_disposition_id": string;
            "return_id": string;
            "return_inspection_line_item_id"?: string;
            "return_line_item_id"?: string;
            "return_receipt_line_item_id"?: string;
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnDisposition>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_disposition.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_disposition.updated";
});
/**
 * The `return_disposition.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnDispositionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_line_item_id (Optional): string. ID of the receipt line the
     * disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether inventory
     * has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open. cancel is listed only before the inventory effect starts.
     * [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_line_item_id (Optional): string. ID
         * of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_line_item_id (Optional): string. ID of the receipt line the disposition
         * covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether inventory has
         * applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
         * supported_actions (Required): Array of string. Actions that can succeed now. Empty
         * unless the parent Return is open. cancel is listed only before the inventory effect
         * starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value enum:
         * "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnDisposition>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
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
 * The `return_disposition.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnDispositionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.canceled_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by (Optional): {@link
     * ReturnActor}. Who canceled the disposition. Merchant reads only. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.cancellation_reason (Optional): string. Why the disposition was canceled. Value enum:
     * "created_in_error", "changed_disposition", "duplicate", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required): {@link
     * ReturnActor}. Who created the disposition. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID. object.disposition_type (Required): string.
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost". object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed merchandise disposition,
     * when available. Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     * object.failure_message (Optional): string. Explanation of a failed merchandise disposition,
     * when available. object.inventory_location_id (Optional): string. ID of the Location whose
     * stock the disposition changes. Required for `sellable`, `quality_control`, `damaged`,
     * `quarantined`, and `lost`; rejected for the other types. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.inventory_movement_ids (Required): Array of string.
     * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
     * object.inventory_movement_ids[] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     * object.inventory_receipt_id (Optional): string. ID of the inventory receipt the disposition
     * recorded. Absent when it recorded none. Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     * object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value data. See
     * `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.occurred_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.quantity (Required): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. object.reason
     * (Required): string. Why the disposition was made. Value enum: "inspection_result",
     * "return_policy", "warehouse_override", "safety_requirement", "other". object.reason_message
     * (Optional): string. Optional detail about `reason`, kept with the record.
     * object.replaced_by_return_disposition_id (Optional): string. ID of the disposition that took
     * over this one. Present when a replacement canceled it. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.replaces_return_disposition_id (Optional):
     * string. ID of the `failed` or `canceled` disposition this one replaces. It takes over that
     * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_disposition_id (Required): string. Unique identifier for this return
     * disposition, prefixed `retdsp_`. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     * object.return_id (Required): string. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_inspection_line_item_id (Optional): string. ID of the inspection line the
     * disposition covers. Absent when it covers a receipt line. Example:
     * "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". object.return_line_item_id (Optional): string. ID of
     * the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * object.return_receipt_line_item_id (Optional): string. ID of the receipt line the
     * disposition covers. Absent when it covers an inspection line. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". object.status (Required): string. Whether inventory
     * has applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open. cancel is listed only before the inventory effect starts.
     * [] enum: "cancel", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "retry". object.updated_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Current
     * version of this resource's owned state. Send it as `expected_version` when changing the
     * resource to reject a stale write. Format: int64. minimum: 0. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * disposition. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the disposition was canceled. Value enum: "created_in_error", "changed_disposition",
         * "duplicate", "other". cancellation_reason_message (Optional): string. Detail sent with
         * the cancellation. Merchant reads only. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". created_by (Required): {@link
         * ReturnActor}. Who created the disposition. Who performed a return action: a buyer,
         * merchant, integration, or the system, with an optional ID. disposition_type (Required):
         * string. What happens to the received units. Value enum: "sellable", "quality_control",
         * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
         * "return_to_buyer", "lost". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". failure_code (Optional): string. Reason code for a failed merchandise
         * disposition, when available. Value enum: "inventory_effect_failed",
         * "inventory_item_unmapped". failure_message (Optional): string. Explanation of a failed
         * merchandise disposition, when available. inventory_location_id (Optional): string. ID of
         * the Location whose stock the disposition changes. Required for `sellable`,
         * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". inventory_movement_ids (Required): Array of
         * string. IDs of the inventory movements the disposition wrote. Empty when it moved no
         * stock. inventory_movement_ids[] (Value): string. Example:
         * "invm_01KEZF7C00DYPFT9PS0NZY805Z". inventory_receipt_id (Optional): string. ID of the
         * inventory receipt the disposition recorded. Absent when it recorded none. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". metadata (Required): {@link MetadataMap}. Stored
         * caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
         * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved
         * for Flint and are not returned. Writes follow the limits on MetadataInput and
         * MetadataPatchInput; maps written before those limits may not satisfy them. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. reason (Required): string. Why the
         * disposition was made. Value enum: "inspection_result", "return_policy",
         * "warehouse_override", "safety_requirement", "other". reason_message (Optional): string.
         * Optional detail about `reason`, kept with the record. replaced_by_return_disposition_id
         * (Optional): string. ID of the disposition that took over this one. Present when a
         * replacement canceled it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
         * replaces_return_disposition_id (Optional): string. ID of the `failed` or `canceled`
         * disposition this one replaces. It takes over that disposition's unused capacity.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_disposition_id (Required): string.
         * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
         * "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Required): string. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_line_item_id (Optional): string. ID
         * of the inspection line the disposition covers. Absent when it covers a receipt line.
         * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". return_line_item_id (Optional): string.
         * ID of the Return line the units belong to. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
         * return_receipt_line_item_id (Optional): string. ID of the receipt line the disposition
         * covers. Absent when it covers an inspection line. Example:
         * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". status (Required): string. Whether inventory has
         * applied the disposition. Value enum: "pending", "succeeded", "failed", "canceled".
         * supported_actions (Required): Array of string. Actions that can succeed now. Empty
         * unless the parent Return is open. cancel is listed only before the inventory effect
         * starts. [] enum: "cancel", "retry". supported_actions[] (Value): string. Value enum:
         * "cancel", "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: int64. minimum: 0.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the disposition. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the disposition was canceled. Value enum: "created_in_error",
             * "changed_disposition", "duplicate", "other".
             */
            "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the disposition. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * What happens to the received units. Value enum: "sellable", "quality_control",
             * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
             * "return_to_buyer", "lost".
             */
            "disposition_type": "sellable"
                | "quality_control"
                | "damaged"
                | "quarantined"
                | "repair"
                | "refurbish"
                | "liquidate"
                | "donate"
                | "discard"
                | "return_to_buyer"
                | "lost"
                | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed merchandise disposition, when available. Value enum:
             * "inventory_effect_failed", "inventory_item_unmapped".
             */
            "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
            /** Explanation of a failed merchandise disposition, when available. */
            "failure_message"?: string;
            /**
             * ID of the Location whose stock the disposition changes. Required for `sellable`,
             * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other
             * types. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "inventory_location_id"?: string;
            /**
             * IDs of the inventory movements the disposition wrote. Empty when it moved no stock.
             * [] (Value): string. Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
             */
            "inventory_movement_ids": Array<string>;
            /**
             * ID of the inventory receipt the disposition recorded. Absent when it recorded none.
             * Example: "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id"?: string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
            "quantity": number;
            /**
             * Why the disposition was made. Value enum: "inspection_result", "return_policy",
             * "warehouse_override", "safety_requirement", "other".
             */
            "reason": "inspection_result"
                | "return_policy"
                | "warehouse_override"
                | "safety_requirement"
                | "other"
                | (string & {});
            /** Optional detail about `reason`, kept with the record. */
            "reason_message"?: string;
            /**
             * ID of the disposition that took over this one. Present when a replacement canceled
             * it. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaced_by_return_disposition_id"?: string;
            /**
             * ID of the `failed` or `canceled` disposition this one replaces. It takes over that
             * disposition's unused capacity. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "replaces_return_disposition_id"?: string;
            /**
             * Unique identifier for this return disposition, prefixed `retdsp_`. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id": string;
            /** Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * ID of the inspection line the disposition covers. Absent when it covers a receipt
             * line. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
             */
            "return_inspection_line_item_id"?: string;
            /**
             * ID of the Return line the units belong to. Example:
             * "retli_01KEZF7C00R813VR7ECXS062QG".
             */
            "return_line_item_id"?: string;
            /**
             * ID of the receipt line the disposition covers. Absent when it covers an inspection
             * line. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
             */
            "return_receipt_line_item_id"?: string;
            /**
             * Whether inventory has applied the disposition. Value enum: "pending", "succeeded",
             * "failed", "canceled".
             */
            "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open. cancel is
             * listed only before the inventory effect starts. [] enum: "cancel", "retry". []
             * (Value): string. Value enum: "cancel", "retry".
             */
            "supported_actions": Array<"cancel" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnDisposition>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_disposition.updated". */
    "event_type"?: "return_disposition.updated";
});
export type ReturnDispositionsCancelParams = (InputValue<CancelReturnDispositionRequestInput>)
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
export type ReturnDispositionsGetParams = DisputesAcceptParams;
export type ReturnDispositionsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by disposition type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "sellable", "quality_control", "damaged", "quarantined", "repair",
     * "refurbish", "liquidate", "donate", "discard", "return_to_buyer", "lost". Value enum:
     * "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate",
     * "donate", "discard", "return_to_buyer", "lost". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[1][] (Value): string.
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost". anyOf[2] (Value): string. Value
     * enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type"?: InputValue<("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")
        | readonly ("sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by inventory location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return disposition ID or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by replaces return disposition id. pattern: ^retdsp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "replaces_return_disposition_id"?: InputValue<string>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return inspection line item id. pattern: ^retinli_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4".
     */
    "return_inspection_line_item_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by return receipt line item id. pattern: ^retrcli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id"?: InputValue<string>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "succeeded", "failed", "canceled". Value enum: "pending", "succeeded",
     * "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending",
     * "succeeded", "failed", "canceled". anyOf[1][] (Value): string. Value enum: "pending",
     * "succeeded", "failed", "canceled". anyOf[2] (Value): string. Value enum: "pending",
     * "succeeded", "failed", "canceled".
     */
    "status"?: InputValue<("pending" | "succeeded" | "failed" | "canceled")
        | readonly ("pending" | "succeeded" | "failed" | "canceled")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type ReturnDispositionsRetryParams = (InputValue<RetryReturnDispositionRequestInput>)
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
