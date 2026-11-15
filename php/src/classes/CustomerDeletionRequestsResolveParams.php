<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $cancel_subscriptions
 * @property-read string $decision
 * @property-read string $decision_reason
 * @property-read bool $remove_payment_methods
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestsResolveParams extends Model {
    /** @param array{'cancel_subscriptions'?: bool, 'decision': string, 'decision_reason'?: string, 'remove_payment_methods'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestsResolveParams')); }
    /** When decision is approve, cancel every non-canceled subscription immediately before erasure. Defaults to false. Saved on first approval; omit on retries or send the original value.
     * @return bool
     * @throws SdkError When cancel_subscriptions is omitted; use hasCancelSubscriptions() or valueOrDefault().
     */
    public function getCancelSubscriptions(): bool { return $this->get('cancel_subscriptions'); }
    public function hasCancelSubscriptions(): bool { return $this->has('cancel_subscriptions'); }
    /** Whether to erase the customer's personal data or keep the customer as is. Value enum: "approve", "reject".
     * @return string
     * @throws SdkError When decision is omitted; use hasDecision() or valueOrDefault().
     */
    public function getDecision(): string { return $this->get('decision'); }
    public function hasDecision(): bool { return $this->has('decision'); }
    /** Optional plain-text explanation visible to the buyer. Only allowed when decision is reject. Trimmed before storage; must contain 1 to 500 characters after trimming. `null` is not allowed. Reasons are erased if the customer is later deleted. minLength: 1.
     * @return string
     * @throws SdkError When decision_reason is omitted; use hasDecisionReason() or valueOrDefault().
     */
    public function getDecisionReason(): string { return $this->get('decision_reason'); }
    public function hasDecisionReason(): bool { return $this->has('decision_reason'); }
    /** When decision is approve, archive active and pending saved payment methods before erasure. Defaults to false. Subscriptions are canceled first when both options are selected. Saved on first approval; omit on retries or send the original value.
     * @return bool
     * @throws SdkError When remove_payment_methods is omitted; use hasRemovePaymentMethods() or valueOrDefault().
     */
    public function getRemovePaymentMethods(): bool { return $this->get('remove_payment_methods'); }
    public function hasRemovePaymentMethods(): bool { return $this->has('remove_payment_methods'); }
}
