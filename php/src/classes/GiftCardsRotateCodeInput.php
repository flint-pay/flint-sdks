<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_id
 * @property-read array{'expected_version'?: int, 'notification'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsRotateCodeInput extends Model {
    /** @param array{'gift_card_id': string, 'body': array{'expected_version'?: int, 'notification'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsRotateCodeInput')); }
    /** Flint resource ID. Example: "gc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** The request body for: Replace a gift card code.
     * @return array{'expected_version'?: int, 'notification'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
