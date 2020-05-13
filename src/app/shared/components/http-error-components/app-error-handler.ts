import { ErrorHandler,Injectable, Inject, Injector} from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(
    @Inject(Injector) private readonly injector: Injector
) {
    super();
}

private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
}
handleError(error) { 
    
    console.log(error);
    if(error.originalError){
    console.log(error);
    this.toastrService.error(
        "Login Failed",
        "Error",
        {
          closeButton: true,
          timeOut: 5000,
          onActivateTick: true
        }
    );

    }
    else{
    this.toastrService.error(
        "Something went wrong!please try later",
        "Error",
        {
          closeButton: true,
          timeOut: 5000,
          onActivateTick: true
        }
    );
    }

}

}