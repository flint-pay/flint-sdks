<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_deletion_request_id
 * @property-read string $customer_id
 * @property-read string|\DateTimeInterface $requested_at
 * @property-read string|\DateTimeInterface $resolved_at
 * @property-read string $retention_policy
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestInput extends Model {
    /** @param array{'customer_deletion_request_id': string, 'customer_id': string, 'requested_at': string|\DateTimeInterface, 'resolved_at'?: string|\DateTimeInterface, 'retention_policy': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_deletion_request_id is omitted; use hasCustomerDeletionRequestId() or valueOrDefault().
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When resolved_at is omitted; use hasResolvedAt() or valueOrDefault().
     */
    public function getResolvedAt(): string|\DateTimeInterface { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** Shape $ (Value): string. What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records".
     * @return string
     * @throws SdkError When retention_policy is omitted; use hasRetentionPolicy() or valueOrDefault().
     */
    public function getRetentionPolicy(): string { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** Shape $ (Value): string.  Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
