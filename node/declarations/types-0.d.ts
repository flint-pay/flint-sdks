import type { ResourceReference, ResponseMeta, ResourceType } from './types-42.js';
import type { CreateOrderLineItem, CreateOrderLineItemRequestInput } from './types-8.js';
import type { OrderChargeRequest, OrderChargeRequestInput } from './types-34.js';
import type { ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-43.js';
import type { RiskListItemAddition } from './types-45.js';
import type { MoneyValue, MoneyMovementListMeta, ModifierSet } from './types-33.js';
import type { SignedMoneyRequestRequestInput } from './types-47.js';
import type { GiftCard, GiftCardLoad } from './types-20.js';
import type { GiftCardTransaction, ImageAttachment } from './types-21.js';
import type { InputValue } from '../runtime.js';
import type { CreateAPIKeyRequestInput, ConfigurationVersionRequestInput } from './types-5.js';
import type { UpdateAPIKeyRequestInput } from './types-50.js';
import type { ManualDiscountRequest, ManualDiscountRequestInput } from './types-31.js';
import type { PromotionRefRequest, PromotionRefRequestInput } from './types-40.js';
import type { Credentials } from './types-11.js';
import type { ExpandedOrderSummary } from './types-18.js';
import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-3.js';
import type { MetadataMap } from './types-32.js';
/** Shape $ (Value): {@link APIKey}. A credential used to authenticate API requests. */
export type APIKey = {
    /**
     * Shape $ (Value): string. Key access. Full and read_only resolve from the current scope
     * catalog for the key's mode; restricted holds only its listed scopes. Granting full or
     * read_only requires a freshly verified authorized user session or a full-access API key.
     * Value enum: "full", "read_only", "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Shape $ (Value): string. */
    "api_key_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The API key or user that created this key. An
     * API key creator can belong to another mode, such as a live key that creates a sandbox key.
     * Absent when the creator is unavailable. A reference to another resource by `resource_type`
     * and `resource_id`.
     */
    "created_by"?: ResourceReference;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "key_prefix": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "last_used_at"?: string;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): string. maxLength: 100. */
    "name": string;
    /**
     * Shape $ (Value): string. When this key was revoked, in RFC 3339 format. Present only for
     * revoked keys. For keys revoked before revocation timestamps were recorded, this is the last
     * update time. Format: date-time.
     */
    "revoked_at"?: string;
    /** Shape $ (Value): string. */
    "sandbox_id"?: string;
    /**
     * Shape $ (Value): Array of string. The scopes the key holds now. For full and read_only keys
     * this list grows when Flint adds scopes. [] enum: "accounts.api_keys.read",
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
     * "webhooks.write". Shape $[] (Value): string. Value enum: "accounts.api_keys.read",
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
     * Shape $ (Value): string. Current key status. A non-revoked key is expired when expires_at is
     * at or before the current time; otherwise it is active. Revoked keys remain revoked
     * regardless of expires_at. Value enum: "active", "expired", "revoked".
     */
    "status": "active" | "expired" | "revoked" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link APIKeyListResponse}. A page of `APIKey` objects. */
export type APIKeyListResponse = {
    /**
     * Shape $ (Value): Array of {@link APIKey}. Shape $[] (Value): {@link APIKey}. A credential
     * used to authenticate API requests.
     */
    "data": Array<APIKey>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link APIKeyResponse}. A response containing `APIKey` data. */
export type APIKeyResponse = {
    /** Shape $ (Value): {@link APIKey}. A credential used to authenticate API requests. */
    "data": APIKey;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link APIKeyWithSecret}. An API key including its `secret_key`, returned by
 * the calls that create or issue a key. A credential used to authenticate API requests.
 */
export type APIKeyWithSecret = (Exclude<APIKey & object, readonly unknown[]>)
    & ({
    /** Shape $ (Value): string. One-time secret returned only when the API key is created. */
    "secret_key": string;
});
/** Shape $ (Value): {@link APIRequestLog}. A record of an API request and its response. */
export type APIRequestLog = {
    /** Shape $ (Value): string. */
    "api_request_log_id": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The public resource that made this request.
     * Absent when Flint cannot attribute the request. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * Shape $ (Value): string. The caller's X-Request-Id, matched exactly and case-sensitively.
     * Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * Shape $ (Value): string. The trace ID from a valid W3C traceparent, for correlation with the
     * caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent.
     * pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "error_code"?: string;
    /** Shape $ (Value): string. A concise explanation of why the request failed. */
    "error_summary"?: string;
    /**
     * Shape $ (Value): string. The error envelope's `type` for this response. Value enum:
     * "authentication_error", "authorization_error", "validation_error", "not_found_error",
     * "conflict_error", "rate_limit_error", "external_service_error", "timeout_error",
     * "unavailable_error", "internal_error", "protocol_error".
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
     * Shape $ (Value): Array of string. Normalized expand paths Flint applied. Absent when the
     * request did not use expand. Shape $[] (Value): string.
     */
    "expand"?: Array<string>;
    /** Shape $ (Value): string. */
    "http_method": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string. */
    "path": string;
    /** Shape $ (Value): string. The next step to resolve this failure. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. A Flint guide that explains this failure. Absent when no guide
     * applies. Format: uri.
     */
    "reference_url"?: string;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** Shape $ (Value): string. */
    "requested_api_version"?: string;
    /** Shape $ (Value): string.  Value enum: "header", "partner_app", "merchant", "current". */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    /** Shape $ (Value): string. */
    "resource_id"?: string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
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
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** Shape $ (Value): string. */
    "route_pattern": string;
    /** Shape $ (Value): string. */
    "served_api_version"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code": number;
};
/**
 * Shape $ (Value): {@link APIRequestLogDetail}. Full detail for one logged API request visible to
 * the calling credential: headers, bodies, error summary, and how to reproduce it.
 */
