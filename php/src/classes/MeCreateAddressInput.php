<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateAddressInput extends Model {
    /** @param array{'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateAddressInput')); }
    /** The request body for: Create a customer address; Create an address for the current buyer. Example: {"address":{"city":"Austin","country":"US","line1":"12 Main St","postal_code":"78701","state":"TX"},"is_default_shipping":true,"label":"Home","recipient_name":"Alex Morgan"}.
     * @return array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
