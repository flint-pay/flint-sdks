<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $modifier_set_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetsGetInput extends Model {
    /** @param array{'modifier_set_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetsGetInput')); }
    /** Flint modifier set ID. Example: "ms_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When modifier_set_id is omitted; use hasModifierSetId() or valueOrDefault().
     */
    public function getModifierSetId(): string { return $this->get('modifier_set_id'); }
    public function hasModifierSetId(): bool { return $this->has('modifier_set_id'); }
}
