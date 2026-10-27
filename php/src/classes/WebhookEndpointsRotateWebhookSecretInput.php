<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $webhook_endpoint_id
 * @property-read array{'expected_version'?: string, 'expire_previous_secret_at'?: string|\DateTimeInterface, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsRotateWebhookSecretInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'body'?: array{'expected_version'?: string, 'expire_previous_secret_at'?: string|\DateTimeInterface, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsRotateWebhookSecretInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Rotate webhook secret.
     * @return array{'expected_version'?: string, 'expire_previous_secret_at'?: string|\DateTimeInterface, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
