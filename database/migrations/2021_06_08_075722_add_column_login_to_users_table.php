<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnLoginToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('login')->nullable()->after('name');
            $table->string('token_for_boost_note')->nullable()->after('remember_token');
            $table->string('token_for_firebase')->nullable()->after('token_for_boost_note');
            $table->dropColumn('name');
            $table->dropColumn('email_verified_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('login');
            $table->dropColumn('token_for_boost_note');
            $table->dropColumn('token_for_firebase');
            $table->string('name')->after('id');
            $table->string('email_verified_at')->after('email');
        });
    }
}
