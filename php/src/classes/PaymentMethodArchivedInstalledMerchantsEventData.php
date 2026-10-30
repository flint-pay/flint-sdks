<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentMethodArchivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentMethodArchivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodArchivedInstalledMerchantsEventData')); }
    /** A customer's saved payment details.
     * @return PaymentMethodArchivedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentMethodArchivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
