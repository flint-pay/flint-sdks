<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $mode
 * @property-read string|null $payment_method_id
 * @property-read InvoicePaymentPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_policy
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCollectionAutomaticPreviousAttributesInput extends Model {
    /** @param array{'mode'?: string|null, 'payment_method_id'?: string|null, 'payment_policy'?: InvoicePaymentPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionAutomaticPreviousAttributesInput')); }
    /** How the invoice is collected, resolved when the draft was written. Value enum: "automatic". anyOf[1] (Value): string. How the invoice is collected, resolved when the draft was written. Value enum: "automatic". anyOf[2] (Value): null. anyOf[1] (Value): string.  Value enum: "automatic".
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. anyOf[1] (Value): string. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null. anyOf[1] (Value): string. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): mixed { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** The payment options the hosted invoice page offers. Present only with buyer_initiated. anyOf[1] (Value): {@see InvoicePaymentPolicyPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InvoicePaymentPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
}
