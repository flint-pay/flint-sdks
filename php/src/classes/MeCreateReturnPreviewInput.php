<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateReturnPreviewInput extends Model {
    /** @param array{'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewInput')); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Preview Return eligibility or resolution amounts for the current buyer.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
