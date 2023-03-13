import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgxThreeModule } from 'ngx-three';
import { TechCeoComponent } from 'src/app/components/tech-ceo/tech-ceo.component';
import { TextComponent } from 'src/app/components/text/text.component';
import { AUGUSTUS_SCAN, SOCIALS } from 'src/app/helpers/constants';
import { Coordinates } from 'src/app/helpers/types';
import { AllThingsService } from 'src/app/services/all-things.service';

@Component({
  selector: 'app-simple-page',
  standalone: true,
  imports: [CommonModule, NgxThreeModule, TechCeoComponent, TextComponent],
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimplePageComponent {
  public readonly augustus = AUGUSTUS_SCAN;
  public readonly socials = SOCIALS;
  public rotation: Coordinates = [0, 0, 0];

  constructor(public readonly allThings: AllThingsService) {}

  public onRender(): void {
    this.rotation = this.allThings.rotate(this.rotation, [0, 0.005, 0]);
  }
}
