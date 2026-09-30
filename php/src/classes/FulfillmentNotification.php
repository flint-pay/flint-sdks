<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string $created_at
 * @property-read string $external_reference_id
 * @property-read string $failed_at
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read string $fulfillment_notification_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $notification_type
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read string $recipient_customer_id
 * @property-read string $recipient_email
 * @property-read string $sent_at
 * @property-read string $shipment_id
 * @property-read string $status
 * @property-read string $suppression_reason
 * @property-read string $trigger_type
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentNotification extends Model {
    /** @param array{'channel': string, 'created_at'?: string, 'external_reference_id'?: string, 'failed_at'?: string, 'fulfillment_event_id'?: string, 'fulfillment_id': string, 'fulfillment_notification_id': string, 'metadata'?: \stdClass, 'notification_type': string, 'order'?: mixed, 'order_id': string, 'package_id'?: string, 'recipient_customer_id'?: string, 'recipient_email'?: string, 'sent_at'?: string, 'shipment_id'?: string, 'status': string, 'suppression_reason'?: string, 'trigger_type': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotification')); }
    /** @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When failed_at is omitted; use hasFailedAt() or valueOrDefault().
     */
    public function getFailedAt(): string { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** @return string
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return string
     * @throws SdkError When fulfillment_notification_id is omitted; use hasFulfillmentNotificationId() or valueOrDefault().
     */
    public function getFulfillmentNotificationId(): string { return $this->get('fulfillment_notification_id'); }
    public function hasFulfillmentNotificationId(): bool { return $this->has('fulfillment_notification_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When notification_type is omitted; use hasNotificationType() or valueOrDefault().
     */
    public function getNotificationType(): string { return $this->get('notification_type'); }
    public function hasNotificationType(): bool { return $this->has('notification_type'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** @return string
     * @throws SdkError When recipient_customer_id is omitted; use hasRecipientCustomerId() or valueOrDefault().
     */
    public function getRecipientCustomerId(): string { return $this->get('recipient_customer_id'); }
    public function hasRecipientCustomerId(): bool { return $this->has('recipient_customer_id'); }
    /** @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** @return string
     * @throws SdkError When sent_at is omitted; use hasSentAt() or valueOrDefault().
     */
    public function getSentAt(): string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When suppression_reason is omitted; use hasSuppressionReason() or valueOrDefault().
     */
    public function getSuppressionReason(): string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** @return string
     * @throws SdkError When trigger_type is omitted; use hasTriggerType() or valueOrDefault().
     */
    public function getTriggerType(): string { return $this->get('trigger_type'); }
    public function hasTriggerType(): bool { return $this->has('trigger_type'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
