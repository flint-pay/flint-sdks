<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object $stripe
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionClientSessionInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'stripe': array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionClientSessionInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object
     * @throws SdkError When stripe is omitted; use hasStripe() or valueOrDefault().
     */
    public function getStripe(): array|object { return $this->get('stripe'); }
    public function hasStripe(): bool { return $this->has('stripe'); }
}
