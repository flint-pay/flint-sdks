<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $payment_review_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentReviewsGetInput extends Model {
    /** @param array{'payment_review_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewsGetInput')); }
    /** Flint payment review ID. Example: "rev_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Supported expansions: customer, order, payment_intent. Expansion requires risk.read plus the read scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order", "payment_intent". Value enum: "customer", "order", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "customer", "order", "payment_intent". anyOf[1][] (Value): string.  Value enum: "customer", "order", "payment_intent". anyOf[2] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
