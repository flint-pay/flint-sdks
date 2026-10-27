<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_review_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReviewsGetInput extends Model {
    /** @param array{'payment_review_id': string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReviewsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order", "payment_intent". Shape $[] (Value): string.  Value enum: "customer", "order", "payment_intent".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
