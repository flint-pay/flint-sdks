<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_count
 * @property-read string $newest_active_code
 * @property-read int $total_count
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodesSummaryInput extends Model {
    /** @param array{'active_count': int, 'newest_active_code'?: string, 'total_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodesSummaryInput')); }
    /** @return int
     * @throws SdkError When active_count is omitted; use hasActiveCount() or valueOrDefault().
     */
    public function getActiveCount(): int { return $this->get('active_count'); }
    public function hasActiveCount(): bool { return $this->has('active_count'); }
    /** @return string
     * @throws SdkError When newest_active_code is omitted; use hasNewestActiveCode() or valueOrDefault().
     */
    public function getNewestActiveCode(): string { return $this->get('newest_active_code'); }
    public function hasNewestActiveCode(): bool { return $this->has('newest_active_code'); }
    /** @return int
     * @throws SdkError When total_count is omitted; use hasTotalCount() or valueOrDefault().
     */
    public function getTotalCount(): int { return $this->get('total_count'); }
    public function hasTotalCount(): bool { return $this->has('total_count'); }
}
