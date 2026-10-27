<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $next_steps
 * @property-read string $retry
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerErrorRemediationInput extends Model {
    /** @param array{'next_steps'?: string, 'retry': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerErrorRemediationInput')); }
    /** Shape $ (Value): string. What to change or check before attempting the operation again.
     * @return string
     * @throws SdkError When next_steps is omitted; use hasNextSteps() or valueOrDefault().
     */
    public function getNextSteps(): string { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** Shape $ (Value): string. How to recover: same_request resends the identical request with the same Idempotency-Key; after_refresh re-reads the resource and rebuilds the request with a new key; none requires correcting the request or following next_steps or next_actions. Value enum: "same_request", "after_refresh", "none".
     * @return string
     * @throws SdkError When retry is omitted; use hasRetry() or valueOrDefault().
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
