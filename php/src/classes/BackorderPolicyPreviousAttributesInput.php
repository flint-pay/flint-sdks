<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $enabled
 * @property-read string|null|null $expected_ship_date
 * @property-read int|null|null $limit_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class BackorderPolicyPreviousAttributesInput extends Model {
    /** @param array{'enabled'?: bool|null, 'expected_ship_date'?: string|null|null, 'limit_quantity'?: int|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BackorderPolicyPreviousAttributesInput')); }
    /** Whether this inventory item allows backorders. anyOf[1] (Value): boolean. Whether this inventory item allows backorders. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Expected shipping date. Null when unknown. anyOf[1] (Value): string or null. Expected shipping date. Null when unknown. Format: date. Example: "2026-08-02". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When expected_ship_date is omitted; use hasExpectedShipDate() or valueOrDefault().
     */
    public function getExpectedShipDate(): mixed { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Maximum units on backorder across the item's levels. Null when there is no cap. anyOf[1] (Value): integer or null. Maximum units on backorder across the item's levels. Null when there is no cap. Format: int64. minimum: 1. maximum: 9007199254740991. anyOf[2] (Value): null.
     * @return int|null|null
     * @throws SdkError When limit_quantity is omitted; use hasLimitQuantity() or valueOrDefault().
     */
    public function getLimitQuantity(): mixed { return $this->get('limit_quantity'); }
    public function hasLimitQuantity(): bool { return $this->has('limit_quantity'); }
}
