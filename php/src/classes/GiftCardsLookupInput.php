<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'code': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardsLookupInput extends Model {
    /** @param array{'body': array{'code': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardsLookupInput')); }
    /** Shape $ (Value): object. The request body for: Look up a gift card code.
     * @return array{'code': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
