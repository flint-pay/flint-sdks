<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read array{'allowed_types': list<string>, 'requirement': string, ...}|object|null $profile
 * @property-read string $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentComponentInput extends Model {
    /** @param array{'bundle_component_id': string, 'profile': array{'allowed_types': list<string>, 'requirement': string, ...}|object|null, 'quantity_per_line_item_unit': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponentInput')); }
    /** Shape $ (Value): string. ID of the bundle component these requirements apply to.
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): {@see OrderLineItemFulfillmentProfileInput} or null. Fulfillment requirements for this component. Shape $.anyOf[1] (Value): {@see OrderLineItemFulfillmentProfileInput}. Whether an order line item requires fulfillment, and the fulfillment types it allows. Shape $.anyOf[2] (Value): null.
     * @return array{'allowed_types': list<string>, 'requirement': string, ...}|object|null
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Shape $ (Value): integer string. Number of this component per unit of the order line item; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): string { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
