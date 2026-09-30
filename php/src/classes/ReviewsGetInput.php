<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $review_id
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReviewsGetInput extends Model {
    /** @param array{'review_id': string, 'expand'?: list<string>, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReviewsGetInput')); }
    /** @return string
     * @throws SdkError When review_id is omitted; use hasReviewId() or valueOrDefault().
     */
    public function getReviewId(): string { return $this->get('review_id'); }
    public function hasReviewId(): bool { return $this->has('review_id'); }
    /** @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
