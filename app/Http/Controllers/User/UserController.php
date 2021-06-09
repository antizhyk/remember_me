<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __invoke () {

        $user = Auth::user();

        if($user){
            return response(true);
        }
        return null;
    }
}
