<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewClosedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewClosedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewClosedInstalledMerchantsEventData')); }
    /** A payment review requiring a merchant decision.
     * @return PaymentReviewClosedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentReviewClosedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
