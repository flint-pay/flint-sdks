<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $partner_app_id
 * @property-read string $platform_fee_id
 * @property-read string $platform_fee_payout_id
 * @property-read list<string>|string $type
 * @property-read string|\DateTimeInterface $occurred_after
 * @property-read string|\DateTimeInterface $occurred_before
 * Presence-aware input; omitted fields throw when accessed. */
final class PlatformFeeBalanceTransactionsListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'partner_app_id'?: string, 'platform_fee_id'?: string, 'platform_fee_payout_id'?: string, 'type'?: list<string>|string, 'occurred_after'?: string|\DateTimeInterface, 'occurred_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PlatformFeeBalanceTransactionsListParams')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Exact match on the partner app. minLength: 1. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Exact match on the fee the entry concerns. minLength: 1. pattern: ^pfee_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfee_01KEZF7C00JHAZN19B3MMW0R3A".
     * @return string
     * @throws SdkError When platform_fee_id is omitted; use hasPlatformFeeId() or valueOrDefault().
     */
    public function getPlatformFeeId(): string { return $this->get('platform_fee_id'); }
    public function hasPlatformFeeId(): bool { return $this->has('platform_fee_id'); }
    /** Exact match on the payout that carried the entry. minLength: 1. pattern: ^pfpo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pfpo_01KEZF7C00H58B147FK286D4A4".
     * @return string
     * @throws SdkError When platform_fee_payout_id is omitted; use hasPlatformFeePayoutId() or valueOrDefault().
     */
    public function getPlatformFeePayoutId(): string { return $this->get('platform_fee_payout_id'); }
    public function hasPlatformFeePayoutId(): bool { return $this->has('platform_fee_payout_id'); }
    /** Types to include. Omit it to list every type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". Value enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". anyOf[1][] (Value): string.  Value enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal". anyOf[2] (Value): string.  Value enum: "platform_fee", "reserve_hold", "reserve_release", "loss_coverage", "loss_coverage_reversal", "platform_fee_refund", "platform_fee_refund_reversal", "platform_fee_payout", "platform_fee_payout_reversal".
     * @return list<string>|string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_after is omitted; use hasOccurredAfter() or valueOrDefault().
     */
    public function getOccurredAfter(): string|\DateTimeInterface { return $this->get('occurred_after'); }
    public function hasOccurredAfter(): bool { return $this->has('occurred_after'); }
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_before is omitted; use hasOccurredBefore() or valueOrDefault().
     */
    public function getOccurredBefore(): string|\DateTimeInterface { return $this->get('occurred_before'); }
    public function hasOccurredBefore(): bool { return $this->has('occurred_before'); }
}
