<?php

namespace Database\Seeders;

use App\Models\Categoria;
use App\Models\Producto;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Crear 10 categorías
        Categoria::factory(10)->create()->each(function ($categoria) {
            // Crear 5 productos para cada categoría
            Producto::factory(5)->create(['categoria_id' => $categoria->id]);
        });
    }
}
