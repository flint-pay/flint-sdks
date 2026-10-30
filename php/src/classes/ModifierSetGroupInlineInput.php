<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $display_name
 * @property-read int $max_selected
 * @property-read int $min_selected
 * @property-read ModifierGroupInput|array<array-key, mixed>|\stdClass $modifier_group
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_name
 * @property-read list<ModifierOverrideInput|array<array-key, mixed>|\stdClass> $modifier_overrides
 * @property-read string $modifier_set_group_id
 * @property-read int $position
 * @property-read bool $required
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierSetGroupInlineInput extends Model {
    /** @param array{'display_name'?: string, 'max_selected'?: int, 'min_selected'?: int, 'modifier_group': ModifierGroupInput|array<array-key, mixed>|\stdClass, 'modifier_group_id'?: string, 'modifier_group_name'?: string, 'modifier_overrides'?: list<ModifierOverrideInput|array<array-key, mixed>|\stdClass>, 'modifier_set_group_id': string, 'position': int, 'required'?: bool, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'source': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierSetGroupInlineInput')); }
    /** Overrides the group's name for this set. Omit it to use the group's name.
     * @return string
     * @throws SdkError When display_name is omitted; use hasDisplayName() or valueOrDefault().
     */
    public function getDisplayName(): string { return $this->get('display_name'); }
    public function hasDisplayName(): bool { return $this->has('display_name'); }
    /** Overrides the group's max_selected for this set. Omit it to use the group's value. Accepted only for list groups; if neither value is set, there is no limit. Format: int32.
     * @return int
     * @throws SdkError When max_selected is omitted; use hasMaxSelected() or valueOrDefault().
     */
    public function getMaxSelected(): int { return $this->get('max_selected'); }
    public function hasMaxSelected(): bool { return $this->has('max_selected'); }
    /** Overrides the group's min_selected for this set. Omit it to use the group's value. Accepted only for list groups; set min_selected: 1 to require a selection. If neither value is set, the minimum is 0. Format: int32.
     * @return int
     * @throws SdkError When min_selected is omitted; use hasMinSelected() or valueOrDefault().
     */
    public function getMinSelected(): int { return $this->get('min_selected'); }
    public function hasMinSelected(): bool { return $this->has('min_selected'); }
    /** Modifier group owned by this set when source is inline. Read this group through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. A group of choices that customize an item.
     * @return ModifierGroupInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When modifier_group is omitted; use hasModifierGroup() or valueOrDefault().
     */
    public function getModifierGroup(): mixed { return $this->get('modifier_group'); }
    public function hasModifierGroup(): bool { return $this->has('modifier_group'); }
    /** Identifier of the independent modifier group referenced when source is existing.
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** Current name of the referenced modifier group.
     * @return string
     * @throws SdkError When modifier_group_name is omitted; use hasModifierGroupName() or valueOrDefault().
     */
    public function getModifierGroupName(): string { return $this->get('modifier_group_name'); }
    public function hasModifierGroupName(): bool { return $this->has('modifier_group_name'); }
    /** Overrides for individual list modifiers in this set. A choice is offered only when its status is active and its override's available is not false. [] (Value): {@see ModifierOverrideInput}. Settings for one modifier that apply only within a modifier set group, overriding the modifier group's own values.
     * @return list<ModifierOverrideInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifier_overrides is omitted; use hasModifierOverrides() or valueOrDefault().
     */
    public function getModifierOverrides(): array { return $this->get('modifier_overrides'); }
    public function hasModifierOverrides(): bool { return $this->has('modifier_overrides'); }
    /** Stable identifier of this group entry within the set. In a replacement request, include it to retain an entry or omit it to create one.
     * @return string
     * @throws SdkError When modifier_set_group_id is omitted; use hasModifierSetGroupId() or valueOrDefault().
     */
    public function getModifierSetGroupId(): string { return $this->get('modifier_set_group_id'); }
    public function hasModifierSetGroupId(): bool { return $this->has('modifier_set_group_id'); }
    /** Display position of this group within the set; lower values appear first. Format: int32.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Overrides the group's text.required for this set. Omit it to use the group's value. Accepted only for text groups; for a list group, set min_selected: 1 to require a selection.
     * @return bool
     * @throws SdkError When required is omitted; use hasRequired() or valueOrDefault().
     */
    public function getRequired(): bool { return $this->get('required'); }
    public function hasRequired(): bool { return $this->has('required'); }
    /** Overrides the group's show_on_fulfillment for this set. Omit it to use the group's value.
     * @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** Overrides the group's show_on_receipt for this set. Omit it to use the group's value.
     * @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** Inline groups are owned by this modifier set. Existing groups are independent resources referenced by this set. Defines a modifier group owned by this modifier set. Value enum: "inline".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
