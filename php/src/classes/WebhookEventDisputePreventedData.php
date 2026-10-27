<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputePreventedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputePreventedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputePreventedData')); }
    /** Shape $ (Value): {@see WebhookEventDisputePreventedDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputePreventedDataObject
     */
    public function getObject(): WebhookEventDisputePreventedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
