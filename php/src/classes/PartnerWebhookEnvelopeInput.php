<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read PartnerWebhookEnvelopeSourceInput|array<array-key, mixed>|\stdClass $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerWebhookEnvelopeInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array<array-key, mixed>|\stdClass}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': PartnerWebhookEnvelopeSourceInput|array<array-key, mixed>|\stdClass, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerWebhookEnvelopeInput')); }
    /** Shape $ (Value): string. Format: date.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): object. Shape $.object (Required): object.
     * @return array{'object': array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): string.  Value enum: "balance.updated", "balance_transaction.created", "balance_transaction.updated", "bundle.archived", "bundle.created", "bundle.updated", "category.created", "category.deleted", "category.updated", "checkout_session.closed", "checkout_session.created", "checkout_session.expired", "checkout_session.invalidated", "checkout_session.paid", "checkout_session.partially_paid", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "credit_note_allocation.created", "credit_note_allocation.reversed", "custom_domain.archived", "custom_domain.updated", "customer.created", "customer.deleted", "customer.updated", "customer_deletion_request.completed", "customer_deletion_request.created", "customer_deletion_request.failed", "customer_deletion_request.processing", "customer_deletion_request.rejected", "delivery_location_set.activated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.deactivated", "delivery_location_set.updated", "delivery_method.activated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.updated", "delivery_profile.activated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.deactivated", "delivery_profile.updated", "delivery_rate_callback.activated", "delivery_rate_callback.archived", "delivery_rate_callback.created", "delivery_rate_callback.deactivated", "delivery_rate_callback.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.activated", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.deactivated", "delivery_zone.updated", "dispute.created", "dispute.inquiry_closed", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.won", "environment_grant.created", "environment_grant.revoked", "fraud_warning.created", "fraud_warning.updated", "fulfillment.canceled", "fulfillment.completed", "fulfillment.created", "fulfillment.failed", "fulfillment.updated", "fulfillment_event.created", "gift_card.created", "gift_card.updated", "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created", "gift_card_notification.updated", "gift_card_redemption.created", "gift_card_redemption.updated", "gift_card_transaction.created", "inventory_count.applied", "inventory_level.shortage_detected", "inventory_level.updated", "inventory_receipt.created", "inventory_reservation.action_required", "inventory_reservation.at_risk", "inventory_reservation.closed", "inventory_reservation.committed", "inventory_reservation.consumed", "inventory_reservation.created", "inventory_reservation.hold_expired", "inventory_reservation.released", "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost", "inventory_transfer.received", "inventory_transfer.returned", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.created", "invoice.credited", "invoice.issue_failed", "invoice.issued", "invoice.late_fee_assessed", "invoice.late_fee_due", "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice.overdue", "invoice.paid", "invoice.partially_paid", "invoice.partially_refunded", "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent", "invoice.updated", "invoice.voided", "invoice_delivery_attempt.failed", "invoice_delivery_attempt.sent", "invoice_delivery_attempt.suppressed", "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired", "invoice_payment_attempt.failed", "invoice_payment_attempt.processing", "invoice_payment_attempt.settled", "merchant.readiness_updated", "merchant.updated", "merchant_billing_balance.updated", "merchant_billing_invoice.issued", "merchant_billing_invoice.updated", "modifier_group.archived", "modifier_group.created", "modifier_group.updated", "modifier_set.archived", "modifier_set.created", "modifier_set.updated", "order.closed", "order.created", "order.inventory_exception_created", "order.inventory_exception_resolved", "order.paid", "order.partially_paid", "order.partially_refunded", "order.refunded", "order.updated", "package.created", "package.updated", "partner_app_install.created", "partner_app_install.permissions_updated", "partner_app_install.revoked", "partner_app_install.updated", "payment_intent.canceled", "payment_intent.created", "payment_intent.expired", "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_intent.updated", "payment_link.created", "payment_link.updated", "payment_method.activated", "payment_method.archived", "payment_method.failed", "payment_review.closed", "payment_review.opened", "payment_review.reopened", "payout.canceled", "payout.created", "payout.failed", "payout.paid", "payout.reversed", "payout.updated", "payout_destination.archived", "payout_destination.created", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "product.archived", "product.created", "product.updated", "product_variant.archived", "product_variant.created", "product_variant.updated", "promotion.archived", "promotion.created", "promotion.updated", "promotion_code.archived", "promotion_code.created", "promotion_code.updated", "refund.created", "refund.failed", "refund.partially_succeeded", "refund.succeeded", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "shipment.created", "shipment.updated", "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled", "subscription.created", "subscription.cycle_skipped", "subscription.delivery_action_required", "subscription.delivery_pause_upcoming", "subscription.delivery_updated", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_succeeded", "subscription.plan_changed", "subscription.reactivated", "subscription.renewal_upcoming", "subscription.resumed", "subscription.trial_ending", "subscription.updated", "subscription_delivery_migration.completed", "subscription_payment_retry.created", "subscription_payment_retry.failed", "subscription_payment_retry.succeeded", "tax_connection.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): integer. 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** Shape $ (Value): {@see PartnerWebhookEnvelopeSourceInput}. The source of a partner webhook event, selected by type.
     * @return PartnerWebhookEnvelopeSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Shape $ (Value): boolean. true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
