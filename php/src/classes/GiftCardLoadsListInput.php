<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read list<string> $funding_source_type
 * @property-read string $gift_card_id
 * @property-read string $idempotency_key
 * @property-read string $order_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $source_external_reference_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardLoadsListInput extends Model {
    /** @param array{'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'funding_source_type'?: list<string>, 'gift_card_id'?: string, 'idempotency_key'?: string, 'order_id'?: string, 'page_size'?: int, 'page_token'?: string, 'source_external_reference_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardLoadsListInput')); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "adjustment", "external_payment", "flint_manual_payment", "flint_payment", "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit". Shape $[] (Value): string. maxLength: 255. Value enum: "adjustment", "external_payment", "flint_manual_payment", "flint_payment", "gift_card_purchase_refund_recovery", "gift_card_refund", "import", "store_credit".
     * @return list<string>
     * @throws SdkError When funding_source_type is omitted; use hasFundingSourceType() or valueOrDefault().
     */
    public function getFundingSourceType(): array { return $this->get('funding_source_type'); }
    public function hasFundingSourceType(): bool { return $this->has('funding_source_type'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When source_external_reference_id is omitted; use hasSourceExternalReferenceId() or valueOrDefault().
     */
    public function getSourceExternalReferenceId(): string { return $this->get('source_external_reference_id'); }
    public function hasSourceExternalReferenceId(): bool { return $this->has('source_external_reference_id'); }
}
