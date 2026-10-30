<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'object': array{'capture_mode': string, 'captured_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string|null, 'order_id': string|null, 'order_payment_attempt_id': string|null, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_refundable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'sale_reference': string|null, 'source_type': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object $data
 * @property-read string $event_type
 * @property-read string $partner_app_id
 * @property-read int $payload_version
 * @property-read array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object $source
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRedemptionUpdatedInstalledMerchantsEventInput extends Model {
    /** @param array{'api_version': string, 'created_at': string|\DateTimeInterface, 'data': array{'object': array{'capture_mode': string, 'captured_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string|null, 'order_id': string|null, 'order_payment_attempt_id': string|null, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_refundable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'sale_reference': string|null, 'source_type': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object, 'event_type': string, 'partner_app_id': string, 'payload_version': int, 'source': array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionUpdatedInstalledMerchantsEventInput')); }
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
    /**  object (Required): object and {@see GiftCardRedemptionInput}. Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`. object.capture_mode (Required): string.  Value enum: "automatic", "manual". object.captured_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.created_at (Required): string. RFC3339 timestamp. Format: date-time. object.expires_at (Required): string or null. When an uncaptured manual reservation expires. null for automatic capture, which posts immediately. Format: date-time. object.gift_card_id (Required): string. object.gift_card_redemption_id (Required): string. object.idempotency_key (Required): string or null. Your Idempotency-Key for the command that created this record. null when Flint created it or no key was sent. object.order_id (Required): string or null. object.order_payment_attempt_id (Required): string or null. The order payment attempt the redemption belongs to. Set for source_type flint_order; null for external. object.refunded_money (Required): {@see MoneyValueInput}. Total refunded against this redemption across all refunds. Each refund lists its share in `tender_allocations`. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.remaining_refundable_money (Required): {@see MoneyValueInput}. Captured value not yet refunded. A refund allocation to this redemption can be at most this amount. Zero while the redemption is reserved, canceled, or expired. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.requested_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.reserved_money (Required): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. object.sale_reference (Required): string or null. Your reference for the sale the redemption pays for. Set for source_type external; null for flint_order. maxLength: 255. object.source_type (Required): string.  Value enum: "external", "flint_order". object.status (Required): string.  Value enum: "reserved", "captured", "canceled", "expired". object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. object.version (Required): integer. Format: int64.
     * @return array{'object': array{'capture_mode': string, 'captured_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'gift_card_id': string, 'gift_card_redemption_id': string, 'idempotency_key': string|null, 'order_id': string|null, 'order_payment_attempt_id': string|null, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'remaining_refundable_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'reserved_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'sale_reference': string|null, 'source_type': string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "gift_card_redemption.updated".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The source of a partner webhook event, selected by type. environment_grant_id (Required): string. merchant_id (Required): string. mode (Required): string.  Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id (Optional): string. type (Required): string.  Value enum: "installed_merchants". oneOf[1] (Value): {@see PartnerWebhookEnvelopeSourcePartnerAppInput}. The partner_app source of a partner webhook event. oneOf[2] (Value): {@see PartnerWebhookEnvelopeSourceInstalledMerchantsInput}. The installed_merchants source of a partner webhook event.
     * @return array{'merchant_id': string, 'partner_app_install_id': string, 'type': string}|object|array{'environment_grant_id': string, 'merchant_id': string, 'mode': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'type': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): array|object { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
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
