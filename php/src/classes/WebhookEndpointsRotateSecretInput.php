<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_endpoint_id
 * @property-read array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsRotateSecretInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'body'?: array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsRotateSecretInput')); }
    /** Flint webhook endpoint ID. Example: "whep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The request body for: Rotate webhook secret. Example: {"expire_previous_secret_at":"2026-03-18T14:30:00Z"}.
     * @return array{'expected_version'?: int, 'expire_previous_secret_at'?: string|\DateTimeInterface}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
