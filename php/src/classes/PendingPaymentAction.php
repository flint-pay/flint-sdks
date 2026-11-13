<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read PendingPaymentActionClientActionUrl|PendingPaymentActionClientActionStripe|\stdClass $client_action
 * @property-read string $expires_at
 * @property-read string $pending_action_id
 * @property-read PendingPaymentActionSubject $subject
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentAction extends Model {
    /** @param array{'action_type': string, 'client_action': mixed, 'expires_at': string, 'pending_action_id': string, 'subject': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentAction')); }
    /** Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Value enum: "payment_authentication", "payment_method_authentication", "card_presentment".
     * @return string
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned.
     * @return PendingPaymentActionClientActionUrl|PendingPaymentActionClientActionStripe|\stdClass
     */
    public function getClientAction(): PendingPaymentActionClientActionUrl|PendingPaymentActionClientActionStripe|\stdClass { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt.
     * @return string
     */
    public function getPendingActionId(): string { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present.
     * @return PendingPaymentActionSubject
     */
    public function getSubject(): PendingPaymentActionSubject { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
