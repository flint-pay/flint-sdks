<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read string $balance_transaction_id
 * @property-read string $occurred_at
 * @property-read string $payout_entry_id
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class PayoutEntry extends Model {
    /** @param array{'amount_money': object{'amount': string, 'currency': string}, 'balance_transaction_id': string, 'occurred_at': string, 'payout_entry_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutEntry')); }
    /** @return SignedMoney
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When balance_transaction_id is omitted; use hasBalanceTransactionId() or valueOrDefault().
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When payout_entry_id is omitted; use hasPayoutEntryId() or valueOrDefault().
     */
    public function getPayoutEntryId(): string { return $this->get('payout_entry_id'); }
    public function hasPayoutEntryId(): bool { return $this->has('payout_entry_id'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
