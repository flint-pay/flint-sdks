<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $buyer_email
 * @property-read string $buyer_phone
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read string $payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestResumeInput extends Model {
    /** @param array{'action': string, 'buyer_email'?: string, 'buyer_phone'?: string, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_attempt_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestResumeInput')); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return string
     * @throws SdkError When buyer_email is omitted; use hasBuyerEmail() or valueOrDefault().
     */
    public function getBuyerEmail(): string { return $this->get('buyer_email'); }
    public function hasBuyerEmail(): bool { return $this->has('buyer_email'); }
    /** @return string
     * @throws SdkError When buyer_phone is omitted; use hasBuyerPhone() or valueOrDefault().
     */
    public function getBuyerPhone(): string { return $this->get('buyer_phone'); }
    public function hasBuyerPhone(): bool { return $this->has('buyer_phone'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return string
     * @throws SdkError When payment_attempt_id is omitted; use hasPaymentAttemptId() or valueOrDefault().
     */
    public function getPaymentAttemptId(): string { return $this->get('payment_attempt_id'); }
    public function hasPaymentAttemptId(): bool { return $this->has('payment_attempt_id'); }
}
