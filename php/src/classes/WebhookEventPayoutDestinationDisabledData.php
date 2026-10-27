<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutDestinationDisabledDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutDestinationDisabledData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutDestinationDisabledData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutDestinationDisabledDataObject}. The account that receives merchant payouts.
     * @return WebhookEventPayoutDestinationDisabledDataObject
     */
    public function getObject(): WebhookEventPayoutDestinationDisabledDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