export type APIRequestLogDetail = {
    /** Shape $ (Value): string. */
    "api_request_log_id": string;
    /**
     * Shape $ (Value): {@link ResourceReference}. The public resource that made this request.
     * Absent when Flint cannot attribute the request. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "caller"?: ResourceReference;
    /**
     * Shape $ (Value): string. The caller's X-Request-Id, matched exactly and case-sensitively.
     * Absent when the caller sent none. minLength: 1. maxLength: 128. pattern: ^[\x21-\x7E]+$.
     */
    "client_request_id"?: string;
    /**
     * Shape $ (Value): string. The trace ID from a valid W3C traceparent, for correlation with the
     * caller's tracing. Flint starts its own trace. Absent when no valid traceparent was sent.
     * pattern: ^[0-9a-f]{32}$.
     */
    "client_trace_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "error_code"?: string;
    /** Shape $ (Value): string. A concise explanation of why the request failed. */
    "error_summary"?: string;
    /**
     * Shape $ (Value): string. The error envelope's `type` for this response. Value enum:
     * "authentication_error", "authorization_error", "validation_error", "not_found_error",
     * "conflict_error", "rate_limit_error", "external_service_error", "timeout_error",
     * "unavailable_error", "internal_error", "protocol_error".
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
     * Shape $ (Value): Array of string. Normalized expand paths Flint applied. Absent when the
     * request did not use expand. Shape $[] (Value): string.
     */
    "expand"?: Array<string>;
    /** Shape $ (Value): string. */
    "http_method": string;
    /**
     * Shape $ (Value): string. The integration caller's IP address. Absent for buyer-side callers.
     */
    "ip_address"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "latency_milliseconds": `${bigint}`;
    /** Shape $ (Value): string. */
    "path": string;
    /**
     * Shape $ (Value): Array of {@link APIRequestLogQueryParam}. Shape $[] (Value): {@link
     * APIRequestLogQueryParam}. A query string parameter from a logged API request, as a name and
     * value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
    /** Shape $ (Value): string. The next step to resolve this failure. */
    "recommended_action"?: string;
    /**
     * Shape $ (Value): string. A Flint guide that explains this failure. Absent when no guide
     * applies. Format: uri.
     */
    "reference_url"?: string;
    /**
     * Shape $ (Value): {@link APIRequestLogReproduction}. A reproduction of the captured request.
     * Replaying a non-GET request changes data. Replay with a sandbox key.
     */
    "reproduction": APIRequestLogReproduction;
    /**
     * Shape $ (Value): Alternative shapes (see declared variants). The captured body. A JSON
     * object or array body is returned as redacted JSON. Any other body, or a body Flint truncated
     * or could not parse, is returned as a string. Absent when there was no body or the route does
     * not capture bodies. Shape $.anyOf[1] (Value): object. Shape $.anyOf[2] (Value): Array of
     * any. Shape $.anyOf[2][] (Value): any. Shape $.anyOf[3] (Value): string.
     */
    "request_body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /**
     * Shape $ (Value): Map of string. Request headers as received, keyed by header name. Sensitive
     * values read [REDACTED]. Shape $.* (Value): string.
     */
    "request_headers"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Records created before server-minted request IDs keep their
     * original ID. maxLength: 128. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
    /** Shape $ (Value): string. */
    "requested_api_version"?: string;
    /** Shape $ (Value): string.  Value enum: "header", "partner_app", "merchant", "current". */
    "requested_api_version_source"?: "header" | "partner_app" | "merchant" | "current" | (string & {});
    /** Shape $ (Value): string. */
    "resource_id"?: string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
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
     * "subscription_plan_line_item", "tax_connection", "tax_registration", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * Shape $ (Value): Alternative shapes (see declared variants). The captured body. A JSON
     * object or array body is returned as redacted JSON. Any other body, or a body Flint truncated
     * or could not parse, is returned as a string. Absent when there was no body or the route does
     * not capture bodies. Shape $.anyOf[1] (Value): object. Shape $.anyOf[2] (Value): Array of
     * any. Shape $.anyOf[2][] (Value): any. Shape $.anyOf[3] (Value): string.
     */
    "response_body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /** Shape $ (Value): string. */
    "response_content_type"?: string;
    /**
     * Shape $ (Value): string. How to recover: same_request resends the identical request with the
     * same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a
     * new key; none requires correcting the request or following next_steps or next_actions. Value
     * enum: "same_request", "after_refresh", "none".
     */
    "retry"?: "same_request" | "after_refresh" | "none" | (string & {});
    /** Shape $ (Value): string. */
    "route_pattern": string;
    /** Shape $ (Value): string. */
    "served_api_version"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "status_code": number;
    /**
     * Shape $ (Value): string. The integration caller's user agent. Absent for buyer-side callers.
     */
    "user_agent"?: string;
};
/**
 * Shape $ (Value): {@link APIRequestLogDetailResponse}. A response containing
 * `APIRequestLogDetail` data.
 */
export type APIRequestLogDetailResponse = {
    /**
     * Shape $ (Value): {@link APIRequestLogDetail}. Full detail for one logged API request visible
     * to the calling credential: headers, bodies, error summary, and how to reproduce it.
     */
    "data": APIRequestLogDetail;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link APIRequestLogListResponse}. A page of `APIRequestLog` objects. */
