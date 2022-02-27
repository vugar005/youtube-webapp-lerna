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

  private getPlayerRef(): YT.Player {
    const playerFrameId = (this.webApi.window as any)[WindowEnum.VIDEO_FRAME_ID];
    return (this.webApi.window.YT as any).get(playerFrameId) as YT.Player;
  }

  private getIframeRef(): HTMLElement | null {
    const playerFrameId = (this.webApi.window as any)[WindowEnum.VIDEO_FRAME_ID];
    return document.getElementById(playerFrameId);
  }

  private seekVideoBy(seconds: number, allowSeekAhead = true): void {
    const playerRef = this.getPlayerRef();
    const currentTime = playerRef.getCurrentTime();
    const seekTo = currentTime + seconds;
    playerRef.seekTo(seekTo, allowSeekAhead);
  }

  private togglePlayPause(): void {
    console.log('toggle play pause');
    const playerRef = this.getPlayerRef();
    const playerState = playerRef.getPlayerState();
    if (playerState === YT.PlayerState.PLAYING) {
      playerRef.pauseVideo();
    } else {
      playerRef.playVideo();
    }
  }

  private toggleMute(): void {
    const playerRef = this.getPlayerRef();
    const isMuted = playerRef.isMuted();
    if (isMuted) {
      playerRef.unMute();
    } else {
      playerRef.mute();
    }
  }

  private toggleFullScreen(): void {
    const iframeRef = this.getIframeRef();
    if (!this.isFullScreen) {
      iframeRef?.requestFullscreen();
    } else {
      const documentRef = this.webApi.document;
      documentRef?.exitFullscreen();
    }
  }

  private get isFullScreen(): boolean {
    const documentRef = this.webApi.document;
    return (
      (documentRef as any).webkitIsFullScreen || //Webkit browsers
      (documentRef as any).mozFullScreen
    ); // Firefox
  }
}
