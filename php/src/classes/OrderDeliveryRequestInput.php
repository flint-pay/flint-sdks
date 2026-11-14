<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass $destination
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $expected_amount_money
 * @property-read list<string> $inventory_reservation_ids
 * @property-read DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliveryRequestInput extends Model {
    /** @param array{'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'expected_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_ids'?: list<string>, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryRequestInput')); }
    /** The exact delivery method to quote and select. Flint refuses an unavailable method instead of choosing another. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Address to serve, supplied directly or selected from the order customer's saved addresses. The resolved address is returned as delivery_destination. Where to deliver a subscription: a saved customer address by ID, or a new address.
     * @return SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Optional price guard. A changed delivery amount returns delivery_requote_required with the current amount in details, without changing the order, selection or hold. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When expected_amount_money is omitted; use hasExpectedAmountMoney() or valueOrDefault().
     */
    public function getExpectedAmountMoney(): mixed { return $this->get('expected_amount_money'); }
    public function hasExpectedAmountMoney(): bool { return $this->has('expected_amount_money'); }
    /** Merchant cart reservations to credit in the quote and adopt atomically into the selected hold. Only matching held item and location units are adopted; unused and committed units stay with their source reservation. Remaining demand uses available stock. Ineligible IDs are refused as not found. maxItems: 100. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return list<string>
     * @throws SdkError When inventory_reservation_ids is omitted; use hasInventoryReservationIds() or valueOrDefault().
     */
    public function getInventoryReservationIds(): array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Name, email and phone for the person receiving this delivery. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     * @return DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the selected method delivers the order. Value enum: "shipment", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
