<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiGetPaymentLinkPublicInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
));
$input = new ApiGetPaymentLinkPublicInput([
  'payment_link_id' => 'example',
]);
$result = $client->api->getPaymentLinkPublic($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->payment_link->payment_link_id . PHP_EOL;
echo $result->data->data->payment_link->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
