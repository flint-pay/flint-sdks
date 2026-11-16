<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $allowed_types
 * @property-read string|null $combination_policy
 * @property-read DeliveryProfileOriginPolicyPreviousAttributes|null $origin_policy
 * @property-read string|null $requirement
 * @property-read string|null $resolution_mode
 * @property-read string|null $splitting_policy
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileConfigurationPreviousAttributes extends Model {
    /** @param array{'allowed_types'?: mixed, 'combination_policy'?: mixed, 'origin_policy'?: mixed, 'requirement'?: mixed, 'resolution_mode'?: mixed, 'splitting_policy'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileConfigurationPreviousAttributes')); }
    /** Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of string. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1][] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getAllowedTypes(): array|null { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone". anyOf[1] (Value): string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCombinationPolicy(): string|null { return $this->get('combination_policy'); }
    public function hasCombinationPolicy(): bool { return $this->has('combination_policy'); }
    /** Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. anyOf[1] (Value): {@see DeliveryProfileOriginPolicyPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryProfileOriginPolicyPreviousAttributes|null
     */
    public function getOriginPolicy(): DeliveryProfileOriginPolicyPreviousAttributes|null { return $this->get('origin_policy'); }
    public function hasOriginPolicy(): bool { return $this->has('origin_policy'); }
    /** Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Value enum: "none", "required". anyOf[1] (Value): string. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Value enum: "none", "required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRequirement(): string|null { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
    /** Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[1] (Value): string. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Value enum: "quote", "manual". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResolutionMode(): string|null { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed". anyOf[1] (Value): string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSplittingPolicy(): string|null { return $this->get('splitting_policy'); }
    public function hasSplittingPolicy(): bool { return $this->has('splitting_policy'); }
}
