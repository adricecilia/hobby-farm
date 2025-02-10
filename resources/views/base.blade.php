<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @extends('partials.head')
    <body class="font-sans antialiased">
        <div id="app"></div>
        <!-- Scripts -->
        @vite('resources/js/app.js')
    </body>
</html>
