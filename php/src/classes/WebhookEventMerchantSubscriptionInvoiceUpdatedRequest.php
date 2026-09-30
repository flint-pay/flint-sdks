<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $id
 * @property-read string $idempotency_key
 * Presence-aware response; omitted fields throw when accessed. */
final class WebhookEventMerchantSubscriptionInvoiceUpdatedRequest extends Model {
    /** @param object{'id': string, 'idempotency_key': string} $values */
    public function __construct(array|object $values, array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventMerchantSubscriptionInvoiceUpdatedRequest')); }
    /** @return string
     * @throws SdkError When id is omitted; use hasId() or valueOrDefault().
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
}
