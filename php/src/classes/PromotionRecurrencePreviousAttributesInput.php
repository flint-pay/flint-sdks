<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $period_count
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionRecurrencePreviousAttributesInput extends Model {
    /** @param PromotionRecurrenceOncePreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionRecurrenceRepeatingPreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionRecurrenceForeverPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRecurrencePreviousAttributesInput')); }
    /** Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1] (Value): integer. Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When period_count is omitted; use hasPeriodCount() or valueOrDefault().
     */
    public function getPeriodCount(): mixed { return $this->get('period_count'); }
    public function hasPeriodCount(): bool { return $this->has('period_count'); }
    /** Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Value enum: "once", "repeating", "forever". anyOf[1] (Value): string. Use once for the first charged payment, repeating for a fixed number of charged payments, or forever for every payment. period_count is required only for repeating. Value enum: "once", "repeating", "forever". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
