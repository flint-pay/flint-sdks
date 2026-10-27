<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $purpose
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class AccessLink extends Model {
    /** @param array{'expires_at': string, 'purpose': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AccessLink')); }
    /** Shape $ (Value): string. When the link stops opening the resource or signing the buyer in. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. What the link opens and how long it works. New purposes may be added; treat one you don't recognize as opening its resource. Value enum: "order_view", "subscription_view", "subscription_manage", "return_view", "customer_account".
     * @return string
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Shape $ (Value): string. The link to send the buyer. It carries a bearer credential, so anyone with it can open the resource or sign in as the customer, as its purpose describes, until expires_at or until it reaches its open limit. The link uses the merchant's customer account host. Format: uri.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
