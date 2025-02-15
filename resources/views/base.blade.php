<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @extends('partials.head')
    <body class="font-sans antialiased">
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="app"></div>
        <!-- Scripts -->
        @vite('resources/js/app.js')
    </body>
</html>
