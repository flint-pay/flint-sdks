<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutReversedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutReversedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutReversedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutReversedDataObject}. Funds sent from a merchant balance to a payout destination.
     * @return WebhookEventPayoutReversedDataObject
     */
    public function getObject(): WebhookEventPayoutReversedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
