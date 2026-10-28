<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read string $payment_method_id
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialPaymentMethodInput extends Model {
    /** @param array{'credential_type': string, 'payment_method_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialPaymentMethodInput')); }
    /** Shape $ (Value): string.  Value enum: "payment_method".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Shape $ (Value): string. Saved Flint payment method ID belonging to the customer making this payment. minLength: 1.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
}
