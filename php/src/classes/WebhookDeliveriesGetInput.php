<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $webhook_delivery_id
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookDeliveriesGetInput extends Model {
    /** @param array{'webhook_delivery_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookDeliveriesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When webhook_delivery_id is omitted; use hasWebhookDeliveryId() or valueOrDefault().
     */
    public function getWebhookDeliveryId(): string { return $this->get('webhook_delivery_id'); }
    public function hasWebhookDeliveryId(): bool { return $this->has('webhook_delivery_id'); }
}
