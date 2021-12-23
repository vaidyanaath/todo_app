import "./App.css";
import Header from "./Components/Header";
import { Grid } from "@material-ui/core";
import TodoList from "./Components/TodoList";
import SearchBar from "./Components/SearchBar";
import Calendar from "./Components/Calendar";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={3}>
          left bar
        </Grid>

        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12}>
              <TodoList />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={4}>
          right bar
          <Calendar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
