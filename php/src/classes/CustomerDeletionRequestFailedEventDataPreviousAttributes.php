<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $blocking_resource_count
 * @property-read list<ErrorResourceReferencePreviousAttributes>|null $blocking_resources
 * @property-read list<string>|null $canceled_subscription_ids
 * @property-read string|null $customer_deletion_request_id
 * @property-read string|null $customer_id
 * @property-read mixed $decided_at
 * @property-read mixed $decision_reason
 * @property-read list<string>|null $removed_payment_method_ids
 * @property-read string|null $requested_at
 * @property-read mixed $requested_by
 * @property-read string|null $resolved_at
 * @property-read string|null $response_due_at
 * @property-read string|null $retention_policy
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestFailedEventDataPreviousAttributes extends Model {
    /** @param array{'blocking_resource_count'?: mixed, 'blocking_resources'?: mixed, 'canceled_subscription_ids'?: mixed, 'customer_deletion_request_id'?: mixed, 'customer_id'?: mixed, 'decided_at'?: mixed, 'decision_reason'?: mixed, 'removed_payment_method_ids'?: mixed, 'requested_at'?: mixed, 'requested_by'?: mixed, 'resolved_at'?: mixed, 'response_due_at'?: mixed, 'retention_policy'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestFailedEventDataPreviousAttributes')); }
    /** Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. anyOf[1] (Value): integer. Total resources currently preventing approval, including resources beyond the blocking_resources cap. Present only for pending_review, including zero when nothing blocks approval. Computed at read time using the same rule as approval. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBlockingResourceCount(): int|null { return $this->get('blocking_resource_count'); }
    public function hasBlockingResourceCount(): bool { return $this->has('blocking_resource_count'); }
    /** Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. anyOf[1] (Value): Array of {@see ErrorResourceReferencePreviousAttributes}. Resources currently preventing approval, computed when the request is read. Present only for pending_review, including an empty array when nothing blocks approval. Uses the same references as RESOURCE_IN_USE: non-canceled subscriptions and active or pending payment methods, ordered by resource_type then resource_id, capped at 25 of each type. List the customer's subscriptions and payment methods for the remaining resources when blocking_resource_count exceeds this array's length. Approval rechecks the blockers; cancel_subscriptions and remove_payment_methods can clear the matching resources before erasure. anyOf[1][] (Value): {@see ErrorResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ErrorResourceReferencePreviousAttributes>|null
     */
    public function getBlockingResources(): array|null { return $this->get('blocking_resources'); }
    public function hasBlockingResources(): bool { return $this->has('blocking_resources'); }
    /** Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. anyOf[1] (Value): Array of string. Subscription IDs whose immediate cancellation completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getCanceledSubscriptionIds(): array|null { return $this->get('canceled_subscription_ids'); }
    public function hasCanceledSubscriptionIds(): bool { return $this->has('canceled_subscription_ids'); }
    /** Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. anyOf[1] (Value): string. Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerDeletionRequestId(): string|null { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** ID of the customer the request would erase. anyOf[1] (Value): string. ID of the customer the request would erase. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. anyOf[1] (Value): string or null. Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: date-time. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDecidedAt(): mixed { return $this->get('decided_at'); }
    public function hasDecidedAt(): bool { return $this->has('decided_at'); }
    /** Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. anyOf[1] (Value): string or null. Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDecisionReason(): mixed { return $this->get('decision_reason'); }
    public function hasDecisionReason(): bool { return $this->has('decision_reason'); }
    /** Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. anyOf[1] (Value): Array of string. Payment method IDs whose archival completed for this request, sorted by ID. Empty when none have completed. Read the request again while processing to see progress. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getRemovedPaymentMethodIds(): array|null { return $this->get('removed_payment_method_ids'); }
    public function hasRemovedPaymentMethodIds(): bool { return $this->has('removed_payment_method_ids'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequestedAt(): string|null { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer", "merchant", null. anyOf[1] (Value): string or null. Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer", "merchant", null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRequestedBy(): mixed { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. anyOf[1] (Value): string. Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolvedAt(): string|null { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. anyOf[1] (Value): string. Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResponseDueAt(): string|null { return $this->get('response_due_at'); }
    public function hasResponseDueAt(): bool { return $this->has('response_due_at'); }
    /** What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records". anyOf[1] (Value): string. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRetentionPolicy(): string|null { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** Where the request is in review and erasure. Value enum: "pending_review", "processing", "completed", "rejected", "failed". anyOf[1] (Value): string. Where the request is in review and erasure. Value enum: "pending_review", "processing", "completed", "rejected", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. [] enum: "resolve". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains resolve while awaiting review, when retrying a failed deletion, and after resolution because repeating the original decision succeeds. An opposite decision is refused with field_locked at decision. [] enum: "resolve". anyOf[1][] (Value): string.  Value enum: "resolve". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
