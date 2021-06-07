<?php

namespace App\Http\Controllers;

use App\Http\Resources\Folder\FolderResource;
use App\Models\Folder;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FolderController extends Controller
{
    public function index()
    {
        $folder = Folder::all();
        return FolderResource::collection($folder);
    }
}
