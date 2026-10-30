<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<GiftCardRedemption> $data
 * @property-read ?ResponseMeta $meta
 * @property-read ?string $next_page_token
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardRedemptionListResponse extends Model {
    /** @param array{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionListResponse')); }
    /**  [] (Value): {@see GiftCardRedemption}. Independent redemption resource. Operational reservations are separate from immutable posted transactions. Refund captured value with `POST /v1/refunds`, using a `tender_allocations` entry with `tender_type` `gift_card_redemption` and this redemption's ID. Refunds keep the redemption `captured` and increase `refunded_money`.
     * @return list<GiftCardRedemption>
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     * @return ?ResponseMeta
     */
    public function getMeta(): ?ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** next_page_token
     * @return ?string
     */
    public function getNextPageToken(): ?string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
