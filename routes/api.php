<?php

use Illuminate\Http\Request;
use Illuminate\Routing\RouteUri;
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
Route::post('login', 'AdminsController@login');


Route::get('profile', 'AdminsController@getAuthenticatedadmins');

    
Route:: post("items/add/{id}", "itemsController@store");
Route:: post("item/edit/{id}", "itemsController@edit");
Route:: get("items", "itemsController@index");
Route:: get("item/details/{id}", "itemsController@show");
Route::post('item/delete/{id}', 'itemsController@destroy');


Route:: post("add/photo/{id}", "AdminsController@upload");
Route:: get("Admin/{id}", "AdminsController@edit");
Route:: post("Admin/update/{id}", "AdminsController@update");


Route:: get("item/comments/{id}", "CommentsController@index");
Route:: post("item/add/comments", "CommentsController@store");


Route:: get("category", "CategoryController@show");

