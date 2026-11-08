<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'customer_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerDeletionRequestsCreateInput extends Model {
    /** @param array{'body': array{'customer_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerDeletionRequestsCreateInput')); }
    /** The request body for: Request customer account deletion. Example: {"customer_id":"cus_01KEZF7C003ACYXT6Q5EQZ78EE"}.
     * @return array{'customer_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