export type APIRequestLogListResponse = {
    /**
     * Shape $ (Value): Array of {@link APIRequestLog}. Shape $[] (Value): {@link APIRequestLog}. A
     * record of an API request and its response.
     */
    "data": Array<APIRequestLog>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link APIRequestLogQueryParam}. A query string parameter from a logged API
 * request, as a name and value.
 */
export type APIRequestLogQueryParam = {
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "value": string;
};
/**
 * Shape $ (Value): {@link APIRequestLogReproduction}. A reproduction of the captured request.
 * Replaying a non-GET request changes data. Replay with a sandbox key.
 */
export type APIRequestLogReproduction = {
    /**
     * Shape $ (Value): Alternative shapes (see declared variants). The captured request body to
     * resend. A JSON object or array body is returned as redacted JSON. Any other body, or a body
     * Flint truncated or could not parse, is returned as a string. Absent when there was no body
     * or the route does not capture bodies. Shape $.anyOf[1] (Value): object. Shape $.anyOf[2]
     * (Value): Array of any. Shape $.anyOf[2][] (Value): any. Shape $.anyOf[3] (Value): string.
     */
    "body"?: (({
        [key: string]: unknown;
    }) | (Array<unknown>) | (string) | (unknown));
    /**
     * Shape $ (Value): string. A curl command using the recorded served_api_version in
     * Flint-Version when available. Replace credential and body placeholders before running it.
     */
    "curl": string;
    /**
     * Shape $ (Value): Map of string. Headers for reproducing the request. Flint-Version uses the
     * served_api_version recorded in the log when available. Shape $.* (Value): string.
     */
    "headers": Record<string, string>;
    /** Shape $ (Value): string. */
    "http_method": string;
    /** Shape $ (Value): string. */
    "path": string;
    /**
     * Shape $ (Value): Array of {@link APIRequestLogQueryParam}. Shape $[] (Value): {@link
     * APIRequestLogQueryParam}. A query string parameter from a logged API request, as a name and
     * value.
     */
    "query_params": Array<APIRequestLogQueryParam>;
    /** Shape $ (Value): boolean. */
    "redactions_present": boolean;
};
/**
 * Shape $ (Value): {@link AccessLink}. A link that opens an order, subscription, Return, or
 * customer's account in the merchant's Flint-hosted customer account. Its purpose describes
 * whether it signs the buyer in and how long it works. Its url is a bearer credential, returned
 * only when the link is created.
 */
export type AccessLink = {
    /**
     * Shape $ (Value): string. When the link stops opening the resource or signing the buyer in.
     * Format: date-time.
     */
    "expires_at": string;
    /**
     * Shape $ (Value): string. What the link opens and how long it works. New purposes may be
     * added; treat one you don't recognize as opening its resource. Value enum: "order_view",
     * "subscription_view", "subscription_manage", "return_view", "customer_account".
     */
    "purpose": "order_view"
        | "subscription_view"
        | "subscription_manage"
        | "return_view"
        | "customer_account"
        | (string & {});
    /**
     * Shape $ (Value): string. The link to send the buyer. It carries a bearer credential, so
     * anyone with it can open the resource or sign in as the customer, as its purpose describes,
     * until expires_at or until it reaches its open limit. The link uses the merchant's customer
     * account host. Format: uri.
     */
    "url": string;
};
/** Shape $ (Value): {@link AccessLinkResponse}. A response containing `AccessLink` data. */
export type AccessLinkResponse = {
    /**
     * Shape $ (Value): {@link AccessLink}. A link that opens an order, subscription, Return, or
     * customer's account in the merchant's Flint-hosted customer account. Its purpose describes
     * whether it signs the buyer in and how long it works. Its url is a bearer credential,
     * returned only when the link is created.
     */
    "data": AccessLink;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link AddLineItemsRequest}. The request body for: Add line items. */
export type AddLineItemsRequest = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItem}. minItems: 1. Shape $[] (Value):
     * {@link CreateOrderLineItem}. A line item to add to an order: a catalog variant, a bundle, or
     * a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItem>;
};
/** Shape $ (Value): {@link AddLineItemsRequestInput}. The request body for: Add line items. */
export type AddLineItemsRequestInput = {
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link CreateOrderLineItemRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link CreateOrderLineItemRequestInput}. A line item to add to an order: a catalog
     * variant, a bundle, or a custom item with a name and unit price.
     */
    "line_items": Array<CreateOrderLineItemRequestInput>;
};
/** Shape $ (Value): {@link AddOrderChargeRequest}. The request body for: Add order charge. */
export type AddOrderChargeRequest = {
    /**
     * Shape $ (Value): {@link OrderChargeRequest}. A charge you add to an order, such as a
     * delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     */
    "charge": OrderChargeRequest;
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/** Shape $ (Value): {@link AddOrderChargeRequestInput}. The request body for: Add order charge. */
export type AddOrderChargeRequestInput = {
    /**
     * Shape $ (Value): {@link OrderChargeRequestInput}. A charge you add to an order, such as a
     * delivery or service fee, set as a fixed amount or a percentage with its tax settings.
     */
    "charge": OrderChargeRequestInput;
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link AddReturnLineItemRequest}. The request body for: Add return line item.
 */
export type AddReturnLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnLineItemRequest}. An order line item to return, with the
     * quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_item": ReturnLineItemRequest;
};
/**
 * Shape $ (Value): {@link AddReturnLineItemRequestInput}. The request body for: Add return line
 * item.
 */
