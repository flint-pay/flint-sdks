<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_catalog_default_version
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class AssignToUnconfiguredDeliveryProfileRequestInput extends Model {
    /** @param array{'expected_catalog_default_version'?: string, 'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AssignToUnconfiguredDeliveryProfileRequestInput')); }
    /** @return string
     * @throws SdkError When expected_catalog_default_version is omitted; use hasExpectedCatalogDefaultVersion() or valueOrDefault().
     */
    public function getExpectedCatalogDefaultVersion(): string { return $this->get('expected_catalog_default_version'); }
    public function hasExpectedCatalogDefaultVersion(): bool { return $this->has('expected_catalog_default_version'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
