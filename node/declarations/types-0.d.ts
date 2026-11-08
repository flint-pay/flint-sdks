import type { ResourceReference, ResponseMeta } from './types-51.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-10.js';
import type { OrderChargeRequest, OrderChargeRequestInput } from './types-38.js';
import type { ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-52.js';
import type { GetReturnResponse, GiftCard, GiftCardLoad } from './types-25.js';
import type { RiskListItemAddition } from './types-55.js';
import type { MoneyValue } from './types-37.js';
import type { SignedMoneyRequestInput } from './types-57.js';
import type { GiftCardTransaction } from './types-26.js';
import type { InputValue } from '../runtime.js';
import type { CreateAPIKeyRequestInput } from './types-7.js';
import type { ConfigurationVersionRequestInput } from './types-6.js';
import type { UpdateAPIKeyRequestInput } from './types-62.js';
import type { ManualDiscountRequest, ManualDiscountRequestInput } from './types-34.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-49.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { Credentials } from './types-13.js';
/** A credential used to authenticate API requests. */
export type APIKey = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /**
     * Unique identifier for this api key, prefixed `key_`. Example:
     * "key_01KEZF7C008CTC2G5V6J08M6S7".
     */
    "api_key_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The API key or user that created this key. An API key creator can belong to another mode,
     * such as a live key that creates a sandbox key. Absent when the creator is unavailable. A
     * reference to another resource by `resource_type` and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    "key_prefix": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "last_used_at"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** maxLength: 100. */
    "name": string;
    /**
     * The connected app install this key is linked to. The key is revoked when that install is
     * revoked or loses its grant for this key's environment. Null when the key is unlinked. Never
     * changes. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id": string | null;
    /**
     * When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys
     * revoked before revocation timestamps were recorded, this is the last update time. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "revoked_at"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * The scopes the key holds now. For full and read_only keys this list grows when Flint adds
     * scopes. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read",
     * "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read",
     * "checkouts.checkout_sessions.write", "checkouts.payment_links.read",
     * "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write",
     * "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read",
     * "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write",
     * "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read",
     * "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write",
     * "commerce.gift_cards.write", "commerce.inventory.allocation.write",
     * "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write",
     * "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read",
     * "commerce.orders.write", "commerce.products.read", "commerce.products.write",
     * "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.partner_apps.read", "developer.partner_apps.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.sandboxes.read",
     * "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write",
     * "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read",
     * "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write",
     * "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.partner_apps.read"
        | "developer.partner_apps.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.sandboxes.read"
        | "developer.sandboxes.write"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /**
     * Current key status. A non-revoked key is expired when expires_at is at or before the current
     * time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Value
     * enum: "active", "expired", "revoked".
     */
    "status": "active" | "expired" | "revoked" | (string & {});
    /**
     * Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys
     * accept none. [] enum: "revoke". [] (Value): string. Value enum: "revoke".
     */
    "supported_actions": Array<"revoke" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** A page of `APIKey` objects. */
export type APIKeyListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * APIKey}. A credential used to authenticate API requests.
     */
    "data": Array<APIKey>;
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
/** A response containing `APIKey` data. */
export type APIKeyResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A credential used to
     * authenticate API requests.
     */
    "data": APIKey;
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
 * An API key including its `secret_key`, returned by the calls that create or issue a key. A
 * credential used to authenticate API requests.
 */
export type APIKeyWithSecret = (Exclude<APIKey & object, readonly unknown[]>)
    & ({
    /** One-time secret returned only when the API key is created. */
    "secret_key": string;
});
/** A record of an API request and its response. */
export type APIRequestLog = {
    /** Stable identifier of this log entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the request.
     * A reference to another resource by `resource_type` and `resource_id`.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** The response's top-level error `code`. Absent for successful requests. */
    "error_code"?: string;
    /** A concise explanation of why the request failed. */
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
    /**
     * Normalized expand paths Flint applied. Absent when the request did not use expand. []
     * (Value): string.
     */
    "expand"?: Array<string>;
    /** HTTP method of the request. */
    "http_method": string;
    /** Time Flint spent handling the request, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * The partner app whose partner app token made this request; `caller` is the install. Absent
     * for every other caller. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /** Request path as sent, with real IDs, such as /v1/orders/ord_123. */
    "path": string;
    /** The next step to resolve this failure. */
    "recommended_action"?: string;
    /**
     * A Flint guide that explains this failure. Absent when no guide applies. Format: uri.
     * Example: "https://example.com/receipt".
     */
    "reference_url"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** The API version Flint resolved for the request. */
    "requested_api_version"?: string;
    /**
     * Where `requested_api_version` came from. Absent when Flint did not record one. Value enum:
     * "header", "partner_app", "merchant", "current".
     */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    /**
     * The ID of the resource the request is about, when Flint can attribute it to one. A failed
     * create can have a `resource_type` and no ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * The kind of resource the request is about, when Flint can attribute it to one. Example:
     * "order". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
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
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
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
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
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
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** The matched route as a method and path template, such as `POST /v1/orders`. */
    "route_pattern": string;
    /** The API version Flint used to encode the response. */
    "served_api_version"?: string;
    /** HTTP status Flint returned. Format: int32. */
    "status_code": number;
};
/**
 * Full detail for one logged API request visible to the calling credential: headers, bodies, error
 * summary, and how to reproduce it.
 */
