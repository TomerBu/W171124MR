import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import api_router from './routes/api.js';
import path from 'path';

const app = express();
app.use(cors({
    origin: '*', 
}));

dotenv.config();
const PORT = process.env.NODE_PORT || 5000;

app.use(express.json());
app.use('/api', api_router);

//========= SPA Fallback =========//

//c:/users/tomer/W17/dist
const dist_folder = path.join(process.cwd(), 'dist');

// serve static files
// localhost:5000/vite.svg
// localhost:5000/assets/index-0c1f3a2b.js
app.use(express.static(dist_folder));

// fallback for all other routes:
// let react router handle all other routes:
// localhost:5000/hi -> index.html-> react router -> /hi
app.use((req, res)=>{
    res.sendFile(
        path.join(dist_folder, 'index.html')
    );
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


//C.tCv&@Ke#8k#xM

