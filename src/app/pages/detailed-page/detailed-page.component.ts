import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgxThreeModule, ThCanvas } from 'ngx-three';
import { TechCeoComponent } from 'src/app/components/tech-ceo/tech-ceo.component';
import { TextComponent } from 'src/app/components/text/text.component';
import { AUGUSTUS_SCAN, SOCIALS } from 'src/app/helpers/constants';
import { Coordinates } from 'src/app/helpers/types';
import { AllThingsService } from 'src/app/services/all-things.service';

@Component({
  selector: 'app-detailed-page',
  standalone: true,
  imports: [CommonModule, NgxThreeModule, TechCeoComponent, TextComponent],
  templateUrl: './detailed-page.component.html',
  styleUrls: ['./detailed-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailedPageComponent implements OnInit {
  public readonly augustus = AUGUSTUS_SCAN;
  public readonly socials = SOCIALS;
  public readonly pointLight = false;
  public rotation: Coordinates = [0, 0, 0];
  public sliderPosition = 0;

  private _controlsEnabled = true;

  @ViewChild('slider', { static: true })
  public slider?: ElementRef;

  @ViewChild('canvas', { static: true })
  public canvas?: ThCanvas;

  @HostListener('window:pointermove', ['$event'])
  public onPointerMove(e: PointerEvent): void {
    if (this._controlsEnabled || !this.canvas || !this.canvas.rendererCanvas) {
      return;
    }

    if (!this.slider || e.isPrimary === false) {
      return;
    }

    const canvasElement = this.canvas.rendererCanvas.nativeElement;
    const canvasRect = canvasElement.getBoundingClientRect();

    this.sliderPosition = Math.max(canvasRect.left, Math.min(canvasRect.right, e.pageX)) - canvasRect.left;
    this.slider.nativeElement.style.left = this.sliderPosition - this.slider.nativeElement.offsetWidth / 2 + 'px';
  }

  @HostListener('window:pointerup')
  public onPointerUp(): void {
    this._controlsEnabled = true;
  }

  constructor(public readonly allThings: AllThingsService) {}

  public ngOnInit(): void {
    if (!this.slider || !this.canvas) {
      return;
    }
    this.slider.nativeElement.style.touchAction = 'none'; // disable touch scroll
    this.sliderPosition = (this.canvas.rendererCanvas?.nativeElement.clientWidth ?? 0) / 2;
  }

  public onSliderPointerDown(e: PointerEvent): void {
    if (e.isPrimary === false) {
      return;
    }

    this._controlsEnabled = false;
  }

  public onRender(): void {
    // rotation does not work on multiple scenes
    // this.rotation = this.allThings.rotate(this.rotation, [0, 0.005, 0]);
  }
}
