<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $location_id
 * @property-read string $origin_policy_type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillmentOriginPolicy extends Model {
    /** @param array{'location_id'?: string, 'origin_policy_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemBundleFulfillmentOriginPolicy')); }
    /** minLength: 1.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Value enum: "fixed_location", "inventory_routing", "method_origin".
     * @return string
     */
    public function getOriginPolicyType(): string { return $this->get('origin_policy_type'); }
    public function hasOriginPolicyType(): bool { return $this->has('origin_policy_type'); }
}
