<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculation
 * @property-read string|null $invoice_payment_term_id
 * @property-read InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $late_fee_policy
 * @property-read string|null $name
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsSnapshotPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: InvoicePaymentTermCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'invoice_payment_term_id'?: string|null, 'late_fee_policy'?: InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshotPreviousAttributesInput')); }
    /** Rule used to calculate the invoice's due date when it is issued. anyOf[1] (Value): {@see InvoicePaymentTermCalculationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoicePaymentTermCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** ID of the payment term captured on this invoice. anyOf[1] (Value): string. ID of the payment term captured on this invoice. Example: "ipt_01KEZF7C0064N1V301BBMQ37R4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_payment_term_id is omitted; use hasInvoicePaymentTermId() or valueOrDefault().
     */
    public function getInvoicePaymentTermId(): mixed { return $this->get('invoice_payment_term_id'); }
    public function hasInvoicePaymentTermId(): bool { return $this->has('invoice_payment_term_id'); }
    /** One-time late fee policy captured with this term. Absent when no late fee policy applies. anyOf[1] (Value): {@see InvoiceLateFeePolicyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoiceLateFeePolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Name of the payment term shown on invoices. anyOf[1] (Value): string. Name of the payment term shown on invoices. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Version of the invoice payment term captured in this snapshot. anyOf[1] (Value): integer. Version of the invoice payment term captured in this snapshot. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
