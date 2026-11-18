<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?LicenseKeyPoolKey $license_key_pool_key
 * @property-read string $outcome
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolKeyRemoval extends Model {
    /** @param array{'license_key_pool_key'?: mixed, 'outcome': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolKeyRemoval')); }
    /** The matched pool key. Omitted when the selector did not match a key. An uploaded key represented by its display suffix.
     * @return ?LicenseKeyPoolKey
     */
    public function getLicenseKeyPoolKey(): ?LicenseKeyPoolKey { return $this->get('license_key_pool_key'); }
    public function hasLicenseKeyPoolKey(): bool { return $this->has('license_key_pool_key'); }
    /** The outcome for this selector. Value enum: "removed", "issued", "held", "not_found".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
