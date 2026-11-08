<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $attendee_names
 * @property-read string $client_reference
 * @property-read array<array-key, string>|\stdClass $custom_field_values
 * @property-read array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass $modifiers
 * @property-read PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass $prefill
 * @property-read array<array-key, int>|\stdClass $quantity_overrides
 * @property-read string $resolution_context
 * @property-read array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass $unit_price_overrides
 * @property-read array<array-key, string>|\stdClass $variant_selections
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolvePaymentLinkRequestInput extends Model {
    /** @param array{'attendee_names'?: list<string>, 'client_reference'?: string, 'custom_field_values'?: array<array-key, string>|\stdClass, 'modifiers'?: array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass, 'prefill'?: PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass, 'quantity_overrides'?: array<array-key, int>|\stdClass, 'resolution_context': string, 'unit_price_overrides'?: array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass, 'variant_selections'?: array<array-key, string>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolvePaymentLinkRequestInput')); }
    /** One attendee name per ticket on an event payment link, in line_items order: each tier's tickets in turn, skipping tiers with quantity 0. The count must equal the tickets being bought. Required when event_config.collect_attendee_names is true, and optional otherwise. Flint trims each name, which must then be 1 to 200 characters. Duplicate names are allowed. Flint copies the names onto the tickets when the order is paid, as each ticket's attendee_name, and never stores them in metadata. minItems: 1. [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When attendee_names is omitted; use hasAttendeeNames() or valueOrDefault().
     */
    public function getAttendeeNames(): array { return $this->get('attendee_names'); }
    public function hasAttendeeNames(): bool { return $this->has('attendee_names'); }
    /** Your reference for the buyer or cart this checkout is for, such as your user ID. It cannot contain the NUL character. Copied to the checkout session and order, preserving all characters exactly. Anyone with the link can change it, so do not use it as proof of who paid. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When client_reference is omitted; use hasClientReference() or valueOrDefault().
     */
    public function getClientReference(): string { return $this->get('client_reference'); }
    public function hasClientReference(): bool { return $this->has('client_reference'); }
    /** Buyer answers keyed by custom field key. Checkbox answers must be exactly true or false as strings, and a required checkbox must be true. Flint records the answers on the order and checkout session in `custom_field_answers`; omitted and empty answers to optional fields are not recorded. * (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_field_values is omitted; use hasCustomFieldValues() or valueOrDefault().
     */
    public function getCustomFieldValues(): array|object { return $this->get('custom_field_values'); }
    public function hasCustomFieldValues(): bool { return $this->has('custom_field_values'); }
    /** Modifier choices keyed by line item key, for catalog items. * (Value): {@see ResolvePaymentLinkLineItemModifiersInput}. The modifier selections for one payment link line item when resolving a payment link.
     * @return array<array-key, ResolvePaymentLinkLineItemModifiersInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array|object { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Email to fill in on the next checkout step. The buyer can change it; it never links an existing customer. Buyer-editable email prefill for payment-link checkout. It never identifies a customer.
     * @return PaymentLinkResolvePrefillRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When prefill is omitted; use hasPrefill() or valueOrDefault().
     */
    public function getPrefill(): mixed { return $this->get('prefill'); }
    public function hasPrefill(): bool { return $this->has('prefill'); }
    /** Quantities keyed by line item key (line_items[].key), each within that item's min_quantity and max_quantity. Event tiers accept 0. Whole-number quantities; fractional quantities are not supported. * (Value): integer. Whole-number quantity value; fractional quantities are not supported. Format: int32.
     * @return array<array-key, int>|\stdClass
     * @throws SdkError When quantity_overrides is omitted; use hasQuantityOverrides() or valueOrDefault().
     */
    public function getQuantityOverrides(): array|object { return $this->get('quantity_overrides'); }
    public function hasQuantityOverrides(): bool { return $this->has('quantity_overrides'); }
    /** Private resolution context returned by GET /v1/payment-links/{payment_link_id}/public. Send it unchanged when resolving the same link; read the link again after checkout_start_due_at. minLength: 1.
     * @return string
     * @throws SdkError When resolution_context is omitted; use hasResolutionContext() or valueOrDefault().
     */
    public function getResolutionContext(): string { return $this->get('resolution_context'); }
    public function hasResolutionContext(): bool { return $this->has('resolution_context'); }
    /** Prices keyed by line item key, for items with allow_unit_price_adjustment, between min_unit_price_money and max_unit_price_money. A donation link has one line item, keyed donation. * (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return array<array-key, MoneyValueInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When unit_price_overrides is omitted; use hasUnitPriceOverrides() or valueOrDefault().
     */
    public function getUnitPriceOverrides(): array|object { return $this->get('unit_price_overrides'); }
    public function hasUnitPriceOverrides(): bool { return $this->has('unit_price_overrides'); }
    /** Variant IDs keyed by line item key (line_items[].key), for lines with variant_ids. Each selection must be offered by that line and priced in its current currency. Omit a key to use default_variant_id; a line without a default requires a selection. Null is not accepted. * (Value): string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When variant_selections is omitted; use hasVariantSelections() or valueOrDefault().
     */
    public function getVariantSelections(): array|object { return $this->get('variant_selections'); }
    public function hasVariantSelections(): bool { return $this->has('variant_selections'); }
}
