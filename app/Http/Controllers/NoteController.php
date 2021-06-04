<?php

namespace App\Http\Controllers;

use App\Components\ImportDataClient;

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
        return redirect()->route('index');
    }
}
