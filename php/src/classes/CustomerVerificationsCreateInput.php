<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'channel'?: string, 'customer_id': string, 'purpose': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerVerificationsCreateInput extends Model {
    /** @param array{'body': array{'channel'?: string, 'customer_id': string, 'purpose': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerVerificationsCreateInput')); }
    /** The request body for: Create a customer email verification.
     * @return array{'channel'?: string, 'customer_id': string, 'purpose': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
