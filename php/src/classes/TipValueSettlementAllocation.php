<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $value_settlement_id
 * Presence-aware response; omitted optional fields return null. */
final class TipValueSettlementAllocation extends Model {
    /** @param array{'amount_money': mixed, 'value_settlement_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipValueSettlementAllocation')); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getValueSettlementId(): string { return $this->get('value_settlement_id'); }
    public function hasValueSettlementId(): bool { return $this->has('value_settlement_id'); }
}
