<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $gift_card_money
 * @property-read list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object> $gift_cards
 * @property-read int $order_version
 * @property-read array{'amount': string, 'currency': string}|object $processor_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardAllocationAcceptanceInput extends Model {
    /** @param array{'gift_card_money': array{'amount': string, 'currency': string}|object, 'gift_cards': list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object>, 'order_version': int, 'processor_money': array{'amount': string, 'currency': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardAllocationAcceptanceInput')); }
    /**  amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string.  Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): array|object { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): object. [].amount_money.amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. [].amount_money.currency (Required): string.  Value enum: "USD". [].gift_card_id (Required): string. minLength: 1. maxLength: 64.
     * @return list<array{'amount_money': array{'amount': string, 'currency': string}|object, 'gift_card_id': string}|object>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** Order version used to calculate this gift card allocation. Read the order again if its version changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When order_version is omitted; use hasOrderVersion() or valueOrDefault().
     */
    public function getOrderVersion(): int { return $this->get('order_version'); }
    public function hasOrderVersion(): bool { return $this->has('order_version'); }
    /**  amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string.  Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): array|object { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
