<?php

use Illuminate\Database\Seeder;
use App\ShoppingList;
use App\ListItem;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $l = ShoppingList::create(['trip_date' => '2020-06-13']);
        ListItem::create([
            'list_id' => $l->id,
            'text' => 'cake'
        ]);
        ListItem::create([
            'list_id' => $l->id,
            'text' => 'pimms'
        ]);

        $l = ShoppingList::create(['trip_date' => '2020-06-20']);
        ListItem::create([
            'list_id' => $l->id,
            'text' => 'test'
        ]);
        ListItem::create([
            'list_id' => $l->id,
            'text' => 'bananas'
        ]);

        // $this->call(UserSeeder::class);
    }
}
