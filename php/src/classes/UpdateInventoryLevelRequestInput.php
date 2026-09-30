<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $safety_stock_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateInventoryLevelRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'safety_stock_quantity': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateInventoryLevelRequestInput')); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** @return string
     * @throws SdkError When safety_stock_quantity is omitted; use hasSafetyStockQuantity() or valueOrDefault().
     */
    public function getSafetyStockQuantity(): string { return $this->get('safety_stock_quantity'); }
    public function hasSafetyStockQuantity(): bool { return $this->has('safety_stock_quantity'); }
}
