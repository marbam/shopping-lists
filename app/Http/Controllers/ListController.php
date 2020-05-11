<?php

namespace App\Http\Controllers;

use App\ShoppingList;
use Illuminate\Http\Request;

class ListController extends Controller
{
    public function getLists() {
        return ShoppingList::with('items')->get();
    }
}
