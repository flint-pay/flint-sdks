<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_type
 * @property-read mixed $client_action
 * @property-read string|null $expires_at
 * @property-read string|null $pending_action_id
 * @property-read PendingPaymentActionSubjectPreviousAttributes|null $subject
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentActionPreviousAttributes extends Model {
    /** @param array{'action_type'?: mixed, 'client_action'?: mixed, 'expires_at'?: mixed, 'pending_action_id'?: mixed, 'subject'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionPreviousAttributes')); }
    /** Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Value enum: "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[1] (Value): string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Value enum: "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getActionType(): string|null { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. anyOf[1] (Value): {@see PaymentClientActionPreviousAttributes}. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClientAction(): mixed { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. anyOf[1] (Value): string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. anyOf[1] (Value): string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPendingActionId(): string|null { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. anyOf[1] (Value): {@see PendingPaymentActionSubjectPreviousAttributes}. anyOf[2] (Value): null.
     * @return PendingPaymentActionSubjectPreviousAttributes|null
     */
    public function getSubject(): PendingPaymentActionSubjectPreviousAttributes|null { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
