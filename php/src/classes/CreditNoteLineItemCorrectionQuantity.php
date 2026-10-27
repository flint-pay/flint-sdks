<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CreditNoteLineItemCorrectionQuantityAmountMoney $amount_money
 * @property-read string $quantity
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteLineItemCorrectionQuantity extends Model {
    /** @param array{'amount_money'?: mixed, 'quantity': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteLineItemCorrectionQuantity')); }
    /** Shape $ (Value): {@see CreditNoteLineItemCorrectionQuantityAmountMoney}. Positive billed value to credit in the invoice currency, no more than the frozen source line's remaining value. Consumes proportional remaining tax and discount without consuming quantity; later quantity corrections use the reduced remaining value. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?CreditNoteLineItemCorrectionQuantityAmountMoney
     */
    public function getAmountMoney(): ?CreditNoteLineItemCorrectionQuantityAmountMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): integer string. Positive whole units; fractional quantities are not supported. No more than the source line's remaining uncredited quantity. Credits that fraction of its remaining billed value, rounded half up once at line level. Earlier amount corrections reduce that remaining value without consuming quantity. A share that rounds to zero is rejected; use a larger quantity or a positive amount. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. quantity credits whole units and requires quantity. amount credits a named figure and requires amount_money. The two are mutually exclusive. Value enum: "quantity".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
