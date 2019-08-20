<?php namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\TMDbApi;

class FilmsController extends Controller
{
    /** @var TMDbApi */
    private $TMDbApi;

    public function __construct(TMDbApi $TMDbApi)
    {
        $this->TMDbApi = $TMDbApi;
    }

    public function searchMultiple()
    {
        $result = $this->TMDbApi->searchMultiple(
            request()->input('query'),
            request()->input('page')
        );
        return response()->json($result);
    }
}
