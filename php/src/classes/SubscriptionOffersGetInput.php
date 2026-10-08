<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_offer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionOffersGetInput extends Model {
    /** @param array{'subscription_offer_id': string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionOffersGetInput')); }
    /** @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
