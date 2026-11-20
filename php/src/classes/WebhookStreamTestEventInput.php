<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method
 * @property-read string $webhook_event_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookStreamTestEventInput extends Model {
    /** @param array{'delivery_method': string, 'webhook_event_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookStreamTestEventInput')); }
    /** This event is available through the webhook event stream. Value enum: "listener_stream".
     * @return string
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): string { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** ID of the synthetic webhook event. Example: "whev_01KEZF7C00362MS3HV970TRZGS".
     * @return string
     * @throws SdkError When webhook_event_id is omitted; use hasWebhookEventId() or valueOrDefault().
     */
    public function getWebhookEventId(): string { return $this->get('webhook_event_id'); }
    public function hasWebhookEventId(): bool { return $this->has('webhook_event_id'); }
}
