<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PaymentReviewReopenedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewReopenedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewReopenedInstalledMerchantsEventData')); }
    /** A payment review requiring a merchant decision.
     * @return PaymentReviewReopenedInstalledMerchantsEventDataObject
     */
    public function getObject(): PaymentReviewReopenedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
