<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $promotion_id
 * @property-read string $code
 * @property-read list<string>|string $status
 * @property-read list<string>|string $availability
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCodesListParams extends Model {
    /** @param array{'promotion_id'?: string, 'code'?: string, 'status'?: list<string>|string, 'availability'?: list<string>|string, 'page_size'?: int, 'page_token'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCodesListParams')); }
    /** Exact match on the parent promotion ID. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Exact match that ignores case and accents: CAFÉ matches cafe. This is the same rule that makes promotion codes unique. Codes preserve their original spelling. Leading and trailing whitespace are rejected, not trimmed. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by whether a code can be redeemed now or why it cannot. available matches available: true; every other value matches unavailable_reason. Values are ORed and ANDed with status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable". Value enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[1][] (Value): string.  Value enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2] (Value): string.  Value enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable".
     * @return list<string>|string
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): mixed { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Field to sort by. Defaults to created_at; ties are broken by promotion_code_id. Default: "created_at". Value enum: "created_at", "updated_at".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
    /** Supported expansions: promotion. Expand each code's parent promotion. Expansion requires commerce.promotions.read. Limits: at most 10 unique expand paths per request. Pass expand=promotion. [] enum: "promotion". Value enum: "promotion". anyOf[1] (Value): Array of string.  [] enum: "promotion". anyOf[1][] (Value): string.  Value enum: "promotion". anyOf[2] (Value): string.  Value enum: "promotion".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
