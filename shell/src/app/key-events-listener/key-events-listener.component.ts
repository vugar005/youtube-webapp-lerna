import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { WebApiService, WindowEnum } from '@youtube/common-ui';
@Component({
  selector: 'yt-key-events-listener',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyEventsListenerComponent {
  constructor(private webApi: WebApiService) {}

  @HostListener('window:keydown.k', ['$event'])
  public onKeyDownK(): void {
    this.togglePlayPause();
  }

  @HostListener('window:keydown.j', ['$event'])
  public onKeyDownJ(): void {
    this.seekVideoBy(-10);
  }

  @HostListener('window:keydown.l', ['$event'])
  public onKeyDownL(): void {
    this.seekVideoBy(10);
  }

  @HostListener('window:keydown.m', ['$event'])
  public onKeyDownM(): void {
    this.toggleMute();
  }

  @HostListener('window:keydown.f', ['$event'])
  public onKeyDownF(): void {
    this.toggleFullScreen();
  }

  private get playerRef(): YT.Player | null {
    const playerFrameId = (this.webApi.window as any)[WindowEnum.CURRENT_VIDEO_FRAME_ID];
    return (this.webApi.window.YT as any).get(playerFrameId) as YT.Player;
  }

  private get iFrameRef(): HTMLElement | null {
    const playerFrameId = (this.webApi.window as any)[WindowEnum.CURRENT_VIDEO_FRAME_ID];
    return document.getElementById(playerFrameId);
  }

  private seekVideoBy(seconds: number, allowSeekAhead = true): void {
    if (!this.playerRef) {
      return;
    }
    const currentTime = this.playerRef.getCurrentTime();
    const seekTo = currentTime + seconds;
    this.playerRef.seekTo(seekTo, allowSeekAhead);
  }

  private togglePlayPause(): void {
    if (!this.playerRef) {
      return;
    }
    const playerState = this.playerRef.getPlayerState();
    if (playerState === YT.PlayerState.PLAYING) {
      this.playerRef.pauseVideo();
    } else {
      this.playerRef.playVideo();
    }
  }

  private toggleMute(): void {
    if (!this.playerRef) {
      return;
    }
    const isMuted = this.playerRef.isMuted();
    if (isMuted) {
      this.playerRef.unMute();
    } else {
      this.playerRef.mute();
    }
  }

  private toggleFullScreen(): void {
    if (!this.iFrameRef) {
      return;
    }
    if (!this.isFullScreen) {
      this.iFrameRef?.requestFullscreen();
    } else {
      const documentRef = this.webApi.document;
      documentRef?.exitFullscreen();
    }
  }

  private get isFullScreen(): boolean {
    const documentRef = this.webApi.document;
    return (documentRef as any).webkitIsFullScreen || (documentRef as any).mozFullScreen;
  }
}
