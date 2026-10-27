<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $activity_type
 * @property-read string $actor_id
 * @property-read string $actor_type
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $channel
 * @property-read string $checkout_session_id
 * @property-read string $collection_block_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $credit_money
 * @property-read string $credit_note_id
 * @property-read string $description
 * @property-read string|\DateTimeInterface $due_at
 * @property-read string $error_code
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_amount_money
 * @property-read string|\DateTimeInterface $expected_settlement_at
 * @property-read string $invoice_activity_id
 * @property-read string $invoice_delivery_attempt_id
 * @property-read string $invoice_late_fee_id
 * @property-read string $invoice_manual_payment_id
 * @property-read string $invoice_payment_attempt_id
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $payment_intent_id
 * @property-read string $rail
 * @property-read string $refund_id
 * @property-read string $to_email
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $written_off_money
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceActivityInput extends Model {
    /** @param array{'activity_type': string, 'actor_id'?: string, 'actor_type'?: string, 'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'channel'?: string, 'checkout_session_id'?: string, 'collection_block_reason'?: string, 'created_at': string|\DateTimeInterface, 'credit_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_id'?: string, 'description': string, 'due_at'?: string|\DateTimeInterface, 'error_code'?: string, 'expected_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_settlement_at'?: string|\DateTimeInterface, 'invoice_activity_id': string, 'invoice_delivery_attempt_id'?: string, 'invoice_late_fee_id'?: string, 'invoice_manual_payment_id'?: string, 'invoice_payment_attempt_id'?: string, 'invoice_schedule_entry_id'?: string, 'payment_intent_id'?: string, 'rail'?: string, 'refund_id'?: string, 'to_email'?: string, 'written_off_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceActivityInput')); }
    /** Shape $ (Value): string. What happened. other means an activity this API version doesn't describe yet. New values may be added; treat an unrecognized value like `other`. Value enum: "draft_created", "issued", "sent", "delivery_sent", "reminder_sent", "viewed", "payment_attempt_started", "payment_applied", "manual_payment_recorded", "manual_payment_reversed", "refund_succeeded", "voided", "token_regenerated", "collection_blocked", "collection_block_resolved", "updated", "marked_uncollectible", "payment_processing", "issue_failed", "overdue", "reminder_due", "late_fee_due", "late_fee_assessed", "late_fee_waived", "credited", "other".
     * @return string
     * @throws SdkError When activity_type is omitted; use hasActivityType() or valueOrDefault().
     */
    public function getActivityType(): string { return $this->get('activity_type'); }
    public function hasActivityType(): bool { return $this->has('activity_type'); }
    /** Shape $ (Value): string. Merchant ID of the actor, when actor_type is merchant. Some system activities also carry the merchant ID.
     * @return string
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** Shape $ (Value): string. Who performed the activity: the merchant (an API key or dashboard user), the buyer, or Flint on a schedule or in response to a payment event. Absent when no actor was recorded. Value enum: "merchant", "buyer", "system".
     * @return string
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount of the payment, refund, or late fee. Present on payment_applied, manual_payment_recorded, manual_payment_reversed, refund_succeeded, late_fee_assessed, and late_fee_waived, and on updated when a card refund changed or a credit note refund was requested. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Shape $ (Value): string. Delivery channel. Present on delivery_sent and reminder_sent. Value enum: "email".
     * @return string
     * @throws SdkError When channel is omitted; use hasChannel() or valueOrDefault().
     */
    public function getChannel(): string { return $this->get('channel'); }
    public function hasChannel(): bool { return $this->has('channel'); }
    /** Shape $ (Value): string. Checkout session the buyer paid through. Present on payment_attempt_started for hosted payments.
     * @return string
     * @throws SdkError When checkout_session_id is omitted; use hasCheckoutSessionId() or valueOrDefault().
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Shape $ (Value): string. Why collection was blocked or unblocked. Present on collection_blocked and collection_block_resolved. Value enum: "inventory_unavailable", "inventory_restored".
     * @return string
     * @throws SdkError When collection_block_reason is omitted; use hasCollectionBlockReason() or valueOrDefault().
     */
    public function getCollectionBlockReason(): string { return $this->get('collection_block_reason'); }
    public function hasCollectionBlockReason(): bool { return $this->has('collection_block_reason'); }
    /** Shape $ (Value): string. When the activity happened. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Total credit applied to the invoice. Present on credited. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string. Credit note that requested the refund. Present on updated when a credit note refund was requested or changed.
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Shape $ (Value): string. Human-readable Flint description of the activity.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Due date that triggered the activity. Present on overdue, reminder_due, and late_fee_due. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When due_at is omitted; use hasDueAt() or valueOrDefault().
     */
    public function getDueAt(): string|\DateTimeInterface { return $this->get('due_at'); }
    public function hasDueAt(): bool { return $this->has('due_at'); }
    /** Shape $ (Value): string. Public error code of the failed scheduled issue. Present on issue_failed.
     * @return string
     * @throws SdkError When error_code is omitted; use hasErrorCode() or valueOrDefault().
     */
    public function getErrorCode(): string { return $this->get('error_code'); }
    public function hasErrorCode(): bool { return $this->has('error_code'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Amount the processing payment is expected to settle. Present on payment_processing. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_amount_money is omitted; use hasExpectedAmountMoney() or valueOrDefault().
     */
    public function getExpectedAmountMoney(): mixed { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** Shape $ (Value): string. When the processing payment is expected to settle. Present on payment_processing when known. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expected_settlement_at is omitted; use hasExpectedSettlementAt() or valueOrDefault().
     */
    public function getExpectedSettlementAt(): string|\DateTimeInterface { return $this->get('expected_settlement_at'); }
    public function hasExpectedSettlementAt(): bool { return $this->has('expected_settlement_at'); }
    /** Shape $ (Value): string. Flint invoice activity ID. IDs begin with inevt_.
     * @return string
     * @throws SdkError When invoice_activity_id is omitted; use hasInvoiceActivityId() or valueOrDefault().
     */
    public function getInvoiceActivityId(): string { return $this->get('invoice_activity_id'); }
    public function hasInvoiceActivityId(): bool { return $this->has('invoice_activity_id'); }
    /** Shape $ (Value): string. The delivery attempt that sent the email. Present on delivery_sent and reminder_sent.
     * @return string
     * @throws SdkError When invoice_delivery_attempt_id is omitted; use hasInvoiceDeliveryAttemptId() or valueOrDefault().
     */
    public function getInvoiceDeliveryAttemptId(): string { return $this->get('invoice_delivery_attempt_id'); }
    public function hasInvoiceDeliveryAttemptId(): bool { return $this->has('invoice_delivery_attempt_id'); }
    /** Shape $ (Value): string. The late fee. Present on late_fee_assessed and late_fee_waived.
     * @return string
     * @throws SdkError When invoice_late_fee_id is omitted; use hasInvoiceLateFeeId() or valueOrDefault().
     */
    public function getInvoiceLateFeeId(): string { return $this->get('invoice_late_fee_id'); }
    public function hasInvoiceLateFeeId(): bool { return $this->has('invoice_late_fee_id'); }
    /** Shape $ (Value): string. The manual payment. Present on manual_payment_recorded and manual_payment_reversed.
     * @return string
     * @throws SdkError When invoice_manual_payment_id is omitted; use hasInvoiceManualPaymentId() or valueOrDefault().
     */
    public function getInvoiceManualPaymentId(): string { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
    /** Shape $ (Value): string. The payment attempt. Present on payment_attempt_started and payment_processing.
     * @return string
     * @throws SdkError When invoice_payment_attempt_id is omitted; use hasInvoicePaymentAttemptId() or valueOrDefault().
     */
    public function getInvoicePaymentAttemptId(): string { return $this->get('invoice_payment_attempt_id'); }
    public function hasInvoicePaymentAttemptId(): bool { return $this->has('invoice_payment_attempt_id'); }
    /** Shape $ (Value): string. Schedule entry the activity applies to. Present on overdue, reminder_due, late_fee_due, late_fee_assessed, and late_fee_waived when the invoice has a payment schedule.
     * @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** Shape $ (Value): string. Payment intent whose funds were applied. Present on payment_applied.
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Shape $ (Value): string. Payment rail of the attempt. Present on payment_processing. Value enum: "card", "ach_debit".
     * @return string
     * @throws SdkError When rail is omitted; use hasRail() or valueOrDefault().
     */
    public function getRail(): string { return $this->get('rail'); }
    public function hasRail(): bool { return $this->has('rail'); }
    /** Shape $ (Value): string. Related refund. Present on refund_succeeded, and on updated when a card refund changed or a credit note refund was requested or changed. Read the refund for its current status.
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Shape $ (Value): string. Recipient of the email. Present on delivery_sent and reminder_sent.
     * @return string
     * @throws SdkError When to_email is omitted; use hasToEmail() or valueOrDefault().
     */
    public function getToEmail(): string { return $this->get('to_email'); }
    public function hasToEmail(): bool { return $this->has('to_email'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Balance written off. Present on marked_uncollectible. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When written_off_money is omitted; use hasWrittenOffMoney() or valueOrDefault().
     */
    public function getWrittenOffMoney(): mixed { return $this->get('written_off_money'); }
    public function hasWrittenOffMoney(): bool { return $this->has('written_off_money'); }
}
