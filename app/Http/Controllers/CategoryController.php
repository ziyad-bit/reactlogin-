<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function show()
    {
        $category = Category::all();
        return $category;
    }

    public function index($id){
        $category=Category::find($id);
        $category_items=Items::with('category')->where('category_id',$id )->get();
        return response()->json(compact('category_items','category'));
    }
}
