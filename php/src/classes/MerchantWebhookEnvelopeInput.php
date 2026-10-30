<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantWebhookEnvelopeInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array<array-key, mixed>|\stdClass}|object, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantWebhookEnvelopeInput')); }
    /** Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  object (Required): object.
     * @return array{'object': array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "test_clock.created", "test_clock.advancing", "test_clock.ready", "test_clock.failed", "test_clock.archived", "tax_connection.updated", "customer_deletion_request.processing", "customer_deletion_request.failed", "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed", "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed", "merchant.updated", "product.created", "product.updated", "product.archived", "product_variant.created", "product_variant.updated", "product_variant.archived", "bundle.created", "bundle.updated", "bundle.archived", "category.created", "category.updated", "category.deleted", "modifier_group.created", "modifier_group.updated", "modifier_group.archived", "modifier_set.created", "modifier_set.updated", "modifier_set.archived", "promotion.created", "promotion.updated", "promotion.archived", "promotion_code.created", "promotion_code.updated", "promotion_code.archived", "balance.updated", "balance_transaction.created", "balance_transaction.updated", "checkout_session.partially_paid", "checkout_session.created", "checkout_session.paid", "checkout_session.closed", "checkout_session.expired", "checkout_session.invalidated", "credit_note_allocation.created", "credit_note_allocation.reversed", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer.created", "customer_deletion_request.completed", "customer_deletion_request.rejected", "customer_deletion_request.created", "customer.updated", "customer.deleted", "custom_domain.updated", "custom_domain.archived", "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.inquiry_closed", "dispute.won", "fraud_warning.created", "fraud_warning.updated", "gift_card.created", "gift_card.updated", "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created", "gift_card_notification.updated", "gift_card_redemption.created", "gift_card_redemption.updated", "gift_card_transaction.created", "delivery_rate_callback.archived", "delivery_rate_callback.created", "delivery_rate_callback.deactivated", "delivery_rate_callback.activated", "delivery_rate_callback.updated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.deactivated", "delivery_location_set.activated", "delivery_location_set.updated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated", "delivery_profile.activated", "delivery_profile.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.activated", "delivery_zone.updated", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.credited", "invoice.created", "invoice.issued", "invoice.issue_failed", "invoice.late_fee_due", "invoice.late_fee_assessed", "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice.overdue", "invoice.paid", "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired", "invoice_payment_attempt.failed", "invoice_payment_attempt.settled", "invoice.partially_paid", "invoice.partially_refunded", "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent", "invoice.updated", "invoice.voided", "inventory_reservation.action_required", "inventory_count.applied", "inventory_level.updated", "inventory_receipt.created", "inventory_reservation.at_risk", "inventory_reservation.closed", "inventory_reservation.committed", "inventory_reservation.consumed", "inventory_reservation.created", "inventory_reservation.hold_expired", "inventory_reservation.released", "inventory_level.shortage_detected", "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost", "inventory_transfer.received", "inventory_transfer.returned", "merchant_billing_balance.updated", "merchant.readiness_updated", "merchant_billing_invoice.issued", "merchant_billing_invoice.updated", "order.partially_refunded", "order.closed", "order.created", "fulfillment.completed", "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated", "shipment.created", "shipment.updated", "fulfillment.updated", "order.inventory_exception_created", "order.inventory_exception_resolved", "order.partially_paid", "order.paid", "order.refunded", "order.updated", "payment_intent.expired", "payment_intent.updated", "payment_intent.created", "payment_intent.canceled", "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_link.created", "payment_link.updated", "payment_method.archived", "payment_method.failed", "payment_method.activated", "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed", "payout.updated", "payout_destination.created", "payout_destination.archived", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "refund.partially_succeeded", "refund.succeeded", "refund.created", "refund.failed", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "payment_review.closed", "payment_review.reopened", "payment_review.opened", "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled", "subscription.created", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_succeeded", "subscription_payment_retry.created", "subscription_payment_retry.succeeded", "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed", "subscription.renewal_upcoming", "subscription.trial_ending", "subscription.plan_changed", "subscription.updated", "subscription.delivery_action_required", "subscription.delivery_pause_upcoming", "subscription.delivery_updated", "subscription.cycle_skipped", "subscription_delivery_migration.completed".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /**  id (Required): string. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
