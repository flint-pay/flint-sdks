<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoicePaymentTermsSnapshotLateFeePolicyFixedAmountMoney $amount_money
 * @property-read ?string $application_mode
 * @property-read int $grace_period_days
 * @property-read ?float $percent
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentTermsSnapshotLateFeePolicyFixed extends Model {
    /** @param array{'amount_money': mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: float, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentTermsSnapshotLateFeePolicyFixed')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoicePaymentTermsSnapshotLateFeePolicyFixedAmountMoney
     */
    public function getAmountMoney(): InvoicePaymentTermsSnapshotLateFeePolicyFixedAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum: "manual", "automatic".
     * @return ?string
     */
    public function getApplicationMode(): ?string { return $this->get('application_mode'); }
    public function hasApplicationMode(): bool { return $this->has('application_mode'); }
    /** Format: int32. minimum: 0. maximum: 365.
     * @return int
     */
    public function getGracePeriodDays(): int { return $this->get('grace_period_days'); }
    public function hasGracePeriodDays(): bool { return $this->has('grace_period_days'); }
    /** Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0. multipleOf: 0.0001.
     * @return ?float
     */
    public function getPercent(): ?float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Value enum: "fixed".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
