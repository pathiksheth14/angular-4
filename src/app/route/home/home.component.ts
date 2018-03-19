import { Component } from "@angular/core";

@Component({
    selector: "tyn-home",
    templateUrl: './home.component.html',
    styleUrls: [ "./home.component.scss" ]
})
export class HomeComponent {
    public model = [{text1: "test", text2: "test"}];
   
    public add = () =>{
        this.model.push({text1: "new", text2: "new"});

        console.log(this.model);
    }

}