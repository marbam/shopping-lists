<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <div class="flex-center position-ref full-height">
            <div class="content">
                <div id="app"></div>
                <script src="{{ asset('js/app.js') }}"></script>
            </div>
        </div>
    </body>
</html>
