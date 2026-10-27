<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeNeedsResponseDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeNeedsResponseData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeNeedsResponseData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeNeedsResponseDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeNeedsResponseDataObject
     */
    public function getObject(): WebhookEventDisputeNeedsResponseDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
