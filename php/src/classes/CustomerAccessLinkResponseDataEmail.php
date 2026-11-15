<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery
 * @property-read ?string $expires_at
 * @property-read ?string $purpose
 * @property-read string $recipient_email
 * @property-read string|null $return_url
 * @property-read bool $sent
 * @property-read ?string $url
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAccessLinkResponseDataEmail extends Model {
    /** @param array{'delivery': string, 'expires_at'?: string, 'purpose'?: string, 'recipient_email': string, 'return_url': string|null, 'sent': bool, 'url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAccessLinkResponseDataEmail')); }
    /** Whether the credential was returned or emailed. Value enum: "email".
     * @return string
     */
    public function getDelivery(): string { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** When a returned link expires. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The returned link opens the customer's account. Value enum: "customer_account".
     * @return ?string
     */
    public function getPurpose(): ?string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Masked customer address receiving the account link. No credential is returned with email delivery.
     * @return string
     */
    public function getRecipientEmail(): string { return $this->get('recipient_email'); }
    public function hasRecipientEmail(): bool { return $this->has('recipient_email'); }
    /**  anyOf[1] (Value): (string or null). The return_url from the request. Null when the request omitted it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnUrl(): string|null { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** True when Flint accepted the email into its durable delivery queue. Provider delivery runs asynchronously. Value enum: true.
     * @return bool
     */
    public function getSent(): bool { return $this->get('sent'); }
    public function hasSent(): bool { return $this->has('sent'); }
    /** The single-use bearer URL, present only with link delivery. Format: uri.
     * @return ?string
     */
    public function getUrl(): ?string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}
