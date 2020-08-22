<?php

namespace App\Http\Controllers;


use App\Models\Admins;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
//use JWTAuth;
use Tymon\JWTAuth\Facades\JWTAuth;

use Tymon\JWTAuth\Exceptions\JWTException;



class Adminscontroller extends Controller
{   

    public function register(Request $request)
    {
        $rules=[
            'name' => 'required|string|max:25|min:5',
            'email' => 'required|string|email|max:100|min:15|unique:admins',
            'password' => 'required|string|min:8|max:100', 
        ];

        

        $validator = Validator::make($request->json()->all() ,$rules  );

        
        if($validator->fails()){
            return response()->json(['errors'], 400);
        }


        $admins = Admins::create([
            'name' => $request->json()->get('name'),
            'email' => $request->json()->get('email'),
            'password' => Hash::make($request->json()->get('password')),
        ]);

        $token = JWTAuth::fromuser($admins);

        $success='you signed up successfully';

        return response()->json(compact('admins','token','success'),201);
    }

    
    
    public function login(Request $request)
    {
        $credentials = $request->json()->all();

        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json( compact('token') );
    }

    

    public function getAuthenticatedadmins()
    {
        try {
            if (! $admins = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['admins_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('admins'));
    }

    


    






}