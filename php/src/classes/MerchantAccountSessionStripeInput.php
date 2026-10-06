<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'client_secret': string, 'stripe_js_call': string, ...}|object $account_session
 * @property-read list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $publishable_key
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeInput extends Model {
    /** @param array{'account_session': array{'client_secret': string, 'stripe_js_call': string, ...}|object, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeInput')); }
    /** @return array{'client_secret': string, 'stripe_js_call': string, ...}|object
     * @throws SdkError When account_session is omitted; use hasAccountSession() or valueOrDefault().
     */
    public function getAccountSession(): array|object { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** @return list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
