<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface|null $authorization_expires_at
 * @property-read string $capture_method
 * @property-read string $email
 * @property-read string $last4
 * @property-read string $payment_method_brand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewPaymentSummaryInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'authorization_expires_at': string|\DateTimeInterface|null, 'capture_method': string, 'email': string, 'last4': string, 'payment_method_brand': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewPaymentSummaryInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When authorization_expires_at is omitted; use hasAuthorizationExpiresAt() or valueOrDefault().
     */
    public function getAuthorizationExpiresAt(): string|\DateTimeInterface|null { return $this->get('authorization_expires_at'); }
    public function hasAuthorizationExpiresAt(): bool { return $this->has('authorization_expires_at'); }
    /** Shape $ (Value): string.  Value enum: "automatic", "manual".
     * @return string
     * @throws SdkError When capture_method is omitted; use hasCaptureMethod() or valueOrDefault().
     */
    public function getCaptureMethod(): string { return $this->get('capture_method'); }
    public function hasCaptureMethod(): bool { return $this->has('capture_method'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When last4 is omitted; use hasLast4() or valueOrDefault().
     */
    public function getLast4(): string { return $this->get('last4'); }
    public function hasLast4(): bool { return $this->has('last4'); }
    /** Shape $ (Value): string.  Value enum: "amex", "discover", "diners", "jcb", "mastercard", "unionpay", "visa", "unknown".
     * @return string
     * @throws SdkError When payment_method_brand is omitted; use hasPaymentMethodBrand() or valueOrDefault().
     */
    public function getPaymentMethodBrand(): string { return $this->get('payment_method_brand'); }
    public function hasPaymentMethodBrand(): bool { return $this->has('payment_method_brand'); }
}
