<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'disposition'?: string, 'dispute_id': string, 'reason_message': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingDispositionsCreateInput extends Model {
    /** @param array{'body': array{'disposition'?: string, 'dispute_id': string, 'reason_message': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDispositionsCreateInput')); }
    /** The request body for: Create a gift card funding disposition.
     * @return array{'disposition'?: string, 'dispute_id': string, 'reason_message': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
