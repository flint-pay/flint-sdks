<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read \stdClass|null $calculation
 * @property-read string|null $invoice_payment_term_id
 * @property-read \stdClass|null $late_fee_policy
 * @property-read string|null $name
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentTermsSnapshotPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'invoice_payment_term_id'?: mixed, 'late_fee_policy'?: mixed, 'name'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshotPreviousAttributes')); }
    /** Rule used to calculate the invoice's due date when it is issued. anyOf[1] (Value): {@see InvoicePaymentTermCalculationPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getCalculation(): \stdClass|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** ID of the payment term captured on this invoice. anyOf[1] (Value): string. ID of the payment term captured on this invoice. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoicePaymentTermId(): string|null { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** One-time late fee policy captured with this term. Absent when no late fee policy applies. anyOf[1] (Value): {@see InvoiceLateFeePolicyPreviousAttributes}. anyOf[2] (Value): null.
     * @return \stdClass|null
     */
    public function getLateFeePolicy(): \stdClass|null { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Name of the payment term shown on invoices. anyOf[1] (Value): string. Name of the payment term shown on invoices. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Version of the invoice payment term captured in this snapshot. anyOf[1] (Value): integer. Version of the invoice payment term captured in this snapshot. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
