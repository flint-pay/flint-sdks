<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventMerchantUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventMerchantUpdatedDataObject}. The business accepting payments.
     * @return WebhookEventMerchantUpdatedDataObject
     */
    public function getObject(): WebhookEventMerchantUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
