<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_endpoint_id
 * @property-read array{'api_version'?: string, 'description'?: string|null, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'expected_version'?: int, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsUpdateInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'body': array{'api_version'?: string, 'description'?: string|null, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'expected_version'?: int, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsUpdateInput')); }
    /** Flint webhook endpoint ID. Example: "whep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The request body for: Update webhook endpoint. Example: {"description":"Updated production endpoint","expected_version":1,"status":"active"}.
     * @return array{'api_version'?: string, 'description'?: string|null, 'enabled_events'?: list<string>, 'event_sources'?: list<string>, 'expected_api_version'?: string, 'expected_version'?: int, 'installed_merchant_modes'?: list<string>, 'partner_app_id'?: string, 'signing_methods'?: list<mixed>, 'status'?: string, 'url'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
