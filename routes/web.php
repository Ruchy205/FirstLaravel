<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::view('/{any}', 'react');

Route::get('/react-page', 'MyController@index');
use App\Http\Controllers\MyController;

Route::get('/react-page', [MyController::class, 'index']);


