<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<string> $allowed_types
 * @property-read ?string $combination_policy
 * @property-read ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillmentOriginPolicy $origin_policy
 * @property-read string $requirement
 * @property-read ?string $resolution_mode
 * @property-read ?string $splitting_policy
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment extends Model {
    /** @param array{'allowed_types'?: list<string>, 'combination_policy'?: string, 'origin_policy'?: mixed, 'requirement': string, 'resolution_mode'?: string, 'splitting_policy'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillment')); }
    /**  [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getAllowedTypes(): ?array { return $this->get('allowed_types'); }
    public function hasAllowedTypes(): bool { return $this->has('allowed_types'); }
    /** Value enum: "combine_when_compatible", "separate_profile", "separate_line_item", "fulfill_alone".
     * @return ?string
     */
    public function getCombinationPolicy(): ?string { return $this->get('combination_policy'); }
    public function hasCombinationPolicy(): bool { return $this->has('combination_policy'); }
    /** Where a line item ships or is fulfilled from: a fixed location, inventory routing, or the origin of the fulfillment method.
     * @return ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillmentOriginPolicy
     */
    public function getOriginPolicy(): ?DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillmentOriginPolicy { return $this->get('origin_policy'); }
    public function hasOriginPolicy(): bool { return $this->has('origin_policy'); }
    /** Value enum: "none", "required".
     * @return string
     */
    public function getRequirement(): string { return $this->get('requirement'); }
    public function hasRequirement(): bool { return $this->has('requirement'); }
    /** Value enum: "quote", "manual".
     * @return ?string
     */
    public function getResolutionMode(): ?string { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Value enum: "whole_line_item", "quantity_split_allowed".
     * @return ?string
     */
    public function getSplittingPolicy(): ?string { return $this->get('splitting_policy'); }
    public function hasSplittingPolicy(): bool { return $this->has('splitting_policy'); }
}
