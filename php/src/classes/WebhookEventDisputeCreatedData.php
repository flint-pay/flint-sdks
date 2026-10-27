<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeCreatedDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeCreatedDataObject
     */
    public function getObject(): WebhookEventDisputeCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
