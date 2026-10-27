<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $capability
 * @property-read string $code
 * @property-read string|\DateTimeInterface $current_deadline_at
 * @property-read string $message
 * @property-read list<NextActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string|\DateTimeInterface $observed_at
 * @property-read string $previous_stage
 * @property-read string $promotion_code
 * @property-read string $reason
 * @property-read list<string> $removed_scopes
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read string $severity
 * @property-read string $stage
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $would_have_applied_money
 * Presence-aware input; omitted fields throw when accessed. */
final class ResponseWarningInput extends Model {
    /** @param array{'capability'?: string, 'code': string, 'current_deadline_at'?: string|\DateTimeInterface, 'message': string, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'observed_at'?: string|\DateTimeInterface, 'previous_stage'?: string, 'promotion_code'?: string, 'reason'?: string, 'removed_scopes'?: list<string>, 'resource_id'?: string, 'resource_type'?: string, 'severity': string, 'stage'?: string, 'would_have_applied_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResponseWarningInput')); }
    /** Shape $ (Value): string. Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     * @return string
     * @throws SdkError When capability is omitted; use hasCapability() or valueOrDefault().
     */
    public function getCapability(): string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Shape $ (Value): string. Warning code. Clients must accept values added in future releases. Value enum: "merchant_onboarding_past_due", "merchant_onboarding_deadline", "merchant_capability_pending", "merchant_capability_inactive", "payout_settings_reconciling", "promotion_declined", "promotion_removed", "risk_rule_limit_reached", "rule_evaluation_stage_changed", "api_key_scopes_reduced".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. Onboarding requirements deadline for merchant_onboarding_deadline, or merchant_onboarding_past_due when a deadline is set. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When current_deadline_at is omitted; use hasCurrentDeadlineAt() or valueOrDefault().
     */
    public function getCurrentDeadlineAt(): string|\DateTimeInterface { return $this->get('current_deadline_at'); }
    public function hasCurrentDeadlineAt(): bool { return $this->has('current_deadline_at'); }
    /** Shape $ (Value): string. Description of the non-blocking condition.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): Array of {@see NextActionInput}. Suggested actions for addressing the warning. Shape $[] (Value): {@see NextActionInput}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.
     * @return list<NextActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Shape $ (Value): string. Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive, when available. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When observed_at is omitted; use hasObservedAt() or valueOrDefault().
     */
    public function getObservedAt(): string|\DateTimeInterface { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Shape $ (Value): string. Previous risk rule evaluation stage for rule_evaluation_stage_changed. Value enum: "pre_authorization", "post_authorization".
     * @return string
     * @throws SdkError When previous_stage is omitted; use hasPreviousStage() or valueOrDefault().
     */
    public function getPreviousStage(): string { return $this->get('previous_stage'); }
    public function hasPreviousStage(): bool { return $this->has('previous_stage'); }
    /** Shape $ (Value): string. Promotion code that was accepted but did not apply, on a promotion_declined warning, or the code of a removed promotion discount, on a promotion_removed warning.
     * @return string
     * @throws SdkError When promotion_code is omitted; use hasPromotionCode() or valueOrDefault().
     */
    public function getPromotionCode(): string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Shape $ (Value): string. Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the promotion decline reason (for example superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the Promotions reference for the full list. Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch", "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): Array of string. Requested scopes excluded from the issued API key for api_key_scopes_reduced. [] enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.inventory_locations.write", "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.return_policies.write", "commerce.return_reasons.write", "commerce.returns.operations.write", "commerce.returns.read", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write". Shape $[] (Value): string.  Value enum: "accounts.api_keys.read", "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write", "accounts.organizations.read", "accounts.organizations.write", "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read", "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write", "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read", "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write", "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read", "commerce.delivery.write", "commerce.gift_cards.adjustments.write", "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write", "commerce.gift_cards.secrets.write", "commerce.gift_cards.write", "commerce.inventory.read", "commerce.inventory.write", "commerce.inventory_locations.write", "commerce.inventory_policies.write", "commerce.invoices.read", "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write", "commerce.products.read", "commerce.products.write", "commerce.promotions.read", "commerce.promotions.write", "commerce.refunds.read", "commerce.refunds.tax_overrides.write", "commerce.refunds.write", "commerce.return_policies.write", "commerce.return_reasons.write", "commerce.returns.operations.write", "commerce.returns.read", "commerce.returns.resolutions.write", "commerce.returns.write", "commerce.subscription_plans.read", "commerce.subscription_plans.write", "commerce.subscriptions.read", "commerce.subscriptions.write", "customers.read", "customers.sessions.write", "customers.write", "developer.feedback_reports.read", "developer.feedback_reports.write", "developer.partner_apps.read", "developer.partner_apps.write", "developer.request_logs.read", "developer.request_logs.self.read", "developer.resource_timelines.read", "developer.sandboxes.read", "developer.sandboxes.write", "merchant_billing.read", "merchants.account_sessions.write", "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read", "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write", "money_movement.balance_transactions.read", "money_movement.balances.read", "money_movement.payout_settings.read", "money_movement.payout_settings.write", "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read", "payments.disputes.write", "payments.payment_intents.read", "payments.payment_intents.write", "payments.payment_method_domains.read", "payments.payment_method_domains.write", "payments.payment_methods.read", "payments.payment_methods.write", "payments.payment_options.read", "reports.read", "reports.write", "risk.controls.write", "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read", "webhooks.write".
     * @return list<string>
     * @throws SdkError When removed_scopes is omitted; use hasRemovedScopes() or valueOrDefault().
     */
    public function getRemovedScopes(): array { return $this->get('removed_scopes'); }
    public function hasRemovedScopes(): bool { return $this->has('removed_scopes'); }
    /** Shape $ (Value): string. Resource ID, paired with resource_type when the warning identifies a resource.
     * @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): string. Type of the resource identified by resource_id. Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_email_preferences", "customer_session", "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "organization", "package", "package_item", "partner_app", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): string. Warning severity. Value enum: "warning", "critical".
     * @return string
     * @throws SdkError When severity is omitted; use hasSeverity() or valueOrDefault().
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
    /** Shape $ (Value): string. New risk rule evaluation stage for rule_evaluation_stage_changed. Value enum: "pre_authorization", "post_authorization".
     * @return string
     * @throws SdkError When stage is omitted; use hasStage() or valueOrDefault().
     */
    public function getStage(): string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When would_have_applied_money is omitted; use hasWouldHaveAppliedMoney() or valueOrDefault().
     */
    public function getWouldHaveAppliedMoney(): mixed { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
