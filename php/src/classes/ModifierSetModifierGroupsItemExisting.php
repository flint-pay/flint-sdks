<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $display_name
 * @property-read ?int $max_selected
 * @property-read ?int $min_selected
 * @property-read ?ModifierSetModifierGroupsItemExistingModifierGroup $modifier_group
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_name
 * @property-read ?list<ModifierSetModifierGroupsItemExistingModifierOverridesItem> $modifier_overrides
 * @property-read string $modifier_set_group_id
 * @property-read int $position
 * @property-read ?bool $required
 * @property-read ?bool $show_on_fulfillment
 * @property-read ?bool $show_on_receipt
 * @property-read string $source
 * Presence-aware response; omitted optional fields return null. */
final class ModifierSetModifierGroupsItemExisting extends Model {
    /** @param array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group'?: mixed, 'modifier_group_id': string, 'modifier_group_name': string, 'modifier_overrides'?: list<mixed>, 'modifier_set_group_id': string, 'position': int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetModifierGroupsItemExisting')); }
    /** Shape $ (Value): string. Overrides the group's name for this set. Omit it to use the group's name.
     * @return ?string
     */
    public function getDisplayName(): ?string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Shape $ (Value): integer. Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: int32.
     * @return ?int
     */
    public function getMaxSelected(): ?int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Shape $ (Value): integer. Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, the minimum is 0. Format: int32.
     * @return ?int
     */
    public function getMinSelected(): ?int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Shape $ (Value): {@see ModifierSetModifierGroupsItemExistingModifierGroup}. Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of choices that customize an item.
     * @return ?ModifierSetModifierGroupsItemExistingModifierGroup
     */
    public function getModifierGroup(): ?ModifierSetModifierGroupsItemExistingModifierGroup { return $this->get('modifier_group'); }
    public function hasModifierGroup(): bool { return $this->has('modifier_group'); }
    /** Shape $ (Value): string. Identifier of the independent modifier group referenced when source is existing.
     * @return string
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Shape $ (Value): string. Current name of the referenced modifier group.
     * @return string
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Shape $ (Value): Array of ({@see ModifierSetModifierGroupsItemExistingModifierOverridesItem} and {@see ModifierOverride}). Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. Shape $[] (Value): {@see ModifierSetModifierGroupsItemExistingModifierOverridesItem}. Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.
     * @return ?list<ModifierSetModifierGroupsItemExistingModifierOverridesItem>
     */
    public function getModifierOverrides(): ?array { return $this->get('modifier_overrides'); }
    public function hasModifierOverrides(): bool { return $this->has('modifier_overrides'); }
    /** Shape $ (Value): string. Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one.
     * @return string
     */
    public function getModifierSetGroupId(): string { return $this->get('modifier_set_group_id'); }
    public function hasModifierSetGroupId(): bool { return $this->has('modifier_set_group_id'); }
    /** Shape $ (Value): integer. Display position of this group within the set; lower values appear first. Format: int32.
     * @return int
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Shape $ (Value): boolean. Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; list groups use min_selected.
     * @return ?bool
     */
    public function getRequired(): ?bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
    /** Shape $ (Value): boolean. Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value.
     * @return ?bool
     */
    public function getShowOnFulfillment(): ?bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Shape $ (Value): boolean. Overrides the group's show_on_receipt for this set. Omit it to use the group's value.
     * @return ?bool
     */
    public function getShowOnReceipt(): ?bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Shape $ (Value): string. Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. References an independent modifier group. Value enum: "existing".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
