<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $webhook_endpoint_id
 * @property-read array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'mode'?: string, 'partner_app_id'?: string, 'url'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsUpdateInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'mode'?: string, 'partner_app_id'?: string, 'url'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsUpdateInput')); }
    /** @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'api_version'?: string, 'description'?: string, 'enabled'?: bool, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'mode'?: string, 'partner_app_id'?: string, 'url'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
