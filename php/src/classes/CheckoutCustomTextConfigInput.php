<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $order_summary_message
 * @property-read string $shipping_address_label
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutCustomTextConfigInput extends Model {
    /** @param array{'order_summary_message'?: string, 'shipping_address_label'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomTextConfigInput')); }
    /** @return string
     * @throws SdkError When order_summary_message is omitted; use hasOrderSummaryMessage() or valueOrDefault().
     */
    public function getOrderSummaryMessage(): string { return $this->get('order_summary_message'); }
    public function hasOrderSummaryMessage(): bool { return $this->has('order_summary_message'); }
    /** @return string
     * @throws SdkError When shipping_address_label is omitted; use hasShippingAddressLabel() or valueOrDefault().
     */
    public function getShippingAddressLabel(): string { return $this->get('shipping_address_label'); }
    public function hasShippingAddressLabel(): bool { return $this->has('shipping_address_label'); }
}
