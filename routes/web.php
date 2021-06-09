<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['namespace' => 'Note'], function () {
    Route::get('/get_data', 'NoteController')->name('data.index');
    Route::get('/get_folder', 'FolderController')->name('folder.index');
});

Route::group(['namespace' => 'User'], function () {
    Route::get('/get_status', 'UserController')->name('user.index');
});


//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

//Route::get('/{query}', function () {
//    return view('welcome');
//})->where('query', '^((?!api).)*$')->name('index');

Route::get('/register', function () {
    return view('welcome');
})->name('register');

Route::get('/login', function () {
    return view('welcome');
})->name('login');

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();



