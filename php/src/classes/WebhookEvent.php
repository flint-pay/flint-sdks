<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $api_request_log_id
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read ?array<array-key, mixed> $data
 * @property-read ?string $event_source
 * @property-read string $event_type
 * @property-read ?string $merchant_id
 * @property-read ?string $mode
 * @property-read ?string $partner_app_id
 * @property-read ?int $payload_version
 * @property-read WebhookEventRequest|null $request
 * @property-read ?string $resource_id
 * @property-read ?string $resource_type
 * @property-read ?\stdClass $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEvent extends Model {
    /** @param array{'api_request_log_id'?: string, 'api_version': string, 'created_at': string, 'data'?: \stdClass, 'event_source'?: string, 'event_type': string, 'merchant_id'?: string, 'mode'?: string, 'partner_app_id'?: string, 'payload_version'?: int, 'request'?: object{'id': string, 'idempotency_key'?: string}|null, 'resource_id'?: string, 'resource_type'?: mixed, 'source'?: \stdClass, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEvent')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getApiRequestLogId(): ?string { return $this->get('api_request_log_id'); }
    public function hasApiRequestLogId(): bool { return $this->has('api_request_log_id'); }
    /** Shape $ (Value): string. API version of the event data. Stored data follows the same versioning rules as webhook deliveries. Format: date.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. The delivered envelope's data, including its payload-version-specific shape. Omitted from list responses and from detail responses when the caller lacks read access to the attributed resource or the payload has expired after 14 days.
     * @return ?array<array-key, mixed>
     */
    public function getData(): ?array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "merchant", "partner_app", "installed_merchants".
     * @return ?string
     */
    public function getEventSource(): ?string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** Shape $ (Value): string.  Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated", "category.created", "category.deleted", "category.updated", "checkout_session.closed", "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "credit_note_allocation.created", "credit_note_allocation.reversed", "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted", "customer.updated", "customer_deletion_request.completed", "customer_deletion_request.created", "customer_deletion_request.failed", "customer_deletion_request.processing", "customer_deletion_request.rejected", "delivery_location_set.activated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.deactivated", "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated", "delivery_profile.updated", "delivery_rate_callback.activated", "delivery_rate_callback.archived", "delivery_rate_callback.created", "delivery_rate_callback.deactivated", "delivery_rate_callback.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated", "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated", "fulfillment.canceled", "fulfillment.completed", "fulfillment.created", "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created", "gift_card.created", "gift_card.updated", "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created", "gift_card_notification.updated", "gift_card_redemption.created", "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied", "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created", "inventory_reservation.action_required", "inventory_reservation.at_risk", "inventory_reservation.closed", "inventory_reservation.committed", "inventory_reservation.consumed", "inventory_reservation.created", "inventory_reservation.hold_expired", "inventory_reservation.released", "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost", "inventory_transfer.received", "inventory_transfer.returned", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created", "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed", "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded", "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent", "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed", "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed", "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired", "invoice_payment_attempt.failed", "invoice_payment_attempt.processing", "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated", "merchant_billing_invoice.issued", "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created", "modifier_group.updated", "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed", "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated", "package.created", "package.updated", "partner_app_install.created", "partner_app_install.permissions_updated", "partner_app_install.revoked", "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created", "payment_intent.expired", "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated", "payment_link.created", "payment_link.updated", "payment_method.activated", "payment_method.archived", "payment_method.failed", "payment_review.closed", "payment_review.opened", "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived", "payout_destination.created", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "product.archived", "product.created", "product.updated", "product_variant.archived", "product_variant.created", "product_variant.updated", "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived", "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed", "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped", "subscription.delivery_action_required", "subscription.delivery_pause_upcoming", "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed", "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed", "subscription.trial_ending", "subscription.updated", "subscription_delivery_migration.completed", "subscription_payment_retry.created", "subscription_payment_retry.failed", "subscription_payment_retry.succeeded".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return ?string
     */
    public function getMode(): ?string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPartnerAppId(): ?string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. Envelope payload version. Present only while the stored payload is retained. Value enum: 1, 2.
     * @return ?int
     */
    public function getPayloadVersion(): ?int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): {@see WebhookEventRequest} or null. Originating merchant request, or null for a background event. The idempotency key is included only on an authorized detail read while the payload is retained. Omitted for partner events.
     * @return WebhookEventRequest|null
     */
    public function getRequest(): WebhookEventRequest|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getResourceId(): ?string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): {@see ResourceType}. Public resource type: the resource's ID field name without `_id`. Clients must accept values added in future releases. Value enum: "api_key", "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component", "category", "checkout_session", "checkout_session_customer_verification", "credit_note", "credit_note_allocation", "custom_domain", "customer", "customer_address", "customer_deletion_request", "customer_session", "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone", "device", "discount", "dispute", "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification", "gift_card_redemption", "gift_card_transaction", "inventory_adjustment", "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count", "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation", "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location", "merchant", "merchant_billing_balance", "merchant_billing_entry", "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order", "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt", "organization", "package", "package_item", "partner_app", "partner_app_install", "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination", "payout_settings", "product", "product_option", "product_option_value", "product_variant", "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation", "refund_line_item_adjustment", "report", "report_download", "return", "return_activity", "return_disposition", "return_inspection", "return_inspection_line_item", "return_line_item", "return_policy", "return_policy_revision", "return_reason", "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list", "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription", "subscription_delivery_migration", "subscription_line_item", "subscription_offer", "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     * @return ?string
     */
    public function getResourceType(): ?string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). Partner envelope source. Present only for partner events while the stored payload is retained. Shape $.environment_grant_id (Optional): string. Shape $.merchant_id (Required): string. Shape $.mode (Optional): string.  Value enum: "test", "live". Shape $.partner_app_install_id (Required): string. Shape $.sandbox_id (Optional): string. Shape $.type (Required): string.  Value enum: "partner_app", "installed_merchants". Shape $.oneOf[1] (Value): object. Shape $.oneOf[1].merchant_id (Required): string. Shape $.oneOf[1].partner_app_install_id (Required): string. Shape $.oneOf[1].type (Required): string.  Value enum: "partner_app". Shape $.oneOf[2] (Value): object. Shape $.oneOf[2].environment_grant_id (Required): string. Shape $.oneOf[2].merchant_id (Required): string. Shape $.oneOf[2].mode (Required): string.  Value enum: "test", "live". Shape $.oneOf[2].partner_app_install_id (Required): string. Shape $.oneOf[2].sandbox_id (Optional): string. Shape $.oneOf[2].type (Required): string.  Value enum: "installed_merchants".
     * @return ?\stdClass
     */
    public function getSource(): ?\stdClass { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
