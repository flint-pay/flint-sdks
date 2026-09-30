<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $change_percent
 * @property-read SignedMoney $current_money
 * @property-read SignedMoney $previous_money
 * Presence-aware response; omitted fields throw when accessed. */
final class MoneyMetric extends Model {
    /** @param array{'change_percent'?: float, 'current_money': mixed, 'previous_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMetric')); }
    /** @return float
     * @throws SdkError When change_percent is omitted; use hasChangePercent() or valueOrDefault().
     */
    public function getChangePercent(): float { return $this->get('change_percent'); }
    public function hasChangePercent(): bool { return $this->has('change_percent'); }
    /** @return SignedMoney
     * @throws SdkError When current_money is omitted; use hasCurrentMoney() or valueOrDefault().
     */
    public function getCurrentMoney(): SignedMoney { return $this->get('current_money'); }
    public function hasCurrentMoney(): bool { return $this->has('current_money'); }
    /** @return SignedMoney
     * @throws SdkError When previous_money is omitted; use hasPreviousMoney() or valueOrDefault().
     */
    public function getPreviousMoney(): SignedMoney { return $this->get('previous_money'); }
    public function hasPreviousMoney(): bool { return $this->has('previous_money'); }
}
