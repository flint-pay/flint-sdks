<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active_count
 * @property-read string|null $newest_active_code
 * @property-read int|null $total_count
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCodesSummaryPreviousAttributes extends Model {
    /** @param array{'active_count'?: mixed, 'newest_active_code'?: mixed, 'total_count'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodesSummaryPreviousAttributes')); }
    /** Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. anyOf[1] (Value): integer. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getActiveCount(): int|null { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** Most recently created redeemable code. Omitted when active_count is zero. anyOf[1] (Value): string. Most recently created redeemable code. Omitted when active_count is zero. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNewestActiveCode(): string|null { return $this->get('newest_active_code'); }
    public function hasNewestActiveCode(): bool { return $this->has('newest_active_code'); }
    /** Number of codes on the promotion, excluding archived codes. anyOf[1] (Value): integer. Number of codes on the promotion, excluding archived codes. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTotalCount(): int|null { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
}
