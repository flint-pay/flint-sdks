<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<CreateDeliverySelectionChoiceRequestInput|array<array-key, mixed>|\stdClass> $choices
 * @property-read string $delivery_quote_id
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string|null $expected_delivery_selection_id
 * @property-read list<string> $inventory_reservation_ids
 * @property-read DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionsCreateParams extends Model {
    /** @param array{'choices': list<CreateDeliverySelectionChoiceRequestInput|array<array-key, mixed>|\stdClass>, 'delivery_quote_id': string, 'destination_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_delivery_selection_id'?: string|null, 'inventory_reservation_ids'?: list<string>, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionsCreateParams')); }
    /** One chosen option for every required choice group in the quote. Use group and option IDs from this quote, not an earlier quote. [] (Value): {@see CreateDeliverySelectionChoiceRequestInput}. The delivery option to select for one choice group when creating a delivery selection, with optional delivery instructions.
     * @return list<CreateDeliverySelectionChoiceRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When choices is omitted; use hasChoices() or valueOrDefault().
     */
    public function getChoices(): array { return $this->get('choices'); }
    public function hasChoices(): bool { return $this->has('choices'); }
    /** ID of the quote whose options to choose. The selection belongs to that quote's checkout session. minLength: 1. Example: "dqt_01KEZF7C009EB1AVCDJBN4BBVV".
     * @return string
     * @throws SdkError When delivery_quote_id is omitted; use hasDeliveryQuoteId() or valueOrDefault().
     */
    public function getDeliveryQuoteId(): string { return $this->get('delivery_quote_id'); }
    public function hasDeliveryQuoteId(): bool { return $this->has('delivery_quote_id'); }
    /** Destination address for shipment or local delivery. When sent, it must be a complete address. When omitted, Flint keeps the quote's address, even when partial; missing members appear in input_requirements and must be supplied before payment. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Optional assertion on CheckoutSession.delivery.delivery_selection_id. Omit to make no assertion, send null to assert that no selection exists, or send an ID to assert that it is current. minLength: 1. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     * @return string|null
     * @throws SdkError When expected_delivery_selection_id is omitted; use hasExpectedDeliverySelectionId() or valueOrDefault().
     */
    public function getExpectedDeliverySelectionId(): string|null { return $this->get('expected_delivery_selection_id'); }
    public function hasExpectedDeliverySelectionId(): bool { return $this->has('expected_delivery_selection_id'); }
    /** Requires a merchant credential with delivery-write scope. Merchant-created cart reservations to adopt atomically into the selection hold at the selected inventory items and locations. Only matching held units are released; unused units stay held, and any remaining demand uses available stock. At most 100 unique IDs. Explicit IDs, including an empty array, replace the session binding for this request. When omitted, both merchant and buyer requests use eligible session-bound holds; ineligible bound holds are silently skipped. First adopter wins when sessions share a hold. Ineligible explicit IDs are refused as not found. maxItems: 100. [] (Value): string. minLength: 1. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return list<string>
     * @throws SdkError When inventory_reservation_ids is omitted; use hasInventoryReservationIds() or valueOrDefault().
     */
    public function getInventoryReservationIds(): array { return $this->get('inventory_reservation_ids'); }
    public function hasInventoryReservationIds(): bool { return $this->has('inventory_reservation_ids'); }
    /** Recipient details the chosen options ask for. Missing required fields are returned in input_requirements and must be supplied before payment. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     * @return DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
