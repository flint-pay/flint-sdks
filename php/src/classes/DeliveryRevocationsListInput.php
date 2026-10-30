<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $target_type
 * @property-read list<string>|string $reason
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'target_type'?: list<string>|string, 'reason'?: list<string>|string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationsListInput')); }
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
    /** Filter by revocation target type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". Value enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". anyOf[1][] (Value): string.  Value enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision". anyOf[2] (Value): string.  Value enum: "location_geography", "delivery_rate_callback_signing_key", "delivery_rate_callback", "delivery_rate_callback_revision", "delivery_method", "delivery_method_revision".
     * @return list<string>|string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): mixed { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
    /** Filter by revocation reason. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other". Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other". anyOf[1][] (Value): string.  Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other". anyOf[2] (Value): string.  Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return list<string>|string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
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
