import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    return (
        <React.Fragment>
    
          <TodoCounter 
            // completed={completedTodos} 
            // total={totalTodos}
          />
          <TodoSearch 
            // searchValue={searchValue}
            // setSearchValue={setSearchValue}
          />
    
          <TodoContext.Consumer>
            {({
              loading,
              error,
              searchedTodos,
              completeTodo,
              deleteTodo,
            }) => (
              <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

                {searchedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
            )}
          </TodoContext.Consumer>
    
          <CreateTodoButton />
    
        </React.Fragment>
      );
}

export { AppUI };