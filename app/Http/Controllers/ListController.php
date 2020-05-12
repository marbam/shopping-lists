<?php

namespace App\Http\Controllers;

use App\ShoppingList;
use App\ListItem;
use Illuminate\Http\Request;

class ListController extends Controller
{
    public function getLists() {
        return ShoppingList::with('items')->get();
    }

    public function saveList(Request $request) {

        $data = $request->all();

        $list = ShoppingList::create([
            'trip_date' => $data[0],
        ]);

        foreach($data[1] as $item) {
            ListItem::insert([
                'list_id' => $list->id,
                'text' => $item
            ]);
        }
    }
}
