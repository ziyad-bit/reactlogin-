<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Models\Items;
use App\Models\Admins;

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
        $admins_id = Items::find($item_id)->comments->pluck('admins_id')->toArray();
        $admins    = Admins::whereIn('id',$admins_id)->get();

        $comments_id = Items::find($item_id)->comments->pluck('id')->toArray();
        $comments    = Comments::whereIn('id',$comments_id)->orderBy('admins_id')->get();

        return response()->json(compact('admins','comments'));
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
