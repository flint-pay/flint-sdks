<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'domain_name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodDomainsCreateInput extends Model {
    /** @param array{'body': array{'domain_name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodDomainsCreateInput')); }
    /** The request body for: Register payment method domain.
     * @return array{'domain_name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
