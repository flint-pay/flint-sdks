<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read string $gift_card_id
 * @property-read string $idempotency_key
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string|\DateTimeInterface $posted_after
 * @property-read string|\DateTimeInterface $posted_before
 * @property-read string $source_id
 * @property-read string $source_type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardTransactionsListInput extends Model {
    /** @param array{'X-Request-Id'?: string, 'external_reference_id'?: string, 'gift_card_id'?: string, 'idempotency_key'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'posted_after'?: string|\DateTimeInterface, 'posted_before'?: string|\DateTimeInterface, 'source_id'?: string, 'source_type'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardTransactionsListInput')); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When posted_after is omitted; use hasPostedAfter() or valueOrDefault().
     */
    public function getPostedAfter(): string|\DateTimeInterface { return $this->get('posted_after'); }
    public function hasPostedAfter(): bool { return $this->has('posted_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When posted_before is omitted; use hasPostedBefore() or valueOrDefault().
     */
    public function getPostedBefore(): string|\DateTimeInterface { return $this->get('posted_before'); }
    public function hasPostedBefore(): bool { return $this->has('posted_before'); }
    /** @return string
     * @throws SdkError When source_id is omitted; use hasSourceId() or valueOrDefault().
     */
    public function getSourceId(): string { return $this->get('source_id'); }
    public function hasSourceId(): bool { return $this->has('source_id'); }
    /** @return string
     * @throws SdkError When source_type is omitted; use hasSourceType() or valueOrDefault().
     */
    public function getSourceType(): string { return $this->get('source_type'); }
    public function hasSourceType(): bool { return $this->has('source_type'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
