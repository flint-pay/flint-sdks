<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $amount
 * @property-read string|null $currency
 * Presence-aware input; omitted fields throw when accessed. */
final class MoneyValuePreviousAttributesInput extends Model {
    /** @param array{'amount'?: string|null, 'currency'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyValuePreviousAttributesInput')); }
    /** Amount in the currency's minor unit, such as cents for USD. anyOf[1] (Value): integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When amount is omitted; use hasAmount() or valueOrDefault().
     */
    public function getAmount(): mixed { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** Three-letter uppercase ISO 4217 currency code for this amount, such as USD. anyOf[1] (Value): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
