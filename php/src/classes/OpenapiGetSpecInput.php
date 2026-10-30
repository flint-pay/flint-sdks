<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class OpenapiGetSpecInput extends Model {
    /** @param array{'version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OpenapiGetSpecInput')); }
    /** Supported API version in YYYY-MM-DD format, for tools and direct links that can't send Flint-Version. When both are valid, this selects the returned specification. An invalid Flint-Version header still returns an error.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
