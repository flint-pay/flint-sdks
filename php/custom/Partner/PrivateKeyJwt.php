<?php
declare(strict_types=1);

namespace Flint\Partner;

/**
 * A private_key_jwt client assertion provider (RFC 7523). Each call signs a new JWT
 * with iss and sub set to the client ID, a single-string aud, a unique jti and an
 * exp $lifetimeSeconds (default 120, at most 300) ahead. Supports ES256,
 * ES384 and RS256 through ext-openssl, and EdDSA (Ed25519 PKCS#8 PEM) through
 * ext-sodium. PS256 needs the Node SDK or another signer. The key never appears in
 * exception traces, print_r or serialize; var_export bypasses __debugInfo, so don't
 * export instances. Handwritten; regeneration keeps it.
 */
final class PrivateKeyJwt implements ClientAssertionProvider
{
    private const ALGORITHMS = ['ES256', 'ES384', 'RS256', 'EdDSA'];
    // DER prefix of an RFC 8410 PKCS#8 Ed25519 private key, before its 32-byte seed.
    private const ED25519_PKCS8 = '302e020100300506032b657004220420';

    private \OpenSSLAsymmetricKey|string $key;
    private string $header;

    public function __construct(
        private readonly string $clientId,
        #[\SensitiveParameter] \OpenSSLAsymmetricKey|string $privateKey,
        private readonly string $algorithm,
        private readonly ?string $keyId = null,
        private readonly string $audience = OAuth::DEFAULT_BASE_URL,
        private readonly int $lifetimeSeconds = 120,
    ) {
        OAuth::text($clientId, 'clientId');
        if ($algorithm === 'PS256') {
            OAuth::fail('algorithm', 'PS256 is not available in PHP; use ES256, ES384, RS256 or EdDSA');
        }
        if (!in_array($algorithm, self::ALGORITHMS, true)) {
            OAuth::fail('algorithm', 'algorithm must be one of ' . implode(', ', self::ALGORITHMS));
        }
        if ($keyId !== null) {
            OAuth::text($keyId, 'keyId');
        }
        OAuth::text($audience, 'audience');
        if ($lifetimeSeconds < 1 || $lifetimeSeconds > 300) {
            OAuth::fail('lifetimeSeconds', 'lifetimeSeconds must be an integer from 1 to 300');
        }
        $this->key = $algorithm === 'EdDSA' ? self::ed25519($privateKey) : self::openssl($privateKey, $algorithm);
        $header = ['alg' => $algorithm, 'typ' => 'JWT'] + ($keyId === null ? [] : ['kid' => $keyId]);
        $this->header = self::base64url(json_encode($header, JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES));
    }

    public function clientId(): string
    {
        return $this->clientId;
    }

    public function getAssertion(): string
    {
        $now = time();
        // No iat: Flint rejects an iat after its own clock, so a slightly fast clock would fail.
        $claims = self::base64url(json_encode([
            'iss' => $this->clientId,
            'sub' => $this->clientId,
            'aud' => $this->audience,
            'exp' => $now + $this->lifetimeSeconds,
            'jti' => self::uuid(),
        ], JSON_THROW_ON_ERROR | JSON_UNESCAPED_SLASHES));
        $input = $this->header . '.' . $claims;
        if (is_string($this->key)) {
            $signature = sodium_crypto_sign_detached($input, $this->key);
        } else {
            $signature = '';
            $digest = $this->algorithm === 'ES384' ? OPENSSL_ALGO_SHA384 : OPENSSL_ALGO_SHA256;
            if (!openssl_sign($input, $signature, $this->key, $digest)) {
                throw \Flint\SdkError::create('configuration', 'Client assertion signing failed', 'not_sent', errorCode: 'credential_invalid');
            }
            if ($this->algorithm !== 'RS256') {
                $signature = self::rawSignature($signature, $this->algorithm === 'ES256' ? 32 : 48);
            }
        }
        return $input . '.' . self::base64url($signature);
    }

    /** @return array{clientId: string, algorithm: string, keyId?: string} */
    public function __debugInfo(): array
    {
        return ['clientId' => $this->clientId, 'algorithm' => $this->algorithm] + ($this->keyId === null ? [] : ['keyId' => $this->keyId]);
    }

    public function __serialize(): array
    {
        throw new \LogicException('PrivateKeyJwt holds a private key and cannot be serialized');
    }

