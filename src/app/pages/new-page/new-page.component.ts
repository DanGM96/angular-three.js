import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxThreeModule } from 'ngx-three';
import { AUGUSTUS_SCAN } from 'src/app/helpers/constants';
import { Coordinates } from 'src/app/helpers/types';
import { AllThingsService } from 'src/app/services/all-things.service';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule, NgxThreeModule],
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewPageComponent {
  public readonly augustus = AUGUSTUS_SCAN;
  public rotation: Coordinates = [0, 0, 0];
  public hideText = false;

  constructor(private readonly allThings: AllThingsService) {}

  public onRender() {
    this.rotation = this.allThings.rotate(this.rotation, [0, 0.01, 0]);
  }
}
