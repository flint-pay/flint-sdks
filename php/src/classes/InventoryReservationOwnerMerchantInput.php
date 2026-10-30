<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerMerchantInput extends Model {
    /** @param array{'key': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerMerchantInput')); }
    /** key
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Value enum: "merchant".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
