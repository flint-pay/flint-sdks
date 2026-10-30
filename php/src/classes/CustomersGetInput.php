<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersGetInput extends Model {
    /** @param array{'customer_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersGetInput')); }
    /** Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Supported expansions: default_payment_method, receivables. Expanding the default payment method requires customers.read plus payments.payment_methods.read. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=default_payment_method&expand=receivables, or pass one comma-separated value. [] enum: "default_payment_method", "receivables". Value enum: "default_payment_method", "receivables". anyOf[1] (Value): Array of string.  [] enum: "default_payment_method", "receivables". anyOf[1][] (Value): string.  Value enum: "default_payment_method", "receivables". anyOf[2] (Value): string.  Value enum: "default_payment_method", "receivables".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
