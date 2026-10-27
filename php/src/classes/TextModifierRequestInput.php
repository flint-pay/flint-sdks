<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_group_id
 * @property-read string $value
 * Presence-aware input; omitted fields throw when accessed. */
final class TextModifierRequestInput extends Model {
    /** @param array{'modifier_group_id': string, 'value': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TextModifierRequestInput')); }
    /** Shape $ (Value): string. Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: 1.
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string. Text entered by the buyer, subject to the group's text rules. minLength: 1.
     * @return string
     * @throws SdkError When value is omitted; use hasValue() or valueOrDefault().
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
