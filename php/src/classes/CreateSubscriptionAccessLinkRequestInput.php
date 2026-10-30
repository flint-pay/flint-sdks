<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $purpose
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionAccessLinkRequestInput extends Model {
    /** @param array{'purpose'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionAccessLinkRequestInput')); }
    /** subscription_view opens the subscription read-only. subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5 opens. Default: "subscription_view". Value enum: "subscription_view", "subscription_manage".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
}
