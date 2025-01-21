import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { VideoData } from '$lib/data/videoData';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
    const videoIndex = parseInt(params.id);
    
    if (isNaN(videoIndex) || videoIndex < 0 || videoIndex >= VideoData.length) {
        throw error(404, 'Video not found');
    }

    return {
        video: VideoData[videoIndex]
    };
};