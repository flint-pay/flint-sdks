<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $missing_or_invalid_fields
 * @property-read list<NextActionInput|array<array-key, mixed>|\stdClass> $next_actions
 * @property-read string $next_steps
 * @property-read bool $retryable
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorRemediationInput extends Model {
    /** @param array{'missing_or_invalid_fields'?: list<string>, 'next_actions'?: list<NextActionInput|array<array-key, mixed>|\stdClass>, 'next_steps'?: string, 'retryable'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorRemediationInput')); }
    /** @return list<string>
     * @throws SdkError When missing_or_invalid_fields is omitted; use hasMissingOrInvalidFields() or valueOrDefault().
     */
    public function getMissingOrInvalidFields(): array { return $this->get('missing_or_invalid_fields'); }
    public function hasMissingOrInvalidFields(): bool { return $this->has('missing_or_invalid_fields'); }
    /** @return list<NextActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string
     * @throws SdkError When next_steps is omitted; use hasNextSteps() or valueOrDefault().
     */
    public function getNextSteps(): string { return $this->get('next_steps'); }
    public function hasNextSteps(): bool { return $this->has('next_steps'); }
    /** @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
}
