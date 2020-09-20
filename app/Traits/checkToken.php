<?php

namespace App\Traits;

use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

/**
 * 
 */
trait checkToken 
{
    public function checkToken(){
        try {
            if (! $admins = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['admins_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }

        return $admins;
    }
}