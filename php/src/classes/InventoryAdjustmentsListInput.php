<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read list<string> $reason
 * @property-read string $idempotency_key
 * @property-read list<string> $source_system_type
 * @property-read string $external_source_id
 * @property-read string $external_actor_id
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'reason'?: list<string>, 'idempotency_key'?: string, 'source_system_type'?: list<string>, 'external_source_id'?: string, 'external_actor_id'?: string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentsListInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction". Shape $[] (Value): string.  Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     * @return list<string>
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): array { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp", "flint", "other". Shape $[] (Value): string.  Value enum: "manual", "pos", "wms", "erp", "flint", "other".
     * @return list<string>
     * @throws SdkError When source_system_type is omitted; use hasSourceSystemType() or valueOrDefault().
     */
    public function getSourceSystemType(): array { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_source_id is omitted; use hasExternalSourceId() or valueOrDefault().
     */
    public function getExternalSourceId(): string { return $this->get('external_source_id'); }
    public function hasExternalSourceId(): bool { return $this->has('external_source_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
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
}
