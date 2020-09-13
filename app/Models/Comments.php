<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $table='comments';
    protected $fillable = [
        'updated_at','created_at','admins_id','comments','items_id'
    ];

    public function admins(){
        return $this->belongsto('App\Models\Admins','admins_id');
    }

    public function items(){
        return $this->belongsto('App\Models\Items','items_id');
    }

    
}
