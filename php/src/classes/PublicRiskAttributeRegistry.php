<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicRiskAttribute> $attributes
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class PublicRiskAttributeRegistry extends Model {
    /** @param array{'attributes': list<mixed>, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicRiskAttributeRegistry')); }
    /** @return list<PublicRiskAttribute>
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
