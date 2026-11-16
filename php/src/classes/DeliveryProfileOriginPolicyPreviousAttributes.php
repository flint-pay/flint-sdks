<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location_id
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileOriginPolicyPreviousAttributes extends Model {
    /** @param array{'location_id'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileOriginPolicyPreviousAttributes')); }
    /** ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. anyOf[1] (Value): string. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing", "method_origin". anyOf[1] (Value): string. Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing", "method_origin". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
