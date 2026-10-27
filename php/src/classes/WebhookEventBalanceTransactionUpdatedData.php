<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventBalanceTransactionUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventBalanceTransactionUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventBalanceTransactionUpdatedDataObject}. A change to the merchant's balance.
     * @return WebhookEventBalanceTransactionUpdatedDataObject
     */
    public function getObject(): WebhookEventBalanceTransactionUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
