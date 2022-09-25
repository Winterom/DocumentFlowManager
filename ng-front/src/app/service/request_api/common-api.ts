import {HttpHeaders} from "@angular/common/http";

export class CommonApi {
  private _httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private _API_ROOT = "http://localhost:5555/";

  get httpOptions(): { headers: HttpHeaders } {
    return this._httpOptions;
  }

  get API_ROOT(): string {
    return this._API_ROOT;
  }
}
