<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass $merchant_account_session
 * @property-read string $method
 * @property-read string $reason_code
 * @property-read string $reason_message
 * @property-read list<string> $required_fields
 * @property-read string $required_scope
 * @property-read bool $requires_human_confirmation
 * @property-read int $suggested_delay_milliseconds
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $target_resource
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class NextActionInput extends Model {
    /** @param array{'action_type': string, 'expires_at'?: string|\DateTimeInterface, 'merchant_account_session'?: ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass, 'method'?: string, 'reason_code'?: string, 'reason_message'?: string, 'required_fields'?: list<string>, 'required_scope'?: string, 'requires_human_confirmation'?: bool, 'suggested_delay_milliseconds'?: int, 'target_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('NextActionInput')); }
    /** Action to take next. Use its target resource and required_fields to prepare the request. Value enum: "add_line_items", "cancel_payment_intent", "capture_payment_intent", "close_checkout_session", "close_order", "complete_gift_card_challenge", "confirm_payment_intent", "create_checkout_session_customer_verification", "create_dispute_response_session", "create_merchant_account_session", "create_refund", "get_api_key", "get_bundle", "get_category", "get_checkout_session", "get_credit_note", "get_custom_domain", "get_customer", "get_customer_address", "get_customer_deletion_request", "get_customer_email_change_request", "get_customer_tax_exemption", "get_customer_verification", "get_delivery_location_set", "get_delivery_method", "get_delivery_profile", "get_delivery_rate_callback", "get_delivery_selection", "get_delivery_zone", "get_device", "get_dispute", "get_file", "get_gift_card", "get_gift_card_notification", "get_gift_card_redemption", "get_inventory_count", "get_inventory_item", "get_inventory_level", "get_inventory_reservation", "get_inventory_transfer", "get_invoice", "get_invoice_manual_payment", "get_invoice_payment_term", "get_location", "get_me", "get_me_address", "get_me_email_preferences", "get_me_gift_card", "get_me_payment_method", "get_me_return", "get_me_subscription", "get_merchant", "get_merchant_signup", "get_modifier_group", "get_modifier_set", "get_onboarding_state", "get_operation", "get_order", "get_order_edit", "get_order_payment_attempt", "get_partner_app", "get_partner_app_credential", "get_partner_app_install", "get_payment_intent", "get_payment_link", "get_payment_link_public", "get_payment_method", "get_payment_method_domain", "get_payment_review", "get_payout", "get_payout_destination", "get_payout_settings", "get_price_list", "get_price_list_price", "get_product", "get_product_variant", "get_promotion", "get_promotion_code", "get_reader", "get_refund", "get_return", "get_return_line_item", "get_return_policy", "get_return_resolution", "get_risk_list", "get_risk_list_item", "get_risk_rule", "get_sandbox", "get_settings", "get_shipment", "get_subscription", "get_subscription_offer", "get_subscription_plan", "get_tax_calculation_callback", "get_tax_connection", "get_tax_registration", "get_test_clock", "get_ticket", "get_webhook_delivery", "get_webhook_endpoint", "get_workload_identity", "issue_developer_sandbox_test_key", "list_credit_note_allocations", "list_credit_notes", "list_fulfillments", "list_gift_card_funding_dispositions", "list_gift_card_loads", "list_gift_card_redemptions", "list_gift_card_transactions", "list_gift_cards", "list_inventory_counts", "list_inventory_movements", "list_inventory_receipts", "list_inventory_reservations", "list_inventory_transfers", "list_invoice_activities", "list_invoice_late_fees", "list_invoice_manual_payments", "list_invoice_payment_attempts", "list_invoices", "list_me_gift_cards", "list_me_remembered_buyers", "list_me_returns", "list_me_subscription_payment_retries", "list_merchant_partner_app_installs", "list_order_charges", "list_order_edits", "list_order_line_items", "list_order_payment_attempts", "list_package_items", "list_packages", "list_payment_intent_activities", "list_payouts", "list_product_variants", "list_refunds", "list_return_dispositions", "list_return_inspections", "list_return_reasons", "list_return_receipts", "list_return_resolutions", "list_returns", "list_shipments", "list_subscription_line_items", "list_subscription_payment_retries", "list_subscriptions", "pay_order", "payment_authentication", "recreate_delivery_quote", "review_merchant_readiness", "review_onboarding_state", "start_new_image_ingestion", "update_checkout_session", "update_delivery_profile", "update_inventory_allocation_policy", "update_invoice", "update_location", "update_order", "update_payment_link", "update_settings".
     * @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** When this suggested action expires, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Request body to send unchanged to POST /v1/merchant-account-sessions when action_type is create_merchant_account_session. When absent, GET merchant readiness and use its recommended session body. Shared request body for `create_merchant_account_session` next actions in readiness, onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection policy describe which requirements to collect.
     * @return ReadinessMerchantAccountSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_account_session is omitted; use hasMerchantAccountSession() or valueOrDefault().
     */
    public function getMerchantAccountSession(): mixed { return $this->get('merchant_account_session'); }
    public function hasMerchantAccountSession(): bool { return $this->has('merchant_account_session'); }
    /** HTTP method for the recovery read. Value enum: "GET".
     * @return string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): string { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Machine-readable reason this action is suggested.
     * @return string
     * @throws SdkError When reason_code is omitted; use hasReasonCode() or valueOrDefault().
     */
    public function getReasonCode(): string { return $this->get('reason_code'); }
    public function hasReasonCode(): bool { return $this->has('reason_code'); }
    /** Explanation of why this action is suggested.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Field names that must be supplied to perform this action. [] (Value): string.
     * @return list<string>
     * @throws SdkError When required_fields is omitted; use hasRequiredFields() or valueOrDefault().
     */
    public function getRequiredFields(): array { return $this->get('required_fields'); }
    public function hasRequiredFields(): bool { return $this->has('required_fields'); }
    /** API key scope required to call the public endpoint in url, when the action points at another Flint API endpoint. Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.allocation.write", "commerce.inventory.policies.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.returns.operations.write", "commerce.returns.policies.write", "commerce.returns.read", "commerce.returns.reasons.write", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read", "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.merchant_signups.read", "developer.merchant_signups.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "developer.test_clocks.read", "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payment_splits.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "money_movement.platform_fees.read", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.readers.read", "payments.readers.write", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     * @return string
     * @throws SdkError When required_scope is omitted; use hasRequiredScope() or valueOrDefault().
     */
    public function getRequiredScope(): string { return $this->get('required_scope'); }
    public function hasRequiredScope(): bool { return $this->has('required_scope'); }
    /** Whether a person must approve the action before it is performed.
     * @return bool
     * @throws SdkError When requires_human_confirmation is omitted; use hasRequiresHumanConfirmation() or valueOrDefault().
     */
    public function getRequiresHumanConfirmation(): bool { return $this->get('requires_human_confirmation'); }
    public function hasRequiresHumanConfirmation(): bool { return $this->has('requires_human_confirmation'); }
    /** Suggested wait before performing the action, in milliseconds. Format: int32.
     * @return int
     * @throws SdkError When suggested_delay_milliseconds is omitted; use hasSuggestedDelayMilliseconds() or valueOrDefault().
     */
    public function getSuggestedDelayMilliseconds(): int { return $this->get('suggested_delay_milliseconds'); }
    public function hasSuggestedDelayMilliseconds(): bool { return $this->has('suggested_delay_milliseconds'); }
    /** Resource whose ID to send in the target request field named {resource_type}_id when url cannot carry the target. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target_resource is omitted; use hasTargetResource() or valueOrDefault().
     */
    public function getTargetResource(): mixed { return $this->get('target_resource'); }
    public function hasTargetResource(): bool { return $this->has('target_resource'); }
    /** Public endpoint or launch URL for this remediation action, when applicable.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
