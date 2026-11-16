<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $amount
 * @property-read string|null $currency
 * Presence-aware input; omitted fields throw when accessed. */
final class SignedMoneyPreviousAttributesInput extends Model {
    /** @param array{'amount'?: string|null, 'currency'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SignedMoneyPreviousAttributesInput')); }
    /** Signed amount in the currency's minor unit, such as cents for USD. anyOf[1] (Value): integer string. Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When amount is omitted; use hasAmount() or valueOrDefault().
     */
    public function getAmount(): mixed { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** ISO 4217 currency code for this amount. anyOf[1] (Value): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): mixed { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
