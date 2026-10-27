<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read string|null $payment_method_id
 * @property-read InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass $payment_policy
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCollectionExternalInput extends Model {
    /** @param array{'mode': string, 'payment_method_id'?: string|null, 'payment_policy'?: InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionExternalInput')); }
    /** Shape $ (Value): string.  Value enum: "external".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string or null.
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): {@see InvoicePaymentPolicyInput}. Which payment options an invoice accepts, any per-option total limits, and whether to show a cost comparison.
     * @return InvoicePaymentPolicyInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payment_policy is omitted; use hasPaymentPolicy() or valueOrDefault().
     */
    public function getPaymentPolicy(): mixed { return $this->get('payment_policy'); }
    public function hasPaymentPolicy(): bool { return $this->has('payment_policy'); }
}
