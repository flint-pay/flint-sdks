<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class SpecificationGetInput extends Model {
    /** @param array{'version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SpecificationGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
