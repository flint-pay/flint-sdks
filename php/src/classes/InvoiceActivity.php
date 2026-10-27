<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read ?string $actor_id
 * @property-read ?string $actor_type
 * @property-read ?MoneyValue $amount_money
 * @property-read ?string $channel
 * @property-read ?string $checkout_session_id
 * @property-read ?string $collection_block_reason
 * @property-read string $created_at
 * @property-read ?MoneyValue $credit_money
 * @property-read ?string $credit_note_id
 * @property-read string $description
 * @property-read ?string $due_at
 * @property-read ?string $error_code
 * @property-read ?MoneyValue $expected_amount_money
 * @property-read string $invoice_activity_id
 * @property-read ?string $invoice_delivery_attempt_id
 * @property-read ?string $invoice_late_fee_id
 * @property-read ?string $invoice_manual_payment_id
 * @property-read ?string $invoice_payment_attempt_id
 * @property-read ?string $invoice_schedule_entry_id
 * @property-read ?string $payment_intent_id
 * @property-read ?string $rail
 * @property-read ?string $refund_id
 * @property-read ?string $to_email
 * @property-read ?MoneyValue $written_off_money
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceActivity extends Model {
    /** @param array{'activity_type': string, 'actor_id'?: string, 'actor_type'?: string, 'amount_money'?: mixed, 'channel'?: string, 'checkout_session_id'?: string, 'collection_block_reason'?: string, 'created_at': string, 'credit_money'?: mixed, 'credit_note_id'?: string, 'description': string, 'due_at'?: string, 'error_code'?: string, 'expected_amount_money'?: mixed, 'invoice_activity_id': string, 'invoice_delivery_attempt_id'?: string, 'invoice_late_fee_id'?: string, 'invoice_manual_payment_id'?: string, 'invoice_payment_attempt_id'?: string, 'invoice_schedule_entry_id'?: string, 'payment_intent_id'?: string, 'rail'?: string, 'refund_id'?: string, 'to_email'?: string, 'written_off_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceActivity')); }
    /** Shape $ (Value): string. What happened. other means an activity this API version doesn't describe yet. New values may be added; treat an unrecognized value like `other`. Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited", "other".
     * @return string
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Shape $ (Value): string. Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the merchant ID.
     * @return ?string
     */
    public function getActorId(): ?string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** Shape $ (Value): string. Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint on a schedule or in response to a payment event. Absent when no actor was recorded. Value enum: "merchant", "buyer", "system".
     * @return ?string
     */
    public function getActorType(): ?string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** Shape $ (Value): {@see MoneyValue}. Amount of the payment, refund, or late fee. Present on payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a credit note refund was requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getAmountMoney(): ?MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Delivery channel. Present on delivery_sent and reminder_sent. Value enum: "email".
     * @return ?string
     */
    public function getChannel(): ?string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. Checkout session the buyer paid through. Present on payment_attempt_started for hosted payments.
     * @return ?string
     */
    public function getCheckoutSessionId(): ?string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string. Why collection was blocked or unblocked. Present on collection_blocked and collection_block_resolved. Value enum: "inventory_unavailable", "inventory_restored".
     * @return ?string
     */
    public function getCollectionBlockReason(): ?string { return $this->get('collection_block_reason'); }
    public function hasCollectionBlockReason(): bool { return $this->has('collection_block_reason'); }
    /** Shape $ (Value): string. When the activity happened. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValue}. Total credit applied to the invoice. Present on credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getCreditMoney(): ?MoneyValue { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string. Credit note that requested the refund. Present on updated when a credit note refund was requested or changed.
     * @return ?string
     */
    public function getCreditNoteId(): ?string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): string. Human-readable Flint description of the activity.
     * @return string
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due. Format: date-time.
     * @return ?string
     */
    public function getDueAt(): ?string { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. Public error code of the failed scheduled issue. Present on issue_failed.
     * @return ?string
     */
    public function getErrorCode(): ?string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** Shape $ (Value): {@see MoneyValue}. Amount the processing payment is expected to settle. Present on payment_processing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getExpectedAmountMoney(): ?MoneyValue { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** Shape $ (Value): string. Flint invoice activity ID. IDs begin with inevt_.
     * @return string
     */
    public function getInvoiceActivityId(): string { return $this->get('invoice_activity_id'); }
    public function hasInvoiceActivityId(): bool { return $this->has('invoice_activity_id'); }
    /** Shape $ (Value): string. The delivery attempt that sent the email. Present on delivery_sent and reminder_sent.
     * @return ?string
     */
    public function getInvoiceDeliveryAttemptId(): ?string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** Shape $ (Value): string. The late fee. Present on late_fee_assessed and late_fee_waived.
     * @return ?string
     */
    public function getInvoiceLateFeeId(): ?string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** Shape $ (Value): string. The manual payment. Present on manual_payment_recorded and manual_payment_reversed.
     * @return ?string
     */
    public function getInvoiceManualPaymentId(): ?string { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
    /** Shape $ (Value): string. The payment attempt. Present on payment_attempt_started and payment_processing.
     * @return ?string
     */
    public function getInvoicePaymentAttemptId(): ?string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** Shape $ (Value): string. Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due, late_fee_assessed, and late_fee_waived when the invoice has a payment schedule.
     * @return ?string
     */
    public function getInvoiceScheduleEntryId(): ?string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): string. Payment intent whose funds were applied. Present on payment_applied.
     * @return ?string
     */
    public function getPaymentIntentId(): ?string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Payment rail of the attempt. Present on payment_processing. Value enum: "card", "ach_debit".
     * @return ?string
     */
    public function getRail(): ?string { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** Shape $ (Value): string. Related refund. Present on refund_succeeded, and on updated when a card refund changed or a credit note refund was requested or changed. Read the refund for its current status.
     * @return ?string
     */
    public function getRefundId(): ?string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): string. Recipient of the email. Present on delivery_sent and reminder_sent.
     * @return ?string
     */
    public function getToEmail(): ?string { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
    /** Shape $ (Value): {@see MoneyValue}. Balance written off. Present on marked_uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getWrittenOffMoney(): ?MoneyValue { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
