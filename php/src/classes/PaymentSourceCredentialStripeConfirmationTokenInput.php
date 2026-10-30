<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $credential_type
 * @property-read array{'confirmation_token': string}|object $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSourceCredentialStripeConfirmationTokenInput extends Model {
    /** @param array{'credential_type': string, 'stripe': array{'confirmation_token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSourceCredentialStripeConfirmationTokenInput')); }
    /** Value enum: "stripe_confirmation_token".
     * @return string
     * @throws SdkError When credential_type is omitted; use hasCredentialType() or valueOrDefault().
     */
    public function getCredentialType(): string { return $this->get('credential_type'); }
    public function hasCredentialType(): bool { return $this->has('credential_type'); }
    /** Stripe credential collected for this payment. confirmation_token (Required): string. Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength: 1.
     * @return array{'confirmation_token': string}|object
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): array|object { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
