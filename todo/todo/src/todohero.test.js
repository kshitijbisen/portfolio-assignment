import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TODOHero from './components/todohero';

describe('TODOHero Component', () => {
  
  test('renders Task Done text', () => {
    render(<TODOHero todos_completed={5} total_todos={10} />);
    expect(screen.getByText(/Task Done/i)).toBeInTheDocument();
  });

  test('renders Keep it Up text', () => {
    render(<TODOHero todos_completed={5} total_todos={10} />);
    expect(screen.getByText(/Keep it Up/i)).toBeInTheDocument();
  });

  
  test('displays the correct completed and total todos', () => {
    render(<TODOHero todos_completed={5} total_todos={10} />);
    expect(screen.getByText('5/10')).toBeInTheDocument();
  });

  test('displays the correct completed and total todos when values change', () => {
    render(<TODOHero todos_completed={7} total_todos={12} />);
    expect(screen.getByText('7/12')).toBeInTheDocument();
  });
  test('displays the correct completed and total todos when values change', () => {
    render(<TODOHero todos_completed={17} total_todos={120} />);
    expect(screen.getByText('17/120')).toBeInTheDocument();
  });
  test('displays the correct completed and total todos when values change', () => {
    render(<TODOHero todos_completed={70} total_todos={120} />);
    expect(screen.getByText('70/120')).toBeInTheDocument();
  });
  test('displays the correct completed and total todos when values change', () => {
    render(<TODOHero todos_completed={77} total_todos={172} />);
    expect(screen.getByText('77/172')).toBeInTheDocument();
  });
  test('displays completed todos equal to total todos correctly', () => {
    render(<TODOHero todos_completed={10} total_todos={10} />);
    expect(screen.getByText('10/10')).toBeInTheDocument();
  });
  test('displays completed todos equal to total todos correctly', () => {
    render(<TODOHero todos_completed={100000} total_todos={100000} />);
    expect(screen.getByText('100000/100000')).toBeInTheDocument();
  });
  test('displays completed todos equal to total todos correctly', () => {
    render(<TODOHero todos_completed={99} total_todos={99} />);
    expect(screen.getByText('99/99')).toBeInTheDocument();
  });
  test('displays completed todos equal to total todos correctly', () => {
    render(<TODOHero todos_completed={999} total_todos={999} />);
    expect(screen.getByText('999/999')).toBeInTheDocument();
  });


  test('displays zero completed todos correctly', () => {
    render(<TODOHero todos_completed={0} total_todos={10} />);
    expect(screen.getByText('0/10')).toBeInTheDocument();
  });

  test('displays zero total todos correctly', () => {
    render(<TODOHero todos_completed={0} total_todos={0} />);
    expect(screen.getByText('0/0')).toBeInTheDocument();
  });
  test('displays high no. of total todos correctly', () => {
    render(<TODOHero todos_completed={0} total_todos={1000000} />);
    expect(screen.getByText('0/1000000')).toBeInTheDocument();
  });
  test('displays high no. of completed todos correctly', () => {
    render(<TODOHero todos_completed={1000000} total_todos={999999999} />);
    expect(screen.getByText('1000000/999999999')).toBeInTheDocument();
  });
  test('displays high no. of completed todos correctly', () => {
    render(<TODOHero todos_completed={1000000} total_todos={1000000} />);
    expect(screen.getByText('1000000/1000000')).toBeInTheDocument();
  });
  test('displays high no. of completed todos correctly', () => {
    render(<TODOHero todos_completed={999999999} total_todos={999999999} />);
    expect(screen.getByText('999999999/999999999')).toBeInTheDocument();
  });
});
