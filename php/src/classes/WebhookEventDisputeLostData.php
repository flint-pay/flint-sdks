<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeLostDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeLostData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeLostData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeLostDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeLostDataObject
     */
    public function getObject(): WebhookEventDisputeLostDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
