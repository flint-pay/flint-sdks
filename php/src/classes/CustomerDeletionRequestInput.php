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
    /** @return string
     * @throws SdkError When customer_deletion_request_id is omitted; use hasCustomerDeletionRequestId() or valueOrDefault().
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When requested_at is omitted; use hasRequestedAt() or valueOrDefault().
     */
    public function getRequestedAt(): string|\DateTimeInterface { return $this->get('requested_at'); }
    public function hasRequestedAt(): bool { return $this->has('requested_at'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When resolved_at is omitted; use hasResolvedAt() or valueOrDefault().
     */
    public function getResolvedAt(): string|\DateTimeInterface { return $this->get('resolved_at'); }
    public function hasResolvedAt(): bool { return $this->has('resolved_at'); }
    /** @return string
     * @throws SdkError When retention_policy is omitted; use hasRetentionPolicy() or valueOrDefault().
     */
    public function getRetentionPolicy(): string { return $this->get('retention_policy'); }
    public function hasRetentionPolicy(): bool { return $this->has('retention_policy'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
