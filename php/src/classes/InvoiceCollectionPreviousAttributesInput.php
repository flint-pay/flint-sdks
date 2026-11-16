<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $mode
 * @property-read string|null|null $payment_method_id
 * @property-read InvoicePaymentPolicyPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_policy
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCollectionPreviousAttributesInput extends Model {
    /** @param InvoiceCollectionBuyerInitiatedPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoiceCollectionAutomaticPreviousAttributesInput|array<array-key, mixed>|\stdClass|InvoiceCollectionExternalPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionPreviousAttributesInput')); }
    /** How the invoice is collected, resolved when the draft was written. Value enum: "buyer_initiated", "automatic", "external". anyOf[1] (Value): string. How the invoice is collected, resolved when the draft was written. Value enum: "buyer_initiated", "automatic", "external". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. anyOf[1] (Value): string or null. The saved card Flint charges. Present only with automatic. `null` when the draft will use the customer's default card, selected at issue. After issue it is the selected card. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     * @return string|null|null
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
