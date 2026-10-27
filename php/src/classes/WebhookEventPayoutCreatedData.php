<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventPayoutCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPayoutCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPayoutCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventPayoutCreatedDataObject}. Funds sent from a merchant balance to a payout destination.
     * @return WebhookEventPayoutCreatedDataObject
     */
    public function getObject(): WebhookEventPayoutCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
