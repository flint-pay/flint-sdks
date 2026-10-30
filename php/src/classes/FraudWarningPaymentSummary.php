<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $email
 * @property-read string $last4
 * @property-read string $payment_method_brand
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningPaymentSummary extends Model {
    /** @param array{'amount_money': mixed, 'email': string, 'last4': string, 'payment_method_brand': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningPaymentSummary')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** email
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** last4
     * @return string
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown".
     * @return string
     */
    public function getPaymentMethodBrand(): string { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
