<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read ReturnActor $actor
 * @property-read string $created_at
 * @property-read ?int $quantity
 * @property-read ?string $reason
 * @property-read ?string $reason_message
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read string $return_activity_id
 * @property-read string $return_id
 * @property-read int $return_version
 * Presence-aware response; omitted optional fields return null. */
final class ReturnActivity extends Model {
    /** @param array{'activity_type': string, 'actor': mixed, 'created_at': string, 'quantity'?: int, 'reason'?: string, 'reason_message'?: string, 'resource_id': string, 'resource_type': mixed, 'return_activity_id': string, 'return_id': string, 'return_version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnActivity')); }
    /** Value enum: "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.shipment_handoff_converged", "return.updated", "return_disposition.canceled", "return_disposition.created", "return_disposition.failed", "return_disposition.retried", "return_disposition.succeeded", "return_inspection.corrected", "return_inspection.created", "return_inspection_line_item.acceptance_decided", "return_line_item.deleted", "return_line_item.inspection_waived", "return_line_item.line_item_added", "return_line_item.quantity_canceled", "return_line_item.updated", "return_receipt.corrected", "return_receipt.created", "return_receipt_line_item.verified", "return_resolution.buyer_payment_required", "return_resolution.canceled", "return_resolution.confirmed", "return_resolution.created", "return_resolution.effect_failed", "return_resolution.payment_failed", "return_resolution.payment_intent_updated", "return_resolution.payment_succeeded", "return_resolution.refund_failed", "return_resolution.refund_succeeded", "return_resolution.released", "return_resolution.replacement_fulfilled", "return_resolution.replacement_fulfillment_canceled", "return_resolution.replacement_order_created", "return_resolution.retried", "return_resolution.updated".
     * @return string
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActor
     */
    public function getActor(): ReturnActor { return $this->get('actor'); }
    public function hasActor(): bool { return $this->has('actor'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Canceled whole-number quantity; fractional quantities are not supported. Present only for return_line_item.quantity_canceled. Format: int64.
     * @return ?int
     */
    public function getQuantity(): ?int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Value enum: "additional_merchandise_received", "automatic_receipt", "buyer_payment", "buyer_request", "buyer_selection", "changed_disposition", "correction_required", "created_in_error", "customer_service", "customer_service_exception", "dependency_recovered", "duplicate", "duplicate_observation", "entry_error", "evidence_missing", "exception_resolved", "exception_waived", "expired", "inspection_confirmed", "inspection_result", "inventory_effect_failed", "inventory_item_unmapped", "linked_effect_changed", "linked_effect_retry", "manual_completion", "manual_correction", "manual_release", "manual_review", "mapping_corrected", "merchant_approved", "merchant_discretion", "merchant_request", "merchant_review", "not_eligible", "operator_retry", "order_match_confirmed", "other", "payment_intent_creation_failed", "payment_method_updated", "policy_correction", "policy_override", "quantity_unavailable", "reconciliation_correction", "refund_creation_failed", "refund_line_value_unavailable", "replacement_order_creation_failed", "resolution_effect_failed", "return_policy", "return_shipping_cost", "risk_review", "safety_requirement", "sku_match_confirmed", "source_correction", "suspected_abuse", "trusted_in_store_handoff", "warehouse_override".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** reason_message
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** resource_id
     * @return string
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_email_preferences", "customer_session", "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "demo_session", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "organization", "package", "package_item", "partner_app", "partner_app_credential", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "tax_connection", "tax_registration", "test_clock", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return string
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** return_activity_id
     * @return string
     */
    public function getReturnActivityId(): string { return $this->get('return_activity_id'); }
    public function hasReturnActivityId(): bool { return $this->has('return_activity_id'); }
    /** return_id
     * @return string
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return version produced by this activity. Format: int64. minimum: 0.
     * @return int
     */
    public function getReturnVersion(): int { return $this->get('return_version'); }
    public function hasReturnVersion(): bool { return $this->has('return_version'); }
}
