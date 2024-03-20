import app from './app.ts';

// import { config } from './config.ts';

const port = 3000;


app.listen(port, () => {
  console.log(`server running on ${port}`);
});
