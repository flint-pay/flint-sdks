<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_id
 * @property-read array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'expected_version'?: int, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsCreateLoadInput extends Model {
    /** @param array{'gift_card_id': string, 'body': array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'expected_version'?: int, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsCreateLoadInput')); }
    /** Flint resource ID. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The request body for: Load a gift card.
     * @return array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'expected_version'?: int, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
