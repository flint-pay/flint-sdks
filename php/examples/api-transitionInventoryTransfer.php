<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiTransitionInventoryTransferInput};
$client = new Client(new ClientOptions(baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid', authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']], allowInsecureHttp: getenv('API_ALLOW_INSECURE_HTTP') === '1'));
$input = new ApiTransitionInventoryTransferInput((array) json_decode('{"Idempotency-Key":"example","inventory_transfer_id":"example","body":{"action":"depart","provenance":{},"lines":[{"inventory_transfer_line_id":"example","target_departed_quantity":"0"}]}}', false, 512, JSON_THROW_ON_ERROR));
$result = $client->api->transitionInventoryTransfer($input, new RequestOptions(maxAttempts: 1));
echo $result->meta['requestId'] ?? '';
$client->close();
