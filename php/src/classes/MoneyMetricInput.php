<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float $change_percent
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $current_money
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $previous_money
 * Presence-aware input; omitted fields throw when accessed. */
final class MoneyMetricInput extends Model {
    /** @param array{'change_percent'?: int|float, 'current_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'previous_money'?: SignedMoneyInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMetricInput')); }
    /** @return int|float
     * @throws SdkError When change_percent is omitted; use hasChangePercent() or valueOrDefault().
     */
    public function getChangePercent(): int|float { return $this->get('change_percent'); }
    public function hasChangePercent(): bool { return $this->has('change_percent'); }
    /** @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When current_money is omitted; use hasCurrentMoney() or valueOrDefault().
     */
    public function getCurrentMoney(): mixed { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When previous_money is omitted; use hasPreviousMoney() or valueOrDefault().
     */
    public function getPreviousMoney(): mixed { return $this->get('previous_money'); }
    public function hasPreviousMoney(): bool { return $this->has('previous_money'); }
}
