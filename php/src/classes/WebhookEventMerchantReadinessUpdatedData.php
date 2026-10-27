<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantReadinessUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventMerchantReadinessUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantReadinessUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventMerchantReadinessUpdatedDataObject}. The business accepting payments.
     * @return WebhookEventMerchantReadinessUpdatedDataObject
     */
    public function getObject(): WebhookEventMerchantReadinessUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
