<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutSessionCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionCreatedInstalledMerchantsEventData')); }
    /** A session in which a buyer completes an order's payment.
     * @return CheckoutSessionCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): CheckoutSessionCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
