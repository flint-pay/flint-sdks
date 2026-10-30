<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $blocks_completion
 * @property-read string $code
 * @property-read ?ErrorRemediation $remediation
 * @property-read string $severity
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutProblemResource extends Model {
    /** @param array{'blocks_completion': bool, 'code': string, 'remediation'?: mixed, 'severity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutProblemResource')); }
    /** blocks_completion
     * @return bool
     */
    public function getBlocksCompletion(): bool { return $this->get('blocks_completion'); }
    public function hasBlocksCompletion(): bool { return $this->has('blocks_completion'); }
    /** Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Recovery guidance for an error: whether and how to `retry`, plus next steps and suggested actions.
     * @return ?ErrorRemediation
     */
    public function getRemediation(): ?ErrorRemediation { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Value enum: "error".
     * @return string
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
