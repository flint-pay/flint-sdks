<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributes|null $amount_money
 * @property-read string|null $authorization_expires_at
 * @property-read string|null $capture_method
 * @property-read string|null $email
 * @property-read string|null $last4
 * @property-read string|null $payment_method_brand
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewPaymentSummaryPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'authorization_expires_at'?: mixed, 'capture_method'?: mixed, 'email'?: mixed, 'last4'?: mixed, 'payment_method_brand'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewPaymentSummaryPreviousAttributes')); }
    /** The payment's requested amount when it was confirmed. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. anyOf[1] (Value): string. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAuthorizationExpiresAt(): string|null { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Whether the payment collects when confirmed or holds the funds for a later capture. Value enum: "automatic", "manual". anyOf[1] (Value): string. Whether the payment collects when confirmed or holds the funds for a later capture. Value enum: "automatic", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCaptureMethod(): string|null { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. anyOf[1] (Value): string. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Last four digits of the card number. Empty when the payment has no card details. anyOf[1] (Value): string. Last four digits of the card number. Empty when the payment has no card details. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLast4(): string|null { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The card network, as recorded when the payment was confirmed. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[1] (Value): string. The card network, as recorded when the payment was confirmed. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodBrand(): string|null { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
