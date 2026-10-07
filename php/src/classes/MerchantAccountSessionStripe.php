<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MerchantAccountSessionStripeAccountSession $account_session
 * @property-read list<MerchantAccountSessionStripeComponent> $components
 * @property-read string $publishable_key
 * Presence-aware response; omitted fields throw when accessed. */
final class MerchantAccountSessionStripe extends Model {
    /** @param array{'account_session': mixed, 'components': list<mixed>, 'publishable_key': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantAccountSessionStripe')); }
    /** @return MerchantAccountSessionStripeAccountSession
     * @throws SdkError When account_session is omitted; use hasAccountSession() or valueOrDefault().
     */
    public function getAccountSession(): MerchantAccountSessionStripeAccountSession { return $this->get('account_session'); }
    public function hasAccountSession(): bool { return $this->has('account_session'); }
    /** @return list<MerchantAccountSessionStripeComponent>
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
