<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $payment_split_id
 * @property-read string $payment_split_reversal_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SplitReversalReferenceInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'payment_split_id': string, 'payment_split_reversal_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SplitReversalReferenceInput')); }
    /** The amount fixed at allocation, unchanged by recovery or reinstatement. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The split whose seller share was allocated. Example: "psplit_01KEZF7C00Y5HA4Z8D4KRA07K8".
     * @return string
     * @throws SdkError When payment_split_id is omitted; use hasPaymentSplitId() or valueOrDefault().
     */
    public function getPaymentSplitId(): string { return $this->get('payment_split_id'); }
    public function hasPaymentSplitId(): bool { return $this->has('payment_split_id'); }
    /** The reversal in PaymentSplit.reversals that records recovery status. Example: "psrev_01KEZF7C00XC1HA7S8YCQJDBDM".
     * @return string
     * @throws SdkError When payment_split_reversal_id is omitted; use hasPaymentSplitReversalId() or valueOrDefault().
     */
    public function getPaymentSplitReversalId(): string { return $this->get('payment_split_reversal_id'); }
    public function hasPaymentSplitReversalId(): bool { return $this->has('payment_split_reversal_id'); }
}
