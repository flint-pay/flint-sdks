<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $source_reference_id
 * @property-read string $source_reference_type
 * Presence-aware response; omitted fields throw when accessed. */
final class InventorySourceReference extends Model {
    /** @param array{'source_reference_id': string, 'source_reference_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySourceReference')); }
    /** @return string
     * @throws SdkError When source_reference_id is omitted; use hasSourceReferenceId() or valueOrDefault().
     */
    public function getSourceReferenceId(): string { return $this->get('source_reference_id'); }
    public function hasSourceReferenceId(): bool { return $this->has('source_reference_id'); }
    /** @return string
     * @throws SdkError When source_reference_type is omitted; use hasSourceReferenceType() or valueOrDefault().
     */
    public function getSourceReferenceType(): string { return $this->get('source_reference_type'); }
    public function hasSourceReferenceType(): bool { return $this->has('source_reference_type'); }
}
