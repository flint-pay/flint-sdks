<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BalanceInput|array<array-key, mixed>|\stdClass> $data
 * @property-read MoneyMovementListMetaInput|array<array-key, mixed>|\stdClass $meta
 * @property-read string $request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BalanceListResponseInput extends Model {
    /** @param array{'data': list<BalanceInput|array<array-key, mixed>|\stdClass>, 'meta'?: MoneyMovementListMetaInput|array<array-key, mixed>|\stdClass, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BalanceListResponseInput')); }
    /** Resource, collection, or operation result returned by this request. [] (Value): {@see BalanceInput}. Current balances for one currency at observed_at. Available and pending amounts are separate buckets and can be negative. Reserve and held amounts are excluded from available_money.
     * @return list<BalanceInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** Additional information about this response. Response metadata for money movement lists, including request and trace IDs, warnings, and the state of the available history.
     * @return MoneyMovementListMetaInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): mixed { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** Identifier of this API request, used to correlate logs and support requests. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     * @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
