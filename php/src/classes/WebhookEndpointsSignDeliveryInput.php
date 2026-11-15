<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_endpoint_id
 * @property-read array{'webhook_event_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsSignDeliveryInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'body': array{'webhook_event_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsSignDeliveryInput')); }
    /** The caller's own merchant event-delivery endpoint in the selected sandbox. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The request body for: Sign a sandbox webhook delivery. Example: {"webhook_event_id":"whev_01KEZF7C00BW7XQJ98PQ8EHA81"}.
     * @return array{'webhook_event_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
