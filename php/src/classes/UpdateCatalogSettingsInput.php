<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_delivery_profile_id
 * @property-read string $expected_version
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCatalogSettingsInput extends Model {
    /** @param array{'default_delivery_profile_id': string, 'expected_version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCatalogSettingsInput')); }
    /** @return string
     * @throws SdkError When default_delivery_profile_id is omitted; use hasDefaultDeliveryProfileId() or valueOrDefault().
     */
    public function getDefaultDeliveryProfileId(): string { return $this->get('default_delivery_profile_id'); }
    public function hasDefaultDeliveryProfileId(): bool { return $this->has('default_delivery_profile_id'); }
    /** @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
}
