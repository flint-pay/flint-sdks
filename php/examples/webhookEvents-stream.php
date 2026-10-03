<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, EventStream};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));
$result = $client->webhookEvents->stream();
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
if ($result->data instanceof EventStream) {
  foreach ($result->data as $event) { echo $event->event; break; }
  $result->data->close();
}
$client->close();
