import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

import { BodyResponse} from '../../_models/BodyResponse';
import { ResponseService } from '../../_models/ResponseService';
import { EBillQueryServicesService } from '../../_services/e-bill-query-services.service';

@Component({ templateUrl: 'queries.component.html' })
export class QueriesComponent {
    loading = false;
    users: User[];

    bodyResponses:BodyResponse[];
    constructor(private userService: UserService, private queryService: EBillQueryServicesService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });

        this.queryService.getStatusGen()
        .subscribe(data=>{
        this.bodyResponses = data.bodyResponse;
    })
    }
}