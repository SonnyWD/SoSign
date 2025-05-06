<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); 
            $table->enum('role', ['intervenant', 'eleve']); 
            $table->string('nom');
            $table->string('prenom');
            $table->string('email')->unique();
            $table->foreignId('id_signature')->nullable()->constrained('signatures')->onDelete('cascade');
            $table->timestamps();
        });
    }
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
