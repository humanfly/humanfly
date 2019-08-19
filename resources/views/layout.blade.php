<!doctype html>
<html lang="{{ config('app.locale') }}">

<head>
    <title>Humanfly</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@3.x/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.2.1/font-awesome-animation.min.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>

<div>
    @section('navbar')
        <nav id="nav">
            <navbar></navbar>
        </nav>
    @show

    <div id="app">
        @yield('content')
    </div>
</div>

<script src="/js/manifest.js"></script>
<script src="/js/common.js"></script>
<script src="/js/navbar.js"></script>
@stack('js')

</body>
</html>