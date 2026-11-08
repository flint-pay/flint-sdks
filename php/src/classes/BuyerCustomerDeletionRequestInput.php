<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_deletion_request_id
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface|null $decided_at
 * @property-read string|null $decision_reason
 * @property-read string|\DateTimeInterface $requested_at
 * @property-read string|null $requested_by
 * @property-read string|\DateTimeInterface $resolved_at
 * @property-read string|\DateTimeInterface $response_due_at
 * @property-read string $retention_policy
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCustomerDeletionRequestInput extends Model {
    /** @param array{'customer_deletion_request_id': string, 'customer_id': string, 'decided_at': string|\DateTimeInterface|null, 'decision_reason': string|null, 'requested_at': string|\DateTimeInterface, 'requested_by': string|null, 'resolved_at'?: string|\DateTimeInterface, 'response_due_at': string|\DateTimeInterface, 'retention_policy': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCustomerDeletionRequestInput')); }
    /** Stable ID of the tracked deletion request. Use it to retrieve the review and erasure status. Example: "cdel_01KEZF7C009P94WEXW5RMRFXAY".
     * @return string
     * @throws SdkError When customer_deletion_request_id is omitted; use hasCustomerDeletionRequestId() or valueOrDefault().
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** ID of the customer the request would erase. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Time of the most recent approve or reject decision. `null` when the request is pending_review or when a pre-existing decision time cannot be determined. Approval sets this before asynchronous erasure finishes; retry approval sets it again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When decided_at is omitted; use hasDecidedAt() or valueOrDefault().
     */
    public function getDecidedAt(): string|\DateTimeInterface|null { return $this->get('decided_at'); }
    public function hasDecidedAt(): bool { return $this->has('decided_at'); }
    /** Merchant's plain-text explanation for rejecting the request, visible to the buyer. `null` when no reason was provided or the customer's personal data has since been erased.
     * @return string|null
     * @throws SdkError When decision_reason is omitted; use hasDecisionReason() or valueOrDefault().
     */
    public function getDecisionReason(): string|null { return $this->get('decision_reason'); }
    public function hasDecisionReason(): bool { return $this->has('decision_reason'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Who opened the request: buyer from the buyer account, or merchant on the buyer's behalf. `null` when the source of a pre-existing request cannot be determined. Value enum: "buyer", "merchant", null.
     * @return string|null
     * @throws SdkError When requested_by is omitted; use hasRequestedBy() or valueOrDefault().
     */
    public function getRequestedBy(): string|null { return $this->get('requested_by'); }
    public function hasRequestedBy(): bool { return $this->has('requested_by'); }
    /** Unlike decided_at, which records the merchant's decision, this is the time of the most recent resolved outcome: rejected, completed, or failed. Absent while pending_review or processing. Cleared when a failed request is approved again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When resolved_at is omitted; use hasResolvedAt() or valueOrDefault().
     */
    public function getResolvedAt(): string|\DateTimeInterface { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** Requested time plus one calendar month in UTC, clamped to the last day of that month. This is the deadline for responding to the buyer's request. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When response_due_at is omitted; use hasResponseDueAt() or valueOrDefault().
     */
    public function getResponseDueAt(): string|\DateTimeInterface { return $this->get('response_due_at'); }
    public function hasResponseDueAt(): bool { return $this->has('response_due_at'); }
    /** What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records".
     * @return string
     * @throws SdkError When retention_policy is omitted; use hasRetentionPolicy() or valueOrDefault().
     */
    public function getRetentionPolicy(): string { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** Where the request is in review and erasure. Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
