<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $application_mode
 * @property-read int $grace_period_days
 * @property-read float $percent
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class BuyerInvoiceLateFeeLateFeePolicyFixed extends Model {
    /** @param array{'amount_money': mixed, 'application_mode'?: string, 'grace_period_days': int, 'percent'?: float, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerInvoiceLateFeeLateFeePolicyFixed')); }
    /** @return MoneyValue
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When application_mode is omitted; use hasApplicationMode() or valueOrDefault().
     */
    public function getApplicationMode(): string { return $this->get('application_mode'); }
    public function hasApplicationMode(): bool { return $this->has('application_mode'); }
    /** @return int
     * @throws SdkError When grace_period_days is omitted; use hasGracePeriodDays() or valueOrDefault().
     */
    public function getGracePeriodDays(): int { return $this->get('grace_period_days'); }
    public function hasGracePeriodDays(): bool { return $this->has('grace_period_days'); }
    /** @return float
     * @throws SdkError When percent is omitted; use hasPercent() or valueOrDefault().
     */
    public function getPercent(): float { return $this->get('percent'); }
    public function hasPercent(): bool { return $this->has('percent'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
