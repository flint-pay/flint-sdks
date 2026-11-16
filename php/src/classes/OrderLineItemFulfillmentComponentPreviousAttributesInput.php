<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $profile
 * @property-read int|null $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentComponentPreviousAttributesInput extends Model {
    /** @param array{'bundle_component_id'?: string|null, 'profile'?: OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'quantity_per_line_item_unit'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentComponentPreviousAttributesInput')); }
    /** ID of the bundle component these requirements apply to. anyOf[1] (Value): string. ID of the bundle component these requirements apply to. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Fulfillment requirements for this component. anyOf[1] (Value): {@see OrderLineItemFulfillmentProfilePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineItemFulfillmentProfilePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When profile is omitted; use hasProfile() or valueOrDefault().
     */
    public function getProfile(): mixed { return $this->get('profile'); }
    public function hasProfile(): bool { return $this->has('profile'); }
    /** Number of this component per unit of the order line item; fractional quantities are not supported. anyOf[1] (Value): integer. Number of this component per unit of the order line item; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): mixed { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}
