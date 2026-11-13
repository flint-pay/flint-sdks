<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $evaluated_at
 * @property-read string $tax_calculation_evaluation_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxCallbackEvaluation extends Model {
    /** @param array{'evaluated_at': string, 'tax_calculation_evaluation_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCallbackEvaluation')); }
    /** When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: date-time.
     * @return string
     */
    public function getEvaluatedAt(): string { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID.
     * @return string
     */
    public function getTaxCalculationEvaluationId(): string { return $this->get('tax_calculation_evaluation_id'); }
    public function hasTaxCalculationEvaluationId(): bool { return $this->has('tax_calculation_evaluation_id'); }
}
