<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $blocks_completion
 * @property-read string|null $code
 * @property-read ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $remediation
 * @property-read string|null $severity
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutProblemResourcePreviousAttributesInput extends Model {
    /** @param array{'blocks_completion'?: bool|null, 'code'?: string|null, 'remediation'?: ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'severity'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutProblemResourcePreviousAttributesInput')); }
    /** Whether the checkout cannot complete until the problem is resolved. anyOf[1] (Value): boolean. Whether the checkout cannot complete until the problem is resolved. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When blocks_completion is omitted; use hasBlocksCompletion() or valueOrDefault().
     */
    public function getBlocksCompletion(): mixed { return $this->get('blocks_completion'); }
    public function hasBlocksCompletion(): bool { return $this->has('blocks_completion'); }
    /** Which condition affects the checkout. Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress", "processor_payments_paused". anyOf[1] (Value): string. Which condition affects the checkout. Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress", "processor_payments_paused". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** What the caller can do about the problem, and whether retrying the same request can help. anyOf[1] (Value): {@see ErrorRemediationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ErrorRemediationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** How serious the problem is. Value enum: "error". anyOf[1] (Value): string. How serious the problem is. Value enum: "error". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When severity is omitted; use hasSeverity() or valueOrDefault().
     */
    public function getSeverity(): mixed { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
