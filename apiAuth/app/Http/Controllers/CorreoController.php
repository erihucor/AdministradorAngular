<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
class CorreoController extends Controller
{
	
    public function contact(Request $request){
        $subject = "Solicitud informacion";
        $for = "ericksitocg@gmail.com";
        Mail::send('email',$request->all(), function($msj) use($subject,$for){
            $msj->from("informacionDMatute@gmail.com","Cliente");
            $msj->subject($subject);
            $msj->to($for);
        });
        return redirect()->back();
    }
}
