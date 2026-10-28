<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read ?string $created_at
 * @property-read ?string $external_reference_id
 * @property-read ?string $failed_at
 * @property-read ?string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read string $fulfillment_notification_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $notification_type
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ?string $package_id
 * @property-read ?string $recipient_customer_id
 * @property-read ?string $recipient_email
 * @property-read ?string $sent_at
 * @property-read ?string $shipment_id
 * @property-read string $status
 * @property-read ?string $suppression_reason
 * @property-read string $trigger_type
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentNotification extends Model {
    /** @param array{'channel': string, 'created_at'?: string, 'external_reference_id'?: string, 'failed_at'?: string, 'fulfillment_event_id'?: string, 'fulfillment_id': string, 'fulfillment_notification_id': string, 'metadata'?: mixed, 'notification_type': string, 'order'?: mixed, 'order_id': string, 'package_id'?: string, 'recipient_customer_id'?: string, 'recipient_email'?: string, 'sent_at'?: string, 'shipment_id'?: string, 'status': string, 'suppression_reason'?: string, 'trigger_type': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotification')); }
    /** Shape $ (Value): string.  Value enum: "email".
     * @return string
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getFailedAt(): ?string { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFulfillmentEventId(): ?string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getFulfillmentNotificationId(): string { return $this->get('fulfillment_notification_id'); }
    public function hasFulfillmentNotificationId(): bool { return $this->has('fulfillment_notification_id'); }
    /** Shape $ (Value): {@see MetadataMap}. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.  Value enum: "fulfillment_ready", "fulfillment_dispatched", "fulfillment_completed", "fulfillment_canceled", "fulfillment_failed", "fulfillment_no_show", "fulfillment_shipped", "fulfillment_delivered", "shipment_shipped", "shipment_out_for_delivery", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_returned".
     * @return string
     */
    public function getNotificationType(): string { return $this->get('notification_type'); }
    public function hasNotificationType(): bool { return $this->has('notification_type'); }
    /** Shape $ (Value): {@see ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPackageId(): ?string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getRecipientCustomerId(): ?string { return $this->get('recipient_customer_id'); }
    public function hasRecipientCustomerId(): bool { return $this->has('recipient_customer_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getRecipientEmail(): ?string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getSentAt(): ?string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getShipmentId(): ?string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string.  Value enum: "pending", "sent", "failed", "suppressed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.  Value enum: "source_suppressed", "default_suppressed", "recipient_missing", "template_not_configured", "merchant_managed_email", "recipient_unsubscribed".
     * @return ?string
     */
    public function getSuppressionReason(): ?string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** Shape $ (Value): string.  Value enum: "fulfillment_status_updated", "fulfillment_event_created".
     * @return string
     */
    public function getTriggerType(): string { return $this->get('trigger_type'); }
    public function hasTriggerType(): bool { return $this->has('trigger_type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
