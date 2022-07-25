import express from 'express';
import { valdiateAdminRole } from './middlewares/validateAdminRole';
import { validateToken } from './middlewares/validateToken';
import { usersRouter } from './routes/admin/usersRouter';
import { tasksRouter } from './routes/tasksRouter';

const app = express();

app.use('/api/tasks', validateToken, tasksRouter);
app.use('/api/admin/users', validateToken, valdiateAdminRole, usersRouter);

app.listen(5000, () => {
  console.log('server started at port 5000!');
});
