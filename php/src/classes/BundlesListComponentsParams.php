<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $delivery_profile_id
 * @property-read list<string>|string $delivery_configuration_status
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesListComponentsParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesListComponentsParams')); }
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
    /** Filter by assigned delivery profile ID. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string.  Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string.  Value enum: "configured", "action_required", "not_applicable".
     * @return list<string>|string
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): mixed { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
}
