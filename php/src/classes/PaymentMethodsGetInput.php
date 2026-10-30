<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_method_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentMethodsGetInput extends Model {
    /** @param array{'payment_method_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentMethodsGetInput')); }
    /** Flint payment method ID. Example: "pm_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Supported expansions: customer. Expansion requires payments.payment_methods.read plus customers.read. Limits: at most 10 unique expand paths per request. Pass expand=customer. [] enum: "customer". Value enum: "customer". anyOf[1] (Value): Array of string.  [] enum: "customer". anyOf[1][] (Value): string.  Value enum: "customer". anyOf[2] (Value): string.  Value enum: "customer".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