export type AddReturnLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with the
     * quantity, return reason, and optionally a note and the resolution the buyer wants.
     */
    "line_item": ReturnLineItemRequestInput;
};
/**
 * Shape $ (Value): {@link AddRiskListItemsRequest}. Values to add to the risk list. Values are
 * trimmed and compared exactly after item-type normalization for deduplication and membership.
 * card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is
 * lowercased; case_sensitive_string preserves case and Unicode composition. string and email are
 * lowercased, with accents preserved. email requires a bare address. email_domain is lowercased,
 * has one final dot removed, and converts internationalized domains to ASCII. ip_address uses
 * canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO
 * codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full
 * value. customer_id preserves the validated ID.
 */
export type AddRiskListItemsRequest = {
    /**
     * Shape $ (Value): Array of string. Values to add to the risk list, in request order. Values
     * are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. minItems: 1. maxItems: 500. Shape $[] (Value): string. Limited to 512
     * characters (Unicode code points) before normalization and after normalization. minLength: 1.
     * maxLength: 512.
     */
    "values": Array<string>;
};
/**
 * Shape $ (Value): {@link AddRiskListItemsRequestInput}. Values to add to the risk list. Values
 * are trimmed and compared exactly after item-type normalization for deduplication and membership.
 * card_fingerprint is the 32-character hexadecimal value from PaymentMethod.fingerprint and is
 * lowercased; case_sensitive_string preserves case and Unicode composition. string and email are
 * lowercased, with accents preserved. email requires a bare address. email_domain is lowercased,
 * has one final dot removed, and converts internationalized domains to ASCII. ip_address uses
 * canonical IP form, including IPv4-mapped IPv6 conversion to IPv4. country uses uppercase ISO
 * codes. card_bin preserves 6 through 8 digits, including leading zeros, and matches the full
 * value. customer_id preserves the validated ID.
 */
export type AddRiskListItemsRequestInput = AddRiskListItemsRequest;
/**
 * Shape $ (Value): {@link AddRiskListItemsResponse}. A response containing
 * `AddRiskListItemsResult` data.
 */
export type AddRiskListItemsResponse = {
    /**
     * Shape $ (Value): {@link AddRiskListItemsResult}. Risk list item additions, one per request
     * value in request order. Repeated values report existing after their first entry.
     */
    "data": AddRiskListItemsResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link AddRiskListItemsResult}. Risk list item additions, one per request value
 * in request order. Repeated values report existing after their first entry.
 */
export type AddRiskListItemsResult = {
    /**
     * Shape $ (Value): Array of {@link RiskListItemAddition}. Shape $[] (Value): {@link
     * RiskListItemAddition}. The risk list item matched or created for one requested value, and
     * its creation outcome.
     */
    "additions": Array<RiskListItemAddition>;
};
/**
 * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses Flint
 * checked as complete (customer and saved addresses, merchant, location, invoice, order delivery
 * destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and
 * city, and US ones always have state and postal_code. Delivery quote destinations, buyer
 * locations and postal-code tax locations hold only what was provided, such as postal_code and
 * country.
 */
export type Address = {
    /** Shape $ (Value): string. City or locality of the address. */
    "city"?: string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$. Example: "US".
     */
    "country": string;
    /** Shape $ (Value): string. Street address, including the building number. */
    "line1"?: string;
    /** Shape $ (Value): string. Apartment, suite, floor, or other address details. */
    "line2"?: string;
    /** Shape $ (Value): string. Postal or ZIP code of the address. */
    "postal_code"?: string;
    /** Shape $ (Value): string. State, province, or region of the address. */
    "state"?: string;
};
/**
 * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code are
 * required for US addresses and optional for other countries. Send null or omit line2, state, and
 * postal_code when the address has none.
 */
export type AddressRequest = ({
    /**
     * Shape $ (Value): string. Nonempty after surrounding whitespace is trimmed. Limits count
     * Unicode code points after trimming. minLength: 1. maxLength: 100. pattern: \S.
     */
    "city": string;
    /**
     * Shape $ (Value): string. A real ISO 3166-1 alpha-2 country code. Lowercase codes and
     * surrounding whitespace are rejected. minLength: 2. maxLength: 2. pattern: ^[A-Z]{2}$.
     * Example: "US".
     */
    "country": string;
    /**
     * Shape $ (Value): string. Nonempty after surrounding whitespace is trimmed. Limits count
     * Unicode code points after trimming. minLength: 1. maxLength: 255. pattern: \S.
     */
    "line1": string;
    /**
     * Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits
     * count Unicode code points after trimming. Send null or omit it when the address has none.
     * minLength: 1. maxLength: 255. pattern: \S.
     */
    "line2"?: string | null;
    /**
     * Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits
     * count Unicode code points after trimming. Send null or omit it when the address has none.
     * Required for US addresses. minLength: 1. maxLength: 20. pattern: \S.
     */
    "postal_code"?: string | null;
    /**
     * Shape $ (Value): string or null. Nonempty after surrounding whitespace is trimmed. Limits
     * count Unicode code points after trimming. Send null or omit it when the address has none.
     * Required for US addresses. minLength: 1. maxLength: 100. pattern: \S.
     */
    "state"?: string | null;
});
/**
 * Shape $ (Value): {@link AddressRequestInput}. A complete postal address. State and postal_code
 * are required for US addresses and optional for other countries. Send null or omit line2, state,
 * and postal_code when the address has none.
 */
export type AddressRequestInput = AddressRequest;
/**
 * Shape $ (Value): {@link AdjustGiftCardBalanceRequest}. The request body for: Adjust gift card
 * value.
 */
export type AdjustGiftCardBalanceRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Nonzero USD amount to change the card's value by:
     * positive adds value and negative removes it. Signed monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Why you're adjusting the value. A negative amount_money takes
     * suspicious_activity, balance_accidentally_increased, or support_issue; a positive one takes
     * complimentary, balance_accidentally_decreased, or support_issue. Value enum:
     * "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased".
     */
    "reason": "complimentary"
        | "balance_accidentally_decreased"
        | "support_issue"
        | "suspicious_activity"
        | "balance_accidentally_increased"
        | (string & {});
};
/**
 * Shape $ (Value): {@link AdjustGiftCardBalanceRequestInput}. The request body for: Adjust gift
 * card value.
 */
export type AdjustGiftCardBalanceRequestInput = {
    /**
     * Shape $ (Value): {@link SignedMoneyRequestRequestInput}. Nonzero USD amount to change the
     * card's value by: positive adds value and negative removes it. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money": SignedMoneyRequestRequestInput;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Why you're adjusting the value. A negative amount_money takes
     * suspicious_activity, balance_accidentally_increased, or support_issue; a positive one takes
     * complimentary, balance_accidentally_decreased, or support_issue. Value enum:
     * "complimentary", "balance_accidentally_decreased", "support_issue", "suspicious_activity",
     * "balance_accidentally_increased".
     */
    "reason": "complimentary"
        | "balance_accidentally_decreased"
        | "support_issue"
        | "suspicious_activity"
        | "balance_accidentally_increased";
};
/**
 * Shape $ (Value): {@link AdjustGiftCardBalanceResult}. The result of adjusting a gift card's
 * value: the updated gift card, the transactions the adjustment created, and a gift card load when
 * one was made.
 */
export type AdjustGiftCardBalanceResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): {@link GiftCardLoad}. Independent funding resource. Value and consideration
     * are separate. External funding and import provenance are merchant-attested; no payment is
     * collected by recording them. Replacement refund lots retain original funding provenance and
     * do not represent new paid funding.
     */
    "gift_card_load"?: GiftCardLoad;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link AdjustGiftCardBalanceResultResponse}. A response containing
 * `AdjustGiftCardBalanceResult` data.
 */
export type AdjustGiftCardBalanceResultResponse = {
    /**
     * Shape $ (Value): {@link AdjustGiftCardBalanceResult}. The result of adjusting a gift card's
     * value: the updated gift card, the transactions the adjustment created, and a gift card load
     * when one was made.
     */
    "data": AdjustGiftCardBalanceResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type AnalyticsGetOverviewInput = {
    /** Shape $ (Value): string. Inclusive period start. Format: date-time. */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Exclusive period end. Format: date-time. */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
};
export type AnalyticsGetPaymentVolumeTimeseriesInput = {
    /** Shape $ (Value): string. Inclusive period start. Format: date-time. */
    "period_start_at": InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Exclusive period end. Format: date-time. */
    "period_end_at"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string.  Value enum: "hour", "day", "week", "month". */
    "granularity"?: InputValue<"hour" | "day" | "week" | "month">;
    /** Shape $ (Value): string. maxLength: 100. */
    "timezone"?: InputValue<string>;
};
export type AnalyticsGetSubscriptionInput = AnalyticsGetOverviewInput;
/**
 * Shape $ (Value): {@link AnalyticsOverview}. Payments are selected by payment created_at and
 * current succeeded status. The half-open period [period_start_at, period_end_at) includes its
 * start and excludes its end. Amounts and payments_count use currency; customer and subscription
 * counts span currencies.
 */
export type AnalyticsOverview = {
    /**
     * Shape $ (Value): Array of string. Currencies of succeeded payments selected by payment
     * created_at or counted refunds selected by refund created_at in the period, regardless of the
     * currency filter. Empty when neither has rows. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the
     * merchant's default currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of succeeded payment amounts selected by payment
     * created_at in the period, in currency. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "gross_volume_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Customers selected by customer created_at in the period,
     * across all currencies. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "new_customers_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Succeeded payments selected by payment created_at in the
     * period, restricted to currency. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "payments_count": `${bigint}`;
    /**
     * Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends
     * resolve to the request time truncated to the second. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Refund amounts selected by refund created_at in the
     * period, excluding failed and canceled refunds. Parent refunds with child executions count
     * through the children once, regardless of payment creation time. Uses currency. The half-open
     * period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link AnalyticsOverviewResponse}. A response containing `AnalyticsOverview`
 * data.
 */
export type AnalyticsOverviewResponse = {
    /**
     * Shape $ (Value): {@link AnalyticsOverview}. Payments are selected by payment created_at and
     * current succeeded status. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "data": AnalyticsOverview;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type ApiKeysCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateAPIKeyRequestInput}. The request body for: Create an API key.
     */
    "body": InputValue<CreateAPIKeyRequestInput>;
};
export type ApiKeysGetInput = {
    /** Shape $ (Value): string. */
    "api_key_id": InputValue<string>;
};
export type ApiKeysListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "expired", "revoked".
     * Shape $[] (Value): string. Value enum: "active", "expired", "revoked".
     */
    "status"?: InputValue<Array<"active" | "expired" | "revoked">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "last_used_at",
     * "name".
     */
    "sort_by"?: InputValue<"created_at" | "last_used_at" | "name">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ApiKeysRevokeInput = {
    /** Shape $ (Value): string. */
    "api_key_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ConfigurationVersionRequestInput}. The request body for: Revoke an
     * API key.
     */
    "body"?: InputValue<ConfigurationVersionRequestInput>;
};
export type ApiKeysUpdateInput = {
    /** Shape $ (Value): string. */
    "api_key_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateAPIKeyRequestInput}. The request body for: Update an API key.
     */
    "body": InputValue<UpdateAPIKeyRequestInput>;
};
/** Shape $ (Value): {@link ApplyDiscountRequest}. The request body for: Apply discount. */
export type ApplyDiscountRequest = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequest;
})
    & ((Exclude<ApplyDiscountRequestPromotion & object, readonly unknown[]>)
    | (Exclude<ApplyDiscountRequestManual & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link ApplyDiscountRequestInput}. The request body for: Apply discount. */
export type ApplyDiscountRequestInput = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & ((Exclude<ApplyDiscountRequestPromotionInput & object, readonly unknown[]>)
    | (Exclude<ApplyDiscountRequestManualInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ApplyDiscountRequestManual}. The `Manual` variant of
 * `ApplyDiscountRequest`.
 */
export type ApplyDiscountRequestManual = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequest;
});
/**
 * Shape $ (Value): {@link ApplyDiscountRequestManualInput}. The `Manual` variant of
 * `ApplyDiscountRequest`.
 */
