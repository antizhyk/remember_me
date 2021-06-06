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
        $import = new ImportDataClient();
        $responce = $import->client->request('GET', 'api/docs', [
            'headers' => [
                'Authorization' => 'Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce'
            ]
        ]);
        $data = (json_decode($responce->getBody()->getContents()));
        $this->service->update($data);
        $notes = Note::all();

        return NoteResource::collection($notes);
    }
}
