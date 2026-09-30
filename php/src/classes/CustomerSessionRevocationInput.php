<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_session_id
 * @property-read bool $revoked
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionRevocationInput extends Model {
    /** @param array{'customer_session_id': string, 'revoked': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionRevocationInput')); }
    /** @return string
     * @throws SdkError When customer_session_id is omitted; use hasCustomerSessionId() or valueOrDefault().
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
    /** @return bool
     * @throws SdkError When revoked is omitted; use hasRevoked() or valueOrDefault().
     */
    public function getRevoked(): bool { return $this->get('revoked'); }
    public function hasRevoked(): bool { return $this->has('revoked'); }
}
