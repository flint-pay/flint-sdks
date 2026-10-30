<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'customer_id': string, 'expires_in_seconds'?: int, 'refresh_expires_in_seconds'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerSessionsCreateInput extends Model {
    /** @param array{'body': array{'customer_id': string, 'expires_in_seconds'?: int, 'refresh_expires_in_seconds'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerSessionsCreateInput')); }
    /** The request body for: Create a customer session.
     * @return array{'customer_id': string, 'expires_in_seconds'?: int, 'refresh_expires_in_seconds'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
