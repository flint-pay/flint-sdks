<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $group
 * @property-read int $priority
 * Presence-aware response; omitted optional fields return null. */
final class PromotionExclusivity extends Model {
    /** @param array{'group': string, 'priority': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionExclusivity')); }
    /** Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1. maxLength: 100.
     * @return string
     */
    public function getGroup(): string { return $this->get('group'); }
    public function hasGroup(): bool { return $this->has('group'); }
    /** Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default: 0.
     * @return int
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
}
