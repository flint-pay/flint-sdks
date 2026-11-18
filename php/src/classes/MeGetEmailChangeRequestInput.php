<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $email_change_request_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetEmailChangeRequestInput extends Model {
    /** @param array{'email_change_request_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetEmailChangeRequestInput')); }
    /** The email change request ID. Must be a valid ID with prefix cecr_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "cecr_01KEZF7C00B8VJX4M828K0430H".
     * @return string
     * @throws SdkError When email_change_request_id is omitted; use hasEmailChangeRequestId() or valueOrDefault().
     */
    public function getEmailChangeRequestId(): string { return $this->get('email_change_request_id'); }
    public function hasEmailChangeRequestId(): bool { return $this->has('email_change_request_id'); }
}
