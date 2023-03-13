import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coordinates } from '../helpers/types';

@Injectable({
  providedIn: 'root',
})
export class AllThingsService {
  private _showStats$ = new BehaviorSubject<boolean>(false);
  public showStats$ = this._showStats$.asObservable();

  constructor() {}

  public toggleStats(): void {
    this._showStats$.next(!this._showStats$.value);
  }

  public rotate(position: Coordinates, movement: Coordinates): Coordinates {
    return [position[0] + movement[0], position[1] + movement[1], position[2] + movement[0]];
  }
}
