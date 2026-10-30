<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read list<string>|string $inventory_item_status
 * @property-read bool $has_available_quantity
 * @property-read bool $has_unavailable_condition
 * @property-read bool $has_shortage
 * @property-read string $query
 * @property-read int $min_available_quantity
 * @property-read int $max_available_quantity
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'inventory_item_status'?: list<string>|string, 'has_available_quantity'?: bool, 'has_unavailable_condition'?: bool, 'has_shortage'?: bool, 'query'?: string, 'min_available_quantity'?: int, 'max_available_quantity'?: int, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelsListInput')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Filter by Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Filter by the status of the inventory item the level belongs to. Only active items can be routed or reserved. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>|string
     * @throws SdkError When inventory_item_status is omitted; use hasInventoryItemStatus() or valueOrDefault().
     */
    public function getInventoryItemStatus(): mixed { return $this->get('inventory_item_status'); }
    public function hasInventoryItemStatus(): bool { return $this->has('inventory_item_status'); }
    /** True selects levels with available quantity; false selects levels with zero available quantity. Omit for all levels.
     * @return bool
     * @throws SdkError When has_available_quantity is omitted; use hasHasAvailableQuantity() or valueOrDefault().
     */
    public function getHasAvailableQuantity(): bool { return $this->get('has_available_quantity'); }
    public function hasHasAvailableQuantity(): bool { return $this->has('has_available_quantity'); }
    /** True selects levels with unavailable physical stock; false selects levels with none. Omit for all levels.
     * @return bool
     * @throws SdkError When has_unavailable_condition is omitted; use hasHasUnavailableCondition() or valueOrDefault().
     */
    public function getHasUnavailableCondition(): bool { return $this->get('has_unavailable_condition'); }
    public function hasHasUnavailableCondition(): bool { return $this->has('has_unavailable_condition'); }
    /** True selects levels with a shortage; false selects levels with none. Omit for all levels.
     * @return bool
     * @throws SdkError When has_shortage is omitted; use hasHasShortage() or valueOrDefault().
     */
    public function getHasShortage(): bool { return $this->get('has_shortage'); }
    public function hasHasShortage(): bool { return $this->has('has_shortage'); }
    /** Search inventory item ID, name, SKU, or barcode. Case-insensitive substring match. maxLength: 255.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Inclusive lower bound on available_quantity. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When min_available_quantity is omitted; use hasMinAvailableQuantity() or valueOrDefault().
     */
    public function getMinAvailableQuantity(): int { return $this->get('min_available_quantity'); }
    public function hasMinAvailableQuantity(): bool { return $this->has('min_available_quantity'); }
    /** Inclusive upper bound on available_quantity. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When max_available_quantity is omitted; use hasMaxAvailableQuantity() or valueOrDefault().
     */
    public function getMaxAvailableQuantity(): int { return $this->get('max_available_quantity'); }
    public function hasMaxAvailableQuantity(): bool { return $this->has('max_available_quantity'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Supported expansions: inventory_item. The expansion resolves with one batched lookup per page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum: "inventory_item". anyOf[1] (Value): Array of string.  [] enum: "inventory_item". anyOf[1][] (Value): string.  Value enum: "inventory_item". anyOf[2] (Value): string.  Value enum: "inventory_item".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
