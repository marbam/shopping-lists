<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ShoppingList extends Model
{
    protected $fillable = [
        'trip_date'
    ];

    protected $table = 'lists';

    public function items() {
        return $this->hasMany('App\ListItem', 'list_id', 'id');
    }
}
