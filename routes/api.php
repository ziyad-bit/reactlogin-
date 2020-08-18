<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'AdminsController@register');
Route::get('register', 'AdminsController@register');
Route::post('login', 'AdminsController@login');
Route::get('profile', 'AdminsController@getAuthenticatedadmins');



    
Route::post("items/add", "itemsController@store");
Route::get("items/addform", 'AdminsController@getAuthenticatedadmins');






