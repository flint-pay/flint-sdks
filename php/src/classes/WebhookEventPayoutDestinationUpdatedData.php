<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutDestinationUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutDestinationUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutDestinationUpdatedDataObject}. The account that receives merchant payouts.
     * @return WebhookEventPayoutDestinationUpdatedDataObject
     */
    public function getObject(): WebhookEventPayoutDestinationUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
