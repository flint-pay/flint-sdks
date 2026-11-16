<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteCorrectionRequestAmountPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteCorrectionRequestAmountPreviousAttributesInput')); }
    /** Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Value enum: "amount". anyOf[1] (Value): string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Value enum: "amount". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
