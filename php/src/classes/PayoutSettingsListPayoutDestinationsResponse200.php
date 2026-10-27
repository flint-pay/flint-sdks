<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PayoutDestination> $data
 * @property-read ?MoneyMovementListMeta $meta
 * @property-read ?string $next_page_token
 * @property-read ?string $request_id
 * Presence-aware response; omitted optional fields return null. */
final class PayoutSettingsListPayoutDestinationsResponse200 extends Model {
    /** @param array{'data': list<mixed>, 'meta'?: mixed, 'next_page_token'?: string, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutSettingsListPayoutDestinationsResponse200')); }
    /** Shape $ (Value): Array of {@see PayoutDestination}. Shape $[] (Value): {@see PayoutDestination}. The account that receives merchant payouts.
     * @return list<PayoutDestination>
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Shape $ (Value): {@see MoneyMovementListMeta}. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.
     * @return ?MoneyMovementListMeta
     */
    public function getMeta(): ?MoneyMovementListMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getNextPageToken(): ?string { return $this->get('next_page_token'); }
    public function hasNextPageToken(): bool { return $this->has('next_page_token'); }
    /** Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getRequestId(): ?string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
