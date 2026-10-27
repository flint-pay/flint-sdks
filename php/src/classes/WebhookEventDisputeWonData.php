<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeWonDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeWonData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeWonData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeWonDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeWonDataObject
     */
    public function getObject(): WebhookEventDisputeWonDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
