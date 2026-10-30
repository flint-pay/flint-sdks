<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentCreatedInstalledMerchantsEventData')); }
    /** A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.
     * @return InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
