<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $key_id
 * @property-read string $secret
 * @property-read string $tax_calculation_callback_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxCalculationCallbackSigningKeyInput extends Model {
    /** @param array{'key_id': string, 'secret': string, 'tax_calculation_callback_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxCalculationCallbackSigningKeyInput')); }
    /** ID of the new HMAC signing key. Example: "cbkey_00112233445566778899aabb".
     * @return string
     * @throws SdkError When key_id is omitted; use hasKeyId() or valueOrDefault().
     */
    public function getKeyId(): string { return $this->get('key_id'); }
    public function hasKeyId(): bool { return $this->has('key_id'); }
    /** New HMAC shared secret. Returned only by this response.
     * @return string
     * @throws SdkError When secret is omitted; use hasSecret() or valueOrDefault().
     */
    public function getSecret(): string { return $this->get('secret'); }
    public function hasSecret(): bool { return $this->has('secret'); }
    /** ID of the callback whose secret was issued or rotated, beginning with `tcb_`. Example: "tcb_01KEZF7C00N7SER74Y2E6D1ZGT".
     * @return string
     * @throws SdkError When tax_calculation_callback_id is omitted; use hasTaxCalculationCallbackId() or valueOrDefault().
     */
    public function getTaxCalculationCallbackId(): string { return $this->get('tax_calculation_callback_id'); }
    public function hasTaxCalculationCallbackId(): bool { return $this->has('tax_calculation_callback_id'); }
}
