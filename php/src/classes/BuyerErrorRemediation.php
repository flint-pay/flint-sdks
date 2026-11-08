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
    /** Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none".
     * @return string
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
