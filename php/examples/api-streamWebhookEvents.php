<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiStreamWebhookEventsInput, EventStream};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiStreamWebhookEventsInput([]);
$result = $client->api->streamWebhookEvents($input, new RequestOptions(maxAttempts: 1));
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
if ($result->data instanceof EventStream) {
  foreach ($result->data as $event) { echo $event->event; break; }
  $result->data->close();
}
$client->close();
