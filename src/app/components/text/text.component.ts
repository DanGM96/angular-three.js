import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxThreeModule } from 'ngx-three';
import { FONT_PATH } from 'src/app/helpers/constants';
import { Social } from 'src/app/helpers/types';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, NgxThreeModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  public readonly font = new FontLoader().loadAsync(FONT_PATH);

  constructor(private readonly _router: Router) {}
  @Input()
  public social!: Social;

  public openSite(site: string): void {
    switch (site) {
      case 'youtube':
        window.open('https://www.youtube.com/@LucasPaganiniWeb', '_blank');
        break;
      case 'spotify':
        window.open('https://open.spotify.com/show/6ghYCZ2j6Wqz7O0QBRFqZd', '_blank');
        break;
      default:
        // Literally nothing
        break;
    }
  }
}
