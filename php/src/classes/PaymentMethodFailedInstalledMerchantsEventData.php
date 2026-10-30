<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodFailedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodFailedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodFailedInstalledMerchantsEventData')); }
    /** A customer's saved payment details.
     * @return PaymentMethodFailedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentMethodFailedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
