
import * as express from "express";
import * as bodyParser from "body-parser";
// Importar rutas.
import { Routes } from "./routes/routes";
 
class App {
 
    public app: express.Application;
    // Instanciar el objeto Routes.
    public routePrv: Routes = new Routes();
     
    constructor() {
        this.app = express();
        this.config();
        // Asignarle a la propiedad routes de la instancia del objeto Routes a la aplicación
        this.routePrv.routes(this.app);     
    }
 
    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
} 
export default new App().app;
