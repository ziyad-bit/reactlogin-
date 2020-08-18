<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Items extends Model
{
    protected $table='items';
    protected $fillable = [
        'name', 'description', 'price','updated_at','created_at','image','status','approve'
    ];

    
}
