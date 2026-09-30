<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $type
 * @property-read string $related_object_type
 * @property-read string $related_object_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $available_after
 * @property-read string|\DateTimeInterface $available_before
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceTransactionsListInput extends Model {
    /** @param array{'currency'?: string, 'type'?: string, 'related_object_type'?: string, 'related_object_id'?: string, 'status'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'available_after'?: string|\DateTimeInterface, 'available_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceTransactionsListInput')); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When related_object_type is omitted; use hasRelatedObjectType() or valueOrDefault().
     */
    public function getRelatedObjectType(): string { return $this->get('related_object_type'); }
    public function hasRelatedObjectType(): bool { return $this->has('related_object_type'); }
    /** @return string
     * @throws SdkError When related_object_id is omitted; use hasRelatedObjectId() or valueOrDefault().
     */
    public function getRelatedObjectId(): string { return $this->get('related_object_id'); }
    public function hasRelatedObjectId(): bool { return $this->has('related_object_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When available_after is omitted; use hasAvailableAfter() or valueOrDefault().
     */
    public function getAvailableAfter(): string|\DateTimeInterface { return $this->get('available_after'); }
    public function hasAvailableAfter(): bool { return $this->has('available_after'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When available_before is omitted; use hasAvailableBefore() or valueOrDefault().
     */
    public function getAvailableBefore(): string|\DateTimeInterface { return $this->get('available_before'); }
    public function hasAvailableBefore(): bool { return $this->has('available_before'); }
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
