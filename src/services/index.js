import supabase from './supabase.js';

export async function getVideos() {
  let { data: videos, error } = await supabase
  .from('videos')
  .select('*, user:users(username, avatar)')

  if (error) {
    console.error(error.message)
    return []
  }

  return videos
}