export type APIRequestLogDetail = {
    /** Stable identifier of this log entry. Example: "rlog_01KEZF7C008XJCH6BHA224X46F". */
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the request.
     * A reference to another resource by `resource_type` and `resource_id`.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** The response's top-level error `code`. Absent for successful requests. */
    "error_code"?: string;
    /** A concise explanation of why the request failed. */
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
    /**
     * Normalized expand paths Flint applied. Absent when the request did not use expand. []
     * (Value): string.
     */
    "expand"?: Array<string>;
    /** HTTP method of the request. */
    "http_method": string;
    /** The integration caller's IP address. Absent for buyer-side callers. */
    "ip_address"?: string;
    /** Time Flint spent handling the request, in milliseconds. Format: int64. */
    "latency_milliseconds": number;
    /**
     * The partner app whose partner app token made this request; `caller` is the install. Absent
     * for every other caller. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: string;
    /** Request path as sent, with real IDs, such as /v1/orders/ord_123. */
    "path": string;
    /**
     * Query parameters as received, with sensitive values replaced. [] (Value): {@link
     * APIRequestLogQueryParam}. A query string parameter from a logged API request, as a name and
     * value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
    /** The next step to resolve this failure. */
    "recommended_action"?: string;
    /**
     * A Flint guide that explains this failure. Absent when no guide applies. Format: uri.
     * Example: "https://example.com/receipt".
     */
    "reference_url"?: string;
    /**
     * What you need to resend this request: its method, path, query parameters, headers, body, and
     * a curl command. A reproduction of the captured request. Replaying a non-GET request changes
     * data. Replay with a sandbox key.
     */
    "reproduction": APIRequestLogReproduction;
    /**
     * The captured body. A JSON object or array body is returned as redacted JSON. Any other body,
     * or a body Flint truncated or could not parse, is returned as a string. Absent when there was
     * no body or the route does not capture bodies. oneOf[1] (Value): object. oneOf[2] (Value):
     * Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     */
    "request_body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /**
     * Request headers as received, keyed by header name. Sensitive values read [REDACTED]. *
     * (Value): string.
     */
    "request_headers"?: Record<string, string>;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** The API version Flint resolved for the request. */
    "requested_api_version"?: string;
    /**
     * Where `requested_api_version` came from. Absent when Flint did not record one. Value enum:
     * "header", "partner_app", "merchant", "current".
     */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    /**
     * The ID of the resource the request is about, when Flint can attribute it to one. A failed
     * create can have a `resource_type` and no ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "resource_id"?: string;
    /**
     * The kind of resource the request is about, when Flint can attribute it to one. Example:
     * "order". Value enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
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
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
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
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
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
     * The captured body. A JSON object or array body is returned as redacted JSON. Any other body,
     * or a body Flint truncated or could not parse, is returned as a string. Absent when there was
     * no body or the route does not capture bodies. oneOf[1] (Value): object. oneOf[2] (Value):
     * Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     */
    "response_body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /** Content-Type of the response. */
    "response_content_type"?: string;
    /**
     * Whether sending this request again can succeed, and how. It depends only on code and
     * details[0].reason; the errors reference lists the value for each. Value enum:
     * "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** The matched route as a method and path template, such as `POST /v1/orders`. */
    "route_pattern": string;
    /** The API version Flint used to encode the response. */
    "served_api_version"?: string;
    /** HTTP status Flint returned. Format: int32. */
    "status_code": number;
    /** The integration caller's user agent. Absent for buyer-side callers. */
    "user_agent"?: string;
};
/** A response containing `APIRequestLogDetail` data. */
export type APIRequestLogDetailResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Full detail for one
     * logged API request visible to the calling credential: headers, bodies, error summary, and
     * how to reproduce it.
     */
    "data": APIRequestLogDetail;
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
/** A page of `APIRequestLog` objects. */
export type APIRequestLogListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * APIRequestLog}. A record of an API request and its response.
     */
    "data": Array<APIRequestLog>;
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
/** A query string parameter from a logged API request, as a name and value. */
export type APIRequestLogQueryParam = {
    /** Query parameter name, decoded. */
    "name": string;
    /**
     * Query parameter value, decoded. Flint replaces the value of a sensitive parameter with a
     * placeholder.
     */
    "value": string;
};
/**
 * A reproduction of the captured request. Replaying a non-GET request changes data. Replay with a
 * sandbox key.
 */
