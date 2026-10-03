<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Refund $data
 * @property-read list<RefundGiftCardCode> $gift_card_codes
 * @property-read ResponseMeta $meta
 * @property-read string $request_id
 * Presence-aware response; omitted fields throw when accessed. */
final class RefundsCreateResponse201 extends Model {
    /** @param array{'data': mixed, 'gift_card_codes'?: list<mixed>, 'meta'?: mixed, 'request_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RefundsCreateResponse201')); }
    /** @return Refund
     * @throws SdkError When data is omitted; use hasData() or valueOrDefault().
     */
    public function getData(): Refund { return $this->get('data'); }
    public function hasData(): bool { return $this->has('data'); }
    /** @return list<RefundGiftCardCode>
     * @throws SdkError When gift_card_codes is omitted; use hasGiftCardCodes() or valueOrDefault().
     */
    public function getGiftCardCodes(): array { return $this->get('gift_card_codes'); }
    public function hasGiftCardCodes(): bool { return $this->has('gift_card_codes'); }
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
