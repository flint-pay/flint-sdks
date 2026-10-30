<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_deletion_request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetDeletionRequestInput extends Model {
    /** @param array{'customer_deletion_request_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetDeletionRequestInput')); }
    /** Flint customer deletion request ID. Example: "cdel_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_deletion_request_id is omitted; use hasCustomerDeletionRequestId() or valueOrDefault().
     */
    public function getCustomerDeletionRequestId(): string { return $this->get('customer_deletion_request_id'); }
    public function hasCustomerDeletionRequestId(): bool { return $this->has('customer_deletion_request_id'); }
}
