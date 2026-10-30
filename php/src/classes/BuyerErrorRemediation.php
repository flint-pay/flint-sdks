<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $next_steps
 * @property-read string $retry
 * Presence-aware response; omitted optional fields return null. */
final class BuyerErrorRemediation extends Model {
    /** @param array{'next_steps'?: string, 'retry': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerErrorRemediation')); }
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
