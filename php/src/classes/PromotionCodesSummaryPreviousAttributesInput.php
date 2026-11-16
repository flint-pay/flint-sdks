<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $active_count
 * @property-read string|null $newest_active_code
 * @property-read int|null $total_count
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodesSummaryPreviousAttributesInput extends Model {
    /** @param array{'active_count'?: int|null, 'newest_active_code'?: string|null, 'total_count'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodesSummaryPreviousAttributesInput')); }
    /** Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. anyOf[1] (Value): integer. Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When active_count is omitted; use hasActiveCount() or valueOrDefault().
     */
    public function getActiveCount(): mixed { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** Most recently created redeemable code. Omitted when active_count is zero. anyOf[1] (Value): string. Most recently created redeemable code. Omitted when active_count is zero. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When newest_active_code is omitted; use hasNewestActiveCode() or valueOrDefault().
     */
    public function getNewestActiveCode(): mixed { return $this->get('newest_active_code'); }
    public function hasNewestActiveCode(): bool { return $this->has('newest_active_code'); }
    /** Number of codes on the promotion, excluding archived codes. anyOf[1] (Value): integer. Number of codes on the promotion, excluding archived codes. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When total_count is omitted; use hasTotalCount() or valueOrDefault().
     */
    public function getTotalCount(): mixed { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
}
