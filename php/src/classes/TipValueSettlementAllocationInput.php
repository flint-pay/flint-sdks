<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $value_settlement_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TipValueSettlementAllocationInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'value_settlement_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipValueSettlementAllocationInput')); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When value_settlement_id is omitted; use hasValueSettlementId() or valueOrDefault().
     */
    public function getValueSettlementId(): string { return $this->get('value_settlement_id'); }
    public function hasValueSettlementId(): bool { return $this->has('value_settlement_id'); }
}
