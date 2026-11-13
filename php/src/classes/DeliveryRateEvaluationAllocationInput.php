<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_delivery_method_ids
 * @property-read list<string> $allowed_types
 * @property-read string $bundle_component_id
 * @property-read string $demand_key
 * @property-read list<string> $inventory_demand_keys
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $merchandise_value_money
 * @property-read string $order_line_item_id
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationAllocationInput extends Model {
    /** @param array{'allowed_delivery_method_ids'?: list<string>, 'allowed_types': list<string>, 'bundle_component_id'?: string, 'demand_key': string, 'inventory_demand_keys'?: list<string>, 'merchandise_value_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'order_line_item_id': string, 'quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationAllocationInput')); }
    /** Delivery method IDs these units are limited to. Omitted when no method restriction applies. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When allowed_delivery_method_ids is omitted; use hasAllowedDeliveryMethodIds() or valueOrDefault().
     */
    public function getAllowedDeliveryMethodIds(): array { return $this->get('allowed_delivery_method_ids'); }
    public function hasAllowedDeliveryMethodIds(): bool { return $this->has('allowed_delivery_method_ids'); }
    /** Delivery method types these units allow. [] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_types is omitted; use hasAllowedTypes() or valueOrDefault().
     */
    public function getAllowedTypes(): array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** The bundle component these units are, for a line item that sells a bundle. Omitted otherwise. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Flint's key for the demand these units fill, such as `line:` followed by the order line item ID.
     * @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** Keys of the inventory demands these units draw on. Omitted when they draw on none. [] (Value): string.
     * @return list<string>
     * @throws SdkError When inventory_demand_keys is omitted; use hasInventoryDemandKeys() or valueOrDefault().
     */
    public function getInventoryDemandKeys(): array { return $this->get('inventory_demand_keys'); }
    public function hasInventoryDemandKeys(): bool { return $this->has('inventory_demand_keys'); }
    /** Merchandise value of these units in the request's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchandise_value_money is omitted; use hasMerchandiseValueMoney() or valueOrDefault().
     */
    public function getMerchandiseValueMoney(): mixed { return $this->get('merchandise_value_money'); }
    public function hasMerchandiseValueMoney(): bool { return $this->has('merchandise_value_money'); }
    /** The order line item being shipped. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number units of the line item in this leg; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
