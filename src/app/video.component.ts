import { Component } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  videos: any[] = [
    {
      title: 'Video 1',
      thumbnail: 'assets/image/V-img1.PNG',
      videoSource: 'assets/image/video1.mp4'
    },
    {
      title: 'Video 2',
      thumbnail: 'assets/image/V-img3.PNG',
      videoSource: 'assets/image/video4.mp4'
    },
    {
      title: 'Video 3',
      thumbnail: 'assets/image/V-img5.PNG',
      videoSource: 'assets/image/video6.mp4'
    }
  ];
}
