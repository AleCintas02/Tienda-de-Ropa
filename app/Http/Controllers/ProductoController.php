<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductoController extends Controller
{
    public function index(Request $request)
    {
        $perPage = 10; // Número de productos por página
        $categoriaId = $request->input('categoria_id'); // Obtener el ID de la categoría desde la solicitud

        if ($categoriaId) {
            $productos = Producto::where('categoria_id', $categoriaId)->paginate($perPage);
        } else {
            $productos = Producto::paginate($perPage);
        }

        return response()->json($productos);
    }
    
}
