<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'checkout_reminders'?: bool, 'expected_version'?: int, 'shipping_updates'?: bool}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateEmailPreferencesInput extends Model {
    /** @param array{'body': array{'checkout_reminders'?: bool, 'expected_version'?: int, 'shipping_updates'?: bool}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateEmailPreferencesInput')); }
    /** The request body for: Update the current buyer's email preferences. minProperties: 1. Example: {"checkout_reminders":false}.
     * @return array{'checkout_reminders'?: bool, 'expected_version'?: int, 'shipping_updates'?: bool}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
