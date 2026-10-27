<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventDisputeInquiryClosedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventDisputeInquiryClosedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventDisputeInquiryClosedData')); }
    /** Shape $ (Value): {@see WebhookEventDisputeInquiryClosedDataObject}. A challenge to a collected payment.
     * @return WebhookEventDisputeInquiryClosedDataObject
     */
    public function getObject(): WebhookEventDisputeInquiryClosedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
