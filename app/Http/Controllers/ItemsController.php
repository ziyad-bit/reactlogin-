<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Items;
use App\Models\Admins;

use App\Traits\UploadImage;
use App\Traits\checkToken;





class ItemsController extends Controller
{
    use UploadImage;
    use checkToken;

    
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items=Items::where('approve',1)->orderBy('id','desc')->paginate(6);
        
        $admins=$this->checkToken();

        return response()->json(compact('items','admins'));
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        $this->checkToken();

        $fileName=$this->uploadImage($request->file('image'),'images/Admins/items');
        
        $items = Items::create([
            'name'        => $request->get('name'),
            'description' => $request->get('description'),
            'price'       => $request->get('price'),
            'status'      => $request->get('status'),
            'category_id'      => $request->get('category_id'),
            'image'       => $fileName,
            'admins_id'   => $id
        ]);

        return response()->json( compact('items') );
        

        

        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $this->checkToken();

        $item=Items::find($id);
        return $item;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Request $request)
    {

        $this->checkToken();
        
        $items=Items::find($id);

        $items->name        = $request->items_name;
        $items->description = $request->description;
        $items->status      = $request->status;
        $items->price       = $request->price;

        $items->save();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item=Items::find($id);
        $item->delete();
    }
}