export type APIRequestLogReproduction = {
    /**
     * The captured request body to resend. A JSON object or array body is returned as redacted
     * JSON. Any other body, or a body Flint truncated or could not parse, is returned as a string.
     * Absent when there was no body or the route does not capture bodies. oneOf[1] (Value):
     * object. oneOf[2] (Value): Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     */
    "body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /**
     * A curl command using the recorded served_api_version in Flint-Version when available.
     * Complete captured bodies are inlined unless redacted or truncated. Replace credential and
     * body placeholders before running it.
     */
    "curl": string;
    /**
     * True when values in the captured request body or query were redacted. Ignores authorization
     * headers and the response body. False does not guarantee completeness when body capture was
     * omitted or expired.
     */
    "has_redactions": boolean;
    /**
     * Headers for reproducing the request. Flint-Version uses the recorded served_api_version. On
     * routes that accept an idempotency key, same_request preserves the original key or uses a
     * placeholder for that key when unavailable; after_refresh and none use a placeholder for a
     * new key. * (Value): string.
     */
    "headers": Record<string, string>;
    /** HTTP method to resend the request with. */
    "http_method": string;
    /** Request path to resend the request to. */
    "path": string;
    /**
     * Query parameters to resend, with sensitive values replaced by placeholders. [] (Value):
     * {@link APIRequestLogQueryParam}. A query string parameter from a logged API request, as a
     * name and value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
};
/** Accepts pending fulfillment work so preparation can begin. */
export type AcceptFulfillmentRequestInput = {
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
};
/** The request body for: Accept platform terms. */
export type AcceptPartnerAppPlatformTermsRequest = {
    /**
     * Accept only if this matches the app's current version. A mismatch returns HTTP 409
     * VERSION_CONFLICT. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The platform terms version you accept. It must be the current version; any other value
     * returns 400 INVALID_REQUEST with detail INVALID_VALUE. The current version is 2026-11-01.
     * minLength: 1.
     */
    "platform_terms_version": string;
};
/** The request body for: Accept platform terms. */
export type AcceptPartnerAppPlatformTermsRequestInput = AcceptPartnerAppPlatformTermsRequest;
/**
 * A link that opens an order, subscription, Return, or customer's account in the merchant's
 * Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long
 * it works. Its url is a bearer credential, returned only when the link is created.
 */
export type AccessLink = {
    /**
     * When the link stops opening the resource or signing the buyer in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * What the link opens and how long it works. New purposes may be added; treat one you don't
     * recognize as opening its resource. Value enum: "order_view", "subscription_view",
     * "subscription_manage", "return_view", "customer_account".
     */
    "purpose": "order_view"
        | "subscription_view"
        | "subscription_manage"
        | "return_view"
        | "customer_account"
        | (string & {});
    /**
     * The merchant destination supplied when creating a customer or subscription access link. Null
     * when omitted, and always null for order and Return links.
     */
    "return_url": string | null;
    /**
     * The link to send the buyer. It carries a bearer credential, so anyone with it can open the
     * resource or sign in as the customer, as its purpose describes, until expires_at or until it
     * reaches its open limit. The link uses the merchant's customer account host. Format: uri.
     * Example: "https://example.com/receipt".
     */
    "url": string;
};
/** A response containing `AccessLink` data. */
export type AccessLinkResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A link that opens an
     * order, subscription, Return, or customer's account in the merchant's Flint-hosted customer
     * account. Its purpose describes whether it signs the buyer in and how long it works. Its url
     * is a bearer credential, returned only when the link is created.
     */
    "data": AccessLink;
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
/** The request body for: Add line items. */
export type AddLineItemsRequest = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Line items to add to the order. minItems: 1. [] (Value): {@link CreateOrderLineItem}. A line
     * item to add to an order: a catalog variant, a bundle, or a custom item with a name and unit
     * price.
     */
    "line_items": Array<CreateOrderLineItem>;
};
/** The request body for: Add line items. */
export type AddLineItemsRequestInput = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Line items to add to the order. minItems: 1. [] (Value): {@link
     * CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog variant, a
     * bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
};
/** The request body for: Add order charge. */
export type AddOrderChargeRequest = {
    /**
     * The charge to add. A charge you add to an order, such as a delivery or service fee, set as a
     * fixed amount or a percentage with its tax settings.
     */
    "charge": OrderChargeRequest;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Add order charge. */
export type AddOrderChargeRequestInput = {
    /**
     * The charge to add. A charge you add to an order, such as a delivery or service fee, set as a
     * fixed amount or a percentage with its tax settings.
     */
    "charge": OrderChargeRequestInput;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Add return line item. */
export type AddReturnLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The line to add. An order line item to return, with the quantity, return reason, and
     * optionally a note and the resolution the buyer wants.
     */
    "line_item": ReturnLineItemRequest;
};
/** The request body for: Add return line item. */
export type AddReturnLineItemRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The line to add. An order line item to return, with the quantity, return reason, and
     * optionally a note and the resolution the buyer wants.
     */
    "line_item": ReturnLineItemRequestInput;
};
export type AddReturnLineItemResponse = GetReturnResponse;
/**
 * Values to add to the risk list. Values are trimmed and compared exactly after item-type
 * normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal
 * value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
 * Unicode composition. string and email are lowercased, with accents preserved. email requires a
 * bare address. email_domain is lowercased, has one final dot removed, and converts
 * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
 * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
 * digits, including leading zeros, and matches the full value. customer_id preserves the validated
 * ID.
 */
