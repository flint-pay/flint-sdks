<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'closed_at': string|\DateTimeInterface, 'collection_mode'?: string, 'credit_money': array{'amount': int, 'currency': string}|object, 'customer_id'?: string, 'delivery_mode'?: string, 'invoice_id': string, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'order_id'?: string, 'outstanding_money'?: array{'amount': int, 'currency': string}|object, 'refund_status'?: string, 'resource_updated_at': string|\DateTimeInterface, 'status': string, 'version': string}|object $data
 * @property-read string $event_type
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read array{'id': string, 'idempotency_key': string}|object|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class Webhook_invoice_credited_merchantInput extends Model {
    /** @param array{'data': array{'closed_at': string|\DateTimeInterface, 'collection_mode'?: string, 'credit_money': array{'amount': int, 'currency': string}|object, 'customer_id'?: string, 'delivery_mode'?: string, 'invoice_id': string, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'order_id'?: string, 'outstanding_money'?: array{'amount': int, 'currency': string}|object, 'refund_status'?: string, 'resource_updated_at': string|\DateTimeInterface, 'status': string, 'version': string}|object, 'event_type': string, 'api_version': string, 'created_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': array{'id': string, 'idempotency_key': string}|object|null, 'test'?: bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Webhook_invoice_credited_merchantInput')); }
    /** @return array{'closed_at': string|\DateTimeInterface, 'collection_mode'?: string, 'credit_money': array{'amount': int, 'currency': string}|object, 'customer_id'?: string, 'delivery_mode'?: string, 'invoice_id': string, 'invoice_number': string, 'issued_at'?: string|\DateTimeInterface, 'order_id'?: string, 'outstanding_money'?: array{'amount': int, 'currency': string}|object, 'refund_status'?: string, 'resource_updated_at': string|\DateTimeInterface, 'status': string, 'version': string}|object
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array|object { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return int
     * @throws SdkError When payload_version is omitted; use hasPayloadVersion() or valueOrDefault().
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** @return array{'id': string, 'idempotency_key': string}|object|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): array|object|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** @return bool
     * @throws SdkError When test is omitted; use hasTest() or valueOrDefault().
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
