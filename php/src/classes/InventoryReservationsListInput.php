<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read string $order_id
 * @property-read list<string> $status
 * @property-read list<string> $owner_type
 * @property-read string $owner_key
 * @property-read string $idempotency_key
 * @property-read bool $has_at_risk_quantity
 * @property-read list<string> $closed_reason
 * @property-read string|\DateTimeInterface $expires_after
 * @property-read string|\DateTimeInterface $expires_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'order_id'?: string, 'status'?: list<string>, 'owner_type'?: list<string>, 'owner_key'?: string, 'idempotency_key'?: string, 'has_at_risk_quantity'?: bool, 'closed_reason'?: list<string>, 'expires_after'?: string|\DateTimeInterface, 'expires_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsListInput')); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "closed". Shape $[] (Value): string.  Value enum: "active", "closed".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "merchant", "order". Shape $[] (Value): string.  Value enum: "merchant", "order".
     * @return list<string>
     * @throws SdkError When owner_type is omitted; use hasOwnerType() or valueOrDefault().
     */
    public function getOwnerType(): array { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When owner_key is omitted; use hasOwnerKey() or valueOrDefault().
     */
    public function getOwnerKey(): string { return $this->get('owner_key'); }
    public function hasOwnerKey(): bool { return $this->has('owner_key'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When has_at_risk_quantity is omitted; use hasHasAtRiskQuantity() or valueOrDefault().
     */
    public function getHasAtRiskQuantity(): bool { return $this->get('has_at_risk_quantity'); }
    public function hasHasAtRiskQuantity(): bool { return $this->has('has_at_risk_quantity'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "consumed", "released", "expired", "reallocated", "mixed". Shape $[] (Value): string.  Value enum: "consumed", "released", "expired", "reallocated", "mixed".
     * @return list<string>
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): array { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_after is omitted; use hasExpiresAfter() or valueOrDefault().
     */
    public function getExpiresAfter(): string|\DateTimeInterface { return $this->get('expires_after'); }
    public function hasExpiresAfter(): bool { return $this->has('expires_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_before is omitted; use hasExpiresBefore() or valueOrDefault().
     */
    public function getExpiresBefore(): string|\DateTimeInterface { return $this->get('expires_before'); }
    public function hasExpiresBefore(): bool { return $this->has('expires_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
}
