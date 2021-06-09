<?php

namespace App\Http\Controllers\Note;

use App\Http\Controllers\BaseController;
use App\Http\Resources\Note\NoteResource;
use App\Models\Note;
use Illuminate\Support\Facades\Auth;

class NoteController extends BaseController
{
    public function __invoke()
    {
        $user = Auth::user();
        $token = $user->token_for_boost_note;
        $this->service->update($token);
        $notes = Note::all();
        return NoteResource::collection($notes);
    }
}
