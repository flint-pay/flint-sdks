<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationOwnerRequestInput extends Model {
    /** @param array{'key': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationOwnerRequestInput')); }
    /** Shape $ (Value): string. Your stable identifier for what holds the stock, such as a cart ID. One active reservation per key. minLength: 1.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
}
