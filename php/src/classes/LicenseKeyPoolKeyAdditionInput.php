<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LicenseKeyPoolKeyInput|array<array-key, mixed>|\stdClass $license_key_pool_key
 * @property-read string $outcome
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolKeyAdditionInput extends Model {
    /** @param array{'license_key_pool_key': LicenseKeyPoolKeyInput|array<array-key, mixed>|\stdClass, 'outcome': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolKeyAdditionInput')); }
    /** The key that was created or matched. Its pool may differ from the requested pool. An uploaded key represented by its display suffix.
     * @return LicenseKeyPoolKeyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When license_key_pool_key is omitted; use hasLicenseKeyPoolKey() or valueOrDefault().
     */
    public function getLicenseKeyPoolKey(): mixed { return $this->get('license_key_pool_key'); }
    public function hasLicenseKeyPoolKey(): bool { return $this->has('license_key_pool_key'); }
    /** Whether the key was added or already existed. Value enum: "created", "existing".
     * @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
