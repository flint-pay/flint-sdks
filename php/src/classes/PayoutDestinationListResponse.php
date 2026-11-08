<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PayoutDestination> $data
 * @property-read ?MoneyMovementListMeta $meta
 * @property-read ?string $next_page_token
 * @property-read string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class PayoutDestinationListResponse extends Model {
    /** @param array{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutDestinationListResponse')); }
    /** Resource, collection, or operation result returned by this request. [] (Value): {@see PayoutDestination}. The account that receives merchant payouts.
     * @return list<PayoutDestination>
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.
     * @return ?MoneyMovementListMeta
     */
    public function getMeta(): ?MoneyMovementListMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no next page.
     * @return ?string
     */
    public function getNextPageToken(): ?string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
