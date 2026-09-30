<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read string $inventory_item_status
 * @property-read bool $has_available_quantity
 * @property-read bool $has_unavailable_condition
 * @property-read bool $has_shortage
 * @property-read string $query
 * @property-read string $min_available_quantity
 * @property-read string $max_available_quantity
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'inventory_item_id'?: string, 'location_id'?: string, 'inventory_item_status'?: string, 'has_available_quantity'?: bool, 'has_unavailable_condition'?: bool, 'has_shortage'?: bool, 'query'?: string, 'min_available_quantity'?: string, 'max_available_quantity'?: string, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelsListInput')); }
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
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When inventory_item_status is omitted; use hasInventoryItemStatus() or valueOrDefault().
     */
    public function getInventoryItemStatus(): string { return $this->get('inventory_item_status'); }
    public function hasInventoryItemStatus(): bool { return $this->has('inventory_item_status'); }
    /** @return bool
     * @throws SdkError When has_available_quantity is omitted; use hasHasAvailableQuantity() or valueOrDefault().
     */
    public function getHasAvailableQuantity(): bool { return $this->get('has_available_quantity'); }
    public function hasHasAvailableQuantity(): bool { return $this->has('has_available_quantity'); }
    /** @return bool
     * @throws SdkError When has_unavailable_condition is omitted; use hasHasUnavailableCondition() or valueOrDefault().
     */
    public function getHasUnavailableCondition(): bool { return $this->get('has_unavailable_condition'); }
    public function hasHasUnavailableCondition(): bool { return $this->has('has_unavailable_condition'); }
    /** @return bool
     * @throws SdkError When has_shortage is omitted; use hasHasShortage() or valueOrDefault().
     */
    public function getHasShortage(): bool { return $this->get('has_shortage'); }
    public function hasHasShortage(): bool { return $this->has('has_shortage'); }
    /** @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** @return string
     * @throws SdkError When min_available_quantity is omitted; use hasMinAvailableQuantity() or valueOrDefault().
     */
    public function getMinAvailableQuantity(): string { return $this->get('min_available_quantity'); }
    public function hasMinAvailableQuantity(): bool { return $this->has('min_available_quantity'); }
    /** @return string
     * @throws SdkError When max_available_quantity is omitted; use hasMaxAvailableQuantity() or valueOrDefault().
     */
    public function getMaxAvailableQuantity(): string { return $this->get('max_available_quantity'); }
    public function hasMaxAvailableQuantity(): bool { return $this->has('max_available_quantity'); }
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
    /** @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
