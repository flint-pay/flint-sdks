<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_version
 * @property-read string $expected_api_version
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePartnerAppRequestInput extends Model {
    /** @param array{'api_version'?: string, 'expected_api_version'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePartnerAppRequestInput')); }
    /** @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** @return string
     * @throws SdkError When expected_api_version is omitted; use hasExpectedApiVersion() or valueOrDefault().
     */
    public function getExpectedApiVersion(): string { return $this->get('expected_api_version'); }
    public function hasExpectedApiVersion(): bool { return $this->has('expected_api_version'); }
}
