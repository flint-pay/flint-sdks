<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read string|null $payment_method_id
 * @property-read InvoiceMarkedUncollectibleInstalledMerchantsEventDataObjectCollectionBuyerInitiatedPaymentPolicy $payment_policy
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceMarkedUncollectibleInstalledMerchantsEventDataObjectCollectionBuyerInitiated extends Model {
    /** @param array{'mode': string, 'payment_method_id'?: string|null, 'payment_policy': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceMarkedUncollectibleInstalledMerchantsEventDataObjectCollectionBuyerInitiated')); }
    /** How the invoice is collected, resolved when the draft was written. Value enum: "buyer_initiated".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /**  anyOf[1] (Value): (string or null). The saved card Flint charges. Present only with automatic. On a draft, null means Flint charges the customer's default card, selected at issue. After issue it is the selected card. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** The payment options the hosted invoice page offers. Present only with buyer_initiated. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.
     * @return InvoiceMarkedUncollectibleInstalledMerchantsEventDataObjectCollectionBuyerInitiatedPaymentPolicy
     */
    public function getPaymentPolicy(): InvoiceMarkedUncollectibleInstalledMerchantsEventDataObjectCollectionBuyerInitiatedPaymentPolicy { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
}
