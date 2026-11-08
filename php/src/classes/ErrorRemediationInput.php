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
    /** Suggested actions for resolving the error, including the target resource and any required input. [] (Value): {@see NextActionInput}. A follow-up action. When target_resource is present, send its resource_id in the target request field named {resource_type}_id.
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
    /** Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none".
     * @return string
     * @throws SdkError When retry is omitted; use hasRetry() or valueOrDefault().
     */
    public function getRetry(): string { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
