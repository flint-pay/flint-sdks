<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $blocks_completion
 * @property-read string $code
 * @property-read ?BuyerErrorRemediation $remediation
 * @property-read string $severity
 * Presence-aware response; omitted optional fields return null. */
final class BuyerCheckoutProblemResource extends Model {
    /** @param array{'blocks_completion': bool, 'code': string, 'remediation'?: mixed, 'severity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCheckoutProblemResource')); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getBlocksCompletion(): bool { return $this->get('blocks_completion'); }
    public function hasBlocksCompletion(): bool { return $this->has('blocks_completion'); }
    /** Shape $ (Value): string.  Value enum: "delivery_selection_stale", "delivery_selection_invalid", "delivery_unreadable", "payment_in_progress".
     * @return string
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): {@see BuyerErrorRemediation}. Guidance for recovering from a payment error: whether and how to retry (`retry`), and optional next steps.
     * @return ?BuyerErrorRemediation
     */
    public function getRemediation(): ?BuyerErrorRemediation { return $this->get('remediation'); }
    public function hasRemediation(): bool { return $this->has('remediation'); }
    /** Shape $ (Value): string.  Value enum: "error".
     * @return string
     */
    public function getSeverity(): string { return $this->get('severity'); }
    public function hasSeverity(): bool { return $this->has('severity'); }
}
