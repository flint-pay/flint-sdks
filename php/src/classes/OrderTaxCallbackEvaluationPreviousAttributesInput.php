<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $evaluated_at
 * @property-read string|null $tax_calculation_evaluation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxCallbackEvaluationPreviousAttributesInput extends Model {
    /** @param array{'evaluated_at'?: string|\DateTimeInterface|null, 'tax_calculation_evaluation_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCallbackEvaluationPreviousAttributesInput')); }
    /** When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. anyOf[1] (Value): string. When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): mixed { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. anyOf[1] (Value): string. The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: "tce_01KEZF7C00Z61NNPEAF0CNSXP4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tax_calculation_evaluation_id is omitted; use hasTaxCalculationEvaluationId() or valueOrDefault().
     */
    public function getTaxCalculationEvaluationId(): mixed { return $this->get('tax_calculation_evaluation_id'); }
    public function hasTaxCalculationEvaluationId(): bool { return $this->has('tax_calculation_evaluation_id'); }
}
