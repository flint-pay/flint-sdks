<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action_type
 * @property-read PaymentClientAction $client_action
 * @property-read string $pending_action_id
 * @property-read PendingPaymentActionSubject $subject
 * Presence-aware response; omitted fields throw when accessed. */
final class PendingPaymentAction extends Model {
    /** @param array{'action_type': string, 'client_action': object{'stripe': mixed}, 'pending_action_id': string, 'subject': object{'payment_intent'?: object{'payment_intent_id': string}, 'setup_payment_source'?: object{'payment_method_id': string}}, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PendingPaymentAction')); }
    /** @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** @return PaymentClientAction
     * @throws SdkError When client_action is omitted; use hasClientAction() or valueOrDefault().
     */
    public function getClientAction(): PaymentClientAction { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** @return string
     * @throws SdkError When pending_action_id is omitted; use hasPendingActionId() or valueOrDefault().
     */
    public function getPendingActionId(): string { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** @return PendingPaymentActionSubject
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): PendingPaymentActionSubject { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
