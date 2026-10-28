<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $payment_review_id
 * @property-read array{'add_to_block_lists'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReviewsDeclineInput extends Model {
    /** @param array{'payment_review_id': string, 'Idempotency-Key'?: string, 'body'?: array{'add_to_block_lists'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReviewsDeclineInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When payment_review_id is omitted; use hasPaymentReviewId() or valueOrDefault().
     */
    public function getPaymentReviewId(): string { return $this->get('payment_review_id'); }
    public function hasPaymentReviewId(): bool { return $this->has('payment_review_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Decline a payment review.
     * @return array{'add_to_block_lists'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
