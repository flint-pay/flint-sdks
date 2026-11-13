<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $payment_intent_id
 * @property-read string $collecting_merchant_id
 * @property-read string $seller_merchant_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $external_reference_id
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentSplitsListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'payment_intent_id'?: string, 'collecting_merchant_id'?: string, 'seller_merchant_id'?: string, 'partner_app_id'?: string, 'partner_app_install_id'?: string, 'external_reference_id'?: string, 'status'?: list<string>|string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentSplitsListParams')); }
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
    /** Exact match on the payment intent. pattern: ^pi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
    /** Exact match on the collecting merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When collecting_merchant_id is omitted; use hasCollectingMerchantId() or valueOrDefault().
     */
    public function getCollectingMerchantId(): string { return $this->get('collecting_merchant_id'); }
    public function hasCollectingMerchantId(): bool { return $this->has('collecting_merchant_id'); }
    /** Exact match on the seller. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When seller_merchant_id is omitted; use hasSellerMerchantId() or valueOrDefault().
     */
    public function getSellerMerchantId(): string { return $this->get('seller_merchant_id'); }
    public function hasSellerMerchantId(): bool { return $this->has('seller_merchant_id'); }
    /** Exact match on the partner app. pattern: ^papp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Exact match on the install. pattern: ^pinst_[0-9A-HJKMNP-TV-Z]{26}$. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Exact, case-sensitive match on the collecting merchant's external identifier. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Statuses to include. Omit to include all statuses. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "processing", "succeeded", "failed", "canceled". Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[1][] (Value): string.  Value enum: "pending", "processing", "succeeded", "failed", "canceled". anyOf[2] (Value): string.  Value enum: "pending", "processing", "succeeded", "failed", "canceled".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
}
