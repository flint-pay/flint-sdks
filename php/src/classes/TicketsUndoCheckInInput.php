<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $ticket_id
 * @property-read array{'expected_version'?: int}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TicketsUndoCheckInInput extends Model {
    /** @param array{'ticket_id': string, 'body'?: array{'expected_version'?: int}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TicketsUndoCheckInInput')); }
    /** The ticket ID. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8".
     * @return string
     * @throws SdkError When ticket_id is omitted; use hasTicketId() or valueOrDefault().
     */
    public function getTicketId(): string { return $this->get('ticket_id'); }
    public function hasTicketId(): bool { return $this->has('ticket_id'); }
    /** An optional version fence for the ticket. Example: {"expected_version":2}.
     * @return array{'expected_version'?: int}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
