<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MeFlintWalletCard> $data
 * @property-read bool $has_more
 * @property-read ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted fields throw when accessed. */
final class MeListFlintWalletPaymentMethodsResponse200 extends Model {
    /** @param array{'data': list<mixed>, 'has_more': bool, 'meta'?: mixed, 'request_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListFlintWalletPaymentMethodsResponse200')); }
    /** @return list<MeFlintWalletCard>
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): array { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return bool
     * @throws SdkError When has_more is omitted; use hasHasMore() or valueOrDefault().
     */
    public function getHasMore(): bool { return $this->get('has_more'); }
    public function hasHasMore(): bool { return $this->has('has_more'); }
    /** @return ResponseMeta
     * @throws SdkError When meta is omitted; use hasMeta() or valueOrDefault().
     */
    public function getMeta(): ResponseMeta { return $this->get('meta'); }
    public function hasMeta(): bool { return $this->has('meta'); }
    /** @return string
     * @throws SdkError When request_id is omitted; use hasRequestId() or valueOrDefault().
     */
    public function getRequestId(): string { return $this->get('request_id'); }
    public function hasRequestId(): bool { return $this->has('request_id'); }
}
