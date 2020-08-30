<?php

namespace App\Traits;

/**
 * 
 */
trait UploadImage 
{
    protected function uploadImage($request,$path){
        $file =$request;
        $fileName = time() . '-' . $file->getClientOriginalName();
        $filePath=$path;
        $file->move($filePath, $fileName);
        return $fileName;
    }
}
