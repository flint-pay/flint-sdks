<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_deletion_request_id
 * @property-read string $customer_id
 * @property-read string $requested_at
 * @property-read ?string $resolved_at
 * @property-read string $retention_policy
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class CustomerDeletionRequestRejectedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'customer_deletion_request_id': string, 'customer_id': string, 'requested_at': string, 'resolved_at'?: string, 'retention_policy': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestRejectedInstalledMerchantsEventDataObject')); }
    /** customer_deletion_request_id
     * @return string
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** customer_id
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getRequestedAt(): string { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getResolvedAt(): ?string { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** What deletion keeps. `retain_required_commerce_records`: orders, invoices, credit notes, payments, and refunds stay for accounting, tax, and disputes, without the customer's email address or phone number. Issued invoices and credit notes keep the buyer name, billing address, and tax ID they were issued with, because tax law requires them. Orders keep the delivery recipient's name and address. Contact copies created while deletion is finishing are erased within minutes, with another check about 24 hours later. Value enum: "retain_required_commerce_records".
     * @return string
     */
    public function getRetentionPolicy(): string { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** Value enum: "pending_review", "processing", "completed", "rejected", "failed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
