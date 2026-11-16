<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileOriginPolicyPreviousAttributesInput extends Model {
    /** @param array{'location_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileOriginPolicyPreviousAttributesInput')); }
    /** ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. anyOf[1] (Value): string. ID of the Location items leave from. Required for `fixed_location` and not allowed otherwise. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing", "method_origin". anyOf[1] (Value): string. Where items under the profile leave from. Value enum: "fixed_location", "inventory_routing", "method_origin". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
