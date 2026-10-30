<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read PromotionCreatedMerchantEventData $data
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read PromotionCreatedMerchantEventRequest|null $request
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCreatedMerchantEvent extends Model {
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': object{'application_method': mixed, 'available': bool, 'codes'?: list<mixed>, 'codes_summary'?: mixed, 'combines_with': mixed, 'created_at'?: string, 'description'?: string, 'discount_class': string, 'display_name': string, 'eligibility_rules'?: mixed, 'exclusivity'?: mixed, 'external_reference_id'?: string, 'max_uses'?: int, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string, 'promotion_id': string, 'redemption_type': string, 'schedule'?: mixed, 'status': string, 'unavailable_reason'?: string, 'updated_at'?: string, 'uses_count': int, 'version': int}}, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': object{'id': string, 'idempotency_key'?: string}|null, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCreatedMerchantEvent')); }
    /** Format: date.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** data
     * @return PromotionCreatedMerchantEventData
     */
    public function getData(): PromotionCreatedMerchantEventData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Value enum: "promotion.created".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** merchant_id
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** request
     * @return PromotionCreatedMerchantEventRequest|null
     */
    public function getRequest(): PromotionCreatedMerchantEventRequest|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** webhook_event_id
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
