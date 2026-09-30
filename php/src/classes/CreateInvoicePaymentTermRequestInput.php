<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read string $external_reference_id
 * @property-read InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass $late_fee_policy
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoicePaymentTermRequestInput extends Model {
    /** @param array{'calculation': InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass, 'external_reference_id'?: string, 'late_fee_policy'?: InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoicePaymentTermRequestInput')); }
    /** @return InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return InvoiceLateFeePolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
