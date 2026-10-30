<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_session_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionsRevokeInput extends Model {
    /** @param array{'customer_session_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsRevokeInput')); }
    /** Flint customer session ID. Example: "cses_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_session_id is omitted; use hasCustomerSessionId() or valueOrDefault().
     */
    public function getCustomerSessionId(): string { return $this->get('customer_session_id'); }
    public function hasCustomerSessionId(): bool { return $this->has('customer_session_id'); }
}
