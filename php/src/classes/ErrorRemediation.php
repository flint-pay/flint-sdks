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
    /** Suggested actions for resolving the error, including the target resource and any required input. [] (Value): {@see NextAction}. A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.
     * @return ?list<NextAction>
     */
    public function getNextActions(): ?array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
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
