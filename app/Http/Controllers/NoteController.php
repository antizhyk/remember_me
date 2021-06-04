<?php

namespace App\Http\Controllers;

use App\Components\ImportDataClient;
use App\Models\Folder;
use App\Models\Note;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    public function index () {
        $import = new ImportDataClient();
        $responce = $import->client->request('GET', 'api/docs', [
            'headers' => [
                'Authorization' => 'Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce'
            ]
        ]);
        $data = (json_decode($responce->getBody()->getContents()));

        foreach ($data as $arr) {
            foreach ($arr as $item){
                $str = $item->folderPathname;
                $folder = substr($str, 1);
                Folder::firstOrCreate(
                    ['title' => $folder],
                    ['title' => $folder]);
                $key = Folder::where('title', $folder)->get();

                Note::firstOrCreate(
                    ['title' => $item->title],
                    [   'title' => $item->title,
                        'content' => $item->head->content,
                        'folder_id' => $key[0]->id
                    ]);
            }
        }
        return view('welcome');
    }
}
