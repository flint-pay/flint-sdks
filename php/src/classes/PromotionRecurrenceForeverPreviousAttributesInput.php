<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $period_count
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRecurrenceForeverPreviousAttributesInput extends Model {
    /** @param array{'period_count'?: int|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRecurrenceForeverPreviousAttributesInput')); }
    /** Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1] (Value): integer. Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When period_count is omitted; use hasPeriodCount() or valueOrDefault().
     */
    public function getPeriodCount(): mixed { return $this->get('period_count'); }
    public function hasPeriodCount(): bool { return $this->has('period_count'); }
    /** Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Apply the promotion to every charged subscription payment. Value enum: "forever". anyOf[1] (Value): string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Value enum: "forever". anyOf[2] (Value): null. anyOf[1] (Value): any. Apply the promotion to every charged subscription payment. Value enum: "forever".
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
