<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SaveMeGiftCardRequestInput extends Model {
    /** @param array{'code': string, 'credential_type': string}|object|array{'credential_type': string, 'grant_id': string, 'recipient_access_token': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SaveMeGiftCardRequestInput')); }
}
