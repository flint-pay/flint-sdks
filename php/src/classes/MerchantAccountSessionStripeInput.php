<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass $account_session
 * @property-read list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass> $components
 * @property-read string $publishable_key
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantAccountSessionStripeInput extends Model {
    /** @param array{'account_session': MerchantAccountSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass, 'components': list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripeInput')); }
    /** Shape $ (Value): {@see MerchantAccountSessionStripeAccountSessionInput}. Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret.
     * @return MerchantAccountSessionStripeAccountSessionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When account_session is omitted; use hasAccountSession() or valueOrDefault().
     */
    public function getAccountSession(): mixed { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** Shape $ (Value): Array of {@see MerchantAccountSessionStripeComponentInput}. Authorized Stripe component names and collection options to apply when mounting each component. Shape $[] (Value): {@see MerchantAccountSessionStripeComponentInput}. One embedded component a merchant account session authorizes, with the collection options to apply to it.
     * @return list<MerchantAccountSessionStripeComponentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When components is omitted; use hasComponents() or valueOrDefault().
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string. Stripe publishable key to pass as publishableKey to loadConnectAndInitialize.
     * @return string
     * @throws SdkError When publishable_key is omitted; use hasPublishableKey() or valueOrDefault().
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
