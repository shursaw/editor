
import styles from './App.module.css';
import CodeBar from './components/CodeBar/CodeBar';
import Header from './components/Header/Header';
import Preview from './components/Preview/Preview';
import { EditorProvider } from './context/contex';

function App() {
  return (
    <EditorProvider>
     
        <CodeBar/>
        <div className={styles.main}>
          <Header/>
          <Preview/>
        </div>      
    </EditorProvider>
  );
}

export default App;
