<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_method_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodsGetInput extends Model {
    /** @param array{'payment_method_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer". Shape $[] (Value): string.  Value enum: "customer".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