export type AddRiskListItemsRequest = {
    /**
     * Values to add to the risk list, in request order. Values are trimmed and compared exactly
     * after item-type normalization for deduplication and membership. card_fingerprint is the
     * 32-character hexadecimal value from PaymentMethod.fingerprint and is lowercased;
     * case_sensitive_string preserves case and Unicode composition. string and email are
     * lowercased, with accents preserved. email requires a bare address. email_domain is
     * lowercased, has one final dot removed, and converts internationalized domains to ASCII.
     * ip_address uses canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country
     * uses uppercase ISO codes. card_bin preserves 6 through 8 digits, including leading zeros,
     * and matches the full value. customer_id preserves the validated ID. minItems: 1. maxItems:
     * 500. [] (Value): string. Limited to 512 characters (Unicode code points) before
     * normalization and after normalization. minLength: 1. maxLength: 512.
     */
    "values": Array<string>;
};
/**
 * Values to add to the risk list. Values are trimmed and compared exactly after item-type
 * normalization for deduplication and membership. card_fingerprint is the 32-character hexadecimal
 * value from PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
 * Unicode composition. string and email are lowercased, with accents preserved. email requires a
 * bare address. email_domain is lowercased, has one final dot removed, and converts
 * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
 * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
 * digits, including leading zeros, and matches the full value. customer_id preserves the validated
 * ID.
 */
export type AddRiskListItemsRequestInput = AddRiskListItemsRequest;
/** A response containing `AddRiskListItemsResult` data. */
export type AddRiskListItemsResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Risk list item
     * additions, one per request value in request order. Repeated values report existing after
     * their first entry.
     */
    "data": AddRiskListItemsResult;
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
 * Risk list item additions, one per request value in request order. Repeated values report
 * existing after their first entry.
 */
export type AddRiskListItemsResult = {
    /**
     * One entry for each value you sent, in request order. [] (Value): {@link
     * RiskListItemAddition}. The risk list item matched or created for one requested value, and
     * its creation outcome.
     */
    "additions": Array<RiskListItemAddition>;
};
/**
 * A postal address. Every address has country. Addresses Flint checked as complete (customer and
 * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
 * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have
 * state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
 * locations hold only what was provided, such as postal_code and country.
 */
