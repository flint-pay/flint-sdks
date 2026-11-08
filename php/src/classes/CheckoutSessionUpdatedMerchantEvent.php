<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $created_at
 * @property-read CheckoutSessionUpdatedMerchantEventData $data
 * @property-read string $event_source
 * @property-read string $event_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read int $payload_version
 * @property-read CheckoutSessionUpdatedMerchantEventRequest|null $request
 * @property-read ?string $sandbox_id
 * @property-read bool $test
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionUpdatedMerchantEvent extends Model {
    /** @param array{'api_version': string, 'created_at': string, 'data': object{'object': object{'active_payment_attempt'?: mixed, 'buyer_contact'?: mixed, 'buyer_fields'?: mixed, 'can_save_payment_method'?: bool, 'can_save_payment_method_with_phone'?: bool, 'checkout_session_id': string, 'client_reference': string|null, 'closed_reason_message'?: string, 'created_at': string, 'custom_field_answers': list<mixed>, 'custom_text'?: mixed, 'customer'?: mixed, 'customer_id'?: string, 'customer_prefill'?: mixed, 'delivery'?: mixed, 'delivery_method_ids': list<string>, 'delivery_selection_required': bool, 'expires_at'?: string, 'expires_in_seconds'?: int, 'external_reference_id'?: string, 'gift_card_challenge'?: mixed, 'invoice'?: mixed, 'invoice_id'?: string, 'is_in_recovery': bool, 'legal'?: mixed, 'merchant_icon'?: mixed, 'merchant_id': string, 'merchant_logo'?: mixed, 'merchant_name'?: string, 'merchant_support'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: string, 'page_origin'?: string, 'payment_collection'?: mixed, 'payment_intent_ids'?: list<string>, 'payment_intents'?: list<mixed>, 'payment_link'?: mixed, 'payment_link_id'?: string, 'payment_link_image'?: mixed, 'payment_method_save'?: mixed, 'payment_return_url'?: string, 'payments'?: mixed, 'prefill'?: mixed, 'problems': list<mixed>, 'promotion_config'?: mixed, 'recovery_expires_at'?: string|null, 'recovery_payment_attempt_id'?: string, 'redirects'?: mixed, 'save_payment_method_requires_verification'?: bool, 'save_payment_method_types'?: list<string>, 'setup_collection'?: mixed, 'show_flint_mark'?: bool, 'status': string, 'subscription_plan_id'?: string, 'subscription_terms'?: mixed, 'superseding_checkout_session_id'?: string, 'supported_actions': list<string>, 'surface': string, 'tax'?: mixed, 'terminal_reason'?: string, 'theme'?: mixed, 'tip'?: mixed, 'type': string, 'updated_at': string, 'url'?: string, 'version': int}, 'previous_attributes'?: \stdClass}, 'event_source': string, 'event_type': string, 'merchant_id': string, 'mode': string, 'payload_version': int, 'request': object{'id': string, 'idempotency_key'?: string}|null, 'sandbox_id'?: string, 'test': bool, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionUpdatedMerchantEvent')); }
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
     * @return CheckoutSessionUpdatedMerchantEventData
     */
    public function getData(): CheckoutSessionUpdatedMerchantEventData { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** The origin of the event. Selects the webhook envelope and the fields in source. Value enum: "merchant".
     * @return string
     */
    public function getEventSource(): string { return $this->get('event_source'); }
    public function hasEventSource(): bool { return $this->has('event_source'); }
    /** The resource change or condition this event announces. Value enum: "checkout_session.updated".
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
     * @return CheckoutSessionUpdatedMerchantEventRequest|null
     */
    public function getRequest(): CheckoutSessionUpdatedMerchantEventRequest|null { return $this->get('request'); }
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
