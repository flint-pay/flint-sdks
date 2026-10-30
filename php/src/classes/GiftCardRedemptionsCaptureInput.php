<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_redemption_id
 * @property-read array{'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRedemptionsCaptureInput extends Model {
    /** @param array{'gift_card_redemption_id': string, 'body'?: array{'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionsCaptureInput')); }
    /** Flint resource ID. Example: "gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
    /** Optional version fence for the redemption being captured or canceled.
     * @return array{'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
