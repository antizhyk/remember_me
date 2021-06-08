<?php


namespace App\Service\Note;


use App\Components\ImportDataClient;
use App\Models\Folder;
use League\CommonMark\CommonMarkConverter;

class Service
{
    public function update($token)
    {
        $import = new ImportDataClient();
        $responce = $import->client->request('GET', 'api/docs', [
            'headers' => [
                'Authorization' => "Bearer $token"
            ]
        ]);
        $data = (json_decode($responce->getBody()->getContents()));

        //        foreach ($data as $item){
//             preg_match_all('/api\/teams[^\)]*/', $item[0]->head->content, $links);
//            foreach ($links[0] as $link){
//                $image = $import->client->request('GET', "$link", [
//                    'headers' => [
//                        'Authorization' => 'Bearer 35a617891c248c8b0f3b3d770eecc855ee3129ab76d437f0819a139c0d42c5ce',
//                    ],
//                    ['sink' => './']
//                ],
//                );
//                dd($image);
//            }
//        }

        $converter = new CommonMarkConverter();
        foreach ($data as $arr) {
            foreach ($arr as $item) {
                $str = $item->folderPathname;
                $folder = substr($str, 1);
                Folder::firstOrCreate(
                    ['title' => $folder],
                    ['title' => $folder]);
                $key = Folder::where('title', $folder)->get();
                $content = $converter->convertToHtml($item->head->content);
                \App\Models\Note::firstOrCreate(
                    ['title' => $item->title],
                    ['title' => $item->title,
                        'content' => $content,
                        'folder_id' => $key[0]->id
                    ]);
            }
        }
    }
}
