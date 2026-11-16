<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $value_settlement_id
 * Presence-aware response; omitted optional fields return null. */
final class TipValueSettlementAllocationPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'value_settlement_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipValueSettlementAllocationPreviousAttributes')); }
    /** The part of the tip this gift card redemption paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. anyOf[1] (Value): string. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getValueSettlementId(): string|null { return $this->get('value_settlement_id'); }
    public function hasValueSettlementId(): bool { return $this->has('value_settlement_id'); }
}
