<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $blocks_completion
 * @property-read string $code
 * @property-read BuyerErrorRemediationInput|array<array-key, mixed>|\stdClass $remediation
 * @property-read string $severity
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCheckoutProblemResourceInput extends Model {
    /** @param array{'blocks_completion': bool, 'code': string, 'remediation'?: BuyerErrorRemediationInput|array<array-key, mixed>|\stdClass, 'severity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCheckoutProblemResourceInput')); }
    /** blocks_completion
     * @return bool
     * @throws SdkError When blocks_completion is omitted; use hasBlocksCompletion() or valueOrDefault().
     */
    public function getBlocksCompletion(): bool { return $this->get('blocks_completion'); }
    public function hasBlocksCompletion(): bool { return $this->has('blocks_completion'); }
    /** Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps.
     * @return BuyerErrorRemediationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When remediation is omitted; use hasRemediation() or valueOrDefault().
     */
    public function getRemediation(): mixed { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Value enum: "error".
     * @return string
     * @throws SdkError When severity is omitted; use hasSeverity() or valueOrDefault().
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
