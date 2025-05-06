<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    use HasFactory;


    protected $fillable = [
        'id_user',   
        'id_seance', 
        'statut',
        'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function seance()
    {
        return $this->belongsTo(Seance::class, 'id_seance');
    }
}
