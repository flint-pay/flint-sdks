<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'default_payment_method_id'?: string|null, 'expected_version'?: int, 'name'?: string|null, 'phone'?: string|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateInput extends Model {
    /** @param array{'body': array{'default_payment_method_id'?: string|null, 'expected_version'?: int, 'name'?: string|null, 'phone'?: string|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateInput')); }
    /** The request body for: Update the current buyer profile. minProperties: 1. Example: {"name":"Ada Lovelace","phone":"+14155550123"}.
     * @return array{'default_payment_method_id'?: string|null, 'expected_version'?: int, 'name'?: string|null, 'phone'?: string|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
