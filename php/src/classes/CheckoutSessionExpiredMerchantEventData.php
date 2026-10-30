<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionExpiredMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionExpiredMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionExpiredMerchantEventData')); }
    /** A session in which a buyer completes an order's payment.
     * @return CheckoutSessionExpiredMerchantEventDataObject
     */
    public function getObject(): CheckoutSessionExpiredMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
