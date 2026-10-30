<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'new_email': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeCreateEmailChangeRequestInput extends Model {
    /** @param array{'body': array{'new_email': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateEmailChangeRequestInput')); }
    /** The request body for: Request an email change.
     * @return array{'new_email': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
