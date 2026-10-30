<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $order_id
 * @property-read array{'code': string, 'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersApplyGiftCardInput extends Model {
    /** @param array{'order_id': string, 'Flint-Gift-Card-Challenge'?: string, 'body': array{'code': string, 'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersApplyGiftCardInput')); }
    /** Order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Single-use proof from the checkout's gift card challenge. Needed only after GIFT_CARD_CHALLENGE_REQUIRED. While a challenge is required, every code needs a new proof, for up to an hour after the failures that triggered it. Ignored for API keys.
     * @return string
     * @throws SdkError When Flint-Gift-Card-Challenge is omitted; use hasFlintGiftCardChallenge() or valueOrDefault().
     */
    public function getFlintGiftCardChallenge(): string { return $this->get('Flint-Gift-Card-Challenge'); }
    public function hasFlintGiftCardChallenge(): bool { return $this->has('Flint-Gift-Card-Challenge'); }
    /** The request body for: Apply a gift card to an order.
     * @return array{'code': string, 'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
