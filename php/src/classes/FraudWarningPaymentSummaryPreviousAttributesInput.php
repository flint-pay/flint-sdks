<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|null $email
 * @property-read string|null $last4
 * @property-read string|null $payment_method_brand
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningPaymentSummaryPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'email'?: string|null, 'last4'?: string|null, 'payment_method_brand'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningPaymentSummaryPreviousAttributesInput')); }
    /** The payment amount. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Email address the buyer gave for the payment. anyOf[1] (Value): string. Email address the buyer gave for the payment. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Last four digits of the card. anyOf[1] (Value): string. Last four digits of the card. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown". anyOf[1] (Value): string. The card network. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_method_brand is omitted; use hasPaymentMethodBrand() or valueOrDefault().
     */
    public function getPaymentMethodBrand(): mixed { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
