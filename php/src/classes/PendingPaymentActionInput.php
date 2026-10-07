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
    /** @return string
     * @throws SdkError When action_type is omitted; use hasActionType() or valueOrDefault().
     */
    public function getActionType(): string { return $this->get('action_type'); }
    public function hasActionType(): bool { return $this->has('action_type'); }
    /** @return PaymentClientActionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When client_action is omitted; use hasClientAction() or valueOrDefault().
     */
    public function getClientAction(): mixed { return $this->get('client_action'); }
    public function hasClientAction(): bool { return $this->has('client_action'); }
    /** @return string
     * @throws SdkError When pending_action_id is omitted; use hasPendingActionId() or valueOrDefault().
     */
    public function getPendingActionId(): string { return $this->get('pending_action_id'); }
    public function hasPendingActionId(): bool { return $this->has('pending_action_id'); }
    /** @return PendingPaymentActionSubjectInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subject is omitted; use hasSubject() or valueOrDefault().
     */
    public function getSubject(): mixed { return $this->get('subject'); }
    public function hasSubject(): bool { return $this->has('subject'); }
}
