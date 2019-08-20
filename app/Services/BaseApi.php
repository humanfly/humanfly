<?php namespace App\Services;

use App;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;

abstract class BaseApi
{
    /** @var ApiLogger */
    private $logger;
    /** @var Client */
    private $client;

    protected $endpoint;
    protected $source;
    private $statusCode;
    private $start;

    public function __construct(Client $client, $endpoint)
    {
        $this->client = $client;
        $this->endpoint = $endpoint;
        $this->start = time();
    }

    protected function requestGet($uri, $query)
    {
        return $this->request('GET', $uri, ['query' => $query]);
    }

    protected function requestPost($uri, $payload)
    {
        return $this->request('POST', $uri, ['json' => $payload]);
    }

    protected function requestPut($uri, $payload)
    {
        return $this->request('PUT', $uri, ['json' => [$payload]]);
    }

    /**
     * @param $method
     * @param $uri
     * @param array $payload
     *
     * @return array
     * @throws GuzzleException
     */
    protected function request($method, $uri, array $payload = [])
    {
        try {
            if (app()->environment('local')) {
                $payload['verify'] = false;
            }

            $payload['timeout'] = 600;
            $payload['read_timeout'] = 600;

            $this->logInfo($this->endpoint . $uri);
            $response = $this->client->request($method, $this->endpoint . $uri, $payload);

            return json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            $this->setStatusCode($e->getResponse() ? $e->getResponse()->getStatusCode() : 500);
            $this->logWarning($this->endpoint . $uri, $payload, $e);
            throw $e;
        }
    }

    private function logInfo($uri)
    {
        $this->logger()->info([
            'time'   => time() - $this->start,
            'source' => $this->source,
            'uri'    => $uri,
        ]);
    }

    private function logWarning($uri, $payload, RequestException $e)
    {
        $response = $e->getResponse();

        $this->logger()->warning([
            'time'    => time() - $this->start,
            'source'  => $this->source,
            'uri'     => $uri,
            'payload' => array_except($payload, ['headers', 'json.password']),
            'code'    => $response ? $response->getStatusCode() : '--'
        ]);
    }

    /** @return ApiLogger */
    private function logger()
    {
        if (!$this->logger) {
            $this->logger = app(ApiLogger::class);
        }

        return $this->logger;
    }

    /** 把  currency 加到 insights 裡面的每一層
     *
     * @param array $payloads [[campaign_id, currency, insights]...]
     *
     * @return array
     */
    protected function appendCurrency(array $payloads)
    {
        foreach ($payloads as $key => $campaignInsights) {
            $currency = $campaignInsights['currency'] ?? null;

            $payloads[$key]['insights'] = array_map(function ($singleInsights) use ($currency) {
                return array_merge(
                    ['currency' => $currency],
                    $singleInsights
                );
            }, $campaignInsights['insights']);
        }

        return $payloads;
    }

    /**
     * @param RequestException $e
     * @return string
     */
    protected function getErrorMessage(RequestException $e)
    {
        return json_decode($e->getResponse()->getBody(), true)['message'] ?? $e->getMessage();
    }

    /**
     * @param $code
     * @return $this
     */
    public function setStatusCode($code)
    {
        $this->statusCode = $code;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }
}