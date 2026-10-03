<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardNotificationDeliveryAttempt> $attempts
 * @property-read bool $has_more_attempts
 * @property-read bool $has_more_provider_outcomes
 * @property-read list<GiftCardNotificationProviderOutcome> $provider_outcomes
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardNotificationDelivery extends Model {
    /** @param array{'attempts': list<mixed>, 'has_more_attempts': bool, 'has_more_provider_outcomes': bool, 'provider_outcomes': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDelivery')); }
    /** @return list<GiftCardNotificationDeliveryAttempt>
     * @throws SdkError When attempts is omitted; use hasAttempts() or valueOrDefault().
     */
    public function getAttempts(): array { return $this->get('attempts'); }
    public function hasAttempts(): bool { return $this->has('attempts'); }
    /** @return bool
     * @throws SdkError When has_more_attempts is omitted; use hasHasMoreAttempts() or valueOrDefault().
     */
    public function getHasMoreAttempts(): bool { return $this->get('has_more_attempts'); }
    public function hasHasMoreAttempts(): bool { return $this->has('has_more_attempts'); }
    /** @return bool
     * @throws SdkError When has_more_provider_outcomes is omitted; use hasHasMoreProviderOutcomes() or valueOrDefault().
     */
    public function getHasMoreProviderOutcomes(): bool { return $this->get('has_more_provider_outcomes'); }
    public function hasHasMoreProviderOutcomes(): bool { return $this->has('has_more_provider_outcomes'); }
    /** @return list<GiftCardNotificationProviderOutcome>
     * @throws SdkError When provider_outcomes is omitted; use hasProviderOutcomes() or valueOrDefault().
     */
    public function getProviderOutcomes(): array { return $this->get('provider_outcomes'); }
    public function hasProviderOutcomes(): bool { return $this->has('provider_outcomes'); }
}
