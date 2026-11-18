import type {
    ErrorDetail,
    ErrorObject,
    DisputesAcceptParams,
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedCustomerSummaryPreviousAttributes,
    ExpandedOrderSummaryPreviousAttributes
} from './types-26.js';
import type { ResourceType, ResponseMeta } from './types-62.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InventoryLevel } from './types-32.js';
import type { InputValue } from '../runtime.js';
import type { CancelInventoryTransferRequestInput } from './types-5.js';
import type { CreateInventoryTransferRequestInput } from './types-10.js';
import type { DepartInventoryTransferRequestInput } from './types-25.js';
import type { ReceiveInventoryTransferRequestInput } from './types-60.js';
import type { ReportInventoryTransferLossRequestInput } from './types-61.js';
import type { ReturnInventoryTransferToOriginRequestInput } from './types-63.js';
import type { UpdateInventoryTransferRequestInput } from './types-76.js';
import type { Address, AddressPreviousAttributes } from './types-0.js';
import type { InvoiceLateFee, InvoiceCollectionPreviousAttributes, InvoiceLateFeePreviousAttributes } from './types-35.js';
import type {
    InvoicePaymentDue,
    InvoicePaymentPolicy,
    InvoicePaymentPolicyPreviousAttributes,
    InvoicePaymentDuePreviousAttributes,
    InvoicePaymentPolicyRequestInput
} from './types-36.js';
import type {
    InvoicePaymentTermsSnapshot,
    InvoiceScheduleEntry,
    InvoicePaymentTermsSnapshotPreviousAttributes,
    InvoiceScheduleEntryPreviousAttributes
} from './types-37.js';
import type {
    InvoiceSettlementAmounts,
    InvoiceSnapshot,
    InvoiceSettlementAmountsPreviousAttributes,
    InvoiceSnapshotPreviousAttributes
} from './types-38.js';
import type { PricingAmounts, PricingAmountsPreviousAttributes } from './types-56.js';
import type { MoneyValue } from './types-44.js';
import type { WebhookInvoice } from './types-79.js';
/** Stock moving between locations. */
export type InventoryTransfer = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "closed_at"?: string;
    /**
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "departed_at"?: string;
    /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
     * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     */
    "inventory_transfer_id": string;
    /**
     * Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
     * replaces the full collection. [] (Value): {@link InventoryTransferLine}. One line of an
     * inventory transfer, with its quantities.
     */
    "lines": Array<InventoryTransferLine>;
    /** Free-text note about the transfer. */
    "note"?: string;
    /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at"?: string;
    /**
     * Where the transfer stands, worked out from the quantities that have left the origin and have
     * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed".
     */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". [] (Value): string. Value enum: "depart", "receive",
     * "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
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
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id"?: string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Example: "order". Public resource type: the resource's ID field
     * name without `_id`. Clients must accept values added in future releases. Value enum:
     * "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
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
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return",
     * "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
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
     * bank_return_not_contestable, cancellation_scheduled, choice_group_unavailable,
     * configuration_required, confirmation_token_unusable, credit_exceeds_charge,
     * credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold,
     * delivery_requirement_changes, dependency_revoked, derived_from_packages,
     * destination_not_served, disclosure_changed, dispute_payment_unavailable, end_after_reached,
     * environment_not_granted, existing_order_checkout, external_billing_schedule, field_locked,
     * first_period_unpaid, frozen_at_not_later, image_ingestion_restart_required, in_progress,
     * inventory_wait, invoice_finalized, jwt_signing_not_enabled, managed_by_owner,
     * managed_externally, merchant_hosted_customer_accounts, merchant_managed_email,
     * method_unavailable, minimum_charge, mixed_tax_treatment, not_itemized, not_offered,
     * not_paused, offer_subscription, on_hold, order_edit_pending, out_of_order,
     * owner_identity_conflict, package_empty, paid_period_required, payload_expired,
     * payment_attempts_exhausted, payment_collected, payment_disputed,
     * payment_method_not_reusable, payment_method_required, payment_required,
     * payment_split_consent_required, payout_defaults_managed_externally, payout_delay,
     * payout_frequency, period_end_unavailable, plan_change_scheduled,
     * platform_capability_inactive, platform_fee_consent_required, platform_onboarding_required,
     * platform_pending_review, platform_rejected, prepaid_deliveries_remaining,
     * previous_refund_failed, provider_action_unsupported, quantity_not_carried, reader_offline,
     * reader_type_not_supported, reader_unavailable, reconciliation_required, refund_created,
     * refund_unavailable, refund_window_expired, restricted, return_checkout, return_owned,
     * return_tax_mismatch, sandbox_reset_failed, secret_not_issued, seller_not_ready,
     * simulated_reader_required, status_not_reached, stock_at_risk, store_credit_unavailable,
     * subscription_owned, subscription_terms_locked, terminal_status, test_event,
     * trial_in_progress, unsupported_state, variant_not_targeted, verification_required. When code
     * is ALREADY_EXISTS, one of: dashboard_sign_in_required, device_reader_already_exists,
     * hardware_fingerprint_already_exists. When code is CONCURRENT_MODIFICATION, one of:
     * credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of:
     * calculation_expired, caller_rates_required, destination_changed, input_required,
     * option_expired, quote_expired, quote_revoked, quote_stale, selection_changed,
     * selection_expired, window_expired. When code is EXTERNAL_SERVICE_ERROR, one of:
     * issuer_unavailable, outcome_unknown, rate_callback_failed, rate_unavailable,
     * tax_callback_failed. When code is FORBIDDEN, one of: checkout_launch_token_restricted,
     * checkout_recovery_attempt_mismatch, checkout_recovery_restricted,
     * checkout_session_order_mismatch, checkout_session_payment_required, context_mismatch,
     * demo_session_route_not_allowed, direct_owner_required, environment_grant_required,
     * environment_mismatch, expansion_not_permitted, full_access_required, linked_key_not_allowed,
     * live_mode_required, merchant_access_required, merchant_credential_required,
     * merchant_role_insufficient, not_checkout_session, not_permitted,
     * organization_membership_required, organization_role_insufficient, owner_workflow_required,
     * request_blocked, role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one
     * of: page_origin_required, proof_rejected, proof_required. When code is
     * IDEMPOTENCY_KEY_REUSED, one of: transport_mismatch. When code is INSUFFICIENT_SCOPE, one of:
     * install_scope_not_granted, scope_not_granted, scope_not_held. When code is INTERNAL_ERROR,
     * one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed,
     * mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, insufficient_available_value,
     * merchant_adjustments_daily, merchant_imports_daily, order_edit_balance_due. When code is
     * LIMIT_REACHED, one of: active_readers, checkout_tax_calculations, consecutive_skips,
     * customer_tax_exemptions, daily_demo_sessions, daily_gift_card_purchases,
     * delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage,
     * license_key_activations, merchant_signups, monthly_tax_calculations, owned_merchants,
     * partner_app_credentials, partner_app_install_links, payment_intents_per_order,
     * payment_link_completions, payment_retries_per_period, pending_reports, price_list_prices,
     * product_variants, receipt_recipients, saved_card_codes, test_clock_subscriptions,
     * verification_attempts, verification_codes, webhook_event_streams,
     * webhook_listener_signatures_daily, workload_identities. When code is MERCHANT_NOT_READY, one
     * of: account_sessions_unavailable, account_setup_repair_required, account_setup_unavailable,
     * billing_suspended, business_address_required, capability_blocked, capability_not_requested,
     * capability_pending, capability_unavailable, default_environment_required,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, payment_splits_unavailable,
     * platform_funding_unavailable, platform_review, pricing_amount_below_minimum,
     * pricing_fee_at_or_above_amount, pricing_not_authorized, pricing_not_configured,
     * processing_not_enabled, processing_restricted, processor_not_configured, provisioning,
     * requirements_due, tax_category_required. When code is OPERATION_IN_PROGRESS, one of:
     * delivery_selection_materializing, reader_busy, sandbox_resetting. When code is
     * PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range,
     * bounded_inventory_guarantee_not_supported, capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: platform_funding_unavailable. When code is
     * PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing,
     * code_invalid, code_required, codes_disabled, currency_mismatch, customer_limit_reached,
     * customer_mismatch, customer_required, exhausted, expired, inactive, max_promotions_reached,
     * minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started,
     * recurrence_completed, superseded, superseded_by_better_offer, superseded_by_higher_priority,
     * unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants,
     * subscription_balance_due, subscription_payment_pending, subscription_renewal. When code is
     * RESOURCE_NOT_FOUND, one of: email_missing, resource_in_different_environment. When code is
     * SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required,
     * template_not_configured. Additional reasons may be added. Value enum:
     * "account_sessions_unavailable", "account_setup_repair_required",
     * "account_setup_unavailable", "action_window_too_short", "active_readers",
     * "advance_limit_exceeded", "already_applied", "amount_out_of_range", "archived",
     * "authorization_expired", "automatic_disabled", "bank_return_not_contestable",
     * "billing_suspended", "bounded_inventory_guarantee_not_supported",
     * "business_address_required", "buy_item_missing", "buyer_daily", "calculation_expired",
     * "caller_rates_required", "cancellation_scheduled", "capability_blocked",
     * "capability_not_requested", "capability_pending", "capability_unavailable", "card_balance",
     * "card_daily", "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch",
     * "checkout_recovery_restricted", "checkout_session_order_mismatch",
     * "checkout_session_payment_required", "checkout_tax_calculations",
     * "choice_group_unavailable", "code_invalid", "code_required", "codes_disabled",
     * "configuration_required", "confirmation_token_unusable", "consecutive_skips",
     * "context_mismatch", "credit_exceeds_charge", "credit_note_refund_retry_exhausted",
     * "credit_note_tax_reconciliation_required", "currency_mismatch",
     * "customer_account_mode_conflict", "customer_limit_reached", "customer_mismatch",
     * "customer_required", "customer_tax_exemptions", "daily_demo_sessions",
     * "daily_gift_card_purchases", "dashboard_sign_in_required", "default_environment_required",
     * "delivery_hold", "delivery_requirement_changes", "delivery_selection_materializing",
     * "delivery_selection_replacements", "demo_session_route_not_allowed", "dependency_revoked",
     * "derived_from_packages", "destination_changed", "destination_not_served",
     * "device_reader_already_exists", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable",
     * "email_missing", "enabled_risk_rules", "end_after_reached", "environment_grant_required",
     * "environment_mismatch", "environment_not_granted", "exhausted", "existing_order_checkout",
     * "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders",
     * "field_locked", "first_period_unpaid", "frozen_at_not_later", "full_access_required",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "input_required", "install_scope_not_granted",
     * "insufficient_available_value", "inventory_wait", "invoice_finalized", "issuer_unavailable",
     * "jwt_signing_not_enabled", "license_key_activations", "linked_key_not_allowed",
     * "live_mode_required", "location_ineligible", "location_limit", "malformed",
     * "managed_by_owner", "managed_externally", "max_promotions_reached",
     * "merchant_access_required", "merchant_account_action_required",
     * "merchant_adjustments_daily", "merchant_credential_required",
     * "merchant_hosted_customer_accounts", "merchant_imports_daily", "merchant_managed_email",
     * "merchant_payments_disabled", "merchant_role_insufficient", "merchant_signups",
     * "method_unavailable", "minimum_charge", "minimum_not_met", "mixed_tax_treatment",
     * "mode_mismatch", "monthly_tax_calculations", "no_discountable_balance",
     * "not_checkout_session", "not_combinable", "not_eligible", "not_itemized", "not_offered",
     * "not_paused", "not_permitted", "not_yet_started", "offer_subscription", "on_hold",
     * "onboarding_required", "option_expired", "order_edit_balance_due", "order_edit_pending",
     * "organization_membership_required", "organization_role_insufficient", "out_of_order",
     * "outcome_unknown", "owned_merchants", "owner_identity_conflict", "owner_workflow_required",
     * "package_empty", "page_origin_required", "paid_period_required", "partner_app_credentials",
     * "partner_app_install_links", "payload_expired", "payment_account_context_invalid",
     * "payment_account_setup_incomplete", "payment_attempts_exhausted", "payment_collected",
     * "payment_disputed", "payment_intents_per_order", "payment_link_completions",
     * "payment_method_not_reusable", "payment_method_required",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payment_split_consent_required",
     * "payment_splits_unavailable", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "pending_reports", "period_end_unavailable", "plan_change_scheduled",
     * "platform_capability_inactive", "platform_fee_consent_required",
     * "platform_funding_unavailable", "platform_onboarding_required", "platform_pending_review",
     * "platform_rejected", "platform_review", "prepaid_deliveries_remaining",
     * "previous_refund_failed", "price_list_prices", "pricing_amount_below_minimum",
     * "pricing_fee_at_or_above_amount", "pricing_not_authorized", "pricing_not_configured",
     * "processing_not_enabled", "processing_restricted", "processor_not_configured",
     * "processor_unavailable", "product_variants", "proof_rejected", "proof_required",
     * "provider_action_unsupported", "provisioning", "quantity_not_carried", "quote_expired",
     * "quote_revoked", "quote_stale", "rate_callback_failed", "rate_unavailable", "reader_busy",
     * "reader_offline", "reader_type_not_supported", "reader_unavailable", "receipt_recipients",
     * "reconciliation_required", "recurrence_completed", "refund_created", "refund_unavailable",
     * "refund_window_expired", "repair_required", "request_blocked", "requirements_due",
     * "resource_in_different_environment", "restricted", "return_checkout", "return_owned",
     * "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable",
     * "sandbox_not_accessible", "sandbox_reset_failed", "sandbox_resetting",
     * "sandbox_selection_forbidden", "saved_card_codes", "scope_not_granted", "scope_not_held",
     * "secret_not_issued", "selected_by_active_variants", "selection_changed",
     * "selection_expired", "self_role_edit_forbidden", "seller_not_ready", "session_ended",
     * "simulated_reader_required", "status_not_reached", "stock_at_risk",
     * "store_credit_unavailable", "subscription_balance_due", "subscription_owned",
     * "subscription_payment_pending", "subscription_renewal", "subscription_terms_locked",
     * "superseded", "superseded_by_better_offer", "superseded_by_higher_priority",
     * "tax_callback_failed", "tax_category_required", "template_not_configured",
     * "terminal_status", "test_clock_subscriptions", "test_event", "test_mode_required",
     * "transaction_purpose_unresolved", "transport_mismatch", "trial_in_progress", "unknown",
     * "unknown_type", "unsupported_state", "variant_not_targeted", "verification_attempts",
     * "verification_codes", "verification_required", "webhook_event_streams",
     * "webhook_listener_signatures_daily", "window_expired", "workload_identities",
     * "wrong_credential_type".
     */
    "reason": "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "active_readers"
        | "advance_limit_exceeded"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "bounded_inventory_guarantee_not_supported"
        | "business_address_required"
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
        | "choice_group_unavailable"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "confirmation_token_unusable"
        | "consecutive_skips"
        | "context_mismatch"
        | "credit_exceeds_charge"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "customer_account_mode_conflict"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "customer_tax_exemptions"
        | "daily_demo_sessions"
        | "daily_gift_card_purchases"
        | "dashboard_sign_in_required"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_materializing"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "dependency_revoked"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "device_reader_already_exists"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "disclosure_changed"
        | "dispute_payment_unavailable"
        | "email_missing"
        | "enabled_risk_rules"
        | "end_after_reached"
        | "environment_grant_required"
        | "environment_mismatch"
        | "environment_not_granted"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "first_period_unpaid"
        | "frozen_at_not_later"
        | "full_access_required"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "input_required"
        | "install_scope_not_granted"
        | "insufficient_available_value"
        | "inventory_wait"
        | "invoice_finalized"
        | "issuer_unavailable"
        | "jwt_signing_not_enabled"
        | "license_key_activations"
        | "linked_key_not_allowed"
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
        | "merchant_managed_email"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "merchant_signups"
        | "method_unavailable"
        | "minimum_charge"
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
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_edit_balance_due"
        | "order_edit_pending"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "out_of_order"
        | "outcome_unknown"
        | "owned_merchants"
        | "owner_identity_conflict"
        | "owner_workflow_required"
        | "package_empty"
        | "page_origin_required"
        | "paid_period_required"
        | "partner_app_credentials"
        | "partner_app_install_links"
        | "payload_expired"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_attempts_exhausted"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_method_not_reusable"
        | "payment_method_required"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payment_split_consent_required"
        | "payment_splits_unavailable"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "pending_reports"
        | "period_end_unavailable"
        | "plan_change_scheduled"
        | "platform_capability_inactive"
        | "platform_fee_consent_required"
        | "platform_funding_unavailable"
        | "platform_onboarding_required"
        | "platform_pending_review"
        | "platform_rejected"
        | "platform_review"
        | "prepaid_deliveries_remaining"
        | "previous_refund_failed"
        | "price_list_prices"
        | "pricing_amount_below_minimum"
        | "pricing_fee_at_or_above_amount"
        | "pricing_not_authorized"
        | "pricing_not_configured"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "processor_unavailable"
        | "product_variants"
        | "proof_rejected"
        | "proof_required"
        | "provider_action_unsupported"
        | "provisioning"
        | "quantity_not_carried"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_callback_failed"
        | "rate_unavailable"
        | "reader_busy"
        | "reader_offline"
        | "reader_type_not_supported"
        | "reader_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "recurrence_completed"
        | "refund_created"
        | "refund_unavailable"
        | "refund_window_expired"
        | "repair_required"
        | "request_blocked"
        | "requirements_due"
        | "resource_in_different_environment"
        | "restricted"
        | "return_checkout"
        | "return_owned"
        | "return_tax_mismatch"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_not_accessible"
        | "sandbox_reset_failed"
        | "sandbox_resetting"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "scope_not_granted"
        | "scope_not_held"
        | "secret_not_issued"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "seller_not_ready"
        | "session_ended"
        | "simulated_reader_required"
        | "status_not_reached"
        | "stock_at_risk"
        | "store_credit_unavailable"
        | "subscription_balance_due"
        | "subscription_owned"
        | "subscription_payment_pending"
        | "subscription_renewal"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "tax_callback_failed"
        | "tax_category_required"
        | "template_not_configured"
        | "terminal_status"
        | "test_clock_subscriptions"
        | "test_event"
        | "test_mode_required"
        | "transaction_purpose_unresolved"
        | "transport_mismatch"
        | "trial_in_progress"
        | "unknown"
        | "unknown_type"
        | "unsupported_state"
        | "variant_not_targeted"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "webhook_event_streams"
        | "webhook_listener_signatures_daily"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
});
/** An inventory transfer action refusal with the current state and supported actions. */
export type InventoryTransferActionConflictErrorEnvelope = {
    /**
     * The refusal, with the transfer's current status and version and the actions it accepts. An
     * action-not-allowed error for the inventory transfer current state. The error returned for a
     * failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of
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
     * Who must act before the request can succeed. It depends only on code and details[0].reason;
     * the errors reference lists the value for each. Use it to route the failure, and code and
     * details[0].reason for the fix. Value enum: "caller", "merchant", "merchant_endpoint",
     * "flint".
     */
    "error_source": "caller" | "merchant" | "merchant_endpoint" | "flint" | (string & {});
});
export type InventoryTransferClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
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
 * The `inventory_transfer.closed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
});
export type InventoryTransferDepartedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.departed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.departed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
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
 * The `inventory_transfer.departed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferDepartedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
});
/** One line of an inventory transfer, with its quantities. */
export type InventoryTransferLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "canceled_quantity": number;
    /**
     * Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined".
     */
    "condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "departed_quantity": number;
    /** ID of the inventory item to move. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
     */
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
export type InventoryTransferLinePreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "canceled_quantity"?: ((number) | (null));
    /**
     * Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined". anyOf[1] (Value): string. Condition of the units being moved. Value enum:
     * "sellable", "quality_control", "damaged", "quarantined". anyOf[2] (Value): null.
     */
    "condition"?: (("sellable" | "quality_control" | "damaged" | "quarantined" | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "departed_quantity"?: ((number) | (null));
    /**
     * ID of the inventory item to move. anyOf[1] (Value): string. ID of the inventory item to
     * move. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     */
    "inventory_item_id"?: ((string) | (null));
    /**
     * Unique identifier for this inventory transfer line, prefixed `invtrln_`. anyOf[1] (Value):
     * string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". anyOf[2] (Value): null.
     */
    "inventory_transfer_line_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "lost_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "received_damaged_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "received_quality_control_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "received_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "received_quarantined_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "received_sellable_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "requested_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "returned_quantity"?: ((number) | (null));
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequest = {
    /**
     * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /**
     * ID of the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequestInput = {
    /**
     * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /**
     * ID of the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** A page of `InventoryTransfer` objects. */
export type InventoryTransferListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryTransfer}. Stock moving between locations.
     */
    "data": Array<InventoryTransfer>;
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
export type InventoryTransferLostEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.lost";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.lost";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
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
 * The `inventory_transfer.lost` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryTransferLostMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
});
export type InventoryTransferReceivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.received";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.received";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
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
 * The `inventory_transfer.received` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReceivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
});
/** A response containing `InventoryTransfer` data. */
export type InventoryTransferResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Stock moving between
     * locations.
     */
    "data": InventoryTransfer;
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
 * inventory_transfer is the primary resource and expected_version target. Stock-moving actions
 * return this result instead of a resource alone.
 */
