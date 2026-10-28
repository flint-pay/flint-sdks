<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'discount'?: mixed, 'order_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class DiscountPreviewsCreateInput extends Model {
    /** @param array{'body': array{'discount'?: mixed, 'order_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DiscountPreviewsCreateInput')); }
    /** Shape $ (Value): object. The request body for: Create discount preview.
     * @return array{'discount'?: mixed, 'order_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
