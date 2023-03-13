import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AllThingsService } from 'src/app/services/all-things.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public readonly routes = [
    { path: 'new', name: 'New' },
    { path: 'simple', name: 'Simple' },
    { path: 'detailed', name: 'Detailed' },
    { path: 'html', name: 'HTML' },
  ];

  constructor(private readonly _router: Router, public readonly allThings: AllThingsService) {}

  public isRouteImplemented(path: string): boolean {
    const allURL = this._router.config.map(route => route.path);
    return !allURL.includes(path);
  }
}
