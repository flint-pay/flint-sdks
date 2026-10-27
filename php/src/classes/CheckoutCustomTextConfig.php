<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $order_summary_message
 * @property-read ?string $shipping_address_label
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutCustomTextConfig extends Model {
    /** @param array{'order_summary_message'?: string, 'shipping_address_label'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomTextConfig')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderSummaryMessage(): ?string { return $this->get('order_summary_message'); }
    public function hasOrderSummaryMessage(): bool { return $this->has('order_summary_message'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getShippingAddressLabel(): ?string { return $this->get('shipping_address_label'); }
    public function hasShippingAddressLabel(): bool { return $this->has('shipping_address_label'); }
}
