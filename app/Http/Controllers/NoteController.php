<?php

namespace App\Http\Controllers;

use App\Components\ImportDataClient;
use App\Http\Resources\Folder\FolderResource;
use App\Http\Resources\Note\NoteResource;
use App\Models\Folder;
use App\Models\Note;
use http\Client\Curl\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class NoteController extends BaseController
{
    public function index()
    {
        $user = Auth::user();
        $token = $user->token_for_boost_note;
        $this->service->update($token);
        $notes = Note::all();
        return NoteResource::collection($notes);
    }
}
