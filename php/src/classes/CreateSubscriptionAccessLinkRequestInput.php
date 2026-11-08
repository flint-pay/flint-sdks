<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $purpose
 * @property-read string $return_url
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionAccessLinkRequestInput extends Model {
    /** @param array{'purpose'?: string, 'return_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionAccessLinkRequestInput')); }
    /** subscription_view opens the subscription read-only. subscription_manage also lets the buyer cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5 opens. Default: "subscription_view". Value enum: "subscription_view", "subscription_manage".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Where the buyer can return to on your site. Kept for the browser session this link starts, until sign-out or session end. Absolute HTTPS URL without credentials; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed. Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
}
