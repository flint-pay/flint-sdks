<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_source_id
 * @property-read string $source_system_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnSourceSystemInput extends Model {
    /** @param array{'external_source_id'?: string, 'source_system_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnSourceSystemInput')); }
    /** @return string
     * @throws SdkError When external_source_id is omitted; use hasExternalSourceId() or valueOrDefault().
     */
    public function getExternalSourceId(): string { return $this->get('external_source_id'); }
    public function hasExternalSourceId(): bool { return $this->has('external_source_id'); }
    /** @return string
     * @throws SdkError When source_system_type is omitted; use hasSourceSystemType() or valueOrDefault().
     */
    public function getSourceSystemType(): string { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
}
