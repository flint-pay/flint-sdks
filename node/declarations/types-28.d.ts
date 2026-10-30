import type {
    InventoryOriginPolicy,
    InventoryOriginPolicyRequestInput,
    InventoryLevel,
    InventoryProvenanceRequest,
    InventoryProvenanceRequestInput
} from './types-26.js';
import type { ErrorDetail, ErrorObject, ExpandedCustomerSummary, ExpandedOrderSummary } from './types-21.js';
import type { ResourceType, ResponseMeta } from './types-48.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreateInventoryTransferRequestInput } from './types-8.js';
import type { UpdateInventoryTransferRequestInput } from './types-58.js';
import type { Address } from './types-0.js';
import type { InvoiceLateFee, InvoiceCollectionBuyerInitiated, InvoiceCollectionExternal } from './types-29.js';
import type { InvoicePaymentDue, InvoicePaymentAttempt, InvoicePaymentPolicy } from './types-30.js';
import type { InvoicePaymentTermsSnapshot, InvoiceScheduleEntry, InvoiceSnapshot } from './types-31.js';
import type { MoneyValue } from './types-35.js';
import type { CheckoutRedirects, CheckoutRedirectsRequestInput, CheckoutSession } from './types-4.js';
/**
 * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each
 * order source.
 */
export type InventorySettings = {
    /**
     * Available quantity your team treats as low stock, zero or greater. The Dashboard shows this
     * setting. It does not change allocation, filter API results, or send events. Format: int32.
     */
    "low_stock_threshold"?: number;
    /**
     * Map replaced as a whole: the keys you send become the full map. Inventory failure handling
     * keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or
     * default. The source-specific entry wins; default applies to the rest. * (Value): {@link
     * InventoryOriginPolicy}. How Flint handles inventory failures for one order source: the
     * action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicy>;
};
/**
 * Inventory settings: the `low_stock_threshold` and how inventory failures are handled for each
 * order source.
 */
export type InventorySettingsRequestInput = {
    /**
     * Available quantity your team treats as low stock, zero or greater. The Dashboard shows this
     * setting. It does not change allocation, filter API results, or send events. Format: int32.
     */
    "low_stock_threshold"?: number;
    /**
     * Map replaced as a whole: the keys you send become the full map. Inventory failure handling
     * keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or
     * default. The source-specific entry wins; default applies to the rest. * (Value): {@link
     * InventoryOriginPolicyRequestInput}. How Flint handles inventory failures for one order
     * source: the action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicyRequestInput>;
};
/**
 * The system an inventory event came from, such as manual entry, a point of sale, a warehouse
 * system, or Flint, with your source identifier when it applies.
 */
export type InventorySourceSystem = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "flint", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {});
});
/**
 * The source system you report for an inventory event, such as manual, pos, wms, erp, or other,
 * with your identifier when it applies.
 */
export type InventorySourceSystemRequest = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * The source system you report for an inventory event, such as manual, pos, wms, erp, or other,
 * with your identifier when it applies.
 */
