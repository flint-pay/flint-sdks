<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read string|null $expected_ship_date
 * @property-read int|null $limit_quantity
 * Presence-aware response; omitted optional fields return null. */
final class BackorderPolicy extends Model {
    /** @param array{'enabled': bool, 'expected_ship_date': string|null, 'limit_quantity': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BackorderPolicy')); }
    /** Whether this inventory item allows backorders.
     * @return bool
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Expected shipping date. Null when unknown. Format: date.
     * @return string|null
     */
    public function getExpectedShipDate(): string|null { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Maximum units on backorder across the item's levels. Null when there is no cap. Format: int64. minimum: 1. maximum: 9007199254740991.
     * @return int|null
     */
    public function getLimitQuantity(): int|null { return $this->get('limit_quantity'); }
    public function hasLimitQuantity(): bool { return $this->has('limit_quantity'); }
}
