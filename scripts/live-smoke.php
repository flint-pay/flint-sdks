<?php
declare(strict_types=1);

$autoloaders = [$argv[1] . '/vendor/autoload.php', $argv[1] . '/php/vendor/autoload.php', $argv[1] . '/php/src/autoload.php'];
foreach ($autoloaders as $autoload) {
    if (file_exists($autoload)) { require $autoload; break; }
}

use Flint\Client;
use Flint\ClientOptions;
use Flint\RequestOptions;

function check(bool $condition): void {
    if (!$condition) throw new RuntimeException('SDK live assertion failed');
}

$client = new Client(new ClientOptions(
    baseUrl: getenv('FLINT_TEST_BASE_URL'),
    apiKey: getenv('FLINT_TEST_API_KEY'),
    maxAttempts: 1,
    deadlineMs: 20000,
));
try {
    $auth = $client->developer->getAuthContext();
    check($auth->getEnvironment() === 'sandbox');
    $page = $client->customers->list(['page_size' => 1]);
    check(is_array($page->getData()));
    $full = $client->customers->listWithResponse(['page_size' => 1]);
    check(is_array($full->body->getData()));
    check($full->meta['status'] === 200);
    $pages = iterator_to_array($client->customers->listPages(['page_size' => 1], new RequestOptions(maxPages: 2)));
    check(count($pages) >= 1 && count($pages) <= 2);
    foreach ($pages as $p) check(is_array($p->getData()));
    $getChecked = false;
    if (count($page->getData()) > 0) {
        $id = $page->getData()[0]->getCustomerId();
        $customer = $client->customers->get($id);
        check($customer->getCustomerId() === $id);
        $getChecked = true;
    }
    echo json_encode(['pages' => count($pages), 'getChecked' => $getChecked], JSON_THROW_ON_ERROR) . "\n";
} catch (Throwable $error) {
    // Report the failure class only; keep response bodies and credentials out of logs.
    fwrite(STDERR, get_class($error) . "\n");
    exit(1);
} finally {
    $client->close();
}
