<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $display_name
 * @property-read int|null $max_selected
 * @property-read int|null $min_selected
 * @property-read ModifierGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $modifier_group
 * @property-read string|null $modifier_group_id
 * @property-read list<ModifierOverridePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $modifier_overrides
 * @property-read string|null $modifier_set_group_id
 * @property-read int|null $position
 * @property-read bool|null $required
 * @property-read bool|null $show_on_fulfillment
 * @property-read bool|null $show_on_receipt
 * @property-read string|null $source
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetGroupPreviousAttributesInput extends Model {
    /** @param array{'display_name'?: string|null, 'max_selected'?: int|null, 'min_selected'?: int|null, 'modifier_group'?: ModifierGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'modifier_group_id'?: string|null, 'modifier_overrides'?: list<ModifierOverridePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'modifier_set_group_id'?: string|null, 'position'?: int|null, 'required'?: bool|null, 'show_on_fulfillment'?: bool|null, 'show_on_receipt'?: bool|null, 'source'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetGroupPreviousAttributesInput')); }
    /** Overrides the group's name for this set. Omit it to use the group's name. anyOf[1] (Value): string. Overrides the group's name for this set. Omit it to use the group's name. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When display_name is omitted; use hasDisplayName() or valueOrDefault().
     */
    public function getDisplayName(): mixed { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. anyOf[1] (Value): integer. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): mixed { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. anyOf[1] (Value): integer. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): mixed { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Full modifier group for this entry, with the same representation as GET /v1/modifier-groups/{modifier_group_id}. Archived modifiers are excluded for either source, including when the group is archived. anyOf[1] (Value): {@see ModifierGroupPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ModifierGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When modifier_group is omitted; use hasModifierGroup() or valueOrDefault().
     */
    public function getModifierGroup(): mixed { return $this->get('modifier_group'); }
    public function hasModifierGroup(): bool { return $this->has('modifier_group'); }
    /** Stable identifier of the group contained in this entry, for either source. anyOf[1] (Value): string. Stable identifier of the group contained in this entry, for either source. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): mixed { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. anyOf[1] (Value): Array of {@see ModifierOverridePreviousAttributesInput}. Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. anyOf[1][] (Value): {@see ModifierOverridePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ModifierOverridePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When modifier_overrides is omitted; use hasModifierOverrides() or valueOrDefault().
     */
    public function getModifierOverrides(): mixed { return $this->get('modifier_overrides'); }
    public function hasModifierOverrides(): bool { return $this->has('modifier_overrides'); }
    /** Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. anyOf[1] (Value): string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one. Example: "msg_01KEZF7C008GXTVA2AQ1SRFGFC". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When modifier_set_group_id is omitted; use hasModifierSetGroupId() or valueOrDefault().
     */
    public function getModifierSetGroupId(): mixed { return $this->get('modifier_set_group_id'); }
    public function hasModifierSetGroupId(): bool { return $this->has('modifier_set_group_id'); }
    /** Display position of this group within the set; lower values appear first. anyOf[1] (Value): integer. Display position of this group within the set; lower values appear first. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): mixed { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[1] (Value): boolean. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): mixed { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. anyOf[1] (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): mixed { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value. anyOf[1] (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use the group's value. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): mixed { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Value enum: "existing", "inline". anyOf[1] (Value): string. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Value enum: "existing", "inline". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
