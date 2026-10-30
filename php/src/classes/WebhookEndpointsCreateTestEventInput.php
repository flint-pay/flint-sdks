<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_endpoint_id
 * @property-read array{'event_type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEndpointsCreateTestEventInput extends Model {
    /** @param array{'webhook_endpoint_id': string, 'body': array{'event_type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEndpointsCreateTestEventInput')); }
    /** Flint webhook endpoint ID. Example: "whep_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_endpoint_id is omitted; use hasWebhookEndpointId() or valueOrDefault().
     */
    public function getWebhookEndpointId(): string { return $this->get('webhook_endpoint_id'); }
    public function hasWebhookEndpointId(): bool { return $this->has('webhook_endpoint_id'); }
    /** The request body for: Create webhook test event. Example: {"event_type":"payment_intent.succeeded"}.
     * @return array{'event_type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
