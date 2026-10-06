<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read array{'email'?: string, 'phone'?: string}|object $buyer_contact
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_outstanding_money
 * @property-read string $order_payment_attempt_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PayOrderRequestResumeInput extends Model {
    /** @param array{'action': string, 'buyer_contact'?: array{'email'?: string, 'phone'?: string}|object, 'expected_outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_payment_attempt_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayOrderRequestResumeInput')); }
    /** @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** @return array{'email'?: string, 'phone'?: string}|object
     * @throws SdkError When buyer_contact is omitted; use hasBuyerContact() or valueOrDefault().
     */
    public function getBuyerContact(): array|object { return $this->get('buyer_contact'); }
    public function hasBuyerContact(): bool { return $this->has('buyer_contact'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_outstanding_money is omitted; use hasExpectedOutstandingMoney() or valueOrDefault().
     */
    public function getExpectedOutstandingMoney(): mixed { return $this->get('expected_outstanding_money'); }
    public function hasExpectedOutstandingMoney(): bool { return $this->has('expected_outstanding_money'); }
    /** @return string
     * @throws SdkError When order_payment_attempt_id is omitted; use hasOrderPaymentAttemptId() or valueOrDefault().
     */
    public function getOrderPaymentAttemptId(): string { return $this->get('order_payment_attempt_id'); }
    public function hasOrderPaymentAttemptId(): bool { return $this->has('order_payment_attempt_id'); }
}