    private static function openssl(#[\SensitiveParameter] \OpenSSLAsymmetricKey|string $privateKey, string $algorithm): \OpenSSLAsymmetricKey
    {
        if (!function_exists('openssl_sign')) {
            OAuth::fail('algorithm', $algorithm . ' needs ext-openssl');
        }
        $key = $privateKey instanceof \OpenSSLAsymmetricKey ? $privateKey : openssl_pkey_get_private($privateKey);
        $details = $key === false ? false : openssl_pkey_get_details($key);
        if ($key === false || $details === false || !isset($details['type'])) {
            OAuth::fail('privateKey', 'privateKey must be a PEM private key or an OpenSSL private key');
        }
        $valid = match ($algorithm) {
            'ES256' => $details['type'] === OPENSSL_KEYTYPE_EC && ($details['ec']['curve_name'] ?? null) === 'prime256v1',
            'ES384' => $details['type'] === OPENSSL_KEYTYPE_EC && ($details['ec']['curve_name'] ?? null) === 'secp384r1',
            default => $details['type'] === OPENSSL_KEYTYPE_RSA &&
                $details['bits'] >= 2048 &&
                $details['bits'] <= 4096 &&
                ltrim($details['rsa']['e'] ?? '', "\x00") === "\x01\x00\x01",
        };
        // A public key loads into details too, but has no private members.
        $private = $details['type'] === OPENSSL_KEYTYPE_EC ? isset($details['ec']['d']) : isset($details['rsa']['d']);
        if (!$valid || !$private) {
            OAuth::fail('privateKey', $algorithm . ' needs ' . match ($algorithm) {
                'ES256' => 'an EC P-256 private key',
                'ES384' => 'an EC P-384 private key',
                default => 'an RSA private key of 2048 to 4096 bits with exponent 65537',
            });
        }
        return $key;
    }

    private static function ed25519(#[\SensitiveParameter] \OpenSSLAsymmetricKey|string $privateKey): string
    {
        if (!function_exists('sodium_crypto_sign_detached')) {
            OAuth::fail('algorithm', 'EdDSA needs ext-sodium');
        }
        $der = is_string($privateKey) && preg_match('/^-----BEGIN PRIVATE KEY-----\s*([A-Za-z0-9+\/=\s]+?)\s*-----END PRIVATE KEY-----\s*$/D', $privateKey, $match)
            ? base64_decode(preg_replace('/\s+/', '', $match[1]), true)
            : false;
        $prefix = hex2bin(self::ED25519_PKCS8);
        if (!is_string($der) || strlen($der) !== 48 || !str_starts_with($der, $prefix)) {
            OAuth::fail('privateKey', 'EdDSA needs an Ed25519 PKCS#8 PEM private key');
        }
        return sodium_crypto_sign_secretkey(sodium_crypto_sign_seed_keypair(substr($der, 16)));
    }

    /** Convert a DER ECDSA signature to the fixed-length r || s form JWS uses. */
    private static function rawSignature(string $der, int $size): string
    {
        $fail = static fn() => throw \Flint\SdkError::create('configuration', 'Client assertion signing failed', 'not_sent', errorCode: 'credential_invalid');
        if (strlen($der) < 8 || ord($der[0]) !== 0x30) {
            $fail();
        }
        $offset = ord($der[1]) & 0x80 ? 2 + (ord($der[1]) & 0x7f) : 2;
        $raw = '';
        for ($part = 0; $part < 2; $part++) {
            if (!isset($der[$offset + 1]) || ord($der[$offset]) !== 0x02) {
                $fail();
            }
            $length = ord($der[$offset + 1]);
            $integer = ltrim(substr($der, $offset + 2, $length), "\x00");
            if (strlen($integer) > $size) {
                $fail();
            }
            $raw .= str_pad($integer, $size, "\x00", STR_PAD_LEFT);
            $offset += 2 + $length;
        }
        return $raw;
    }

    private static function base64url(string $bytes): string
    {
        return rtrim(strtr(base64_encode($bytes), '+/', '-_'), '=');
    }

    private static function uuid(): string
    {
        $bytes = random_bytes(16);
        $bytes[6] = chr((ord($bytes[6]) & 0x0f) | 0x40);
        $bytes[8] = chr((ord($bytes[8]) & 0x3f) | 0x80);
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($bytes), 4));
    }
}
