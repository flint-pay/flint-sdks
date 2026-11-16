<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $evaluated_at
 * @property-read string|null $tax_calculation_evaluation_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxCallbackEvaluationPreviousAttributes extends Model {
    /** @param array{'evaluated_at'?: mixed, 'tax_calculation_evaluation_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCallbackEvaluationPreviousAttributes')); }
    /** When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. anyOf[1] (Value): string. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEvaluatedAt(): string|null { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. anyOf[1] (Value): string. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTaxCalculationEvaluationId(): string|null { return $this->get('tax_calculation_evaluation_id'); }
    public function hasTaxCalculationEvaluationId(): bool { return $this->has('tax_calculation_evaluation_id'); }
}
