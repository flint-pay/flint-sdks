<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $group
 * @property-read int $priority
 * @property-read string $selection
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionExclusivityInput extends Model {
    /** @param array{'group': string, 'priority'?: int, 'selection': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionExclusivityInput')); }
    /** @return string
     * @throws SdkError When group is omitted; use hasGroup() or valueOrDefault().
     */
    public function getGroup(): string { return $this->get('group'); }
    public function hasGroup(): bool { return $this->has('group'); }
    /** @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
    /** @return string
     * @throws SdkError When selection is omitted; use hasSelection() or valueOrDefault().
     */
    public function getSelection(): string { return $this->get('selection'); }
    public function hasSelection(): bool { return $this->has('selection'); }
}
