<?php

namespace App\Http\Controllers;



use App\Models\Items;

use App\Models\Admins;

use App\Models\Comments;
use App\Traits\checkToken;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    use checkToken;

    protected $admins;

    public function __construct()
    {
        $this->checkToken();
    }

    public function index($item_id)
    {
        
        $admins_comments=Comments::with('admins')->where('items_id',$item_id)->get();
        
        return response()->json(compact('admins_comments'));
    }

    public function store(Request $request)
    {
        $comments = Comments::create([
            'comments'  => $request->get('comments'),
            'admins_id' => $request->get('admins_id'),
            'items_id'  => $request->get('items_id'),
        ]);

        return response()->json(compact('comments'));
    }
}
