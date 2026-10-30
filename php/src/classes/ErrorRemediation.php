<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<NextAction> $next_actions
 * @property-read ?string $next_steps
 * @property-read string $retry
 * Presence-aware response; omitted optional fields return null. */
final class ErrorRemediation extends Model {
    /** @param array{'next_actions'?: list<mixed>, 'next_steps'?: string, 'retry': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorRemediation')); }
    /** Suggested actions for resolving the error, including the target resource and any required input. [] (Value): {@see NextAction}. A suggested next step for resolving an error, warning, or blocked state, such as the API operation to call or the scope it needs.
     * @return ?list<NextAction>
     */
    public function getNextActions(): ?array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** What to change or check before attempting the operation again.
     * @return ?string
     */
    public function getNextSteps(): ?string { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Value enum: "same_request", "after_refresh", "none".
     * @return string
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
