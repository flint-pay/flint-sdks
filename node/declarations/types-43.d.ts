import type { MoneyValue, NextAction } from './types-33.js';
import type { ResourceType } from './types-42.js';
import type { MetadataMap } from './types-32.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnDispositionRequestInput } from './types-3.js';
import type { BundleComponent } from './types-1.js';
import type { Image } from './types-21.js';
import type { OrderLineItemModifier } from './types-34.js';
import type {
    ReturnReasonSummary,
    ReturnResolutionLineItemRequest,
    ReturnReason,
    ReturnRestockingFeePolicy,
    ReturnPolicyScopeInput,
    ReturnRestockingFeePolicyInput
} from './types-44.js';
import type { SelectedProductOption } from './types-47.js';
import type { Address } from './types-0.js';
import type {
    ReturnSourceSystem,
    ReturnShippingPolicy,
    ReturnWindow,
    ReturnShippingPolicyInput,
    ReturnWindowInput
} from './types-45.js';
import type { DecideReturnInspectionLineItemRequestInput } from './types-12.js';
import type { Fulfillment } from './types-19.js';
import type { CreateReturnPolicyRequestInput } from './types-9.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-41.js';
import type { UpdateReturnPolicyRequestInput } from './types-52.js';
/**
 * Shape $ (Value): {@link ResponseWarning}. A non-blocking condition reported with a response. The
 * `code` identifies the condition and `severity` says how urgent it is.
 */
export type ResponseWarning = {
    /**
     * Shape $ (Value): string. Merchant capability for merchant_onboarding_deadline,
     * merchant_capability_pending, or merchant_capability_inactive. Value enum:
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
     * Shape $ (Value): string. Warning code. Clients must accept values added in future releases.
     * Value enum: "merchant_onboarding_past_due", "merchant_onboarding_deadline",
     * "merchant_capability_pending", "merchant_capability_inactive",
     * "payout_settings_reconciling", "promotion_declined", "promotion_removed",
     * "risk_rule_limit_reached", "rule_evaluation_stage_changed", "api_key_scopes_reduced".
     */
    "code": "merchant_onboarding_past_due"
        | "merchant_onboarding_deadline"
        | "merchant_capability_pending"
        | "merchant_capability_inactive"
        | "payout_settings_reconciling"
        | "promotion_declined"
        | "promotion_removed"
        | "risk_rule_limit_reached"
        | "rule_evaluation_stage_changed"
        | "api_key_scopes_reduced"
        | (string & {});
    /**
     * Shape $ (Value): string. Onboarding requirements deadline for merchant_onboarding_deadline,
     * or merchant_onboarding_past_due when a deadline is set. Format: date-time.
     */
    "current_deadline_at"?: string;
    /** Shape $ (Value): string. Description of the non-blocking condition. */
    "message": string;
    /**
     * Shape $ (Value): Array of {@link NextAction}. Suggested actions for addressing the warning.
     * Shape $[] (Value): {@link NextAction}. A suggested next step for resolving an error,
     * warning, or blocked state, such as the API operation to call or the scope it needs.
     */
    "next_actions"?: Array<NextAction>;
    /**
     * Shape $ (Value): string. Last synchronization time for merchant_onboarding_past_due,
     * merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive,
     * when available. Format: date-time.
     */
    "observed_at"?: string;
    /**
     * Shape $ (Value): string. Previous risk rule evaluation stage for
     * rule_evaluation_stage_changed. Value enum: "pre_authorization", "post_authorization".
     */
    "previous_stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Shape $ (Value): string. Promotion code that was accepted but did not apply, on a
     * promotion_declined warning, or the code of a removed promotion discount, on a
     * promotion_removed warning.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Stable Flint reason code. On a promotion_declined or
     * promotion_removed warning this is the promotion decline reason (for example
     * superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the
     * Promotions reference for the full list. Value enum: "already_applied", "automatic_disabled",
     * "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Requested scopes excluded from the issued API key for
     * api_key_scopes_reduced. [] enum: "accounts.api_keys.read", "accounts.api_keys.write",
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
    "removed_scopes"?: Array<"accounts.api_keys.read"
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
     * Shape $ (Value): string. Resource ID, paired with resource_type when the warning identifies
     * a resource.
     */
    "resource_id"?: string;
    /**
     * Shape $ (Value): string. Type of the resource identified by resource_id. Value enum:
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
     * "tax_connection", "tax_registration", "user", "webhook_delivery", "webhook_endpoint",
     * "webhook_event", "workload_identity".
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
        | "user"
        | "webhook_delivery"
        | "webhook_endpoint"
        | "webhook_event"
        | "workload_identity"
        | (string & {});
    /** Shape $ (Value): string. Warning severity. Value enum: "warning", "critical". */
    "severity": "warning" | "critical" | (string & {});
    /**
     * Shape $ (Value): string. New risk rule evaluation stage for rule_evaluation_stage_changed.
     * Value enum: "pre_authorization", "post_authorization".
     */
    "stage"?: "pre_authorization" | "post_authorization" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount this promotion would have applied had
     * it won, on a promotion_declined warning, or the amount a removed promotion discount applied
     * before removal, on a promotion_removed warning. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/**
 * Shape $ (Value): {@link RetryReturnDispositionRequest}. The request body for: Retry return
 * disposition.
 */
export type RetryReturnDispositionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "mapping_corrected",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnDispositionRequestInput}. The request body for: Retry return
 * disposition.
 */
export type RetryReturnDispositionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "mapping_corrected",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnResolutionRequest}. The request body for: Retry return
 * resolution.
 */
