<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListItem extends Model
{
    protected $fillable = [
        'list_id',
        'text'
    ];
}
