<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $group
 * @property-read int|null $priority
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionExclusivityPreviousAttributesInput extends Model {
    /** @param array{'group'?: string|null, 'priority'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionExclusivityPreviousAttributesInput')); }
    /** Exact, case-sensitive group name, 1 to 100 characters after trimming. anyOf[1] (Value): string. Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1. maxLength: 100. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When group is omitted; use hasGroup() or valueOrDefault().
     */
    public function getGroup(): mixed { return $this->get('group'); }
    public function hasGroup(): bool { return $this->has('group'); }
    /** Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. anyOf[1] (Value): integer. Higher priority wins. Equal priorities favor the larger standalone discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When priority is omitted; use hasPriority() or valueOrDefault().
     */
    public function getPriority(): mixed { return $this->get('priority'); }
    public function hasPriority(): bool { return $this->has('priority'); }
}