export type Address = {
    /** City or locality of the address. */
    "city"?: string;
    /**
     * ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example:
     * "US".
     */
    "country": string;
    /** Street address, including the building number. */
    "line1"?: string;
    /** Apartment, suite, floor, or other address details. */
    "line2"?: string;
    /** Postal or ZIP code of the address. */
    "postal_code"?: string;
    /** State, province, or region of the address. */
    "state"?: string;
};
/**
 * A complete postal address. State and postal_code are required for US addresses and optional for
 * other countries. Send null or omit line2, state, and postal_code when the address has none.
 */
export type AddressRequest = ({
    /**
     * Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after
     * trimming. minLength: 1. maxLength: 100. pattern: \S.
     */
    "city": string;
    /**
     * A real ISO 3166-1 alpha-2 country code. Lowercase codes and surrounding whitespace are
     * rejected. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /**
     * Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after
     * trimming. minLength: 1. maxLength: 255. pattern: \S.
     */
    "line1": string;
    /**
     * Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after
     * trimming. Send null or omit it when the address has none. minLength: 1. maxLength: 255.
     * pattern: \S.
     */
    "line2"?: string | null;
    /**
     * Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after
     * trimming. Send null or omit it when the address has none. Required for US addresses.
     * minLength: 1. maxLength: 20. pattern: \S.
     */
    "postal_code"?: string | null;
    /**
     * Nonempty after surrounding whitespace is trimmed. Limits count Unicode code points after
     * trimming. Send null or omit it when the address has none. Required for US addresses.
     * minLength: 1. maxLength: 100. pattern: \S.
     */
    "state"?: string | null;
});
/**
 * A complete postal address. State and postal_code are required for US addresses and optional for
 * other countries. Send null or omit line2, state, and postal_code when the address has none.
 */
export type AddressRequestInput = AddressRequest;
/** The request body for: Adjust gift card value. */
export type AdjustGiftCardBalanceRequest = {
    /**
     * Nonzero USD amount to change the card's value by: positive adds value and negative removes
     * it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you're adjusting the value. A negative amount_money takes suspicious_activity,
     * balance_accidentally_increased, or support_issue; a positive one takes complimentary,
     * balance_accidentally_decreased, or support_issue. Value enum: "complimentary",
     * "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased".
     */
    "reason": "complimentary"
        | "balance_accidentally_decreased"
        | "support_issue"
        | "suspicious_activity"
        | "balance_accidentally_increased"
        | (string & {});
};
/** The request body for: Adjust gift card value. */
export type AdjustGiftCardBalanceRequestInput = {
    /**
     * Nonzero USD amount to change the card's value by: positive adds value and negative removes
     * it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": SignedMoneyRequestInput;
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why you're adjusting the value. A negative amount_money takes suspicious_activity,
     * balance_accidentally_increased, or support_issue; a positive one takes complimentary,
     * balance_accidentally_decreased, or support_issue. Value enum: "complimentary",
     * "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased".
     */
    "reason": "complimentary"
        | "balance_accidentally_decreased"
        | "support_issue"
        | "suspicious_activity"
        | "balance_accidentally_increased";
};
/**
 * The result of adjusting a gift card's value: the updated gift card, the transactions the
 * adjustment created, and a gift card load when one was made.
 */
