<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SignedMoney $available_credit_effect_money
 * @property-read ?string $balance_transaction_id
 * @property-read string $created_at
 * @property-read string $description
 * @property-read ?string $dispute_id
 * @property-read ?string $event_fee_type
 * @property-read string $merchant_billing_entry_id
 * @property-read ?string $merchant_billing_invoice_id
 * @property-read SignedMoney $net_billing_effect_money
 * @property-read string $occurred_at
 * @property-read SignedMoney $outstanding_effect_money
 * @property-read ?string $payment_intent_id
 * @property-read ?string $related_merchant_billing_entry_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class MerchantBillingEntry extends Model {
    /** @param array{'available_credit_effect_money': mixed, 'balance_transaction_id'?: string, 'created_at': string, 'description': string, 'dispute_id'?: string, 'event_fee_type'?: string, 'merchant_billing_entry_id': string, 'merchant_billing_invoice_id'?: string, 'net_billing_effect_money': mixed, 'occurred_at': string, 'outstanding_effect_money': mixed, 'payment_intent_id'?: string, 'related_merchant_billing_entry_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingEntry')); }
    /** Signed change in available billing credit. credit_issued increases it; credit_applied and credit_refunded decrease it. Other entry types do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getAvailableCreditEffectMoney(): SignedMoney { return $this->get('available_credit_effect_money'); }
    public function hasAvailableCreditEffectMoney(): bool { return $this->has('available_credit_effect_money'); }
    /** Balance transaction for this collection or collection reversal, when present.
     * @return ?string
     */
    public function getBalanceTransactionId(): ?string { return $this->get('balance_transaction_id'); }
    public function hasBalanceTransactionId(): bool { return $this->has('balance_transaction_id'); }
    /** When Flint recorded the entry. Use created_after to pick up new entries, including late arrivals. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Human-readable description of the billing event.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Related dispute, when the entry is associated with a dispute.
     * @return ?string
     */
    public function getDisputeId(): ?string { return $this->get('dispute_id'); }
    public function hasDisputeId(): bool { return $this->has('dispute_id'); }
    /** Event fee category. Present only for event_fee entries. card_dispute applies only when Flint paid the processor's dispute fee; a fee already deducted from your balance is recorded on the dispute balance transaction instead. Value enum: "bank_verification", "failed_ach_payment", "ach_dispute", "card_dispute".
     * @return ?string
     */
    public function getEventFeeType(): ?string { return $this->get('event_fee_type'); }
    public function hasEventFeeType(): bool { return $this->has('event_fee_type'); }
    /** Stable entry ID. Re-reading an entry returns the same values.
     * @return string
     */
    public function getMerchantBillingEntryId(): string { return $this->get('merchant_billing_entry_id'); }
    public function hasMerchantBillingEntryId(): bool { return $this->has('merchant_billing_entry_id'); }
    /** Related invoice issued by Flint, when applicable.
     * @return ?string
     */
    public function getMerchantBillingInvoiceId(): ?string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
    /** Signed outstanding effect minus the available credit effect. Charges and collection_reversal are positive; credit_issued, collection, custom_domain_collection, and write_off are negative; credit_refunded is positive; credit_applied is zero; correction may be positive or negative. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getNetBillingEffectMoney(): SignedMoney { return $this->get('net_billing_effect_money'); }
    public function hasNetBillingEffectMoney(): bool { return $this->has('net_billing_effect_money'); }
    /** When the billing event happened. An entry can be recorded after entries that occurred later. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Signed change in the amount owed Flint. Charges (event_fee, invoice, custom_domain) and collection_reversal increase it; credit_applied, collection, custom_domain_collection, and write_off decrease it; correction may increase or decrease it. Credit issuance and refund do not change it. Signed monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return SignedMoney
     */
    public function getOutstandingEffectMoney(): SignedMoney { return $this->get('outstanding_effect_money'); }
    public function hasOutstandingEffectMoney(): bool { return $this->has('outstanding_effect_money'); }
    /** Related payment intent, when the entry is associated with a payment.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Entry corrected, credited, collected, reversed, or written off by this entry, when applicable.
     * @return ?string
     */
    public function getRelatedMerchantBillingEntryId(): ?string { return $this->get('related_merchant_billing_entry_id'); }
    public function hasRelatedMerchantBillingEntryId(): bool { return $this->has('related_merchant_billing_entry_id'); }
    /** The billing event represented by this entry. Value enum: "event_fee", "invoice", "custom_domain", "custom_domain_collection", "correction", "credit_issued", "credit_applied", "credit_refunded", "collection", "collection_reversal", "write_off".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
