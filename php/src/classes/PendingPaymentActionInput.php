<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read PaymentClientActionInput|array<array-key, mixed>|\stdClass $client_action
 * @property-read string $pending_action_id
 * @property-read PendingPaymentActionSubjectInput|array<array-key, mixed>|\stdClass $subject
 * Presence-aware input; omitted fields throw when accessed. */
final class PendingPaymentActionInput extends Model {
    /** @param array{'action_type': string, 'client_action': PaymentClientActionInput|array<array-key, mixed>|\stdClass, 'pending_action_id': string, 'subject': PendingPaymentActionSubjectInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentActionInput')); }
    /** Product-level action type. payment_authentication applies to a payment leg; payment_method_authentication applies to saving a future-billing payment method. Value enum: "payment_authentication", "payment_method_authentication".
     * @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** Direct browser authority required to finish this action before continuing through Flint. Unlike collection guidance, this payload includes a client secret. Typed provider-specific browser action payload. Execute the selected provider action before continuing the owning payment through Flint.
     * @return PaymentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_action is omitted; use hasClientAction() or valueOrDefault().
     */
    public function getClientAction(): mixed { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** Stable Flint action ID. Use this to deduplicate a repeated action projection while resuming an attempt.
     * @return string
     * @throws SdkError When pending_action_id is omitted; use hasPendingActionId() or valueOrDefault().
     */
    public function getPendingActionId(): string { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** The attempt subject that requires browser action. Exactly one of payment_intent or setup_payment_source is present. Typed subject for a pending order payment action. Exactly one subject is present.
     * @return PendingPaymentActionSubjectInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
