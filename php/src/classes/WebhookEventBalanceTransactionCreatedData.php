<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventBalanceTransactionCreatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventBalanceTransactionCreatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionCreatedData')); }
    /** Shape $ (Value): {@see WebhookEventBalanceTransactionCreatedDataObject}. A change to the merchant's balance.
     * @return WebhookEventBalanceTransactionCreatedDataObject
     */
    public function getObject(): WebhookEventBalanceTransactionCreatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
