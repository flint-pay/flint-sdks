<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read string|null $expected_ship_date
 * @property-read int|null $limit_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class BackorderPolicyInput extends Model {
    /** @param array{'enabled': bool, 'expected_ship_date': string|null, 'limit_quantity': int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BackorderPolicyInput')); }
    /** Whether this inventory item allows backorders.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Expected shipping date. Null when unknown. Format: date. Example: "2026-08-02".
     * @return string|null
     * @throws SdkError When expected_ship_date is omitted; use hasExpectedShipDate() or valueOrDefault().
     */
    public function getExpectedShipDate(): string|null { return $this->get('expected_ship_date'); }
    public function hasExpectedShipDate(): bool { return $this->has('expected_ship_date'); }
    /** Maximum units on backorder across the item's levels. Null when there is no cap. Format: int64. minimum: 1. maximum: 9007199254740991.
     * @return int|null
     * @throws SdkError When limit_quantity is omitted; use hasLimitQuantity() or valueOrDefault().
     */
    public function getLimitQuantity(): int|null { return $this->get('limit_quantity'); }
    public function hasLimitQuantity(): bool { return $this->has('limit_quantity'); }
}
