<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $application_mode
 * @property-read int $grace_period_days
 * @property-read int|float $percent
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceLateFeePolicyInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: int|float, 'type': string}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'application_mode'?: string, 'grace_period_days': int, 'percent': int|float, 'type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeePolicyInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Whether Flint applies the one-time fee automatically after the grace period. Omission defaults to manual. Frozen when the invoice is issued. Default: "manual". Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When application_mode is omitted; use hasApplicationMode() or valueOrDefault().
     */
    public function getApplicationMode(): string { return $this->get('application_mode'); }
    public function hasApplicationMode(): bool { return $this->has('application_mode'); }
    /** Shape $ (Value): integer. Format: int32. minimum: 0. maximum: 365.
     * @return int
     * @throws SdkError When grace_period_days is omitted; use hasGracePeriodDays() or valueOrDefault().
     */
    public function getGracePeriodDays(): int { return $this->get('grace_period_days'); }
    public function hasGracePeriodDays(): bool { return $this->has('grace_period_days'); }
    /** Shape $ (Value): number. Percentage applied to the fee base_outstanding_money. maximum: 100. exclusiveMinimum: 0. multipleOf: 0.0001.
     * @return int|float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): int|float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** Shape $ (Value): string.  Value enum: "fixed", "percentage".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
