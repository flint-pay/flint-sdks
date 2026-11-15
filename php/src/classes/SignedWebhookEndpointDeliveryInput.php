<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $body
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read array<array-key, string>|\stdClass $headers
 * @property-read string $webhook_endpoint_id
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SignedWebhookEndpointDeliveryInput extends Model {
    /** @param array{'body': string, 'expires_at': string|\DateTimeInterface, 'headers': array<array-key, string>|\stdClass, 'webhook_endpoint_id': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SignedWebhookEndpointDeliveryInput')); }
    /** Exact UTF-8 JSON delivery bytes. Do not parse and reserialize before forwarding.
     * @return string
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): string { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
    /** JWT expiry, 300 seconds after signing. Existing receiver clock skew rules apply. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Application headers from the real sender, including Authorization and any configured HMAC signature. Never log these credentials. * (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When headers is omitted; use hasHeaders() or valueOrDefault().
     */
    public function getHeaders(): array|object { return $this->get('headers'); }
    public function hasHeaders(): bool { return $this->has('headers'); }
    /** The authorized sandbox endpoint and JWT audience. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The event ID, also sent as webhook-id for receiver deduplication. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
