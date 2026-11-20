<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method
 * @property-read string $webhook_event_id
 * Presence-aware response; omitted optional fields return null. */
final class WebhookStreamTestEvent extends Model {
    /** @param array{'delivery_method': string, 'webhook_event_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookStreamTestEvent')); }
    /** This event is available through the webhook event stream. Value enum: "listener_stream".
     * @return string
     */
    public function getDeliveryMethod(): string { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** ID of the synthetic webhook event.
     * @return string
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
