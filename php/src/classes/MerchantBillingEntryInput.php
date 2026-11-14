<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $available_credit_effect_money
 * @property-read string $balance_transaction_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $dispute_id
 * @property-read string $event_fee_type
 * @property-read string $merchant_billing_entry_id
 * @property-read string $merchant_billing_invoice_id
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $net_billing_effect_money
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read SignedMoneyInput|array<array-key, mixed>|\stdClass $outstanding_effect_money
 * @property-read string $payment_intent_id
 * @property-read string $related_merchant_billing_entry_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingEntryInput extends Model {
    /** @param array{'available_credit_effect_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'balance_transaction_id'?: string, 'created_at': string|\DateTimeInterface, 'description': string, 'dispute_id'?: string, 'event_fee_type'?: string, 'merchant_billing_entry_id': string, 'merchant_billing_invoice_id'?: string, 'net_billing_effect_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'occurred_at': string|\DateTimeInterface, 'outstanding_effect_money': SignedMoneyInput|array<array-key, mixed>|\stdClass, 'payment_intent_id'?: string, 'related_merchant_billing_entry_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingEntryInput')); }
    /** Signed change in available billing credit. credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry types do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When available_credit_effect_money is omitted; use hasAvailableCreditEffectMoney() or valueOrDefault().
     */
    public function getAvailableCreditEffectMoney(): mixed { return $this->get('available_credit_effect_money'); }
    public function hasAvailableCreditEffectMoney(): bool { return $this->has('available_credit_effect_money'); }
    /** Balance transaction for this collection or collection reversal, when present. Example: "btxn_01KEZF7C00H1Z82CMFWWXMZGHZ".
     * @return string
     * @throws SdkError When balance_transaction_id is omitted; use hasBalanceTransactionId() or valueOrDefault().
     */
    public function getBalanceTransactionId(): string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** When Flint inserted the entry. Never changes and is never backdated from occurred_at. Overlap created_after passes by a few minutes and deduplicate by merchant_billing_entry_id to pick up late commits. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Human-readable description of the billing event.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Related dispute, when the entry is associated with a dispute. Example: "du_01KEZF7C00DEJSF1KTXRT4BBQD".
     * @return string
     * @throws SdkError When dispute_id is omitted; use hasDisputeId() or valueOrDefault().
     */
    public function getDisputeId(): string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Event fee category. Present only for event_fee entries. card_dispute and card_dispute_countered apply only when Flint paid the processor's dispute fee; a fee already deducted from your balance is recorded on the dispute balance transaction instead. Value enum: "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute", "card_dispute_countered", "external_paid_order_overage".
     * @return string
     * @throws SdkError When event_fee_type is omitted; use hasEventFeeType() or valueOrDefault().
     */
    public function getEventFeeType(): string { return $this->get('event_fee_type'); }
    public function hasEventFeeType(): bool { return $this->has('event_fee_type'); }
    /** Stable entry ID. Re-reading an entry returns the same values. Example: "mbe_01KEZF7C00S06A5G1B4867TF78".
     * @return string
     * @throws SdkError When merchant_billing_entry_id is omitted; use hasMerchantBillingEntryId() or valueOrDefault().
     */
    public function getMerchantBillingEntryId(): string { return $this->get('merchant_billing_entry_id'); }
    public function hasMerchantBillingEntryId(): bool { return $this->has('merchant_billing_entry_id'); }
    /** Related invoice issued by Flint, when applicable. Example: "msinv_01KEZF7C00MB754KPEPACGRMNP".
     * @return string
     * @throws SdkError When merchant_billing_invoice_id is omitted; use hasMerchantBillingInvoiceId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceId(): string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
    /** Signed outstanding effect minus the available credit effect. Charges and collection_reversal are positive; credit_issued, collection, custom_domain_collection, and write_off are negative; credit_refunded is positive; credit_applied is zero; correction may be positive or negative. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When net_billing_effect_money is omitted; use hasNetBillingEffectMoney() or valueOrDefault().
     */
    public function getNetBillingEffectMoney(): mixed { return $this->get('net_billing_effect_money'); }
    public function hasNetBillingEffectMoney(): bool { return $this->has('net_billing_effect_money'); }
    /** When the billing event happened. An entry can be recorded after entries that occurred later. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied, collection, custom_domain_collection, and write_off decrease it; correction may increase or decrease it. Credit issuance and refund do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoneyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_effect_money is omitted; use hasOutstandingEffectMoney() or valueOrDefault().
     */
    public function getOutstandingEffectMoney(): mixed { return $this->get('outstanding_effect_money'); }
    public function hasOutstandingEffectMoney(): bool { return $this->has('outstanding_effect_money'); }
    /** Related payment intent, when the entry is associated with a payment. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Entry corrected, credited, collected, reversed, or written off by this entry, when applicable. Example: "mbe_01KEZF7C00S06A5G1B4867TF78".
     * @return string
     * @throws SdkError When related_merchant_billing_entry_id is omitted; use hasRelatedMerchantBillingEntryId() or valueOrDefault().
     */
    public function getRelatedMerchantBillingEntryId(): string { return $this->get('related_merchant_billing_entry_id'); }
    public function hasRelatedMerchantBillingEntryId(): bool { return $this->has('related_merchant_billing_entry_id'); }
    /** The billing event represented by this entry. Value enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
