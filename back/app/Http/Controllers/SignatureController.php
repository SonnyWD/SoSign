<?php

namespace App\Http\Controllers;

use App\Models\Signature;
use App\Models\Seance;
use Illuminate\Http\Request;

class SignatureController extends Controller
{

    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_user' => 'required|exists:users,id',  
            'id_seance' => 'required|exists:seances,id', 
            'statut' => 'required|boolean', 
            'date' => 'required|date',  
        ]);

        $signature = Signature::create([
            'id_user' => $validated['id_user'],
            'id_seance' => $validated['id_seance'],
            'statut' => $validated['statut'],
            'date' => $validated['date'],
        ]);

        return response()->json([
            'message' => 'Signature created successfully.',
            'data' => $signature,
        ], 201);
    }

    public function listBySeance($id)
    {
        $signatures = Signature::where('id_seance', $id)->get();

        if ($signatures->isEmpty()) {
            return response()->json([
                'message' => 'No signatures found for this seance.',
            ], 404);
        }

        return response()->json([
            'data' => $signatures,
        ]);
    }
}