export type RetryReturnResolutionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "payment_method_updated",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link RetryReturnResolutionRequestInput}. The request body for: Retry return
 * resolution.
 */
export type RetryReturnResolutionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. Value enum: "dependency_recovered", "payment_method_updated",
     * "operator_retry", "other".
     */
    "reason": "dependency_recovered" | "payment_method_updated" | "operator_retry" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/** Shape $ (Value): {@link ReturnActivity}. One entry in a Return's merchant activity history. */
export type ReturnActivity = {
    /**
     * Shape $ (Value): string. Value enum: "return.canceled", "return.completed",
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
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "actor": ReturnActor;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): integer string. Canceled whole-number quantity; fractional quantities are
     * not supported. Present only for return_line_item.quantity_canceled. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "additional_merchandise_received", "automatic_receipt",
     * "buyer_payment", "buyer_request", "buyer_selection", "changed_disposition",
     * "correction_required", "created_in_error", "customer_service", "customer_service_exception",
     * "dependency_recovered", "duplicate", "duplicate_observation", "entry_error",
     * "evidence_missing", "exception_resolved", "exception_waived", "expired",
     * "inspection_confirmed", "inspection_result", "inventory_effect_failed",
     * "inventory_item_unmapped", "linked_effect_changed", "linked_effect_retry",
     * "manual_completion", "manual_correction", "manual_release", "manual_review",
     * "mapping_corrected", "merchant_approved", "merchant_discretion", "merchant_request",
     * "merchant_review", "not_eligible", "operator_retry", "order_match_confirmed", "other",
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
        | "buyer_selection"
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
        | "linked_effect_retry"
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
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "resource_id": string;
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
    "resource_type": ResourceType;
    /** Shape $ (Value): string. */
    "return_activity_id": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /**
     * Shape $ (Value): integer string. Return version produced by this activity. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
 * integration, or the system, with an optional ID.
 */
export type ReturnActor = {
    /** Shape $ (Value): string. */
    "actor_id"?: string;
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration", "system". */
    "actor_type": "buyer" | "merchant" | "integration" | "system" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
 * complete, with the return line or record it concerns.
 */
export type ReturnCompletionBlocker = {
    /**
     * Shape $ (Value): string. What is still owed before this Return can complete. Each blocker
     * names the Return line it belongs to and, where one exists, the receipt, inspection,
     * disposition, or resolution holding it up. An empty completion_blockers array means nothing
     * is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending",
     * "inspection_pending", "inspection_review_required", "disposition_required",
     * "resolution_not_selected", "resolution_pending", "resolution_requires_action",
     * "resolution_failed", "merchandise_exception".
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
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_inspection_id"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
 * handled.
 */
export type ReturnDisposition = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "cancellation_reason"?: "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
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
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Reason code for a failed merchandise disposition, when available.
     * Value enum: "inventory_effect_failed", "inventory_item_unmapped".
     */
    "failure_code"?: "inventory_effect_failed" | "inventory_item_unmapped" | (string & {});
    /** Shape $ (Value): string. Explanation of a failed merchandise disposition, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. */
    "inventory_location_id"?: string;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "inventory_movement_ids": Array<string>;
    /** Shape $ (Value): string. */
    "inventory_receipt_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "replaced_by_return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "replaces_return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_disposition_id": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "succeeded", "failed", "canceled". */
    "status": "pending" | "succeeded" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open. cancel is listed only before the inventory effect starts. [] enum: "cancel",
     * "retry". Shape $[] (Value): string. Value enum: "cancel", "retry".
     */
    "supported_actions": Array<"cancel" | "retry" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
export type ReturnDispositionsCancelInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CancelReturnDispositionRequestInput}. The request body for: Cancel
     * return disposition.
     */
    "body": InputValue<CancelReturnDispositionRequestInput>;
};
export type ReturnDispositionsGetInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
};
export type ReturnDispositionsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "sellable", "quality_control",
     * "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate", "discard",
     * "return_to_buyer", "lost". Shape $[] (Value): string. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined", "repair", "refurbish", "liquidate", "donate",
     * "discard", "return_to_buyer", "lost".
     */
    "disposition_type"?: InputValue<Array<"sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "replaces_return_disposition_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "succeeded", "failed",
     * "canceled". Shape $[] (Value): string. Value enum: "pending", "succeeded", "failed",
     * "canceled".
     */
    "status"?: InputValue<Array<"pending" | "succeeded" | "failed" | "canceled">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type ReturnDispositionsRetryInput = {
    /** Shape $ (Value): string. */
    "return_disposition_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link RetryReturnDispositionRequestInput}. The request body for: Retry
     * return disposition.
     */
    "body": InputValue<RetryReturnDispositionRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
 * return_reason_id is optional here; when you send it, Flint checks that the reason is active and
 * applies to the line.
 */
export type ReturnEligibilityLineItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to
 * check. return_reason_id is optional here; when you send it, Flint checks that the reason is
 * active and applies to the line.
 */
export type ReturnEligibilityLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilityPreview}. The result of checking whether an order's
 * items can be returned: overall status, per-line eligibility, and the policy evaluation.
 */
