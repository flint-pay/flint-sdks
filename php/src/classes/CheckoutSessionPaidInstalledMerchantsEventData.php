<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionPaidInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionPaidInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionPaidInstalledMerchantsEventData')); }
    /** A session in which a buyer completes an order's payment.
     * @return CheckoutSessionPaidInstalledMerchantsEventDataObject
     */
    public function getObject(): CheckoutSessionPaidInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
