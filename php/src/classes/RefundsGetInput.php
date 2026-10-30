<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $refund_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class RefundsGetInput extends Model {
    /** @param array{'refund_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundsGetInput')); }
    /** Flint refund ID. Example: "ref_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When refund_id is omitted; use hasRefundId() or valueOrDefault().
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
    /** Supported expansions: customer, order, payment_intent, payment_refunds.payment_intent. Expansion requires commerce.refunds.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. To-many expansions are capped at 20 related objects per path. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent". Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent". anyOf[1] (Value): Array of string.  [] enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent". anyOf[1][] (Value): string.  Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent". anyOf[2] (Value): string.  Value enum: "customer", "order", "payment_intent", "payment_refunds.payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