export type ApplyDiscountRequestManualInput = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual": ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion"?: PromotionRefRequestInput;
})
    & (({
    "promotion"?: never;
}));
/**
 * Shape $ (Value): {@link ApplyDiscountRequestPromotion}. The `Promotion` variant of
 * `ApplyDiscountRequest`.
 */
export type ApplyDiscountRequestPromotion = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ManualDiscountRequest}. A discount you apply by hand to an order,
     * with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequest;
    /**
     * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequest;
});
/**
 * Shape $ (Value): {@link ApplyDiscountRequestPromotionInput}. The `Promotion` variant of
 * `ApplyDiscountRequest`.
 */
export type ApplyDiscountRequestPromotionInput = ({
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ManualDiscountRequestInput}. A discount you apply by hand to an
     * order, with a name, an amount, and the order, line items, or charges it applies to.
     */
    "manual"?: ManualDiscountRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
     * promotion code or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
})
    & (({
    "manual"?: never;
}));
/**
 * Shape $ (Value): {@link ApplyOrderGiftCardRequestInput}. The request body for: Apply a gift card
 * to an order.
 */
export type ApplyOrderGiftCardRequestInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 64. */
    "code": string;
    /**
     * Shape $ (Value): integer string. Optional order version from the last order read. The
     * mutation fails if the order changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link AssessInvoiceLateFeeRequest}. The request body for: Assess an invoice
 * late fee.
 */
export type AssessInvoiceLateFeeRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "invoice_schedule_entry_id"?: string;
};
/**
 * Shape $ (Value): {@link AssessInvoiceLateFeeRequestInput}. The request body for: Assess an
 * invoice late fee.
 */
export type AssessInvoiceLateFeeRequestInput = AssessInvoiceLateFeeRequest;
/**
 * Shape $ (Value): {@link AssignToUnconfiguredDeliveryProfileRequestInput}. The request body for:
 * Assign unconfigured catalog entries.
 */
