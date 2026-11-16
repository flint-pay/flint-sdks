<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $external_source_id
 * @property-read string|null $source_system_type
 * Presence-aware response; omitted optional fields return null. */
final class ReturnSourceSystemPreviousAttributes extends Model {
    /** @param array{'external_source_id'?: mixed, 'source_system_type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnSourceSystemPreviousAttributes')); }
    /** Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. anyOf[1] (Value): string. Your source system's identifier. Required when source_system_type is pos, wms, erp, or other; not allowed when source_system_type is manual. Don't put secrets in this field. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalSourceId(): string|null { return $this->get('external_source_id'); }
    public function hasExternalSourceId(): bool { return $this->has('external_source_id'); }
    /** Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1] (Value): string. Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse management system, erp for an enterprise resource planning system, or other for another external system. Flint-authored events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceSystemType(): string|null { return $this->get('source_system_type'); }
    public function hasSourceSystemType(): bool { return $this->has('source_system_type'); }
}
