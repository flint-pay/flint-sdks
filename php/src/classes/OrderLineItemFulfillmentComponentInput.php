<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read array{'allowed_types': list<string>, 'requirement': string, ...}|object|null $profile
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentComponentInput extends Model {
    /** @param array{'bundle_component_id': string, 'profile': array{'allowed_types': list<string>, 'requirement': string, ...}|object|null, 'quantity_per_line_item_unit': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponentInput')); }
    /** ID of the bundle component these requirements apply to.
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Fulfillment requirements for this component. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfileInput}. Whether an order line item requires fulfillment, and the fulfillment types it allows. anyOf[2] (Value): null.
     * @return array{'allowed_types': list<string>, 'requirement': string, ...}|object|null
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Number of this component per unit of the order line item; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
