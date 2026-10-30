<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'customer_id': string, 'type'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodsCreateInput extends Model {
    /** @param array{'body': array{'customer_id': string, 'type'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodsCreateInput')); }
    /** The request body for: Create a payment method. Example: {"customer_id":"cus_01KEZF7C003ACYXT6Q5EQZ78EE","type":"card"}.
     * @return array{'customer_id': string, 'type'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
