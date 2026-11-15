<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read array{'payment_method': string}|object $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialStripePaymentMethodInput extends Model {
    /** @param array{'credential_type': string, 'stripe': array{'payment_method': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialStripePaymentMethodInput')); }
    /** Selects the credential supplied for this payment. Value enum: "stripe_payment_method".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Stripe credential collected for this payment. payment_method (Required): string. A Stripe PaymentMethod your app created with createPaymentMethod, or a Stripe test payment method such as pm_card_visa in a sandbox. It isn't a Flint saved payment method; send those as payment_method. minLength: 1.
     * @return array{'payment_method': string}|object
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): array|object { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
