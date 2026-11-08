<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationRequestInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $external_reference_id
 * @property-read InvoiceLateFeePolicyRequestInput|array<array-key, mixed>|\stdClass $late_fee_policy
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoicePaymentTermRequestInput extends Model {
    /** @param array{'calculation': InvoicePaymentTermCalculationRequestInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'late_fee_policy'?: InvoiceLateFeePolicyRequestInput|array<array-key, mixed>|\stdClass, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoicePaymentTermRequestInput')); }
    /** Rule used to calculate the invoice's due date when it is issued. Required on create; omit it on update to preserve the current rule. How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.
     * @return InvoicePaymentTermCalculationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** One-time late fee policy for unpaid invoices using this term. Omit it to use no late fee on create or preserve the current policy on update; send null on update to remove it. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically.
     * @return InvoiceLateFeePolicyRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** Name of the payment term shown on invoices. Required on create; omit it on update to preserve the current name. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
