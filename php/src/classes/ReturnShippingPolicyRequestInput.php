<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payer
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnShippingPolicyRequestInput extends Model {
    /** @param array{'payer': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShippingPolicyRequestInput')); }
    /** Who pays for shipping the goods back. This states your policy and charges nothing. Value enum: "merchant", "buyer".
     * @return string
     * @throws SdkError When payer is omitted; use hasPayer() or valueOrDefault().
     */
    public function getPayer(): string { return $this->get('payer'); }
    public function hasPayer(): bool { return $this->has('payer'); }
}
