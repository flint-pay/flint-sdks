<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class WebhookSigningMethodInput extends Model {
    /** @param string $values */
    public function __construct(string $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookSigningMethodInput')); }
}
