<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read int $safety_stock_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateInventoryLevelRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'safety_stock_quantity': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateInventoryLevelRequestInput')); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When safety_stock_quantity is omitted; use hasSafetyStockQuantity() or valueOrDefault().
     */
    public function getSafetyStockQuantity(): int { return $this->get('safety_stock_quantity'); }
    public function hasSafetyStockQuantity(): bool { return $this->has('safety_stock_quantity'); }
}
