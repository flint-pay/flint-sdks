<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $purpose
 * @property-read string|null $return_url
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class AccessLink extends Model {
    /** @param array{'expires_at': string, 'purpose': string, 'return_url': string|null, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AccessLink')); }
    /** When the link stops opening what its purpose describes. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** What the link opens and how long it works. New purposes may be added; treat one you don't recognize as opening its resource. Value enum: "order_view", "subscription_view", "subscription_manage", "return_view", "customer_account", "merchant_onboarding".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** The destination supplied when creating a customer, subscription, or onboarding access link. Null when omitted, always null for order and Return links, and always set for onboarding links.
     * @return string|null
     */
    public function getReturnUrl(): string|null { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** The link to send the person to. It carries a bearer credential, so anyone with it can open what its purpose describes until expires_at or until it reaches its open limit. Customer account links use the merchant's customer account host; onboarding links use Flint's dashboard host and carry the credential in the URL fragment. Format: uri.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
