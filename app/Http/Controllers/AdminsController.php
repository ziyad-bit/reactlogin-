<?php

namespace App\Http\Controllers;

use App\Models\Items;

use App\Models\Admins;
use App\Traits\checkToken;
use App\Traits\UploadImage;
use Illuminate\Http\Request;

use Tymon\JWTAuth\Facades\JWTAuth;
//use JWTAuth;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;

class Adminscontroller extends Controller
{
    use UploadImage;
    use checkToken;

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|string|max:25|min:5',
            'email' => 'required|string|email|max:100|min:15|unique:admins',
            'password' => 'required|string|min:8|max:100',
        ];

        $validator = Validator::make($request->json()->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['errors'], 400);
        }

        $admins = Admins::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),

            'password' => Hash::make($request->json()->get('password')),
            'date' => now()
        ]);

        $token = JWTAuth::fromuser($admins);

        return response()->json(compact('admins', 'token'), 201);
    }


    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json(compact('token'));
    }


    public function getAuthenticatedadmins()
    {
        $admins=$this->checkToken();

        $admins_id=$admins->id;
        $admins_items=Admins::find($admins_id)->items;
        
        return response()->json(compact('admins','admins_items'));
    }


    public function upload(Request $request, $id)
    {

        $rules = [
            'image' => 'required|image|mimes:jpg,jpeg,gif,png|max:8048',

        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['errors'], 400);
        }

        $fileName = $this->uploadImage($request->file('image'), 'images/Admins/profile');

        $fileupload = Admins::find($id);
        $fileupload->image = $fileName;
        $fileupload->save();
        return response()->json('Successfully added');
    }



    public function edit($id){
        $admin=Admins::find($id);

        return $admin;

        
    }

    
    public function update(Request $request,$id){
        $admin=Admins::find($id);

        $admin->name=$request->name;
        $admin->email=$request->email;
        $admin->password=$request->password;

        $admin->save();

        

        
    }

    public function get(){
        $items=Items::orderBy('id','desc')->limit(6)->get();
        return response()->json(compact('items'));
    }

}
