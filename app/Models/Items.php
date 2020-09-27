<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table = 'items';

    protected $fillable = [
        'name', 'description', 'price', 'image', 'status', 'approve', 'admins_id','category_id','date'
    ];

    public $timestamps=false;

    public function admins()
    {
        return $this->belongsto('App\Models\Admins', 'admins_id');
    }

    public function category()
    {
        return $this->belongsto('App\Models\Category', 'category_id');
    }



    public function comments()
    {
        return $this->hasMany('App\Models\Comments', 'items_id');
    }
}
