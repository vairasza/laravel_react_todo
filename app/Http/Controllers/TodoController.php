<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{

    public function index()
    {
        $todos = Todo::get();
        return $todos;
    }

    public function show(Request $request)
    {
        $todoId = $request->route('id');
        $todo = Todo::findOrFail($todoId);

        return $todo;
    }

    public function update(Request $request)
    {
        $todoId = $request->route('id');
        $todo = Todo::findOrFail($todoId);
        $todo->text = $request->input('text');
        $todo->save();
        
        return $todo;
    }

    public function delete(Request $request)
    {
        $todoId = $request->route('id');
        $todo = Todo::findOrFail($todoId);
        $todo->delete();
        
        return $this->index();
    }

    public function store(Request $request)
    {
        $todo = new Todo;
        $todo->text = $request->input('text');
        $todo->completed = 0;
        $todo->save();
        
        return $todo;
    }

}