<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read int $expected_version
 * @property-read string $note
 * @property-read string $payment_reference
 * @property-read string|\DateTimeInterface $received_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInvoiceManualPaymentRequestInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'note'?: string, 'payment_reference'?: string, 'received_at'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInvoiceManualPaymentRequestInput')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Expected version of the invoice. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minLength: 1. maxLength: 4096.
     * @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When payment_reference is omitted; use hasPaymentReference() or valueOrDefault().
     */
    public function getPaymentReference(): string { return $this->get('payment_reference'); }
    public function hasPaymentReference(): bool { return $this->has('payment_reference'); }
    /** When the payment was received. Defaults to now. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string|\DateTimeInterface { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
}
