<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsConfirmParams extends Model {
    /** @param array{'credential_type': string, 'expected_version'?: int, 'payment_source_token': string, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string}|object|array{'credential_type': string, 'expected_version'?: int, 'payment_method_id': string, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'stripe': array{'confirmation_token': string}|object, 'Flint-Buyer-Device'?: string}|object|array{'credential_type': string, 'expected_version'?: int, 'save_payment_method'?: bool, 'Flint-Buyer-Device'?: string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsConfirmParams')); }
    /** An optional stable random device identifier, independent of the payment intent. Keep it for subsequent payments from the same device; it grants no access. pattern: ^[a-f0-9]{32}$.
     * @return string
     * @throws SdkError When Flint-Buyer-Device is omitted; use hasFlintBuyerDevice() or valueOrDefault().
     */
    public function getFlintBuyerDevice(): string { return $this->get('Flint-Buyer-Device'); }
    public function hasFlintBuyerDevice(): bool { return $this->has('Flint-Buyer-Device'); }
}
