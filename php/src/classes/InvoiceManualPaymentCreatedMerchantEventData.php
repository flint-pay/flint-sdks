<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceManualPaymentCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentCreatedMerchantEventData')); }
    /** A recorded offline payment against an invoice. Its amount contributes to invoice paid_money while recorded; reversing it returns its full amount to outstanding_money. A payment can cover principal and late fees. Manual payments are separate from online payment attempts.
     * @return InvoiceManualPaymentCreatedMerchantEventDataObject
     */
    public function getObject(): InvoiceManualPaymentCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}
