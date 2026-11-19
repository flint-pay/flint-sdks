<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $name
 * @property-read OrderLineItemTaxRequestInput|array<array-key, mixed>|\stdClass $tax
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutQuickPayItemRequestInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'name': string, 'tax'?: OrderLineItemTaxRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutQuickPayItemRequestInput')); }
    /** Positive price for the quick-pay item. amount (Required): integer string. Positive amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. currency (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Name shown for the item. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Tax settings for the item. A line item's tax category and whether it is taxable.
     * @return OrderLineItemTaxRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
}
