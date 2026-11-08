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
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'inventory_item_status'?: list<string>|string, 'has_available_quantity'?: bool, 'has_unavailable_condition'?: bool, 'has_shortage'?: bool, 'query'?: string, 'min_available_quantity'?: int, 'max_available_quantity'?: int, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelsListInput')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by inventory item. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Filter by Location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Filter by the status of the inventory item the level belongs to. Only active items can be routed or reserved. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "active", "inactive", "archived".
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
    /** Include related objects in the response. Supported expansions: inventory_item. The expansion resolves with one batched lookup per page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. [] enum: "inventory_item". Value enum: "inventory_item". anyOf[1] (Value): Array of string.  [] enum: "inventory_item". anyOf[1][] (Value): string.  Value enum: "inventory_item". anyOf[2] (Value): string.  Value enum: "inventory_item".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
