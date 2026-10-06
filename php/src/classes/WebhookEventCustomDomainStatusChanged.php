<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventCustomDomainStatusChangedData $data
 * @property-read string $event_type
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read WebhookEventCustomDomainStatusChangedRequest|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventCustomDomainStatusChanged extends Model {
    /** @param array{'data': object{'object': mixed}, 'event_type': string, 'api_version': string, 'created_at': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': object{'id': string, 'idempotency_key': string}|null, 'test'?: bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventCustomDomainStatusChanged')); }
    /** @return WebhookEventCustomDomainStatusChangedData
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): WebhookEventCustomDomainStatusChangedData { return $this->get('data'); }
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
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
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
    /** @return WebhookEventCustomDomainStatusChangedRequest|null
     * @throws SdkError When request is omitted; use hasRequest() or valueOrDefault().
     */
    public function getRequest(): WebhookEventCustomDomainStatusChangedRequest|null { return $this->get('request'); }
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
