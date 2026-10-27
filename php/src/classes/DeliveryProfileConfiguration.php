<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_types
 * @property-read ?string $combination_policy
 * @property-read ?DeliveryProfileOriginPolicy $origin_policy
 * @property-read string $requirement
 * @property-read ?string $resolution_mode
 * @property-read ?string $splitting_policy
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileConfiguration extends Model {
    /** @param array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileConfiguration')); }
    /** Shape $ (Value): Array of string. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". Shape $[] (Value): string.  Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * @return ?list<string>
     */
    public function getAllowedTypes(): ?array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Shape $ (Value): string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Value enum: "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     * @return ?string
     */
    public function getCombinationPolicy(): ?string { return $this->get('combination_policy'); }
    public function hasCombinationPolicy(): bool { return $this->has('combination_policy'); }
    /** Shape $ (Value): {@see DeliveryProfileOriginPolicy}. Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. Where items under a delivery profile ship or leave from: a fixed Location (`location_id`), inventory routing, or the origin set on the delivery method.
     * @return ?DeliveryProfileOriginPolicy
     */
    public function getOriginPolicy(): ?DeliveryProfileOriginPolicy { return $this->get('origin_policy'); }
    public function hasOriginPolicy(): bool { return $this->has('origin_policy'); }
    /** Shape $ (Value): string. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Value enum: "none", "required".
     * @return string
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
    /** Shape $ (Value): string. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Value enum: "quote", "manual".
     * @return ?string
     */
    public function getResolutionMode(): ?string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Shape $ (Value): string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Value enum: "whole_line_item", "quantity_split_allowed".
     * @return ?string
     */
    public function getSplittingPolicy(): ?string { return $this->get('splitting_policy'); }
    public function hasSplittingPolicy(): bool { return $this->has('splitting_policy'); }
}
