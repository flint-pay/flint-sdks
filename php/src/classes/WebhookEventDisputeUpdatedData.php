<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeUpdatedDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeUpdatedDataObject
     */
    public function getObject(): WebhookEventDisputeUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
