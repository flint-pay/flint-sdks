<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $capability
 * @property-read string $code
 * @property-read ?string $due_at
 * @property-read string $message
 * @property-read ?list<NextAction> $next_actions
 * @property-read ?string $observed_at
 * @property-read ?string $previous_stage
 * @property-read ?string $promotion_code
 * @property-read ?string $reason
 * @property-read ?string $resets_at
 * @property-read ?string $resource_id
 * @property-read ?string $resource_type
 * @property-read string $severity
 * @property-read ?string $stage
 * @property-read ?MoneyValue $would_have_applied_money
 * Presence-aware response; omitted optional fields return null. */
final class ResponseWarning extends Model {
    /** @param array{'capability'?: string, 'code': string, 'due_at'?: string, 'message': string, 'next_actions'?: list<mixed>, 'observed_at'?: string, 'previous_stage'?: string, 'promotion_code'?: string, 'reason'?: string, 'resets_at'?: string, 'resource_id'?: string, 'resource_type'?: string, 'severity': string, 'stage'?: string, 'would_have_applied_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResponseWarning')); }
    /** Merchant capability for merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive. Allowed for `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Value enum: "accept_card_payments", "save_payment_methods", "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts", "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     * @return ?string
     */
    public function getCapability(): ?string { return $this->get('capability'); }
    public function hasCapability(): bool { return $this->has('capability'); }
    /** Warning code. Clients must accept values added in future releases. Value enum: "billing_interval_options_same_price", "merchant_onboarding_past_due", "merchant_onboarding_deadline", "merchant_capability_pending", "merchant_capability_inactive", "payout_settings_reconciling", "promotion_declined", "promotion_removed", "risk_rule_limit_reached", "rule_evaluation_stage_changed", "external_paid_orders_over_allowance", "replacement_codes_unavailable".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Time by which the merchant must submit onboarding requirements, as an RFC 3339 UTC timestamp. Present only for merchant_onboarding_deadline or merchant_onboarding_past_due when a submission deadline is set. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline` warnings. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Description of the non-blocking condition.
     * @return string
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Suggested actions for addressing the warning. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling` warnings. [] (Value): {@see NextAction}. A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.
     * @return ?list<NextAction>
     */
    public function getNextActions(): ?array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** Last synchronization time for merchant_onboarding_past_due, merchant_onboarding_deadline, merchant_capability_pending, or merchant_capability_inactive, when available. Allowed for `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive` warnings. Format: date-time.
     * @return ?string
     */
    public function getObservedAt(): ?string { return $this->get('observed_at'); }
    public function hasObservedAt(): bool { return $this->has('observed_at'); }
    /** Previous risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization", "post_authorization".
     * @return ?string
     */
    public function getPreviousStage(): ?string { return $this->get('previous_stage'); }
    public function hasPreviousStage(): bool { return $this->has('previous_stage'); }
    /** Promotion code that was accepted but did not apply, on a promotion_declined warning, or the code of a removed promotion discount, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings.
     * @return ?string
     */
    public function getPromotionCode(): ?string { return $this->get('promotion_code'); }
    public function hasPromotionCode(): bool { return $this->has('promotion_code'); }
    /** Stable Flint reason code. On a promotion_declined or promotion_removed warning this is the promotion decline reason (for example superseded_by_better_offer); an unrecognized value falls back to not_eligible. See the Promotions reference for the full list. Allowed for `promotion_declined`, `promotion_removed` warnings. Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch", "customer_limit_reached", "customer_mismatch", "customer_required", "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started", "recurrence_completed", "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** End of the original order reservation's usage period, at the start of a New York calendar month, as an RFC 3339 UTC timestamp. Replays preserve this original reset time. Allowed for `external_paid_orders_over_allowance` warnings. Format: date-time.
     * @return ?string
     */
    public function getResetsAt(): ?string { return $this->get('resets_at'); }
    public function hasResetsAt(): bool { return $this->has('resets_at'); }
    /** Resource ID, paired with resource_type when the warning identifies a resource. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings.
     * @return ?string
     */
    public function getResourceId(): ?string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Type of the resource identified by resource_id. Allowed for `billing_interval_options_same_price`, `merchant_onboarding_past_due`, `merchant_onboarding_deadline`, `merchant_capability_pending`, `merchant_capability_inactive`, `payout_settings_reconciling`, `promotion_declined`, `promotion_removed`, `risk_rule_limit_reached`, `rule_evaluation_stage_changed`, `external_paid_orders_over_allowance`, `replacement_codes_unavailable` warnings. Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_email_preferences", "customer_session", "customer_tax_exemption", "customer_verification", "delivery_choice_group", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "package", "package_item", "partner_app", "partner_app_credential", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination", "payout_settings", "platform_fee", "platform_fee_balance_transaction", "platform_fee_payout", "price_list", "price_list_price", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "reader", "refund", "refund_allocation", "refund_line_item_adjustment", "remembered_buyer", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return ?string
     */
    public function getResourceType(): ?string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Warning severity. Value enum: "warning", "critical".
     * @return string
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
    /** New risk rule evaluation stage for rule_evaluation_stage_changed. Allowed for `rule_evaluation_stage_changed` warnings. Value enum: "pre_authorization", "post_authorization".
     * @return ?string
     */
    public function getStage(): ?string { return $this->get('stage'); }
    public function hasStage(): bool { return $this->has('stage'); }
    /** Discount amount this promotion would have applied had it won, on a promotion_declined warning, or the amount a removed promotion discount applied before removal, on a promotion_removed warning. Allowed for `promotion_declined`, `promotion_removed` warnings. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getWouldHaveAppliedMoney(): ?MoneyValue { return $this->get('would_have_applied_money'); }
    public function hasWouldHaveAppliedMoney(): bool { return $this->has('would_have_applied_money'); }
}
