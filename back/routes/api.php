<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SignatureController;

Route::post('/signatures', [SignatureController::class, 'store']);
Route::get('/seances/{id}/signatures', [SignatureController::class, 'listBySeance']);
