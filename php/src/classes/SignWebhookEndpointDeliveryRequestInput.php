<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SignWebhookEndpointDeliveryRequestInput extends Model {
    /** @param array{'webhook_event_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SignWebhookEndpointDeliveryRequestInput')); }
    /** Retained merchant event in the endpoint's sandbox. The endpoint must subscribe to its event type. minLength: 1. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
