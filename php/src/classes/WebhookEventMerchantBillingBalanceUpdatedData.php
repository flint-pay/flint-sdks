<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read WebhookEventMerchantBillingBalanceUpdatedDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventMerchantBillingBalanceUpdatedData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantBillingBalanceUpdatedData')); }
    /** Shape $ (Value): {@see WebhookEventMerchantBillingBalanceUpdatedDataObject}. Current Flint merchant billing balance for one billing account and currency.
     * @return WebhookEventMerchantBillingBalanceUpdatedDataObject
     */
    public function getObject(): WebhookEventMerchantBillingBalanceUpdatedDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
