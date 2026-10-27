<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutDestinationArchivedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutDestinationArchivedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationArchivedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutDestinationArchivedDataObject}. The account that receives merchant payouts.
     * @return WebhookEventPayoutDestinationArchivedDataObject
     */
    public function getObject(): WebhookEventPayoutDestinationArchivedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
