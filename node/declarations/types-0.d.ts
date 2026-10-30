import type { ResourceReference } from './types-47.js';
import type { ResponseMeta, ResourceType } from './types-48.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-9.js';
import type { OrderChargeRequest, OrderChargeRequestInput } from './types-36.js';
import type { ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-49.js';
import type { GetReturnResponse, GiftCard, GiftCardLoad } from './types-23.js';
import type { RiskListItemAddition } from './types-51.js';
import type { MoneyValue, MoneyMovementListMeta } from './types-35.js';
import type { SignedMoneyRequestInput } from './types-53.js';
import type { GiftCardTransaction } from './types-24.js';
import type { InputValue } from '../runtime.js';
import type { CreateAPIKeyRequestInput } from './types-6.js';
import type { ConfigurationVersionRequestInput } from './types-5.js';
import type { UpdateAPIKeyRequestInput } from './types-58.js';
import type { ManualDiscountRequest, ManualDiscountRequestInput } from './types-33.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-45.js';
import type { Credentials } from './types-12.js';
import type { ExpandedOrderSummary } from './types-21.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
/** A credential used to authenticate API requests. */
export type APIKey = {
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session or a full-access API key. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    "api_key_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * The API key or user that created this key. An API key creator can belong to another mode,
     * such as a live key that creates a sandbox key. Absent when the creator is unavailable. A
     * reference to another resource by `resource_type` and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "key_prefix": string;
    /** RFC3339 timestamp. Format: date-time. */
    "last_used_at"?: string;
    "merchant_id"?: string;
    /** maxLength: 100. */
    "name": string;
    /**
     * When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys
     * revoked before revocation timestamps were recorded, this is the last update time. Format:
     * date-time.
     */
    "revoked_at"?: string;
    "sandbox_id"?: string;
    /**
     * The scopes the key holds now. For full and read_only keys this list grows when Flint adds
     * scopes. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
     * "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read",
     * "accounts.organizations.write", "accounts.workload_identities.read",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
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
     * "accounts.organizations.read", "accounts.organizations.write",
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
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read",
     * "customers.sessions.write", "customers.write", "developer.feedback_reports.read",
     * "developer.feedback_reports.write", "developer.partner_apps.read",
     * "developer.partner_apps.write", "developer.request_logs.read",
     * "developer.request_logs.self.read", "developer.resource_timelines.read",
     * "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
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
        | "accounts.organizations.read"
        | "accounts.organizations.write"
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
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/** A page of `APIKey` objects. */
export type APIKeyListResponse = {
    /**  [] (Value): {@link APIKey}. A credential used to authenticate API requests. */
    "data": Array<APIKey>;
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
/** A response containing `APIKey` data. */
export type APIKeyResponse = {
    /** A credential used to authenticate API requests. */
    "data": APIKey;
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
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the request.
     * A reference to another resource by `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent
     * none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint
     * starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
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
    "http_method": string;
    /** Format: int64. */
    "latency_milliseconds": number;
    "path": string;
    /** The next step to resolve this failure. */
    "recommended_action"?: string;
    /** A Flint guide that explains this failure. Absent when no guide applies. Format: uri. */
    "reference_url"?: string;
    /**
     * Records created before server-minted request IDs keep their original ID. maxLength: 128.
     * Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    "requested_api_version"?: string;
    /** Value enum: "header", "partner_app", "merchant", "current". */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    "resource_id"?: string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * How to recover: same_request resends the identical request with the same Idempotency-Key;
     * after_refresh re-reads the resource and rebuilds the request with a new key; none requires
     * correcting the request or following next_steps or next_actions. Value enum: "same_request",
     * "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    "route_pattern": string;
    "served_api_version"?: string;
    /** Format: int32. */
    "status_code": number;
};
/**
 * Full detail for one logged API request visible to the calling credential: headers, bodies, error
 * summary, and how to reproduce it.
 */
export type APIRequestLogDetail = {
    "api_request_log_id": string;
    /**
     * The public resource that made this request. Absent when Flint cannot attribute the request.
     * A reference to another resource by `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * The caller's X-Request-Id, matched exactly and case-sensitively. Absent when the caller sent
     * none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * The trace ID from a valid W3C traceparent, for correlation with the caller's tracing. Flint
     * starts its own trace. Absent when no valid traceparent was sent. pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
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
    "http_method": string;
    /** The integration caller's IP address. Absent for buyer-side callers. */
    "ip_address"?: string;
    /** Format: int64. */
    "latency_milliseconds": number;
    "path": string;
    /**
     *  [] (Value): {@link APIRequestLogQueryParam}. A query string parameter from a logged API
     * request, as a name and value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
    /** The next step to resolve this failure. */
    "recommended_action"?: string;
    /** A Flint guide that explains this failure. Absent when no guide applies. Format: uri. */
    "reference_url"?: string;
    /**
     * A reproduction of the captured request. Replaying a non-GET request changes data. Replay
     * with a sandbox key.
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
    "requested_api_version"?: string;
    /** Value enum: "header", "partner_app", "merchant", "current". */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    "resource_id"?: string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Value enum: "api_key", "api_request_log", "balance",
     * "balance_transaction", "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * The captured body. A JSON object or array body is returned as redacted JSON. Any other body,
     * or a body Flint truncated or could not parse, is returned as a string. Absent when there was
     * no body or the route does not capture bodies. oneOf[1] (Value): object. oneOf[2] (Value):
     * Array of any. oneOf[2][] (Value): any. oneOf[3] (Value): string.
     */
    "response_body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    "response_content_type"?: string;
    /**
     * How to recover: same_request resends the identical request with the same Idempotency-Key;
     * after_refresh re-reads the resource and rebuilds the request with a new key; none requires
     * correcting the request or following next_steps or next_actions. Value enum: "same_request",
     * "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    "route_pattern": string;
    "served_api_version"?: string;
    /** Format: int32. */
    "status_code": number;
    /** The integration caller's user agent. Absent for buyer-side callers. */
    "user_agent"?: string;
};
/** A response containing `APIRequestLogDetail` data. */
export type APIRequestLogDetailResponse = {
    /**
     * Full detail for one logged API request visible to the calling credential: headers, bodies,
     * error summary, and how to reproduce it.
     */
    "data": APIRequestLogDetail;
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
/** A page of `APIRequestLog` objects. */
export type APIRequestLogListResponse = {
    /**  [] (Value): {@link APIRequestLog}. A record of an API request and its response. */
    "data": Array<APIRequestLog>;
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
/** A query string parameter from a logged API request, as a name and value. */
export type APIRequestLogQueryParam = {
    "name": string;
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
     * Replace credential and body placeholders before running it.
     */
    "curl": string;
    /**
     * Headers for reproducing the request. Flint-Version uses the served_api_version recorded in
     * the log when available. * (Value): string.
     */
    "headers": Record<string, string>;
    "http_method": string;
    "path": string;
    /**
     *  [] (Value): {@link APIRequestLogQueryParam}. A query string parameter from a logged API
     * request, as a name and value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
    "redactions_present": boolean;
};
/**
 * A link that opens an order, subscription, Return, or customer's account in the merchant's
 * Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how long
 * it works. Its url is a bearer credential, returned only when the link is created.
 */
export type AccessLink = {
    /** When the link stops opening the resource or signing the buyer in. Format: date-time. */
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
     * The link to send the buyer. It carries a bearer credential, so anyone with it can open the
     * resource or sign in as the customer, as its purpose describes, until expires_at or until it
     * reaches its open limit. The link uses the merchant's customer account host. Format: uri.
     */
    "url": string;
};
/** A response containing `AccessLink` data. */
export type AccessLinkResponse = {
    /**
     * A link that opens an order, subscription, Return, or customer's account in the merchant's
     * Flint-hosted customer account. Its purpose describes whether it signs the buyer in and how
     * long it works. Its url is a bearer credential, returned only when the link is created.
     */
    "data": AccessLink;
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
/** The request body for: Add line items. */
export type AddLineItemsRequest = {
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. [] (Value): {@link CreateOrderLineItem}. A line item to add to an order: a
     * catalog variant, a bundle, or a custom item with a name and unit price.
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
     * minItems: 1. [] (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an
     * order: a catalog variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
};
/** The request body for: Add order charge. */
export type AddOrderChargeRequest = {
    /**
     * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
     * percentage with its tax settings.
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
     * A charge you add to an order, such as a delivery or service fee, set as a fixed amount or a
     * percentage with its tax settings.
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
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * An order line item to return, with the quantity, return reason, and optionally a note and
     * the resolution the buyer wants.
     */
    "line_item": ReturnLineItemRequest;
};
/** The request body for: Add return line item. */
export type AddReturnLineItemRequestInput = {
    /** Format: int64. minimum: 1. */
    "expected_version"?: number;
    /**
     * An order line item to return, with the quantity, return reason, and optionally a note and
     * the resolution the buyer wants.
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
     * Risk list item additions, one per request value in request order. Repeated values report
     * existing after their first entry.
     */
    "data": AddRiskListItemsResult;
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
 * Risk list item additions, one per request value in request order. Repeated values report
 * existing after their first entry.
 */
export type AddRiskListItemsResult = {
    /**
     *  [] (Value): {@link RiskListItemAddition}. The risk list item matched or created for one
     * requested value, and its creation outcome.
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
     * Merchant-issued purchased gift card. Posted balance includes reserved value; available value
     * is balance minus reservations. Frozen value remains part of outstanding liability. Gift
     * cards are independent resources and cannot be transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Independent funding resource. Value and consideration are separate. External funding and
     * import provenance are merchant-attested; no payment is collected by recording them.
     * Replacement refund lots retain original funding provenance and do not represent new paid
     * funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /**
     *  [] (Value): {@link GiftCardTransaction}. Immutable posted financial movement with signed
     * amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new
     * transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/** A response containing `AdjustGiftCardBalanceResult` data. */
export type AdjustGiftCardBalanceResultResponse = {
    /**
     * The result of adjusting a gift card's value: the updated gift card, the transactions the
     * adjustment created, and a gift card load when one was made.
     */
    "data": AdjustGiftCardBalanceResult;
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
     * minLength: 1.
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
     * minLength: 1.
     */
    "frozen_at": string | globalThis.Date;
};
export type AnalyticsGetOverviewParams = {
    /** Inclusive period start. Format: date-time. */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Exclusive period end. Format: date-time. */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
};
export type AnalyticsGetPaymentVolumeTimeseriesParams = {
    /** Inclusive period start. Format: date-time. */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Exclusive period end. Format: date-time. */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: InputValue<string>;
    /**
     * Bucket size: hour, day (default), week starting Monday, or month. Buckets follow local
     * boundaries, clipped to the period. Repeated hours have two buckets; skipped hours and days
     * have none. Empty buckets are included. Value enum: "hour", "day", "week", "month".
     */
    "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
    /** IANA timezone for bucket boundaries. Defaults to UTC. maxLength: 100. */
    "timezone"?: InputValue<string>;
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
     * subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
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
     * Payments are selected by payment created_at and current succeeded status. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies.
     */
    "data": AnalyticsOverview;
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
export type ApiKeysCreateParams = (CreateAPIKeyRequestInput);
export type ApiKeysGetParams = {};
export type ApiKeysListParams = {
    /**
     * Optional API key status filter. Active keys have no expiration or a future expires_at.
     * Expired keys are not revoked and have expires_at at or before the current time. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "expired", "revoked". Value enum: "active",
     * "expired", "revoked". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "expired", "revoked". anyOf[1][] (Value): string. Value enum: "active", "expired",
     * "revoked". anyOf[2] (Value): string. Value enum: "active", "expired", "revoked".
     */
    "status"?: InputValue<("active" | "expired" | "revoked") | readonly ("active" | "expired" | "revoked")[]>;
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
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by one or more caller resource types. Requires developer.request_logs.read. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "api_key", "user", "partner_app_install",
     * "checkout_session", "customer_session", "invoice", "workload_identity". Value enum:
     * "api_key", "user", "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "api_key",
     * "user", "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". anyOf[1][] (Value): string. Value enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
     * "workload_identity". anyOf[2] (Value): string. Value enum: "api_key", "user",
     * "partner_app_install", "checkout_session", "customer_session", "invoice",
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
    /** Filter by the exact public ID of the caller. Requires developer.request_logs.read. */
    "caller_id"?: InputValue<string>;
    /**
     * Filter by Flint request ID. To find your own X-Request-Id, use client_request_id. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "request_id"?: InputValue<string>;
    /**
     * Filter by the exact, case-sensitive X-Request-Id you sent. minLength: 1. maxLength: 128.
     * pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: InputValue<string>;
    /**
     * Filter by a W3C traceparent trace ID, 32 lowercase hexadecimal characters, excluding all
     * zeros. pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: InputValue<string>;
    /**
     * Filter by HTTP method. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "GET", "HEAD",
     * "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". Value enum: "GET", "HEAD",
     * "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS",
     * "CONNECT", "TRACE". anyOf[1][] (Value): string. Value enum: "GET", "HEAD", "POST", "PUT",
     * "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE". anyOf[2] (Value): string. Value enum:
     * "GET", "HEAD", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "CONNECT", "TRACE".
     */
    "http_method"?: InputValue<("GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE")
        | readonly ("GET" | "HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "CONNECT" | "TRACE")[]>;
    /** Filter by request path substring. */
    "path_query"?: InputValue<string>;
    /**
     * Filter by resource type. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
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
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity". Value enum:
     * "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "api_key", "api_request_log", "balance", "balance_transaction",
     * "bundle", "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity". anyOf[1][] (Value): string. Value
     * enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity". anyOf[2] (Value): string. Value
     * enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_verification",
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
     * "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group",
     * "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier",
     * "order_payment_attempt", "organization", "package", "package_item", "partner_app",
     * "partner_app_credential", "partner_app_install", "payment_intent", "payment_link",
     * "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery",
     * "webhook_endpoint", "webhook_event", "workload_identity".
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
        | "workload_identity")[]>;
    /** Filter by resource ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "resource_id"?: InputValue<string>;
    /**
     * Filter by response status bucket. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "success", "client_error", "server_error". Value enum: "success", "client_error",
     * "server_error". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "success",
     * "client_error", "server_error". anyOf[1][] (Value): string. Value enum: "success",
     * "client_error", "server_error". anyOf[2] (Value): string. Value enum: "success",
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
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
     * A discount you apply by hand to an order, with a name, an amount, and the order, line items,
     * or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /** Identifies the promotion to apply, by promotion code or by promotion ID. */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/** The request body for: Apply a gift card to an order. */
export type ApplyOrderGiftCardRequestInput = {
    /** minLength: 1. maxLength: 64. */
    "code": string;
    /**
     * Optional order version from the last order read. The mutation fails if the order changed.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Assess an invoice late fee. */
export type AssessInvoiceLateFeeRequest = {
    /**
     * Required on an invoice with a payment schedule, where it names the entry whose outstanding
     * balance and due date the fee is based on. Omit it on an invoice without a schedule.
     * minLength: 1.
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
    "api_key_id"?: string;
    /** Value enum: "api_key", "oauth", "workload_identity". */
    "auth_type": "api_key" | "oauth" | "workload_identity" | (string & {});
    "context_id"?: string;
    /** Value enum: "sandbox", "live". */
    "environment": "sandbox" | "live" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "merchant_id": string;
    "name"?: string;
    "oauth_grant_id"?: string;
    "oauth_session_id"?: string;
    "organization_id"?: string;
    "sandbox_id"?: string;
    /**  [] (Value): string. */
    "scopes": Array<string>;
    "workload_identity_id"?: string;
});
export type AuthContextGetParams = {};
/** A response containing `AuthContext` data. */
export type AuthContextResponse = {
    /**
     * Identity and access of the current developer credential: whether it is an API key or OAuth,
     * its merchant, environment, sandbox, and scopes.
     */
    "data": AuthContext;
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
export type AuthMode = keyof Credentials;
/**
 * Current balances for one currency at observed_at. Available and pending amounts are separate
 * buckets and can be negative. Reserve and held amounts are excluded from available_money.
 */
export type Balance = {
    /**
     * Signed available amounts grouped by balance source type. Keys are an open set; US accounts
     * use card and bank_account. When supplied as a complete breakdown, entries sum to
     * available_money. Active payout holds reduce both available_money and one source entry by the
     * same amount. A payout with no recorded source type uses card. A hold whose source is absent
     * from the map uses the largest source amount, with ties broken by source name. * (Value):
     * {@link MoneyValue}. Signed monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Signed amount available for payouts after active payout holds are deducted. Separate from
     * pending_money, reserve_money, and held_money. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /** Stable identifier of this currency's balance. */
    "balance_id": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Funds set aside for payouts you created that haven't been debited from your balance yet.
     * They aren't payable and aren't included in `available_money`. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "held_money": MoneyValue;
    /** Merchant whose balance this is. */
    "merchant_id": string;
    /**
     * When Flint observed these amounts, as an RFC 3339 UTC instant at second precision. Stored
     * balances retain their observation time; a fresh provider read uses the time of that read.
     * Format: date-time.
     */
    "observed_at": string;
    /**
     * Whether your account can receive payouts. While it is false, payments can still succeed, and
     * their funds wait in your balance.
     */
    "payouts_enabled": boolean;
    /**
     * Signed pending amounts grouped by balance source type. Keys are an open set; US accounts use
     * card and bank_account. When supplied as a complete breakdown, entries sum to pending_money.
     * These amounts are separate from available_by_source_type. * (Value): {@link MoneyValue}.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "pending_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Signed amount awaiting availability. Separate from available_money; pending_by_source_type
     * breaks down this amount when source details are supplied. Signed monetary amount represented
     * as integer minor units plus an ISO 4217 currency code.
     */
    "pending_money": MoneyValue;
    /**
     * Amount held in reserve. It doesn't overlap available_money or held_money. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "reserve_money": MoneyValue;
};
/** A page of `Balance` objects. */
export type BalanceListResponse = {
    /**
     *  [] (Value): {@link Balance}. Current balances for one currency at observed_at. Available
     * and pending amounts are separate buckets and can be negative. Reserve and held amounts are
     * excluded from available_money.
     */
    "data": Array<Balance>;
    /**
     * Response metadata for money movement lists, including request and trace IDs, warnings, and
     * the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Omitted because all currency balances fit on one page. */
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A change to the merchant's balance. */
export type BalanceTransaction = {
    /**
     * Signed gross amount of this balance movement, before any fee. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * When the funds become, or became, available to pay out. Present on pending transactions as
     * the expected time; status says whether they are available now. Format: date-time.
     */
    "available_at"?: string;
    /** Stable identifier of this balance transaction. */
    "balance_transaction_id": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Short text describing the movement, from Flint or your processor. Use it for display, not
     * for matching.
     */
    "description"?: string;
    /**
     * Fee deducted from this balance movement. On payments, this is processing_fee_money plus
     * every add-on fee in add_on_fees. On disputes and dispute reversals, this includes the
     * processor's dispute fee charged to your balance or actually returned to it. Charges are
     * positive; returned fees are negative. A dispute of -4200 with a fee of 1500 has a net amount
     * of -5700. A won dispute does not by itself return the fee. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "fee_money": MoneyValue;
    /** Merchant whose balance this transaction moved. */
    "merchant_id": string;
    /**
     * Signed net effect on your Flint balance: amount_money minus fee_money in the same currency.
     * Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "net_money": MoneyValue;
    /** When the balance movement happened. Format: date-time. */
    "occurred_at": string;
    /**
     * The order, inlined when you request expand=order. null when expanded and the transaction has
     * no order_id. Present only when `expand` includes `order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * The Flint order this movement relates to, such as the order a payment was for. Absent when
     * the movement isn't tied to an order.
     */
    "order_id"?: string;
    /**
     * The payout that carried this balance transaction to your bank. Set once, when that payout's
     * contents are prepared, and never changed afterward, including if the payout later fails or
     * is reversed. Absent until then, and on transactions no payout carries.
     */
    "payout_id"?: string;
    /**
     * Earlier balance transactions this one is linked to, such as the payout transaction that a
     * payout_failure, payout_cancellation, or payout_reversal returns, or the collection a
     * merchant_billing_collection_reversal reverses. Empty when there are none. [] (Value):
     * string.
     */
    "related_balance_transaction_ids": Array<string>;
    /**
     * The Flint resource behind this movement: a payment_intent, refund, dispute, payout,
     * payout_destination, or merchant_billing_invoice. Absent when the movement has none. A
     * reference to another resource by `resource_type` and `resource_id`.
     */
    "related_resource"?: ResourceReference;
    /**
     * Whether the funds can be paid out yet: pending until they become available, then available.
     * Only these two values appear, and the change to available sends balance_transaction.updated.
     * Value enum: "pending", "available".
     */
    "status": "pending" | "available" | (string & {});
    /**
     * Kind of balance movement. Unmapped movement types are returned as other. Value enum:
     * "payment", "refund", "dispute", "dispute_reversal", "return", "recovery", "payout",
     * "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
     * "payout_advance_funding", "reserve_hold", "reserve_release", "adjustment",
     * "merchant_billing_collection", "merchant_billing_collection_reversal", "other".
     */
    "type": "payment"
        | "refund"
        | "dispute"
        | "dispute_reversal"
        | "return"
        | "recovery"
        | "payout"
        | "payout_failure"
        | "payout_cancellation"
        | "payout_reversal"
        | "payout_advance"
        | "payout_advance_funding"
        | "reserve_hold"
        | "reserve_release"
        | "adjustment"
        | "merchant_billing_collection"
        | "merchant_billing_collection_reversal"
        | "other"
        | (string & {});
};
export type BalanceTransactionCreatedEvent = ((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": BalanceTransaction;
    };
    "event_type"?: "balance_transaction.created";
})
    & {
    "event_type": "balance_transaction.created";
});
/** A page of `BalanceTransaction` objects. */
export type BalanceTransactionListResponse = {
    /**  [] (Value): {@link BalanceTransaction}. A change to the merchant's balance. */
    "data": Array<BalanceTransaction>;
    /**
     * Response metadata for money movement lists, including request and trace IDs, warnings, and
     * the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `BalanceTransaction` data. */
export type BalanceTransactionResponse = {
    /** A change to the merchant's balance. */
    "data": BalanceTransaction;
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
