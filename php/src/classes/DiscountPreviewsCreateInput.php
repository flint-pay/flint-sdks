<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'discount'?: mixed, 'order_id': string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewsCreateInput extends Model {
    /** @param array{'X-Request-Id'?: string, 'X-Checkout-Session-ID'?: string, 'X-Checkout-Session-Secret'?: string, 'Flint-Version'?: string, 'body': array{'discount'?: mixed, 'order_id': string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewsCreateInput')); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-ID is omitted; use hasXCheckoutSessionId() or valueOrDefault().
     */
    public function getXCheckoutSessionId(): string { return $this->get('X-Checkout-Session-ID'); }
    public function hasXCheckoutSessionId(): bool { return $this->has('X-Checkout-Session-ID'); }
    /** @return string
     * @throws SdkError When X-Checkout-Session-Secret is omitted; use hasXCheckoutSessionSecret() or valueOrDefault().
     */
    public function getXCheckoutSessionSecret(): string { return $this->get('X-Checkout-Session-Secret'); }
    public function hasXCheckoutSessionSecret(): bool { return $this->has('X-Checkout-Session-Secret'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'discount'?: mixed, 'order_id': string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
