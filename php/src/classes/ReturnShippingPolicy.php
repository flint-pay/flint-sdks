<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payer
 * Presence-aware response; omitted optional fields return null. */
final class ReturnShippingPolicy extends Model {
    /** @param array{'payer': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnShippingPolicy')); }
    /** Who pays for shipping the goods back. This states your policy and charges nothing. Value enum: "merchant", "buyer".
     * @return string
     */
    public function getPayer(): string { return $this->get('payer'); }
    public function hasPayer(): bool { return $this->has('payer'); }
}
