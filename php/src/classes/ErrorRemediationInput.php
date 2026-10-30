<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<NextActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string $next_steps
 * @property-read string $retry
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorRemediationInput extends Model {
    /** @param array{'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retry': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorRemediationInput')); }
    /** Suggested actions for resolving the error, including the target resource and any required input. [] (Value): {@see NextActionInput}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.
     * @return list<NextActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** What to change or check before attempting the operation again.
     * @return string
     * @throws SdkError When next_steps is omitted; use hasNextSteps() or valueOrDefault().
     */
    public function getNextSteps(): string { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Value enum: "same_request", "after_refresh", "none".
     * @return string
     * @throws SdkError When retry is omitted; use hasRetry() or valueOrDefault().
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
