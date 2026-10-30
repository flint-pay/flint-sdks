<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $cancel_url
 * @property-read ?string $expired_url
 * @property-read ?string $success_url
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutRedirects extends Model {
    /** @param array{'cancel_url'?: string, 'expired_url'?: string, 'success_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutRedirects')); }
    /** Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return ?string
     */
    public function getCancelUrl(): ?string { return $this->get('cancel_url'); }
    public function hasCancelUrl(): bool { return $this->has('cancel_url'); }
    /** Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return ?string
     */
    public function getExpiredUrl(): ?string { return $this->get('expired_url'); }
    public function hasExpiredUrl(): bool { return $this->has('expired_url'); }
    /** Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Format: uri. maxLength: 2048.
     * @return ?string
     */
    public function getSuccessUrl(): ?string { return $this->get('success_url'); }
    public function hasSuccessUrl(): bool { return $this->has('success_url'); }
}
