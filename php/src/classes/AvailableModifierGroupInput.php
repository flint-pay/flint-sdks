<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $modifier_group_id
 * @property-read string $modifier_group_type
 * @property-read list<AvailableModifierInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read int $position
 * @property-read AvailableModifierSelectionInput|array<array-key, mixed>|\stdClass $selection
 * @property-read bool $show_on_fulfillment
 * @property-read bool $show_on_receipt
 * @property-read TextModifierConfigInput|array<array-key, mixed>|\stdClass $text
 * Presence-aware input; omitted fields throw when accessed. */
final class AvailableModifierGroupInput extends Model {
    /** @param array{'modifier_group_id': string, 'modifier_group_type': string, 'modifiers'?: list<AvailableModifierInput|array<array-key, mixed>|\stdClass>, 'name': string, 'position': int, 'selection'?: AvailableModifierSelectionInput|array<array-key, mixed>|\stdClass, 'show_on_fulfillment': bool, 'show_on_receipt': bool, 'text'?: TextModifierConfigInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AvailableModifierGroupInput')); }
    /** @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
    /** @return string
     * @throws SdkError When modifier_group_type is omitted; use hasModifierGroupType() or valueOrDefault().
     */
    public function getModifierGroupType(): string { return $this->get('modifier_group_type'); }
    public function hasModifierGroupType(): bool { return $this->has('modifier_group_type'); }
    /** @return list<AvailableModifierInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** @return AvailableModifierSelectionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): mixed { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
    /** @return bool
     * @throws SdkError When show_on_fulfillment is omitted; use hasShowOnFulfillment() or valueOrDefault().
     */
    public function getShowOnFulfillment(): bool { return $this->get('show_on_fulfillment'); }
    public function hasShowOnFulfillment(): bool { return $this->has('show_on_fulfillment'); }
    /** @return bool
     * @throws SdkError When show_on_receipt is omitted; use hasShowOnReceipt() or valueOrDefault().
     */
    public function getShowOnReceipt(): bool { return $this->get('show_on_receipt'); }
    public function hasShowOnReceipt(): bool { return $this->has('show_on_receipt'); }
    /** @return TextModifierConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When text is omitted; use hasText() or valueOrDefault().
     */
    public function getText(): mixed { return $this->get('text'); }
    public function hasText(): bool { return $this->has('text'); }
}
