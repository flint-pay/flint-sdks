<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read list<string>|string $action_required_by
 * @property-read string $corrects_return_resolution_id
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $external_reference_id
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read list<string>|string $resolution_type
 * @property-read string $return_id
 * @property-read string $return_line_item_id
 * @property-read string $return_policy_revision_id
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionsListInput extends Model {
    /** @param array{'action_required_by'?: list<string>|string, 'corrects_return_resolution_id'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'resolution_type'?: list<string>|string, 'return_id'?: string, 'return_line_item_id'?: string, 'return_policy_revision_id'?: string, 'status'?: list<string>|string, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionsListInput')); }
    /** Filter by action required by. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "buyer", "merchant", "integration". Value enum: "buyer", "merchant", "integration". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "buyer", "merchant", "integration". anyOf[1][] (Value): string.  Value enum: "buyer", "merchant", "integration". anyOf[2] (Value): string.  Value enum: "buyer", "merchant", "integration".
     * @return list<string>|string
     * @throws SdkError When action_required_by is omitted; use hasActionRequiredBy() or valueOrDefault().
     */
    public function getActionRequiredBy(): mixed { return $this->get('action_required_by'); }
    public function hasActionRequiredBy(): bool { return $this->has('action_required_by'); }
    /** Filter by corrects return resolution id. pattern: ^retres_[0-9A-HJKMNP-TV-Z]{26}$. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     * @return string
     * @throws SdkError When corrects_return_resolution_id is omitted; use hasCorrectsReturnResolutionId() or valueOrDefault().
     */
    public function getCorrectsReturnResolutionId(): string { return $this->get('corrects_return_resolution_id'); }
    public function hasCorrectsReturnResolutionId(): bool { return $this->has('corrects_return_resolution_id'); }
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
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Search by return resolution ID or external reference ID.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by resolution type. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[1][] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction". anyOf[2] (Value): string.  Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action", "correction".
     * @return list<string>|string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): mixed { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Filter by return policy revision id. pattern: ^rpolv_[0-9A-HJKMNP-TV-Z]{26}$. Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     * @return string
     * @throws SdkError When return_policy_revision_id is omitted; use hasReturnPolicyRevisionId() or valueOrDefault().
     */
    public function getReturnPolicyRevisionId(): string { return $this->get('return_policy_revision_id'); }
    public function hasReturnPolicyRevisionId(): bool { return $this->has('return_policy_revision_id'); }
    /** Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". anyOf[1][] (Value): string.  Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled". anyOf[2] (Value): string.  Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Include related objects in the response. Supported expansions: replacement_order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "replacement_order". Value enum: "replacement_order". anyOf[1] (Value): Array of string.  [] enum: "replacement_order". anyOf[1][] (Value): string.  Value enum: "replacement_order". anyOf[2] (Value): string.  Value enum: "replacement_order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
