<?php namespace App\Http\Controllers;


class WebController extends Controller
{
    public function films()
    {
        return view('films');
    }
}
