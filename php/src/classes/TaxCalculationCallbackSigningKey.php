<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key_id
 * @property-read string $secret
 * @property-read string $tax_calculation_callback_id
 * Presence-aware response; omitted optional fields return null. */
final class TaxCalculationCallbackSigningKey extends Model {
    /** @param array{'key_id': string, 'secret': string, 'tax_calculation_callback_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackSigningKey')); }
    /** ID of the new HMAC signing key.
     * @return string
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** New HMAC shared secret. Returned only by this response.
     * @return string
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** ID of the callback whose secret was issued or rotated, beginning with `tcb_`.
     * @return string
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
}
