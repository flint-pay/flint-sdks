<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read string|null $payment_method_id
 * @property-read InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass $payment_policy
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCollectionInputExternalInput extends Model {
    /** @param array{'mode': string, 'payment_method_id'?: string|null, 'payment_policy'?: InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionInputExternalInput')); }
    /** Shape $ (Value): string. How the invoice is collected. merchant_default resolves when the draft is written, and reads return the resolved mode. Value enum: "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string or null. The customer's saved card to charge. Accepted only with automatic. Without one, Flint charges the customer's default card, selected when the invoice is issued. Send null to clear it. minLength: 1.
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): {@see InvoicePaymentPolicyInput}. The payment options the hosted invoice page offers. Accepted only with buyer_initiated. Omit it to use the invoice settings payment_policy, or the checkout payment options when that isn't set. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.
     * @return InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
}
