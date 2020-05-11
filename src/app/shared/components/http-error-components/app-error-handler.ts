import { ErrorHandler,Injectable, Inject, Injector} from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor(
    @Inject(Injector) private readonly injector: Injector
) {
    super();
}
handleError(error) {
    console.log(error);
    this.toastrService.error("Something went wrong. Try again!", "ERROR", { onActivateTick: true })
}

private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
}

}

