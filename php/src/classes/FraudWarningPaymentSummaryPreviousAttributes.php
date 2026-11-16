<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $email
 * @property-read string|null $last4
 * @property-read string|null $payment_method_brand
 * Presence-aware response; omitted optional fields return null. */
final class FraudWarningPaymentSummaryPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'email'?: mixed, 'last4'?: mixed, 'payment_method_brand'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningPaymentSummaryPreviousAttributes')); }
    /** The payment amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Email address the buyer gave for the payment. anyOf[1] (Value): string. Email address the buyer gave for the payment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Last four digits of the card. anyOf[1] (Value): string. Last four digits of the card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown". anyOf[1] (Value): string. The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodBrand(): string|null { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
