<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_source_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventorySourceSystemInput extends Model {
    /** @param array{'external_source_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySourceSystemInput')); }
    /** Shape $ (Value): string. Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is manual. Don't put secrets in this field. maxLength: 255.
     * @return string
     * @throws SdkError When external_source_id is omitted; use hasExternalSourceId() or valueOrDefault().
     */
    public function getExternalSourceId(): string { return $this->get('external_source_id'); }
    public function hasExternalSourceId(): bool { return $this->has('external_source_id'); }
    /** Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "flint", "other".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
