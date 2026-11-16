<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $action_type
 * @property-read PaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $client_action
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $pending_action_id
 * @property-read PendingPaymentActionSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionPreviousAttributesInput extends Model {
    /** @param array{'action_type'?: string|null, 'client_action'?: PaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'expires_at'?: string|\DateTimeInterface|null, 'pending_action_id'?: string|null, 'subject'?: PendingPaymentActionSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionPreviousAttributesInput')); }
    /** Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Value enum: "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[1] (Value): string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. card_presentment means present the card on the Tap to Pay reader in your app. Value enum: "payment_authentication", "payment_method_authentication", "card_presentment". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): mixed { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** How to finish this step before continuing through Flint. Flint's API returns a Stripe client secret only for client_action_type stripe. The url branch carries a bearer URL; Stripe's authentication page receives what it needs to run the challenge. anyOf[1] (Value): {@see PaymentClientActionPreviousAttributesInput}. How to finish a payment step. Flint's API returns a Stripe client secret only for client_action_type stripe. With url, Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. anyOf[2] (Value): null.
     * @return PaymentClientActionPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When client_action is omitted; use hasClientAction() or valueOrDefault().
     */
    public function getClientAction(): mixed { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. anyOf[1] (Value): string. When this step stops working. For a standalone payment intent, 12 hours after the step was created; for an order payment, when its attempt is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): mixed { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. anyOf[1] (Value): string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt. Example: "pendact_01KEZF7C00SVMRXWKVZX6R9822". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When pending_action_id is omitted; use hasPendingActionId() or valueOrDefault().
     */
    public function getPendingActionId(): mixed { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** The attempt subject that requires client action. Exactly one of payment_intent or setup_payment_source is present. anyOf[1] (Value): {@see PendingPaymentActionSubjectPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PendingPaymentActionSubjectPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
