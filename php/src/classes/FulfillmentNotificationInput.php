<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $channel
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_reference_id
 * @property-read string|\DateTimeInterface $failed_at
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read string $fulfillment_notification_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $notification_type
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read string $recipient_customer_id
 * @property-read string $recipient_email
 * @property-read string|\DateTimeInterface $sent_at
 * @property-read string $shipment_id
 * @property-read string $status
 * @property-read string $suppression_reason
 * @property-read string $trigger_type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentNotificationInput extends Model {
    /** @param array{'channel': string, 'created_at': string|\DateTimeInterface, 'external_reference_id'?: string, 'failed_at'?: string|\DateTimeInterface, 'fulfillment_event_id'?: string, 'fulfillment_id': string, 'fulfillment_notification_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'notification_type': string, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id'?: string, 'recipient_customer_id'?: string, 'recipient_email'?: string, 'sent_at'?: string|\DateTimeInterface, 'shipment_id'?: string, 'status': string, 'suppression_reason'?: string, 'trigger_type': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentNotificationInput')); }
    /** How Flint sends this notification. - `email`: Sends the notification to recipient_email. Value enum: "email".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When failed_at is omitted; use hasFailedAt() or valueOrDefault().
     */
    public function getFailedAt(): string|\DateTimeInterface { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** ID of the fulfillment event that triggered the notification. Example: "fev_01KEZF7C002XK9D7X3239ERT51".
     * @return string
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** ID of the fulfillment the notification is about. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Unique identifier for this fulfillment notification, prefixed `fnt_`. Example: "fnt_01KEZF7C00QD91RXQH2E7H9K5E".
     * @return string
     * @throws SdkError When fulfillment_notification_id is omitted; use hasFulfillmentNotificationId() or valueOrDefault().
     */
    public function getFulfillmentNotificationId(): string { return $this->get('fulfillment_notification_id'); }
    public function hasFulfillmentNotificationId(): bool { return $this->has('fulfillment_notification_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The buyer update this notification communicates. - `fulfillment_ready`: The fulfillment is ready for pickup. - `fulfillment_dispatched`: The fulfillment was dispatched. - `fulfillment_completed`: The fulfillment was completed. - `fulfillment_canceled`: The fulfillment was canceled. - `fulfillment_failed`: The fulfillment failed. - `fulfillment_no_show`: A service appointment was missed. - `fulfillment_shipped`: The fulfillment was shipped. - `fulfillment_delivered`: The fulfillment was delivered. - `shipment_shipped`: A shipment was shipped. - `shipment_out_for_delivery`: A shipment is out for delivery. - `shipment_delivered`: A shipment was delivered. - `shipment_delivery_attempted`: A carrier attempted to deliver a shipment. - `shipment_exception`: A shipment has a delivery exception. - `shipment_returned`: A shipment was returned. Value enum: "fulfillment_ready", "fulfillment_dispatched", "fulfillment_completed", "fulfillment_canceled", "fulfillment_failed", "fulfillment_no_show", "fulfillment_shipped", "fulfillment_delivered", "shipment_shipped", "shipment_out_for_delivery", "shipment_delivered", "shipment_delivery_attempted", "shipment_exception", "shipment_returned".
     * @return string
     * @throws SdkError When notification_type is omitted; use hasNotificationType() or valueOrDefault().
     */
    public function getNotificationType(): string { return $this->get('notification_type'); }
    public function hasNotificationType(): bool { return $this->has('notification_type'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'deferred_promotions': list<DeferredPromotionInput|array<array-key, mixed>|\stdClass>, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'paid_at': string|\DateTimeInterface|null, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': OrderSettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** ID of the order the notification is about. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the package the notification is about, when it concerns a package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** ID of the customer the notification was sent to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When recipient_customer_id is omitted; use hasRecipientCustomerId() or valueOrDefault().
     */
    public function getRecipientCustomerId(): string { return $this->get('recipient_customer_id'); }
    public function hasRecipientCustomerId(): bool { return $this->has('recipient_customer_id'); }
    /** Email address the notification was sent to.
     * @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When sent_at is omitted; use hasSentAt() or valueOrDefault().
     */
    public function getSentAt(): string|\DateTimeInterface { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** ID of the shipment the notification is about, when it concerns a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Whether the notification's email is waiting to send, was sent, failed, or was suppressed. Value enum: "pending", "sent", "failed", "suppressed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why Flint chose not to send this notification. - `source_suppressed`: The originating request suppressed buyer messaging. - `default_suppressed`: The configured default suppressed buyer messaging. - `recipient_missing`: No usable recipient was available. - `template_not_configured`: No notification template was configured. - `merchant_managed_email`: The merchant's integration owns this email. - `recipient_unsubscribed`: The recipient opted out of this notification. - `sandbox_daily_limit_reached`: Not sent because the sandbox reached its daily limit of buyer emails to addresses outside your team. Send to a team address, or wait for the next UTC day. Value enum: "source_suppressed", "default_suppressed", "recipient_missing", "template_not_configured", "merchant_managed_email", "recipient_unsubscribed", "sandbox_daily_limit_reached".
     * @return string
     * @throws SdkError When suppression_reason is omitted; use hasSuppressionReason() or valueOrDefault().
     */
    public function getSuppressionReason(): string { return $this->get('suppression_reason'); }
    public function hasSuppressionReason(): bool { return $this->has('suppression_reason'); }
    /** What created this notification. - `fulfillment_status_updated`: Created by a fulfillment status transition. - `fulfillment_event_created`: Created by a fulfillment timeline event. Value enum: "fulfillment_status_updated", "fulfillment_event_created".
     * @return string
     * @throws SdkError When trigger_type is omitted; use hasTriggerType() or valueOrDefault().
     */
    public function getTriggerType(): string { return $this->get('trigger_type'); }
    public function hasTriggerType(): bool { return $this->has('trigger_type'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
