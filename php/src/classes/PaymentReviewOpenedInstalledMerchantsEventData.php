<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewOpenedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewOpenedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewOpenedInstalledMerchantsEventData')); }
    /** A payment review requiring a merchant decision.
     * @return PaymentReviewOpenedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentReviewOpenedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
