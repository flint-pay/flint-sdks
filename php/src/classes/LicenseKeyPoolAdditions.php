<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LicenseKeyPoolKeyAddition> $additions
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolAdditions extends Model {
    /** @param array{'additions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolAdditions')); }
    /** One outcome per submitted key, in request order. [] (Value): {@see LicenseKeyPoolKeyAddition}. The result of submitting one key for upload.
     * @return list<LicenseKeyPoolKeyAddition>
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
}
