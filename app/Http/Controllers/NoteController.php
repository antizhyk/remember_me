<?php

namespace App\Http\Controllers;

use App\Components\ImportDataClient;
use App\Http\Resources\Folder\FolderResource;
use App\Http\Resources\Note\NoteResource;
use App\Models\Folder;
use App\Models\Note;
use Illuminate\Http\Resources\Json\JsonResource;

class NoteController extends BaseController
{
    public function index () {
       $this->service->update();
        $notes = Note::all();
        return NoteResource::collection($notes);
    }
}
