import { Pause, Play, Trash2 } from "lucide-react";
import { Button, Input } from "./components";
import styles from "./styles.module.scss";

export function App() {
  return (
    <main className={styles.container}>
      <div>
        <header>
          <h1>work time calculation</h1>
          <Button variant="secondary">Add new work</Button>
        </header>
        <div className={styles.container__search__bar}>
          <Input placeholder="search a work" />
          <Button variant="primary">Search</Button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Work name</th>
              <th>Price per hour</th>
              <th>Working time</th>
              <th>Total value</th>
              <th>Tools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kanban</td>
              <td>4.50</td>
              <td>2</td>
              <td>9.00</td>
              <td>
                <Button variant="secondary">
                  <Pause size={16} />
                </Button>
                <Button variant="success">
                  <Play size={16} />
                </Button>
                <Button variant="danger">
                  <Trash2 size={16} />
                </Button>
              </td>
            </tr>
            <tr>
              <td>Kanban</td>
              <td>4.50</td>
              <td>2</td>
              <td>9.00</td>
              <td>
                <Button variant="secondary">
                  <Pause size={16} />
                </Button>
                <Button variant="success">
                  <Play size={16} />
                </Button>
                <Button variant="danger">
                  <Trash2 size={16} />
                </Button>
              </td>
            </tr>
            <tr>
              <td>Kanban</td>
              <td>4.50</td>
              <td>2</td>
              <td>9.00</td>
              <td>
                <Button variant="secondary">
                  <Pause size={16} />
                </Button>
                <Button variant="success">
                  <Play size={16} />
                </Button>
                <Button variant="danger">
                  <Trash2 size={16} />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
