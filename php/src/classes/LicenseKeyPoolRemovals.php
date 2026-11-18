<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LicenseKeyPoolKeyRemoval> $removals
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolRemovals extends Model {
    /** @param array{'removals': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolRemovals')); }
    /** One outcome per selector, in request order. [] (Value): {@see LicenseKeyPoolKeyRemoval}. The result of recalling one key.
     * @return list<LicenseKeyPoolKeyRemoval>
     */
    public function getRemovals(): array { return $this->get('removals'); }
    public function hasRemovals(): bool { return $this->has('removals'); }
}
