<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $amount_money
 * @property-read string $available_at
 * @property-read string $balance_transaction_id
 * @property-read string $currency
 * @property-read string $description
 * @property-read SignedMoney $fee_money
 * @property-read HoldDetail $hold_detail
 * @property-read string $merchant_id
 * @property-read SignedMoney $net_money
 * @property-read string $occurred_at
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read string $payout_id
 * @property-read list<string> $related_balance_transaction_ids
 * @property-read WebhookEventBalanceTransactionCreatedDataRelatedResourcePaymentIntent|WebhookEventBalanceTransactionCreatedDataRelatedResourceRefund|WebhookEventBalanceTransactionCreatedDataRelatedResourceDispute|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayout|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayoutDestination|WebhookEventBalanceTransactionCreatedDataRelatedResourceMerchantSubscriptionInvoice|\stdClass $related_resource
 * @property-read string $status
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventBalanceTransactionCreatedData extends Model {
    /** @param array{'amount_money': mixed, 'available_at'?: string, 'balance_transaction_id': string, 'currency': string, 'description'?: string, 'fee_money': mixed, 'hold_detail'?: mixed, 'merchant_id': string, 'net_money': mixed, 'occurred_at': string, 'order'?: mixed, 'order_id'?: string, 'payout_id'?: string, 'related_balance_transaction_ids'?: list<string>, 'related_resource'?: mixed, 'status': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventBalanceTransactionCreatedData')); }
    /** @return SignedMoney
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): SignedMoney { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** @return string
     * @throws SdkError When available_at is omitted; use hasAvailableAt() or valueOrDefault().
     */
    public function getAvailableAt(): string { return $this->get('available_at'); }
    public function hasAvailableAt(): bool { return $this->has('available_at'); }
    /** @return string
     * @throws SdkError When balance_transaction_id is omitted; use hasBalanceTransactionId() or valueOrDefault().
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return SignedMoney
     * @throws SdkError When fee_money is omitted; use hasFeeMoney() or valueOrDefault().
     */
    public function getFeeMoney(): SignedMoney { return $this->get('fee_money'); }
    public function hasFeeMoney(): bool { return $this->has('fee_money'); }
    /** @return HoldDetail
     * @throws SdkError When hold_detail is omitted; use hasHoldDetail() or valueOrDefault().
     */
    public function getHoldDetail(): HoldDetail { return $this->get('hold_detail'); }
    public function hasHoldDetail(): bool { return $this->has('hold_detail'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return SignedMoney
     * @throws SdkError When net_money is omitted; use hasNetMoney() or valueOrDefault().
     */
    public function getNetMoney(): SignedMoney { return $this->get('net_money'); }
    public function hasNetMoney(): bool { return $this->has('net_money'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When payout_id is omitted; use hasPayoutId() or valueOrDefault().
     */
    public function getPayoutId(): string { return $this->get('payout_id'); }
    public function hasPayoutId(): bool { return $this->has('payout_id'); }
    /** @return list<string>
     * @throws SdkError When related_balance_transaction_ids is omitted; use hasRelatedBalanceTransactionIds() or valueOrDefault().
     */
    public function getRelatedBalanceTransactionIds(): array { return $this->get('related_balance_transaction_ids'); }
    public function hasRelatedBalanceTransactionIds(): bool { return $this->has('related_balance_transaction_ids'); }
    /** @return WebhookEventBalanceTransactionCreatedDataRelatedResourcePaymentIntent|WebhookEventBalanceTransactionCreatedDataRelatedResourceRefund|WebhookEventBalanceTransactionCreatedDataRelatedResourceDispute|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayout|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayoutDestination|WebhookEventBalanceTransactionCreatedDataRelatedResourceMerchantSubscriptionInvoice|\stdClass
     * @throws SdkError When related_resource is omitted; use hasRelatedResource() or valueOrDefault().
     */
    public function getRelatedResource(): WebhookEventBalanceTransactionCreatedDataRelatedResourcePaymentIntent|WebhookEventBalanceTransactionCreatedDataRelatedResourceRefund|WebhookEventBalanceTransactionCreatedDataRelatedResourceDispute|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayout|WebhookEventBalanceTransactionCreatedDataRelatedResourcePayoutDestination|WebhookEventBalanceTransactionCreatedDataRelatedResourceMerchantSubscriptionInvoice|\stdClass { return $this->get('related_resource'); }
    public function hasRelatedResource(): bool { return $this->has('related_resource'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
