<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $status
 * @property-read string $owner_type
 * @property-read string $owner_key
 * @property-read string $idempotency_key
 * @property-read bool $has_at_risk_quantity
 * @property-read string $closed_reason
 * @property-read string|\DateTimeInterface $owner_expires_after
 * @property-read string|\DateTimeInterface $owner_expires_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: string, 'owner_type'?: string, 'owner_key'?: string, 'idempotency_key'?: string, 'has_at_risk_quantity'?: bool, 'closed_reason'?: string, 'owner_expires_after'?: string|\DateTimeInterface, 'owner_expires_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsListInput')); }
    /** @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When owner_type is omitted; use hasOwnerType() or valueOrDefault().
     */
    public function getOwnerType(): string { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** @return string
     * @throws SdkError When owner_key is omitted; use hasOwnerKey() or valueOrDefault().
     */
    public function getOwnerKey(): string { return $this->get('owner_key'); }
    public function hasOwnerKey(): bool { return $this->has('owner_key'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return bool
     * @throws SdkError When has_at_risk_quantity is omitted; use hasHasAtRiskQuantity() or valueOrDefault().
     */
    public function getHasAtRiskQuantity(): bool { return $this->get('has_at_risk_quantity'); }
    public function hasHasAtRiskQuantity(): bool { return $this->has('has_at_risk_quantity'); }
    /** @return string
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When owner_expires_after is omitted; use hasOwnerExpiresAfter() or valueOrDefault().
     */
    public function getOwnerExpiresAfter(): string|\DateTimeInterface { return $this->get('owner_expires_after'); }
    public function hasOwnerExpiresAfter(): bool { return $this->has('owner_expires_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When owner_expires_before is omitted; use hasOwnerExpiresBefore() or valueOrDefault().
     */
    public function getOwnerExpiresBefore(): string|\DateTimeInterface { return $this->get('owner_expires_before'); }
    public function hasOwnerExpiresBefore(): bool { return $this->has('owner_expires_before'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
