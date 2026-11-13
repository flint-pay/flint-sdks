<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $canceled_subscription_ids
 * @property-read string $customer_deletion_request_id
 * @property-read string $customer_id
 * @property-read string|null $decided_at
 * @property-read string|null $decision_reason
 * @property-read list<string> $removed_payment_method_ids
 * @property-read string $requested_at
 * @property-read string|null $requested_by
 * @property-read ?string $resolved_at
 * @property-read string $response_due_at
 * @property-read string $retention_policy
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequest extends Model {
    /** @param array{'canceled_subscription_ids': list<string>, 'customer_deletion_request_id': string, 'customer_id': string, 'decided_at': string|null, 'decision_reason': string|null, 'removed_payment_method_ids': list<string>, 'requested_at': string, 'requested_by': string|null, 'resolved_at'?: string, 'response_due_at': string, 'retention_policy': string, 'status': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequest')); }
    /** Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. [] (Value): string.
     * @return list<string>
     */
    public function getCanceledSubscriptionIds(): array { return $this->get('canceled_subscription_ids'); }
    public function hasCanceledSubscriptionIds(): bool { return $this->has('canceled_subscription_ids'); }
    /** Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status.
     * @return string
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** ID of the customer the request would erase.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: date-time.
     * @return string|null
     */
    public function getDecidedAt(): string|null { return $this->get('decided_at'); }
    public function hasDecidedAt(): bool { return $this->has('decided_at'); }
    /** Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased.
     * @return string|null
     */
    public function getDecisionReason(): string|null { return $this->get('decision_reason'); }
    public function hasDecisionReason(): bool { return $this->has('decision_reason'); }
    /** Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. [] (Value): string.
     * @return list<string>
     */
    public function getRemovedPaymentMethodIds(): array { return $this->get('removed_payment_method_ids'); }
    public function hasRemovedPaymentMethodIds(): bool { return $this->has('removed_payment_method_ids'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getRequestedAt(): string { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer", "merchant", null.
     * @return string|null
     */
    public function getRequestedBy(): string|null { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: date-time.
     * @return ?string
     */
    public function getResolvedAt(): ?string { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: date-time.
     * @return string
     */
    public function getResponseDueAt(): string { return $this->get('response_due_at'); }
    public function hasResponseDueAt(): bool { return $this->has('response_due_at'); }
    /** What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records".
     * @return string
     */
    public function getRetentionPolicy(): string { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** Where the request is in review and erasure. Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. [] enum: "resolve". [] (Value): string.  Value enum: "resolve".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
