<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read int $expected_version
 * @property-read string $external_reference_id
 * @property-read array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null $late_fee_policy
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentTermsUpdateParams extends Model {
    /** @param array{'calculation'?: InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'external_reference_id'?: string, 'late_fee_policy'?: array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null, 'name'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsUpdateParams')); }
    /** How an invoice due date is calculated from payment terms, such as on receipt, net days, or a day of the month.
     * @return InvoicePaymentTermCalculationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Optional version last read by the caller. Format: uint32. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /**  anyOf[1] (Value): {@see InvoiceLateFeePolicyInput}. A late fee for overdue invoices: a fixed amount or a percentage, a grace period in days, and whether Flint applies it automatically. anyOf[2] (Value): null.
     * @return array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object|null
     * @throws SdkError When late_fee_policy is omitted; use hasLateFeePolicy() or valueOrDefault().
     */
    public function getLateFeePolicy(): mixed { return $this->get('late_fee_policy'); }
    public function hasLateFeePolicy(): bool { return $this->has('late_fee_policy'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
