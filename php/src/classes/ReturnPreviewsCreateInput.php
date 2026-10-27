<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPreviewsCreateInput extends Model {
    /** @param array{'body': array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPreviewsCreateInput')); }
    /** Shape $ (Value): object and Alternative shapes (see declared variants). The request body for: Create return preview.
     * @return array{'eligibility': mixed, 'mode': string, 'resolution'?: mixed}|object|array{'eligibility'?: mixed, 'mode': string, 'resolution': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