export type ReturnEligibilityPreview = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at": string;
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityPreviewLineItem}. Shape $[] (Value):
     * {@link ReturnEligibilityPreviewLineItem}. Return eligibility for one order line item, with
     * the line's details, suggested return reasons, and whether self-service returns are enabled.
     */
    "line_items": Array<ReturnEligibilityPreviewLineItem>;
    /** Shape $ (Value): string. */
    "order_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return
     * request: overall status and reason, the policy revision used, and per-line results.
     */
    "policy_evaluation": ReturnPolicyEvaluation;
    /**
     * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
     * eligibility: all remaining fulfilled lines, or a specific list of lines.
     */
    "selection": ReturnEligibilitySelection;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnEligibilityPreviewLineItem}. Return eligibility for one order line
 * item, with the line's details, suggested return reasons, and whether self-service returns are
 * enabled.
 */
export type ReturnEligibilityPreviewLineItem = {
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): boolean. Whether the buyer can request this line themselves, through a
     * customer session, right now. False when no policy covers the item, when it is not eligible,
     * or when the store offers no reason for it. Read eligibility.reason and ineligibility_reason
     * to say why.
     */
    "can_buyer_request": boolean;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
     * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnReasonSummary}. Active reasons that apply to this
     * item, up to 20. Category-scoped reasons come first, then reasons that apply to every item.
     * Each group sorts by handle ascending, with return_reason_id ascending as the tiebreak.
     * maxItems: 20. Shape $[] (Value): {@link ReturnReasonSummary}. A return reason a buyer can
     * pick for a line, with its `handle` and whether a note is required.
     */
    "suggested_return_reasons": Array<ReturnReasonSummary>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnEligibilitySelection}. Which order lines to check for return
 * eligibility: all remaining fulfilled lines, or a specific list of lines.
 */
export type ReturnEligibilitySelection = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items" | (string & {});
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilled & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItems & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionAllRemainingFulfilled}. The
 * `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionAllRemainingFulfilled = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled" | (string & {});
})
    & (({
    /** Shape $ (Value): any.  Value enum: "all_remaining_fulfilled". */
    "selection_type": unknown;
}));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionAllRemainingFulfilledInput}. The
 * `all_remaining_fulfilled` variant of `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionAllRemainingFulfilledInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & (({
    /** Shape $ (Value): any.  Value enum: "all_remaining_fulfilled". */
    "selection_type": "all_remaining_fulfilled";
})
    & ({
    "line_items"?: never;
}));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionInput}. Which order lines to check for return
 * eligibility: all remaining fulfilled lines, or a specific list of lines.
 */
export type ReturnEligibilitySelectionInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items"?: Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled", "line_items". */
    "selection_type": "all_remaining_fulfilled" | "line_items";
})
    & ((Exclude<ReturnEligibilitySelectionAllRemainingFulfilledInput & object, readonly unknown[]>)
    | (Exclude<ReturnEligibilitySelectionLineItemsInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionLineItems}. The `line_items` variant of
 * `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionLineItems = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequest}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequest}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequest>;
    /** Shape $ (Value): string.  Value enum: "line_items". */
    "selection_type": "line_items" | (string & {});
})
    & ({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /** Shape $ (Value): any.  Value enum: "line_items". */
    "selection_type": unknown;
});
/**
 * Shape $ (Value): {@link ReturnEligibilitySelectionLineItemsInput}. The `line_items` variant of
 * `ReturnEligibilitySelection`.
 */
export type ReturnEligibilitySelectionLineItemsInput = ({
    /**
     * Shape $ (Value): Array of {@link ReturnEligibilityLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnEligibilityLineItemRequestInput}. An order line and quantity to check.
     * return_reason_id is optional here; when you send it, Flint checks that the reason is active
     * and applies to the line.
     */
    "line_items": Array<ReturnEligibilityLineItemRequestInput>;
    /** Shape $ (Value): string.  Value enum: "line_items". */
    "selection_type": "line_items";
})
    & ({
    /** Shape $ (Value): any. minItems: 1. */
    "line_items": unknown;
    /** Shape $ (Value): any.  Value enum: "line_items". */
    "selection_type": "line_items";
});
/**
 * Shape $ (Value): {@link ReturnFinancialSummary}. The money for a return: returned value,
 * deductions, credits, replacement total, and amounts due to or from the buyer.
 */
export type ReturnFinancialSummary = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Balances collected from the buyer. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Credits added by confirmed, non-canceled resolutions.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Fees withheld by confirmed, non-canceled resolutions.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Balances the buyer owes on confirmed, non-canceled
     * resolutions whose payment has not succeeded. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "due_from_buyer_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Refund amounts on confirmed, non-canceled resolutions
     * whose Refund has not succeeded. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "due_to_buyer_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Refund amounts that succeeded. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value of replacement merchandise on confirmed,
     * non-canceled resolutions. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.discount_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.subtotal_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.tax_money across the Return's line
     * items. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "returned_tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Sum of return_value.total_money across the Return's
     * line items. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ReturnHandoffDestination}. Where the buyer sends returned merchandise:
 * their own address, a merchant location, or an external location.
 */
export type ReturnHandoffDestination = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): string.  Value enum: "buyer_address", "location", "external_location". */
    "destination_type": "buyer_address" | "location" | "external_location" | (string & {});
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "name"?: string;
};
/**
 * Shape $ (Value): {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise
 * back: the destination, instructions, line items, and expiry.
 */
export type ReturnHandoffRequirement = {
    /**
     * Shape $ (Value): {@link ReturnHandoffDestination}. Where the buyer sends returned
     * merchandise: their own address, a merchant location, or an external location.
     */
    "destination": ReturnHandoffDestination;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "instructions"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItemRequest}. Shape $[] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity the buyer must hand back.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "shipment_count"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Whether the buyer has started sending merchandise back. A
     * requirement leaves handoff_requirements entirely once it is satisfied, so there is no
     * terminal status and an empty array means nothing is waiting on the buyer. Value enum:
     * "pending", "in_progress".
     */
    "status": "pending" | "in_progress" | (string & {});
};
/** Shape $ (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
export type ReturnInspection = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "correction_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "inspected_at": string;
    /**
     * Shape $ (Value): string. Location where the returned merchandise was inspected. Must match
     * the receipt receiving_location_id.
     */
    "inspection_location_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnInspectionLineItem}. Shape $[] (Value): {@link
     * ReturnInspectionLineItem}. The inspection result for a returned item.
     */
    "line_items": Array<ReturnInspectionLineItem>;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_id": string;
    /** Shape $ (Value): string. */
    "return_receipt_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /** Shape $ (Value): string.  Value enum: "current", "superseded". */
    "status": "current" | "superseded" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "superseded_at"?: string;
    /** Shape $ (Value): string. */
    "superseded_by_return_inspection_id"?: string;
    /** Shape $ (Value): string. */
    "supersedes_return_inspection_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ReturnInspectionLineItem}. The inspection result for a returned item. */
export type ReturnInspectionLineItem = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "acceptance_decided_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "acceptance_decided_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy", "manual_review",
     * "other".
     */
    "acceptance_decision_reason"?: "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "acceptance_decision_reason_message"?: string;
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "available_disposition_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes": Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Shape $ (Value): string. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_inspection_id": string;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): Array of string. [] enum: "decide". Shape $[] (Value): string. Value enum:
     * "decide".
     */
    "supported_actions": Array<"decide" | (string & {})>;
};
/**
 * Shape $ (Value): {@link ReturnInspectionLineItemRequest}. The inspection result for one received
 * return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequest = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnInspectionLineItemRequestInput}. The inspection result for one
 * received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequestInput = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "verification_reason_message"?: string;
};
export type ReturnInspectionsDecideLineItemInput = {
    /** Shape $ (Value): string. */
    "return_inspection_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_inspection_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link DecideReturnInspectionLineItemRequestInput}. The request body for:
     * Decide return inspection line item.
     */
    "body": InputValue<DecideReturnInspectionLineItemRequestInput>;
};
export type ReturnInspectionsGetInput = {
    /** Shape $ (Value): string. */
    "return_inspection_id": InputValue<string>;
};
export type ReturnInspectionsListInput = {
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "accepted", "rejected",
     * "review_required". Shape $[] (Value): string. Value enum: "accepted", "rejected",
     * "review_required".
     */
    "acceptance_status"?: InputValue<Array<"accepted" | "rejected" | "review_required">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "inspected_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "inspected_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "inspection_location_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_receipt_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp",
     * "other", "flint". Shape $[] (Value): string. Value enum: "manual", "pos", "wms", "erp",
     * "other", "flint".
     */
    "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "current", "superseded". Shape $[]
     * (Value): string. Value enum: "current", "superseded".
     */
    "status"?: InputValue<Array<"current" | "superseded">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Shape $ (Value): {@link ReturnLineDecision}. Start from the pinned policy proposal recomputed
 * for approved_quantity when the line has a policy evaluation and the proposal can be built.
 * Otherwise start with return_required_quantity equal to approved_quantity,
 * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
 * store_credit in that order regardless of whether the original payment is refundable, no
 * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
 * supplied field replaces its starting value; allowed_resolution_types replaces the whole list.
 * Omit automatic_resolution_type to keep its starting value, or send null to resolve manually.
 * Then fill an omitted release_timing with after_inspection when merchandise is required and
 * inspection is required, after_receipt when merchandise is required without inspection, or
 * after_approval when no merchandise is required. Validate the merged decision for quantity
 * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
 * policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecision = ({
    /**
     * Shape $ (Value): Array of string. Optional replacement for the entire starting list.
     * Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order, independent of the original payment's
     * refundability. The resulting list must be valid and non-empty when approved_quantity is
     * above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". Shape $[] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Required whole-number quantity from zero through the line's
     * requested_quantity; fractional quantities are not supported. When approved_quantity is below
     * requested_quantity, send decline_reason; decline_reason_message is optional. Both decline
     * fields are forbidden when all requested quantity is approved. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string or null. Optional refund, store_credit, or no_monetary_action that
     * Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the
     * absent value from no-policy defaults. Send null to resolve the line manually; clearing a
     * policy proposal's automatic value requires override_reason. Must be in the resulting
     * allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable
     * automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason
     * refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit",
     * "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Optional explanation accompanying decline_reason, up to 2048
     * characters (Unicode code points), counted before normalization. Requires decline_reason and
     * is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): boolean. Optional inspection requirement. Defaults to the buildable pinned
     * policy proposal or false when no proposal can be built. The resulting requirement must be
     * reachable with the merged merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Optional explanation accompanying override_reason. Requires
     * override_reason and is forbidden without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Shape $ (Value): string. Optional receiving Location with a postal address. Defaults to the
     * buildable pinned policy proposal or no location when no proposal can be built. Required when
     * the resulting return_required_quantity is above zero and there is no starting location. A
     * process receipt does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Optional gate for every resolution type. Defaults to the policy
     * proposal's timing when set. After merging supplied fields, an unset timing becomes
     * after_inspection when return_required_quantity is above zero and inspection is required,
     * after_receipt when return_required_quantity is above zero without inspection, or
     * after_approval when return_required_quantity is zero. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: `${bigint}`;
})
    & (((unknown)
    | ({
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)))
    & (((unknown)
    | ({
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason": "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)));
/**
 * Shape $ (Value): {@link ReturnLineDecisionInput}. Start from the pinned policy proposal
 * recomputed for approved_quantity when the line has a policy evaluation and the proposal can be
 * built. Otherwise start with return_required_quantity equal to approved_quantity,
 * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
 * store_credit in that order regardless of whether the original payment is refundable, no
 * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
 * supplied field replaces its starting value; allowed_resolution_types replaces the whole list.
 * Omit automatic_resolution_type to keep its starting value, or send null to resolve manually.
 * Then fill an omitted release_timing with after_inspection when merchandise is required and
 * inspection is required, after_receipt when merchandise is required without inspection, or
 * after_approval when no merchandise is required. Validate the merged decision for quantity
 * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
 * policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecisionInput = ({
    /**
     * Shape $ (Value): Array of string. Optional replacement for the entire starting list.
     * Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order, independent of the original payment's
     * refundability. The resulting list must be valid and non-empty when approved_quantity is
     * above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". Shape $[] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): integer string. Required whole-number quantity from zero through the line's
     * requested_quantity; fractional quantities are not supported. When approved_quantity is below
     * requested_quantity, send decline_reason; decline_reason_message is optional. Both decline
     * fields are forbidden when all requested quantity is approved. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "approved_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Optional refund, store_credit, or no_monetary_action that
     * Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the
     * absent value from no-policy defaults. Send null to resolve the line manually; clearing a
     * policy proposal's automatic value requires override_reason. Must be in the resulting
     * allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable
     * automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason
     * refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit",
     * "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying decline_reason, up to 2048
     * characters (Unicode code points), counted before normalization. Requires decline_reason and
     * is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): boolean. Optional inspection requirement. Defaults to the buildable pinned
     * policy proposal or false when no proposal can be built. The resulting requirement must be
     * reachable with the merged merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying override_reason. Requires
     * override_reason and is forbidden without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Shape $ (Value): string. Optional receiving Location with a postal address. Defaults to the
     * buildable pinned policy proposal or no location when no proposal can be built. Required when
     * the resulting return_required_quantity is above zero and there is no starting location. A
     * process receipt does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Optional gate for every resolution type. Defaults to the policy
     * proposal's timing when set. After merging supplied fields, an unset timing becomes
     * after_inspection when return_required_quantity is above zero and inspection is required,
     * after_receipt when return_required_quantity is above zero without inspection, or
     * after_approval when return_required_quantity is zero. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: `${bigint}` | bigint;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
})))
    & (((({
    "override_reason_message"?: never;
}))
    | ({
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/** Shape $ (Value): {@link ReturnLineItem}. An item included in a return request. */
export type ReturnLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "accepted_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action resolution Flint
     * creates and confirms automatically. Absent when the merchant resolves manually. Example:
     * "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Approved quantity that can still be assigned to a new
     * resolution. Every non-canceled resolution reserves its line quantity, including proposed,
     * pending, action-required, failed, and fulfilled resolutions. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "available_resolution_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "canceled_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "declined_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "dispositioned_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
     * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Shape $ (Value): {@link Fulfillment} or null. Shape $.anyOf[1] (Value): {@link Fulfillment}.
     * Work required to deliver an order's items. Shape $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "handed_off_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "inspected_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "inspection_waived_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "inspection_waiver_reason_message"?: string;
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_policy_overridden": boolean;
    /**
     * Shape $ (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
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
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "overridden_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "customer_service_exception", "policy_correction",
     * "risk_review", "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "override_reason_message"?: string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "rejected_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Committed resolution execution gate, filled for every approved
     * line: after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when merchandise is not
     * required, unless the policy or decision sets a timing explicitly. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "resolved_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): {@link ReturnReason} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnReason}. A reason customers can select when requesting a return. Shape $.anyOf[2]
     * (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /** Shape $ (Value): string. */
    "return_reason_handle": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
    /** Shape $ (Value): string. */
    "return_reason_name": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "return_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. IDs of the resolutions that include this line, oldest
     * first, including failed and canceled resolutions. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "review_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel", "waive_inspection". Shape $[] (Value):
     * string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision recomputed
 * for based_on_quantity. A decide with only approved_quantity commits these values. Policy
 * automatic resolution selects the policy automatic_resolution_type for policy_default or the
 * line's requested_resolution_type for buyer_requested. When buyer_requested has no
 * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
 * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset
 * release_timing is filled with after_inspection when merchandise and inspection are required,
 * after_receipt when merchandise is required without inspection, or after_approval when no
 * merchandise is required.
 */
export type ReturnLineItemDecisionProposal = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action that Flint creates
     * and confirms automatically, using the policy default or buyer request according to the
     * policy selection mode. Absent for manual resolution, including buyer_requested when the line
     * has no requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "based_on_quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. The policy timing, or after_inspection when merchandise and
     * inspection are required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. This fill never counts as a policy
     * deviation. Applies to every resolution type, including exchanges and replacements. manual is
     * held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum:
     * "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "return_required_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
 * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision
     * recomputed for based_on_quantity. A decide with only approved_quantity commits these values.
     * Policy automatic resolution selects the policy automatic_resolution_type for policy_default
     * or the line's requested_resolution_type for buyer_requested. When buyer_requested has no
     * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
     * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An
     * unset release_timing is filled with after_inspection when merchandise and inspection are
     * required, after_receipt when merchandise is required without inspection, or after_approval
     * when no merchandise is required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnLineItemRequest}. An order line item to return, with the quantity,
 * return reason, and optionally a note and the resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id": string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with the
 * quantity, return reason, and optionally a note and the resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id": string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price, subtotal,
 * discount, tax, and total.
 */
export type ReturnLineItemValue = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type ReturnPoliciesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnPolicyRequestInput}. The request body for: Create return
     * policy.
     */
    "body": InputValue<CreateReturnPolicyRequestInput>;
};
export type ReturnPoliciesGetInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "current_revision". Shape $[] (Value): string.
     * Value enum: "current_revision".
     */
    "expand"?: InputValue<Array<"current_revision">>;
};
export type ReturnPoliciesGetRevisionInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_policy_revision_id": InputValue<string>;
};
export type ReturnPoliciesListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "current_revision". Shape $[] (Value): string.
     * Value enum: "current_revision".
     */
    "expand"?: InputValue<Array<"current_revision">>;
};
export type ReturnPoliciesListRevisionsInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type ReturnPoliciesPublishRevisionInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link PublishReturnPolicyRevisionRequestInput}. The request body for:
     * Publish return policy revision.
     */
    "body": InputValue<PublishReturnPolicyRevisionRequestInput>;
};
export type ReturnPoliciesRemoveInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReturnPoliciesUpdateInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnPolicyRequestInput}. The request body for: Update return
     * policy.
     */
    "body": InputValue<UpdateReturnPolicyRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can be
 * returned.
 */
export type ReturnPolicy = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "current_return_policy_revision_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevision} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy. Shape $.anyOf[2] (Value): null.
     */
    "current_revision"?: ((ReturnPolicyRevision) | (null));
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "return_policy_id": string;
    /**
     * Shape $ (Value): string. active policies apply to new Returns; inactive policies do not.
     * Toggle active and inactive with PATCH status. Retire either with DELETE
     * /v1/return-policies/{return_policy_id}. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
 * proposes for a line, calculated as a flat amount or a percent.
 */
export type ReturnPolicyAdjustmentProposal = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "based_on_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "calculated_amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return request:
 * overall status and reason, the policy revision used, and per-line results.
 */
export type ReturnPolicyEvaluation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyEvaluationLineItem}. Shape $[] (Value): {@link
     * ReturnPolicyEvaluationLineItem}. The policy result for one return line: status, eligible
     * quantity, allowed resolution types, and handling requirements such as inspection.
     */
    "line_items": Array<ReturnPolicyEvaluationLineItem>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnPolicyEvaluationLineItem}. The policy result for one return line:
 * status, eligible quantity, allowed resolution types, and handling requirements such as
 * inspection.
 */
export type ReturnPolicyEvaluationLineItem = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "suggested_return_reason_ids": Array<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/** Shape $ (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
export type ReturnPolicyRevision = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "effective_at"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** Shape $ (Value): string. */
    "return_policy_id": string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id": string;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
};
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputIneligible}. The `ineligible` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputIneligible = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "ineligible". */
    "eligibility_result": unknown;
}));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputIneligibleInput}. The `ineligible` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputIneligibleInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "ineligible". */
    "eligibility_result": "ineligible";
})
    & (({
    "allowed_resolution_types"?: never;
})
    & ({
    "resolution_mode"?: never;
})
    & ({
    "release_timing"?: never;
})
    & ({
    "completion_mode"?: never;
})));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputReturnable}. The `eligible` variant of
 * `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnable = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "review_required".
     */
    "eligibility_result": "eligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligible", "review_required". */
    "eligibility_result": unknown;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
})
    & (((({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode"?: unknown;
}))
    | ({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "resolution_mode"?: unknown;
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested" | (string & {});
})
    | (Record<string, unknown>)))
    & ((({
    /** Shape $ (Value): any.  Value enum: false. */
    "is_merchandise_return_required"?: unknown;
})
    | ({
    /** Shape $ (Value): any.  Value enum: true. */
    "is_merchandise_return_required"?: unknown;
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
})
    | (Record<string, unknown>))));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputReturnableInput}. The `eligible` variant of
 * `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnableInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "review_required".
     */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligible", "review_required". */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
})
    & (((({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode"?: "manual";
})
    & (({
    "resolution_selection_mode"?: never;
}) & ({
    "automatic_resolution_type"?: never;
})))
    | ({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "resolution_mode"?: "automatic";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested";
})))
    & ((({
    /** Shape $ (Value): any.  Value enum: false. */
    "is_merchandise_return_required"?: false;
})
    | ({
    /** Shape $ (Value): any.  Value enum: true. */
    "is_merchandise_return_required"?: true;
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
}))));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionRequest}. The rules for a return policy revision:
 * scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequest = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligible & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionRequestInput}. The rules for a return policy
 * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
 * restocking fee.
 */
export type ReturnPolicyRevisionRequestInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligibleInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnableInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
 * locations a return policy revision applies to, or all of them.
 */
export type ReturnPolicyScope = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. all covers every item and requires every selector to be empty.
     * include covers only what the selectors name and requires at least one nonempty selector.
     * Value enum: "all", "include".
     */
    "match_type": "all" | "include" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAll & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeInclude & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link ReturnPolicyScopeAll}. The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAll = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. all covers every item and requires every selector to be empty.
     * include covers only what the selectors name and requires at least one nonempty selector.
     * Value enum: "all".
     */
    "match_type": "all" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ({
    /** Shape $ (Value): any. maxItems: 0. */
    "category_handles"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "channel_types"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "location_ids"?: unknown;
    /** Shape $ (Value): any.  Value enum: "all". */
    "match_type": unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "product_ids"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "variant_ids"?: unknown;
});
/** Shape $ (Value): {@link ReturnPolicyScopeAllInput}. The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAllInput = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. all covers every item and requires every selector to be empty.
     * include covers only what the selectors name and requires at least one nonempty selector.
     * Value enum: "all".
     */
    "match_type": "all";
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ({
    /** Shape $ (Value): any. maxItems: 0. */
    "category_handles"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "channel_types"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "location_ids"?: unknown;
    /** Shape $ (Value): any.  Value enum: "all". */
    "match_type": "all";
    /** Shape $ (Value): any. maxItems: 0. */
    "product_ids"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "variant_ids"?: unknown;
});
/**
 * Shape $ (Value): {@link ReturnPolicyScopeInclude}. The `include` variant of `ReturnPolicyScope`.
 */
export type ReturnPolicyScopeInclude = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. all covers every item and requires every selector to be empty.
     * include covers only what the selectors name and requires at least one nonempty selector.
     * Value enum: "include".
     */
    "match_type": "include" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "include". */
    "match_type": unknown;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "category_handles": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "channel_types": unknown;
})
    | (Record<string, unknown>)));
