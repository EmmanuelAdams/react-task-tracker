import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
        "id": 1,
        "text": "Emma Birthday",
        "day": "Oct 12th at 7:00am",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Football Practise",
        "day": "Mar 19th at 6:00pm",
        "reminder": true
      },
      {
        "text": "Dentist Appoinment2",
        "day": "Feb 21st at 7:30am",
        "reminder": true,
        "id": 4
      }
    ])


    // // Fetch Task
    // const fetchTask = (tasks) => {
    //   // use any of javascript array search methods to filter the array by id: indexOf, sort, find, filter, search, includes etc.
    
    //  return tasks

    // }

    // Add Task
    const addTask = (task) => {
       // use any of javascript array addition methods to add tasks to array: unshift and push
       const id = Math.floor(Math.random() * 100) + 1
       const newTask = { id, ...task }
       setTasks([...tasks, newTask]) 
      
    }

    // Delete Task
    const deleteTask = async (id) => {
      // Use any of the javascript direct or indirect delete methods: pop, shift, delete
      setTasks(tasks.filter((task) => task.id !== id))
      tasks.pop()


    }

    // Toggle Reminder
    // const toggleReminder = async (id) => {
    //   const taskToToggle = await fetchTask(id)
    //   const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

     const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
        )
      )
}
      
        // use any of javascript array search methods to filter the array by id: indexOf, sort, find, filter, search, includes, map, access array element by index etc. to manipulate element data 
  
  return (
    <Router>
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
      <Route path='/' exact render={(props) => (
        <>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks To Show'}
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
