<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $display_name
 * @property-read int|null $max_selected
 * @property-read int|null $min_selected
 * @property-read ModifierGroupPreviousAttributes|null $modifier_group
 * @property-read string|null $modifier_group_id
 * @property-read list<ModifierOverridePreviousAttributes>|null $modifier_overrides
 * @property-read string|null $modifier_set_group_id
 * @property-read int|null $position
 * @property-read bool|null $required
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetGroupPreviousAttributes extends Model {
    /** @param array{'display_name'?: mixed, 'max_selected'?: mixed, 'min_selected'?: mixed, 'modifier_group'?: mixed, 'modifier_group_id'?: mixed, 'modifier_overrides'?: mixed, 'modifier_set_group_id'?: mixed, 'position'?: mixed, 'required'?: mixed, 'show_on_fulfillment'?: mixed, 'show_on_receipt'?: mixed, 'source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetGroupPreviousAttributes')); }
    /** Overrides the group's name for this set. Omit it to use the group's name. anyOf[1] (Value): string. Overrides the group's name for this set. Omit it to use the group's name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisplayName(): string|null { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. anyOf[1] (Value): integer. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxSelected(): int|null { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. anyOf[1] (Value): integer. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinSelected(): int|null { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. anyOf[1] (Value): {@see ModifierGroupPreviousAttributes}. anyOf[2] (Value): null.
     * @return ModifierGroupPreviousAttributes|null
     */
    public function getModifierGroup(): ModifierGroupPreviousAttributes|null { return $this->get('modifier_group'); }
    public function hasModifierGroup(): bool { return $this->has('modifier_group'); }
    /** Stable identifier of the group contained in this entry, for either source. anyOf[1] (Value): string. Stable identifier of the group contained in this entry, for either source. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierGroupId(): string|null { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. anyOf[1] (Value): Array of {@see ModifierOverridePreviousAttributes}. Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. anyOf[1][] (Value): {@see ModifierOverridePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ModifierOverridePreviousAttributes>|null
     */
    public function getModifierOverrides(): array|null { return $this->get('modifier_overrides'); }
    public function hasModifierOverrides(): bool { return $this->has('modifier_overrides'); }
    /** Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. anyOf[1] (Value): string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getModifierSetGroupId(): string|null { return $this->get('modifier_set_group_id'); }
    public function hasModifierSetGroupId(): bool { return $this->has('modifier_set_group_id'); }
    /** Display position of this group within the set; lower values appear first. anyOf[1] (Value): integer. Display position of this group within the set; lower values appear first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPosition(): int|null { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[1] (Value): boolean. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getRequired(): bool|null { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. anyOf[1] (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnFulfillment(): bool|null { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. anyOf[1] (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getShowOnReceipt(): bool|null { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Value enum: "existing", "inline". anyOf[1] (Value): string. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Value enum: "existing", "inline". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
