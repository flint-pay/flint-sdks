<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $blocks_completion
 * @property-read string|null $code
 * @property-read ErrorRemediationPreviousAttributes|null $remediation
 * @property-read string|null $severity
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutProblemResourcePreviousAttributes extends Model {
    /** @param array{'blocks_completion'?: mixed, 'code'?: mixed, 'remediation'?: mixed, 'severity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutProblemResourcePreviousAttributes')); }
    /** Whether the checkout cannot complete until the problem is resolved. anyOf[1] (Value): boolean. Whether the checkout cannot complete until the problem is resolved. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getBlocksCompletion(): bool|null { return $this->get('blocks_completion'); }
    public function hasBlocksCompletion(): bool { return $this->has('blocks_completion'); }
    /** Which condition affects the checkout. Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress". anyOf[1] (Value): string. Which condition affects the checkout. Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** What the caller can do about the problem, and whether retrying the same request can help. anyOf[1] (Value): {@see ErrorRemediationPreviousAttributes}. anyOf[2] (Value): null.
     * @return ErrorRemediationPreviousAttributes|null
     */
    public function getRemediation(): ErrorRemediationPreviousAttributes|null { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** How serious the problem is. Value enum: "error". anyOf[1] (Value): string. How serious the problem is. Value enum: "error". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSeverity(): string|null { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
