<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $amount
 * @property-read string $currency
 * Presence-aware input; omitted fields throw when accessed. */
final class SignedMoneyInput extends Model {
    /** @param array{'amount': string, 'currency': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SignedMoneyInput')); }
    /** Signed amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When amount is omitted; use hasAmount() or valueOrDefault().
     */
    public function getAmount(): string { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
}
