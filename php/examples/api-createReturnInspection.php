<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReturnInspectionInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiCreateReturnInspectionInput((array) json_decode('{"return_id":"example","body":{"inspected_at":"2026-01-01T00:00:00Z","line_items":[{"acceptance_status":"accepted","condition":"new","quantity":"100","return_receipt_line_item_id":"example"}],"location_id":"example","return_receipt_id":"example"}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->createReturnInspection($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
