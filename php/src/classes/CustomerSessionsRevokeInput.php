<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_session_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionsRevokeInput extends Model {
    /** @param array{'customer_session_id': string, 'Idempotency-Key'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsRevokeInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_session_id is omitted; use hasCustomerSessionId() or valueOrDefault().
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
}
