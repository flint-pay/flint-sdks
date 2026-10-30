<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'amount_money': array{'amount': string, 'currency': string}|object, 'capture_mode': string, 'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface, 'gift_card_id': string, 'sale_reference': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRedemptionsCreateInput extends Model {
    /** @param array{'body': array{'amount_money': array{'amount': string, 'currency': string}|object, 'capture_mode': string, 'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface, 'gift_card_id': string, 'sale_reference': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionsCreateInput')); }
    /** The request body for: Redeem gift card value.
     * @return array{'amount_money': array{'amount': string, 'currency': string}|object, 'capture_mode': string, 'expected_version'?: int, 'expires_at'?: string|\DateTimeInterface, 'gift_card_id': string, 'sale_reference': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
