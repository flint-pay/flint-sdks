<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $key
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerMerchantPreviousAttributesInput extends Model {
    /** @param array{'key'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerMerchantPreviousAttributesInput')); }
    /** Your identifier for the claim that holds the stock. anyOf[1] (Value): string. Your identifier for the claim that holds the stock. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): mixed { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
    /** Who holds the reservation. Value enum: "merchant". anyOf[1] (Value): string. Who holds the reservation. Value enum: "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
