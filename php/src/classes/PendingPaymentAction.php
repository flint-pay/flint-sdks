<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read PaymentClientAction $client_action
 * @property-read string $pending_action_id
 * @property-read PendingPaymentActionSubject $subject
 * Presence-aware response; omitted optional fields return null. */
final class PendingPaymentAction extends Model {
    /** @param array{'action_type': string, 'client_action': mixed, 'pending_action_id': string, 'subject': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentAction')); }
    /** Shape $ (Value): string. Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. Value enum: "payment_authentication", "payment_method_authentication".
     * @return string
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Shape $ (Value): {@see PaymentClientAction}. Direct browser authority required to finish this action before continuing through Flint. Unlike collection guidance, this payload includes a client secret. Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint.
     * @return PaymentClientAction
     */
    public function getClientAction(): PaymentClientAction { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** Shape $ (Value): string. Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt.
     * @return string
     */
    public function getPendingActionId(): string { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** Shape $ (Value): {@see PendingPaymentActionSubject}. The attempt subject that requires browser action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present.
     * @return PendingPaymentActionSubject
     */
    public function getSubject(): PendingPaymentActionSubject { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
