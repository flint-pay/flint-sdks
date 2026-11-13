<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_rate_evaluation_id
 * @property-read list<DeliveryRateEvaluationMethodOutcomeInput|array<array-key, mixed>|\stdClass> $method_results
 * @property-read int $ttl_seconds
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationResponseInput extends Model {
    /** @param array{'delivery_rate_evaluation_id': string, 'method_results': list<DeliveryRateEvaluationMethodOutcomeInput|array<array-key, mixed>|\stdClass>, 'ttl_seconds'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationResponseInput')); }
    /** The request's delivery_rate_evaluation_id. Example: "dreval_01KEZF7C00X0Q3Z075W9W90ZGC".
     * @return string
     * @throws SdkError When delivery_rate_evaluation_id is omitted; use hasDeliveryRateEvaluationId() or valueOrDefault().
     */
    public function getDeliveryRateEvaluationId(): string { return $this->get('delivery_rate_evaluation_id'); }
    public function hasDeliveryRateEvaluationId(): bool { return $this->has('delivery_rate_evaluation_id'); }
    /** One result per candidate. A candidate whose result is missing, duplicated, or invalid becomes cannot_calculate with callback_result_invalid; results for other method revisions are ignored. [] (Value): {@see DeliveryRateEvaluationMethodOutcomeInput}. The outcome for one candidate in a delivery rate evaluation response.
     * @return list<DeliveryRateEvaluationMethodOutcomeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When method_results is omitted; use hasMethodResults() or valueOrDefault().
     */
    public function getMethodResults(): array { return $this->get('method_results'); }
    public function hasMethodResults(): bool { return $this->has('method_results'); }
    /** How long Flint may reuse this response for the same checkout when no outcome is available, from 0 to 300 seconds. Defaults to 120. A response with a cannot_calculate outcome is reused for at most 30 seconds, and a response with an available outcome is never reused. Format: int64. minimum: 0. maximum: 300.
     * @return int
     * @throws SdkError When ttl_seconds is omitted; use hasTtlSeconds() or valueOrDefault().
     */
    public function getTtlSeconds(): int { return $this->get('ttl_seconds'); }
    public function hasTtlSeconds(): bool { return $this->has('ttl_seconds'); }
}
