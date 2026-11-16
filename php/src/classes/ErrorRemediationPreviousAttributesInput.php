<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<NextActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $next_actions
 * @property-read string|null $next_steps
 * @property-read string|null $retry
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorRemediationPreviousAttributesInput extends Model {
    /** @param array{'next_actions'?: list<NextActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'next_steps'?: string|null, 'retry'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorRemediationPreviousAttributesInput')); }
    /** Suggested actions for resolving the error, including the target resource and any required input. anyOf[1] (Value): Array of {@see NextActionPreviousAttributesInput}. Suggested actions for resolving the error, including the target resource and any required input. anyOf[1][] (Value): {@see NextActionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<NextActionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): mixed { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** What to change or check before attempting the operation again. anyOf[1] (Value): string. What to change or check before attempting the operation again. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When next_steps is omitted; use hasNextSteps() or valueOrDefault().
     */
    public function getNextSteps(): mixed { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none". anyOf[1] (Value): string. Whether sending this request again can succeed, and how. It depends only on code and details[0].reason; the errors reference lists the value for each. Value enum: "same_request", "after_refresh", "none". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When retry is omitted; use hasRetry() or valueOrDefault().
     */
    public function getRetry(): mixed { return $this->get('retry'); }
    public function hasRetry(): bool { return $this->has('retry'); }
}
