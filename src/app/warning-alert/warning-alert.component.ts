import { Comment } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
    <p class="text-danger fw-bold fs-3 border border-2 border-danger d-flex text-center justify-content-center rounded rounded-4 p-4" style="max-width: 450px;"> This is a warning, you are in danger!</p>
    `
})

export class WarningAlertComponent {

}