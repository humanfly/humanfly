<?php namespace App\Services;

use GuzzleHttp\Client;

class TMDbApi extends BaseApi
{
    protected $source = 'PageSpeed';

    public function __construct(Client $client)
    {
        parent::__construct($client, config('api.tmdb.url'));
    }

    public function searchMultiple($query, $page)
    {
        $payload = $this->requestGet('/search/multi', [
            'api_key' => config('api.tmdb.api_key'),
            'query'   => $query,
            'page'    => $page
        ]);

        return $payload;
    }
}