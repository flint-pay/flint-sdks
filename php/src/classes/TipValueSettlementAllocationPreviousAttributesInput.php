<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $value_settlement_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TipValueSettlementAllocationPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'value_settlement_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TipValueSettlementAllocationPreviousAttributesInput')); }
    /** The part of the tip this gift card redemption paid. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. anyOf[1] (Value): string. ID of the value settlement Flint recorded for the gift card redemption that paid this part of the tip. Example: "ovst_01KEZF7C00EMVZ016PM34KKFGY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When value_settlement_id is omitted; use hasValueSettlementId() or valueOrDefault().
     */
    public function getValueSettlementId(): mixed { return $this->get('value_settlement_id'); }
    public function hasValueSettlementId(): bool { return $this->has('value_settlement_id'); }
}
