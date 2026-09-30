<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payer
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnShippingPolicyInput extends Model {
    /** @param array{'payer': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShippingPolicyInput')); }
    /** @return string
     * @throws SdkError When payer is omitted; use hasPayer() or valueOrDefault().
     */
    public function getPayer(): string { return $this->get('payer'); }
    public function hasPayer(): bool { return $this->has('payer'); }
}
