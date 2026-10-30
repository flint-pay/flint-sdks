<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_id
 * @property-read array{'customer_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsUpdateInput extends Model {
    /** @param array{'gift_card_id': string, 'body': array{'customer_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsUpdateInput')); }
    /** Flint resource ID. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The request body for: Update a gift card.
     * @return array{'customer_id'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
