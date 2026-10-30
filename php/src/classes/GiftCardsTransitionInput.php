<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_id
 * @property-read array{'action': string, 'expected_version'?: int, 'reason': string}|object|array{'action': string, 'expected_version'?: int, 'reason'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsTransitionInput extends Model {
    /** @param array{'gift_card_id': string, 'body': array{'action': string, 'expected_version'?: int, 'reason': string}|object|array{'action': string, 'expected_version'?: int, 'reason'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsTransitionInput')); }
    /** Flint resource ID. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The request body for: Transition a gift card.
     * @return array{'action': string, 'expected_version'?: int, 'reason': string}|object|array{'action': string, 'expected_version'?: int, 'reason'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
