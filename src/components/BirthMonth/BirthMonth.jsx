import { useState, useEffect } from 'react';
import styles from './BirthMonth.module.css';
import { motion } from 'framer-motion';
import { Heart, Plus, CalendarDays, Trash2 } from 'lucide-react';
import { db } from '../../firebase/config';
import { collection, query, onSnapshot, addDoc, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';

const BirthMonth = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Connect to Firestore and listen for real-time updates
    const tasksRef = collection(db, 'birthMonthTasks');
    const q = query(tasksRef, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const tasksData = [];
      querySnapshot.forEach((doc) => {
        tasksData.push({ id: doc.id, ...doc.data() });
      });
      setTasks(tasksData);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching tasks: ', error);
      setLoading(false);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    try {
      await addDoc(collection(db, 'birthMonthTasks'), {
        text: newTask,
        completed: false,
        date: '',
        createdAt: new Date()
      });
      setNewTask('');
    } catch (error) {
      console.error('Error adding task: ', error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const taskRef = doc(db, 'birthMonthTasks', id);
      const task = tasks.find(t => t.id === id);
      await updateDoc(taskRef, { completed: !task.completed });
    } catch (error) {
      console.error('Error updating task: ', error);
    }
  };

  const updateDate = async (id, date) => {
    try {
      const taskRef = doc(db, 'birthMonthTasks', id);
      await updateDoc(taskRef, { date });
    } catch (error) {
      console.error('Error updating date: ', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const taskRef = doc(db, 'birthMonthTasks', id);
      await deleteDoc(taskRef);
    } catch (error) {
      console.error('Error deleting task: ', error);
    }
  };

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heart className={styles.heartIcon} />
        <h1>Mahta's Birth Month Festivities</h1>
        <Heart className={styles.heartIcon} />
      </motion.div>

      <form className={styles.addTaskForm} onSubmit={handleAddTask}>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new activity..."
          className={styles.taskInput}
        />
        <motion.button 
          type="submit" 
          className={styles.addButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Plus size={20} />
        </motion.button>
      </form>

      <div className={styles.taskList}>
        {loading ? (
          <div className={styles.loadingState}>
            <p>Loading festivities...</p>
          </div>
        ) : tasks.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No festivities added yet! Add some fun activities to celebrate Mahta's birth month!</p>
          </div>
        ) : (
          tasks.map(task => (
            <motion.div 
              key={task.id} 
              className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.taskLeft}>
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleTask(task.id)}
                  className={styles.checkbox}
                  id={`task-${task.id}`}
                />
                <label 
                  htmlFor={`task-${task.id}`} 
                  className={styles.taskText}
                >
                  {task.text}
                </label>
              </div>

              <div className={styles.taskRight}>
                <div className={styles.dateContainer}>
                  <CalendarDays size={16} className={styles.calendarIcon} />
                  <input 
                    type="date" 
                    value={task.date} 
                    onChange={(e) => updateDate(task.id, e.target.value)}
                    className={styles.dateInput}
                  />
                </div>
                <button 
                  onClick={() => deleteTask(task.id)}
                  className={styles.deleteButton}
                  aria-label="Delete task"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default BirthMonth;
