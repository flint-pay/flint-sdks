<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LicenseKeyPoolKeyAdditionInput|array<array-key, mixed>|\stdClass> $additions
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolAdditionsInput extends Model {
    /** @param array{'additions': list<LicenseKeyPoolKeyAdditionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolAdditionsInput')); }
    /** One outcome per submitted key, in request order. [] (Value): {@see LicenseKeyPoolKeyAdditionInput}. The result of submitting one key for upload.
     * @return list<LicenseKeyPoolKeyAdditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When additions is omitted; use hasAdditions() or valueOrDefault().
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
}
