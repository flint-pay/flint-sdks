<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $enabled
 * @property-read string|null $expected_ship_date
 * @property-read int|null $limit_quantity
 * Presence-aware response; omitted optional fields return null. */
final class BackorderPolicyPreviousAttributes extends Model {
    /** @param array{'enabled'?: mixed, 'expected_ship_date'?: mixed, 'limit_quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BackorderPolicyPreviousAttributes')); }
    /** Whether this inventory item allows backorders. anyOf[1] (Value): boolean. Whether this inventory item allows backorders. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Expected shipping date. Null when unknown. anyOf[1] (Value): string. Expected shipping date. Null when unknown. Format: date. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpectedShipDate(): string|null { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Maximum units on backorder across the item's levels. Null when there is no cap. anyOf[1] (Value): integer. Maximum units on backorder across the item's levels. Null when there is no cap. Format: int64. minimum: 1. maximum: 9007199254740991. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getLimitQuantity(): int|null { return $this->get('limit_quantity'); }
    public function hasLimitQuantity(): bool { return $this->has('limit_quantity'); }
}
