<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookEventsGetInput extends Model {
    /** @param array{'webhook_event_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventsGetInput')); }
    /** Flint webhook event ID. Example: "whev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
