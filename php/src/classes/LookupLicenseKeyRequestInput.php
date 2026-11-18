<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key
 * Presence-aware input; omitted fields throw when accessed. */
final class LookupLicenseKeyRequestInput extends Model {
    /** @param array{'key': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LookupLicenseKeyRequestInput')); }
    /** The full bearer key. Generated keys ignore case, spaces and hyphens and use the last 25 characters after normalization. Pool keys match exactly after surrounding whitespace is trimmed. minLength: 1.
     * @return string
     * @throws SdkError When key is omitted; use hasKey() or valueOrDefault().
     */
    public function getKey(): string { return $this->get('key'); }
    public function hasKey(): bool { return $this->has('key'); }
}
