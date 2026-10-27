<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetSubscriptionInput extends Model {
    /** @param array{'subscription_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetSubscriptionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
