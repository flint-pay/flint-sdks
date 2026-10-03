<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_attempt_id
 * @property-read string $kind
 * @property-read string $occurred_at
 * @property-read string $received_at
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardNotificationProviderOutcome extends Model {
    /** @param array{'delivery_attempt_id': string, 'kind': string, 'occurred_at': string, 'received_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationProviderOutcome')); }
    /** @return string
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
}
