import { Controller, Get, Query } from '@nestjs/common';
import { YoutubeApiService } from './youtbe-api.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeApiService: YoutubeApiService) {}

  @Get('searchVideo')
  async searchVideos(@Query() query) {
    const { q } = query;
    const results = await this.youtubeApiService.searchVideoResults(q.trim());
    return results;
  }
}
