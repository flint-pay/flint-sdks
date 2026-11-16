<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<NextActionPreviousAttributes>|null $next_actions
 * @property-read string|null $next_steps
 * @property-read string|null $retry
 * Presence-aware response; omitted optional fields return null. */
final class ErrorRemediationPreviousAttributes extends Model {
    /** @param array{'next_actions'?: mixed, 'next_steps'?: mixed, 'retry'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorRemediationPreviousAttributes')); }
    /** Suggested actions for resolving the error, including the target resource and any required input. anyOf[1] (Value): Array of {@see NextActionPreviousAttributes}. Suggested actions for resolving the error, including the target resource and any required input. anyOf[1][] (Value): {@see NextActionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<NextActionPreviousAttributes>|null
     */
    public function getNextActions(): array|null { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** What to change or check before attempting the operation again. anyOf[1] (Value): string. What to change or check before attempting the operation again. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextSteps(): string|null { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none". anyOf[1] (Value): string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRetry(): string|null { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
