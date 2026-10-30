<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $group
 * @property-read int $priority
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionExclusivityInput extends Model {
    /** @param array{'group': string, 'priority': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionExclusivityInput')); }
    /** Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When group is omitted; use hasGroup() or valueOrDefault().
     */
    public function getGroup(): string { return $this->get('group'); }
    public function hasGroup(): bool { return $this->has('group'); }
    /** Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default: 0.
     * @return int
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): int { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
}
