<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $order_summary_message
 * @property-read string|null $shipping_address_label
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutCustomTextConfigPreviousAttributes extends Model {
    /** @param array{'order_summary_message'?: mixed, 'shipping_address_label'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomTextConfigPreviousAttributes')); }
    /** Message shown near the order summary in checkout. anyOf[1] (Value): string. Message shown near the order summary in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderSummaryMessage(): string|null { return $this->get('order_summary_message'); }
    public function hasOrderSummaryMessage(): bool { return $this->has('order_summary_message'); }
    /** Label shown for the shipping address in checkout. anyOf[1] (Value): string. Label shown for the shipping address in checkout. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippingAddressLabel(): string|null { return $this->get('shipping_address_label'); }
    public function hasShippingAddressLabel(): bool { return $this->has('shipping_address_label'); }
}
