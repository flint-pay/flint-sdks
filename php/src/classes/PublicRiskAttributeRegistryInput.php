<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicRiskAttributeInput|array<array-key, mixed>|\stdClass> $attributes
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicRiskAttributeRegistryInput extends Model {
    /** @param array{'attributes': list<PublicRiskAttributeInput|array<array-key, mixed>|\stdClass>, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicRiskAttributeRegistryInput')); }
    /** @return list<PublicRiskAttributeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When attributes is omitted; use hasAttributes() or valueOrDefault().
     */
    public function getAttributes(): array { return $this->get('attributes'); }
    public function hasAttributes(): bool { return $this->has('attributes'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