export type InventoryTransferResult = {
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /** The inventory transfer. Stock moving between locations. */
    "inventory_transfer": InventoryTransfer;
};
/** A response containing `InventoryTransferResult` data. */
export type InventoryTransferResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. inventory_transfer is
     * the primary resource and expected_version target. Stock-moving actions return this result
     * instead of a resource alone.
     */
    "data": InventoryTransferResult;
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
export type InventoryTransferReturnedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.returned";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.returned";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
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
 * The `inventory_transfer.returned` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReturnedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.returned". */
    "event_type"?: "inventory_transfer.returned";
});
export type InventoryTransferUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_at"?: ((string) | (null));
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "departed_at"?: ((string) | (null));
            "destination_location_id"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_transfer_id"?: ((string) | (null));
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            "note"?: ((string) | (null));
            "origin_location_id"?: ((string) | (null));
            "received_at"?: ((string) | (null));
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.updated";
});
/**
 * The `inventory_transfer.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.updated". */
    "event_type"?: "inventory_transfer.updated";
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
 * The `inventory_transfer.updated` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     * previous_attributes.closed_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.closed_reason (Optional): string or null. How the transfer ended.
     * `null` when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[1] (Value): string. How the transfer ended. `null`
     * when the transfer isn't closed. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.departed_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.departed_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.departed_at.anyOf[2] (Value): null.
     * previous_attributes.destination_location_id (Optional): string or null. ID of the Location
     * the stock goes to. previous_attributes.destination_location_id.anyOf[1] (Value): string. ID
     * of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.destination_location_id.anyOf[2] (Value): null.
     * previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_transfer_id (Optional): string or null. Unique identifier for
     * this inventory transfer, prefixed `invtr_`.
     * previous_attributes.inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     * previous_attributes.inventory_transfer_id.anyOf[2] (Value): null. previous_attributes.lines
     * (Optional): Array of {@link InventoryTransferLinePreviousAttributes} or null. Owned
     * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces
     * the full collection. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no
     * lifecycle outside this transfer; PATCH replaces the full collection.
     * previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryTransferLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value): null.
     * previous_attributes.note (Optional): string or null. Free-text note about the transfer.
     * previous_attributes.note.anyOf[1] (Value): string. Free-text note about the transfer.
     * previous_attributes.note.anyOf[2] (Value): null. previous_attributes.origin_location_id
     * (Optional): string or null. ID of the Location the stock leaves.
     * previous_attributes.origin_location_id.anyOf[1] (Value): string. ID of the Location the
     * stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * previous_attributes.origin_location_id.anyOf[2] (Value): null.
     * previous_attributes.received_at (Optional): string or null. RFC3339 timestamp.
     * previous_attributes.received_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.received_at.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Where the transfer
     * stands, worked out from the quantities that have left the origin and have since been
     * received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[1] (Value): string. Where
     * the transfer stands, worked out from the quantities that have left the origin and have since
     * been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed". previous_attributes.status.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Actions that can
     * change this transfer now. `depart` and `cancel` need units that haven't left the origin.
     * `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the
     * transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions
     * that can change this transfer now. `depart` and `cancel` need units that haven't left the
     * origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once
     * the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss",
     * "cancel". previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum:
     * "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Current version of this resource's owned state. Send it as
     * `expected_version` when changing the resource to reject a stale write.
     * previous_attributes.version.anyOf[1] (Value): integer. Current version of this resource's
     * owned state. Send it as `expected_version` when changing the resource to reject a stale
     * write. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the transfer stands, worked out
         * from the quantities that have left the origin and have since been received, returned, or
         * reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed".
         * supported_actions (Required): Array of string. Actions that can change this transfer
         * now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions[] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Current version of this resource's owned state. Send it as `expected_version`
         * when changing the resource to reject a stale write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed".
             */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". [] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. closed_at (Optional): string or null. RFC3339
         * timestamp. closed_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. closed_reason
         * (Optional): string or null. How the transfer ended. `null` when the transfer isn't
         * closed. Value enum: "received", "canceled", "received_with_cancellation", "returned",
         * "lost", "mixed", null. closed_reason.anyOf[1] (Value): string. How the transfer ended.
         * `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. closed_reason.anyOf[2]
         * (Value): null. created_at (Optional): string or null. RFC3339 timestamp.
         * created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. departed_at (Optional):
         * string or null. RFC3339 timestamp. departed_at.anyOf[1] (Value): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". departed_at.anyOf[2]
         * (Value): null. destination_location_id (Optional): string or null. ID of the Location
         * the stock goes to. destination_location_id.anyOf[1] (Value): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * destination_location_id.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource; on a movement, of
         * the command that wrote it. Omitted when that request had no key.
         * idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[2] (Value): null. inventory_transfer_id
         * (Optional): string or null. Unique identifier for this inventory transfer, prefixed
         * `invtr_`. inventory_transfer_id.anyOf[1] (Value): string. Unique identifier for this
         * inventory transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
         * inventory_transfer_id.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryTransferLinePreviousAttributes} or null. Owned collection of transfer lines.
         * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
         * lines.anyOf[1] (Value): Array of {@link InventoryTransferLinePreviousAttributes}. Owned
         * collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
         * replaces the full collection. lines.anyOf[1][] (Value): {@link
         * InventoryTransferLinePreviousAttributes}. lines.anyOf[2] (Value): null. note (Optional):
         * string or null. Free-text note about the transfer. note.anyOf[1] (Value): string.
         * Free-text note about the transfer. note.anyOf[2] (Value): null. origin_location_id
         * (Optional): string or null. ID of the Location the stock leaves.
         * origin_location_id.anyOf[1] (Value): string. ID of the Location the stock leaves.
         * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". origin_location_id.anyOf[2] (Value): null.
         * received_at (Optional): string or null. RFC3339 timestamp. received_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * received_at.anyOf[2] (Value): null. status (Optional): string or null. Where the
         * transfer stands, worked out from the quantities that have left the origin and have since
         * been received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[1] (Value): string. Where the transfer
         * stands, worked out from the quantities that have left the origin and have since been
         * received, returned, or reported lost. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". status.anyOf[2] (Value): null. supported_actions
         * (Optional): Array of string or null. Actions that can change this transfer now. `depart`
         * and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and
         * `report_loss` need units in transit. Empty once the transfer is closed. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1] (Value): Array of string. Actions that can change this
         * transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`,
         * `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is
         * closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "depart", "receive",
         * "return_to_origin", "report_loss", "cancel". supported_actions.anyOf[2] (Value): null.
         * updated_at (Optional): string or null. RFC3339 timestamp. updated_at.anyOf[1] (Value):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. version (Optional): integer or null. Current version
         * of this resource's owned state. Send it as `expected_version` when changing the resource
         * to reject a stale write. version.anyOf[1] (Value): integer. Current version of this
         * resource's owned state. Send it as `expected_version` when changing the resource to
         * reject a stale write. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null. anyOf[1] (Value): string. How the transfer ended. `null` when the transfer
             * isn't closed. Value enum: "received", "canceled", "received_with_cancellation",
             * "returned", "lost", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "departed_at"?: ((string) | (null));
            /**
             * ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location
             * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "destination_location_id"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value):
             * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". anyOf[2] (Value): null.
             */
            "inventory_transfer_id"?: ((string) | (null));
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. anyOf[1] (Value): Array of {@link
             * InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines
             * have no lifecycle outside this transfer; PATCH replaces the full collection.
             * anyOf[1][] (Value): {@link InventoryTransferLinePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "lines"?: ((Array<InventoryTransferLinePreviousAttributes>) | (null));
            /**
             * Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about
             * the transfer. anyOf[2] (Value): null.
             */
            "note"?: ((string) | (null));
            /**
             * ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location
             * the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
             */
            "origin_location_id"?: ((string) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "received_at"?: ((string) | (null));
            /**
             * Where the transfer stands, worked out from the quantities that have left the origin
             * and have since been received, returned, or reported lost. Value enum: "draft",
             * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the
             * transfer stands, worked out from the quantities that have left the origin and have
             * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
             * "partially_resolved", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("draft" | "in_transit" | "partially_resolved" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string.
             * Actions that can change this transfer now. `depart` and `cancel` need units that
             * haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units
             * in transit. Empty once the transfer is closed. [] enum: "depart", "receive",
             * "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string. Value enum:
             * "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value):
             * null.
             */
            "supported_actions"?: ((Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>)
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. anyOf[1] (Value): integer. Current
             * version of this resource's owned state. Send it as `expected_version` when changing
             * the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value):
             * null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.updated". */
    "event_type"?: "inventory_transfer.updated";
});
export type InventoryTransfersCancelParams = (InputValue<CancelInventoryTransferRequestInput>)
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
export type InventoryTransfersCreateParams = (InputValue<CreateInventoryTransferRequestInput>)
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
export type InventoryTransfersDepartParams = (InputValue<DepartInventoryTransferRequestInput>)
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
export type InventoryTransfersGetParams = DisputesAcceptParams;
export type InventoryTransfersListParams = {
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
     * Filter by inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by origin Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "origin_location_id"?: InputValue<string>;
    /**
     * Filter by destination Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "destination_location_id"?: InputValue<string>;
    /**
     * Filter by transfer status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "draft", "in_transit", "partially_resolved", "closed". Value enum: "draft",
     * "in_transit", "partially_resolved", "closed". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[1][] (Value):
     * string. Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[2] (Value):
     * string. Value enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "status"?: InputValue<("draft" | "in_transit" | "partially_resolved" | "closed")
        | readonly ("draft" | "in_transit" | "partially_resolved" | "closed")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength:
     * 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Exact, case-sensitive match on the caller-owned external reference ID. Must contain 1 to 255
     * characters. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search by inventory_transfer_id, external_reference_id, or note. maxLength: 255. */
    "query"?: InputValue<string>;
    /**
     * Filter by how the transfer ended. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "received", "canceled", "received_with_cancellation", "returned",
     * "lost", "mixed". Value enum: "received", "canceled", "received_with_cancellation",
     * "returned", "lost", "mixed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
     * anyOf[1][] (Value): string. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed". anyOf[2] (Value): string. Value
     * enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed".
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
export type InventoryTransfersReceiveParams = (InputValue<ReceiveInventoryTransferRequestInput>)
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
export type InventoryTransfersReportLossParams = (InputValue<ReportInventoryTransferLossRequestInput>)
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
export type InventoryTransfersReturnToOriginParams = (InputValue<ReturnInventoryTransferToOriginRequestInput>)
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
export type InventoryTransfersUpdateParams = (InputValue<UpdateInventoryTransferRequestInput>)
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
/** A bill issued to a customer. */
export type Invoice = {
    /** Additional recipients copied on the invoice email and every reminder. [] (Value): string. */
    "cc_emails": Array<string>;
    /**
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
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
    /** When the invoice was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Summary of the billed customer. Returned only with expand=customer. Present only when
     * `expand` includes `customer`; `null` when expanded and there is no related customer.
     * anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in
     * place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /**
     * Customer billed by this invoice. Absent when the invoice has no customer. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /** How issue delivered the invoice. Value enum: "email", "caller_managed". */
    "delivery_mode"?: "email" | "caller_managed" | (string & {});
    /**
     * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
     * outstanding balance becomes overdue only after this date ends. Automatic collection runs at
     * the later of issue and the start of this date. With payment terms, issue computes this date
     * from issued_at. Absent when there is no due date. Format: date. Example: "2026-08-02".
     */
    "due_date"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id": string | null;
    /**
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset.
     */
    "footer": string | null;
    /** Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". */
    "invoice_id": string;
    /**
     * Sequential document number assigned when the invoice is issued. Numbering is per merchant,
     * with test and live mode numbered independently.
     */
    "invoice_number"?: string;
    /**
     * Whether the invoice is open or partially_paid and past due with a balance remaining. Without
     * schedule_entries, the due_date has ended in timezone (UTC when absent) and outstanding_money
     * is above zero; with them, at least one entry is overdue. Computed when the invoice is read.
     */
    "is_overdue": boolean;
    /**
     * When the invoice was issued. Absent on a draft. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "issued_at"?: string;
    /**
     * Late fees assessed on this invoice, each with its paid, waived, written-off, and outstanding
     * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers. []
     * (Value): {@link InvoiceLateFee}. A charge assessed because an invoice payment is overdue.
     */
    "late_fees": Array<InvoiceLateFee>;
    /**
     * Message to the customer, printed on the invoice and PDF. It cannot change after issue.
     * `null` when unset.
     */
    "memo": string | null;
    /** Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
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
    /**
     * The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
    /**
     * When the invoice most recently became paid. Cleared when status leaves paid and set again on
     * a later paid transition. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "paid_at"?: string;
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
     * issue. `null` when unset.
     */
    "po_number": string | null;
    /**
     * The invoice pricing totals, frozen at issue. A draft previews the backing order. total_money
     * excludes late fees, which are in settlement_amounts.late_fee_money. The money totals for an
     * order or invoice: subtotal, discounts, charges, tax, requested tip, and total.
     */
    "pricing_amounts": PricingAmounts;
    /**
     * The hosted invoice link where the buyer views and pays the invoice. Present after issue on
     * API reads, except a list filtered by idempotency_key; webhook payloads leave it out.
     * regenerate-public-link replaces it. Anyone with the link can open the invoice, so treat it
     * as a secret.
     */
    "public_url"?: string;
    /**
     * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
     * `null` when unset.
     */
    "recipient_email": string | null;
    /**
     * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
     * number goes in po_number. It cannot change after issue. `null` when unset.
     */
    "reference": string | null;
    /**
     * How much of the collected money has been refunded. It doesn't change status. Value enum:
     * "none", "partially_refunded", "refunded".
     */
    "refund_status": "none" | "partially_refunded" | "refunded" | (string & {});
    /**
     * Whether automatic reminders are paused. Set reminders_paused on PATCH
     * /v1/invoices/{invoice_id} to change it.
     */
    "reminders_paused": boolean;
    /**
     * When automatic reminders were paused. Absent while reminders are active. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
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
     * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
     * when the draft is issued or voided, or when you send null. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "scheduled_issue_at": string | null;
    /**
     * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it
     * as written, without timezone conversion. `null` when unset. Format: date. Example:
     * "2026-08-02".
     */
    "service_date": string | null;
    /**
     * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining invoice
     * balance. What is still owed: pricing_amounts.total_money + late_fee_money - paid_money -
     * credited_money - written_off_money, never below zero. 0 on paid, credited, uncollectible,
     * and voided invoices; equal to pricing_amounts.total_money on a draft. Refunds and card
     * chargebacks don't change it. Lost bank returns reopen the balance. The bill settlement
     * amounts plus credit notes, the amount due now, and late fees. Invoice paid_money includes
     * late-fee payments and excludes reversed payments. Refunds and card chargeback losses do not
     * reopen outstanding_money or reduce paid_money. net_collected_money is paid_money minus
     * refunded_money, never below zero. Money collected, returned, waived, and still owed on a
     * bill.
     */
    "settlement_amounts": InvoiceSettlementAmounts;
    /**
     * The billing content of the invoice: line items, discounts, charges, tip, and tax. A draft
     * previews the backing order; issue freezes it, and later order changes don't reach an issued
     * invoice. A frozen copy of an issued invoice's content, including line items, charges,
     * discounts, tax identities, and pricing amounts.
     */
    "snapshot"?: InvoiceSnapshot;
    /**
     * Current invoice status. paid and credited close the current balance and can reopen to open
     * or partially_paid after a payment or credit allocation reversal; invoice.reopened reports
     * that change. An uncollectible invoice accepts manual recovery payments and becomes paid when
     * fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     */
    "status": "draft"
        | "open"
        | "partially_paid"
        | "paid"
        | "voided"
        | "uncollectible"
        | "credited"
        | (string & {});
    /**
     * The subscription the backing order belongs to, copied when the draft is created and never
     * changed. `null` when the order isn't part of a subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of
     * the caller's permissions; each action still requires its route's scope. Always [] when no
     * action is available. [] enum: "collect", "issue", "mark_uncollectible", "void". [] (Value):
     * string. Value enum: "collect", "issue", "mark_uncollectible", "void".
     */
    "supported_actions": Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>;
    /**
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar.
     */
    "timezone"?: string;
    /**
     * When the invoice was marked uncollectible. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "uncollectible_at"?: string;
    /** When the invoice last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current invoice version. Send this as expected_version when updating the draft. Format:
     * int64. minimum: 1.
     */
    "version": number;
    /**
     * When the buyer first opened the invoice through its hosted invoice link. Recorded on a
     * best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "viewed_at"?: string;
    /** When the invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "voided_at"?: string;
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
     * merchant ID. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "actor_id"?: string;
    /**
     * Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint
     * on a schedule or in response to a payment event. Absent when no actor was recorded. Example:
     * "merchant". Value enum: "merchant", "buyer", "system".
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
     * payments. Example: "cs_01KEZF7C004JRWFW43H037MQRN".
     */
    "checkout_session_id"?: string;
    /**
     * Why collection was blocked or unblocked. Present on collection_blocked and
     * collection_block_resolved. Value enum: "inventory_unavailable", "inventory_restored".
     */
    "collection_block_reason"?: "inventory_unavailable" | "inventory_restored" | (string & {});
    /** When the activity happened. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Credit note that requested the refund. Present on updated when a credit note refund was
     * requested or changed. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     */
    "credit_note_id"?: string;
    /**
     * Total credit applied to the invoice. Present on credited. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "credited_money"?: MoneyValue;
    /** Human-readable Flint description of the activity. */
    "description": string;
    /**
     * Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /** Public error code of the failed scheduled issue. Present on issue_failed. */
    "error_code"?: string;
    /**
     * Amount the processing payment is expected to settle. Present on payment_processing. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "expected_amount_money"?: MoneyValue;
    /**
     * Flint invoice activity ID. IDs begin with inevt_. Example:
     * "inevt_01KEZF7C00RQVKGDVE88YNX9FQ".
     */
    "invoice_activity_id": string;
    /**
     * The delivery attempt that sent the email. Present on delivery_sent and reminder_sent.
     * Example: "indel_01KEZF7C001BBS41T0ZVY8VMEQ".
     */
    "invoice_delivery_attempt_id"?: string;
    /**
     * Invoice whose history contains this activity and owns its referenced delivery attempt, late
     * fee, or manual payment. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     */
    "invoice_id": string;
    /**
     * The late fee. Present on late_fee_assessed and late_fee_waived. Example:
     * "inlf_01KEZF7C00NVR97MBH5AHR4W1X".
     */
    "invoice_late_fee_id"?: string;
    /**
     * The manual payment. Present on manual_payment_recorded and manual_payment_reversed. Example:
     * "omp_01KEZF7C007J18203RBJKB9TYE".
     */
    "invoice_manual_payment_id"?: string;
    /**
     * The payment attempt. Present on payment_attempt_started and payment_processing. Example:
     * "invpa_01KEZF7C00PMWEDPAYYEKDTPBX".
     */
    "invoice_payment_attempt_id"?: string;
    /**
     * Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due,
     * late_fee_assessed, and late_fee_waived when the invoice has a payment schedule. Example:
     * "invse_01KEZF7C006JCPQBD8VZ0RNT6R".
     */
    "invoice_schedule_entry_id"?: string;
    /**
     * Payment intent whose funds were applied. Present on payment_applied. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Payment rail of the attempt. Present on payment_processing. Value enum: "card", "ach_debit".
     */
    "rail"?: "card" | "ach_debit" | (string & {});
    /**
     * Related refund. Present on refund_succeeded, and on updated when a card refund changed or a
     * credit note refund was requested or changed. Read the refund for its current status.
     * Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K".
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InvoiceActivity}. Read-only invoice history row for timeline rendering and debugging. Detail
     * fields are present only on the activity types their descriptions list. The invoice and the
     * referenced resources remain authoritative for state and money movement.
     */
    "data": Array<InvoiceActivity>;
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
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicy = {
    /**
     * Days after the due date to retry, from 1 to 30, in strictly increasing order, at most 5.
     * maxItems: 5. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 30.
     */
    "retry_day_offsets": Array<number>;
};
/** When to retry a failed automatic invoice payment, as a list of day offsets. */
export type InvoiceAutopayRetryPolicyInput = InvoiceAutopayRetryPolicy;
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
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
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
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
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
    /** Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". */
    "payment_method_id": string | null;
}));
export type InvoiceCollectionAutomaticPreviousAttributes = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "automatic".
     * anyOf[1] (Value): string. How the invoice is collected, resolved when the draft was written.
     * Value enum: "automatic". anyOf[2] (Value): null.
     */
    "mode"?: (("automatic" | (string & {})) | (null));
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * anyOf[1] (Value): string. The saved card Flint charges. Present only with automatic. `null`
     * when the draft will use the customer's default card, selected at issue. After issue it is
     * the selected card. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated.
     * anyOf[1] (Value): {@link InvoicePaymentPolicyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyPreviousAttributes) | (null));
})
    & ({
    /**
     * Value enum: "automatic". anyOf[1] (Value): string. Value enum: "automatic". anyOf[2]
     * (Value): null.
     */
    "mode"?: (("automatic" | (string & {})) | (null));
    /**
     *  anyOf[1] (Value): string. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
});
export type InvoiceCollectionBlockResolvedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "footer"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            "po_number"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "recipient_email"?: ((string) | (null));
            "reference"?: ((string) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            "scheduled_issue_at"?: ((string) | (null));
            "service_date"?: ((string) | (null));
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.collection_block_resolved";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "footer"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            "po_number"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "recipient_email"?: ((string) | (null));
            "reference"?: ((string) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            "scheduled_issue_at"?: ((string) | (null));
            "service_date"?: ((string) | (null));
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.collection_block_resolved";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollectionPreviousAttributes}
     * or null. How this invoice is collected, resolved when the draft is written. Send this object
     * back when updating its collection policy. previous_attributes.collection.anyOf[1] (Value):
     * {@link InvoiceCollectionPreviousAttributes}. previous_attributes.collection.anyOf[2]
     * (Value): null. previous_attributes.collection_block_status (Optional): string or null.
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved". previous_attributes.collection_block_status.anyOf[1]
     * (Value): string. Whether collection is blocked. While it is inventory_blocked, collection
     * attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
     * "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer. Returned
     * only with expand=customer. Present only when `expand` includes `customer`; `null` when
     * expanded and there is no related customer. previous_attributes.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2]
     * (Value): null. previous_attributes.customer_id (Optional): string or null. Customer billed
     * by this invoice. Absent when the invoice has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
     * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Use it as your sync key: it isn't printed on the
     * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.footer
     * (Optional): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue. `null` when unset. previous_attributes.footer.anyOf[1] (Value): string.
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset. previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on
     * this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link
     * InvoiceLateFeePreviousAttributes}. Late fees assessed on this invoice, each with its paid,
     * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
     * assessed total minus waivers. previous_attributes.late_fees.anyOf[1][] (Value): {@link
     * InvoiceLateFeePreviousAttributes}. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order.
     * Returned only with expand=order. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. The order this invoice bills. Every
     * invoice has one; quick pay creates it. previous_attributes.order_id.anyOf[1] (Value):
     * string. The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.paid_at (Optional): string or null. When the invoice most recently
     * became paid. Cleared when status leaves paid and set again on a later paid transition.
     * previous_attributes.paid_at.anyOf[1] (Value): string. When the invoice most recently became
     * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value):
     * null. previous_attributes.payment_due (Optional): {@link
     * InvoicePaymentDuePreviousAttributes} or null. The resolved due-date policy. Send this object
     * back when updating the draft; payment_terms captures the term's current revision again.
     * previous_attributes.payment_due.anyOf[1] (Value): {@link
     * InvoicePaymentDuePreviousAttributes}. previous_attributes.payment_due.anyOf[2] (Value):
     * null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes} or null. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes}.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmountsPreviousAttributes} or null. The invoice pricing totals,
     * frozen at issue. A draft previews the backing order. total_money excludes late fees, which
     * are in settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null.
     * previous_attributes.recipient_email (Optional): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[1] (Value): string. Where Flint emails the invoice
     * and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[2] (Value): null. previous_attributes.reference
     * (Optional): string or null. Your reference for the invoice, printed on the invoice and PDF.
     * The buyer's purchase order number goes in po_number. It cannot change after issue. `null`
     * when unset. previous_attributes.reference.anyOf[1] (Value): string. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link AddressPreviousAttributes} or null.
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule order.
     * Always [] when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1] (Value): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link
     * InvoiceScheduleEntryPreviousAttributes}. previous_attributes.schedule_entries.anyOf[2]
     * (Value): null. previous_attributes.scheduled_issue_at (Optional): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
     * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null. The calendar
     * date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
     * without timezone conversion. `null` when unset. previous_attributes.service_date.anyOf[1]
     * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice
     * and PDF print it as written, without timezone conversion. `null` when unset. Format: date.
     * Example: "2026-08-02". previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
     * allocated credit notes, late fees, and the remaining invoice balance. What is still owed:
     * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
     * don't change it. Lost bank returns reopen the balance.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.snapshot (Optional): {@link
     * InvoiceSnapshotPreviousAttributes} or null. The billing content of the invoice: line items,
     * discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and
     * later order changes don't reach an issued invoice. previous_attributes.snapshot.anyOf[1]
     * (Value): {@link InvoiceSnapshotPreviousAttributes}. previous_attributes.snapshot.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current invoice
     * status. paid and credited close the current balance and can reopen to open or partially_paid
     * after a payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. An ACH bank return reverses paid_money and reopens the
     * balance. A lost card chargeback leaves paid_money, the balance, and status unchanged;
     * collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid",
     * "paid", "voided", "uncollectible", "credited". previous_attributes.status.anyOf[1] (Value):
     * string. Current invoice status. paid and credited close the current balance and can reopen
     * to open or partially_paid after a payment or credit allocation reversal; invoice.reopened
     * reports that change. An uncollectible invoice accepts manual recovery payments and becomes
     * paid when fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The subscription the backing order belongs to, copied when the
     * draft is created and never changed. `null` when the order isn't part of a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollectionPreviousAttributes} or null. How this invoice is collected, resolved
         * when the draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[1] (Value): {@link InvoiceCollectionPreviousAttributes}.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer.
         * Returned only with expand=customer. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has
         * no customer. customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
         * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. delivery_mode (Optional): string or null. How issue
         * delivered the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[1]
         * (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
         * delivery_mode.anyOf[2] (Value): null. due_date (Optional): string or null. Calendar due
         * date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding
         * balance becomes overdue only after this date ends. Automatic collection runs at the
         * later of issue and the start of this date. With payment terms, issue computes this date
         * from issued_at. Absent when there is no due date. due_date.anyOf[1] (Value): string.
         * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
         * outstanding balance becomes overdue only after this date ends. Automatic collection runs
         * at the later of issue and the start of this date. With payment terms, issue computes
         * this date from issued_at. Absent when there is no due date. Format: date. Example:
         * "2026-08-02". due_date.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system. Use it as your
         * sync key: it isn't printed on the invoice. `null` when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Use it as your sync key: it isn't printed on the
         * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. footer (Optional): string or null. Fine
         * print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
         * unset. footer.anyOf[1] (Value): string. Fine print at the bottom of the invoice and PDF.
         * It cannot change after issue. `null` when unset. footer.anyOf[2] (Value): null.
         * invoice_id (Optional): string or null. Flint invoice ID. invoice_id.anyOf[1] (Value):
         * string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. invoice_number (Optional): string or null. Sequential document number
         * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
         * numbered independently. invoice_number.anyOf[1] (Value): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. invoice_number.anyOf[2] (Value): null. is_overdue
         * (Optional): boolean or null. Whether the invoice is open or partially_paid and past due
         * with a balance remaining. Without schedule_entries, the due_date has ended in timezone
         * (UTC when absent) and outstanding_money is above zero; with them, at least one entry is
         * overdue. Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean.
         * Whether the invoice is open or partially_paid and past due with a balance remaining.
         * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on this invoice,
         * each with its paid, waived, written-off, and outstanding amounts.
         * settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late fees
         * assessed on this invoice, each with its paid, waived, written-off, and outstanding
         * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}.
         * late_fees.anyOf[2] (Value): null. memo (Optional): string or null. Message to the
         * customer, printed on the invoice and PDF. It cannot change after issue. `null` when
         * unset. memo.anyOf[1] (Value): string. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Merchant that owns this invoice.
         * merchant_id.anyOf[1] (Value): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDuePreviousAttributes} or null. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[1] (Value): {@link
         * InvoicePaymentDuePreviousAttributes}. payment_due.anyOf[2] (Value): null.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshotPreviousAttributes}
         * or null. The payment term captured on the draft, with its due date rule and late fee
         * policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshotPreviousAttributes}. payment_terms_snapshot.anyOf[2] (Value):
         * null. po_number (Optional): string or null. The buyer's purchase order number, printed
         * on the invoice and PDF. It cannot change after issue. `null` when unset.
         * po_number.anyOf[1] (Value): string. The buyer's purchase order number, printed on the
         * invoice and PDF. It cannot change after issue. `null` when unset. po_number.anyOf[2]
         * (Value): null. pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or
         * null. The invoice pricing totals, frozen at issue. A draft previews the backing order.
         * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. recipient_email (Optional): string or null.
         * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
         * `null` when unset. recipient_email.anyOf[1] (Value): string. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null. Your
         * reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
         * number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link AddressPreviousAttributes} or null. Where the buyer
         * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
         * address. remit_to_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule
         * order. Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1] (Value): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always
         * [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}.
         * schedule_entries.anyOf[2] (Value): null. scheduled_issue_at (Optional): string or null.
         * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
         * when the draft is issued or voided, or when you send null. scheduled_issue_at.anyOf[1]
         * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
         * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_issue_at.anyOf[2] (Value): null.
         * service_date (Optional): string or null. The calendar date of the billed service, in
         * YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion.
         * `null` when unset. service_date.anyOf[1] (Value): string. The calendar date of the
         * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
         * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
         * allocated credit notes, late fees, and the remaining invoice balance. What is still
         * owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
         * don't change it. Lost bank returns reopen the balance. settlement_amounts.anyOf[1]
         * (Value): {@link InvoiceSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2]
         * (Value): null. snapshot (Optional): {@link InvoiceSnapshotPreviousAttributes} or null.
         * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
         * draft previews the backing order; issue freezes it, and later order changes don't reach
         * an issued invoice. snapshot.anyOf[1] (Value): {@link InvoiceSnapshotPreviousAttributes}.
         * snapshot.anyOf[2] (Value): null. status (Optional): string or null. Current invoice
         * status. paid and credited close the current balance and can reopen to open or
         * partially_paid after a payment or credit allocation reversal; invoice.reopened reports
         * that change. An uncollectible invoice accepts manual recovery payments and becomes paid
         * when fully recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. An ACH bank return reverses paid_money and
         * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
         * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". status.anyOf[1]
         * (Value): string. Current invoice status. paid and credited close the current balance and
         * can reopen to open or partially_paid after a payment or credit allocation reversal;
         * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
         * payments and becomes paid when fully recovered; reversals restore the write-off. voided
         * is final. Refunds change refund_status without reopening the balance. An ACH bank return
         * reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money,
         * the balance, and status unchanged; collecting it again requires a new invoice. Value
         * enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string. The subscription the backing order belongs to, copied when the draft is
         * created and never changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string.
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string. Fine print at the bottom of the invoice
             * and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "footer"?: ((string) | (null));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late
             * fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string. Message to the customer, printed
             * on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string. The buyer's purchase order
             * number, printed on the invoice and PDF. It cannot change after issue. `null` when
             * unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string) | (null));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string. Where Flint emails the invoice
             * and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "recipient_email"?: ((string) | (null));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string. Your reference for the invoice, printed on the invoice and
             * PDF. The buyer's purchase order number goes in po_number. It cannot change after
             * issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string) | (null));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order.
             * Always [] when the invoice has no schedule and is collected in one balance.
             * anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string. When Flint will issue and deliver this draft. `null` when no issue is
             * scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string) | (null));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
             * invoice and PDF print it as written, without timezone conversion. `null` when unset.
             * Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string) | (null));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen
             * the balance. anyOf[1] (Value): {@link InvoiceSettlementAmountsPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link
             * InvoiceSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. An ACH bank return reverses paid_money and reopens the balance. A lost card
             * chargeback leaves paid_money, the balance, and status unchanged; collecting it again
             * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid",
             * "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice
             * status. paid and credited close the current balance and can reopen to open or
             * partially_paid after a payment or credit allocation reversal; invoice.reopened
             * reports that change. An uncollectible invoice accepts manual recovery payments and
             * becomes paid when fully recovered; reversals restore the write-off. voided is final.
             * Refunds change refund_status without reopening the balance. An ACH bank return
             * reverses paid_money and reopens the balance. A lost card chargeback leaves
             * paid_money, the balance, and status unchanged; collecting it again requires a new
             * invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited". anyOf[2] (Value): null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string. The subscription the backing order belongs to, copied when the draft is
             * created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
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
 * The `invoice.collection_block_resolved` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InvoiceCollectionBlockResolvedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollectionPreviousAttributes}
     * or null. How this invoice is collected, resolved when the draft is written. Send this object
     * back when updating its collection policy. previous_attributes.collection.anyOf[1] (Value):
     * {@link InvoiceCollectionPreviousAttributes}. previous_attributes.collection.anyOf[2]
     * (Value): null. previous_attributes.collection_block_status (Optional): string or null.
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved". previous_attributes.collection_block_status.anyOf[1]
     * (Value): string. Whether collection is blocked. While it is inventory_blocked, collection
     * attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
     * "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer. Returned
     * only with expand=customer. Present only when `expand` includes `customer`; `null` when
     * expanded and there is no related customer. previous_attributes.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2]
     * (Value): null. previous_attributes.customer_id (Optional): string or null. Customer billed
     * by this invoice. Absent when the invoice has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
     * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Use it as your sync key: it isn't printed on the
     * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.footer
     * (Optional): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue. `null` when unset. previous_attributes.footer.anyOf[1] (Value): string.
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset. previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on
     * this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link
     * InvoiceLateFeePreviousAttributes}. Late fees assessed on this invoice, each with its paid,
     * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
     * assessed total minus waivers. previous_attributes.late_fees.anyOf[1][] (Value): {@link
     * InvoiceLateFeePreviousAttributes}. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order.
     * Returned only with expand=order. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. The order this invoice bills. Every
     * invoice has one; quick pay creates it. previous_attributes.order_id.anyOf[1] (Value):
     * string. The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.paid_at (Optional): string or null. When the invoice most recently
     * became paid. Cleared when status leaves paid and set again on a later paid transition.
     * previous_attributes.paid_at.anyOf[1] (Value): string. When the invoice most recently became
     * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value):
     * null. previous_attributes.payment_due (Optional): {@link
     * InvoicePaymentDuePreviousAttributes} or null. The resolved due-date policy. Send this object
     * back when updating the draft; payment_terms captures the term's current revision again.
     * previous_attributes.payment_due.anyOf[1] (Value): {@link
     * InvoicePaymentDuePreviousAttributes}. previous_attributes.payment_due.anyOf[2] (Value):
     * null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes} or null. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes}.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmountsPreviousAttributes} or null. The invoice pricing totals,
     * frozen at issue. A draft previews the backing order. total_money excludes late fees, which
     * are in settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null.
     * previous_attributes.recipient_email (Optional): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[1] (Value): string. Where Flint emails the invoice
     * and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[2] (Value): null. previous_attributes.reference
     * (Optional): string or null. Your reference for the invoice, printed on the invoice and PDF.
     * The buyer's purchase order number goes in po_number. It cannot change after issue. `null`
     * when unset. previous_attributes.reference.anyOf[1] (Value): string. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link AddressPreviousAttributes} or null.
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule order.
     * Always [] when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1] (Value): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link
     * InvoiceScheduleEntryPreviousAttributes}. previous_attributes.schedule_entries.anyOf[2]
     * (Value): null. previous_attributes.scheduled_issue_at (Optional): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
     * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null. The calendar
     * date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
     * without timezone conversion. `null` when unset. previous_attributes.service_date.anyOf[1]
     * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice
     * and PDF print it as written, without timezone conversion. `null` when unset. Format: date.
     * Example: "2026-08-02". previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
     * allocated credit notes, late fees, and the remaining invoice balance. What is still owed:
     * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
     * don't change it. Lost bank returns reopen the balance.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.snapshot (Optional): {@link
     * InvoiceSnapshotPreviousAttributes} or null. The billing content of the invoice: line items,
     * discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and
     * later order changes don't reach an issued invoice. previous_attributes.snapshot.anyOf[1]
     * (Value): {@link InvoiceSnapshotPreviousAttributes}. previous_attributes.snapshot.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current invoice
     * status. paid and credited close the current balance and can reopen to open or partially_paid
     * after a payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. An ACH bank return reverses paid_money and reopens the
     * balance. A lost card chargeback leaves paid_money, the balance, and status unchanged;
     * collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid",
     * "paid", "voided", "uncollectible", "credited". previous_attributes.status.anyOf[1] (Value):
     * string. Current invoice status. paid and credited close the current balance and can reopen
     * to open or partially_paid after a payment or credit allocation reversal; invoice.reopened
     * reports that change. An uncollectible invoice accepts manual recovery payments and becomes
     * paid when fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The subscription the backing order belongs to, copied when the
     * draft is created and never changed. `null` when the order isn't part of a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollectionPreviousAttributes} or null. How this invoice is collected, resolved
         * when the draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[1] (Value): {@link InvoiceCollectionPreviousAttributes}.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer.
         * Returned only with expand=customer. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has
         * no customer. customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
         * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. delivery_mode (Optional): string or null. How issue
         * delivered the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[1]
         * (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
         * delivery_mode.anyOf[2] (Value): null. due_date (Optional): string or null. Calendar due
         * date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding
         * balance becomes overdue only after this date ends. Automatic collection runs at the
         * later of issue and the start of this date. With payment terms, issue computes this date
         * from issued_at. Absent when there is no due date. due_date.anyOf[1] (Value): string.
         * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
         * outstanding balance becomes overdue only after this date ends. Automatic collection runs
         * at the later of issue and the start of this date. With payment terms, issue computes
         * this date from issued_at. Absent when there is no due date. Format: date. Example:
         * "2026-08-02". due_date.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system. Use it as your
         * sync key: it isn't printed on the invoice. `null` when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Use it as your sync key: it isn't printed on the
         * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. footer (Optional): string or null. Fine
         * print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
         * unset. footer.anyOf[1] (Value): string. Fine print at the bottom of the invoice and PDF.
         * It cannot change after issue. `null` when unset. footer.anyOf[2] (Value): null.
         * invoice_id (Optional): string or null. Flint invoice ID. invoice_id.anyOf[1] (Value):
         * string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. invoice_number (Optional): string or null. Sequential document number
         * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
         * numbered independently. invoice_number.anyOf[1] (Value): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. invoice_number.anyOf[2] (Value): null. is_overdue
         * (Optional): boolean or null. Whether the invoice is open or partially_paid and past due
         * with a balance remaining. Without schedule_entries, the due_date has ended in timezone
         * (UTC when absent) and outstanding_money is above zero; with them, at least one entry is
         * overdue. Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean.
         * Whether the invoice is open or partially_paid and past due with a balance remaining.
         * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on this invoice,
         * each with its paid, waived, written-off, and outstanding amounts.
         * settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late fees
         * assessed on this invoice, each with its paid, waived, written-off, and outstanding
         * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}.
         * late_fees.anyOf[2] (Value): null. memo (Optional): string or null. Message to the
         * customer, printed on the invoice and PDF. It cannot change after issue. `null` when
         * unset. memo.anyOf[1] (Value): string. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Merchant that owns this invoice.
         * merchant_id.anyOf[1] (Value): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDuePreviousAttributes} or null. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[1] (Value): {@link
         * InvoicePaymentDuePreviousAttributes}. payment_due.anyOf[2] (Value): null.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshotPreviousAttributes}
         * or null. The payment term captured on the draft, with its due date rule and late fee
         * policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshotPreviousAttributes}. payment_terms_snapshot.anyOf[2] (Value):
         * null. po_number (Optional): string or null. The buyer's purchase order number, printed
         * on the invoice and PDF. It cannot change after issue. `null` when unset.
         * po_number.anyOf[1] (Value): string. The buyer's purchase order number, printed on the
         * invoice and PDF. It cannot change after issue. `null` when unset. po_number.anyOf[2]
         * (Value): null. pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or
         * null. The invoice pricing totals, frozen at issue. A draft previews the backing order.
         * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. recipient_email (Optional): string or null.
         * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
         * `null` when unset. recipient_email.anyOf[1] (Value): string. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null. Your
         * reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
         * number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link AddressPreviousAttributes} or null. Where the buyer
         * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
         * address. remit_to_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule
         * order. Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1] (Value): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always
         * [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}.
         * schedule_entries.anyOf[2] (Value): null. scheduled_issue_at (Optional): string or null.
         * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
         * when the draft is issued or voided, or when you send null. scheduled_issue_at.anyOf[1]
         * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
         * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_issue_at.anyOf[2] (Value): null.
         * service_date (Optional): string or null. The calendar date of the billed service, in
         * YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion.
         * `null` when unset. service_date.anyOf[1] (Value): string. The calendar date of the
         * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
         * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
         * allocated credit notes, late fees, and the remaining invoice balance. What is still
         * owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
         * don't change it. Lost bank returns reopen the balance. settlement_amounts.anyOf[1]
         * (Value): {@link InvoiceSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2]
         * (Value): null. snapshot (Optional): {@link InvoiceSnapshotPreviousAttributes} or null.
         * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
         * draft previews the backing order; issue freezes it, and later order changes don't reach
         * an issued invoice. snapshot.anyOf[1] (Value): {@link InvoiceSnapshotPreviousAttributes}.
         * snapshot.anyOf[2] (Value): null. status (Optional): string or null. Current invoice
         * status. paid and credited close the current balance and can reopen to open or
         * partially_paid after a payment or credit allocation reversal; invoice.reopened reports
         * that change. An uncollectible invoice accepts manual recovery payments and becomes paid
         * when fully recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. An ACH bank return reverses paid_money and
         * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
         * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". status.anyOf[1]
         * (Value): string. Current invoice status. paid and credited close the current balance and
         * can reopen to open or partially_paid after a payment or credit allocation reversal;
         * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
         * payments and becomes paid when fully recovered; reversals restore the write-off. voided
         * is final. Refunds change refund_status without reopening the balance. An ACH bank return
         * reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money,
         * the balance, and status unchanged; collecting it again requires a new invoice. Value
         * enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string. The subscription the backing order belongs to, copied when the draft is
         * created and never changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string.
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string. Fine print at the bottom of the invoice
             * and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "footer"?: ((string) | (null));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late
             * fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string. Message to the customer, printed
             * on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string. The buyer's purchase order
             * number, printed on the invoice and PDF. It cannot change after issue. `null` when
             * unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string) | (null));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string. Where Flint emails the invoice
             * and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "recipient_email"?: ((string) | (null));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string. Your reference for the invoice, printed on the invoice and
             * PDF. The buyer's purchase order number goes in po_number. It cannot change after
             * issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string) | (null));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order.
             * Always [] when the invoice has no schedule and is collected in one balance.
             * anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string. When Flint will issue and deliver this draft. `null` when no issue is
             * scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string) | (null));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
             * invoice and PDF print it as written, without timezone conversion. `null` when unset.
             * Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string) | (null));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen
             * the balance. anyOf[1] (Value): {@link InvoiceSettlementAmountsPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link
             * InvoiceSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. An ACH bank return reverses paid_money and reopens the balance. A lost card
             * chargeback leaves paid_money, the balance, and status unchanged; collecting it again
             * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid",
             * "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice
             * status. paid and credited close the current balance and can reopen to open or
             * partially_paid after a payment or credit allocation reversal; invoice.reopened
             * reports that change. An uncollectible invoice accepts manual recovery payments and
             * becomes paid when fully recovered; reversals restore the write-off. voided is final.
             * Refunds change refund_status without reopening the balance. An ACH bank return
             * reverses paid_money and reopens the balance. A lost card chargeback leaves
             * paid_money, the balance, and status unchanged; collecting it again requires a new
             * invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited". anyOf[2] (Value): null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string. The subscription the backing order belongs to, copied when the draft is
             * created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.collection_block_resolved". */
    "event_type"?: "invoice.collection_block_resolved";
});
export type InvoiceCollectionBlockedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "footer"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            "po_number"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "recipient_email"?: ((string) | (null));
            "reference"?: ((string) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            "scheduled_issue_at"?: ((string) | (null));
            "service_date"?: ((string) | (null));
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "invoice.collection_blocked";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookInvoice;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "cc_emails"?: ((Array<string>) | (null));
            "closed_at"?: ((string) | (null));
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            "created_at"?: ((string) | (null));
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            "customer_id"?: ((string) | (null));
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            "due_date"?: ((string) | (null));
            "external_reference_id"?: ((string) | (null));
            "footer"?: ((string) | (null));
            "invoice_id"?: ((string) | (null));
            "invoice_number"?: ((string) | (null));
            "is_overdue"?: ((boolean) | (null));
            "issued_at"?: ((string) | (null));
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            "memo"?: ((string) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            "order_id"?: ((string) | (null));
            "paid_at"?: ((string) | (null));
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            "po_number"?: ((string) | (null));
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            "recipient_email"?: ((string) | (null));
            "reference"?: ((string) | (null));
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            "reminders_paused"?: ((boolean) | (null));
            "reminders_paused_at"?: ((string) | (null));
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            "scheduled_issue_at"?: ((string) | (null));
            "service_date"?: ((string) | (null));
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            "subscription_id"?: ((string) | (null));
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            "timezone"?: ((string) | (null));
            "uncollectible_at"?: ((string) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
            "viewed_at"?: ((string) | (null));
            "voided_at"?: ((string) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "invoice.collection_blocked";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollectionPreviousAttributes}
     * or null. How this invoice is collected, resolved when the draft is written. Send this object
     * back when updating its collection policy. previous_attributes.collection.anyOf[1] (Value):
     * {@link InvoiceCollectionPreviousAttributes}. previous_attributes.collection.anyOf[2]
     * (Value): null. previous_attributes.collection_block_status (Optional): string or null.
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved". previous_attributes.collection_block_status.anyOf[1]
     * (Value): string. Whether collection is blocked. While it is inventory_blocked, collection
     * attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
     * "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer. Returned
     * only with expand=customer. Present only when `expand` includes `customer`; `null` when
     * expanded and there is no related customer. previous_attributes.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2]
     * (Value): null. previous_attributes.customer_id (Optional): string or null. Customer billed
     * by this invoice. Absent when the invoice has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
     * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Use it as your sync key: it isn't printed on the
     * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.footer
     * (Optional): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue. `null` when unset. previous_attributes.footer.anyOf[1] (Value): string.
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset. previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on
     * this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link
     * InvoiceLateFeePreviousAttributes}. Late fees assessed on this invoice, each with its paid,
     * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
     * assessed total minus waivers. previous_attributes.late_fees.anyOf[1][] (Value): {@link
     * InvoiceLateFeePreviousAttributes}. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order.
     * Returned only with expand=order. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. The order this invoice bills. Every
     * invoice has one; quick pay creates it. previous_attributes.order_id.anyOf[1] (Value):
     * string. The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.paid_at (Optional): string or null. When the invoice most recently
     * became paid. Cleared when status leaves paid and set again on a later paid transition.
     * previous_attributes.paid_at.anyOf[1] (Value): string. When the invoice most recently became
     * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value):
     * null. previous_attributes.payment_due (Optional): {@link
     * InvoicePaymentDuePreviousAttributes} or null. The resolved due-date policy. Send this object
     * back when updating the draft; payment_terms captures the term's current revision again.
     * previous_attributes.payment_due.anyOf[1] (Value): {@link
     * InvoicePaymentDuePreviousAttributes}. previous_attributes.payment_due.anyOf[2] (Value):
     * null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes} or null. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes}.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmountsPreviousAttributes} or null. The invoice pricing totals,
     * frozen at issue. A draft previews the backing order. total_money excludes late fees, which
     * are in settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null.
     * previous_attributes.recipient_email (Optional): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[1] (Value): string. Where Flint emails the invoice
     * and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[2] (Value): null. previous_attributes.reference
     * (Optional): string or null. Your reference for the invoice, printed on the invoice and PDF.
     * The buyer's purchase order number goes in po_number. It cannot change after issue. `null`
     * when unset. previous_attributes.reference.anyOf[1] (Value): string. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link AddressPreviousAttributes} or null.
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule order.
     * Always [] when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1] (Value): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link
     * InvoiceScheduleEntryPreviousAttributes}. previous_attributes.schedule_entries.anyOf[2]
     * (Value): null. previous_attributes.scheduled_issue_at (Optional): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
     * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null. The calendar
     * date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
     * without timezone conversion. `null` when unset. previous_attributes.service_date.anyOf[1]
     * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice
     * and PDF print it as written, without timezone conversion. `null` when unset. Format: date.
     * Example: "2026-08-02". previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
     * allocated credit notes, late fees, and the remaining invoice balance. What is still owed:
     * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
     * don't change it. Lost bank returns reopen the balance.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.snapshot (Optional): {@link
     * InvoiceSnapshotPreviousAttributes} or null. The billing content of the invoice: line items,
     * discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and
     * later order changes don't reach an issued invoice. previous_attributes.snapshot.anyOf[1]
     * (Value): {@link InvoiceSnapshotPreviousAttributes}. previous_attributes.snapshot.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current invoice
     * status. paid and credited close the current balance and can reopen to open or partially_paid
     * after a payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. An ACH bank return reverses paid_money and reopens the
     * balance. A lost card chargeback leaves paid_money, the balance, and status unchanged;
     * collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid",
     * "paid", "voided", "uncollectible", "credited". previous_attributes.status.anyOf[1] (Value):
     * string. Current invoice status. paid and credited close the current balance and can reopen
     * to open or partially_paid after a payment or credit allocation reversal; invoice.reopened
     * reports that change. An uncollectible invoice accepts manual recovery payments and becomes
     * paid when fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The subscription the backing order belongs to, copied when the
     * draft is created and never changed. `null` when the order isn't part of a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollectionPreviousAttributes} or null. How this invoice is collected, resolved
         * when the draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[1] (Value): {@link InvoiceCollectionPreviousAttributes}.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer.
         * Returned only with expand=customer. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has
         * no customer. customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
         * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. delivery_mode (Optional): string or null. How issue
         * delivered the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[1]
         * (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
         * delivery_mode.anyOf[2] (Value): null. due_date (Optional): string or null. Calendar due
         * date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding
         * balance becomes overdue only after this date ends. Automatic collection runs at the
         * later of issue and the start of this date. With payment terms, issue computes this date
         * from issued_at. Absent when there is no due date. due_date.anyOf[1] (Value): string.
         * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
         * outstanding balance becomes overdue only after this date ends. Automatic collection runs
         * at the later of issue and the start of this date. With payment terms, issue computes
         * this date from issued_at. Absent when there is no due date. Format: date. Example:
         * "2026-08-02". due_date.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system. Use it as your
         * sync key: it isn't printed on the invoice. `null` when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Use it as your sync key: it isn't printed on the
         * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. footer (Optional): string or null. Fine
         * print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
         * unset. footer.anyOf[1] (Value): string. Fine print at the bottom of the invoice and PDF.
         * It cannot change after issue. `null` when unset. footer.anyOf[2] (Value): null.
         * invoice_id (Optional): string or null. Flint invoice ID. invoice_id.anyOf[1] (Value):
         * string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. invoice_number (Optional): string or null. Sequential document number
         * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
         * numbered independently. invoice_number.anyOf[1] (Value): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. invoice_number.anyOf[2] (Value): null. is_overdue
         * (Optional): boolean or null. Whether the invoice is open or partially_paid and past due
         * with a balance remaining. Without schedule_entries, the due_date has ended in timezone
         * (UTC when absent) and outstanding_money is above zero; with them, at least one entry is
         * overdue. Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean.
         * Whether the invoice is open or partially_paid and past due with a balance remaining.
         * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on this invoice,
         * each with its paid, waived, written-off, and outstanding amounts.
         * settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late fees
         * assessed on this invoice, each with its paid, waived, written-off, and outstanding
         * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}.
         * late_fees.anyOf[2] (Value): null. memo (Optional): string or null. Message to the
         * customer, printed on the invoice and PDF. It cannot change after issue. `null` when
         * unset. memo.anyOf[1] (Value): string. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Merchant that owns this invoice.
         * merchant_id.anyOf[1] (Value): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDuePreviousAttributes} or null. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[1] (Value): {@link
         * InvoicePaymentDuePreviousAttributes}. payment_due.anyOf[2] (Value): null.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshotPreviousAttributes}
         * or null. The payment term captured on the draft, with its due date rule and late fee
         * policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshotPreviousAttributes}. payment_terms_snapshot.anyOf[2] (Value):
         * null. po_number (Optional): string or null. The buyer's purchase order number, printed
         * on the invoice and PDF. It cannot change after issue. `null` when unset.
         * po_number.anyOf[1] (Value): string. The buyer's purchase order number, printed on the
         * invoice and PDF. It cannot change after issue. `null` when unset. po_number.anyOf[2]
         * (Value): null. pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or
         * null. The invoice pricing totals, frozen at issue. A draft previews the backing order.
         * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. recipient_email (Optional): string or null.
         * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
         * `null` when unset. recipient_email.anyOf[1] (Value): string. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null. Your
         * reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
         * number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link AddressPreviousAttributes} or null. Where the buyer
         * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
         * address. remit_to_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule
         * order. Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1] (Value): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always
         * [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}.
         * schedule_entries.anyOf[2] (Value): null. scheduled_issue_at (Optional): string or null.
         * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
         * when the draft is issued or voided, or when you send null. scheduled_issue_at.anyOf[1]
         * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
         * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_issue_at.anyOf[2] (Value): null.
         * service_date (Optional): string or null. The calendar date of the billed service, in
         * YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion.
         * `null` when unset. service_date.anyOf[1] (Value): string. The calendar date of the
         * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
         * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
         * allocated credit notes, late fees, and the remaining invoice balance. What is still
         * owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
         * don't change it. Lost bank returns reopen the balance. settlement_amounts.anyOf[1]
         * (Value): {@link InvoiceSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2]
         * (Value): null. snapshot (Optional): {@link InvoiceSnapshotPreviousAttributes} or null.
         * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
         * draft previews the backing order; issue freezes it, and later order changes don't reach
         * an issued invoice. snapshot.anyOf[1] (Value): {@link InvoiceSnapshotPreviousAttributes}.
         * snapshot.anyOf[2] (Value): null. status (Optional): string or null. Current invoice
         * status. paid and credited close the current balance and can reopen to open or
         * partially_paid after a payment or credit allocation reversal; invoice.reopened reports
         * that change. An uncollectible invoice accepts manual recovery payments and becomes paid
         * when fully recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. An ACH bank return reverses paid_money and
         * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
         * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". status.anyOf[1]
         * (Value): string. Current invoice status. paid and credited close the current balance and
         * can reopen to open or partially_paid after a payment or credit allocation reversal;
         * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
         * payments and becomes paid when fully recovered; reversals restore the write-off. voided
         * is final. Refunds change refund_status without reopening the balance. An ACH bank return
         * reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money,
         * the balance, and status unchanged; collecting it again requires a new invoice. Value
         * enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string. The subscription the backing order belongs to, copied when the draft is
         * created and never changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string.
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string. Fine print at the bottom of the invoice
             * and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "footer"?: ((string) | (null));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late
             * fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string. Message to the customer, printed
             * on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string. The buyer's purchase order
             * number, printed on the invoice and PDF. It cannot change after issue. `null` when
             * unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string) | (null));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string. Where Flint emails the invoice
             * and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "recipient_email"?: ((string) | (null));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string. Your reference for the invoice, printed on the invoice and
             * PDF. The buyer's purchase order number goes in po_number. It cannot change after
             * issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string) | (null));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order.
             * Always [] when the invoice has no schedule and is collected in one balance.
             * anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string. When Flint will issue and deliver this draft. `null` when no issue is
             * scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string) | (null));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
             * invoice and PDF print it as written, without timezone conversion. `null` when unset.
             * Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string) | (null));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen
             * the balance. anyOf[1] (Value): {@link InvoiceSettlementAmountsPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link
             * InvoiceSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. An ACH bank return reverses paid_money and reopens the balance. A lost card
             * chargeback leaves paid_money, the balance, and status unchanged; collecting it again
             * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid",
             * "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice
             * status. paid and credited close the current balance and can reopen to open or
             * partially_paid after a payment or credit allocation reversal; invoice.reopened
             * reports that change. An uncollectible invoice accepts manual recovery payments and
             * becomes paid when fully recovered; reversals restore the write-off. voided is final.
             * Refunds change refund_status without reopening the balance. An ACH bank return
             * reverses paid_money and reopens the balance. A lost card chargeback leaves
             * paid_money, the balance, and status unchanged; collecting it again requires a new
             * invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited". anyOf[2] (Value): null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string. The subscription the backing order belongs to, copied when the draft is
             * created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
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
 * The `invoice.collection_blocked` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InvoiceCollectionBlockedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookInvoice}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `public_url`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.cc_emails (Optional): Array of string or null.
     * Additional recipients copied on the invoice email and every reminder.
     * previous_attributes.cc_emails.anyOf[1] (Value): Array of string. Additional recipients
     * copied on the invoice email and every reminder. previous_attributes.cc_emails.anyOf[1][]
     * (Value): string. previous_attributes.cc_emails.anyOf[2] (Value): null.
     * previous_attributes.closed_at (Optional): string or null. When the current closed interval
     * began. Cleared when status returns to open or partially_paid. A direct move between closed
     * statuses preserves this timestamp. previous_attributes.closed_at.anyOf[1] (Value): string.
     * When the current closed interval began. Cleared when status returns to open or
     * partially_paid. A direct move between closed statuses preserves this timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.closed_at.anyOf[2] (Value):
     * null. previous_attributes.collection (Optional): {@link InvoiceCollectionPreviousAttributes}
     * or null. How this invoice is collected, resolved when the draft is written. Send this object
     * back when updating its collection policy. previous_attributes.collection.anyOf[1] (Value):
     * {@link InvoiceCollectionPreviousAttributes}. previous_attributes.collection.anyOf[2]
     * (Value): null. previous_attributes.collection_block_status (Optional): string or null.
     * Whether collection is blocked. While it is inventory_blocked, collection attempts return 409
     * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
     * "inventory_blocked", "resolved". previous_attributes.collection_block_status.anyOf[1]
     * (Value): string. Whether collection is blocked. While it is inventory_blocked, collection
     * attempts return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
     * "none", "inventory_blocked", "resolved".
     * previous_attributes.collection_block_status.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the invoice was created.
     * previous_attributes.created_at.anyOf[1] (Value): string. When the invoice was created.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2]
     * (Value): null. previous_attributes.customer (Optional): {@link
     * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer. Returned
     * only with expand=customer. Present only when `expand` includes `customer`; `null` when
     * expanded and there is no related customer. previous_attributes.customer.anyOf[1] (Value):
     * {@link ExpandedCustomerSummaryPreviousAttributes}. previous_attributes.customer.anyOf[2]
     * (Value): null. previous_attributes.customer_id (Optional): string or null. Customer billed
     * by this invoice. Absent when the invoice has no customer.
     * previous_attributes.customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
     * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * previous_attributes.customer_id.anyOf[2] (Value): null. previous_attributes.delivery_mode
     * (Optional): string or null. How issue delivered the invoice. Value enum: "email",
     * "caller_managed". previous_attributes.delivery_mode.anyOf[1] (Value): string. How issue
     * delivered the invoice. Value enum: "email", "caller_managed".
     * previous_attributes.delivery_mode.anyOf[2] (Value): null. previous_attributes.due_date
     * (Optional): string or null. Calendar due date in YYYY-MM-DD format, interpreted in timezone
     * (UTC when absent). The outstanding balance becomes overdue only after this date ends.
     * Automatic collection runs at the later of issue and the start of this date. With payment
     * terms, issue computes this date from issued_at. Absent when there is no due date.
     * previous_attributes.due_date.anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD
     * format, interpreted in timezone (UTC when absent). The outstanding balance becomes overdue
     * only after this date ends. Automatic collection runs at the later of issue and the start of
     * this date. With payment terms, issue computes this date from issued_at. Absent when there is
     * no due date. Format: date. Example: "2026-08-02". previous_attributes.due_date.anyOf[2]
     * (Value): null. previous_attributes.external_reference_id (Optional): string or null.
     * Caller-owned identifier for this resource in an external system. Use it as your sync key: it
     * isn't printed on the invoice. `null` when unset.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. Use it as your sync key: it isn't printed on the
     * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null. previous_attributes.footer
     * (Optional): string or null. Fine print at the bottom of the invoice and PDF. It cannot
     * change after issue. `null` when unset. previous_attributes.footer.anyOf[1] (Value): string.
     * Fine print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
     * unset. previous_attributes.footer.anyOf[2] (Value): null. previous_attributes.invoice_id
     * (Optional): string or null. Flint invoice ID. previous_attributes.invoice_id.anyOf[1]
     * (Value): string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * previous_attributes.invoice_id.anyOf[2] (Value): null. previous_attributes.invoice_number
     * (Optional): string or null. Sequential document number assigned when the invoice is issued.
     * Numbering is per merchant, with test and live mode numbered independently.
     * previous_attributes.invoice_number.anyOf[1] (Value): string. Sequential document number
     * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
     * numbered independently. previous_attributes.invoice_number.anyOf[2] (Value): null.
     * previous_attributes.is_overdue (Optional): boolean or null. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[1] (Value): boolean. Whether the invoice is open or
     * partially_paid and past due with a balance remaining. Without schedule_entries, the due_date
     * has ended in timezone (UTC when absent) and outstanding_money is above zero; with them, at
     * least one entry is overdue. Computed when the invoice is read.
     * previous_attributes.is_overdue.anyOf[2] (Value): null. previous_attributes.issued_at
     * (Optional): string or null. When the invoice was issued. Absent on a draft.
     * previous_attributes.issued_at.anyOf[1] (Value): string. When the invoice was issued. Absent
     * on a draft. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.issued_at.anyOf[2] (Value): null. previous_attributes.late_fees
     * (Optional): Array of {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on
     * this invoice, each with its paid, waived, written-off, and outstanding amounts.
     * settlement_amounts.late_fee_money is their assessed total minus waivers.
     * previous_attributes.late_fees.anyOf[1] (Value): Array of {@link
     * InvoiceLateFeePreviousAttributes}. Late fees assessed on this invoice, each with its paid,
     * waived, written-off, and outstanding amounts. settlement_amounts.late_fee_money is their
     * assessed total minus waivers. previous_attributes.late_fees.anyOf[1][] (Value): {@link
     * InvoiceLateFeePreviousAttributes}. previous_attributes.late_fees.anyOf[2] (Value): null.
     * previous_attributes.memo (Optional): string or null. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[1] (Value): string. Message to the customer, printed on the
     * invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.memo.anyOf[2] (Value): null. previous_attributes.merchant_id (Optional):
     * string or null. Merchant that owns this invoice. previous_attributes.merchant_id.anyOf[1]
     * (Value): string. Merchant that owns this invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Caller-owned metadata.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.order (Optional):
     * {@link ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order.
     * Returned only with expand=order. Present only when `expand` includes `order`; `null` when
     * expanded and there is no related order. previous_attributes.order.anyOf[1] (Value): {@link
     * ExpandedOrderSummaryPreviousAttributes}. previous_attributes.order.anyOf[2] (Value): null.
     * previous_attributes.order_id (Optional): string or null. The order this invoice bills. Every
     * invoice has one; quick pay creates it. previous_attributes.order_id.anyOf[1] (Value):
     * string. The order this invoice bills. Every invoice has one; quick pay creates it. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". previous_attributes.order_id.anyOf[2] (Value): null.
     * previous_attributes.paid_at (Optional): string or null. When the invoice most recently
     * became paid. Cleared when status leaves paid and set again on a later paid transition.
     * previous_attributes.paid_at.anyOf[1] (Value): string. When the invoice most recently became
     * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.paid_at.anyOf[2] (Value):
     * null. previous_attributes.payment_due (Optional): {@link
     * InvoicePaymentDuePreviousAttributes} or null. The resolved due-date policy. Send this object
     * back when updating the draft; payment_terms captures the term's current revision again.
     * previous_attributes.payment_due.anyOf[1] (Value): {@link
     * InvoicePaymentDuePreviousAttributes}. previous_attributes.payment_due.anyOf[2] (Value):
     * null. previous_attributes.payment_terms_snapshot (Optional): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes} or null. The payment term captured on the
     * draft, with its due date rule and late fee policy. Later changes to the payment term don't
     * affect this invoice. previous_attributes.payment_terms_snapshot.anyOf[1] (Value): {@link
     * InvoicePaymentTermsSnapshotPreviousAttributes}.
     * previous_attributes.payment_terms_snapshot.anyOf[2] (Value): null.
     * previous_attributes.po_number (Optional): string or null. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[1] (Value): string. The buyer's purchase order number,
     * printed on the invoice and PDF. It cannot change after issue. `null` when unset.
     * previous_attributes.po_number.anyOf[2] (Value): null. previous_attributes.pricing_amounts
     * (Optional): {@link PricingAmountsPreviousAttributes} or null. The invoice pricing totals,
     * frozen at issue. A draft previews the backing order. total_money excludes late fees, which
     * are in settlement_amounts.late_fee_money. previous_attributes.pricing_amounts.anyOf[1]
     * (Value): {@link PricingAmountsPreviousAttributes}.
     * previous_attributes.pricing_amounts.anyOf[2] (Value): null.
     * previous_attributes.recipient_email (Optional): string or null. Where Flint emails the
     * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[1] (Value): string. Where Flint emails the invoice
     * and its reminders. Email delivery requires it at issue. `null` when unset.
     * previous_attributes.recipient_email.anyOf[2] (Value): null. previous_attributes.reference
     * (Optional): string or null. Your reference for the invoice, printed on the invoice and PDF.
     * The buyer's purchase order number goes in po_number. It cannot change after issue. `null`
     * when unset. previous_attributes.reference.anyOf[1] (Value): string. Your reference for the
     * invoice, printed on the invoice and PDF. The buyer's purchase order number goes in
     * po_number. It cannot change after issue. `null` when unset.
     * previous_attributes.reference.anyOf[2] (Value): null. previous_attributes.refund_status
     * (Optional): string or null. How much of the collected money has been refunded. It doesn't
     * change status. Value enum: "none", "partially_refunded", "refunded".
     * previous_attributes.refund_status.anyOf[1] (Value): string. How much of the collected money
     * has been refunded. It doesn't change status. Value enum: "none", "partially_refunded",
     * "refunded". previous_attributes.refund_status.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused (Optional): boolean or null. Whether automatic
     * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[1] (Value): boolean. Whether automatic reminders
     * are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to change it.
     * previous_attributes.reminders_paused.anyOf[2] (Value): null.
     * previous_attributes.reminders_paused_at (Optional): string or null. When automatic reminders
     * were paused. Absent while reminders are active.
     * previous_attributes.reminders_paused_at.anyOf[1] (Value): string. When automatic reminders
     * were paused. Absent while reminders are active. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.reminders_paused_at.anyOf[2] (Value): null.
     * previous_attributes.remit_to_address (Optional): {@link AddressPreviousAttributes} or null.
     * Where the buyer sends offline payments, shown on the invoice. Defaults to the invoice
     * settings remit-to address. previous_attributes.remit_to_address.anyOf[1] (Value): {@link
     * AddressPreviousAttributes}. previous_attributes.remit_to_address.anyOf[2] (Value): null.
     * previous_attributes.schedule_entries (Optional): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule order.
     * Always [] when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1] (Value): Array of {@link
     * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always []
     * when the invoice has no schedule and is collected in one balance.
     * previous_attributes.schedule_entries.anyOf[1][] (Value): {@link
     * InvoiceScheduleEntryPreviousAttributes}. previous_attributes.schedule_entries.anyOf[2]
     * (Value): null. previous_attributes.scheduled_issue_at (Optional): string or null. When Flint
     * will issue and deliver this draft. `null` when no issue is scheduled. Cleared when the draft
     * is issued or voided, or when you send null. previous_attributes.scheduled_issue_at.anyOf[1]
     * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
     * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.scheduled_issue_at.anyOf[2]
     * (Value): null. previous_attributes.service_date (Optional): string or null. The calendar
     * date of the billed service, in YYYY-MM-DD format. The invoice and PDF print it as written,
     * without timezone conversion. `null` when unset. previous_attributes.service_date.anyOf[1]
     * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The invoice
     * and PDF print it as written, without timezone conversion. `null` when unset. Format: date.
     * Example: "2026-08-02". previous_attributes.service_date.anyOf[2] (Value): null.
     * previous_attributes.settlement_amounts (Optional): {@link
     * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
     * allocated credit notes, late fees, and the remaining invoice balance. What is still owed:
     * pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
     * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
     * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
     * don't change it. Lost bank returns reopen the balance.
     * previous_attributes.settlement_amounts.anyOf[1] (Value): {@link
     * InvoiceSettlementAmountsPreviousAttributes}. previous_attributes.settlement_amounts.anyOf[2]
     * (Value): null. previous_attributes.snapshot (Optional): {@link
     * InvoiceSnapshotPreviousAttributes} or null. The billing content of the invoice: line items,
     * discounts, charges, tip, and tax. A draft previews the backing order; issue freezes it, and
     * later order changes don't reach an issued invoice. previous_attributes.snapshot.anyOf[1]
     * (Value): {@link InvoiceSnapshotPreviousAttributes}. previous_attributes.snapshot.anyOf[2]
     * (Value): null. previous_attributes.status (Optional): string or null. Current invoice
     * status. paid and credited close the current balance and can reopen to open or partially_paid
     * after a payment or credit allocation reversal; invoice.reopened reports that change. An
     * uncollectible invoice accepts manual recovery payments and becomes paid when fully
     * recovered; reversals restore the write-off. voided is final. Refunds change refund_status
     * without reopening the balance. An ACH bank return reverses paid_money and reopens the
     * balance. A lost card chargeback leaves paid_money, the balance, and status unchanged;
     * collecting it again requires a new invoice. Value enum: "draft", "open", "partially_paid",
     * "paid", "voided", "uncollectible", "credited". previous_attributes.status.anyOf[1] (Value):
     * string. Current invoice status. paid and credited close the current balance and can reopen
     * to open or partially_paid after a payment or credit allocation reversal; invoice.reopened
     * reports that change. An uncollectible invoice accepts manual recovery payments and becomes
     * paid when fully recovered; reversals restore the write-off. voided is final. Refunds change
     * refund_status without reopening the balance. An ACH bank return reverses paid_money and
     * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
     * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
     * "partially_paid", "paid", "voided", "uncollectible", "credited".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.subscription_id
     * (Optional): string or null. The subscription the backing order belongs to, copied when the
     * draft is created and never changed. `null` when the order isn't part of a subscription.
     * previous_attributes.subscription_id.anyOf[1] (Value): string. The subscription the backing
     * order belongs to, copied when the draft is created and never changed. `null` when the order
     * isn't part of a subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * previous_attributes.subscription_id.anyOf[2] (Value): null.
     * previous_attributes.supported_actions (Optional): Array of string or null. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Lifecycle actions
     * Flint accepts for this resource now, based on stored state. Independent of the caller's
     * permissions; each action still requires its route's scope. Always [] when no action is
     * available. [] enum: "collect", "issue", "mark_uncollectible", "void".
     * previous_attributes.supported_actions.anyOf[1][] (Value): string. Value enum: "collect",
     * "issue", "mark_uncollectible", "void". previous_attributes.supported_actions.anyOf[2]
     * (Value): null. previous_attributes.timezone (Optional): string or null. IANA time zone
     * snapshot for invoice due dates, reminders, and late fee calendar days. Taken from the
     * merchant's timezone when the draft is written, or UTC when unset. Later merchant changes do
     * not alter this invoice's calendar. previous_attributes.timezone.anyOf[1] (Value): string.
     * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar days. Taken
     * from the merchant's timezone when the draft is written, or UTC when unset. Later merchant
     * changes do not alter this invoice's calendar. previous_attributes.timezone.anyOf[2] (Value):
     * null. previous_attributes.uncollectible_at (Optional): string or null. When the invoice was
     * marked uncollectible. previous_attributes.uncollectible_at.anyOf[1] (Value): string. When
     * the invoice was marked uncollectible. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.uncollectible_at.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. When the invoice last changed.
     * previous_attributes.updated_at.anyOf[1] (Value): string. When the invoice last changed.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Current invoice
     * version. Send this as expected_version when updating the draft.
     * previous_attributes.version.anyOf[1] (Value): integer. Current invoice version. Send this as
     * expected_version when updating the draft. Format: int64. minimum: 1.
     * previous_attributes.version.anyOf[2] (Value): null. previous_attributes.viewed_at
     * (Optional): string or null. When the buyer first opened the invoice through its hosted
     * invoice link. Recorded on a best-effort basis. previous_attributes.viewed_at.anyOf[1]
     * (Value): string. When the buyer first opened the invoice through its hosted invoice link.
     * Recorded on a best-effort basis. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.viewed_at.anyOf[2] (Value): null. previous_attributes.voided_at
     * (Optional): string or null. When the invoice was voided.
     * previous_attributes.voided_at.anyOf[1] (Value): string. When the invoice was voided. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.voided_at.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `public_url`. */
        "object": WebhookInvoice;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. cc_emails (Optional): Array of string or null.
         * Additional recipients copied on the invoice email and every reminder. cc_emails.anyOf[1]
         * (Value): Array of string. Additional recipients copied on the invoice email and every
         * reminder. cc_emails.anyOf[1][] (Value): string. cc_emails.anyOf[2] (Value): null.
         * closed_at (Optional): string or null. When the current closed interval began. Cleared
         * when status returns to open or partially_paid. A direct move between closed statuses
         * preserves this timestamp. closed_at.anyOf[1] (Value): string. When the current closed
         * interval began. Cleared when status returns to open or partially_paid. A direct move
         * between closed statuses preserves this timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_at.anyOf[2] (Value): null. collection (Optional): {@link
         * InvoiceCollectionPreviousAttributes} or null. How this invoice is collected, resolved
         * when the draft is written. Send this object back when updating its collection policy.
         * collection.anyOf[1] (Value): {@link InvoiceCollectionPreviousAttributes}.
         * collection.anyOf[2] (Value): null. collection_block_status (Optional): string or null.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[1] (Value): string.
         * Whether collection is blocked. While it is inventory_blocked, collection attempts return
         * 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
         * "inventory_blocked", "resolved". collection_block_status.anyOf[2] (Value): null.
         * created_at (Optional): string or null. When the invoice was created. created_at.anyOf[1]
         * (Value): string. When the invoice was created. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. customer (Optional): {@link
         * ExpandedCustomerSummaryPreviousAttributes} or null. Summary of the billed customer.
         * Returned only with expand=customer. Present only when `expand` includes `customer`;
         * `null` when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummaryPreviousAttributes}. customer.anyOf[2] (Value): null. customer_id
         * (Optional): string or null. Customer billed by this invoice. Absent when the invoice has
         * no customer. customer_id.anyOf[1] (Value): string. Customer billed by this invoice.
         * Absent when the invoice has no customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. delivery_mode (Optional): string or null. How issue
         * delivered the invoice. Value enum: "email", "caller_managed". delivery_mode.anyOf[1]
         * (Value): string. How issue delivered the invoice. Value enum: "email", "caller_managed".
         * delivery_mode.anyOf[2] (Value): null. due_date (Optional): string or null. Calendar due
         * date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The outstanding
         * balance becomes overdue only after this date ends. Automatic collection runs at the
         * later of issue and the start of this date. With payment terms, issue computes this date
         * from issued_at. Absent when there is no due date. due_date.anyOf[1] (Value): string.
         * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent). The
         * outstanding balance becomes overdue only after this date ends. Automatic collection runs
         * at the later of issue and the start of this date. With payment terms, issue computes
         * this date from issued_at. Absent when there is no due date. Format: date. Example:
         * "2026-08-02". due_date.anyOf[2] (Value): null. external_reference_id (Optional): string
         * or null. Caller-owned identifier for this resource in an external system. Use it as your
         * sync key: it isn't printed on the invoice. `null` when unset.
         * external_reference_id.anyOf[1] (Value): string. Caller-owned identifier for this
         * resource in an external system. Use it as your sync key: it isn't printed on the
         * invoice. `null` when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
         * external_reference_id.anyOf[2] (Value): null. footer (Optional): string or null. Fine
         * print at the bottom of the invoice and PDF. It cannot change after issue. `null` when
         * unset. footer.anyOf[1] (Value): string. Fine print at the bottom of the invoice and PDF.
         * It cannot change after issue. `null` when unset. footer.anyOf[2] (Value): null.
         * invoice_id (Optional): string or null. Flint invoice ID. invoice_id.anyOf[1] (Value):
         * string. Flint invoice ID. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". invoice_id.anyOf[2]
         * (Value): null. invoice_number (Optional): string or null. Sequential document number
         * assigned when the invoice is issued. Numbering is per merchant, with test and live mode
         * numbered independently. invoice_number.anyOf[1] (Value): string. Sequential document
         * number assigned when the invoice is issued. Numbering is per merchant, with test and
         * live mode numbered independently. invoice_number.anyOf[2] (Value): null. is_overdue
         * (Optional): boolean or null. Whether the invoice is open or partially_paid and past due
         * with a balance remaining. Without schedule_entries, the due_date has ended in timezone
         * (UTC when absent) and outstanding_money is above zero; with them, at least one entry is
         * overdue. Computed when the invoice is read. is_overdue.anyOf[1] (Value): boolean.
         * Whether the invoice is open or partially_paid and past due with a balance remaining.
         * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
         * outstanding_money is above zero; with them, at least one entry is overdue. Computed when
         * the invoice is read. is_overdue.anyOf[2] (Value): null. issued_at (Optional): string or
         * null. When the invoice was issued. Absent on a draft. issued_at.anyOf[1] (Value):
         * string. When the invoice was issued. Absent on a draft. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". issued_at.anyOf[2] (Value): null. late_fees (Optional): Array of
         * {@link InvoiceLateFeePreviousAttributes} or null. Late fees assessed on this invoice,
         * each with its paid, waived, written-off, and outstanding amounts.
         * settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late fees
         * assessed on this invoice, each with its paid, waived, written-off, and outstanding
         * amounts. settlement_amounts.late_fee_money is their assessed total minus waivers.
         * late_fees.anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}.
         * late_fees.anyOf[2] (Value): null. memo (Optional): string or null. Message to the
         * customer, printed on the invoice and PDF. It cannot change after issue. `null` when
         * unset. memo.anyOf[1] (Value): string. Message to the customer, printed on the invoice
         * and PDF. It cannot change after issue. `null` when unset. memo.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Merchant that owns this invoice.
         * merchant_id.anyOf[1] (Value): string. Merchant that owns this invoice. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Caller-owned metadata. metadata.anyOf[1]
         * (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null. order (Optional): {@link
         * ExpandedOrderSummaryPreviousAttributes} or null. Summary of the backing order. Returned
         * only with expand=order. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummaryPreviousAttributes}. order.anyOf[2] (Value): null. order_id
         * (Optional): string or null. The order this invoice bills. Every invoice has one; quick
         * pay creates it. order_id.anyOf[1] (Value): string. The order this invoice bills. Every
         * invoice has one; quick pay creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_id.anyOf[2] (Value): null. paid_at (Optional): string or null. When the invoice
         * most recently became paid. Cleared when status leaves paid and set again on a later paid
         * transition. paid_at.anyOf[1] (Value): string. When the invoice most recently became
         * paid. Cleared when status leaves paid and set again on a later paid transition. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". paid_at.anyOf[2] (Value): null. payment_due
         * (Optional): {@link InvoicePaymentDuePreviousAttributes} or null. The resolved due-date
         * policy. Send this object back when updating the draft; payment_terms captures the term's
         * current revision again. payment_due.anyOf[1] (Value): {@link
         * InvoicePaymentDuePreviousAttributes}. payment_due.anyOf[2] (Value): null.
         * payment_terms_snapshot (Optional): {@link InvoicePaymentTermsSnapshotPreviousAttributes}
         * or null. The payment term captured on the draft, with its due date rule and late fee
         * policy. Later changes to the payment term don't affect this invoice.
         * payment_terms_snapshot.anyOf[1] (Value): {@link
         * InvoicePaymentTermsSnapshotPreviousAttributes}. payment_terms_snapshot.anyOf[2] (Value):
         * null. po_number (Optional): string or null. The buyer's purchase order number, printed
         * on the invoice and PDF. It cannot change after issue. `null` when unset.
         * po_number.anyOf[1] (Value): string. The buyer's purchase order number, printed on the
         * invoice and PDF. It cannot change after issue. `null` when unset. po_number.anyOf[2]
         * (Value): null. pricing_amounts (Optional): {@link PricingAmountsPreviousAttributes} or
         * null. The invoice pricing totals, frozen at issue. A draft previews the backing order.
         * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
         * pricing_amounts.anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}.
         * pricing_amounts.anyOf[2] (Value): null. recipient_email (Optional): string or null.
         * Where Flint emails the invoice and its reminders. Email delivery requires it at issue.
         * `null` when unset. recipient_email.anyOf[1] (Value): string. Where Flint emails the
         * invoice and its reminders. Email delivery requires it at issue. `null` when unset.
         * recipient_email.anyOf[2] (Value): null. reference (Optional): string or null. Your
         * reference for the invoice, printed on the invoice and PDF. The buyer's purchase order
         * number goes in po_number. It cannot change after issue. `null` when unset.
         * reference.anyOf[1] (Value): string. Your reference for the invoice, printed on the
         * invoice and PDF. The buyer's purchase order number goes in po_number. It cannot change
         * after issue. `null` when unset. reference.anyOf[2] (Value): null. refund_status
         * (Optional): string or null. How much of the collected money has been refunded. It
         * doesn't change status. Value enum: "none", "partially_refunded", "refunded".
         * refund_status.anyOf[1] (Value): string. How much of the collected money has been
         * refunded. It doesn't change status. Value enum: "none", "partially_refunded",
         * "refunded". refund_status.anyOf[2] (Value): null. reminders_paused (Optional): boolean
         * or null. Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[1] (Value): boolean.
         * Whether automatic reminders are paused. Set reminders_paused on PATCH
         * /v1/invoices/{invoice_id} to change it. reminders_paused.anyOf[2] (Value): null.
         * reminders_paused_at (Optional): string or null. When automatic reminders were paused.
         * Absent while reminders are active. reminders_paused_at.anyOf[1] (Value): string. When
         * automatic reminders were paused. Absent while reminders are active. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". reminders_paused_at.anyOf[2] (Value): null.
         * remit_to_address (Optional): {@link AddressPreviousAttributes} or null. Where the buyer
         * sends offline payments, shown on the invoice. Defaults to the invoice settings remit-to
         * address. remit_to_address.anyOf[1] (Value): {@link AddressPreviousAttributes}.
         * remit_to_address.anyOf[2] (Value): null. schedule_entries (Optional): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes} or null. The payment schedule, in schedule
         * order. Always [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1] (Value): Array of {@link
         * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order. Always
         * [] when the invoice has no schedule and is collected in one balance.
         * schedule_entries.anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}.
         * schedule_entries.anyOf[2] (Value): null. scheduled_issue_at (Optional): string or null.
         * When Flint will issue and deliver this draft. `null` when no issue is scheduled. Cleared
         * when the draft is issued or voided, or when you send null. scheduled_issue_at.anyOf[1]
         * (Value): string. When Flint will issue and deliver this draft. `null` when no issue is
         * scheduled. Cleared when the draft is issued or voided, or when you send null. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". scheduled_issue_at.anyOf[2] (Value): null.
         * service_date (Optional): string or null. The calendar date of the billed service, in
         * YYYY-MM-DD format. The invoice and PDF print it as written, without timezone conversion.
         * `null` when unset. service_date.anyOf[1] (Value): string. The calendar date of the
         * billed service, in YYYY-MM-DD format. The invoice and PDF print it as written, without
         * timezone conversion. `null` when unset. Format: date. Example: "2026-08-02".
         * service_date.anyOf[2] (Value): null. settlement_amounts (Optional): {@link
         * InvoiceSettlementAmountsPreviousAttributes} or null. Payments, refunds, write-offs,
         * allocated credit notes, late fees, and the remaining invoice balance. What is still
         * owed: pricing_amounts.total_money + late_fee_money - paid_money - credited_money -
         * written_off_money, never below zero. 0 on paid, credited, uncollectible, and voided
         * invoices; equal to pricing_amounts.total_money on a draft. Refunds and card chargebacks
         * don't change it. Lost bank returns reopen the balance. settlement_amounts.anyOf[1]
         * (Value): {@link InvoiceSettlementAmountsPreviousAttributes}. settlement_amounts.anyOf[2]
         * (Value): null. snapshot (Optional): {@link InvoiceSnapshotPreviousAttributes} or null.
         * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
         * draft previews the backing order; issue freezes it, and later order changes don't reach
         * an issued invoice. snapshot.anyOf[1] (Value): {@link InvoiceSnapshotPreviousAttributes}.
         * snapshot.anyOf[2] (Value): null. status (Optional): string or null. Current invoice
         * status. paid and credited close the current balance and can reopen to open or
         * partially_paid after a payment or credit allocation reversal; invoice.reopened reports
         * that change. An uncollectible invoice accepts manual recovery payments and becomes paid
         * when fully recovered; reversals restore the write-off. voided is final. Refunds change
         * refund_status without reopening the balance. An ACH bank return reverses paid_money and
         * reopens the balance. A lost card chargeback leaves paid_money, the balance, and status
         * unchanged; collecting it again requires a new invoice. Value enum: "draft", "open",
         * "partially_paid", "paid", "voided", "uncollectible", "credited". status.anyOf[1]
         * (Value): string. Current invoice status. paid and credited close the current balance and
         * can reopen to open or partially_paid after a payment or credit allocation reversal;
         * invoice.reopened reports that change. An uncollectible invoice accepts manual recovery
         * payments and becomes paid when fully recovered; reversals restore the write-off. voided
         * is final. Refunds change refund_status without reopening the balance. An ACH bank return
         * reverses paid_money and reopens the balance. A lost card chargeback leaves paid_money,
         * the balance, and status unchanged; collecting it again requires a new invoice. Value
         * enum: "draft", "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
         * status.anyOf[2] (Value): null. subscription_id (Optional): string or null. The
         * subscription the backing order belongs to, copied when the draft is created and never
         * changed. `null` when the order isn't part of a subscription. subscription_id.anyOf[1]
         * (Value): string. The subscription the backing order belongs to, copied when the draft is
         * created and never changed. `null` when the order isn't part of a subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_id.anyOf[2] (Value): null.
         * supported_actions (Optional): Array of string or null. Lifecycle actions Flint accepts
         * for this resource now, based on stored state. Independent of the caller's permissions;
         * each action still requires its route's scope. Always [] when no action is available. []
         * enum: "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[1]
         * (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based
         * on stored state. Independent of the caller's permissions; each action still requires its
         * route's scope. Always [] when no action is available. [] enum: "collect", "issue",
         * "mark_uncollectible", "void". supported_actions.anyOf[1][] (Value): string. Value enum:
         * "collect", "issue", "mark_uncollectible", "void". supported_actions.anyOf[2] (Value):
         * null. timezone (Optional): string or null. IANA time zone snapshot for invoice due
         * dates, reminders, and late fee calendar days. Taken from the merchant's timezone when
         * the draft is written, or UTC when unset. Later merchant changes do not alter this
         * invoice's calendar. timezone.anyOf[1] (Value): string. IANA time zone snapshot for
         * invoice due dates, reminders, and late fee calendar days. Taken from the merchant's
         * timezone when the draft is written, or UTC when unset. Later merchant changes do not
         * alter this invoice's calendar. timezone.anyOf[2] (Value): null. uncollectible_at
         * (Optional): string or null. When the invoice was marked uncollectible.
         * uncollectible_at.anyOf[1] (Value): string. When the invoice was marked uncollectible.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". uncollectible_at.anyOf[2] (Value):
         * null. updated_at (Optional): string or null. When the invoice last changed.
         * updated_at.anyOf[1] (Value): string. When the invoice last changed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional):
         * integer or null. Current invoice version. Send this as expected_version when updating
         * the draft. version.anyOf[1] (Value): integer. Current invoice version. Send this as
         * expected_version when updating the draft. Format: int64. minimum: 1. version.anyOf[2]
         * (Value): null. viewed_at (Optional): string or null. When the buyer first opened the
         * invoice through its hosted invoice link. Recorded on a best-effort basis.
         * viewed_at.anyOf[1] (Value): string. When the buyer first opened the invoice through its
         * hosted invoice link. Recorded on a best-effort basis. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". viewed_at.anyOf[2] (Value): null. voided_at (Optional): string
         * or null. When the invoice was voided. voided_at.anyOf[1] (Value): string. When the
         * invoice was voided. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * voided_at.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Additional recipients copied on the invoice email and every reminder. anyOf[1]
             * (Value): Array of string. Additional recipients copied on the invoice email and
             * every reminder. anyOf[1][] (Value): string. anyOf[2] (Value): null.
             */
            "cc_emails"?: ((Array<string>) | (null));
            /**
             * When the current closed interval began. Cleared when status returns to open or
             * partially_paid. A direct move between closed statuses preserves this timestamp.
             * anyOf[1] (Value): string. When the current closed interval began. Cleared when
             * status returns to open or partially_paid. A direct move between closed statuses
             * preserves this timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
             * anyOf[2] (Value): null.
             */
            "closed_at"?: ((string) | (null));
            /**
             * How this invoice is collected, resolved when the draft is written. Send this object
             * back when updating its collection policy. anyOf[1] (Value): {@link
             * InvoiceCollectionPreviousAttributes}. anyOf[2] (Value): null.
             */
            "collection"?: ((InvoiceCollectionPreviousAttributes) | (null));
            /**
             * Whether collection is blocked. While it is inventory_blocked, collection attempts
             * return 409 ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum:
             * "none", "inventory_blocked", "resolved". anyOf[1] (Value): string. Whether
             * collection is blocked. While it is inventory_blocked, collection attempts return 409
             * ACTION_NOT_ALLOWED with details[0].reason inventory_wait. Value enum: "none",
             * "inventory_blocked", "resolved". anyOf[2] (Value): null.
             */
            "collection_block_status"?: (("none" | "inventory_blocked" | "resolved" | (string & {})) | (null));
            /**
             * When the invoice was created. anyOf[1] (Value): string. When the invoice was
             * created. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Summary of the billed customer. Returned only with expand=customer. Present only
             * when `expand` includes `customer`; `null` when expanded and there is no related
             * customer. anyOf[1] (Value): {@link ExpandedCustomerSummaryPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummaryPreviousAttributes) | (null));
            /**
             * Customer billed by this invoice. Absent when the invoice has no customer. anyOf[1]
             * (Value): string. Customer billed by this invoice. Absent when the invoice has no
             * customer. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * How issue delivered the invoice. Value enum: "email", "caller_managed". anyOf[1]
             * (Value): string. How issue delivered the invoice. Value enum: "email",
             * "caller_managed". anyOf[2] (Value): null.
             */
            "delivery_mode"?: (("email" | "caller_managed" | (string & {})) | (null));
            /**
             * Calendar due date in YYYY-MM-DD format, interpreted in timezone (UTC when absent).
             * The outstanding balance becomes overdue only after this date ends. Automatic
             * collection runs at the later of issue and the start of this date. With payment
             * terms, issue computes this date from issued_at. Absent when there is no due date.
             * anyOf[1] (Value): string. Calendar due date in YYYY-MM-DD format, interpreted in
             * timezone (UTC when absent). The outstanding balance becomes overdue only after this
             * date ends. Automatic collection runs at the later of issue and the start of this
             * date. With payment terms, issue computes this date from issued_at. Absent when there
             * is no due date. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "due_date"?: ((string) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. anyOf[1] (Value): string.
             * Caller-owned identifier for this resource in an external system. Use it as your sync
             * key: it isn't printed on the invoice. `null` when unset. minLength: 1. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Fine print at the bottom of the invoice and PDF. It cannot change after issue.
             * `null` when unset. anyOf[1] (Value): string. Fine print at the bottom of the invoice
             * and PDF. It cannot change after issue. `null` when unset. anyOf[2] (Value): null.
             */
            "footer"?: ((string) | (null));
            /**
             * Flint invoice ID. anyOf[1] (Value): string. Flint invoice ID. Example:
             * "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
             */
            "invoice_id"?: ((string) | (null));
            /**
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[1] (Value): string.
             * Sequential document number assigned when the invoice is issued. Numbering is per
             * merchant, with test and live mode numbered independently. anyOf[2] (Value): null.
             */
            "invoice_number"?: ((string) | (null));
            /**
             * Whether the invoice is open or partially_paid and past due with a balance remaining.
             * Without schedule_entries, the due_date has ended in timezone (UTC when absent) and
             * outstanding_money is above zero; with them, at least one entry is overdue. Computed
             * when the invoice is read. anyOf[1] (Value): boolean. Whether the invoice is open or
             * partially_paid and past due with a balance remaining. Without schedule_entries, the
             * due_date has ended in timezone (UTC when absent) and outstanding_money is above
             * zero; with them, at least one entry is overdue. Computed when the invoice is read.
             * anyOf[2] (Value): null.
             */
            "is_overdue"?: ((boolean) | (null));
            /**
             * When the invoice was issued. Absent on a draft. anyOf[1] (Value): string. When the
             * invoice was issued. Absent on a draft. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "issued_at"?: ((string) | (null));
            /**
             * Late fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1] (Value): Array of {@link InvoiceLateFeePreviousAttributes}. Late
             * fees assessed on this invoice, each with its paid, waived, written-off, and
             * outstanding amounts. settlement_amounts.late_fee_money is their assessed total minus
             * waivers. anyOf[1][] (Value): {@link InvoiceLateFeePreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "late_fees"?: ((Array<InvoiceLateFeePreviousAttributes>) | (null));
            /**
             * Message to the customer, printed on the invoice and PDF. It cannot change after
             * issue. `null` when unset. anyOf[1] (Value): string. Message to the customer, printed
             * on the invoice and PDF. It cannot change after issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "memo"?: ((string) | (null));
            /**
             * Merchant that owns this invoice. anyOf[1] (Value): string. Merchant that owns this
             * invoice. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Caller-owned metadata. anyOf[1] (Value): {@link MetadataMap}. anyOf[2] (Value):
             * null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Summary of the backing order. Returned only with expand=order. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "order"?: ((ExpandedOrderSummaryPreviousAttributes) | (null));
            /**
             * The order this invoice bills. Every invoice has one; quick pay creates it. anyOf[1]
             * (Value): string. The order this invoice bills. Every invoice has one; quick pay
             * creates it. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
             */
            "order_id"?: ((string) | (null));
            /**
             * When the invoice most recently became paid. Cleared when status leaves paid and set
             * again on a later paid transition. anyOf[1] (Value): string. When the invoice most
             * recently became paid. Cleared when status leaves paid and set again on a later paid
             * transition. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "paid_at"?: ((string) | (null));
            /**
             * The resolved due-date policy. Send this object back when updating the draft;
             * payment_terms captures the term's current revision again. anyOf[1] (Value): {@link
             * InvoicePaymentDuePreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_due"?: ((InvoicePaymentDuePreviousAttributes) | (null));
            /**
             * The payment term captured on the draft, with its due date rule and late fee policy.
             * Later changes to the payment term don't affect this invoice. anyOf[1] (Value):
             * {@link InvoicePaymentTermsSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "payment_terms_snapshot"?: ((InvoicePaymentTermsSnapshotPreviousAttributes) | (null));
            /**
             * The buyer's purchase order number, printed on the invoice and PDF. It cannot change
             * after issue. `null` when unset. anyOf[1] (Value): string. The buyer's purchase order
             * number, printed on the invoice and PDF. It cannot change after issue. `null` when
             * unset. anyOf[2] (Value): null.
             */
            "po_number"?: ((string) | (null));
            /**
             * The invoice pricing totals, frozen at issue. A draft previews the backing order.
             * total_money excludes late fees, which are in settlement_amounts.late_fee_money.
             * anyOf[1] (Value): {@link PricingAmountsPreviousAttributes}. anyOf[2] (Value): null.
             */
            "pricing_amounts"?: ((PricingAmountsPreviousAttributes) | (null));
            /**
             * Where Flint emails the invoice and its reminders. Email delivery requires it at
             * issue. `null` when unset. anyOf[1] (Value): string. Where Flint emails the invoice
             * and its reminders. Email delivery requires it at issue. `null` when unset. anyOf[2]
             * (Value): null.
             */
            "recipient_email"?: ((string) | (null));
            /**
             * Your reference for the invoice, printed on the invoice and PDF. The buyer's purchase
             * order number goes in po_number. It cannot change after issue. `null` when unset.
             * anyOf[1] (Value): string. Your reference for the invoice, printed on the invoice and
             * PDF. The buyer's purchase order number goes in po_number. It cannot change after
             * issue. `null` when unset. anyOf[2] (Value): null.
             */
            "reference"?: ((string) | (null));
            /**
             * How much of the collected money has been refunded. It doesn't change status. Value
             * enum: "none", "partially_refunded", "refunded". anyOf[1] (Value): string. How much
             * of the collected money has been refunded. It doesn't change status. Value enum:
             * "none", "partially_refunded", "refunded". anyOf[2] (Value): null.
             */
            "refund_status"?: (("none" | "partially_refunded" | "refunded" | (string & {})) | (null));
            /**
             * Whether automatic reminders are paused. Set reminders_paused on PATCH
             * /v1/invoices/{invoice_id} to change it. anyOf[1] (Value): boolean. Whether automatic
             * reminders are paused. Set reminders_paused on PATCH /v1/invoices/{invoice_id} to
             * change it. anyOf[2] (Value): null.
             */
            "reminders_paused"?: ((boolean) | (null));
            /**
             * When automatic reminders were paused. Absent while reminders are active. anyOf[1]
             * (Value): string. When automatic reminders were paused. Absent while reminders are
             * active. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "reminders_paused_at"?: ((string) | (null));
            /**
             * Where the buyer sends offline payments, shown on the invoice. Defaults to the
             * invoice settings remit-to address. anyOf[1] (Value): {@link
             * AddressPreviousAttributes}. anyOf[2] (Value): null.
             */
            "remit_to_address"?: ((AddressPreviousAttributes) | (null));
            /**
             * The payment schedule, in schedule order. Always [] when the invoice has no schedule
             * and is collected in one balance. anyOf[1] (Value): Array of {@link
             * InvoiceScheduleEntryPreviousAttributes}. The payment schedule, in schedule order.
             * Always [] when the invoice has no schedule and is collected in one balance.
             * anyOf[1][] (Value): {@link InvoiceScheduleEntryPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "schedule_entries"?: ((Array<InvoiceScheduleEntryPreviousAttributes>) | (null));
            /**
             * When Flint will issue and deliver this draft. `null` when no issue is scheduled.
             * Cleared when the draft is issued or voided, or when you send null. anyOf[1] (Value):
             * string. When Flint will issue and deliver this draft. `null` when no issue is
             * scheduled. Cleared when the draft is issued or voided, or when you send null.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "scheduled_issue_at"?: ((string) | (null));
            /**
             * The calendar date of the billed service, in YYYY-MM-DD format. The invoice and PDF
             * print it as written, without timezone conversion. `null` when unset. anyOf[1]
             * (Value): string. The calendar date of the billed service, in YYYY-MM-DD format. The
             * invoice and PDF print it as written, without timezone conversion. `null` when unset.
             * Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
             */
            "service_date"?: ((string) | (null));
            /**
             * Payments, refunds, write-offs, allocated credit notes, late fees, and the remaining
             * invoice balance. What is still owed: pricing_amounts.total_money + late_fee_money -
             * paid_money - credited_money - written_off_money, never below zero. 0 on paid,
             * credited, uncollectible, and voided invoices; equal to pricing_amounts.total_money
             * on a draft. Refunds and card chargebacks don't change it. Lost bank returns reopen
             * the balance. anyOf[1] (Value): {@link InvoiceSettlementAmountsPreviousAttributes}.
             * anyOf[2] (Value): null.
             */
            "settlement_amounts"?: ((InvoiceSettlementAmountsPreviousAttributes) | (null));
            /**
             * The billing content of the invoice: line items, discounts, charges, tip, and tax. A
             * draft previews the backing order; issue freezes it, and later order changes don't
             * reach an issued invoice. anyOf[1] (Value): {@link
             * InvoiceSnapshotPreviousAttributes}. anyOf[2] (Value): null.
             */
            "snapshot"?: ((InvoiceSnapshotPreviousAttributes) | (null));
            /**
             * Current invoice status. paid and credited close the current balance and can reopen
             * to open or partially_paid after a payment or credit allocation reversal;
             * invoice.reopened reports that change. An uncollectible invoice accepts manual
             * recovery payments and becomes paid when fully recovered; reversals restore the
             * write-off. voided is final. Refunds change refund_status without reopening the
             * balance. An ACH bank return reverses paid_money and reopens the balance. A lost card
             * chargeback leaves paid_money, the balance, and status unchanged; collecting it again
             * requires a new invoice. Value enum: "draft", "open", "partially_paid", "paid",
             * "voided", "uncollectible", "credited". anyOf[1] (Value): string. Current invoice
             * status. paid and credited close the current balance and can reopen to open or
             * partially_paid after a payment or credit allocation reversal; invoice.reopened
             * reports that change. An uncollectible invoice accepts manual recovery payments and
             * becomes paid when fully recovered; reversals restore the write-off. voided is final.
             * Refunds change refund_status without reopening the balance. An ACH bank return
             * reverses paid_money and reopens the balance. A lost card chargeback leaves
             * paid_money, the balance, and status unchanged; collecting it again requires a new
             * invoice. Value enum: "draft", "open", "partially_paid", "paid", "voided",
             * "uncollectible", "credited". anyOf[2] (Value): null.
             */
            "status"?: (("draft"
                | "open"
                | "partially_paid"
                | "paid"
                | "voided"
                | "uncollectible"
                | "credited"
                | (string & {}))
                | (null));
            /**
             * The subscription the backing order belongs to, copied when the draft is created and
             * never changed. `null` when the order isn't part of a subscription. anyOf[1] (Value):
             * string. The subscription the backing order belongs to, copied when the draft is
             * created and never changed. `null` when the order isn't part of a subscription.
             * Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". anyOf[2] (Value): null.
             */
            "subscription_id"?: ((string) | (null));
            /**
             * Lifecycle actions Flint accepts for this resource now, based on stored state.
             * Independent of the caller's permissions; each action still requires its route's
             * scope. Always [] when no action is available. [] enum: "collect", "issue",
             * "mark_uncollectible", "void". anyOf[1] (Value): Array of string. Lifecycle actions
             * Flint accepts for this resource now, based on stored state. Independent of the
             * caller's permissions; each action still requires its route's scope. Always [] when
             * no action is available. [] enum: "collect", "issue", "mark_uncollectible", "void".
             * anyOf[1][] (Value): string. Value enum: "collect", "issue", "mark_uncollectible",
             * "void". anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"collect" | "issue" | "mark_uncollectible" | "void" | (string & {})>) | (null));
            /**
             * IANA time zone snapshot for invoice due dates, reminders, and late fee calendar
             * days. Taken from the merchant's timezone when the draft is written, or UTC when
             * unset. Later merchant changes do not alter this invoice's calendar. anyOf[1]
             * (Value): string. IANA time zone snapshot for invoice due dates, reminders, and late
             * fee calendar days. Taken from the merchant's timezone when the draft is written, or
             * UTC when unset. Later merchant changes do not alter this invoice's calendar.
             * anyOf[2] (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * When the invoice was marked uncollectible. anyOf[1] (Value): string. When the
             * invoice was marked uncollectible. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "uncollectible_at"?: ((string) | (null));
            /**
             * When the invoice last changed. anyOf[1] (Value): string. When the invoice last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Current invoice version. Send this as expected_version when updating the draft.
             * anyOf[1] (Value): integer. Current invoice version. Send this as expected_version
             * when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
            /**
             * When the buyer first opened the invoice through its hosted invoice link. Recorded on
             * a best-effort basis. anyOf[1] (Value): string. When the buyer first opened the
             * invoice through its hosted invoice link. Recorded on a best-effort basis. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "viewed_at"?: ((string) | (null));
            /**
             * When the invoice was voided. anyOf[1] (Value): string. When the invoice was voided.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "voided_at"?: ((string) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "invoice.collection_blocked". */
    "event_type"?: "invoice.collection_blocked";
});
/** The `buyer_initiated` variant of `InvoiceCollection`. */
export type InvoiceCollectionBuyerInitiated = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy": InvoicePaymentPolicy;
}));
export type InvoiceCollectionBuyerInitiatedPreviousAttributes = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum:
     * "buyer_initiated". anyOf[1] (Value): string. How the invoice is collected, resolved when the
     * draft was written. Value enum: "buyer_initiated". anyOf[2] (Value): null.
     */
    "mode"?: (("buyer_initiated" | (string & {})) | (null));
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * anyOf[1] (Value): string. The saved card Flint charges. Present only with automatic. `null`
     * when the draft will use the customer's default card, selected at issue. After issue it is
     * the selected card. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated.
     * anyOf[1] (Value): {@link InvoicePaymentPolicyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyPreviousAttributes) | (null));
})
    & ({
    /**
     * Value enum: "buyer_initiated". anyOf[1] (Value): string. Value enum: "buyer_initiated".
     * anyOf[2] (Value): null.
     */
    "mode"?: (("buyer_initiated" | (string & {})) | (null));
});
/** The `external` variant of `InvoiceCollection`. */
export type InvoiceCollectionExternal = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "external".
     */
    "mode": "external" | (string & {});
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated. Which
     * payment options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external" | (string & {});
}));
export type InvoiceCollectionExternalPreviousAttributes = ({
    /**
     * How the invoice is collected, resolved when the draft was written. Value enum: "external".
     * anyOf[1] (Value): string. How the invoice is collected, resolved when the draft was written.
     * Value enum: "external". anyOf[2] (Value): null.
     */
    "mode"?: (("external" | (string & {})) | (null));
    /**
     * The saved card Flint charges. Present only with automatic. `null` when the draft will use
     * the customer's default card, selected at issue. After issue it is the selected card.
     * anyOf[1] (Value): string. The saved card Flint charges. Present only with automatic. `null`
     * when the draft will use the customer's default card, selected at issue. After issue it is
     * the selected card. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     */
    "payment_method_id"?: ((string) | (null));
    /**
     * The payment options the hosted invoice page offers. Present only with buyer_initiated.
     * anyOf[1] (Value): {@link InvoicePaymentPolicyPreviousAttributes}. anyOf[2] (Value): null.
     */
    "payment_policy"?: ((InvoicePaymentPolicyPreviousAttributes) | (null));
})
    & ({
    /**
     * Value enum: "external". anyOf[1] (Value): string. Value enum: "external". anyOf[2] (Value):
     * null.
     */
    "mode"?: (("external" | (string & {})) | (null));
});
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomatic = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic" | (string & {});
}));
/** The `automatic` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputAutomaticInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "automatic".
     */
    "mode": "automatic";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "automatic". */
    "mode"?: "automatic";
})
    & (({
    "payment_policy"?: never;
})));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiated = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated" | (string & {});
}));
/** The `buyer_initiated` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputBuyerInitiatedInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "buyer_initiated".
     */
    "mode": "buyer_initiated";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "buyer_initiated". */
    "mode"?: "buyer_initiated";
})
    & (({
    "payment_method_id"?: never;
})));
/** The `external` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputExternalInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "external".
     */
    "mode": "external";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "external". */
    "mode"?: "external";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefault = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default" | (string & {});
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicy;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default" | (string & {});
}));
/** The `merchant_default` variant of `InvoiceCollectionInput`. */
export type InvoiceCollectionInputMerchantDefaultInput = ({
    /**
     * How the invoice is collected. merchant_default resolves when the draft is written, and reads
     * return the resolved mode. Value enum: "merchant_default".
     */
    "mode": "merchant_default";
    /**
     * The customer's saved card to charge. Accepted only with automatic. Without one, Flint
     * charges the customer's default card, selected when the invoice is issued. Send null to clear
     * it. minLength: 1. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     */
    "payment_method_id"?: string | null;
    /**
     * The payment options the hosted invoice page offers. Accepted only with buyer_initiated. An
     * explicit policy takes precedence over invoices.payment_policy, then checkout payment
     * options, then the platform default of card, apple_pay, and google_pay. Defaults resolve when
     * the draft is written; later settings changes do not change its stored policy. Wallets appear
     * only on supported devices over HTTPS with the payment domain registered. Which payment
     * options an invoice accepts, any per-option total limits, and whether to show a cost
     * comparison.
     */
    "payment_policy"?: InvoicePaymentPolicyRequestInput;
})
    & (({
    /** Value enum: "merchant_default". */
    "mode"?: "merchant_default";
})
    & (({
    "payment_method_id"?: never;
}) & ({
    "payment_policy"?: never;
})));
