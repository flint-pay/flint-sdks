<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeAccountSession $account_session
 * @property-read list<MerchantAccountSessionStripeComponent> $components
 * @property-read string $publishable_key
 * Presence-aware response; omitted optional fields return null. */
final class MerchantAccountSessionStripe extends Model {
    /** @param array{'account_session': mixed, 'components': list<mixed>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripe')); }
    /** Shape $ (Value): {@see MerchantAccountSessionStripeAccountSession}. Account session authority for initializing Stripe Connect in the browser. The account session authority for initializing Stripe Connect in the browser, including the client secret.
     * @return MerchantAccountSessionStripeAccountSession
     */
    public function getAccountSession(): MerchantAccountSessionStripeAccountSession { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** Shape $ (Value): Array of {@see MerchantAccountSessionStripeComponent}. Authorized Stripe component names and collection options to apply when mounting each component. Shape $[] (Value): {@see MerchantAccountSessionStripeComponent}. One embedded component a merchant account session authorizes, with the collection options to apply to it.
     * @return list<MerchantAccountSessionStripeComponent>
     */
    public function getComponents(): array { return $this->get('components'); }
    public function hasComponents(): bool { return $this->has('components'); }
    /** Shape $ (Value): string. Stripe publishable key to pass as publishableKey to loadConnectAndInitialize.
     * @return string
     */
    public function getPublishableKey(): string { return $this->get('publishable_key'); }
    public function hasPublishableKey(): bool { return $this->has('publishable_key'); }
}
