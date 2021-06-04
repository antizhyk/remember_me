<?php


namespace App\Service\Note;


use App\Models\Folder;
use League\CommonMark\CommonMarkConverter;

class Service
{
    public function update($data)
    {
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
