<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $body
 * @property-read string $expires_at
 * @property-read array<array-key, string> $headers
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class SignedWebhookEndpointDelivery extends Model {
    /** @param array{'body': string, 'expires_at': string, 'headers': \stdClass, 'webhook_endpoint_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SignedWebhookEndpointDelivery')); }
    /** Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding.
     * @return string
     */
    public function getBody(): string { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Application headers from the real sender, including Authorization and any configured HMAC signature. Never log these credentials. * (Value): string.
     * @return array<array-key, string>
     */
    public function getHeaders(): array { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** The authorized sandbox endpoint and JWT audience.
     * @return string
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The event ID, also sent as webhook-id for receiver deduplication.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
