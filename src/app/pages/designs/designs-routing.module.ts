import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DesignsComponent } from "./designs.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
    {
        path: "",
        component: DesignsComponent
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DesignsRoutingModule { }  