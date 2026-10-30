<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $location_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileOriginPolicy extends Model {
    /** @param array{'location_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileOriginPolicy')); }
    /** location_id
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Value enum: "fixed_location", "inventory_routing", "method_origin".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
