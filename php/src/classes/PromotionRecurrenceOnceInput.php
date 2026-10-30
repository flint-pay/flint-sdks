<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $period_count
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRecurrenceOnceInput extends Model {
    /** @param array{'period_count'?: int, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRecurrenceOnceInput')); }
    /** Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     * @return int
     * @throws SdkError When period_count is omitted; use hasPeriodCount() or valueOrDefault().
     */
    public function getPeriodCount(): int { return $this->get('period_count'); }
    public function hasPeriodCount(): bool { return $this->has('period_count'); }
    /** Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to the first charged subscription payment. Value enum: "once".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
