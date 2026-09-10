<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateInventoryReservationInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateInventoryReservationInput((array) json_decode('{"Idempotency-Key":"example","body":{"demands":[],"inventory_routing_source":{"type":"fixed_location","location_id":"example"},"owner":{"expires_at":"2026-01-01T00:00:00Z","key":"example"}}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createInventoryReservation($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
