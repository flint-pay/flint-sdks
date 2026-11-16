<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_summary_message
 * @property-read string|null $shipping_address_label
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutCustomTextConfigPreviousAttributesInput extends Model {
    /** @param array{'order_summary_message'?: string|null, 'shipping_address_label'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomTextConfigPreviousAttributesInput')); }
    /** Message shown near the order summary in checkout. anyOf[1] (Value): string. Message shown near the order summary in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_summary_message is omitted; use hasOrderSummaryMessage() or valueOrDefault().
     */
    public function getOrderSummaryMessage(): mixed { return $this->get('order_summary_message'); }
    public function hasOrderSummaryMessage(): bool { return $this->has('order_summary_message'); }
    /** Label shown for the shipping address in checkout. anyOf[1] (Value): string. Label shown for the shipping address in checkout. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When shipping_address_label is omitted; use hasShippingAddressLabel() or valueOrDefault().
     */
    public function getShippingAddressLabel(): mixed { return $this->get('shipping_address_label'); }
    public function hasShippingAddressLabel(): bool { return $this->has('shipping_address_label'); }
}
