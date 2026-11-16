<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $purpose
 * @property-read string $recipient_email
 * @property-read string|null $return_url
 * @property-read bool $sent
 * @property-read string $url
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAccessLinkInput extends Model {
    /** @param array{'delivery': string, 'expires_at': string|\DateTimeInterface, 'purpose': string, 'recipient_email'?: string, 'return_url': string|null, 'sent'?: bool, 'url'?: string, ...}|object|array{'delivery': string, 'expires_at'?: string|\DateTimeInterface, 'purpose'?: string, 'recipient_email': string, 'return_url': string|null, 'sent': bool, 'url'?: string, ...}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccessLinkInput')); }
    /** Whether the credential was returned or emailed. Value enum: "link", "email".
     * @return string
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): string { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** When a returned link expires. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The returned link opens the customer's account. Value enum: "customer_account".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Masked customer address receiving the account link. No credential is returned with email delivery.
     * @return string
     * @throws SdkError When recipient_email is omitted; use hasRecipientEmail() or valueOrDefault().
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /** The return_url from the request. Null when the request omitted it.
     * @return string|null
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string|null { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Value enum: true.
     * @return bool
     * @throws SdkError When sent is omitted; use hasSent() or valueOrDefault().
     */
    public function getSent(): bool { return $this->get('sent'); }
    public function hasSent(): bool { return $this->has('sent'); }
    /** The single-use bearer URL, present only with link delivery. Returned only to the credential that created it, and omitted when another credential replays the request. Format: uri. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
