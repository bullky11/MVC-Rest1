import DataService from "../Model/DataService.js";
 class Controller{
    constructor(){
        this.DataService=new DataService();
        this.DataService.getData("adatok.json",this.megjelenit);
    }
    megjelenit(list){
        console.log(list)
    }
}
export default Controller;