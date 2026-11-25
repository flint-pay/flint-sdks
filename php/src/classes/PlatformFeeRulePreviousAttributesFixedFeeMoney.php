<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $amount
 * @property-read string|null $currency
 * Presence-aware response; omitted optional fields return null. */
final class PlatformFeeRulePreviousAttributesFixedFeeMoney extends Model {
    /** @param array{'amount'?: mixed, 'currency'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeRulePreviousAttributesFixedFeeMoney')); }
    /**  anyOf[1] (Value): (integer string or null). Amount in the currency's minor unit, such as cents for USD. anyOf[1].anyOf[1] (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 1000000. anyOf[1].anyOf[2] (Value): null. anyOf[1].anyOf[1] (Value): integer string. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAmount(): string|null { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** Three-letter uppercase ISO 4217 currency code for this amount, such as USD. anyOf[1] (Value): string. Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
