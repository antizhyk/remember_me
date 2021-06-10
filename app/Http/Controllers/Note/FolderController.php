<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Resources\Folder\FolderResource;
use App\Models\Folder;
use Illuminate\Support\Facades\Auth;

class FolderController extends Controller
{
    public function __invoke()
    {   if(Auth::check()){
        $folder = Folder::all();
        return FolderResource::collection($folder);
    }
    return null;
    }
}
