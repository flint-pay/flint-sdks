<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_revision_id
 * @property-read DeliveryRateEvaluationOutcomeInput|array<array-key, mixed>|\stdClass $outcome
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationMethodOutcomeInput extends Model {
    /** @param array{'delivery_method_revision_id': string, 'outcome': DeliveryRateEvaluationOutcomeInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationMethodOutcomeInput')); }
    /** The candidate's delivery_method_revision_id. Example: "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     * @return string
     * @throws SdkError When delivery_method_revision_id is omitted; use hasDeliveryMethodRevisionId() or valueOrDefault().
     */
    public function getDeliveryMethodRevisionId(): string { return $this->get('delivery_method_revision_id'); }
    public function hasDeliveryMethodRevisionId(): bool { return $this->has('delivery_method_revision_id'); }
    /** The method's outcome, selected by type. A method's outcome in a delivery rate evaluation response, selected by `type`: available with a price and delivery window, unavailable with a reason, or cannot calculate.
     * @return DeliveryRateEvaluationOutcomeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): mixed { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
}
