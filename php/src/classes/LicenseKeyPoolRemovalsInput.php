<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LicenseKeyPoolKeyRemovalInput|array<array-key, mixed>|\stdClass> $removals
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolRemovalsInput extends Model {
    /** @param array{'removals': list<LicenseKeyPoolKeyRemovalInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolRemovalsInput')); }
    /** One outcome per selector, in request order. [] (Value): {@see LicenseKeyPoolKeyRemovalInput}. The result of recalling one key.
     * @return list<LicenseKeyPoolKeyRemovalInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When removals is omitted; use hasRemovals() or valueOrDefault().
     */
    public function getRemovals(): array { return $this->get('removals'); }
    public function hasRemovals(): bool { return $this->has('removals'); }
}