export type AssignToUnconfiguredDeliveryProfileRequestInput = {
    /**
     * Shape $ (Value): integer string. Current version of the delivery profile. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link AuthContext}. Identity and access of the current developer credential:
 * whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes.
 */
export type AuthContext = ({
    /** Shape $ (Value): string. */
    "api_key_id"?: string;
    /** Shape $ (Value): string.  Value enum: "api_key", "oauth", "workload_identity". */
    "auth_type": "api_key" | "oauth" | "workload_identity" | (string & {});
    /** Shape $ (Value): string. */
    "context_id"?: string;
    /** Shape $ (Value): string.  Value enum: "sandbox", "live". */
    "environment": "sandbox" | "live" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "merchant_id": string;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "oauth_grant_id"?: string;
    /** Shape $ (Value): string. */
    "oauth_session_id"?: string;
    /** Shape $ (Value): string. */
    "organization_id"?: string;
    /** Shape $ (Value): string. */
    "sandbox_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "scopes": Array<string>;
    /** Shape $ (Value): string. */
    "workload_identity_id"?: string;
});
/** Shape $ (Value): {@link AuthContextResponse}. A response containing `AuthContext` data. */
export type AuthContextResponse = {
    /**
     * Shape $ (Value): {@link AuthContext}. Identity and access of the current developer
     * credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and
     * scopes.
     */
    "data": AuthContext;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type AuthMode = keyof Credentials;
/**
 * Shape $ (Value): {@link Balance}. Current balances for one currency at observed_at. Available
 * and pending amounts are separate buckets and can be negative. Reserve and held amounts are
 * excluded from available_money.
 */
export type Balance = {
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Signed available amounts grouped by balance
     * source type. Keys are an open set; US accounts use card and bank_account. When supplied as a
     * complete breakdown, entries sum to available_money. Active payout holds reduce both
     * available_money and one source entry by the same amount. A payout with no recorded source
     * type uses card. A hold whose source is absent from the map uses the largest source amount,
     * with ties broken by source name. Shape $.* (Value): {@link MoneyValue}. Signed monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed amount available for payouts after active payout
     * holds are deducted. Separate from pending_money, reserve_money, and held_money. Signed
     * monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "available_money": MoneyValue;
    /** Shape $ (Value): string. Stable identifier of this currency's balance. */
    "balance_id": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Funds set aside for payouts you created that haven't
     * been debited from your balance yet. They aren't payable and aren't included in
     * `available_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "held_money": MoneyValue;
    /** Shape $ (Value): string. Merchant whose balance this is. */
    "merchant_id": string;
    /**
     * Shape $ (Value): string. When Flint observed these amounts, as an RFC 3339 UTC instant at
     * second precision. Stored balances retain their observation time; a fresh provider read uses
     * the time of that read. Format: date-time.
     */
    "observed_at": string;
    /**
     * Shape $ (Value): boolean. Whether your account can receive payouts. While it is false,
     * payments can still succeed, and their funds wait in your balance.
     */
    "payouts_enabled": boolean;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Signed pending amounts grouped by balance source
     * type. Keys are an open set; US accounts use card and bank_account. When supplied as a
     * complete breakdown, entries sum to pending_money. These amounts are separate from
     * available_by_source_type. Shape $.* (Value): {@link MoneyValue}. Signed monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "pending_by_source_type"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed amount awaiting availability. Separate from
     * available_money; pending_by_source_type breaks down this amount when source details are
     * supplied. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "pending_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount held in reserve. It doesn't overlap
     * available_money or held_money. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "reserve_money": MoneyValue;
};
/** Shape $ (Value): {@link BalanceListResponse}. A page of `Balance` objects. */
export type BalanceListResponse = {
    /**
     * Shape $ (Value): Array of {@link Balance}. Shape $[] (Value): {@link Balance}. Current
     * balances for one currency at observed_at. Available and pending amounts are separate buckets
     * and can be negative. Reserve and held amounts are excluded from available_money.
     */
    "data": Array<Balance>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. Omitted because all currency balances fit on one page. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** Shape $ (Value): {@link BalanceTransaction}. A change to the merchant's balance. */
export type BalanceTransaction = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed gross amount of this balance movement, before
     * any fee. Signed monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. When the funds become, or became, available to pay out. Present on
     * pending transactions as the expected time; status says whether they are available now.
     * Format: date-time.
     */
    "available_at"?: string;
    /** Shape $ (Value): string. Stable identifier of this balance transaction. */
    "balance_transaction_id": string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): string. Short text describing the movement, from Flint or your processor.
     * Use it for display, not for matching.
     */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Flint fee for this balance movement, never a provider
     * cost passed through. Charges are positive; returned fees are negative. A payment of 5000
     * with a fee of 175 has a net amount of 4825. A payout reversal returning a fee of 25 reports
     * fee_money -25. Signed monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "fee_money": MoneyValue;
    /** Shape $ (Value): string. Merchant whose balance this transaction moved. */
    "merchant_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Signed net effect on your Flint balance: amount_money
     * minus fee_money in the same currency. Signed monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "net_money": MoneyValue;
    /** Shape $ (Value): string. When the balance movement happened. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. The order, inlined when you request
     * expand=order. null when expanded and the transaction has no order_id. Shape $.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /**
     * Shape $ (Value): string. The Flint order this movement relates to, such as the order a
     * payment was for. Absent when the movement isn't tied to an order.
     */
    "order_id"?: string;
    /**
     * Shape $ (Value): string. The payout that carried this balance transaction to your bank. Set
     * once, when that payout's contents are prepared, and never changed afterward, including if
     * the payout later fails or is reversed. Absent until then, and on transactions no payout
     * carries.
     */
    "payout_id"?: string;
    /**
     * Shape $ (Value): Array of string. Earlier balance transactions this one is linked to, such
     * as the payout transaction that a payout_failure, payout_cancellation, or payout_reversal
     * returns, or the collection a merchant_billing_collection_reversal reverses. Empty when there
     * are none. Shape $[] (Value): string.
     */
    "related_balance_transaction_ids": Array<string>;
    /**
     * Shape $ (Value): {@link ResourceReference}. The Flint resource behind this movement: a
     * payment_intent, refund, dispute, payout, payout_destination, or merchant_billing_invoice.
     * Absent when the movement has none. A reference to another resource by `resource_type` and
     * `resource_id`.
     */
    "related_resource"?: ResourceReference;
    /**
     * Shape $ (Value): string. Whether the funds can be paid out yet: pending until they become
     * available, then available. Only these two values appear, and the change to available sends
     * balance_transaction.updated. Value enum: "pending", "available".
     */
    "status": "pending" | "available" | (string & {});
    /**
     * Shape $ (Value): string. Kind of balance movement. Unmapped movement types are returned as
     * other. Value enum: "payment", "refund", "dispute", "dispute_reversal", "return", "recovery",
     * "payout", "payout_failure", "payout_cancellation", "payout_reversal", "payout_advance",
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
/**
 * Shape $ (Value): {@link BalanceTransactionListResponse}. A page of `BalanceTransaction` objects.
 */
export type BalanceTransactionListResponse = {
    /**
     * Shape $ (Value): Array of {@link BalanceTransaction}. Shape $[] (Value): {@link
     * BalanceTransaction}. A change to the merchant's balance.
     */
    "data": Array<BalanceTransaction>;
    /**
     * Shape $ (Value): {@link MoneyMovementListMeta}. Response metadata for money movement lists,
     * including request and trace IDs, warnings, and the state of the available history.
     */
    "meta"?: MoneyMovementListMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link BalanceTransactionResponse}. A response containing `BalanceTransaction`
 * data.
 */
export type BalanceTransactionResponse = {
    /** Shape $ (Value): {@link BalanceTransaction}. A change to the merchant's balance. */
    "data": BalanceTransaction;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type BalanceTransactionsGetInput = {
    /** Shape $ (Value): string. */
    "balance_transaction_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type BalanceTransactionsListInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "payout_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "payment", "refund", "dispute",
     * "dispute_reversal", "return", "recovery", "payout", "payout_failure", "payout_cancellation",
     * "payout_reversal", "payout_advance", "payout_advance_funding", "reserve_hold",
     * "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal". Shape $[] (Value): string. Value enum: "payment",
     * "refund", "dispute", "dispute_reversal", "return", "recovery", "payout", "payout_failure",
     * "payout_cancellation", "payout_reversal", "payout_advance", "payout_advance_funding",
     * "reserve_hold", "reserve_release", "adjustment", "merchant_billing_collection",
     * "merchant_billing_collection_reversal".
     */
    "type"?: InputValue<Array<"payment"
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
        | "merchant_billing_collection_reversal">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "payment_intent", "refund",
     * "dispute", "payout", "payout_destination", "merchant_billing_invoice". Shape $[] (Value):
     * string. Value enum: "payment_intent", "refund", "dispute", "payout", "payout_destination",
     * "merchant_billing_invoice".
     */
    "related_resource_type"?: InputValue<Array<"payment_intent"
        | "refund"
        | "dispute"
        | "payout"
        | "payout_destination"
        | "merchant_billing_invoice">>;
    /** Shape $ (Value): string. */
    "related_resource_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "available". Shape $[]
     * (Value): string. Value enum: "pending", "available".
     */
    "status"?: InputValue<Array<"pending" | "available">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "available_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "available_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type BalancesListInput = {
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link BrandingSettings}. A merchant's branding settings: colors, corner
 * radius, and font family. Checkout uses them as its default theme.
 */
export type BrandingSettings = {
    /** Shape $ (Value): string. */
    "accent_color"?: string;
    /** Shape $ (Value): string. */
    "background_color"?: string;
    /** Shape $ (Value): integer. Format: int32. */
    "corner_radius"?: number;
    /**
     * Shape $ (Value): string. Value enum: "instrument_sans", "system_sans", "system_serif",
     * "monospace".
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | (string & {});
    /** Shape $ (Value): string. */
    "primary_color"?: string;
    /** Shape $ (Value): string. */
    "text_color"?: string;
};
/**
 * Shape $ (Value): {@link BrandingSettingsRequest}. Branding values to change when updating
 * settings. Send null for a color or `font_family` to clear it.
 */
export type BrandingSettingsRequest = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "accent_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "background_color"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "corner_radius"?: number;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "instrument_sans",
     * "system_sans", "system_serif", "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null | (string & {}) | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "primary_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "text_color"?: string | null;
};
/**
 * Shape $ (Value): {@link BrandingSettingsRequestInput}. Branding values to change when updating
 * settings. Send null for a color or `font_family` to clear it.
 */
export type BrandingSettingsRequestInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "accent_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "background_color"?: string | null;
    /** Shape $ (Value): integer. Format: int32. */
    "corner_radius"?: number;
    /**
     * Shape $ (Value): string or null. Send null to clear it. Value enum: "instrument_sans",
     * "system_sans", "system_serif", "monospace", null.
     */
    "font_family"?: "instrument_sans" | "system_sans" | "system_serif" | "monospace" | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "primary_color"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "text_color"?: string | null;
};
/** Shape $ (Value): {@link Bundle}. A group of items sold together. */
export type Bundle = {
    /** Shape $ (Value): boolean. Whether the bundle is currently eligible for sale. */
    "available_for_sale": boolean;
    /** Shape $ (Value): string. Barcode assigned to this sellable item. */
    "barcode"?: string;
    /** Shape $ (Value): string. Stable identifier of the bundle. */
    "bundle_id": string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Always present. Empty collections are
     * returned as []. Shape $[] (Value): {@link CategoryReference}. A reference to a product
     * category by ID, handle, and name.
     */
    "categories": Array<CategoryReference>;
    /** Shape $ (Value): integer. Number of components in the bundle. Format: int32. */
    "component_count": number;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. The bundle's components in position
     * order, on every bundle response including list rows. [] only when the bundle has no
     * components. Shape $[] (Value): {@link BundleComponent}. An item included in a bundle.
     */
    "components": Array<BundleComponent>;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Delivery readiness aggregated across the bundle's components. Value
     * enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status": "configured" | "action_required" | "not_applicable" | (string & {});
    /** Shape $ (Value): string. Description of the bundle shown to buyers. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Images attached to this resource, in
     * display order. The first image is primary. Shape $[] (Value): {@link ImageAttachment}. An
     * image attached to a resource, with its display properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ModifierSet} or null. Attached modifier set, included when
     * expand=modifier_set is requested. Requires commerce.catalog.read in addition to the
     * resource's read scope. Shape $.anyOf[1] (Value): {@link ModifierSet}. A reusable collection
     * of customization groups. Shape $.anyOf[2] (Value): null.
     */
    "modifier_set"?: ((ModifierSet) | (null));
    /** Shape $ (Value): string or null. Attached modifier set. Send null on update to remove it. */
    "modifier_set_id": string | null;
    /** Shape $ (Value): string. Bundle name shown to buyers. */
    "name": string;
    /** Shape $ (Value): string. Stock keeping unit assigned to this sellable item. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Bundle lifecycle status. Archived bundles remain readable and
     * cannot be edited. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): boolean. Whether this item is subject to tax. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Price charged for one unit, in the currency's smallest
     * unit. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Current resource version. Send it as expected_version to
     * reject a write if the resource has changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
