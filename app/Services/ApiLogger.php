<?php namespace App\Services;

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class ApiLogger
{
    /** @var Logger */
    private $logger;

    public function __construct($file = null)
    {
        $this->logger = new Logger('api-logger', [
            new StreamHandler(storage_path() . ($file ? "/logs/{$file}" : ('/logs/api-' . date('Y-m-d') . '.log')))
        ]);
    }

    public function info(array $context)
    {
        $this->logger->addInfo("✓", $context);
    }

    public function warning(array $context)
    {
        $this->logger->addWarning("✗", $context);
    }
}