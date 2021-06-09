<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\Controller;
use App\Http\Resources\Folder\FolderResource;
use App\Models\Folder;

class FolderController extends Controller
{
    public function __invoke()
    {
        $folder = Folder::all();
        return FolderResource::collection($folder);
    }
}
