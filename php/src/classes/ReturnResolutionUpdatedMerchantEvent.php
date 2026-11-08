<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read ReturnResolutionUpdatedMerchantEventData $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read ReturnResolutionUpdatedMerchantEventRequest|null $request
 * @property-read ?string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionUpdatedMerchantEvent extends Model {
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': object{'action_reason'?: string, 'action_required_by'?: string, 'adjustments': list<mixed>, 'buyer_payment_amount_money': mixed, 'buyer_refund_amount_money': mixed, 'canceled_at'?: string, 'canceled_by'?: mixed, 'cancellation_reason'?: string, 'cancellation_reason_message'?: string, 'confirmed_at'?: string, 'confirmed_by'?: mixed, 'corrects_return_resolution_id'?: string, 'created_at': string, 'created_by': mixed, 'credit_adjustment_money': mixed, 'deduction_money': mixed, 'execution_blockers': list<mixed>, 'external_reference_id'?: string, 'failure_code'?: string, 'failure_message'?: string, 'fulfilled_at'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata': mixed, 'payment_intent_ids': list<string>, 'payment_intents'?: list<mixed>, 'pricing_basis'?: string, 'refund_ids': list<string>, 'refunds'?: list<mixed>, 'replacement_line_items': list<mixed>, 'replacement_order'?: mixed, 'replacement_order_id'?: string, 'replacement_total_money': mixed, 'resolution_type': string, 'return_id': string, 'return_policy_revision_id'?: string, 'return_resolution_id': string, 'returned_total_money': mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int}, 'previous_attributes'?: \stdClass}, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': object{'id': string, 'idempotency_key'?: string}|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionUpdatedMerchantEvent')); }
    /** API version used to render this delivery attempt. The older of the event version and the endpoint version when the attempt runs, with default resolved to the merchant pin. Format: date.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** When Flint recorded the event. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The resource snapshot recorded for this event and rendered at the delivery API version.
     * @return ReturnResolutionUpdatedMerchantEventData
     */
    public function getData(): ReturnResolutionUpdatedMerchantEventData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "return_resolution.updated".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** 2 for every current event. 1 only for an event queued before 2026-10-16 and delivered afterwards, which keeps its previous data shape. Value enum: 1, 2.
     * @return int
     */
    public function getPayloadVersion(): int { return $this->get('payload_version'); }
    public function hasPayloadVersion(): bool { return $this->has('payload_version'); }
    /** The originating request. `null` when the event has no originating request ID.
     * @return ReturnResolutionUpdatedMerchantEventRequest|null
     */
    public function getRequest(): ReturnResolutionUpdatedMerchantEventRequest|null { return $this->get('request'); }
    public function hasRequest(): bool { return $this->has('request'); }
    /** Public sandbox ID for this event. Present exactly when mode is test; omitted in live mode.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** true for a synthetic event sent from the test-events endpoint, false otherwise.
     * @return bool
     */
    public function getTest(): bool { return $this->get('test'); }
    public function hasTest(): bool { return $this->has('test'); }
    /** Stable ID of the recorded webhook event, shared by its delivery attempts.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
