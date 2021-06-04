<?php

namespace App\Console\Commands;

use App\Components\ImportDataClient;
use Illuminate\Console\Command;

class ImportJsonPlaseholderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:notes';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $import = new ImportDataClient();
        $responce = $import->client->request('GET', 'api/docs', [
            'headers' => [
                'Authorization' => 'Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce'
            ]
        ]);
        $data = (json_decode($responce->getBody()->getContents()));
        foreach ($data as $item) {
            $folder = substr($item->folderPathname, 1);
            Folder::firstOrCreate(
                ['title' => $folder],
                ['title' => $folder]);
            $key = Folder::where('title', $folder)->get();
            Note::firstOrCreate(
                ['title' => $item->title],
                [   'title' => $item->title,
                    'content' => $item->head->content,
                    'folder_id' => $key->id]);
        }
    }
}
