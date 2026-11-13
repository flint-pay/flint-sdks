<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array<array-key, mixed>|\stdClass, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key'?: string}|object|null $request
 * @property-read string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantWebhookEnvelopeInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array<array-key, mixed>|\stdClass, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key'?: string}|object|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantWebhookEnvelopeInput')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version. object (Required): object. The affected public resource without expansions, client authority fields, or fields computed for an individual caller. previous_attributes (Optional): object. Previous values of changed top-level fields in data.object, at this delivery's API version. Nested changes include the whole previous top-level value. A value is null when the field was absent before the change. Omitted when Flint did not record the previous state, including synthetic test events.
     * @return array{'object': array<array-key, mixed>|\stdClass, 'previous_attributes'?: array<array-key, mixed>|\stdClass}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     * @throws SdkError When event_source is omitted; use hasEventSource() or valueOrDefault().
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "api_key.created", "api_key.updated", "api_key.revoked", "test_clock.created", "test_clock.advancing", "test_clock.ready", "test_clock.failed", "test_clock.archived", "tax_connection.updated", "customer_deletion_request.processing", "customer_deletion_request.failed", "invoice_delivery_attempt.sent", "invoice_delivery_attempt.failed", "invoice_delivery_attempt.suppressed", "fulfillment.canceled", "fulfillment.failed", "merchant.updated", "product.created", "product.updated", "product.archived", "product_variant.created", "product_variant.updated", "product_variant.archived", "bundle.created", "bundle.updated", "bundle.archived", "price_list.created", "price_list.updated", "price_list.archived", "reader.created", "reader.updated", "reader.archived", "category.created", "category.updated", "category.deleted", "modifier_group.created", "modifier_group.updated", "modifier_group.archived", "modifier_set.created", "modifier_set.updated", "modifier_set.archived", "promotion.created", "promotion.updated", "promotion.archived", "promotion_code.created", "promotion_code.updated", "promotion_code.archived", "balance.updated", "balance_transaction.created", "balance_transaction.updated", "checkout_session.partially_paid", "checkout_session.created", "checkout_session.updated", "checkout_session.paid", "checkout_session.closed", "checkout_session.expired", "checkout_session.invalidated", "credit_note_allocation.created", "credit_note_allocation.reversed", "credit_note.created", "credit_note.issued", "credit_note.updated", "credit_note.voided", "customer_email_preferences.updated", "customer.created", "customer_deletion_request.completed", "customer_deletion_request.rejected", "customer_deletion_request.created", "customer.updated", "customer.deleted", "custom_domain.updated", "custom_domain.archived", "dispute.created", "dispute.lost", "dispute.needs_response", "dispute.prevented", "dispute.updated", "dispute.inquiry_closed", "dispute.won", "fraud_warning.created", "fraud_warning.updated", "ticket.created", "ticket.voided", "ticket.checked_in", "ticket.updated", "gift_card.created", "gift_card.updated", "gift_card_load.created", "gift_card_load.updated", "gift_card_notification.created", "gift_card_notification.updated", "gift_card_redemption.created", "gift_card_redemption.updated", "gift_card_transaction.created", "delivery_rate_callback.archived", "tax_calculation_callback.archived", "delivery_rate_callback.created", "tax_calculation_callback.created", "delivery_rate_callback.deactivated", "tax_calculation_callback.deactivated", "delivery_rate_callback.activated", "tax_calculation_callback.activated", "delivery_rate_callback.updated", "tax_calculation_callback.updated", "delivery_method.archived", "delivery_method.created", "delivery_method.deactivated", "delivery_method.activated", "delivery_method.updated", "delivery_location_set.archived", "delivery_location_set.created", "delivery_location_set.updated", "delivery_profile.archived", "delivery_profile.created", "delivery_profile.updated", "delivery_revocation.created", "delivery_selection.committed", "delivery_zone.archived", "delivery_zone.created", "delivery_zone.updated", "invoice.collection_block_resolved", "invoice.collection_blocked", "invoice.credited", "invoice.created", "invoice.issued", "invoice.issue_failed", "invoice.late_fee_due", "invoice.late_fee_assessed", "invoice.late_fee_waived", "invoice.marked_uncollectible", "invoice_manual_payment.created", "invoice_manual_payment.reversed", "invoice.overdue", "invoice.paid", "invoice_payment_attempt.processing", "invoice_payment_attempt.canceled", "invoice_payment_attempt.expired", "invoice_payment_attempt.failed", "invoice_payment_attempt.settled", "invoice.partially_paid", "invoice.partially_refunded", "invoice.refunded", "invoice.reminder_due", "invoice.reopened", "invoice.sent", "invoice.updated", "invoice.voided", "inventory_reservation.action_required", "inventory_count.applied", "inventory_count.updated", "inventory_level.updated", "inventory_receipt.created", "inventory_reservation.at_risk", "inventory_reservation.closed", "inventory_reservation.committed", "inventory_reservation.consumed", "inventory_reservation.created", "inventory_reservation.hold_expired", "inventory_reservation.released", "inventory_reservation.updated", "inventory_level.shortage_detected", "inventory_transfer.closed", "inventory_transfer.departed", "inventory_transfer.lost", "inventory_transfer.received", "inventory_transfer.returned", "inventory_transfer.updated", "merchant_billing_balance.updated", "merchant.readiness_updated", "merchant_billing_invoice.issued", "merchant_billing_invoice.updated", "order.partially_refunded", "order.closed", "order_edit.created", "order.created", "fulfillment.completed", "fulfillment.created", "fulfillment_event.created", "package.created", "package.updated", "shipment.created", "shipment.updated", "fulfillment.updated", "order.inventory_exception_created", "order.inventory_exception_resolved", "order.partially_paid", "order.paid", "order.refunded", "order.updated", "payment_intent.authorization_expiring", "payment_intent.expired", "payment_intent.updated", "payment_intent.created", "payment_intent.canceled", "payment_intent.fulfillment_hold_updated", "payment_intent.payment_failed", "payment_intent.processing", "payment_intent.requires_action", "payment_intent.requires_capture", "payment_intent.succeeded", "payment_link.created", "payment_link.updated", "payment_method.archived", "payment_method.failed", "payment_method.activated", "payment_method.updated", "payout.canceled", "payout.created", "payout.failed", "payout.succeeded", "payout.reversed", "payout.updated", "payout_destination.created", "payout_destination.archived", "payout_destination.disabled", "payout_destination.updated", "payout_settings.updated", "refund.partially_succeeded", "refund.succeeded", "refund.created", "refund.failed", "refund.updated", "report.failed", "report.succeeded", "return.canceled", "return.completed", "return.created", "return.decision_recorded", "return.reopened", "return.updated", "return_disposition.created", "return_disposition.updated", "return_inspection.acceptance_decided", "return_inspection.created", "return_inspection.superseded", "return_receipt.created", "return_receipt.superseded", "return_receipt.verified", "return_resolution.created", "return_resolution.updated", "payment_review.closed", "payment_review.reopened", "payment_review.opened", "subscription.activated", "subscription.canceled", "subscription.cancellation_scheduled", "subscription.created", "subscription.dunning_exhausted", "subscription.past_due", "subscription.paused", "subscription.payment_succeeded", "subscription_payment_retry.created", "subscription_payment_retry.succeeded", "subscription_payment_retry.failed", "subscription.reactivated", "subscription.resumed", "subscription.end_upcoming", "subscription.renewal_upcoming", "subscription.trial_ending", "subscription.plan_change_scheduled", "subscription.plan_change_canceled", "subscription.plan_changed", "subscription.updated", "subscription.delivery_action_required", "subscription.delivery_pause_upcoming", "subscription.delivery_updated", "subscription.cycle_skipped", "subscription_delivery_migration.completed", "partner_app.updated", "partner_app.platform_approved", "partner_app.platform_limited", "partner_app.platform_rejected", "platform_fee_payout.created", "platform_fee_payout.succeeded", "platform_fee_payout.failed", "payment_split.created", "payment_split.succeeded", "payment_split.failed", "payment_split.canceled", "payment_split.updated", "platform_fee.created", "platform_fee.succeeded", "platform_fee.canceled", "platform_fee.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
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
    /** The originating request. `null` when the event has no originating request ID. id (Required): string. Request ID of the request that caused the event. idempotency_key (Optional): string. The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return array{'id': string, 'idempotency_key'?: string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
