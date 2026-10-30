<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationReleasedMerchantEventDataObjectOwnerMerchant extends Model {
    /** @param array{'key': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationReleasedMerchantEventDataObjectOwnerMerchant')); }
    /** key
     * @return string
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Value enum: "merchant".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