export type AdjustGiftCardBalanceResult = {
    /**
     * The gift card after the command. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * The load the command created. Top-level child of a gift card. Value and consideration are
     * separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /**
     * The transactions the command posted to the card. [] (Value): {@link GiftCardTransaction}.
     * Immutable posted financial movement with signed amount, per-card sequence, merchant sequence
     * and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `AdjustGiftCardBalanceResult` data. */
export type AdjustGiftCardBalanceResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of adjusting
     * a gift card's value: the updated gift card, the transactions the adjustment created, and a
     * gift card load when one was made.
     */
    "data": AdjustGiftCardBalanceResult;
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
/** The request body for: Advance a test clock. */
export type AdvanceTestClockRequest = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The time to move the clock to. It must be later than the clock's current `frozen_at`, and no
     * later than two years after it or two billing intervals of any subscription on the clock that
     * isn't canceled, whichever is earlier. Fractional seconds are truncated. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "frozen_at": string;
};
/** The request body for: Advance a test clock. */
export type AdvanceTestClockRequestInput = {
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * The time to move the clock to. It must be later than the clock's current `frozen_at`, and no
     * later than two years after it or two billing intervals of any subscription on the clock that
     * isn't canceled, whichever is earlier. Fractional seconds are truncated. Format: date-time.
     * minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "frozen_at": string | globalThis.Date;
};
export type AnalyticsGetOverviewParams = {
    /** Inclusive period start. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Exclusive period end. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
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
export type AnalyticsGetPaymentVolumeTimeseriesParams = {
    /** Inclusive period start. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Exclusive period end. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Bucket size: hour, day (default), week starting Monday, or month. Buckets follow local
     * boundaries, clipped to the period. Repeated hours have two buckets; skipped hours and days
     * have none. Empty buckets are included. Value enum: "hour", "day", "week", "month".
     */
    "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
    /**
     * IANA timezone for bucket boundaries. Defaults to the merchant's timezone, then UTC.
     * maxLength: 100.
     */
    "timezone"?: InputValue<string>;
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
export type AnalyticsGetSubscriptionParams = AnalyticsGetOverviewParams;
/**
 * Payments are selected by payment created_at and current succeeded status. The half-open period
 * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
 * payments_count use currency; customer and subscription counts span currencies.
 */
export type AnalyticsOverview = {
    /**
     * Currencies of succeeded payments selected by payment created_at or counted refunds selected
     * by refund created_at in the period, regardless of the currency filter. Empty when neither
     * has rows. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Sum of succeeded payment amounts selected by payment created_at in the period, in currency.
     * The half-open period [period_start_at, period_end_at) includes its start and excludes its
     * end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "gross_volume_money": MoneyValue;
    /**
     * Customers selected by customer created_at in the period, across all currencies. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Format: int64.
     */
    "new_customers_count": number;
    /**
     * Succeeded payments selected by payment created_at in the period, restricted to currency. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Format: int64.
     */
    "payments_count": number;
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "period_start_at": string;
    /**
     * Refund amounts selected by refund created_at in the period, excluding failed and canceled
     * refunds. Parent refunds with child executions count through the children once, regardless of
     * payment creation time. Uses currency. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
};
/** A response containing `AnalyticsOverview` data. */
export type AnalyticsOverviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Payments are selected by
     * payment created_at and current succeeded status. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies.
     */
    "data": AnalyticsOverview;
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
export type ApiKeysCreateParams = (CreateAPIKeyRequestInput);
export type ApiKeysGetParams = {};
export type ApiKeysListParams = {
    /**
     * Exact-match filter on partner_app_install_id. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     */
    "partner_app_install_id"?: InputValue<string>;
    /**
     * Optional API key status filter. Active keys have no expiration or a future expires_at.
     * Expired keys are not revoked and have expires_at at or before the current time. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "active", "expired",
     * "revoked". Value enum: "active", "expired", "revoked". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "active", "expired", "revoked". anyOf[1][] (Value): string. Value
     * enum: "active", "expired", "revoked". anyOf[2] (Value): string. Value enum: "active",
     * "expired", "revoked".
     */
    "status"?: InputValue<("active" | "expired" | "revoked") | readonly ("active" | "expired" | "revoked")[]>;
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
     * Field to sort by. Defaults to created_at; ties are broken by api_key_id. Default:
     * "created_at". Value enum: "created_at", "last_used_at", "name".
     */
    "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
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
};
export type ApiKeysRevokeParams = (InputValue<ConfigurationVersionRequestInput>);
export type ApiKeysUpdateParams = (UpdateAPIKeyRequestInput);
export type ApiRequestLogsGetParams = {};
export type ApiRequestLogsListParams = {
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
     * Filter by one or more caller resource types. Requires developer.request_logs.read. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". Value enum: "api_key", "user", "partner_app_install",
     * "checkout_session", "customer_session", "invoice", "workload_identity". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "api_key", "user", "partner_app_install",
     * "checkout_session", "customer_session", "invoice", "workload_identity". anyOf[1][] (Value):
     * string. Value enum: "api_key", "user", "partner_app_install", "checkout_session",
     * "customer_session", "invoice", "workload_identity". anyOf[2] (Value): string. Value enum:
     * "api_key", "user", "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity".
     */
    "caller_type"?: InputValue<("api_key"
        | "user"
        | "partner_app_install"
        | "checkout_session"
        | "customer_session"
        | "invoice"
        | "workload_identity")
        | readonly ("api_key"
        | "user"
        | "partner_app_install"
        | "checkout_session"
        | "customer_session"
        | "invoice"
        | "workload_identity")[]>;
    /**
     * Filter by the exact public ID of the caller. Requires developer.request_logs.read. Example:
     * "key_01KEZF7C008CTC2G5V6J08M6S7".
     */
    "caller_id"?: InputValue<string>;
    /**
     * Filter to requests made with this partner app's tokens. For an app your merchant owns, the
     * list covers the app's requests in every merchant that installed it, in the credential's
     * mode; otherwise it covers the credential's environment. Requires
     * developer.request_logs.read. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     */
    "partner_app_id"?: InputValue<string>;
    /**
     * Filter by Flint request ID. To find your own X-Request-Id, use client_request_id. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: InputValue<string>;
    /**
     * Filter by the exact, case-sensitive X-Request-Id you sent. minLength: 1. maxLength: 128.
     * pattern: ^[\x21-\x7E]+$. Example: "checkout-1842".
     */
    "client_request_id"?: InputValue<string>;
    /**
     * Filter by a W3C traceparent trace ID, 32 lowercase hexadecimal characters, excluding all
     * zeros. pattern: ^[0-9a-f]{32}$. Example: "0123456789abcdef0123456789abcdef".
     */
    "client_trace_id"?: InputValue<string>;
    /**
     * Filter by HTTP method. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT",
     * "TRACE". Value enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT",
     * "TRACE". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "GET", "HEAD", "POST",
     * "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". anyOf[1][] (Value): string. Value
     * enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE".
     * anyOf[2] (Value): string. Value enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE",
     * "OPTIONS", "CONNECT", "TRACE".
     */
    "http_method"?: InputValue<("GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE")
        | readonly ("GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE")[]>;
    /**
     * Case-insensitive substring search on path. The characters %, _, and backslash match
     * literally.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by resource type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
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
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity". Value
     * enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
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
     * "order_charge", "order_edit", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential",
     * "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field",
     * "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review",
     * "payout", "payout_destination", "payout_settings", "price_list", "price_list_price",
     * "product", "product_option", "product_option_value", "product_variant", "promotion",
     * "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "api_key", "api_request_log",
     * "balance", "balance_transaction", "bundle", "bundle_component", "category",
     * "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_location_set",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_calculation_callback", "tax_connection",
     * "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity". anyOf[1][] (Value): string. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_location_set",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_calculation_callback", "tax_connection",
     * "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity". anyOf[2] (Value): string. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_tax_exemption", "customer_verification", "delivery_location_set",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment",
     * "report", "report_download", "return", "return_activity", "return_disposition",
     * "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy",
     * "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item",
     * "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings",
     * "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item",
     * "subscription_offer", "subscription_payment_retry", "subscription_plan",
     * "subscription_plan_line_item", "tax_calculation_callback", "tax_connection",
     * "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
     */
    "resource_type"?: InputValue<("api_key"
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
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity")
        | readonly ("api_key"
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
        | "payout"
        | "payout_destination"
        | "payout_settings"
        | "price_list"
        | "price_list_price"
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
        | "tax_calculation_callback"
        | "tax_connection"
        | "tax_registration"
        | "test_clock"
        | "ticket"
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity")[]>;
    /** Filter by resource ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id"?: InputValue<string>;
    /**
     * Filter by response status bucket. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "success", "client_error", "server_error". Value enum: "success",
     * "client_error", "server_error". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "success", "client_error", "server_error". anyOf[1][] (Value): string. Value enum:
     * "success", "client_error", "server_error". anyOf[2] (Value): string. Value enum: "success",
     * "client_error", "server_error".
     */
    "status_bucket"?: InputValue<("success" | "client_error" | "server_error")
        | readonly ("success" | "client_error" | "server_error")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/** The request body for: Apply discount. */
export type ApplyDiscountRequest = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<ApplyDiscountRequestPromotion & object, readonly unknown[]>)
    | (Exclude<ApplyDiscountRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Apply discount. */
export type ApplyDiscountRequestInput = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<ApplyDiscountRequestPromotionInput & object, readonly unknown[]>)
    | (Exclude<ApplyDiscountRequestManualInput & object, readonly unknown[]>));
/** The `Manual` variant of `ApplyDiscountRequest`. */
export type ApplyDiscountRequestManual = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequest;
});
/** The `Manual` variant of `ApplyDiscountRequest`. */
export type ApplyDiscountRequestManualInput = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/** The `Promotion` variant of `ApplyDiscountRequest`. */
export type ApplyDiscountRequestPromotion = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion": PromotionRefRequest;
});
/** The `Promotion` variant of `ApplyDiscountRequest`. */
export type ApplyDiscountRequestPromotionInput = ({
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * A discount you set by hand, with a name and an amount. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * The promotion to apply. Identifies the promotion to apply, by promotion code or by promotion
     * ID.
     */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * Sets inventory levels to the counted quantities of an open physical count. Every line needs an
 * observation. VERSION_CONFLICT also covers a stale saved physical observation with no
 * corresponding field in this request; these details omit param. Recount affected items and save
 * the complete observations before applying again. Physical changes after observation require
 * recounts, including at a trading location; holds and commitments alone do not invalidate
 * observations.
 */
export type ApplyInventoryCountRequestInput = {
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
};
/** The request body for: Apply a gift card to an order. */
export type ApplyOrderGiftCardRequestInput = {
    /** The gift card's code. Spaces and hyphens are ignored. minLength: 1. maxLength: 64. */
    "code": string;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Apply subscription promotion. */
export type ApplySubscriptionPromotionRequest = {
    /**
     * Apply only if this matches the subscription's current version. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * First charged cycle eligible for this promotion. Defaults to the next cycle without a
     * renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2
     * while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its
     * price. Format: uint64. minimum: 1.
     */
    "first_cycle"?: number;
    /**
     * Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its
     * consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequest;
    /**
     * Active or scheduled promotion to replace. It stops applying from first_cycle and continues
     * to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion
     * cannot be replaced. minLength: 1. pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "replace_promotion_id"?: string;
};
/** The request body for: Apply subscription promotion. */
export type ApplySubscriptionPromotionRequestInput = {
    /**
     * Apply only if this matches the subscription's current version. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * First charged cycle eligible for this promotion. Defaults to the next cycle without a
     * renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2
     * while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its
     * price. Format: uint64. minimum: 1.
     */
    "first_cycle"?: number;
    /**
     * Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its
     * consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
    /**
     * Active or scheduled promotion to replace. It stops applying from first_cycle and continues
     * to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion
     * cannot be replaced. minLength: 1. pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "replace_promotion_id"?: string;
};
/** The request body for: Assess an invoice late fee. */
export type AssessInvoiceLateFeeRequest = {
    /**
     * Required on an invoice with a payment schedule, where it names the entry whose outstanding
     * balance and due date the fee is based on. Omit it on an invoice without a schedule.
     * minLength: 1. Example: "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
};
/** The request body for: Assess an invoice late fee. */
export type AssessInvoiceLateFeeRequestInput = AssessInvoiceLateFeeRequest;
/** The request body for: Assign unconfigured catalog entries. */
export type AssignToUnconfiguredDeliveryProfileRequestInput = {
    /** Current version of the delivery profile. Format: uint64. minimum: 1. */
    "expected_version"?: number;
};
/**
 * Identity and access of the current developer credential: whether it is an API key or OAuth, its
 * merchant, environment, sandbox, and scopes.
 */
export type AuthContext = ({
    /** Example: "key_01KEZF7C008CTC2G5V6J08M6S7". */
    "api_key_id"?: string;
    /** Value enum: "api_key", "oauth", "workload_identity", "partner_app". */
    "auth_type": "api_key" | "oauth" | "workload_identity" | "partner_app" | (string & {});
    /** Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb". */
    "context_id"?: string;
    /** Value enum: "sandbox", "live". */
    "environment": "sandbox" | "live" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    "name"?: string;
    /** Example: "clg_01KEZF7C00F8Q8XM1TZ6Y1GB31". */
    "oauth_grant_id"?: string;
    /** Example: "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa". */
    "oauth_session_id"?: string;
    /** Example: "org_01KEZF7C00EA57F19C2ZFWA7HJ". */
    "organization_id"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**  [] (Value): string. */
    "scopes": Array<string>;
    /** Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP". */
    "workload_identity_id"?: string;
});
export type AuthContextGetParams = DisputesAcceptParams;
/** A response containing `AuthContext` data. */
export type AuthContextResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Identity and access of
     * the current developer credential: whether it is an API key or OAuth, its merchant,
     * environment, sandbox, and scopes.
     */
    "data": AuthContext;
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
export type AuthMode = keyof Credentials;
