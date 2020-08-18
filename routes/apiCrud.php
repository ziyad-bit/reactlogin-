<?php 

use Illuminate\Support\Facades\Route;



Route::post('items/add', 'itemsController@store');