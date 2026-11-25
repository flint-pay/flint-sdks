<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $checkout_session_id
 * @property-read string $expires_at
 * @property-read string $order_id
 * @property-read string $shop_id
 * @property-read string $status
 * @property-read string $type
 * @property-read string $url
 * Presence-aware response; omitted optional fields return null. */
final class ResolvedShopCheckout extends Model {
    /** @param array{'checkout_session_id': string, 'expires_at': string, 'order_id': string, 'shop_id': string, 'status': string, 'type': string, 'url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvedShopCheckout')); }
    /** Checkout session ID.
     * @return string
     */
    public function getCheckoutSessionId(): string { return $this->get('checkout_session_id'); }
    public function hasCheckoutSessionId(): bool { return $this->has('checkout_session_id'); }
    /** Session expiry. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the order created from the cart.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the shop.
     * @return string
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Checkout session status. Resolve succeeds only while the session is open. Value enum: "open", "paid", "partially_paid", "expired", "closed", "invalidated".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** How checkout started. Value enum: "order", "quick_pay", "subscription_plan", "invoice", "payment_link", "shop".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Hosted checkout launch URL containing a private token. Format: uri.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