export type InventorySourceSystemRequestInput = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other";
});
/** Stock moving between locations. */
export type InventoryTransfer = {
    /** RFC3339 timestamp. Format: date-time. */
    "closed_at"?: string;
    /**
     * Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost",
     * "mixed", null.
     */
    "closed_reason"?: "received"
        | "canceled"
        | "received_with_cancellation"
        | "returned"
        | "lost"
        | "mixed"
        | null
        | (string & {})
        | null;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "departed_at"?: string;
    "destination_location_id": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    "inventory_transfer_id": string;
    /**
     * Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
     * replaces the full collection. [] (Value): {@link InventoryTransferLine}. One line of an
     * inventory transfer, with the requested quantity and how much has departed, been received by
     * condition, canceled, lost, or returned.
     */
    "lines": Array<InventoryTransferLine>;
    "note"?: string;
    "origin_location_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "received_at"?: string;
    /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". [] (Value):
     * string. Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * The inventory transfer state, version, and supported actions for a refused action. One specific
 * failure within an error, with a `code` and `message` plus fields that depend on the code, such
 * as the `param`, resource, quantity, or amount involved.
 */
export type InventoryTransferActionConflictErrorDetail = (Exclude<ErrorDetail & object, readonly unknown[]>)
    & ({
    /** Value enum: "ACTION_NOT_ALLOWED". */
    "code": "ACTION_NOT_ALLOWED" | (string & {});
    /**
     * Current transfer status. Value enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "current_status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /** Current transfer version. Format: uint64. minimum: 1. */
    "current_version": number;
    "message": string;
    /** Value enum: "action". */
    "param": "action" | (string & {});
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
     * Transfer actions accepted in the current state. A closed transfer returns an empty array. []
     * enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". [] (Value): string.
     * Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /**
     * Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of:
     * advance_limit_exceeded, already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, configuration_required,
     * credit_exceeds_charge, credit_note_tax_reconciliation_required,
     * customer_account_mode_conflict, delivery_hold, delivery_requirement_changes,
     * derived_from_packages, destination_not_served, disclosure_changed,
     * dispute_payment_unavailable, existing_order_checkout, external_billing_schedule,
     * field_locked, frozen_at_not_later, image_ingestion_restart_required, in_progress,
     * initial_payment_pending, inventory_wait, invoice_finalized, managed_by_owner,
     * managed_externally, merchant_hosted_customer_accounts, merchant_managed_receipts,
     * method_unavailable, mixed_tax_treatment, not_itemized, not_offered, not_paused,
     * offer_subscription, on_hold, order_owned, payload_expired, payment_collected,
     * payment_disputed, payment_required, payout_defaults_managed_externally, payout_delay,
     * payout_frequency, period_end_unavailable, quantity_not_carried, reconciliation_required,
     * refund_created, refund_unavailable, return_checkout, return_tax_mismatch, secret_not_issued,
     * status_not_reached, store_credit_unavailable, subscription_terms_locked, terminal_status,
     * test_event, trial_in_progress, unsupported_state, verification_required. When code is
     * ALREADY_EXISTS, one of: hardware_fingerprint_already_exists. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed,
     * credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of:
     * calculation_expired, caller_rates_required, destination_changed, option_expired,
     * quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired,
     * window_expired. When code is EXTERNAL_SERVICE_ERROR, one of: outcome_unknown,
     * rate_unavailable. When code is FORBIDDEN, one of: checkout_launch_token_restricted,
     * checkout_recovery_attempt_mismatch, checkout_recovery_restricted,
     * checkout_session_order_mismatch, checkout_session_payment_required,
     * demo_session_route_not_allowed, direct_owner_required, environment_mismatch,
     * expansion_not_permitted, full_access_required, live_mode_required, merchant_access_required,
     * merchant_credential_required, merchant_role_insufficient, not_checkout_session,
     * not_permitted, oauth_context_mismatch, organization_membership_required,
     * organization_role_insufficient, owner_workflow_required, request_blocked,
     * role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one
     * of: page_origin_required, proof_rejected, proof_required. When code is INTERNAL_ERROR, one
     * of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed,
     * mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily,
     * merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations,
     * consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements,
     * enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations,
     * partner_app_credentials, payment_intents_per_order, payment_link_completions,
     * payment_retries_per_period, receipt_recipients, saved_card_codes, test_clock_subscriptions,
     * verification_attempts, verification_codes, workload_identities. When code is
     * MERCHANT_NOT_READY, one of: account_sessions_unavailable, account_setup_repair_required,
     * account_setup_unavailable, billing_suspended, capability_blocked, capability_not_requested,
     * capability_pending, capability_unavailable, default_environment_required,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * pricing_not_authorized, processing_not_enabled, processing_restricted,
     * processor_not_configured, requirements_due, tax_category_required, under_review. When code
     * is OPERATION_IN_PROGRESS, one of: delivery_selection_materializing. When code is
     * PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range,
     * capability_blocked, capability_pending, disabled_by_merchant_settings,
     * disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is PROMOTION_DECLINED, one of: already_applied,
     * automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled,
     * currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met,
     * no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded,
     * superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is
     * RESOURCE_IN_USE, one of: selected_by_active_variants. When code is SERVICE_UNAVAILABLE, one
     * of: outcome_unknown, processor_unavailable, repair_required. Additional reasons may be
     * added. Value enum: "account_sessions_unavailable", "account_setup_repair_required",
     * "account_setup_unavailable", "action_window_too_short", "advance_limit_exceeded",
     * "already_applied", "amount_out_of_range", "archived", "authorization_expired",
     * "automatic_disabled", "bank_return_not_contestable", "billing_suspended",
     * "buy_item_missing", "buyer_daily", "calculation_expired", "caller_rates_required",
     * "cancellation_scheduled", "capability_blocked", "capability_not_requested",
     * "capability_pending", "capability_unavailable", "card_balance", "card_daily",
     * "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch",
     * "checkout_recovery_restricted", "checkout_session_order_mismatch",
     * "checkout_session_payment_required", "checkout_tax_calculations", "code_invalid",
     * "code_required", "codes_disabled", "configuration_required", "consecutive_skips",
     * "credit_exceeds_charge", "credit_note_creditable_value_changed",
     * "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required",
     * "currency_mismatch", "customer_account_mode_conflict", "daily_gift_card_purchases",
     * "default_environment_required", "delivery_hold", "delivery_requirement_changes",
     * "delivery_selection_materializing", "delivery_selection_replacements",
     * "demo_session_route_not_allowed", "derived_from_packages", "destination_changed",
     * "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable",
     * "enabled_risk_rules", "environment_mismatch", "exhausted", "existing_order_checkout",
     * "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders",
     * "field_locked", "frozen_at_not_later", "full_access_required",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "initial_payment_pending", "inventory_wait", "invoice_finalized",
     * "live_mode_required", "location_ineligible", "location_limit", "malformed",
     * "managed_by_owner", "managed_externally", "max_promotions_reached",
     * "merchant_access_required", "merchant_account_action_required",
     * "merchant_adjustments_daily", "merchant_credential_required",
     * "merchant_hosted_customer_accounts", "merchant_imports_daily", "merchant_managed_receipts",
     * "merchant_payments_disabled", "merchant_role_insufficient", "method_unavailable",
     * "minimum_not_met", "mixed_tax_treatment", "mode_mismatch", "monthly_tax_calculations",
     * "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible",
     * "not_itemized", "not_offered", "not_paused", "not_permitted", "not_yet_started",
     * "oauth_context_mismatch", "offer_subscription", "on_hold", "onboarding_required",
     * "option_expired", "order_owned", "organization_membership_required",
     * "organization_role_insufficient", "outcome_unknown", "owner_workflow_required",
     * "page_origin_required", "partner_app_credentials", "payload_expired",
     * "payment_account_context_invalid", "payment_account_setup_incomplete", "payment_collected",
     * "payment_disputed", "payment_intents_per_order", "payment_link_completions",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "period_end_unavailable", "platform_funding_unavailable",
     * "pricing_not_authorized", "processing_not_enabled", "processing_restricted",
     * "processor_not_configured", "processor_unavailable", "proof_rejected", "proof_required",
     * "quantity_not_carried", "quote_expired", "quote_revoked", "quote_stale", "rate_unavailable",
     * "receipt_recipients", "reconciliation_required", "refund_created", "refund_unavailable",
     * "repair_required", "request_blocked", "requirements_due", "return_checkout",
     * "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable",
     * "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes",
     * "secret_not_issued", "selected_by_active_variants", "selection_changed",
     * "selection_expired", "self_role_edit_forbidden", "session_ended", "status_not_reached",
     * "store_credit_unavailable", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "tax_category_required",
     * "terminal_status", "test_clock_subscriptions", "test_event", "test_mode_required",
     * "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown",
     * "unknown_type", "unsupported_state", "verification_attempts", "verification_codes",
     * "verification_required", "window_expired", "workload_identities", "wrong_credential_type".
     */
    "reason": "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "advance_limit_exceeded"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "buy_item_missing"
        | "buyer_daily"
        | "calculation_expired"
        | "caller_rates_required"
        | "cancellation_scheduled"
        | "capability_blocked"
        | "capability_not_requested"
        | "capability_pending"
        | "capability_unavailable"
        | "card_balance"
        | "card_daily"
        | "checkout_launch_token_restricted"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "consecutive_skips"
        | "credit_exceeds_charge"
        | "credit_note_creditable_value_changed"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "customer_account_mode_conflict"
        | "daily_gift_card_purchases"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_materializing"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "disclosure_changed"
        | "dispute_payment_unavailable"
        | "enabled_risk_rules"
        | "environment_mismatch"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "frozen_at_not_later"
        | "full_access_required"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "initial_payment_pending"
        | "inventory_wait"
        | "invoice_finalized"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_receipts"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "method_unavailable"
        | "minimum_not_met"
        | "mixed_tax_treatment"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_yet_started"
        | "oauth_context_mismatch"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_owned"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "outcome_unknown"
        | "owner_workflow_required"
        | "page_origin_required"
        | "partner_app_credentials"
        | "payload_expired"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "period_end_unavailable"
        | "platform_funding_unavailable"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "processor_unavailable"
        | "proof_rejected"
        | "proof_required"
        | "quantity_not_carried"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "refund_created"
        | "refund_unavailable"
        | "repair_required"
        | "request_blocked"
        | "requirements_due"
        | "return_checkout"
        | "return_tax_mismatch"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_not_accessible"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "secret_not_issued"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "session_ended"
        | "status_not_reached"
        | "store_credit_unavailable"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "tax_category_required"
        | "terminal_status"
        | "test_clock_subscriptions"
        | "test_event"
        | "test_mode_required"
        | "transaction_purpose_unresolved"
        | "trial_in_progress"
        | "under_review"
        | "unknown"
        | "unknown_type"
        | "unsupported_state"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
});
/** An inventory transfer action refusal with the current state and supported actions. */
export type InventoryTransferActionConflictErrorEnvelope = {
    /**
     * An action-not-allowed error for the inventory transfer current state. The error returned for
     * a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of
     * `details` for individual failures.
     */
    "error": InventoryTransferActionConflictErrorObject;
};
/**
 * An action-not-allowed error for the inventory transfer current state. The error returned for a
 * failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details`
 * for individual failures.
 */
export type InventoryTransferActionConflictErrorObject = (Exclude<ErrorObject & object, readonly unknown[]>)
    & ({
    /** Value enum: "ACTION_NOT_ALLOWED". */
    "code": "ACTION_NOT_ALLOWED" | (string & {});
    /**
     * minItems: 1. [] (Value): {@link InventoryTransferActionConflictErrorDetail}. The inventory
     * transfer state, version, and supported actions for a refused action. One specific failure
     * within an error, with a `code` and `message` plus fields that depend on the code, such as
     * the `param`, resource, quantity, or amount involved.
     */
    "details": Array<InventoryTransferActionConflictErrorDetail>;
    /** Value enum: "action". */
    "param": "action" | (string & {});
    /** Value enum: "conflict_error". */
    "type": "conflict_error" | (string & {});
    /**
     * Human-readable explanation for your logs. The wording can change, so branch on code, and do
     * not show it to buyers as is.
     */
    "message": string;
    /**
     * Error reference at https://developers.withflintpay.com/docs/errors# followed by the
     * lowercase error code.
     */
    "doc_url": string;
    /**
     * System boundary responsible for correcting the failure. Value enum: "merchant",
     * "integration", "flint".
     */
    "error_source": "merchant" | "integration" | "flint" | (string & {});
});
export type InventoryTransferClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.closed";
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
    "event_type": "inventory_transfer.closed";
});
/**
 * The `inventory_transfer.closed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
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
 * The `inventory_transfer.closed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
});
export type InventoryTransferDepartedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.departed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.departed";
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
    "event_type": "inventory_transfer.departed";
});
/**
 * The `inventory_transfer.departed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferDepartedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
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
 * The `inventory_transfer.departed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferDepartedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
});
/**
 * One line of an inventory transfer, with the requested quantity and how much has departed, been
 * received by condition, canceled, lost, or returned.
 */
