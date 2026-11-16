<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $amount_money
 * @property-read string|\DateTimeInterface|null $authorization_expires_at
 * @property-read string|null $capture_method
 * @property-read string|null $email
 * @property-read string|null $last4
 * @property-read string|null $payment_method_brand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewPaymentSummaryPreviousAttributesInput extends Model {
    /** @param array{'amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'authorization_expires_at'?: string|\DateTimeInterface|null, 'capture_method'?: string|null, 'email'?: string|null, 'last4'?: string|null, 'payment_method_brand'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewPaymentSummaryPreviousAttributesInput')); }
    /** The payment's requested amount when it was confirmed. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. anyOf[1] (Value): string. Effective Flint capture deadline: the earlier of the provider capture deadline and any order resource guarantee. `null` when the payment has no authorization deadline. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When authorization_expires_at is omitted; use hasAuthorizationExpiresAt() or valueOrDefault().
     */
    public function getAuthorizationExpiresAt(): mixed { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Whether the payment collects when confirmed or holds the funds for a later capture. Value enum: "automatic", "manual". anyOf[1] (Value): string. Whether the payment collects when confirmed or holds the funds for a later capture. Value enum: "automatic", "manual". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): mixed { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. anyOf[1] (Value): string. The buyer's email address used for screening: the payment's receipt email, or else the email on the payment method, in lowercase. Empty when neither is known. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Last four digits of the card number. Empty when the payment has no card details. anyOf[1] (Value): string. Last four digits of the card number. Empty when the payment has no card details. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): mixed { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** The card network, as recorded when the payment was confirmed. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[1] (Value): string. The card network, as recorded when the payment was confirmed. Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_method_brand is omitted; use hasPaymentMethodBrand() or valueOrDefault().
     */
    public function getPaymentMethodBrand(): mixed { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
