<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $evaluated_at
 * @property-read string $tax_calculation_evaluation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxCallbackEvaluationInput extends Model {
    /** @param array{'evaluated_at': string|\DateTimeInterface, 'tax_calculation_evaluation_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxCallbackEvaluationInput')); }
    /** When Flint saved your callback's answer for the order's current inputs. A change that recalculates tax with identical inputs after the 15-minute cache updates it; a payment that confirms an unchanged answer doesn't. Payment calls your callback again when it is more than 24 hours old. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When evaluated_at is omitted; use hasEvaluatedAt() or valueOrDefault().
     */
    public function getEvaluatedAt(): string|\DateTimeInterface { return $this->get('evaluated_at'); }
    public function hasEvaluatedAt(): bool { return $this->has('evaluated_at'); }
    /** The evaluation ID (`tce_...`) Flint sent your callback as `tax_calculation_evaluation_id` and `webhook-id`. Identical inputs keep the same ID. Example: "tce_01KEZF7C00Z61NNPEAF0CNSXP4".
     * @return string
     * @throws SdkError When tax_calculation_evaluation_id is omitted; use hasTaxCalculationEvaluationId() or valueOrDefault().
     */
    public function getTaxCalculationEvaluationId(): string { return $this->get('tax_calculation_evaluation_id'); }
    public function hasTaxCalculationEvaluationId(): bool { return $this->has('tax_calculation_evaluation_id'); }
}