export type InventoryTransferLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "canceled_quantity": number;
    /** Value enum: "sellable", "quality_control", "damaged", "quarantined". */
    "condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "departed_quantity": number;
    "inventory_item_id": string;
    "inventory_transfer_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "lost_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_damaged_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quality_control_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quarantined_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_sellable_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "returned_quantity": number;
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequest = {
    /** Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined". */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** minLength: 1. */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequestInput = {
    /** Default: "sellable". Value enum: "sellable", "quality_control", "damaged", "quarantined". */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /** minLength: 1. */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** A page of `InventoryTransfer` objects. */
export type InventoryTransferListResponse = {
    /**  [] (Value): {@link InventoryTransfer}. Stock moving between locations. */
    "data": Array<InventoryTransfer>;
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
export type InventoryTransferLostEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.lost";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.lost";
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
    "event_type": "inventory_transfer.lost";
});
/**
 * The `inventory_transfer.lost` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryTransferLostInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
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
 * The `inventory_transfer.lost` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryTransferLostMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
});
export type InventoryTransferReceivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.received";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.received";
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
    "event_type": "inventory_transfer.received";
});
/**
 * The `inventory_transfer.received` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferReceivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
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
 * The `inventory_transfer.received` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReceivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
});
/** A response containing `InventoryTransfer` data. */
export type InventoryTransferResponse = {
    /** Stock moving between locations. */
    "data": InventoryTransfer;
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
 * inventory_transfer is the primary resource and expected_version target. Stock-moving transitions
 * return this result instead of a resource alone.
 */
export type InventoryTransferResult = {
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /** Stock moving between locations. */
    "inventory_transfer": InventoryTransfer;
};
/** A response containing `InventoryTransferResult` data. */
export type InventoryTransferResultResponse = {
    /**
     * inventory_transfer is the primary resource and expected_version target. Stock-moving
     * transitions return this result instead of a resource alone.
     */
    "data": InventoryTransferResult;
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
export type InventoryTransferReturnedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.returned";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryTransfer;
    };
    "event_type"?: "inventory_transfer.returned";
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
    "event_type": "inventory_transfer.returned";
});
/**
 * The `inventory_transfer.returned` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferReturnedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
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
 * The `inventory_transfer.returned` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReturnedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryTransfer}. Stock moving between locations. */
    "data"?: {
        /** Stock moving between locations. */
        "object": InventoryTransfer;
    };
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
});
/** The request body for: Transition inventory transfer. */
export type InventoryTransferTransitionRequest = ((InventoryTransferTransitionRequestDepart)
    | (InventoryTransferTransitionRequestReceive)
    | (InventoryTransferTransitionRequestReturnToOrigin)
    | (InventoryTransferTransitionRequestReportLoss)
    | (InventoryTransferTransitionRequestCancel)
    | (Record<string, unknown>));
