<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read bool $is_actionable
 * @property-read string $payment_intent_id
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class FraudWarningsListInput extends Model {
    /** @param array{'is_actionable'?: bool, 'payment_intent_id'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'page_size'?: int, 'page_token'?: string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FraudWarningsListInput')); }
    /** Filter by whether a proactive fraudulent refund can still prevent a dispute.
     * @return bool
     * @throws SdkError When is_actionable is omitted; use hasIsActionable() or valueOrDefault().
     */
    public function getIsActionable(): bool { return $this->get('is_actionable'); }
    public function hasIsActionable(): bool { return $this->has('is_actionable'); }
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
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
    /** Supported expansions: dispute, payment_intent. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value. [] enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1] (Value): Array of string.  [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.  Value enum: "dispute", "payment_intent". anyOf[2] (Value): string.  Value enum: "dispute", "payment_intent".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
