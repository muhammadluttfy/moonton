<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => "Muhammad Lutfi",
            'email' => 'muhammadlutfi3101@gmail.com',
            'password' => bcrypt('password')
        ]);

        $admin->assignRole('admin');
    }
}