/** The `cancel` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestCancel = {
    /** Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_canceled_quantity
     * (Required): integer. Cumulative quantity that should be canceled before departure.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `cancel` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestCancelInput = {
    /** Value enum: "cancel". */
    "action": "cancel";
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_canceled_quantity
     * (Required): integer. Cumulative quantity that should be canceled before departure.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The `depart` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestDepart = {
    /** Value enum: "depart". */
    "action": "depart" | (string & {});
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_departed_quantity
     * (Required): integer. Cumulative quantity that should have departed the origin. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have departed the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_departed_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `depart` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestDepartInput = {
    /** Value enum: "depart". */
    "action": "depart";
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_departed_quantity
     * (Required): integer. Cumulative quantity that should have departed the origin. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have departed the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_departed_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The request body for: Transition inventory transfer. */
export type InventoryTransferTransitionRequestInput = ((InventoryTransferTransitionRequestDepartInput)
    | (InventoryTransferTransitionRequestReceiveInput)
    | (InventoryTransferTransitionRequestReturnToOriginInput)
    | (InventoryTransferTransitionRequestReportLossInput)
    | (InventoryTransferTransitionRequestCancelInput));
/** The `receive` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReceive = {
    /** Value enum: "receive". */
    "action": "receive" | (string & {});
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_received_damaged_quantity
     * (Optional): integer. Cumulative received quantity classified as damaged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quality_control_quantity (Optional): integer. Cumulative received
     * quantity classified for quality control. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer.
     * Cumulative quantity that should have been received at the destination. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity
     * classified as quarantined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer.
     * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<({
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: number;
        /**
         * Cumulative received quantity classified for quality control. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: number;
        /**
         * Cumulative quantity that should have been received at the destination. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quantity": number;
        /**
         * Cumulative received quantity classified as quarantined. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: number;
        /**
         * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: number;
    })>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `receive` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReceiveInput = {
    /** Value enum: "receive". */
    "action": "receive";
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_received_damaged_quantity
     * (Optional): integer. Cumulative received quantity classified as damaged. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quality_control_quantity (Optional): integer. Cumulative received
     * quantity classified for quality control. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer.
     * Cumulative quantity that should have been received at the destination. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity
     * classified as quarantined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer.
     * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<({
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: number;
        /**
         * Cumulative received quantity classified for quality control. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: number;
        /**
         * Cumulative quantity that should have been received at the destination. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quantity": number;
        /**
         * Cumulative received quantity classified as quarantined. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: number;
        /**
         * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: number;
    })>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The `report_loss` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReportLoss = {
    /** Value enum: "report_loss". */
    "action": "report_loss" | (string & {});
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_lost_quantity (Required):
     * integer. Cumulative quantity that should be recorded as lost in transit. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_lost_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `report_loss` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReportLossInput = {
    /** Value enum: "report_loss". */
    "action": "report_loss";
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_lost_quantity (Required):
     * integer. Cumulative quantity that should be recorded as lost in transit. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be recorded as lost in transit. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_lost_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The `return_to_origin` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReturnToOrigin = {
    /** Value enum: "return_to_origin". */
    "action": "return_to_origin" | (string & {});
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_returned_quantity
     * (Required): integer. Cumulative quantity that should have returned to the origin.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `return_to_origin` variant of `InventoryTransferTransitionRequest`. */
export type InventoryTransferTransitionRequestReturnToOriginInput = {
    /** Value enum: "return_to_origin". */
    "action": "return_to_origin";
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required):
     * string. Transfer line being transitioned. minLength: 1. [].target_returned_quantity
     * (Required): integer. Cumulative quantity that should have returned to the origin.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Transfer line being transitioned. minLength: 1. */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should have returned to the origin. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_returned_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
export type InventoryTransfersCreateParams = (InputValue<CreateInventoryTransferRequestInput>);
export type InventoryTransfersGetParams = {};
export type InventoryTransfersListParams = {
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
    /** Filter by inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inventory_item_id"?: InputValue<string>;
    /** Filter by origin Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "origin_location_id"?: InputValue<string>;
    /** Filter by destination Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "destination_location_id"?: InputValue<string>;
    /**
     * Filter by transfer status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "draft",
     * "in_transit", "partially_resolved", "closed". Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "draft", "in_transit", "partially_resolved", "closed". anyOf[1][] (Value): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[2] (Value): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "status"?: InputValue<("draft" | "in_transit" | "partially_resolved" | "closed")
        | readonly ("draft" | "in_transit" | "partially_resolved" | "closed")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Search by inventory_transfer_id, external_reference_id, or note. maxLength: 255. */
    "query"?: InputValue<string>;
    /**
     * Filter by how the transfer ended. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed". Value
     * enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed". anyOf[1][] (Value): string. Value
     * enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * anyOf[2] (Value): string. Value enum: "received", "canceled", "received_with_cancellation",
     * "returned", "lost", "mixed".
     */
    "closed_reason"?: InputValue<("received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed")
        | readonly ("received" | "canceled" | "received_with_cancellation" | "returned" | "lost" | "mixed")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on departed_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "departed_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryTransfersTransitionParams = (InventoryTransferTransitionRequestInput);
export type InventoryTransfersUpdateParams = (InputValue<UpdateInventoryTransferRequestInput>);
/** A bill issued to a customer. */
export type Invoice = {
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time.
     */
    "closed_at"?: string;
    /**
     * How this invoice is collected, resolved when the draft is written. Send this object back
     * when updating its collection policy. The invoice collection policy resolved at write time.
     * The object can be sent back when updating a draft.
     */
    "collection": InvoiceCollection;
    /**
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved".
     */
    "collection_block_status": "none" | "inventory_blocked" | "resolved" | (string & {});
    /** When the invoice was created. Format: date-time. */
    "created_at"?: string;
    /**
     * Credit note credit allocated to this invoice, minus reversed allocations. Unallocated credit
     * isn't included. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "credit_money": MoneyValue;
    /**
     * The part of the balance due now. Without schedule_entries, it equals outstanding_money. With
     * schedule_entries, it is the outstanding amount of the first entry, in schedule order, whose
     * due time has arrived and that still has a balance, or 0 when there is none. It is the amount
     * the next collect call or checkout session charges. To total everything past due, add the
     * outstanding_money of the entries whose status is due or overdue. Always 0 unless the invoice
     * is open or partially_paid. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "currently_due_money": MoneyValue;
    /**
     * Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Customer billed by this invoice. Absent when the invoice has no customer. */
    "customer_id"?: string;
    /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
    "delivery_mode"?: "email" | "caller_managed" | (string & {});
    /**
     * When payment is due. With payment terms, issue sets it from issued_at and the terms, counted
     * in the invoice's timezone. Absent when the invoice has no due date. Format: date-time.
     */
    "due_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. null when unset. minLength: 1. maxLength: 255.
     */
    "external_reference_id": string | null;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. null when
     * unset.
     */
    "footer": string | null;
    /** Flint invoice ID. */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, due_at has passed and outstanding_money is above zero; with them, at least
     * one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /** When the invoice was issued. Absent on a draft. Format: date-time. */
    "issued_at"?: string;
    /**
     * Late fees assessed after issue, minus waivers, including amounts since paid or written off.
     * Itemized in late_fees. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "late_fee_money": MoneyValue;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. late_fee_money is their assessed total minus waivers. [] (Value): {@link
     * InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<InvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue. null
     * when unset.
     */
    "memo": string | null;
    /** Merchant that owns this invoice. */
    "merchant_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Summary of the backing order. Returned only with expand=order. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** The order this invoice bills. Every invoice has one; quick pay creates it. */
    "order_id": string;
    /**
     * What is still owed: total_money + late_fee_money - paid_money - credit_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and void invoices;
     * equal to total_money on a draft. Refunds don't change it. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money": MoneyValue;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time.
     */
    "paid_at"?: string;
    /**
     * Payments collected toward this invoice, online or as recorded manual payments, minus
     * reversed payments, including payments toward late fees. Never below zero. Refunds don't
     * reduce it; they are in refunded_money. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "paid_money": MoneyValue;
    /**
     * The resolved due-date policy. Send this object back when updating the draft; payment_terms
     * captures the term's current revision again. The invoice due-date policy resolved at write
     * time. The object can be sent back when updating a draft.
     */
    "payment_due": InvoicePaymentDue;
    /**
     * The payment term captured on the draft, with its due date rule and late fee policy. Later
     * changes to the payment term don't affect this invoice. The payment terms saved on an
     * invoice: the term's name, version, due date calculation, and late fee policy.
     */
    "payment_terms_snapshot"?: InvoicePaymentTermsSnapshot;
    /**
     * The buyer's purchase order number, printed on the invoice and PDF. It cannot change after
     * issue. null when unset.
     */
    "po_number": string | null;
    /**
     * The hosted invoice link where the buyer views and pays the invoice. Present after issue on
     * API reads, except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret.
     */
    "public_url"?: string;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue. null
     * when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. null when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Money refunded to the buyer after collection. Refunds don't reopen the balance;
     * refund_status summarizes them. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Whether automatic reminders are paused. Set reminders_paused on PATCH
     * /v1/invoices/{invoice_id} to change it.
     */
    "reminders_paused": boolean;
    /**
     * When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     */
    "reminders_paused_at"?: string;
    /**
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. A postal address. Every address has country. Addresses Flint
     * checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "remit_to_address"?: Address;
    /**
     * The payment schedule, in schedule order. Always [] when the invoice has no schedule and is
     * collected in one balance. [] (Value): {@link InvoiceScheduleEntry}. One payment on an
     * invoice's payment schedule, such as a deposit, installment, or balance, with its due time,
     * amounts, and status.
     */
    "schedule_entries": Array<InvoiceScheduleEntry>;
    /**
     * When Flint will issue and deliver this draft. null when no issue is scheduled. Cleared when
     * the draft is issued or voided, or when you send null. Format: date-time.
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. null when unset. Format: date.
     */
    "service_date": string | null;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, tax, and totals. A
     * draft previews the backing order; issue freezes it, and later order changes don't reach an
     * issued invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. void and uncollectible are final. Refunds change refund_status without
     * reopening the balance. Value enum: "draft", "open", "partially_paid", "paid", "void",
     * "uncollectible", "credited".
     */
    "status": "draft" | "open" | "partially_paid" | "paid" | "void" | "uncollectible" | "credited" | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. null when the order isn't part of a subscription.
     */
    "subscription_id": string | null;
    /**
     * IANA time zone for the invoice's calendar dates, such as due dates from payment terms and
     * reminder and late fee day counts. At issue, an invoice without one takes the invoice
     * settings timezone.
     */
    "timezone"?: string;
    /**
     * What the issued invoice bills, equal to snapshot.pricing_amounts.total_money. Fixed at
     * issue; a draft previews the backing order total. Late fees are in late_fee_money. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /** When the invoice was marked uncollectible. Format: date-time. */
    "uncollectible_at"?: string;
    /** When the invoice last changed. Format: date-time. */
    "updated_at"?: string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time.
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. */
    "voided_at"?: string;
    /**
     * The balance written off when the invoice was marked uncollectible, including unpaid late
     * fees. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "written_off_money": MoneyValue;
};
/**
 * Read-only invoice history row for timeline rendering and debugging. Detail fields are present
 * only on the activity types their descriptions list. The invoice and the referenced resources
 * remain authoritative for state and money movement.
 */
export type InvoiceActivity = {
    /**
     * What happened. other means an activity this API version doesn't describe yet. New values may
     * be added; treat an unrecognized value like `other`. Value enum: "draft_created", "issued",
     * "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started",
     * "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded",
     * "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated",
     * "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due",
     * "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited", "other".
     */
    "activity_type": "draft_created"
        | "issued"
        | "sent"
        | "delivery_sent"
        | "reminder_sent"
        | "viewed"
        | "payment_attempt_started"
        | "payment_applied"
        | "manual_payment_recorded"
        | "manual_payment_reversed"
        | "refund_succeeded"
        | "voided"
        | "token_regenerated"
        | "collection_blocked"
        | "collection_block_resolved"
        | "updated"
        | "marked_uncollectible"
        | "payment_processing"
        | "issue_failed"
        | "overdue"
        | "reminder_due"
        | "late_fee_due"
        | "late_fee_assessed"
        | "late_fee_waived"
        | "credited"
        | "other"
        | (string & {});
    /**
     * Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the
     * merchant ID.
     */
    "actor_id"?: string;
    /**
     * Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint
     * on a schedule or in response to a payment event. Absent when no actor was recorded. Value
     * enum: "merchant", "buyer", "system".
     */
    "actor_type"?: "merchant" | "buyer" | "system" | (string & {});
    /**
     * Amount of the payment, refund, or late fee. Present on payment_applied,
     * manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and
     * late_fee_waived, and on updated when a card refund changed or a credit note refund was
     * requested. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /** Delivery channel. Present on delivery_sent and reminder_sent. Value enum: "email". */
    "channel"?: "email" | (string & {});
    /**
     * Checkout session the buyer paid through. Present on payment_attempt_started for hosted
     * payments.
     */
    "checkout_session_id"?: string;
    /**
     * Why collection was blocked or unblocked. Present on collection_blocked and
     * collection_block_resolved. Value enum: "inventory_unavailable", "inventory_restored".
     */
    "collection_block_reason"?: "inventory_unavailable" | "inventory_restored" | (string & {});
    /** When the activity happened. Format: date-time. */
    "created_at": string;
    /**
     * Total credit applied to the invoice. Present on credited. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "credit_money"?: MoneyValue;
    /**
     * Credit note that requested the refund. Present on updated when a credit note refund was
     * requested or changed.
     */
    "credit_note_id"?: string;
    /** Human-readable Flint description of the activity. */
    "description": string;
    /**
     * Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due.
     * Format: date-time.
     */
    "due_at"?: string;
    /** Public error code of the failed scheduled issue. Present on issue_failed. */
    "error_code"?: string;
    /**
     * Amount the processing payment is expected to settle. Present on payment_processing. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
    /** Flint invoice activity ID. IDs begin with inevt_. */
    "invoice_activity_id": string;
    /** The delivery attempt that sent the email. Present on delivery_sent and reminder_sent. */
    "invoice_delivery_attempt_id"?: string;
    /** The late fee. Present on late_fee_assessed and late_fee_waived. */
    "invoice_late_fee_id"?: string;
    /** The manual payment. Present on manual_payment_recorded and manual_payment_reversed. */
    "invoice_manual_payment_id"?: string;
    /** The payment attempt. Present on payment_attempt_started and payment_processing. */
    "invoice_payment_attempt_id"?: string;
    /**
     * Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due,
     * late_fee_assessed, and late_fee_waived when the invoice has a payment schedule.
     */
    "invoice_schedule_entry_id"?: string;
    /** Payment intent whose funds were applied. Present on payment_applied. */
    "payment_intent_id"?: string;
    /**
     * Payment rail of the attempt. Present on payment_processing. Value enum: "card", "ach_debit".
     */
    "rail"?: "card" | "ach_debit" | (string & {});
    /**
     * Related refund. Present on refund_succeeded, and on updated when a card refund changed or a
     * credit note refund was requested or changed. Read the refund for its current status.
     */
    "refund_id"?: string;
    /** Recipient of the email. Present on delivery_sent and reminder_sent. */
    "to_email"?: string;
    /**
     * Balance written off. Present on marked_uncollectible. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "written_off_money"?: MoneyValue;
};
/** A page of `InvoiceActivity` objects. */
export type InvoiceActivityListResponse = {
    /**
     *  [] (Value): {@link InvoiceActivity}. Read-only invoice history row for timeline rendering
     * and debugging. Detail fields are present only on the activity types their descriptions list.
     * The invoice and the referenced resources remain authoritative for state and money movement.
     */
    "data": Array<InvoiceActivity>;
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
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicy = {
    /**
     * maxItems: 5. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 30.
     */
    "retry_day_offsets": Array<number>;
};
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicyInput = InvoiceAutopayRetryPolicy;
/**
 * The request body for: Create an invoice checkout session for the current buyer; Get or create
 * invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequest = ({
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirects;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded" | (string & {});
});
/**
 * The request body for: Create an invoice checkout session for the current buyer; Get or create
 * invoice checkout collection.
 */
export type InvoiceCheckoutSessionRequestInput = ({
    /**
     * Optional. The schedule entry to collect. Only the earliest entry that is due and still has
     * an outstanding balance can be collected; omit it to collect that entry. Not allowed on an
     * invoice without a schedule. minLength: 1.
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Origin of the page where you render this embedded checkout, such as
     * https://shop.example.com. Only this origin can show the checkout's gift card challenge and
     * receive its result. It does not let the browser call the Flint API. Accepted only when
     * surface is embedded. Use HTTPS and a lowercase DNS hostname. Do not include a path, query,
     * fragment, or default port. In test mode, localhost, names ending in .localhost, and
     * 127.0.0.1 also work over HTTP or HTTPS. minLength: 1. maxLength: 255.
     */
    "page_origin"?: string;
    /**
     * Embedded sessions only. Absolute HTTPS URL on your site where Flint sends the buyer after a
     * redirect payment such as Affirm, whatever the outcome; read the session there to show the
     * result. Required when the session offers affirm. It can't contain credentials, a query
     * string, or a fragment. Test mode also accepts http loopback URLs. Up to 2,048 characters.
     * Format: uri. minLength: 1. maxLength: 2048.
     */
    "payment_return_url"?: string;
    /**
     * Where hosted checkout sends the buyer. Not allowed when surface is embedded; use
     * payment_return_url.
     */
    "redirects"?: CheckoutRedirectsRequestInput;
    /**
     * Where the checkout sends the buyer after paying, such as the invoice's page in the customer
     * account. Limited to 2048 characters (Unicode code points) before trimming surrounding
     * whitespace. It must be an HTTPS address of the merchant's customer account: /{merchant_id}
     * on Flint's account host, the merchant's active custom account domain, or the host of
     * customer_account.merchant_account_url when the merchant hosts the account. In test mode, any
     * URL on localhost or a loopback IP address (such as 127.0.0.1 or [::1]) is also accepted,
     * over HTTP or HTTPS and on any port. Anything else returns 400 INVALID_REQUEST with an
     * INVALID_VALUE detail on return_url. An alias for redirects.success_url on hosted checkout or
     * payment_return_url on embedded checkout; keep them consistent when sending both. Format:
     * uri. minLength: 1. maxLength: 2048.
     */
    "return_url"?: string;
    /**
     * Defaults to hosted. The same surface reuses the open checkout. A different surface replaces
     * it only while no payment is in progress; otherwise the request returns 409
     * ACTION_NOT_ALLOWED with reason in_progress. Default: "hosted". Value enum: "hosted",
     * "embedded".
     */
    "surface"?: "hosted" | "embedded";
});
/** A response containing `InvoiceCheckoutSessionResult` data. */
export type InvoiceCheckoutSessionResponse = {
    /**
     * The invoice is the primary resource, with its checkout session, credential, and any invoice
     * payment attempt.
     */
    "data": InvoiceCheckoutSessionResult;
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
 * The invoice is the primary resource, with its checkout session, credential, and any invoice
 * payment attempt.
 */
export type InvoiceCheckoutSessionResult = {
    "checkout_auth_token": string;
    /** A session in which a buyer completes an order's payment. */
    "checkout_session": CheckoutSession;
    /** A bill issued to a customer. */
    "invoice": Invoice;
    /** An attempt to collect payment for an invoice. */
    "invoice_payment_attempt"?: InvoicePaymentAttempt;
};
/**
 * The invoice collection policy resolved at write time. The object can be sent back when updating
 * a draft.
 */
export type InvoiceCollection = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated", "automatic", "external".
     */
    "mode": "buyer_initiated" | "automatic" | "external" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. On a draft, null means Flint
     * charges the customer's default card, selected at issue. After issue it is the selected card.
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & ((Exclude<InvoiceCollectionBuyerInitiated & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionAutomatic & object, readonly unknown[]>)
    | (Exclude<InvoiceCollectionExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `automatic` variant of `InvoiceCollection`. */
export type InvoiceCollectionAutomatic = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. On a draft, null means Flint
     * charges the customer's default card, selected at issue. After issue it is the selected card.
     */
    "payment_method_id": string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
    "payment_method_id": string | null;
}));
export type InvoiceCollectionBlockResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_block_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_block_resolved";
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
    "event_type": "invoice.collection_block_resolved";
});
/**
 * The `invoice.collection_block_resolved` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InvoiceCollectionBlockResolvedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
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
 * The `invoice.collection_block_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceCollectionBlockResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
});
export type InvoiceCollectionBlockedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_blocked";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Invoice;
    };
    "event_type"?: "invoice.collection_blocked";
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
    "event_type": "invoice.collection_blocked";
});
/**
 * The `invoice.collection_blocked` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InvoiceCollectionBlockedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Invoice}. A bill issued to a customer. */
    "data"?: {
        /** A bill issued to a customer. */
        "object": Invoice;
    };
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
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
