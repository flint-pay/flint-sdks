<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateDemoSessionInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiCreateDemoSessionInput([
  'body' => (object) [],
]);
$result = $client->api->createDemoSession($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->demo_session_id . PHP_EOL;
echo $result->data->data->sandbox_id . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
