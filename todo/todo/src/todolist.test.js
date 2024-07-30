import { render, screen } from '@testing-library/react';
import TODOList from './components/todolist';
import userEvent from '@testing-library/user-event';

const todosSample=[
    {title:"Wake up 6 AM", id:1,is_completed:false},
    {title:"Do Excercise", id:2,is_completed:true},
    {title:"Start Learning React", id:3,is_completed:false}
  ]


  const mockSetTodos = jest.fn();

  describe('TODOList Component', () => {
      test('renders "No tasks in the task list" when todos is empty', () => {
          render(<TODOList todos={[]} setTodos={mockSetTodos} />);
          expect(screen.getByText(/No tasks in the task list/i)).toBeInTheDocument();
      });
  
      test('renders the list of todos when todos is not empty', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          todosSample.forEach(todo => {
              expect(screen.getByText(todo.title)).toBeInTheDocument();
          });
      });
  
      test('renders correct number of todo items', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          expect(screen.getAllByRole('listitem')).toHaveLength(todosSample.length);
      });
  
      test('renders edit button for each todo item', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          todosSample.forEach(todo => {
              expect(screen.getByText(/Edit/i)).toBeInTheDocument();
          });
      });
  
      test('renders delete button for each todo item', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          todosSample.forEach(todo => {
              expect(screen.getByText(/Delete/i)).toBeInTheDocument();
          });
      });
  
      test('edit button switches to input when clicked', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          expect(screen.getByLabelText(/edit-todo/i)).toBeInTheDocument();
      });
  
      test('input reflects todo title when editing', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          const input = screen.getByLabelText(/edit-todo/i);
          expect(input.value).toBe(todosSample[0].title);
      });
  
      test('changing input value updates the todo title', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          const input = screen.getByLabelText(/edit-todo/i);
          userEvent.clear(input);
          userEvent.type(input, 'Updated Task 1');
          fireEvent.blur(input);
          expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function));
      });
  
      test('clicking the checkbox toggles todo completion', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          const checkbox = screen.getAllByRole('checkbox')[0];
          userEvent.click(checkbox);
          expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function));
      });
  
      test('clicking delete button removes the todo item', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Delete/i)[0]);
          expect(mockSetTodos).toHaveBeenCalledWith(expect.any(Function));
      });
  
      test('submit form updates the todo item and exits edit mode', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          const input = screen.getByLabelText(/edit-todo/i);
          userEvent.type(input, 'Updated Task 1');
          fireEvent.submit(input);
          expect(screen.queryByLabelText(/edit-todo/i)).not.toBeInTheDocument();
      });
  
      test('blur event exits edit mode', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          const input = screen.getByLabelText(/edit-todo/i);
          fireEvent.blur(input);
          expect(screen.queryByLabelText(/edit-todo/i)).not.toBeInTheDocument();
      });
  
      test('focuses on input when entering edit mode', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          userEvent.click(screen.getAllByText(/Edit/i)[0]);
          const input = screen.getByLabelText(/edit-todo/i);
          expect(input).toHaveFocus();
      });
  
      test('displays the correct number of completed tasks', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          const completedTasks = todosSample.filter(todo => todo.is_completed).length;
          expect(screen.getAllByRole('checkbox', { checked: true })).toHaveLength(completedTasks);
      });
  
      test('displays the correct number of incomplete tasks', () => {
          render(<TODOList todos={todosSample} setTodos={mockSetTodos} />);
          const incompleteTasks = todosSample.filter(todo => !todo.is_completed).length;
          expect(screen.getAllByRole('checkbox', { checked: false })).toHaveLength(incompleteTasks);
      });
  });