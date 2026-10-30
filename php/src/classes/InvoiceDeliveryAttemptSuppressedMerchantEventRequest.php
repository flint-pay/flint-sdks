<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $id
 * @property-read ?string $idempotency_key
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceDeliveryAttemptSuppressedMerchantEventRequest extends Model {
    /** @param object{'id': string, 'idempotency_key'?: string} $values */
    public function __construct(array|object $values, array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceDeliveryAttemptSuppressedMerchantEventRequest')); }
    /** id
     * @return string
     */
    public function getId(): string { return $this->get('id'); }
    public function hasId(): bool { return $this->has('id'); }
    /** The Idempotency-Key the originating request sent. Absent when it sent none.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
}
