import { Pause, Play, Trash2 } from "lucide-react";
import { Button, Input } from "./components";
import styles from "./styles.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCurrency } from "./utils/formatCurrency";
import { formatDate } from "./utils/formatDate";
import { Job } from "./types/Job";
import { currencyMask } from "./utils/currencyMask";

const schema = z.object({
  name: z.string().max(25),
  pricePerHour: z
    .string()
    .min(4)
    .max(10)
    .transform((value) => +value.replace(/\D/g, "") / 100),
});
type FormProps = z.infer<typeof schema>;

export function App() {
  const [jobs, setJobs] = useState<Job[]>([]);

  const [openForm, setOpenForm] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<FormProps>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      pricePerHour: 0.0,
    },
  });

  function onSubmit(data: FormProps) {
    setJobs((prev) => [
      ...prev,
      {
        id: window.crypto.randomUUID(),
        name: data.name,
        pricePerHour: data.pricePerHour,
        totalValue: 0,
        workedTime: new Date().getDate(),
        working: false,
      },
    ]);

    reset();
  }

  return (
    <main className={styles.container}>
      <div>
        <header>
          <h1>work time calculation</h1>
          <Button
            variant="secondary"
            onClick={() => setOpenForm(true)}
          >
            Add new work
          </Button>
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
            {jobs.map((job) => {
              return (
                <tr key={job.id}>
                  <td>{job.name}</td>
                  <td>{formatCurrency(+job.pricePerHour)}</td>
                  <td>{formatDate(job.workedTime)}</td>
                  <td>{formatCurrency(+job.totalValue)}</td>
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
              );
            })}
          </tbody>
        </table>
      </div>
      {openForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            {...register("name")}
          />
          <Input
            label="Price per hour"
            maxLength={10}
            value={currencyMask(watch("pricePerHour").toString())}
            {...register("pricePerHour")}
          />
          <Button variant="primary">Add</Button>
        </form>
      )}
    </main>
  );
}
