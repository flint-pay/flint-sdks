<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'reason_message'?: string, 'webhook_endpoint_id': string, 'webhook_event_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveriesCreateInput extends Model {
    /** @param array{'body': array{'reason_message'?: string, 'webhook_endpoint_id': string, 'webhook_event_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveriesCreateInput')); }
    /** The request body for: Create webhook delivery. Example: {"reason_message":"Recovering after an endpoint outage","webhook_endpoint_id":"whep_01KEZF7C00940MBDY86SCZ1NW9","webhook_event_id":"whev_01KEZF7C00BW7XQJ98PQ8EHA81"}.
     * @return array{'reason_message'?: string, 'webhook_endpoint_id': string, 'webhook_event_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
