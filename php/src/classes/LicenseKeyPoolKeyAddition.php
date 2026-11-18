<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyPoolKey $license_key_pool_key
 * @property-read string $outcome
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolKeyAddition extends Model {
    /** @param array{'license_key_pool_key': mixed, 'outcome': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolKeyAddition')); }
    /** The key that was created or matched. Its pool may differ from the requested pool. An uploaded key represented by its display suffix.
     * @return LicenseKeyPoolKey
     */
    public function getLicenseKeyPoolKey(): LicenseKeyPoolKey { return $this->get('license_key_pool_key'); }
    public function hasLicenseKeyPoolKey(): bool { return $this->has('license_key_pool_key'); }
    /** Whether the key was added or already existed. Value enum: "created", "existing".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
