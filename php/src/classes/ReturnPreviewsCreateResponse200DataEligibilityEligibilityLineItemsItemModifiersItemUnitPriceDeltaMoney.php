<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $amount
 * @property-read string $currency
 * Presence-aware response; omitted optional fields return null. */
final class ReturnPreviewsCreateResponse200DataEligibilityEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney extends Model {
    /** @param array{'amount': string, 'currency': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateResponse200DataEligibilityEligibilityLineItemsItemModifiersItemUnitPriceDeltaMoney')); }
    /** Shape $ (Value): integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     */
    public function getAmount(): string { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** Shape $ (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
