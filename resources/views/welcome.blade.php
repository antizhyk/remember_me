<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Remember Me</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body class="antialiased">
<div id="root"></div>
<script src="{{asset('js/index.js')}}"></script>
<script>
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/firebase-messaging-sw.js');
        });
    }
</script>
</body>
</html>
