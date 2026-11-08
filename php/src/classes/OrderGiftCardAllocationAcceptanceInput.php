<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $gift_card_money
 * @property-read list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string}|object> $gift_cards
 * @property-read int $order_version
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $processor_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderGiftCardAllocationAcceptanceInput extends Model {
    /** @param array{'gift_card_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_cards': list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string}|object>, 'order_version': int, 'processor_money': MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderGiftCardAllocationAcceptanceInput')); }
    /** Order balance allocated to the selected gift cards. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_money is omitted; use hasGiftCardMoney() or valueOrDefault().
     */
    public function getGiftCardMoney(): mixed { return $this->get('gift_card_money'); }
    public function hasGiftCardMoney(): bool { return $this->has('gift_card_money'); }
    /** The gift cards the allocation draws from, each with the amount it covers. Copy them from the order's `gift_card_estimate`. minItems: 1. maxItems: 20. [] (Value): object. [].amount_money (Required): {@see MoneyValueInput}. Order balance allocated to this gift card. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code. [].gift_card_id (Required): string. ID of the gift card the amount is taken from. minLength: 1. maxLength: 64. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return list<array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string}|object>
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
    /** Order balance remaining for the payment processor. Currency must be USD. Amount must be nonnegative; zero is allowed. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When processor_money is omitted; use hasProcessorMoney() or valueOrDefault().
     */
    public function getProcessorMoney(): mixed { return $this->get('processor_money'); }
    public function hasProcessorMoney(): bool { return $this->has('processor_money'); }
}
