<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutDestinationCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutDestinationCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutDestinationCreatedDataObject}. The account that receives merchant payouts.
     * @return WebhookEventPayoutDestinationCreatedDataObject
     */
    public function getObject(): WebhookEventPayoutDestinationCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
