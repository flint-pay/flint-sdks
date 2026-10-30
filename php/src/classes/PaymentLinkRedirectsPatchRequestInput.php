<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $cancel_url
 * @property-read string|null $expired_url
 * @property-read string|null $success_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkRedirectsPatchRequestInput extends Model {
    /** @param array{'cancel_url'?: string|null, 'expired_url'?: string|null, 'success_url'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkRedirectsPatchRequestInput')); }
    /** Where the buyer goes when they leave checkout without paying. The session stays open until it expires. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When cancel_url is omitted; use hasCancelUrl() or valueOrDefault().
     */
    public function getCancelUrl(): string|null { return $this->get('cancel_url'); }
    public function hasCancelUrl(): bool { return $this->has('cancel_url'); }
    /** Where Flint sends a buyer who opens the session after it expires. Without it, the buyer sees Flint's expired-checkout page. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When expired_url is omitted; use hasExpiredUrl() or valueOrDefault().
     */
    public function getExpiredUrl(): string|null { return $this->get('expired_url'); }
    public function hasExpiredUrl(): bool { return $this->has('expired_url'); }
    /** Where the buyer goes after paying. Flint adds checkout_session_id and order_id query parameters, replacing any with those names. The redirect doesn't prove payment: confirm with the order.paid webhook or by reading the session. Absolute HTTPS URL; test mode also accepts HTTP loopback URLs. Up to 2,048 characters. Send null to clear it. Format: uri. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When success_url is omitted; use hasSuccessUrl() or valueOrDefault().
     */
    public function getSuccessUrl(): string|null { return $this->get('success_url'); }
    public function hasSuccessUrl(): bool { return $this->has('success_url'); }
}
